'use client';
import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, AudioLines } from 'lucide-react';

interface AIVoiceSampleProps {
  industry: string;
  text: string;
}

export function AIVoiceSample({ industry, text }: AIVoiceSampleProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const togglePlay = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setProgress(0);
      if (progressInterval.current) clearInterval(progressInterval.current);
    } else {
      window.speechSynthesis.cancel();
      
      setIsPlaying(true);
      setProgress(0);
      
      const utterance = new SpeechSynthesisUtterance(text);
      
      const voices = window.speechSynthesis.getVoices();
      
      let selectedVoice = null;
      if (industry === 'construction') {
        selectedVoice = voices.find(v => v.name.includes('Google US English Male') || v.name.includes('Male') || v.lang === 'en-US');
        utterance.pitch = 0.85; // slightly deeper
        utterance.rate = 0.95;  // calm, authoritative, not rushed
      } else {
        selectedVoice = voices.find(v => v.name.includes('Google US English') || v.name.includes('Samantha') || v.lang === 'en-US');
        utterance.pitch = 1.0;
        utterance.rate = 1.0;
      }
      
      if (selectedVoice) {
         utterance.voice = selectedVoice;
      } else {
         utterance.lang = 'en-US';
      }
      
      const approxDuration = Math.max((text.length / 15) * 1000, 2000);
      const startTime = Date.now();
      
      progressInterval.current = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const newProgress = Math.min((elapsed / approxDuration) * 100, 99);
        setProgress(newProgress);
      }, 100);

      utterance.onend = () => {
        setIsPlaying(false);
        setProgress(100);
        if (progressInterval.current) clearInterval(progressInterval.current);
        setTimeout(() => setProgress(0), 500);
      };
      
      utterance.onerror = (e) => {
        console.error("Speech synthesis error", e);
        setIsPlaying(false);
        setProgress(0);
        if (progressInterval.current) clearInterval(progressInterval.current);
      };

      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="bg-slate-800/80 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(6,182,212,0.15)] relative overflow-hidden group mb-10 w-full max-w-xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-cyan-500/20 transition-colors"></div>
      
      <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-center">
        <button 
          onClick={togglePlay}
          className="w-16 h-16 shrink-0 bg-gradient-to-br from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-900 rounded-full flex items-center justify-center transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
          aria-label={isPlaying ? "Pause sample" : "Play sample"}
        >
          {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" /> }
        </button>
        
        <div className="flex-1 w-full text-left">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-lg font-bold text-slate-50 flex items-center gap-2">
              <AudioLines className="w-5 h-5 text-cyan-400" /> Live AI Agent Demo
            </h4>
            {isPlaying && <span className="text-xs font-bold text-cyan-400 animate-pulse flex items-center gap-1"><Volume2 className="w-3 h-3"/> Playing</span>}
          </div>
          
          <div className="h-1.5 w-full bg-slate-700/80 rounded-full mb-3 overflow-hidden">
            <div 
              className="h-full bg-cyan-400 transition-all duration-100 ease-linear shadow-[0_0_10px_rgba(34,211,238,0.8)]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <p className="text-sm text-slate-300 italic border-l-2 border-cyan-500/50 pl-3 py-1">
            "{text}"
          </p>
        </div>
      </div>
    </div>
  );
}
