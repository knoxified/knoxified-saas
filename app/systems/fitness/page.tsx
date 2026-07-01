import { Megaphone, Clock } from 'lucide-react';

import { PhoneCall, CheckCircle2, ChevronRight, XCircle, Calendar, Users, Dumbbell } from 'lucide-react';

import { SystemAutomations } from '@/app/components/system-automations';
import { AnimatedCounter } from '@/app/components/animated-counter';
import Link from 'next/link';

import { BenchmarkWidget } from '@/app/components/benchmark-widget';
import { AIVoiceSample } from '@/components/ui/ai-voice-sample';

export default function FitnessSystemPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Gym & Fitness System`,
    description: 'Membership inquiries, trial bookings, follow-ups, reactivation campaigns, and class scheduling automated.',
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 backdrop-blur-md border border-cyan-500/30 text-sm font-medium text-cyan-400 mb-8 shadow-[0_0_15px_rgba(6,182,212,0.15)]"><Dumbbell className="w-4 h-4" /> Fitness System</div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 mb-6 tracking-tight leading-tight">Gym & Fitness System</h1>
          <p className="text-xl font-medium text-cyan-400 mb-6">
            Turn fitness inquiries into loyal members.
          </p>
          <div className="text-lg text-slate-400 mb-10 leading-relaxed space-y-4">
            <p>
             Don&apos;t let leads go cold. Our AI engages prospects the second they show interest and brings dormant members back to life.
            </p>
            <p>
              Membership inquiries, trial bookings, and class scheduling handled on autopilot, so your team can focus on the floor.
            </p>
          </div>

                                        <AIVoiceSample 
            industry="fitness"
            text="Welcome to the Fitness System. Let&apos;s not just talk about your goals, let&apos;s start hitting them. Your free trial is active—I can get you on the VIP list for tonight&apos;s 6 PM HIIT class. Shall I reserve your spot so you can jump right in?"
          />
          
          <Link href="/pricing" className="inline-flex px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            Activate Gym & Fitness AI
          </Link>
        </div>
        
        <div className="relative group perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="w-full aspect-square relative bg-slate-800/50 backdrop-blur-md rounded-2xl border border-slate-700/50 flex flex-col justify-center items-center shadow-2xl overflow-hidden transform transition-transform duration-700 hover:rotate-y-12">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
            <img src="/hotel_system.png" alt="Gym System Logo" className="w-[80%] h-[80%] object-contain mix-blend-screen opacity-90 drop-shadow-[0_0_50px_rgba(6,182,212,0.6)]" />
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
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Memberships & Trials</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Instant Inquiries:</strong> Automatically text back leads immediately to answer pricing, amenities, and facility questions 24/7.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Trial Bookings:</strong> Convert organic interest into scheduled facility tours and day passes within minutes, before they check out a competitor.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Megaphone className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Reactivation & Campaigns</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Win-back Campaigns:</strong> Intelligently reach out to dormant members who haven&apos;t visited in 90 days with customized return offers.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Promotion Alerts:</strong> Send targeted SMS/Email blasts for new specialty classes, PT packages, or fitness challenges to boost engagement.</span>
                </li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Class & PT Scheduling</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Automated Booking:</strong> Seamlessly coordinate calendars for group fitness sessions, managing capacity limits and waitlists.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Smart Reminders:</strong> Send timely SMS and email reminders to members for scheduled personal training, drastically reducing no-shows.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Member Onboarding & Support</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Guided First 30 Days:</strong> Drip automated app walkthroughs, nutritional guides, and check-ins during the critical introductory month.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Facility Support:</strong> Offload the front desk by handling common inquiries like account freezes, lost and found, and billing updates through automated logic.</span>
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
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Trial Conversions</div>
                 <div className="text-3xl font-extrabold text-emerald-400 tracking-tight mb-4"><AnimatedCounter value={35} prefix="+" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="Boosts trial conversion rates with instant engagement" />
            </div>

            <div className="bg-slate-900/50 border border-slate-700/50 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Member Churn</div>
                 <div className="text-5xl font-black text-emerald-500 tracking-tight mb-4"><AnimatedCounter value={28} prefix="-" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="Significantly lowers churn through continuous nurturing" />
            </div>

            <div className="bg-slate-900/50 border border-slate-700/50 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Class Attendance</div>
                 <div className="text-5xl font-black text-emerald-500 tracking-tight mb-4"><AnimatedCounter value={40} prefix="+" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="Higher attendance via automated push reminders" />
            </div>

            <div className="bg-slate-900/50 border border-slate-700/50 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Reactivations</div>
                 <div className="text-5xl font-black text-emerald-500 tracking-tight mb-4"><AnimatedCounter value={18} prefix="+" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="Dormant members brought back via WinBack campaigns" />
            </div>
         </div>
      </div>

      {/* Role Overview & Benefits */}
      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <div className="p-8 md:p-12 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none"></div>
           <h3 className="text-3xl font-bold text-slate-50 mb-6 relative z-10">Role Overview</h3>
           <p className="text-slate-400 text-lg leading-relaxed mb-6 relative z-10">
             Your relentless digital sales rep and front-desk coordinator. Our System Gym & Fitness AI acts as your dedicated team, capturing prospective members the moment they reach out, scheduling them for trials, and keeping current members engaged.
           </p>
        </div>

        <div className="p-8 md:p-12 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none"></div>
           <h3 className="text-3xl font-bold text-slate-50 mb-6 relative z-10">Why Fitness Centers Love It</h3>
           <p className="text-slate-400 text-lg leading-relaxed mb-6 relative z-10">
             Delayed follow-ups and unengaged members hurt your bottom line. Fitness owners report:
           </p>
           
           <div className="space-y-4 relative z-10">
             <div className="flex gap-4 items-start bg-slate-900/50 p-4 rounded-xl border border-red-500/20">
               <span className="font-bold text-red-500 flex-shrink-0 w-24 flex items-center gap-1">
                 <XCircle className="w-4 h-4" /> Without:
               </span>
               <span className="text-sm text-slate-300">Leads go cold, high drop-off from ignored texts, empty classes from no-shows.</span>
             </div>
             <div className="flex gap-4 items-start bg-slate-900/50 p-4 rounded-xl border border-emerald-500/20">
               <span className="font-bold text-emerald-500 flex-shrink-0 w-24 flex items-center gap-1">
                 <CheckCircle2 className="w-4 h-4" /> With AI:
               </span>
               <span className="text-sm text-slate-300">Instant trial bookings, re-engaged old leads, and fully booked classes.</span>
             </div>
           </div>
        </div>
      </div>

      <SystemAutomations automations={[
        {
          "title": "LeadLoom",
          "icon": "🧲",
          "description": "Engages top-of-funnel website visitors, answering facility questions and driving them directly into free trials.",
          "href": "/automations/leadloom"
        },
        {
          "title": "AppointMate",
          "icon": "📅",
          "description": "Automates group fitness reservations, PT scheduling, and capacity thresholds to completely eliminate double bookings.",
          "href": "/automations/appointmate"
        },
        {
          "title": "ReminderBot",
          "icon": "⏰",
          "description": "Fires multi-channel reminders before personal training and intro sessions to minimize expensive no-shows.",
          "href": "/automations/reminderbot"
        },
        {
          "title": "WinBackBot",
          "icon": "🔥",
          "description": "Identifies historically dormant accounts or recent cancelations and automatically re-engages them with personalized welcome-back discounts.",
          "href": "/automations/winbackbot"
        },
        {
          "title": "ProofPulse",
          "icon": "⭐",
          "description": "Detects high-attendance check-ins and prompts the most active members to leave glowing local reviews.",
          "href": "/automations/proofpulse"
        }
      ]} />

      {/* CTA Box */}
      <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 text-center relative overflow-hidden shadow-2xl">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
         <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none"></div>
         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
         
         <div className="relative z-10">
           <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6 tracking-tight">Activate Gym & Fitness AI</h2>
           <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
             Fill your classes, boost your memberships, and win back dormant clients.
           </p>
           
           <Link href="/pricing" className="inline-flex items-center gap-2 px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-full transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:-translate-y-1 text-lg">
              Activate It <ChevronRight className="w-5 h-5" />
           </Link>
         </div>
      </div>
    </div>
  );
}
