import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ text: "I'm sorry, my AI backend is not configured right now." });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    // We just take the last message for simple response, or format the history
    const prompt = messages.map((m: any) => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`).join("\\n") + "\\nAssistant:";

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are the helpful assistant for Knoxified. Knoxified builds the invisible operating system that catches every missed call, recovers every lost lead, and scales your business – 24/7. Keep your answers brief, professional, and helpful.",
      }
    });

    return NextResponse.json({ text: response.text });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json({ text: "I'm having trouble connecting right now. Please try again later." }, { status: 500 });
  }
}
