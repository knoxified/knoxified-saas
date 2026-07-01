import Link from 'next/link';
import { CheckCircle2, ChevronRight, Settings, Clock, BarChart } from 'lucide-react';
import { AnimatedCounter } from '@/app/components/animated-counter';

export default function ScreenSyncPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'ScreenSync 🤝',
    description: 'Applicant Resume Parsing',
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
      
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 backdrop-blur-md border border-cyan-500/30 text-sm font-medium text-cyan-400 mb-8 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
             <Settings className="w-4 h-4" /> ScreenSync 🤝
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 mb-6 tracking-tight leading-tight">
            Applicant Resume Parsing
          </h1>
          <p className="text-xl font-medium text-cyan-400 mb-6">
            Automatically reviews and ranks incoming resumes against specific job requirements.
          </p>
          <div className="text-lg text-slate-400 mb-10 leading-relaxed space-y-4">
            <p>
              A tireless HR assistant that sifts through the noise to find the best talent instantly.
            </p>
          </div>
          
          <Link href="/pricing" className="inline-flex px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            Deploy ScreenSync
          </Link>
        </div>
        
        <div className="relative group perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="w-full aspect-square relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 overflow-hidden flex items-center justify-center transform transition-transform duration-700 hover:rotate-y-12 shadow-2xl">
            <div className="relative w-full h-full">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/20 rounded-full animate-ping"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/10 rounded-full animate-pulse"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-24 h-24 bg-slate-900 rounded-2xl border border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.3)] z-10 text-5xl">
                 🤝
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Capabilities */}
      <div className="mb-24">
         <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-12 text-center tracking-tight">🚀 Key Capabilities</h2>
         
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Extracts skills, experience, and education from any resume format","Scores applicants based on keyword match to the job description","Sorts candidates into 'Strong Match', 'Review', and 'Rejected' tiers","Sends courteous rejection emails automatically to poor fits","Highlights top-tier candidates for recruiter review","Integrates with Greenhouse, Workable, and standard ATS platforms"].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-slate-800/40 rounded-2xl border border-slate-700/50 hover:bg-slate-800/80 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-cyan-500 shrink-0 mt-0.5" />
                <p className="text-slate-300 leading-relaxed text-sm">{feature}</p>
              </div>
            ))}
         </div>
      </div>

      {/* Role Overview */}
      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <div className="p-8 md:p-12 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden">
           <h3 className="text-3xl font-bold text-slate-50 mb-6 relative z-10">Role Overview</h3>
           <p className="text-slate-400 text-lg leading-relaxed mb-6 relative z-10">
             A tireless HR assistant that sifts through the noise to find the best talent instantly.
           </p>
           <p className="text-slate-400 text-lg leading-relaxed mb-6 relative z-10">
             By delegating this specific task to an automation, you remove human error, eliminate delays, and ensure consistent execution at scale.
           </p>
        </div>

        <div className="p-8 md:p-12 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden flex flex-col justify-center">
           <h3 className="text-3xl font-bold text-slate-50 mb-6 relative z-10">📊 Why Businesses Love It</h3>
           
           <div className="space-y-6 mb-8 relative z-10">
            {["Faster time-to-hire","Unbiased initial screening","Saved recruitment hours"].map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-4">
                 <div className="w-16 flex justify-center shrink-0">
                   <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                 </div>
                 <span className="text-slate-300 font-medium">{benefit}</span>
              </div>
            ))}
           </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 text-center relative overflow-hidden shadow-2xl">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
         <div className="relative z-10">
           <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4 tracking-tight">⚡ Deploy It</h2>
           <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
             Activate Knoxified ScreenSync today and start automating.
           </p>
           <Link href="/pricing" className="inline-flex items-center gap-2 px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-full transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:-translate-y-1 text-lg">
              Deploy ScreenSync <ChevronRight className="w-5 h-5 flex-shrink-0" />
           </Link>
         </div>
      </div>

    </div>
  );
}