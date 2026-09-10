import { HeartHandshake, FileText } from 'lucide-react';

import { PhoneCall, CheckCircle2, ChevronRight, XCircle, Calendar } from 'lucide-react';

import { SystemAutomations } from '@/app/components/system-automations';
import { AnimatedCounter } from '@/app/components/animated-counter';
import Link from 'next/link';
import { motion } from 'motion/react';
import { BenchmarkWidget } from '@/app/components/benchmark-widget';
import { AIVoiceSample } from '@/components/ui/ai-voice-sample';

export default function HomeCareSystemPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Home Care Intake System`,
    description: 'Transform Home Care Intake — 24/7 Family Inquiry Response, Assessment Scheduling, and Paperwork',
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
             Home Care Intake
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 mb-6 tracking-tight leading-tight">
            Home Care Intake System
          </h1>
          <p className="text-xl font-medium text-cyan-400 mb-6">
            Answer Every Family's First Call — Warm, Fast, and Ready to Schedule
          </p>
          <div className="text-lg text-slate-400 mb-10 leading-relaxed space-y-4">
            <p>
              When a family calls about care for a parent or loved one, they're usually calling more than one agency, and they're often calling in a stressed, overwhelmed moment. Whoever answers first, and answers with genuine warmth, usually wins that family's trust.
            </p>
            <p>
              Our system makes sure that's always you, at 2pm on a Tuesday or 11pm on a Sunday, without your office staff carrying every one of those calls alone.
            </p>
          </div>

          <AIVoiceSample 
            industry="home-care"
            text="Hi, thank you for calling. I can hear this might be a stressful time, so let's take it one step at a time. Can you tell me a little about your loved one's situation, and I'll get you scheduled for a free in-home assessment with our care team?"
          />
          
          <Link href="/pricing" className="inline-flex px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            Activate Home Care System
          </Link>
        </div>
        
        <div className="relative group perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="w-full aspect-square relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 overflow-hidden flex items-center justify-center transform transition-transform duration-700 hover:rotate-y-12 shadow-2xl">
            <img src="/hotel_system.png" alt="Home Care Intake System Logo" className="w-[80%] h-[80%] object-contain mix-blend-screen opacity-90 drop-shadow-[0_0_50px_rgba(6,182,212,0.6)]" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 blur-[50px] rounded-full mix-blend-screen"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/20 blur-[60px] rounded-full mix-blend-screen"></div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mb-24">
         <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-12 text-center tracking-tight">Core Competencies</h2>
         
         <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Inbound &amp; Proactive Voice</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Inbound Handling:</strong> Answers every inquiry call 24/7 with a calm, present tone, never rushed and never robotic.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Proactive Follow-Up Calling:</strong> Places follow-up and check-in calls to families still deciding, based on their prior consent.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Family Inquiry &amp; Screening</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Instant Response Strategy:</strong> Answers every call immediately, before an overwhelmed family moves on to the next agency on their list.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Compassionate Intake:</strong> Gently gathers the loved one's care needs, timeline, and location without ever sounding like a form.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Private Pay vs. Coverage Screening:</strong> Identifies private pay, long-term care insurance, or Medicaid inquiries early to route each family correctly.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Multi-Channel Intake:</strong> Captures inquiries via phone voice, SMS, and web chat, so no channel goes unanswered.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Assessment Booking</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Smart Scheduling:</strong> Books the initial in-home or phone assessment directly onto your care coordinator's calendar.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Automated Reminders:</strong> Sends text and email reminders ahead of the assessment to reduce no-shows.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Urgency Escalation:</strong> Recognizes time-sensitive situations (recent fall, hospital discharge) and flags your on-call coordinator immediately.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Frictionless Rescheduling:</strong> Lets families reschedule without a callback, keeping the inquiry warm instead of going cold.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Intake Paperwork &amp; CRM Sync</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Auto-Generated Intake Forms:</strong> Prepares the care agreement and intake paperwork ahead of the first visit, so your coordinator isn't starting from a blank page.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Missed Call Deflection:</strong> If your office line is busy, our system catches the overflow so no family's first call goes unanswered.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Analytics &amp; Call Intel:</strong> Summarizes each inquiry's needs and urgency so your team walks into the assessment prepared.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Bilingual Capabilities:</strong> Comfortably manages English and Spanish inquiries to serve more families in your community.</span>
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
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Inquiry Conversion</div>
                 <div className="text-3xl font-extrabold text-emerald-400 tracking-tight mb-4"><AnimatedCounter value={38} prefix="+" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="Families lost to the agency that answered first" />
            </div>

            <div className="bg-slate-900/50 border border-slate-700/50 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">After-Hours Bookings</div>
                 <div className="text-3xl font-extrabold text-emerald-400 tracking-tight mb-4"><AnimatedCounter value={54} prefix="+" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="Inquiries that come in outside routine 9-5 office hours" />
            </div>

            <div className="bg-slate-900/50 border border-slate-700/50 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Assessment No-Shows</div>
                 <div className="text-3xl font-extrabold text-emerald-400 tracking-tight mb-4"><AnimatedCounter value={31} prefix="-" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="Wasted coordinator time on missed first-assessment visits" />
            </div>

            <div className="bg-slate-900/50 border border-slate-700/50 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Admin Overhead</div>
                 <div className="text-3xl font-extrabold text-emerald-400 tracking-tight mb-4"><AnimatedCounter value={40} prefix="-" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="Office staff hours spent on intake calls and paperwork prep" />
            </div>
         </div>
      </div>

      {/* Role Overview & Benefits */}
      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <div className="p-8 md:p-12 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none"></div>
           <h3 className="text-3xl font-bold text-slate-50 mb-6 relative z-10">Role Overview</h3>
           <p className="text-slate-400 text-lg leading-relaxed mb-6 relative z-10">
             Meet the first, warmest voice a family hears when they're searching for care. Our System's Home Care Intake AI answers every inquiry at any hour, listens with patience, and gets the family onto your calendar for an assessment.
           </p>
           <p className="text-slate-400 text-lg leading-relaxed mb-6 relative z-10">
             It frees your care coordinators to focus on the families already in front of them, while making sure the family calling at 11pm about their mother's fall gets a real, caring response instead of a voicemail.
           </p>
        </div>

        <div className="p-8 md:p-12 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden flex flex-col justify-center">
           <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none"></div>
           <h3 className="text-3xl font-bold text-slate-50 mb-6 relative z-10">Why Agency Owners Love It</h3>
           <p className="text-slate-400 text-lg leading-relaxed mb-8 relative z-10">
             Families rarely leave a voicemail — they simply call the next agency on their list. Our platform guarantees a warm, immediate response and delivers:
           </p>
           
           <div className="space-y-4 mb-8 relative z-10">
             <div className="flex items-center gap-3">
               <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
               <span className="text-slate-300 font-medium">Capture of urgent, time-sensitive inquiries any hour of the day</span>
             </div>
             <div className="flex items-center gap-3">
               <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
               <span className="text-slate-300 font-medium">Consistent, compassionate tone on every single call</span>
             </div>
             <div className="flex items-center gap-3">
               <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
               <span className="text-slate-300 font-medium">Higher assessment-to-client conversion through same-day follow-up</span>
             </div>
           </div>
           
           <div className="space-y-4 relative z-10">
             <div className="flex gap-4 items-start bg-slate-900/50 p-4 rounded-xl border border-red-500/20">
               <span className="font-bold text-red-500 flex-shrink-0 w-24 flex items-center gap-1">
                 <XCircle className="w-4 h-4" /> Without:
               </span>
               <span className="text-sm text-slate-300">Families lost to whichever agency picked up first, exhausted office staff, missed after-hours inquiries.</span>
             </div>
             <div className="flex gap-4 items-start bg-slate-900/50 p-4 rounded-xl border border-emerald-500/20">
               <span className="font-bold text-emerald-500 flex-shrink-0 w-24 flex items-center gap-1">
                 <CheckCircle2 className="w-4 h-4" /> With AI:
               </span>
               <span className="text-sm text-slate-300">0% missed inquiries, warm same-call response, fully booked assessments, and steady client growth.</span>
             </div>
           </div>
        </div>
      </div>

      <SystemAutomations automations={[
  {
    "title": "LeadLoom",
    "icon": "🎯",
    "description": "Engages every inbound inquiry the moment it comes in, screening gently before handoff to your care coordinator.",
    "href": "/automations/leadloom"
  },
  {
    "title": "AppointMate",
    "icon": "📅",
    "description": "Automates scheduling for the first in-home assessment, based on your coordinator's real-time availability.",
    "href": "/automations/appointmate"
  },
  {
    "title": "DocuFlow",
    "icon": "📄",
    "description": "Auto-generates the care agreement and intake paperwork ahead of the first visit, straight from the call.",
    "href": "/automations/docuflow"
  }
]} />

      {/* CTA Box */}
      <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 text-center relative overflow-hidden shadow-2xl">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
         <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none"></div>
         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
         
         <div className="relative z-10">
           <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6 tracking-tight">Stop losing families to a faster answer</h2>
           <p className="text-xl text-slate-400 mb-2 max-w-2xl mx-auto">
             In home care, the agency that answers first is usually the one a family trusts.
           </p>
           <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
             Activate the Home Care Intake System today, make sure every family's first call is met with warmth, and grow your client base without growing your front office.
           </p>
           
           <Link href="/pricing" className="inline-flex items-center gap-2 px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-full transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:-translate-y-1 text-lg">
              Activate It <ChevronRight className="w-5 h-5" />
           </Link>
         </div>
      </div>

    </div>
  );
}
