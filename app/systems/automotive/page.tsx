import { PhoneCall, CheckCircle2, ChevronRight, XCircle, Car, Calendar, Users, Wrench } from 'lucide-react';

import { SystemAutomations } from '@/app/components/system-automations';
import { AnimatedCounter } from '@/app/components/animated-counter';
import Link from 'next/link';

import { BenchmarkWidget } from '@/app/components/benchmark-widget';
import { AIVoiceSample } from '@/components/ui/ai-voice-sample';

export default function AutomotiveSystemPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Automotive Dealership System`,
    description: 'Test drive bookings, lead qualification, and service reminders handled automatically.',
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
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 backdrop-blur-md border border-cyan-500/30 text-sm font-medium text-cyan-400 mb-8 shadow-[0_0_15px_rgba(6,182,212,0.15)]"><Car className="w-4 h-4" /> Automotive System</div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 mb-6 tracking-tight leading-tight">
            Automotive Dealership System
          </h1>
          <p className="text-xl font-medium text-cyan-400 mb-6">
            Accelerate your dealership&apos;s lead-to-key pipeline.
          </p>
          <div className="text-lg text-slate-400 mb-10 leading-relaxed space-y-4">
            <p>
             Stop letting interested buyers shop around. Engage them instantly, qualify their financing needs, and get them on the lot for a test drive.
            </p>
            <p>
              Test drive bookings, lead qualification, and service reminders handled automatically, getting more buyers in the door faster.
            </p>
          </div>

                                        <AIVoiceSample 
            industry="automotive"
            text="Hi, thanks for calling the Automotive System. I see you&apos;ve been eyeing the 2024 Model Y. I can pull up our inventory in real-time—would you like to swing by this Thursday afternoon for a VIP test drive? We can have it pulled around and ready for you."
          />
          
          <Link href="/pricing" className="inline-flex px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            Activate Automotive Dealership AI
          </Link>
        </div>
        
        <div className="relative group perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="w-full aspect-square relative bg-slate-800/50 backdrop-blur-md rounded-2xl border border-slate-700/50 flex flex-col justify-center items-center shadow-2xl relative overflow-hidden transform transition-transform duration-700 hover:rotate-y-12">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
            <img src="/hotel_system.png" alt="Automotive Dealership System Logo" className="w-[80%] h-[80%] object-contain mix-blend-screen opacity-90 drop-shadow-[0_0_50px_rgba(6,182,212,0.6)]" />
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mb-24">
         <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-12 text-center tracking-tight">Core Competencies</h2>
         
         <div className="grid md:grid-cols-2 gap-8">
{/* Voice Capability Add-on */}<div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl"><div className="flex items-center gap-4 mb-6"><div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400"><PhoneCall className="w-6 h-6" /></div><h3 className="text-2xl font-bold text-slate-50">Inbound &amp; Proactive Voice</h3></div><ul className="space-y-5"><li className="flex items-start gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" /><span><strong>Inbound Handling:</strong> Instantly answers and routes incoming calls 24/7 without placing customers on hold.</span></li><li className="flex items-start gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" /><span><strong>Proactive Follow-Up Calling:</strong> Places follow-up, confirmation, and re-engagement calls to your existing customers and leads, based on their prior consent.</span></li></ul></div>
            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Test Drives & Showroom</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Automated Scheduling:</strong> Books showroom visits seamlessly right from the first inquiry, across website chat, Facebook, or SMS.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Smart Reminders:</strong> Reduces no-shows by texting confirmation, directions, and required documents (like license/insurance) to the buyer.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Lead Qualification & F&I</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Pre-screening:</strong> Collects trade-in info (VIN, mileage) and desired financing status before the customer ever steps on the lot.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Inventory Matching:</strong> Instantly suggests highly matched alternatives if the desired trim or configuration is out of stock.</span>
                </li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Service Department</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Service Reminders:</strong> Automates routine maintenance scheduling (oil changes, tire rotations) and handles recall lookups instantly.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Status Updates:</strong> Keeps customers informed via SMS about when their vehicle is ready, loaner car status, and preliminary diagnostic estimates.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">After-Sales & Retention</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>30-Day Check-ins:</strong> Trigger automated check-ins post-purchase to ensure satisfaction and ask for glowing reviews.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Lease Renewal Funnel:</strong> Automatically notify the sales floor and begin engaging customers 60-90 days before their current lease expires.</span>
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
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Showroom Visits</div>
                 <div className="text-3xl font-extrabold text-emerald-400 tracking-tight mb-4"><AnimatedCounter value={42} prefix="+" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="Higher test-drive booking and show rates" />
            </div>

            <div className="bg-slate-900/50 border border-slate-700/50 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Lead Decay</div>
                 <div className="text-5xl font-black text-emerald-500 tracking-tight mb-4"><AnimatedCounter value={85} prefix="-" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="Instant engagement prevents leads from shopping elsewhere" />
            </div>

            <div className="bg-slate-900/50 border border-slate-700/50 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Service Retention</div>
                 <div className="text-5xl font-black text-emerald-500 tracking-tight mb-4"><AnimatedCounter value={30} prefix="+" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="More past buyers returning for routine maintenance" />
            </div>

            <div className="bg-slate-900/50 border border-slate-700/50 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Sales Efficiency</div>
                 <div className="text-5xl font-black text-emerald-500 tracking-tight mb-4"><AnimatedCounter value={25} prefix="+" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="Sales reps spend less time qualifying, more time closing" />
            </div>
         </div>
      </div>

      {/* Role Overview & Benefits */}
      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <div className="p-8 md:p-12 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none"></div>
           <h3 className="text-3xl font-bold text-slate-50 mb-6 relative z-10">Role Overview</h3>
           <p className="text-slate-400 text-lg leading-relaxed mb-6 relative z-10">
             Your most relentless Business Development Center (BDC) agent. Automotive Dealership System turns your website and ad campaigns into a high-octane booking engine, delivering pre-qualified buyers directly to your sales floor.
           </p>
        </div>

        <div className="p-8 md:p-12 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none"></div>
           <h3 className="text-3xl font-bold text-slate-50 mb-6 relative z-10">Why Dealerships Love It</h3>
           <p className="text-slate-400 text-lg leading-relaxed mb-6 relative z-10">
             Buyers move fast. If you don&apos;t respond in minutes, your competitor will. Dealerships report:
           </p>
           
           <div className="space-y-4 relative z-10">
             <div className="flex gap-4 items-start bg-slate-900/50 p-4 rounded-xl border border-red-500/20">
               <span className="font-bold text-red-500 flex-shrink-0 w-24 flex items-center gap-1">
                 <XCircle className="w-4 h-4" /> Without:
               </span>
               <span className="text-sm text-slate-300">Leads rot in the CRM, low service department retention, salespeople wasting time on unqualified buyers.</span>
             </div>
             <div className="flex gap-4 items-start bg-slate-900/50 p-4 rounded-xl border border-emerald-500/20">
               <span className="font-bold text-emerald-500 flex-shrink-0 w-24 flex items-center gap-1">
                 <CheckCircle2 className="w-4 h-4" /> With AI:
               </span>
               <span className="text-sm text-slate-300">Instant test-drive bookings, fully booked service bays, and highly prepared salespeople.</span>
             </div>
           </div>
        </div>
      </div>

      <SystemAutomations automations={[
        {
          "title": "LeadLoom",
          "icon": "🧲",
          "description": "Engages top-of-funnel website visitors, answering inventory questions and screening financing requirements instantly.",
          "href": "/automations/leadloom"
        },
        {
          "title": "AppointMate",
          "icon": "📅",
          "description": "Automates test drive and service bay scheduling to eliminate the back-and-forth and keep schedules full.",
          "href": "/automations/appointmate"
        },
        {
          "title": "ReminderBot",
          "icon": "⏰",
          "description": "Fires timely multi-channel reminders before sales appointments and service visits to slash no-show rates.",
          "href": "/automations/reminderbot"
        },
        {
          "title": "WinBackBot",
          "icon": "🔥",
          "description": "Engages past buyers whose leases are ending or who are statistically due for a vehicle upgrade.",
          "href": "/automations/winbackbot"
        },
        {
          "title": "ReplyBot",
          "icon": "💬",
          "description": "Monitors dealer reviews across the web, auto-drafting thoughtful, professional replies to safeguard local reputation.",
          "href": "/automations/replybot"
        },
        {
          "title": "ProofPulse",
          "icon": "⭐",
          "description": "Triggers review requests seamlessly after a successful vehicle purchase or 5-star service appointment.",
          "href": "/automations/proofpulse"
        }
      ]} />

      <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 text-center relative overflow-hidden shadow-2xl">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
         <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none"></div>
         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
         <div className="relative z-10">
           <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6 tracking-tight">Activate Dealership AI</h2>
           <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
             Keep your service bays full and put more qualified buyers behind the wheel.
           </p>
           <Link href="/pricing" className="inline-flex items-center gap-2 px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-full transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:-translate-y-1 text-lg">
              Activate It <ChevronRight className="w-5 h-5" />
           </Link>
         </div>
      </div>
    </div>
  );
}
