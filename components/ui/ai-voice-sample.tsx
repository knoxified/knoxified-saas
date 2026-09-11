'use client';
import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, AudioLines } from 'lucide-react';

interface AIVoiceSampleProps {
  industry: string;
  text: string;
}

// Plays a real recorded sample from /public/audio/{industry}.mp3, generated
// by the same voice engine (Cartesia) the live product uses -- not browser
// speechSynthesis. If a given industry's file hasn't been generated yet
// (see generate-voice-samples.js), the card shows an honest "coming soon"
// state instead of silently faking playback.
export function AIVoiceSample({ industry, text }: AIVoiceSampleProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [available, setAvailable] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const src = `/audio/${industry}.mp3`;

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.currentTime = 0;
      audio.play().catch(() => setAvailable(false));
      setIsPlaying(true);
    }
  };

  return (
    <div className="bg-slate-800/80 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(6,182,212,0.15)] relative overflow-hidden group mb-10 w-full max-w-xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-cyan-500/20 transition-colors"></div>

      <audio
        ref={audioRef}
        src={src}
        preload="none"
        onTimeUpdate={(e) => {
          const el = e.currentTarget;
          if (el.duration) setProgress((el.currentTime / el.duration) * 100);
        }}
        onEnded={() => {
          setIsPlaying(false);
          setProgress(0);
        }}
        onError={() => setAvailable(false)}
      />

      <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-center">
        <button
          onClick={togglePlay}
          disabled={!available}
          className="w-16 h-16 shrink-0 bg-gradient-to-br from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:from-slate-600 disabled:to-slate-700 disabled:cursor-not-allowed text-slate-900 rounded-full flex items-center justify-center transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
          aria-label={isPlaying ? "Pause sample" : "Play sample"}
        >
          {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
        </button>

        <div className="flex-1 w-full text-left">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-lg font-bold text-slate-50 flex items-center gap-2">
              <AudioLines className="w-5 h-5 text-cyan-400" /> Real Call Sample
            </h4>
            {isPlaying && <span className="text-xs font-bold text-cyan-400 animate-pulse flex items-center gap-1"><Volume2 className="w-3 h-3"/> Playing</span>}
            {!available && <span className="text-xs font-medium text-slate-500">Sample coming soon</span>}
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
