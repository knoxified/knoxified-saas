import { PhoneCall, CheckCircle2, ChevronRight, XCircle, Briefcase, BarChart, Globe } from 'lucide-react';

import { SystemAutomations } from '@/app/components/system-automations';
import { AnimatedCounter } from '@/app/components/animated-counter';
import Link from 'next/link';
import { motion } from 'motion/react';
import { BenchmarkWidget } from '@/app/components/benchmark-widget';
import { AIVoiceSample } from '@/components/ui/ai-voice-sample';

export default function HotelSystemPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Hotel Receptionist System`,
    description: 'Flawless First Impressions, Every Time — 24/7 Guest Care, Human-Like Service',
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
             Hospitality System
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 mb-6 tracking-tight leading-tight">
            Hotel Receptionist System
          </h1>
          <p className="text-xl font-medium text-cyan-400 mb-6">
            Flawless First Impressions, Every Time — 24/7 Guest Care, Human-Like Service
          </p>
          <div className="text-lg text-slate-400 mb-10 leading-relaxed space-y-4">
            <p>
              In hospitality, every interaction defines your brand. 71% of guests expect instant responses. Our system ensures every call, request, and booking is handled instantly, warmly, and accurately elevating satisfaction, loyalty, and revenue.
            </p>
            <p>
              Automation doesn’t replace care. It amplifies it, delivering intelligent, empathetic service while reducing staff stress and operational bottlenecks.
            </p>
          </div>

                                        <AIVoiceSample 
            industry="hotel"
            text="Welcome to the Hospitality System. I see you&apos;re looking for a getaway this weekend. You&apos;re in luck—I have exactly one ocean-view suite left, and I can hold it under your name right now before it books up. Would you like me to secure that reservation for you?"
          />
          
          <Link href="/pricing" className="inline-flex px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            Activate Hotel System
          </Link>
        </div>
        
        <div className="relative group perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="w-full aspect-square relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 overflow-hidden flex items-center justify-center transform transition-transform duration-700 hover:rotate-y-12 shadow-2xl">
            {/* The Logo */}
            <img src="/hotel_system.png" alt="Hotel System" className="w-[80%] h-[80%] object-contain mix-blend-screen opacity-90 drop-shadow-[0_0_50px_rgba(6,182,212,0.6)]" />
            
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
{/* Voice Capability Add-on */}<div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl"><div className="flex items-center gap-4 mb-6"><div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400"><PhoneCall className="w-6 h-6" /></div><h3 className="text-2xl font-bold text-slate-50">Inbound &amp; Proactive Voice</h3></div><ul className="space-y-5"><li className="flex items-start gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" /><span><strong>Inbound Handling:</strong> Instantly answers and routes incoming calls 24/7 without placing customers on hold.</span></li><li className="flex items-start gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" /><span><strong>Proactive Follow-Up Calling:</strong> Places follow-up, confirmation, and re-engagement calls to your existing customers and leads, based on their prior consent.</span></li></ul></div>
            {/* Category 1 */}
            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Guest Engagement & Reservation Management</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Instant Call Response:</strong> Answers every guest inquiry, reducing wait times and missed messages by up to 80%.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Reservation Handling:</strong> Books, modifies, and confirms stays in real time, fully synced with your Property Management System (PMS).</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Check-In & Check-Out Support:</strong> Handles arrivals, departures, late check-ins, early departures, and room availability inquiries automatically.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>VIP & Repeat Guest Recognition:</strong> Flags VIPs, repeat visitors, and special occasions for personalized, elevated experiences.</span>
                </li>
              </ul>
            </div>

            {/* Category 2 */}
            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Room & Service Coordination</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Cross-Department Integration:</strong> Coordinates housekeeping, kitchen, maintenance, and front-desk tasks seamlessly.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Amenity & Service Booking:</strong> Manages room service, spa appointments, tours, airport pickups, and concierge services automatically.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Event & Conference Room Management:</strong> Checks availability, capacity, and pricing instantly for bookings.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Upselling Recommendations:</strong> Suggests room upgrades, late checkouts, breakfast packages, or premium services naturally based on guest profile.</span>
                </li>
              </ul>
            </div>

            {/* Category 3 */}
            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Personalization & Communication</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Multilingual & Accent Adaptation:</strong> Delivers local-level service to global guests.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Guest Preference Tracking:</strong> Maintains visit history and personal preferences to personalize every interaction.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Tone & Sentiment Detection:</strong> Flags upset or frustrated guests for timely human escalation.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Reminders & Notifications:</strong> Sends confirmations, reminders, and updates via call, SMS, or message to reduce no-shows.</span>
                </li>
              </ul>
            </div>

            {/* Category 4 */}
            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <BarChart className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Operational Insights & Analytics</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Daily Summaries & Dashboards:</strong> Tracks bookings, cancellations, common requests, and guest concerns.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Service Trend Monitoring:</strong> Detects recurring complaints and operational bottlenecks before they impact reputation.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>CRM & PMS Integration:</strong> Feeds structured data automatically for reporting and management dashboards.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Staff Workload Optimization:</strong> Balances request volume and shift planning for smooth operations.</span>
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
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Guest Satisfaction</div>
                 <div className="text-3xl font-extrabold text-emerald-400 tracking-tight mb-4"><AnimatedCounter value={27} prefix="+" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="Irrevocable damage from negative online reviews" />
            </div>

            <div className="bg-slate-900/50 border border-slate-700/50 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Instant Responses</div>
                 <div className="text-5xl font-black text-emerald-500 tracking-tight mb-4"><AnimatedCounter value={100} prefix="" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="71% of modern guests demand immediate service" />
            </div>

            <div className="bg-slate-900/50 border border-slate-700/50 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Front-Desk Escalations</div>
                 <div className="text-5xl font-black text-emerald-500 tracking-tight mb-4"><AnimatedCounter value={23} prefix="-" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="Severe staff burnout from repetitive high-volume calls" />
            </div>

            <div className="bg-slate-900/50 border border-slate-700/50 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Room Upsells</div>
                 <div className="text-5xl font-black text-emerald-500 tracking-tight mb-4"><AnimatedCounter value={40} prefix="+" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="Lost revenue from unoffered premium upgrades" />
            </div>
         </div>
      </div>

      {/* Role Overview & Benefits */}
      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <div className="p-8 md:p-12 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none"></div>
           <h3 className="text-3xl font-bold text-slate-50 mb-6 relative z-10">Role Overview</h3>
           <p className="text-slate-400 text-lg leading-relaxed mb-6 relative z-10">
             Meet your always-on concierge. Hotel Receptionist System manages reservations, check-ins, event bookings, room service, and guest support with human-like empathy, proactive awareness, and operational precision.
           </p>
           <p className="text-slate-400 text-lg leading-relaxed relative z-10">
             Every interaction is seamless, personalized, and consistent making every guest feel valued from the first call to check-out.
           </p>
        </div>

        <div className="p-8 md:p-12 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none"></div>
           <h3 className="text-3xl font-bold text-slate-50 mb-6 relative z-10">Why Hotels Love It</h3>
           <p className="text-slate-400 text-lg leading-relaxed mb-6 relative z-10">
             Delays, missed calls, or inconsistent service can cost reputation, retention, and revenue. Hotels report:
           </p>
           <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
             <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/50 text-center">
               <div className="text-3xl font-bold text-cyan-400 mb-1">27%</div>
               <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Higher Guest Satisfaction</div>
             </div>
             <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/50 text-center">
               <div className="text-3xl font-bold text-cyan-400 mb-1">23%</div>
               <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Fewer Front-Desk Escalations</div>
             </div>
           </div>
           
           <div className="space-y-4 relative z-10">
             <div className="flex gap-4 items-start bg-slate-900/50 p-4 rounded-xl border border-red-500/20">
               <span className="font-bold text-red-500 flex-shrink-0 w-24 flex items-center gap-1">
                 <XCircle className="w-4 h-4" /> Without:
               </span>
               <span className="text-sm text-slate-300">Slow responses, missed calls, staff burnout, inconsistent guest experience.</span>
             </div>
             <div className="flex gap-4 items-start bg-slate-900/50 p-4 rounded-xl border border-emerald-500/20">
               <span className="font-bold text-emerald-500 flex-shrink-0 w-24 flex items-center gap-1">
                 <CheckCircle2 className="w-4 h-4" /> With AI:
               </span>
               <span className="text-sm text-slate-300">Instant service, happier guests, higher occupancy, and smoother operations.</span>
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
  },
  {
    "title": "OmniPulse",
    "icon": "🚀",
    "description": "Sends personalized SMS updates to opted-in customers based on their account activity.",
    "href": "/automations/omnipulse"
  }
]} />

      {/* CTA Box */}
      <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 text-center relative overflow-hidden shadow-2xl">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
         <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none"></div>
         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
         
         <div className="relative z-10">
           <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6 tracking-tight">Systemize Luxury Service</h2>
           <p className="text-xl text-slate-400 mb-2 max-w-2xl mx-auto">
             Give your guests the luxury of instant, intelligent care.
           </p>
           <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
             This isn’t just automation, it’s luxury service, systemized. Activate the Hotel Receptionist Voice System today and turn every call into a five-star experience worth remembering.
           </p>
           
           <Link href="/pricing" className="inline-flex items-center gap-2 px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-full transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:-translate-y-1 text-lg">
              Activate It <ChevronRight className="w-5 h-5" />
           </Link>
         </div>
      </div>

    </div>
  );
}
