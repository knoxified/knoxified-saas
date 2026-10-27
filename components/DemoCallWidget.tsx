'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { startDemoCall, type DemoCall } from '@/lib/demoWebCall';

// ── Industry config ───────────────────────────────────────────────────────────

const INDUSTRIES = [
  { id: 'dental',       label: 'Dental',       icon: '🦷', tagline: 'Pain calls, appointment booking'      },
  { id: 'real-estate',  label: 'Real Estate',  icon: '🏠', tagline: 'Buyer qualification, viewings'        },
  { id: 'healthcare',   label: 'Healthcare',   icon: '🏥', tagline: 'Patient intake, scheduling'            },
  { id: 'fitness',      label: 'Fitness',      icon: '💪', tagline: 'Inquiries to memberships'              },
  { id: 'legal',        label: 'Legal',        icon: '⚖️', tagline: 'Intake calls, consultations'          },
  { id: 'hotel',        label: 'Hotel',        icon: '🏨', tagline: 'Reservations, guest requests'         },
];

type CallStatus = 'idle' | 'connecting' | 'active' | 'ended';
type TxLine    = { role: 'user' | 'agent'; text: string };

// ── Component ─────────────────────────────────────────────────────────────────

export default function DemoCallWidget() {
  const [selected,   setSelected]   = useState<string | null>(null);
  const [callStatus, setCallStatus] = useState<CallStatus>('idle');
  const [transcript, setTranscript] = useState<TxLine[]>([]);
  const [error,      setError]      = useState<string | null>(null);

  const callRef      = useRef<DemoCall | null>(null);
  const txEndRef     = useRef<HTMLDivElement | null>(null);

  // Auto-scroll transcript
  useEffect(() => {
    // Scroll only the transcript box. scrollIntoView also scrolls the whole page.
    const box = txEndRef.current?.parentElement;
    if (box) box.scrollTo({ top: box.scrollHeight, behavior: 'smooth' });
  }, [transcript]);

  const handleStart = useCallback(async () => {
    if (!selected) return;
    setError(null);
    setTranscript([]);
    setCallStatus('connecting');
    try {
      callRef.current = await startDemoCall({
        industry: selected,
        onClosed: () => setCallStatus('ended'),
        onError:  (msg) => { setError(msg); setCallStatus('ended'); },
        onTranscript: (role, text) =>
          setTranscript(prev => [...prev, { role, text }]),
      });
      setCallStatus('active');
    } catch (e: any) {
      setError(e.message || 'Could not start the demo. Please try again.');
      setCallStatus('idle');
    }
  }, [selected]);

  const handleEnd = useCallback(() => {
    callRef.current?.stop();
    callRef.current = null;
    setCallStatus('ended');
  }, []);

  const handleReset = useCallback(() => {
    setCallStatus('idle');
    setSelected(null);
    setTranscript([]);
    setError(null);
  }, []);

  const industryLabel = INDUSTRIES.find(i => i.id === selected)?.label ?? '';

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="w-full max-w-3xl mx-auto">

      {/* ── Industry picker (shown before + during idle/ended) ── */}
      {(callStatus === 'idle' || callStatus === 'ended') && (
        <div className="space-y-6">

          {callStatus === 'ended' && (
            <div className="text-center space-y-2">
              <p className="text-lg font-semibold text-white">How was that?</p>
              <p className="text-slate-400 text-sm">Get your own AI agent, fully customised for your business.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
                <a
                  href="/get-started"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl text-sm shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all"
                >
                  Get started free →
                </a>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 border border-cyan-500/30 text-cyan-300 hover:border-cyan-400 font-semibold rounded-xl text-sm transition-all"
                >
                  Try another industry
                </button>
              </div>
            </div>
          )}

          {callStatus === 'idle' && (
            <>
              {/* Industry grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {INDUSTRIES.map(ind => (
                  <button
                    key={ind.id}
                    onClick={() => setSelected(ind.id)}
                    className={`relative text-left p-4 rounded-xl border transition-all duration-200 ${
                      selected === ind.id
                        ? 'border-cyan-400 bg-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                        : 'border-slate-700/60 bg-slate-800/40 hover:border-slate-600 hover:bg-slate-800/70'
                    }`}
                  >
                    {selected === ind.id && (
                      <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    )}
                    <span className="text-2xl block mb-2">{ind.icon}</span>
                    <p className="font-semibold text-white text-sm">{ind.label}</p>
                    <p className="text-slate-400 text-xs mt-0.5 leading-snug">{ind.tagline}</p>
                  </button>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center">
                <button
                  onClick={handleStart}
                  disabled={!selected}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-xl transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
                >
                  {/* Mic icon */}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                  </svg>
                  {selected ? `Talk to the ${industryLabel} Agent →` : 'Pick an industry above'}
                </button>
                {selected && (
                  <p className="text-slate-500 text-xs mt-3">
                    Your browser will ask for microphone access. This is a live call — real AI, real voice.
                  </p>
                )}
              </div>
            </>
          )}

          {error && (
            <p className="text-center text-red-400 text-sm">{error}</p>
          )}
        </div>
      )}

      {/* ── Active / connecting call UI ── */}
      {(callStatus === 'active' || callStatus === 'connecting') && (
        <div className="rounded-2xl border border-slate-700/60 bg-slate-900/70 backdrop-blur-md overflow-hidden">

          {/* Header bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-slate-700/50 bg-slate-800/50">
            <div className="flex items-center gap-2.5">
              <span className="text-xl">{INDUSTRIES.find(i => i.id === selected)?.icon}</span>
              <div>
                <p className="text-sm font-semibold text-white">Knoxified {industryLabel}</p>
                <p className="text-[11px] text-slate-400">
                  {callStatus === 'connecting' ? 'Connecting…' : '● Live demo'}
                </p>
              </div>
            </div>
            <button
              onClick={handleEnd}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 transition-all text-xs font-semibold"
            >
              End call
            </button>
          </div>

          {/* Waveform + mic */}
          <div className="flex items-center justify-center py-6 gap-6">
            {/* Sonar mic button */}
            <div className="relative flex items-center justify-center w-14 h-14">
              {callStatus === 'active' && (
                <>
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-70" style={{ animation: 'sonar-ring 2.1s ease-out infinite' }} />
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-70" style={{ animation: 'sonar-ring 2.1s ease-out infinite', animationDelay: '0.7s' }} />
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-70" style={{ animation: 'sonar-ring 2.1s ease-out infinite', animationDelay: '1.4s' }} />
                </>
              )}
              <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
              </div>
            </div>

            {/* Waveform */}
            {callStatus === 'active' && (
              <div className="flex items-end gap-[3px] h-9">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="waveform-bar"
                    style={{ background: 'rgb(34 211 238)' }}
                  />
                ))}
              </div>
            )}

            {callStatus === 'connecting' && (
              <p className="text-slate-400 text-sm animate-pulse">Connecting to agent…</p>
            )}
          </div>

          {/* Live transcript */}
          <div className="px-5 pb-5">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Live Transcript</p>
            <div className="space-y-2 overflow-y-auto max-h-48 pr-1">
              {transcript.length === 0 && callStatus === 'active' && (
                <p className="text-slate-500 text-sm">Listening…</p>
              )}
              {transcript.map((line, i) => (
                <div key={i} className={`flex ${line.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-3 py-2 rounded-xl text-sm leading-snug ${
                    line.role === 'user'
                      ? 'bg-cyan-500/15 border border-cyan-500/25 text-cyan-100'
                      : 'bg-slate-800 border border-slate-700/50 text-slate-200'
                  }`}>
                    <span className={`block text-[10px] font-semibold mb-0.5 ${line.role === 'user' ? 'text-cyan-400' : 'text-slate-400'}`}>
                      {line.role === 'user' ? 'You' : 'Agent'}
                    </span>
                    {line.text}
                  </div>
                </div>
              ))}
              <div ref={txEndRef} />
            </div>
          </div>

        </div>
      )}

      {/* Inject sonar keyframe inline for environments that don't load globals.css */}
      <style>{`
        @keyframes sonar-ring {
          0%   { transform: scale(1);   opacity: 0.7; }
          100% { transform: scale(2.8); opacity: 0;   }
        }
      `}</style>
    </div>
  );
}
