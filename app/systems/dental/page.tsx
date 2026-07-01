import { PhoneCall, CheckCircle2, ChevronRight, XCircle, Briefcase, BarChart, Globe } from 'lucide-react';

import { SystemAutomations } from '@/app/components/system-automations';
import { AnimatedCounter } from '@/app/components/animated-counter';
import Link from 'next/link';
import { motion } from 'motion/react';
import { BenchmarkWidget } from '@/app/components/benchmark-widget';
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
            text="Hi, welcome to the Dental here System. Toothaches don&apos;t wait, and neither should you. I&apos;m looking at our schedule right now and I&apos;ve flagged a 2:15 PM slot for priority emergencies. Can I lock that in for you right now so you can start feeling better today?"
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
{/* Voice Capability Add-on */}<div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl"><div className="flex items-center gap-4 mb-6"><div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400"><PhoneCall className="w-6 h-6" /></div><h3 className="text-2xl font-bold text-slate-50">Inbound & Outbound Voice</h3></div><ul className="space-y-5"><li className="flex items-start gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" /><span><strong>Inbound Handling:</strong> Instantly answers and routes incoming calls 24/7 without placing customers on hold.</span></li><li className="flex items-start gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" /><span><strong>Outbound Proactive Calling:</strong> Initiates outbound calls for follow-ups, confirmations, and re-engaging leads automatically.</span></li></ul></div>
            {/* Category 1 */}
            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Patient Engagement & Call Management</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Instant Call Response:</strong> Answers every call with natural empathy, eliminating hold times and dropped calls.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Appointment Handling:</strong> Books, reschedules, and cancels appointments in real time, fully synced with clinic calendars and patient management systems.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>New Patient Intake:</strong> Collects names, contacts, insurance, and treatment needs automatically.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Emergency Detection:</strong> Identifies urgent cases via tone, keywords, and patient history, routing directly to dentists or assistants.</span>
                </li>
              </ul>
            </div>

            {/* Category 2 */}
            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Clinical & Operational Coordination</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Record Retrieval:</strong> Accesses patient files securely to personalize every interaction.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Staff Handoff & Escalation:</strong> Connects calls to staff, leaves detailed voice notes, or escalates priority cases instantly.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Recall & Follow-Up Campaigns:</strong> Manages hygiene recalls, overdue treatments, and follow-ups automatically.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Insurance & Billing Support:</strong> Handles verification and basic billing inquiries without staff intervention.</span>
                </li>
              </ul>
            </div>

            {/* Category 3 */}
            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Patient Experience & Personalization</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Multilingual & Accent Adaptation:</strong> Communicates naturally across languages and patient preferences.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Procedure Guidance:</strong> Explains preparation steps, post-care instructions, and additional services like whitening or aligners consistently.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Patient Feedback Capture:</strong> Flags dissatisfaction, treatment opportunities, and questions for follow-up.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Reminders & Notifications:</strong> Sends automated confirmations via call, SMS, or email to reduce no-shows.</span>
                </li>
              </ul>
            </div>

            {/* Category 4 */}
            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <BarChart className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Analytics & Performance Insights</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Front-Desk Dashboards:</strong> Summarizes call volume, peak hours, cancellations, emergencies, and bookings.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Trend Monitoring:</strong> Detects recurring questions, operational gaps, and patient education opportunities.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>EMR/EHR Integration:</strong> Feeds structured data directly into patient records, payment portals, and engagement platforms.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Workload Optimization:</strong> Tracks staff and patient flow to maximize efficiency and resource allocation.</span>
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
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Appointments Booked</div>
                 <div className="text-3xl font-extrabold text-emerald-400 tracking-tight mb-4"><AnimatedCounter value={45} prefix="+" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="25% empty chair time due to missed callbacks" />
            </div>

            <div className="bg-slate-900/50 border border-slate-700/50 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">No-Show Rate</div>
                 <div className="text-5xl font-black text-emerald-500 tracking-tight mb-4"><AnimatedCounter value={60} prefix="-" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="15% industry avg no-shows without automated follow-ups" />
            </div>

            <div className="bg-slate-900/50 border border-slate-700/50 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Call Answer Rate</div>
                 <div className="text-5xl font-black text-emerald-500 tracking-tight mb-4"><AnimatedCounter value={100} prefix="" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="34% missed calls during peak clinic hours" />
            </div>

            <div className="bg-slate-900/50 border border-slate-700/50 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Intake Efficiency</div>
                 <div className="text-5xl font-black text-emerald-500 tracking-tight mb-4"><AnimatedCounter value={85} prefix="+" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="60% of front desk time lost on manual data entry" />
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
             It manages every patient interaction with speed and care from scheduling and record review to emergency routing and recall campaigns — turning every call into a seamless workflow.
           </p>
        </div>

        <div className="p-8 md:p-12 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden flex flex-col justify-center">
           <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none"></div>
           <h3 className="text-3xl font-bold text-slate-50 mb-6 relative z-10">Why Clinics Love It</h3>
           <p className="text-slate-400 text-lg leading-relaxed mb-8 relative z-10">
             Every call is an opportunity to build trust, retain patients, and grow revenue. Clinics report:
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
  },
  {
    "title": "OmniServe",
    "icon": "💬",
    "description": "Triages and routes incoming support emails and chats to the appropriate department.",
    "href": "/automations/omniserve"
  },
  {
    "title": "ReplyBot",
    "icon": "🤖",
    "description": "Instantly answers common customer questions, deflecting basic inquiries away from human agents.",
    "href": "/automations/replybot"
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
