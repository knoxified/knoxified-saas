'use client';
import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

// Conservative, defensible defaults per industry -- NOT "every missed call
// becomes a full-price sale." avgValue is what a converted call is
// realistically worth, convertRate is the realistic share of missed calls
// that would have converted had they been answered live. Both are shown
// and editable so nobody feels like the number was engineered to look big.
type IndustryKey =
  | 'plumbing' | 'hvac' | 'roofing' | 'restaurant' | 'fitness' | 'automotive'
  | 'home-care' | 'dental' | 'real-estate';

const INDUSTRIES: { key: IndustryKey; label: string; avgValue: number; convertRate: number; unit: string }[] = [
  { key: 'plumbing',    label: 'Plumbing',           avgValue: 350,  convertRate: 30, unit: 'job' },
  { key: 'hvac',        label: 'HVAC',                avgValue: 400,  convertRate: 30, unit: 'service call' },
  { key: 'roofing',     label: 'Roofing',             avgValue: 600,  convertRate: 20, unit: 'job' },
  { key: 'restaurant',  label: 'Restaurant',          avgValue: 90,   convertRate: 40, unit: 'reservation' },
  { key: 'fitness',     label: 'Fitness / Gym',       avgValue: 150,  convertRate: 25, unit: 'new member' },
  { key: 'automotive',  label: 'Automotive',          avgValue: 2500, convertRate: 10, unit: 'vehicle sale (gross profit)' },
  { key: 'home-care',   label: 'Home Care',           avgValue: 3500, convertRate: 15, unit: 'client (monthly, recurring)' },
  { key: 'dental',      label: 'Dental',              avgValue: 600,  convertRate: 25, unit: 'new patient' },
  { key: 'real-estate', label: 'Real Estate',         avgValue: 9000, convertRate: 5,  unit: 'closed deal (commission)' },
];

export default function GetStartedPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [industry, setIndustry] = useState<IndustryKey | null>(null);
  const [missedPerWeek, setMissedPerWeek] = useState(10);
  const [avgValue, setAvgValue] = useState(0);
  const [convertRate, setConvertRate] = useState(0);

  const selected = INDUSTRIES.find(i => i.key === industry);

  const monthlyLoss = useMemo(() => {
    const perMissedCall = avgValue * (convertRate / 100);
    return Math.round(missedPerWeek * 4.33 * perMissedCall);
  }, [missedPerWeek, avgValue, convertRate]);

  const pickIndustry = (ind: typeof INDUSTRIES[number]) => {
    setIndustry(ind.key);
    setAvgValue(ind.avgValue);
    setConvertRate(ind.convertRate);
    setStep(2);
  };

  const handleSkip = () => {
    router.push('/create-account');
  };

  const handleContinue = () => {
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
              See what missed calls are actually costing you.
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              A real, honest estimate based on your industry, not a generic guess. Takes about 20 seconds.
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
            <p>&copy; 2026 Knoxified. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Right Content Panel - Calculator */}
      <div className="w-full md:flex-1 flex flex-col items-center justify-center p-4 md:p-12 relative overflow-y-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="w-full max-w-xl relative z-10">
          <div className="mb-12 text-center md:text-left">
           <h1 className="text-3xl md:text-5xl font-bold text-slate-50 mb-4 tracking-tight leading-tight">
             Missed Call Revenue Calculator
           </h1>
           <p className="text-lg text-slate-400">
             Pick your industry, tell us your call volume, see the real number.
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
                 <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                   <label className="block text-lg font-medium text-slate-200 mb-4">
                     What industry are you in?
                   </label>
                   <div className="grid grid-cols-2 gap-3">
                     {INDUSTRIES.map(ind => (
                       <button
                         key={ind.key}
                         onClick={() => pickIndustry(ind)}
                         className="text-left px-5 py-4 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 hover:border-cyan-500/50 transition-all text-slate-300 font-medium hover:text-white"
                       >
                         {ind.label}
                       </button>
                     ))}
                   </div>
                 </motion.div>
               )}

               {step === 2 && selected && (
                 <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                   <label className="block text-lg font-medium text-slate-200">
                     About how many calls go unanswered or missed per week?
                   </label>
                   <input
                     type="number"
                     min={0}
                     value={missedPerWeek}
                     onChange={e => setMissedPerWeek(Math.max(0, Number(e.target.value)))}
                     className="w-full px-6 py-4 rounded-xl border border-slate-800 bg-slate-900 text-slate-200 text-2xl font-bold focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                   />

                   <details className="text-sm text-slate-400">
                     <summary className="cursor-pointer text-cyan-400 hover:text-cyan-300">Adjust the assumptions we&apos;re using for {selected.label.toLowerCase()}</summary>
                     <div className="mt-4 space-y-4 pl-1">
                       <div>
                         <label className="block text-xs text-slate-500 mb-1">Estimated value of one {selected.unit}</label>
                         <input
                           type="number"
                           value={avgValue}
                           onChange={e => setAvgValue(Math.max(0, Number(e.target.value)))}
                           className="w-full px-4 py-2 rounded-lg border border-slate-800 bg-slate-950 text-slate-200 focus:outline-none focus:border-cyan-500"
                         />
                       </div>
                       <div>
                         <label className="block text-xs text-slate-500 mb-1">% of missed calls that would likely have converted if answered</label>
                         <input
                           type="number"
                           min={0}
                           max={100}
                           value={convertRate}
                           onChange={e => setConvertRate(Math.min(100, Math.max(0, Number(e.target.value))))}
                           className="w-full px-4 py-2 rounded-lg border border-slate-800 bg-slate-950 text-slate-200 focus:outline-none focus:border-cyan-500"
                         />
                       </div>
                     </div>
                   </details>

                   <button
                     onClick={() => setStep(3)}
                     className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                   >
                     Calculate
                   </button>
                 </motion.div>
               )}

               {step === 3 && selected && (
                 <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                   <div className="text-center py-4">
                     <p className="text-sm text-slate-400 mb-2">Based on your numbers, {selected.label.toLowerCase()} businesses like yours are likely losing around</p>
                     <p className="text-5xl font-bold text-cyan-400 drop-shadow-[0_0_20px_rgba(6,182,212,0.4)] mb-2">
                       ${monthlyLoss.toLocaleString()}
                     </p>
                     <p className="text-sm text-slate-500">per month in missed opportunities &middot; roughly ${(monthlyLoss * 12).toLocaleString()}/year</p>
                   </div>

                   <div className="flex flex-col gap-4">
                     <button
                       onClick={handleContinue}
                       className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                     >
                       See how Knoxified fixes this
                     </button>
                     <button
                       onClick={handleSkip}
                       className="text-slate-500 hover:text-slate-400 text-sm font-medium transition-colors"
                     >
                       I&apos;ll decide later
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
