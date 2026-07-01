'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, X } from 'lucide-react';

interface BenchmarkWidgetProps {
  description: string;
}

export function BenchmarkWidget({ description }: BenchmarkWidgetProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 relative group">
         <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-[260px] p-3 bg-slate-800 text-xs text-slate-300 rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 text-center border border-slate-600 before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-[6px] before:border-transparent before:border-t-slate-600">
            Calculated by cross-referencing pre-deployment baseline operations against normalized industry averages over a trailing 12-month period.
            <div 
              className="mt-2 text-cyan-400 font-semibold cursor-pointer hover:text-cyan-300 hover:underline"
              onClick={() => setIsModalOpen(true)}
            >
               Learn More &rarr;
            </div>
         </div>
         <div className="text-red-500 text-sm font-bold flex items-center gap-2 cursor-help">
           <TrendingUp className="w-4 h-4 rotate-180" /> Critical Benchmark
         </div>
         <div className="text-slate-300 text-xs mt-1">{description}</div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.95 }}
               onClick={(e) => e.stopPropagation()}
               className="bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-2xl max-w-lg w-full relative"
            >
               <button 
                 onClick={() => setIsModalOpen(false)}
                 className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 transition-colors"
               >
                 <X className="w-6 h-6" />
               </button>
               <h3 className="text-2xl font-bold text-slate-50 mb-6 flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5 text-red-500 rotate-180" />
                 </div>
                 Improving This Benchmark
               </h3>
               <div className="space-y-6 text-slate-300 text-base leading-relaxed">
                 <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                    <p className="font-semibold text-slate-200 mb-1">The Challenge:</p>
                    <p>{description}</p>
                 </div>
                 <div>
                    <p className="font-semibold text-slate-200 mb-1">The Knoxified Solution:</p>
                    <p>
                      Underperforming in this metric indicates manual bottlenecks or delayed execution. The Knoxified system addresses this directly by automating the entire lifecycle of this interaction.
                    </p>
                 </div>
                 <p>
                   By relying on AI triage, real-time routing, and instant automated actions, you eliminate the delays inherent to human operations. This guarantees a consistent, rapid response that naturally drives this critical metric into the positive.
                 </p>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
