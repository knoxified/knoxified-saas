'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

export default function GetStartedPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    challenge: '',
    reason: '',
    impact: ''
  });

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      router.push('/create-account');
    }
  };

  const handleSkip = () => {
    router.push('/create-account');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col md:flex-row relative overflow-hidden">
      {/* Left Branding Panel */}
      <div className="w-full md:w-[40%] lg:w-[35%] bg-slate-900 border-r border-slate-800 relative flex flex-col p-8 md:p-12 z-20 md:min-h-screen">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-cyan-500/10 to-transparent pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-3 mb-12">
              <Image src="/hotel_system.png" alt="Knoxified Logo" width={48} height={48} style={{ width: "auto" }} className="mix-blend-screen opacity-90 drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]" />
              <span className="text-2xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">Knoxified</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-slate-50 mb-6 tracking-tight leading-tight">
              Begin your transformation journey today.
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Knoxified automates inbound calls and authorized follow-up calls, schedules appointments, and streamlines operations 24/7. Stop settling for manual bottlenecks.
            </p>
            
            <div className="space-y-4">
               <div className="flex items-center gap-3 text-sm text-slate-300">
                 <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                 </div>
                 Instant Onboarding & Configuration
               </div>
               <div className="flex items-center gap-3 text-sm text-slate-300">
                 <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                 </div>
                 Zero Technical Skill Required
               </div>
               <div className="flex items-center gap-3 text-sm text-slate-300">
                 <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                 </div>
                 24/7 Reliable Uptime
               </div>
            </div>
          </div>
          
          <div className="hidden md:block text-slate-500 text-sm mt-12">
            <p>© 2025 Knoxified. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Right Content Panel - Form */}
      <div className="w-full md:flex-1 flex flex-col items-center justify-center p-4 md:p-12 relative overflow-y-auto">
        {/* Background glow for right panel */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="w-full max-w-xl relative z-10">
          <div className="mb-12 text-center md:text-left">
           <h1 className="text-3xl md:text-5xl font-bold text-slate-50 mb-4 tracking-tight leading-tight">
             Your Growth Bottleneck is Costing You Daily Revenue
           </h1>
           <p className="text-lg text-slate-400">
             Answer 3 quick questions so we can configure your system.
           </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-xl shadow-cyan-500/5">
           <div className="flex gap-2 mb-8 justify-center">
             {[1, 2, 3].map(i => (
               <div key={i} className={`h-1.5 w-16 rounded-full transition-colors duration-500 ${step >= i ? 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]' : 'bg-slate-800'}`}></div>
             ))}
           </div>

           <div className="min-h-[200px]">
             <AnimatePresence mode="wait">
               {step === 1 && (
                 <motion.div
                   key="step1"
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   className="space-y-4"
                 >
                   <label className="block text-lg font-medium text-slate-200 mb-4">
                     What’s your biggest challenge right now?
                   </label>
                   <div className="space-y-3">
                     {[
                       "Missing leads / low inbound",
                       "Slow follow-up / lost prospects",
                       "Manual operations / no automation",
                       "Low conversion rate",
                       "Scaling / capacity bottleneck",
                       "Other"
                     ].map(option => (
                       <button
                         key={option}
                         onClick={() => {
                           setFormData({ ...formData, challenge: option });
                           handleNext();
                         }}
                         className="w-full text-left px-6 py-4 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 hover:border-cyan-500/50 transition-all text-slate-300 font-medium hover:text-white"
                       >
                         {option}
                       </button>
                     ))}
                   </div>
                 </motion.div>
               )}

               {step === 2 && (
                 <motion.div
                   key="step2"
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   className="space-y-4"
                 >
                   <label className="block text-lg font-medium text-slate-200 mb-4">
                     What really made you click?
                   </label>
                   <div className="space-y-3">
                     {[
                       "Saw automation promise",
                       "Want faster growth",
                       "Tired of manual work",
                       "Competitor comparison",
                       "Referral / recommendation",
                       "Just exploring"
                     ].map(option => (
                       <button
                         key={option}
                         onClick={() => {
                           setFormData({ ...formData, reason: option });
                           handleNext();
                         }}
                         className="w-full text-left px-6 py-4 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 hover:border-cyan-500/50 transition-all text-slate-300 font-medium hover:text-white"
                       >
                         {option}
                       </button>
                     ))}
                   </div>
                 </motion.div>
               )}

               {step === 3 && (
                 <motion.div
                   key="step3"
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   className="space-y-6"
                 >
                   <label className="block text-lg font-medium text-slate-200 mb-4">
                     How does this impact you in 30 days?
                   </label>
                   <textarea
                     value={formData.impact}
                     onChange={e => setFormData({ ...formData, impact: e.target.value })}
                     placeholder="Describe what this is costing you…"
                     className="w-full h-32 px-6 py-4 rounded-xl border border-slate-800 bg-slate-900 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 resize-none"
                   ></textarea>

                   <div className="flex flex-col gap-4">
                     <button
                       onClick={handleNext}
                       className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                     >
                       Continue
                     </button>
                     <button
                       onClick={handleSkip}
                       className="text-slate-500 hover:text-slate-400 text-sm font-medium transition-colors"
                     >
                       I’ll decide later
                     </button>
                   </div>
                 </motion.div>
               )}
             </AnimatePresence>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}
