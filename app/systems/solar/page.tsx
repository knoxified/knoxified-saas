import { FileText, Zap } from 'lucide-react';

import { PhoneCall, CheckCircle2, ChevronRight, XCircle, Calendar, Scale, Sun, TrendingUp } from 'lucide-react';

import { SystemAutomations } from '@/app/components/system-automations';
import { AnimatedCounter } from '@/app/components/animated-counter';
import Link from 'next/link';
import Image from 'next/image';
import { BenchmarkWidget } from '@/app/components/benchmark-widget';
import { AIVoiceSample } from '@/components/ui/ai-voice-sample';

export default function SolarSystemPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Solar Consultant System',
    description: 'Automate Lead Qualification, Follow-ups, and Solar Consultation Scheduling 24/7.',
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
             <Sun className="w-4 h-4" /> Solar Consultant
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 mb-6 tracking-tight leading-tight">
            Solar Consultant System
          </h1>
          <p className="text-xl font-medium text-cyan-400 mb-6">
            Transform Solar Lead Generation &mdash; 24/7 Qualification, Education, and Automated Booking.
          </p>
          <div className="text-lg text-slate-400 mb-10 leading-relaxed space-y-4">
            <p>
              In the solar industry, generating leads is easy, but qualifying and closing them is a bottleneck. Waiting hours to call back a lead usually results in a wasted ad spend.
            </p>
            <p>instantly engages homeowner inquiries, verifies roof viability and energy bills, educates them on tax incentives, and books ready-to-buy appointments directly onto your closers&apos; calendars. System</p>
          </div>

          <AIVoiceSample 
            industry="solar"
            text="Hi, this is the Solar System. Switching to renewable energy shouldn&apos;t be confusing. I can instantly verify your roof&apos;s sun exposure and calculate your exact state tax incentives. Ready to see how much you could save on your monthly bill?"
          />
          
          <Link href="/pricing" className="inline-flex px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            Activate Solar System
          </Link>
        </div>
        
        <div className="relative group perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="w-full aspect-square relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 overflow-hidden flex items-center justify-center transform transition-transform duration-700 hover:rotate-y-12 shadow-2xl">
            <div className="relative w-[80%] h-[80%]">
              <Image src="/hotel_system.png" alt="Solar System Icon" fill className="object-contain mix-blend-screen opacity-90 drop-shadow-[0_0_50px_rgba(6,182,212,0.6)]" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 blur-[50px] rounded-full mix-blend-screen"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/20 blur-[60px] rounded-full mix-blend-screen"></div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mb-24">
         <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-12 text-center tracking-tight">Core Competencies</h2>
         
         <div className="grid md:grid-cols-2 gap-8">
{/* Voice Capability Add-on */}<div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl"><div className="flex items-center gap-4 mb-6"><div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400"><PhoneCall className="w-6 h-6" /></div><h3 className="text-2xl font-bold text-slate-50">Inbound &amp; Proactive Voice</h3></div><ul className="space-y-5"><li className="flex items-start gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" /><span><strong>Inbound Handling:</strong> Instantly answers and routes incoming calls 24/7 without placing customers on hold.</span></li><li className="flex items-start gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" /><span><strong>Proactive Follow-Up Calling:</strong> Places follow-up, confirmation, and re-engagement calls to your existing customers and leads, based on their prior consent.</span></li></ul></div>
            {/* Category 1 */}
            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Sun className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Instant Lead Qualification</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Instant Outreach:</strong> Contacts new leads within seconds of submission, guaranteeing maximum response rates.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Roof & Ownership Verification:</strong> Pre-qualifies homeowners, checking roof age, shading, and property ownership status gracefully.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Bill Requirements:</strong> Confirms average monthly utility bills to ensure the prospect meets your minimum KW thresholds.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>DQ Screening:</strong> Filters out renters, heavily shaded homes, or low-bill households so closers don&apos;t waste their time.</span>
                </li>
              </ul>
            </div>

            {/* Category 2 */}
            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Education & Overcoming Objections</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Incentive Breakdown:</strong> Explains complex federal tax credits (ITC) and local net-metering laws in simple, conversational terms.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Financing Guidance:</strong> Answers preliminary questions about zero-down loans, PPAs, or cash options.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Objection Handling:</strong> Defuses common concerns about roof damage, maintenance, or hidden costs before the live pitch.</span>
                </li>
              </ul>
            </div>

            {/* Category 3 */}
            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Appointment Synchronization</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Closer Handoff:</strong> Syncs directly with Calendly/GoHighLevel to book live consultations with your sales team.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Utility Bill Collection:</strong> Reminds pre-booked prospects to gather their power bills before the consultation.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>No-Show Prevention:</strong> Sends strategic text reminders, raising show-rates dramatically.</span>
                </li>
              </ul>
            </div>

            {/* Category 4 */}
            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Automation & Re-engagement</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Long-Term Nurturing:</strong> Checks in on cold leads or homeowners waiting for financing approval automatically.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Post-Install Operations:</strong> Follows up post-installation to secure referrals and 5-star Google reviews.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Multi-Channel Tracking:</strong> Operates seamlessly over SMS, WhatsApp, or embedded web chat widgets.</span>
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
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Lead Conversion</div>
                 <div className="text-3xl font-extrabold text-emerald-400 tracking-tight mb-4"><AnimatedCounter value={55} prefix="+" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="Lost opportunities due to delayed callbacks on paid ad campaigns" />
            </div>

            <div className="bg-slate-900/50 border border-slate-700/50 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Appointment Show Rate</div>
                 <div className="text-3xl font-extrabold text-emerald-400 tracking-tight mb-4"><AnimatedCounter value={40} prefix="+" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="No-shows causing wasted sales team drives and missing quotes" />
            </div>

            <div className="bg-slate-900/50 border border-slate-700/50 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Closer Handoff Time</div>
                 <div className="text-3xl font-extrabold text-emerald-400 tracking-tight mb-4"><AnimatedCounter value={70} prefix="-" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="Time spent by closers doing manual property review and dialing" />
            </div>

            <div className="bg-slate-900/50 border border-slate-700/50 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Cost Per Acquisition</div>
                 <div className="text-3xl font-extrabold text-emerald-400 tracking-tight mb-4"><AnimatedCounter value={30} prefix="-" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="High marketing CPAs inflated by unresponsive pipelines" />
            </div>
         </div>
      </div>

      {/* Role Overview & Benefits */}
      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <div className="p-8 md:p-12 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none"></div>
           <h3 className="text-3xl font-bold text-slate-50 mb-6 relative z-10">Role Overview</h3>
           <p className="text-slate-400 text-lg leading-relaxed mb-6 relative z-10">
             Meet your ultimate setter. Our System&apos;s Solar Consultant AI bridges the gap between top-of-funnel ad clicks and fully qualified sit-down appointments. It acts as a tireless SDR, filtering out unqualified properties while gently educating viable homeowners.
           </p>
           <p className="text-slate-400 text-lg leading-relaxed mb-6 relative z-10">
             It frees your human sales team from endless dialing so they can focus entirely on presenting customized solar designs and closing deals in the home.
           </p>
        </div>

        <div className="p-8 md:p-12 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden flex flex-col justify-center">
           <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none"></div>
           <h3 className="text-3xl font-bold text-slate-50 mb-6 relative z-10">Why Solar Installers Love It</h3>
           <p className="text-slate-400 text-lg leading-relaxed mb-8 relative z-10">
             Buying solar is a high-trust process. The first interaction matters. Our system ensures this interaction is seamless, informative, and immediate:
           </p>
           
           <div className="space-y-4 mb-8 relative z-10">
             <div className="flex items-center gap-3">
               <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
               <span className="text-slate-300 font-medium">100% instant response on inbound Facebook/Google leads</span>
             </div>
             <div className="flex items-center gap-3">
               <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
               <span className="text-slate-300 font-medium">Automatic flagging of poor-fit properties for team review</span>
             </div>
             <div className="flex items-center gap-3">
               <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
               <span className="text-slate-300 font-medium">Calendar synchronization directly to closer pipelines</span>
             </div>
           </div>
           
           <div className="space-y-4 relative z-10">
             <div className="flex gap-4 items-start bg-slate-900/50 p-4 rounded-xl border border-red-500/20">
               <span className="font-bold text-red-500 flex-shrink-0 w-24 flex items-center gap-1">
                 <XCircle className="w-4 h-4" /> Without:
               </span>
               <span className="text-sm text-slate-300">SDR turnover, dropped leads, high ad spend waste, and unverified appointments.</span>
             </div>
             <div className="flex gap-4 items-start bg-slate-900/50 p-4 rounded-xl border border-emerald-500/20">
               <span className="font-bold text-emerald-500 flex-shrink-0 w-24 flex items-center gap-1">
                 <CheckCircle2 className="w-4 h-4" /> With AI:
               </span>
               <span className="text-sm text-slate-300">Efficient calendars, thoroughly vetted homeowners, and vastly reduced customer acquisition costs.</span>
             </div>
           </div>
        </div>
      </div>

      <SystemAutomations automations={[
  {
    "title": "QualiSync",
    "icon": "🚀",
    "description": "Engages new leads instantly via chat or SMS to vet them before handing off to sales.",
    "href": "/automations/qualisync"
  },
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
    "title": "DocuFlow",
    "icon": "📄",
    "description": "Auto-generates contracts, proposals, and reports from CRM data instantly.",
    "href": "/automations/docuflow"
  },
  {
    "title": "SignSync",
    "icon": "🖋️",
    "description": "Manages the entire e-signature lifecycle, from sending to follow-ups and final storage.",
    "href": "/automations/signsync"
  }
]} />

      {/* CTA Box */}
      <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 text-center relative overflow-hidden shadow-2xl">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
         <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none"></div>
         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
         
         <div className="relative z-10">
           <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6 tracking-tight">Scale your solar pipeline</h2>
           <p className="text-xl text-slate-400 mb-2 max-w-2xl mx-auto">
             Stop wasting your best closers&apos; time on cold outreach and tire-kickers.
           </p>
           <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
             Activate Solar Consultant System today and build a reliable, pre-qualified calendar of homeowners ready to embrace renewable energy.
           </p>
           
           <Link href="/pricing" className="inline-flex items-center gap-2 px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-full transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:-translate-y-1 text-lg">
              Activate It <ChevronRight className="w-5 h-5" />
           </Link>
         </div>
      </div>

    </div>
  );
}
