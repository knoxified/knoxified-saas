import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/src/lib/supabase-admin";

// POST /api/track  (text/plain JSON body so the dashboard can call it without a CORS preflight)
// Stores one funnel event in public.site_events. Always answers 204 so tracking can never
// break a page; invalid, bot or unknown events are silently dropped.

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const ALLOWED_HOSTS = new Set(["knoxified.org", "www.knoxified.org", "dashboard.knoxified.org"]);
const ALLOWED_ORIGINS = new Set(["https://knoxified.org", "https://www.knoxified.org", "https://dashboard.knoxified.org"]);
const ALLOWED_EVENTS = new Set([
  "page_view",
  "cta_click",
  "get_started_industry",
  "get_started_step",
  "get_started_continue",
  "get_started_skip",
  "signup_started",
  "signup_invalid",
  "signup_submit",
  "signup_success",
  "signup_error",
  "onboarding_step",
  "onboarding_complete",
  "onboarding_no_session",
  "chat_open",
  "chat_lead",
  "scroll_depth",
  "section_view",
  "page_leave",
  "onboarding_dashboard_click",
]);
const BOT_RE = /bot|crawl|spider|slurp|headless|lighthouse|pagespeed|python|curl|wget|httpclient|monitor|preview|facebookexternalhit|axios|node-fetch|go-http/i;

function cors(req: NextRequest) {
  const origin = req.headers.get("origin");
  const headers: Record<string, string> = { "Cache-Control": "no-store" };
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
    headers["Access-Control-Allow-Credentials"] = "true";
    headers["Vary"] = "Origin";
  }
  return headers;
}

const str = (v: unknown, max: number) => (typeof v === "string" && v ? v.slice(0, max) : null);

function deviceFrom(ua: string) {
  if (/ipad|tablet/i.test(ua)) return "tablet";
  if (/mobi|android|iphone/i.test(ua)) return "mobile";
  return "desktop";
}

// Keep props small and flat: primitives only.
function cleanProps(v: unknown): Record<string, string | number | boolean | null> {
  const out: Record<string, string | number | boolean | null> = {};
  if (!v || typeof v !== "object" || Array.isArray(v)) return out;
  let n = 0;
  for (const [k, val] of Object.entries(v as Record<string, unknown>)) {
    if (n >= 10 || !/^[a-z0-9_]{1,30}$/.test(k)) continue;
    if (typeof val === "string") out[k] = val.slice(0, 200);
    else if (typeof val === "number" && Number.isFinite(val)) out[k] = val;
    else if (typeof val === "boolean" || val === null) out[k] = val;
    else continue;
    n++;
  }
  return out;
}

export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, {
    status: 204,
    headers: { ...cors(req), "Access-Control-Allow-Methods": "POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type" },
  });
}

export async function POST(req: NextRequest) {
  const headers = cors(req);
  try {
    const ua = req.headers.get("user-agent") || "";
    if (!ua || BOT_RE.test(ua)) return new NextResponse(null, { status: 204, headers });

    const text = await req.text();
    if (text.length > 4000) return new NextResponse(null, { status: 204, headers });
    const body = JSON.parse(text);

    const event = typeof body?.event === "string" ? body.event : "";
    const visitorId = typeof body?.visitorId === "string" ? body.visitorId : "";
    const host = typeof body?.host === "string" ? body.host : "";
    const path = typeof body?.path === "string" && body.path.startsWith("/") ? body.path.slice(0, 300) : null;
    if (!ALLOWED_EVENTS.has(event) || !UUID_RE.test(visitorId) || !ALLOWED_HOSTS.has(host) || !path) {
      return new NextResponse(null, { status: 204, headers });
    }

    const utm = body?.utm && typeof body.utm === "object" ? body.utm : {};
    const { error } = await supabaseAdmin.from("site_events").insert({
      visitor_id: visitorId,
      session_id: typeof body?.sessionId === "string" && UUID_RE.test(body.sessionId) ? body.sessionId : null,
      host,
      path,
      event,
      props: cleanProps(body?.props),
      referrer: str(body?.referrer, 500),
      utm_source: str(utm.utm_source, 100),
      utm_medium: str(utm.utm_medium, 100),
      utm_campaign: str(utm.utm_campaign, 100),
      country: req.headers.get("cf-ipcountry"),
      device: deviceFrom(ua),
    });
    if (error) console.error("track insert failed:", error.message);
  } catch {
    // malformed body: ignore
  }
  return new NextResponse(null, { status: 204, headers });
}
