import Link from 'next/link';
import { ChevronRight, Target } from 'lucide-react';

export default function EstiMatePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'EstiMate 📐',
    description: 'Automated Construction Estimator',
    provider: {
      '@type': 'Organization',
      name: 'Knoxified'
    }
  };

  return (
    <div className="container mx-auto px-4 py-24 max-w-7xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 backdrop-blur-md border border-cyan-500/30 text-sm font-medium text-cyan-400 mb-8 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
             <Target className="w-4 h-4" /> EstiMate 📐
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 mb-6 tracking-tight leading-tight">
            Automated Preliminary Estimates
          </h1>
          <p className="text-xl font-medium text-cyan-400 mb-6">
            Instantly process project dimensions and job types to generate and send accurate preliminary estimates.
          </p>
          <div className="text-lg text-slate-400 mb-10 leading-relaxed space-y-4">
            <p>
              Stop wasting hours driving to jobs that don&apos;t fit your pricing model. EstiMate instantly texts back inbound leads, collects project scope (like square footage or repair type), and emails a branded, professional preliminary quote to qualify buyers before you ever start your truck.
            </p>
          </div>
          
          <Link href="/pricing" className="inline-flex px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            Deploy EstiMate
          </Link>
        </div>
        
        <div className="relative group perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="w-full aspect-square relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 overflow-hidden flex items-center justify-center transform transition-transform duration-700 hover:rotate-y-12 shadow-2xl">
            <div className="relative w-full h-full">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/20 rounded-full animate-ping"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/10 rounded-full animate-pulse"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-24 h-24 bg-slate-900 rounded-2xl border border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.3)] z-10 text-5xl">
                 📐
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 text-center relative overflow-hidden shadow-2xl">
         <div className="relative z-10">
           <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4 tracking-tight">⚡ Deploy It</h2>
           <Link href="/pricing" className="inline-flex items-center gap-2 px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-full transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:-translate-y-1 text-lg">
              Deploy EstiMate <ChevronRight className="w-5 h-5 flex-shrink-0" />
           </Link>
         </div>
      </div>
    </div>
  );
}
