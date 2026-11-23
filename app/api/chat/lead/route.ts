import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/src/lib/supabase-admin";

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_LEADS_PER_SESSION = 3;

// POST /api/chat/lead  { sessionId, email, website }  (website = honeypot, must stay empty)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Bots fill the hidden field. Pretend success, store nothing.
    if (typeof body?.website === "string" && body.website.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
    if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
      return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
    }

    const sessionId = typeof body?.sessionId === "string" && UUID_RE.test(body.sessionId) ? body.sessionId : null;
    if (!sessionId) {
      return NextResponse.json({ ok: false, error: "Start a conversation first." }, { status: 400 });
    }

    const { data: session } = await supabaseAdmin
      .from("chat_sessions")
      .select("id")
      .eq("id", sessionId)
      .maybeSingle();
    if (!session) {
      return NextResponse.json({ ok: false, error: "Start a conversation first." }, { status: 400 });
    }

    const { count } = await supabaseAdmin
      .from("chat_leads")
      .select("id", { count: "exact", head: true })
      .eq("session_id", sessionId)
      .eq("kind", "email");
    if ((count ?? 0) >= MAX_LEADS_PER_SESSION) {
      return NextResponse.json({ ok: false, error: "Too many requests. Please email support@knoxified.org." }, { status: 429 });
    }

    // Attach the visitor's most recent unanswered question so the lead has context.
    const { data: lastQ } = await supabaseAdmin
      .from("chat_leads")
      .select("question")
      .eq("session_id", sessionId)
      .eq("kind", "unanswered")
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    const { error } = await supabaseAdmin.from("chat_leads").insert({
      session_id: sessionId,
      kind: "email",
      email,
      question: lastQ?.question ?? null,
    });
    if (error) {
      console.error("chat lead insert failed:", error);
      return NextResponse.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 500 });
    }

    await supabaseAdmin.from("chat_sessions").update({ email }).eq("id", sessionId);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("chat lead route error:", err);
    return NextResponse.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
