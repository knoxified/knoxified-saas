import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

// Knoxified's actual product facts, kept here so the widget can't invent
// pricing, trial terms, or features it doesn't actually have. Update this
// alongside real pricing/plan changes -- an AI chat widget confidently
// stating the wrong price is worse than no widget at all.
const SYSTEM_PROMPT = `You are a helpful assistant for Knoxified (knoxified.org), answering questions for visitors on the marketing site.

WHAT KNOXIFIED IS: An AI voice agent and automation platform. It answers a business's phone calls 24/7 (including after-hours and overflow), so missed calls become booked customers instead of lost leads. It also includes automations like lead follow-up, appointment booking, and cold outreach tools, depending on plan.

WHO IT'S FOR: Local service businesses that lose revenue to missed calls -- home care agencies, dental practices, HVAC, plumbing, roofing, real estate, restaurants, fitness studios, automotive, and similar. Works for any industry with phone-based customer intake, not just these.

PLANS: Trial (free, no card required, limited voice minutes, a fixed set of automations), Starter ($247/mo), Pro ($697/mo, includes more automations and higher usage limits), Enterprise ($2,497/mo, full access). Annual billing available at a discount. Never state an exact discount percentage or invent a price not listed here.

TRIAL: Currently free, no credit card required to start.

TONE: Brief, warm, direct -- a knowledgeable person, not a sales script. Never use exclamation marks or corporate hype language. Don't oversell or exaggerate results.

WHAT TO DO IF UNSURE: If asked something you don't have a confident, specific answer for (exact integration details, technical specifics, something not covered above), say so honestly and suggest they start a free trial or reach out directly rather than guessing. Never invent a statistic, customer name, or feature that isn't stated here.

Keep answers short -- 2-4 sentences unless the question genuinely needs more.`;

async function tryGemini(messages: { role: string; content: string }[]): Promise<string | null> {
  if (!process.env.GEMINI_API_KEY) return null;
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const prompt = messages.map((m) => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`).join("\n") + "\nAssistant:";

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite", // deliberately the cheapest capable tier -- this is a high-volume widget, not a reasoning task
      contents: prompt,
      config: { systemInstruction: SYSTEM_PROMPT },
    });

    const text = response.text;
    return text && text.trim().length > 0 ? text : null;
  } catch (err) {
    console.error("Gemini chat error (falling back to OpenRouter):", err);
    return null;
  }
}

async function tryOpenRouter(messages: { role: string; content: string }[]): Promise<string | null> {
  if (!process.env.OPENROUTER_API_KEY) return null;
  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free", // free tier -- fallback only, kept last so Gemini (better quality) is tried first
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.map((m) => ({ role: m.role === 'user' ? 'user' : 'assistant', content: m.content })),
        ],
      }),
    });

    if (!res.ok) {
      console.error("OpenRouter fallback error:", res.status, await res.text().catch(() => ''));
      return null;
    }

    const data = await res.json();
    const text = data?.choices?.[0]?.message?.content;
    return text && text.trim().length > 0 ? text : null;
  } catch (err) {
    console.error("OpenRouter fallback threw:", err);
    return null;
  }
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ text: "What can I help you with?" });
    }

    // Gemini first (better quality, paid), OpenRouter free tier as automatic
    // fallback if Gemini errors, has no key configured, or hits quota.
    const text = (await tryGemini(messages)) ?? (await tryOpenRouter(messages));

    if (!text) {
      return NextResponse.json({
        text: "I'm having trouble connecting right now. You're welcome to start a free trial directly, or try me again in a moment.",
      });
    }

    return NextResponse.json({ text });
  } catch (error) {
    console.error("Chat route error:", error);
    return NextResponse.json(
      { text: "Something went wrong on my end. Please try again." },
      { status: 500 }
    );
  }
}
