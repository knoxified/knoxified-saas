'use client';

import { useEffect, useRef, useState } from 'react';
import { X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

const personas = {
  calista: {
    name: 'Calista',
    role: 'AI Automation Strategist',
    avatar: '/chatbot/calista.png',
  },
  amara: {
    name: 'Amara',
    role: 'Client Success Specialist',
    avatar: '/chatbot/amara.png',
  },
  noah: {
    name: 'Noah',
    role: 'Systems Architect',
    avatar: '/chatbot/noah.png',
  },
};

type PersonaKey = keyof typeof personas;

function getPersonaKey(): PersonaKey {
  if (typeof window === 'undefined') return 'calista';
  const stored = window.sessionStorage.getItem('knoxified_persona');
  if (stored && stored in personas) return stored as PersonaKey;
  const keys = Object.keys(personas) as PersonaKey[];
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  window.sessionStorage.setItem('knoxified_persona', randomKey);
  return randomKey;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [booting, setBooting] = useState(true);
  const [showPersona, setShowPersona] = useState(false);
  const [personaKey, setPersonaKey] = useState<PersonaKey>('calista');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPersonaKey(getPersonaKey());
  }, []);

  const persona = personas[personaKey];

  useEffect(() => {
    if (!isOpen) {
      setBooting(true);
      setShowPersona(false);
      return;
    }
    const revealPersonaTimer = window.setTimeout(() => setShowPersona(true), 900);
    const bootingTimer = window.setTimeout(() => {
      setBooting(false);
      if (messages.length === 0) {
        setMessages([{
          role: 'assistant',
          content: `Hi, I'm ${persona.name}. Ask me anything about Knoxified, or how it'd work for your business.`,
        }]);
      }
    }, 1500);
    return () => {
      window.clearTimeout(revealPersonaTimer);
      window.clearTimeout(bootingTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isSending]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isSending) return;

    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: trimmed }];
    setMessages(nextMessages);
    setInput('');
    setIsSending(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.text || "I didn't quite catch that -- could you rephrase?" }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm having trouble connecting right now. Please try again in a moment." }]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            aria-label="Open chat"
            className="fixed bottom-[20px] right-[20px] w-[64px] h-[64px] rounded-full border border-cyan-500/20 bg-slate-800 shadow-[0_0_30px_rgba(6,182,212,0.3)] cursor-pointer z-[9999] flex items-center justify-center p-0 transition-transform hover:scale-105"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M8 10h8M8 14h5M7 19l-3 2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H7Z" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="absolute right-[6px] bottom-[6px] w-[12px] h-[12px] rounded-full bg-emerald-500 border-2 border-slate-800" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-[94px] right-[20px] w-[380px] h-[600px] max-w-[calc(100vw-20px)] max-h-[calc(100vh-110px)] rounded-[18px] overflow-hidden bg-slate-800 border border-slate-700 shadow-[0_16px_45px_rgba(0,0,0,0.5)] z-[9998] flex flex-col"
          >
            {booting ? (
              <div className="w-full h-full flex flex-col items-center justify-center p-[24px] box-border font-sans bg-slate-800 relative z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-500/5 pointer-events-none" />
                <div className="relative w-[84px] h-[84px] mb-[18px]">
                  {showPersona ? (
                    <div className="relative w-[84px] h-[84px] rounded-full shadow-[0_8px_25px_rgba(6,182,212,0.18)] overflow-hidden">
                      <Image src={persona.avatar} alt={persona.name} fill sizes="84px" className="object-cover" />
                    </div>
                  ) : (
                    <div className="w-[84px] h-[84px] rounded-full bg-slate-900 shadow-[0_8px_25px_rgba(0,0,0,0.3)]" />
                  )}
                  <span className="absolute left-[50%] -translate-x-[50%] -bottom-[4px] w-[12px] h-[12px] rounded-full bg-emerald-500 border-2 border-slate-800" />
                </div>

                {showPersona ? (
                  <>
                    <div className="text-cyan-400 text-[16px] font-semibold mb-[4px]">{persona.name}</div>
                    <div className="text-slate-400 text-[13px] mb-[14px]">{persona.role}</div>
                  </>
                ) : (
                  <div className="text-cyan-500 text-[15px] font-semibold mb-[14px] lowercase">connecting you</div>
                )}

                <div className="flex gap-[6px]">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce" />
                </div>
              </div>
            ) : (
              <div className="w-full h-full bg-slate-900 flex flex-col">
                <div className="flex items-center justify-between border-b border-slate-700 bg-slate-900 px-4 py-3 text-white shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full">
                      <Image src={persona.avatar} alt={persona.name} fill sizes="32px" className="object-cover" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-50">{persona.name}</div>
                      <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                        </span>
                        Online
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-slate-400 transition-colors hover:text-slate-200"
                    aria-label="Close chat"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                  {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div
                        className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                          m.role === 'user'
                            ? 'bg-cyan-500 text-slate-950 rounded-br-sm'
                            : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-sm'
                        }`}
                      >
                        {m.content}
                      </div>
                    </div>
                  ))}
                  {isSending && (
                    <div className="flex justify-start">
                      <div className="bg-slate-800 border border-slate-700 rounded-2xl rounded-bl-sm px-3.5 py-2.5 flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce [animation-delay:-0.3s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce [animation-delay:-0.15s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-t border-slate-700 p-3 shrink-0">
                  <div className="flex items-center gap-2">
                    <input
                      value={input}
                      onChange={e => setInput(e.target.value)}
                      onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
                      placeholder={`Message ${persona.name}...`}
                      className="flex-1 bg-slate-800 border border-slate-700 rounded-full px-4 py-2 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/60"
                    />
                    <button
                      onClick={sendMessage}
                      disabled={!input.trim() || isSending}
                      aria-label="Send message"
                      className="shrink-0 w-9 h-9 rounded-full bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-700 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                    >
                      <Send className="w-4 h-4 text-slate-950" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
