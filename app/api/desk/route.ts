import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/src/lib/supabase-admin";
import { checkPassword, clearedCookie, hasValidSession, sessionCookie } from "@/lib/desk-auth";

// Single private endpoint behind the password gate: POST { op, ... }.
// Reads and deletes chat logs, manages leads, and builds the funnel report.

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const NO_STORE = { "Cache-Control": "no-store" };
const json = (body: unknown, status = 200, extra: Record<string, string> = {}) =>
  NextResponse.json(body, { status, headers: { ...NO_STORE, ...extra } });
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

type Row = {
  visitor_id: string; session_id: string | null; event: string; path: string | null; host: string | null;
  props: Record<string, unknown> | null; device: string | null; country: string | null;
  referrer: string | null; utm_source: string | null; created_at: string;
};

const FUNNEL_EVENTS = [
  "page_view", "cta_click", "get_started_industry", "get_started_step", "get_started_continue", "get_started_skip",
  "signup_started", "signup_invalid", "signup_submit", "signup_success", "signup_error",
  "onboarding_step", "onboarding_complete", "onboarding_no_session", "onboarding_dashboard_click", "chat_open", "chat_lead",
];
const DASH_HOST = "dashboard.knoxified.org";

// Loads events of the given kinds (optionally one page only). PostgREST returns at most 1000 rows per request.
async function loadEvents(days: number, events: string[], opts: { path?: string; marketingOnly?: boolean } = {}): Promise<{ rows: Row[]; capped: boolean }> {
  const since = new Date(Date.now() - days * 86400000).toISOString();
  const PAGE = 1000, CAP = 30000;
  const rows: Row[] = [];
  for (let from = 0; from < CAP; from += PAGE) {
    let q = supabaseAdmin
      .from("site_events")
      .select("visitor_id,session_id,event,path,host,props,device,country,referrer,utm_source,created_at")
      .gte("created_at", since)
      .in("event", events)
      .order("created_at", { ascending: true })
      .range(from, from + PAGE - 1);
    if (opts.path) q = q.eq("path", opts.path);
    if (opts.marketingOnly) q = q.neq("host", DASH_HOST);
    const { data, error } = await q;
    if (error) throw new Error(error.message);
    rows.push(...((data as Row[]) ?? []));
    if (!data || data.length < PAGE) return { rows, capped: false };
  }
  return { rows, capped: true };
}

const top = (m: Map<string, number>, n = 8) =>
  [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, n).map(([label, count]) => ({ label, count }));
const bump = (m: Map<string, number>, k: string) => m.set(k, (m.get(k) ?? 0) + 1);

function buildFunnel(rows: Row[]) {
  const DASH = "dashboard.knoxified.org";
  const visitors = (pred: (r: Row) => boolean) => new Set(rows.filter(pred).map((r) => r.visitor_id)).size;
  const pv = (p: string) => (r: Row) => r.event === "page_view" && r.host !== DASH && (r.path ?? "").startsWith(p);
  const ev = (e: string) => (r: Row) => r.event === e;

  const stages = [
    ["Visited the site", (r: Row) => r.event === "page_view" && r.host !== DASH],
    ["Clicked a Get Started / Create Account button", (r: Row) => r.event === "cta_click" && /^\/(get-started|create-account)/.test(String(r.props?.href ?? ""))],
    ["Opened Get Started", pv("/get-started")],
    ["Picked an industry", ev("get_started_industry")],
    ["Opened Create Account", pv("/create-account")],
    ["Started typing the form", ev("signup_started")],
    ["Submitted the form", ev("signup_submit")],
    ["Account created", ev("signup_success")],
    ["Reached onboarding", pv("/onboarding")],
    ["Finished onboarding", ev("onboarding_complete")],
    ["Clicked Go to dashboard", ev("onboarding_dashboard_click")],
    ["Saw the dashboard login page", (r: Row) => r.event === "page_view" && r.host === DASH && (r.path ?? "").startsWith("/login")],
    ["Reached the dashboard signed in", (r: Row) => r.event === "page_view" && r.host === DASH && !(r.path ?? "").startsWith("/login")],
  ].map(([label, pred]) => ({ label: label as string, visitors: visitors(pred as (r: Row) => boolean) }));

  const errors = new Map<string, number>();
  rows.filter(ev("signup_error")).forEach((r) => bump(errors, String(r.props?.message ?? "unknown")));
  const invalid = new Map<string, number>();
  rows.filter(ev("signup_invalid")).forEach((r) => {
    const p = r.props ?? {};
    if (p.min_length === false) bump(invalid, "password too short");
    if (p.number === false) bump(invalid, "no number");
    if (p.special === false) bump(invalid, "no special character");
    if (p.match === false) bump(invalid, "passwords do not match");
  });
  const steps = new Map<string, Set<string>>();
  rows.filter(ev("onboarding_step")).forEach((r) => {
    const k = `Step ${r.props?.step ?? "?"}`;
    if (!steps.has(k)) steps.set(k, new Set());
    steps.get(k)!.add(r.visitor_id);
  });

  // First page view of every session = landing page and traffic source.
  const seen = new Set<string>();
  const landing = new Map<string, number>(), sources = new Map<string, number>();
  const device = new Map<string, number>(), country = new Map<string, number>();
  for (const r of rows) {
    if (r.event !== "page_view" || r.host === DASH || !r.session_id || seen.has(r.session_id)) continue;
    seen.add(r.session_id);
    bump(landing, r.path ?? "/");
    let src = r.utm_source || "Direct";
    if (!r.utm_source && r.referrer) { try { src = new URL(r.referrer).hostname.replace(/^www\./, ""); } catch { src = "Other"; } }
    bump(sources, src);
    bump(device, r.device ?? "unknown");
    bump(country, r.country ?? "unknown");
  }

  return {
    totalVisitors: new Set(rows.map((r) => r.visitor_id)).size,
    totalEvents: rows.length,
    stages,
    signupErrors: top(errors),
    passwordProblems: top(invalid),
    noSession: rows.filter(ev("onboarding_no_session")).length,
    onboardingSteps: [...steps.entries()].map(([label, s]) => ({ label, count: s.size })).sort((a, b) => a.label.localeCompare(b.label, undefined, { numeric: true })),
    landing: top(landing), sources: top(sources), devices: top(device), countries: top(country),
  };
}

const normPath = (p?: string | null) => {
  const x = (p ?? "/").split("?")[0];
  return x.length > 1 ? x.replace(/\/$/, "") : x;
};
const median = (n: number[]) => {
  if (!n.length) return 0;
  const s = [...n].sort((a, b) => a - b);
  return s[Math.floor(s.length / 2)];
};

// Per-page views, time on page, entries, exits and bounces. Rows must be in time order.
function buildPages(rows: Row[]) {
  type P = { views: number; visitors: Set<string>; secs: number[]; entries: number; exits: number; bounces: number };
  const pages = new Map<string, P>();
  const get = (p: string) => {
    let v = pages.get(p);
    if (!v) { v = { views: 0, visitors: new Set(), secs: [], entries: 0, exits: 0, bounces: 0 }; pages.set(p, v); }
    return v;
  };
  const sessions = new Map<string, string[]>();
  for (const r of rows) {
    const p = normPath(r.path);
    if (r.event === "page_view") {
      const g = get(p);
      g.views++; g.visitors.add(r.visitor_id);
      const key = r.session_id ?? r.visitor_id;
      if (!sessions.has(key)) sessions.set(key, []);
      sessions.get(key)!.push(p);
    } else if (r.event === "page_leave") {
      const sec = Number(r.props?.seconds);
      if (Number.isFinite(sec) && sec > 0) get(p).secs.push(sec);
    }
  }
  let bounced = 0;
  for (const list of sessions.values()) {
    get(list[0]).entries++;
    get(list[list.length - 1]).exits++;
    if (list.length === 1) { get(list[0]).bounces++; bounced++; }
  }
  return {
    sessions: sessions.size,
    bounceRate: sessions.size ? Math.round((bounced / sessions.size) * 100) : 0,
    pages: [...pages.entries()]
      .map(([path, g]) => ({
        path, views: g.views, visitors: g.visitors.size, medianSeconds: median(g.secs),
        entries: g.entries, exitRate: g.views ? Math.round((g.exits / g.views) * 100) : 0,
      }))
      .sort((a, b) => b.views - a.views).slice(0, 60),
  };
}

// How far down one page people get, and which headings they actually reach.
function buildPageDetail(rows: Row[]) {
  const viewers = new Set(rows.filter((r) => r.event === "page_view").map((r) => r.visitor_id));
  const depthSets = new Map<number, Set<string>>([[25, new Set()], [50, new Set()], [75, new Set()], [100, new Set()]]);
  const sections = new Map<string, { idx: number; v: Set<string> }>();
  for (const r of rows) {
    if (r.event === "scroll_depth") depthSets.get(Number(r.props?.depth))?.add(r.visitor_id);
    if (r.event === "section_view") {
      const label = String(r.props?.section ?? "");
      if (!label) continue;
      const cur = sections.get(label) ?? { idx: Number(r.props?.idx ?? 0), v: new Set<string>() };
      cur.v.add(r.visitor_id);
      sections.set(label, cur);
    }
  }
  const pct = (n: number) => (viewers.size ? Math.round((n / viewers.size) * 100) : 0);
  return {
    viewers: viewers.size,
    depths: [...depthSets.entries()].map(([d, set]) => ({ label: `${d}% down the page`, count: set.size, pct: pct(set.size) })),
    sections: [...sections.entries()].sort((a, b) => a[1].idx - b[1].idx).map(([label, x]) => ({ label, count: x.v.size, pct: pct(x.v.size) })),
  };
}


export async function POST(req: NextRequest) {
  let body: any;
  try { body = await req.json(); } catch { return json({ ok: false }, 400); }
  const op = typeof body?.op === "string" ? body.op : "";

  if (op === "login") {
    const ok = await checkPassword(typeof body?.password === "string" ? body.password : "");
    if (!ok) { await sleep(1200); return json({ ok: false }, 401); }
    return json({ ok: true }, 200, { "Set-Cookie": await sessionCookie() });
  }
  if (op === "logout") return json({ ok: true }, 200, { "Set-Cookie": clearedCookie });

  if (!(await hasValidSession(req))) return json({ ok: false }, 401);

  try {
    switch (op) {
      case "ping":
        return json({ ok: true });

      case "sessions": {
        const { data: sessions, error } = await supabaseAdmin
          .from("chat_sessions").select("*").order("last_message_at", { ascending: false }).limit(100);
        if (error) throw new Error(error.message);
        const ids = (sessions ?? []).map((s: any) => s.id);
        const preview: Record<string, string> = {};
        if (ids.length) {
          const { data: firsts } = await supabaseAdmin
            .from("chat_messages").select("session_id, content").in("session_id", ids).eq("role", "user")
            .order("created_at", { ascending: true }).limit(1000);
          for (const m of (firsts ?? []) as any[]) if (!preview[m.session_id]) preview[m.session_id] = m.content;
        }
        return json({ ok: true, sessions: (sessions ?? []).map((s: any) => ({ ...s, preview: preview[s.id] ?? "" })) });
      }

      case "messages": {
        if (!UUID_RE.test(body?.sessionId)) return json({ ok: false }, 400);
        const { data, error } = await supabaseAdmin
          .from("chat_messages").select("role, content, created_at, model").eq("session_id", body.sessionId).order("created_at", { ascending: true });
        if (error) throw new Error(error.message);
        return json({ ok: true, messages: data });
      }

      case "delete_session": {
        if (!UUID_RE.test(body?.sessionId)) return json({ ok: false }, 400);
        const { error } = await supabaseAdmin.from("chat_sessions").delete().eq("id", body.sessionId); // messages cascade; leads are kept
        if (error) throw new Error(error.message);
        return json({ ok: true });
      }

      case "purge": {
        const days = Number(body?.days);
        if (!Number.isInteger(days) || days < 1 || days > 3650) return json({ ok: false }, 400);
        const cutoff = new Date(Date.now() - days * 86400000).toISOString();
        const { error, count } = await supabaseAdmin.from("chat_sessions").delete({ count: "exact" }).lt("last_message_at", cutoff);
        if (error) throw new Error(error.message);
        return json({ ok: true, deleted: count ?? 0 });
      }

      case "leads": {
        const status = body?.status === "new" || body?.status === "handled" ? body.status : null;
        let q = supabaseAdmin.from("chat_leads").select("*, chat_sessions(visitor_name, first_page, country)").order("created_at", { ascending: false }).limit(200);
        if (status) q = q.eq("status", status);
        let { data, error } = await q;
        if (error) { // embed unavailable: fall back to plain rows
          let q2 = supabaseAdmin.from("chat_leads").select("*").order("created_at", { ascending: false }).limit(200);
          if (status) q2 = q2.eq("status", status);
          ({ data, error } = await q2);
        }
        if (error) throw new Error(error.message);
        return json({ ok: true, leads: data });
      }

      case "lead_status": {
        if (!UUID_RE.test(body?.id) || !["new", "handled"].includes(body?.status)) return json({ ok: false }, 400);
        const { error } = await supabaseAdmin.from("chat_leads")
          .update({ status: body.status, handled_at: body.status === "handled" ? new Date().toISOString() : null }).eq("id", body.id);
        if (error) throw new Error(error.message);
        return json({ ok: true });
      }

      case "delete_lead": {
        if (!UUID_RE.test(body?.id)) return json({ ok: false }, 400);
        const { error } = await supabaseAdmin.from("chat_leads").delete().eq("id", body.id);
        if (error) throw new Error(error.message);
        return json({ ok: true });
      }

      case "funnel": {
        const days = [1, 7, 30].includes(Number(body?.days)) ? Number(body.days) : 7;
        const { rows, capped } = await loadEvents(days, FUNNEL_EVENTS);
        return json({ ok: true, days, capped, ...buildFunnel(rows) });
      }

      case "pages": {
        const days = [1, 7, 30].includes(Number(body?.days)) ? Number(body.days) : 7;
        const { rows, capped } = await loadEvents(days, ["page_view", "page_leave"], { marketingOnly: true });
        return json({ ok: true, days, capped, ...buildPages(rows) });
      }

      case "page_detail": {
        const days = [1, 7, 30].includes(Number(body?.days)) ? Number(body.days) : 7;
        const path = typeof body?.path === "string" && body.path.startsWith("/") ? body.path.slice(0, 300) : null;
        if (!path) return json({ ok: false }, 400);
        const { rows } = await loadEvents(days, ["page_view", "scroll_depth", "section_view"], { path, marketingOnly: true });
        return json({ ok: true, path, ...buildPageDetail(rows) });
      }

      case "purge_events": {
        const days = Number(body?.days);
        if (!Number.isInteger(days) || days < 1 || days > 3650) return json({ ok: false }, 400);
        const cutoff = new Date(Date.now() - days * 86400000).toISOString();
        const { error, count } = await supabaseAdmin.from("site_events").delete({ count: "exact" }).lt("created_at", cutoff);
        if (error) throw new Error(error.message);
        return json({ ok: true, deleted: count ?? 0 });
      }

      default:
        return json({ ok: false }, 400);
    }
  } catch (err) {
    console.error("desk error:", op, err);
    return json({ ok: false, error: "Something went wrong." }, 500);
  }
}
