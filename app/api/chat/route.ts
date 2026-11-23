import { GoogleGenAI, Type } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/src/lib/supabase-admin";
import { buildSystemPrompt, PERSONAS } from "@/lib/chat/knowledge";

const GEMINI_MODEL = process.env.GEMINI_CHAT_MODEL || "gemini-2.5-flash-lite"; // cheapest capable tier: high-volume widget, not a reasoning task
const OPENROUTER_MODEL = "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free"; // free fallback only

const MAX_HISTORY = 12; // messages sent to the model
const MAX_MESSAGE_CHARS = 1000; // per visitor message
const MAX_USER_MESSAGES_PER_SESSION = 40; // hard cap per conversation (cost protection)
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

type ChatMessage = { role: "user" | "assistant"; content: string };
type BotReply = { reply: string; unanswered: boolean; question: string; askEmail: boolean; visitorName: string };

const FALLBACK_TEXT =
  "I'm having trouble connecting right now. You can start a free trial directly, or email support@knoxified.org and the team will reply.";

// Accept only something that plausibly is a first name.
function cleanName(v: unknown): string {
  if (typeof v !== "string") return "";
  const n = v.trim().replace(/\s+/g, " ");
  return /^[\p{L}][\p{L}'\- ]{0,39}$/u.test(n) ? n : "";
}

// Models sometimes wrap JSON in fences or add text around it. Be defensive.
function parseBotReply(raw: string): BotReply | null {
  const text = raw.trim();
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end <= start) return null;
  try {
    const obj = JSON.parse(text.slice(start, end + 1));
    if (typeof obj.reply !== "string" || !obj.reply.trim()) return null;
    return {
      reply: obj.reply.trim(),
      unanswered: obj.unanswered === true,
      question: typeof obj.question === "string" ? obj.question.trim().slice(0, 500) : "",
      askEmail: obj.ask_email === true,
      visitorName: cleanName(obj.visitor_name),
    };
  } catch {
    return null;
  }
}

async function tryGemini(messages: ChatMessage[], systemPrompt: string): Promise<BotReply | null> {
  if (!process.env.GEMINI_API_KEY) return null;
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: messages.map((m) => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.content }],
      })),
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            reply: { type: Type.STRING },
            unanswered: { type: Type.BOOLEAN },
            question: { type: Type.STRING },
            ask_email: { type: Type.BOOLEAN },
            visitor_name: { type: Type.STRING },
          },
          required: ["reply", "unanswered", "question", "ask_email", "visitor_name"],
        },
      },
    });
    return response.text ? parseBotReply(response.text) : null;
  } catch (err) {
    console.error("Gemini chat error (falling back to OpenRouter):", err);
    return null;
  }
}

async function tryOpenRouter(messages: ChatMessage[], systemPrompt: string): Promise<BotReply | null> {
  if (!process.env.OPENROUTER_API_KEY) return null;
  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: OPENROUTER_MODEL,
        messages: [{ role: "system", content: systemPrompt }, ...messages],
      }),
    });
    if (!res.ok) {
      console.error("OpenRouter fallback error:", res.status, await res.text().catch(() => ""));
      return null;
    }
    const data = await res.json();
    const text: string | undefined = data?.choices?.[0]?.message?.content;
    if (!text || !text.trim()) return null;
    // Free model may ignore the JSON instruction: still show its text, just without flags.
    return parseBotReply(text) ?? { reply: text.trim(), unanswered: false, question: "", askEmail: false, visitorName: "" };
  } catch (err) {
    console.error("OpenRouter fallback threw:", err);
    return null;
  }
}

// Returns a valid session id: reuses the visitor's existing one, else creates a new row.
async function resolveSession(
  req: NextRequest,
  body: { sessionId?: unknown; visitorId?: unknown; page?: unknown; referrer?: unknown; persona?: unknown }
): Promise<{ id: string; userMessages: number } | null> {
  try {
    if (typeof body.sessionId === "string" && UUID_RE.test(body.sessionId)) {
      const { data } = await supabaseAdmin
        .from("chat_sessions")
        .select("id, message_count")
        .eq("id", body.sessionId)
        .maybeSingle();
      if (data) return { id: data.id, userMessages: data.message_count ?? 0 };
    }
    const str = (v: unknown, max: number) => (typeof v === "string" && v ? v.slice(0, max) : null);
    const { data, error } = await supabaseAdmin
      .from("chat_sessions")
      .insert({
        visitor_id: str(body.visitorId, 80),
        persona: str(body.persona, 40),
        first_page: str(body.page, 300),
        referrer: str(body.referrer, 500),
        country: req.headers.get("cf-ipcountry"),
        user_agent: str(req.headers.get("user-agent"), 400),
      })
      .select("id")
      .single();
    if (error || !data) {
      console.error("chat session insert failed:", error);
      return null;
    }
    return { id: data.id, userMessages: 0 };
  } catch (err) {
    console.error("chat session error:", err);
    return null;
  }
}

async function logExchange(
  sessionId: string,
  userMessages: number,
  userText: string,
  bot: BotReply,
  model: string
) {
  try {
    await supabaseAdmin.from("chat_messages").insert([
      { session_id: sessionId, role: "user", content: userText },
      { session_id: sessionId, role: "assistant", content: bot.reply.slice(0, 4000), model },
    ]);
    await supabaseAdmin
      .from("chat_sessions")
      .update({ message_count: userMessages + 1, last_message_at: new Date().toISOString() })
      .eq("id", sessionId);
    if (bot.visitorName) {
      // Separate call: fails harmlessly if the visitor_name column does not exist yet.
      const { error } = await supabaseAdmin.from("chat_sessions").update({ visitor_name: bot.visitorName }).eq("id", sessionId);
      if (error) console.error("visitor_name save skipped:", error.message);
    }
    if (bot.unanswered && bot.question) {
      await supabaseAdmin.from("chat_leads").insert({
        session_id: sessionId,
        kind: "unanswered",
        question: bot.question.slice(0, 2000),
      });
    }
  } catch (err) {
    console.error("chat logging failed:", err); // logging must never break the reply
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const raw = body?.messages;
    if (!Array.isArray(raw) || raw.length === 0) {
      return NextResponse.json({ text: "What can I help you with?" });
    }

    const messages: ChatMessage[] = raw
      .filter((m: any) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string" && m.content.trim())
      .slice(-MAX_HISTORY)
      .map((m: any) => ({ role: m.role, content: String(m.content).slice(0, MAX_MESSAGE_CHARS) }));

    const last = messages[messages.length - 1];
    if (!last || last.role !== "user") {
      return NextResponse.json({ text: "What can I help you with?" });
    }
    // Gemini requires the history to start with a user turn.
    while (messages.length && messages[0].role !== "user") messages.shift();

    const session = await resolveSession(req, body);

    if (session && session.userMessages >= MAX_USER_MESSAGES_PER_SESSION) {
      return NextResponse.json({
        text: "We've covered a lot here. For anything further, email support@knoxified.org and the team will reply.",
        sessionId: session.id,
        askEmail: true,
      });
    }

    const personaKey = typeof body?.persona === "string" && body.persona in PERSONAS ? body.persona : "calista";
    const systemPrompt = buildSystemPrompt(personaKey);

    let model = GEMINI_MODEL;
    let bot = await tryGemini(messages, systemPrompt);
    if (!bot) {
      model = OPENROUTER_MODEL;
      bot = await tryOpenRouter(messages, systemPrompt);
    }
    if (!bot) {
      return NextResponse.json({ text: FALLBACK_TEXT, sessionId: session?.id, askEmail: true });
    }

    if (session) await logExchange(session.id, session.userMessages, last.content, bot, model);

    return NextResponse.json({ text: bot.reply, sessionId: session?.id, askEmail: bot.askEmail || bot.unanswered });
  } catch (error) {
    console.error("Chat route error:", error);
    return NextResponse.json({ text: "Something went wrong on my end. Please try again." }, { status: 500 });
  }
}
