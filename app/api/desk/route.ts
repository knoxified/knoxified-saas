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

async function loadEvents(days: number): Promise<{ rows: Row[]; capped: boolean }> {
  const since = new Date(Date.now() - days * 86400000).toISOString();
  const PAGE = 1000, CAP = 30000; // PostgREST returns at most 1000 rows per request
  const rows: Row[] = [];
  for (let from = 0; from < CAP; from += PAGE) {
    const { data, error } = await supabaseAdmin
      .from("site_events")
      .select("visitor_id,session_id,event,path,host,props,device,country,referrer,utm_source,created_at")
      .gte("created_at", since)
      .order("created_at", { ascending: true })
      .range(from, from + PAGE - 1);
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
        const { rows, capped } = await loadEvents(days);
        return json({ ok: true, days, capped, ...buildFunnel(rows) });
      }

      default:
        return json({ ok: false }, 400);
    }
  } catch (err) {
    console.error("desk error:", op, err);
    return json({ ok: false, error: "Something went wrong." }, 500);
  }
}
