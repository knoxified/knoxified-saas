import { PhoneCall, CheckCircle2, ChevronRight, XCircle, Briefcase, Globe } from 'lucide-react';

import { SystemAutomations } from '@/app/components/system-automations';
import Link from 'next/link';
import { motion } from 'motion/react';
import { AIVoiceSample } from '@/components/ui/ai-voice-sample';

export default function DentalSystemPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Dental Receptionist System`,
    description: 'Your 24/7 Front-Desk Superstar — Human-Like Care, Zero Wait, Maximum Efficiency',
    provider: {
      '@type': 'Organization',
      name: 'Platform'
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
             Dental System
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 mb-6 tracking-tight leading-tight">
            Dental Receptionist System
          </h1>
          <p className="text-xl font-medium text-cyan-400 mb-6">
            Your 24/7 Front-Desk Superstar — Human-Like Care, Zero Wait, Maximum Efficiency
          </p>
          <div className="text-lg text-slate-400 mb-10 leading-relaxed space-y-4">
            <p>
              In dentistry, every call matters. Missed calls or long hold times risk lost patients and revenue. Our system ensures every interaction is answered instantly, accurately, and warmly — building patient trust, comfort, and loyalty automatically.
            </p>
            <p>
              Automation doesn’t replace care. It enhances it, creating a patient-first experience while reducing front-desk workload and operational gaps.
            </p>
          </div>

                                        <AIVoiceSample 
            industry="dental"
            text="Hi, welcome to Knoxified Dental. Toothaches don&apos;t wait, and neither should you. I&apos;m looking at our schedule right now and I&apos;ve flagged a 2:15 PM slot for priority emergencies. Can I lock that in for you right now so you can start feeling better today?"
          />
          
          <Link href="/pricing" className="inline-flex px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            Activate Dental System
          </Link>
        </div>
        
        <div className="relative group perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="w-full aspect-square relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 overflow-hidden flex items-center justify-center transform transition-transform duration-700 hover:rotate-y-12 shadow-2xl">
            {/* The Logo */}
            <img src="/hotel_system.png" alt="Dental System Logo" className="w-[80%] h-[80%] object-contain mix-blend-screen opacity-90 drop-shadow-[0_0_50px_rgba(6,182,212,0.6)]" />
            
            {/* Abstract Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 blur-[50px] rounded-full mix-blend-screen"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/20 blur-[60px] rounded-full mix-blend-screen"></div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mb-24">
         <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-12 text-center tracking-tight">Core Competencies</h2>

         <div className="grid md:grid-cols-2 gap-8">
            {/* Category 1 */}
            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Inbound Call Handling</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>24/7 Answering:</strong> Instantly answers and routes incoming calls around the clock, no hold music, no voicemail wall.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Automatic Intake:</strong> Collects the caller&apos;s name, contact details, and reason for calling during the conversation, so your team has the context before they ever pick up.</span>
                </li>
              </ul>
            </div>
            {/* Category 2 */}
            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Appointment Scheduling</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Real-Time Booking:</strong> Books, reschedules, and cancels appointments live, checked against your connected calendar so nothing double-books.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Coming soon:</strong> automated confirmation and reminder messages ahead of the appointment to cut down no-shows.</span>
                </li>
              </ul>
            </div>
            {/* Category 3 */}
            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <XCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Call Routing &amp; Escalation</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Keyword-Triggered Transfer:</strong> You set the words and phrases that matter (like a dental emergency, or a billing dispute) and a number to send them to; the agent transfers the live call the moment it hears one.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Coming soon:</strong> reaching your on-call dentist in the background while staying on the line with the caller, so the call never just ends if no one picks up.</span>
                </li>
              </ul>
            </div>
            {/* Category 4 */}
            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Practice Knowledge</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Answers From Your Business Summary:</strong> Hours, location, accepted insurance, and procedure questions, answered consistently from the details you give it, no person needed.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Coming soon:</strong> multilingual conversations and automated review requests after a visit.</span>
                </li>
              </ul>
            </div>
         </div>
      </div>


      {/* Role Overview & Benefits */}
      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <div className="p-8 md:p-12 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none"></div>
           <h3 className="text-3xl font-bold text-slate-50 mb-6 relative z-10">Role Overview</h3>
           <p className="text-slate-400 text-lg leading-relaxed mb-6 relative z-10">
             Meet your next front-desk superstar — available 24/7, never tired, never missing a smile.
           </p>
           <p className="text-slate-400 text-lg leading-relaxed mb-6 relative z-10">
             Dental Receptionist System sounds indistinguishable from your best human receptionist: warm, articulate, and emotionally attuned.
           </p>
           <p className="text-slate-400 text-lg leading-relaxed relative z-10">
             It manages every patient interaction with speed and care from first hello to booked appointment, turning every call into a seamless workflow.
           </p>
        </div>

        <div className="p-8 md:p-12 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden flex flex-col justify-center">
           <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none"></div>
           <h3 className="text-3xl font-bold text-slate-50 mb-6 relative z-10">Why Clinics Love It</h3>
           <p className="text-slate-400 text-lg leading-relaxed mb-8 relative z-10">
             Every call is an opportunity to build trust, retain patients, and grow revenue. Here is what this system is designed to deliver:
           </p>
           
           <div className="space-y-4 mb-8 relative z-10">
             <div className="flex items-center gap-3">
               <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
               <span className="text-slate-300 font-medium">Fewer no-shows</span>
             </div>
             <div className="flex items-center gap-3">
               <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
               <span className="text-slate-300 font-medium">Higher booking rates</span>
             </div>
             <div className="flex items-center gap-3">
               <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
               <span className="text-slate-300 font-medium">Significantly reduced front-desk workload</span>
             </div>
             <div className="flex items-center gap-3 pt-2">
                 <div className="bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-lg border border-emerald-500/20 text-sm w-full">
                   Patients never wait on hold. Never repeat themselves. Never feel ignored.
                 </div>
             </div>
           </div>
           
           <div className="space-y-4 relative z-10">
             <div className="flex gap-4 items-start bg-slate-900/50 p-4 rounded-xl border border-red-500/20">
               <span className="font-bold text-red-500 flex-shrink-0 w-24 flex items-center gap-1">
                 <XCircle className="w-4 h-4" /> Without:
               </span>
               <span className="text-sm text-slate-300">Missed calls, empty chair time, staff burnout, inconsistent experiences.</span>
             </div>
             <div className="flex gap-4 items-start bg-slate-900/50 p-4 rounded-xl border border-emerald-500/20">
               <span className="font-bold text-emerald-500 flex-shrink-0 w-24 flex items-center gap-1">
                 <CheckCircle2 className="w-4 h-4" /> With AI:
               </span>
               <span className="text-sm text-slate-300">Full schedules, calmer teams, loyal patients, and predictable growth.</span>
             </div>
           </div>
        </div>
      </div>

      <SystemAutomations automations={[
  {
    "title": "AppointMate",
    "icon": "📅",
    "description": "Automates calendar availability, booking, and buffer time allocation to eliminate email ping-pong.",
    "href": "/automations/appointmate"
  },
  {
    "title": "ReminderBot",
    "icon": "⏰",
    "description": "Reduces no-shows by sending timed SMS and email reminders to scheduled clients.",
    "href": "/automations/reminderbot"
  },
  {
    "title": "ProofPulse",
    "icon": "⭐",
    "description": "Triggers review requests to satisfied customers automatically after successful transactions or services.",
    "href": "/automations/proofpulse"
  }
]} />

      {/* CTA Box */}
      <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 text-center relative overflow-hidden shadow-2xl">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
         <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none"></div>
         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
         
         <div className="relative z-10">
           <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6 tracking-tight">Your brand’s first impression perfected</h2>
           <p className="text-xl text-slate-400 mb-2 max-w-2xl mx-auto">
             Give patients an experience that feels human yet hyper-efficient.
           </p>
           <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
             Activate the Dental Receptionist System today — turning every call into booked appointments, retained patients, and smoother clinic operations.
           </p>
           
           <Link href="/pricing" className="inline-flex items-center gap-2 px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-full transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:-translate-y-1 text-lg">
              Activate It <ChevronRight className="w-5 h-5" />
           </Link>
         </div>
      </div>

    </div>
  );
}
