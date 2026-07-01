import { ShieldAlert, Mail } from 'lucide-react';

import { PhoneCall, CheckCircle2, ChevronRight, XCircle, Calendar, HeartPulse, Shield, Stethoscope } from 'lucide-react';

import { SystemAutomations } from '@/app/components/system-automations';
import { AnimatedCounter } from '@/app/components/animated-counter';
import Link from 'next/link';

import { BenchmarkWidget } from '@/app/components/benchmark-widget';
import { AIVoiceSample } from '@/components/ui/ai-voice-sample';

export default function MedSpaSystemPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Med Spa System",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 backdrop-blur-md border border-cyan-500/30 text-sm font-medium text-cyan-400 mb-8 shadow-[0_0_15px_rgba(6,182,212,0.15)]"><HeartPulse className="w-4 h-4" /> Med Spa System</div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 mb-6 tracking-tight leading-tight">
            Med Spa System
          </h1>
          <p className="text-xl font-medium text-cyan-400 mb-6">
            Ensure your booking flow looks as flawless as your clients.
          </p>
          <div className="text-lg text-slate-400 mb-10 leading-relaxed space-y-4">
            <p>
              High-end aesthetic clients expect high-end, immediate service. Med Spa System processes inquiries, consultations, and complex booking requirements seamlessly.
            </p>
            <p>
              Consultation booking, treatment inquiries, membership management, post-treatment follow-ups, and targeted appointment reminders operate entirely on autopilot.
            </p>
          </div>

                                        <AIVoiceSample 
            industry="med-spa"
            text="Hello and welcome to Our System Med Spa. You deserve to look and feel your absolute best. I&apos;ve got an exclusive opening for a Botox consultation tomorrow morning at 10 AM. Would you like me to reserve that time exclusively for you?"
          />
          
          <Link href="/pricing" className="inline-flex px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            Activate Med Spa AI
          </Link>
        </div>
        
        <div className="relative group perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="w-full aspect-square relative bg-slate-800/50 backdrop-blur-md rounded-2xl border border-slate-700/50 flex flex-col justify-center items-center shadow-2xl overflow-hidden transform transition-transform duration-700 hover:rotate-y-12">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
            <img src="/hotel_system.png" alt="Med Spa System Logo" className="w-[80%] h-[80%] object-contain mix-blend-screen opacity-90 drop-shadow-[0_0_50px_rgba(6,182,212,0.6)]" />
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mb-24">
         <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-12 text-center tracking-tight">Core Competencies</h2>
         
         <div className="grid md:grid-cols-2 gap-8">
{/* Voice Capability Add-on */}<div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl"><div className="flex items-center gap-4 mb-6"><div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400"><PhoneCall className="w-6 h-6" /></div><h3 className="text-2xl font-bold text-slate-50">Inbound & Outbound Voice</h3></div><ul className="space-y-5"><li className="flex items-start gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" /><span><strong>Inbound Handling:</strong> Instantly answers and routes incoming calls 24/7 without placing customers on hold.</span></li><li className="flex items-start gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" /><span><strong>Outbound Proactive Calling:</strong> Initiates outbound calls for follow-ups, confirmations, and re-engaging leads automatically.</span></li></ul></div>
            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Consultations & Booking</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Virtual Triage:</strong> Pre-qualifies aesthetic leads, capturing concerns, budgets, and medical history prerequisites prior to scheduling.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Complex Scheduling:</strong> Handles multi-machine, multi-provider bookings (e.g., booking an RN for Botox and an esthetician for a facial back-to-back).</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Client Reassurance</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Treatment IQ:</strong> Educates nervous prospects 24/7 on what to expect, downtime, and contraindications before they commit.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Pre-Care Briefs:</strong> Formats and texts essential pre-treatment instructions (e.g., &quot;stop retinols 48hrs prior&quot;) automatically.</span>
                </li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Post-Treatment & Aftercare</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Healing Checks:</strong> Deploys day-1 and day-3 SMS check-ins to monitor recovery and quickly surface potential complications to providers.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Next-Step Prompts:</strong> Suggests complementary services accurately based on completed treatments (e.g., suggesting IV hydration after a deep peel).</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Memberships & Loyalty</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Bank Utilization:</strong> Alerts members when they have accrued &quot;banked&quot; money or unused monthly services to drive them back in.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>&quot;Neurotoxin Due&quot; Cycles:</strong> Automatically calculates treatment lifespans (e.g., 3-4 months) and messages patients right when results are fading to rebook.</span>
                </li>
              </ul>
            </div>
         </div>
      </div>

      {/* Performance Summary Dashboard */}
      <div className="mb-24">
         <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-12 text-center tracking-tight">Performance Summary</h2>
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/50 border border-slate-700/50 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Rebooking Rate</div>
                 <div className="text-3xl font-extrabold text-emerald-400 tracking-tight mb-4"><AnimatedCounter value={43} prefix="+" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="Higher retention through precise, lifecycle-based outreach" />
            </div>

            <div className="bg-slate-900/50 border border-slate-700/50 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Consult Conversions</div>
                 <div className="text-5xl font-black text-emerald-500 tracking-tight mb-4"><AnimatedCounter value={32} prefix="+" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="More visitors converting into paid consultations" />
            </div>

            <div className="bg-slate-900/50 border border-slate-700/50 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">No-Shows</div>
                 <div className="text-5xl font-black text-emerald-500 tracking-tight mb-4"><AnimatedCounter value={70} prefix="-" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="Decrease in costly empty chair time for providers" />
            </div>

            <div className="bg-slate-900/50 border border-slate-700/50 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Membership Utilization</div>
                 <div className="text-5xl font-black text-emerald-500 tracking-tight mb-4"><AnimatedCounter value={65} prefix="+" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="Increase in members actively using their monthly aesthetic benefits" />
            </div>
         </div>
      </div>

      {/* Role Overview & Benefits */}
      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <div className="p-8 md:p-12 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none"></div>
           <h3 className="text-3xl font-bold text-slate-50 mb-6 relative z-10">Role Overview</h3>
           <p className="text-slate-400 text-lg leading-relaxed mb-6 relative z-10">
             Your high-end virtual patient coordinator. Med Spa System captures prestige aesthetic leads, answers medical baseline questions properly, books multi-room appointments, and executes white-glove follow-up protocols.
           </p>
        </div>

        <div className="p-8 md:p-12 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none"></div>
           <h3 className="text-3xl font-bold text-slate-50 mb-6 relative z-10">Why Owners Love It</h3>
           <p className="text-slate-400 text-lg leading-relaxed mb-6 relative z-10">
             If a high-ticket patient doesn&apos;t feel prioritized, they go down the street. It&apos;s that simple. 
           </p>
           
           <div className="space-y-4 relative z-10">
             <div className="flex gap-4 items-start bg-slate-900/50 p-4 rounded-xl border border-red-500/20">
               <span className="font-bold text-red-500 flex-shrink-0 w-24 flex items-center gap-1">
                 <XCircle className="w-4 h-4" /> Without:
               </span>
               <span className="text-sm text-slate-300">Providers burdened with basic Q&A, missed leads after hours, silent churn from forgetting to re-book maintenance treatments.</span>
             </div>
             <div className="flex gap-4 items-start bg-slate-900/50 p-4 rounded-xl border border-emerald-500/20">
               <span className="font-bold text-emerald-500 flex-shrink-0 w-24 flex items-center gap-1">
                 <CheckCircle2 className="w-4 h-4" /> With AI:
               </span>
               <span className="text-sm text-slate-300">Fully maximized provider calendars, white-glove aftercare texts, and automatic recurring revenue from memberships.</span>
             </div>
           </div>
        </div>
      </div>

      <SystemAutomations automations={[
        {
          "title": "LeadLoom",
          "icon": "🧲",
          "description": "Engages web visitors, educating them on treatments and driving direct consultation bookings.",
          "href": "/automations/leadloom"
        },
        {
          "title": "AppointMate",
          "icon": "📅",
          "description": "Aligns complex schedules across multiple aesthetic providers, rooms, and devices.",
          "href": "/automations/appointmate"
        },
        {
          "title": "CarePulse",
          "icon": "🩺",
          "description": "Triggers highly specific post-treatment check-ins (e.g., filler vs. peels) to monitor healing and request reviews.",
          "href": "/automations/carepulse"
        },
        {
          "title": "WinBackBot",
          "icon": "🔥",
          "description": "Automates reach-out to patients exactly when their results (like neurotoxins) are mathematically due to fade.",
          "href": "/automations/winbackbot"
        },
        {
          "title": "ReminderBot",
          "icon": "⏰",
          "description": "Ensures adherence to required pre-care instructions (like avoiding blood thinners) while confirming appointments.",
          "href": "/automations/reminderbot"
        }
      ]} />

      {/* CTA Box */}
      <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 text-center relative overflow-hidden shadow-2xl">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
         <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none"></div>
         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
         
         <div className="relative z-10">
           <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6 tracking-tight">Activate Med Spa AI</h2>
           <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
             Give your clients the premium 24/7 responsiveness they expect while letting your providers focus completely on delivering incredible results.
           </p>
           
           <Link href="/pricing" className="inline-flex items-center gap-2 px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-full transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:-translate-y-1 text-lg">
              Activate It <ChevronRight className="w-5 h-5" />
           </Link>
         </div>
      </div>
    </div>
  );
}
