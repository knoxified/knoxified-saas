import { MessageSquare, Wallet } from 'lucide-react';

import { PhoneCall, CheckCircle2, ChevronRight, XCircle, Users, Wrench, Building } from 'lucide-react';

import { SystemAutomations } from '@/app/components/system-automations';
import { AnimatedCounter } from '@/app/components/animated-counter';
import Link from 'next/link';

import { BenchmarkWidget } from '@/app/components/benchmark-widget';
import { AIVoiceSample } from '@/components/ui/ai-voice-sample';

export default function PropertyManagementSystemPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Property Management System",
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 backdrop-blur-md border border-cyan-500/30 text-sm font-medium text-cyan-400 mb-8 shadow-[0_0_15px_rgba(6,182,212,0.15)]"><Building className="w-4 h-4" /> Property Management System</div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 mb-6 tracking-tight leading-tight">
            Property Management System
          </h1>
          <p className="text-xl font-medium text-cyan-400 mb-6">
            Eliminate late-night emergency calls and manual lease renewals.
          </p>
          <div className="text-lg text-slate-400 mb-10 leading-relaxed space-y-4">
            <p>
              Managing doors shouldn&apos;t mean drowning in support tickets and rent collection texts. Property Management System scales your capacity without expanding your team.
            </p>
            <p>
              Tenant inquiries, emergency maintenance triaging, rent reminders, vendor coordination, and lease renewal follow-ups are fully automated, keeping tenants happy and owners profitable.
            </p>
          </div>

                                        <AIVoiceSample 
            industry="property"
            text="Hello from the Property Management System. Are you a current resident trying to expedite a maintenance request, or a prospective tenant looking to get the keys to one of our premium vacant units?"
          />
          
          <Link href="/pricing" className="inline-flex px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            Activate Property AI
          </Link>
        </div>
        
        <div className="relative group perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="w-full aspect-square relative bg-slate-800/50 backdrop-blur-md rounded-2xl border border-slate-700/50 flex flex-col justify-center items-center shadow-2xl overflow-hidden transform transition-transform duration-700 hover:rotate-y-12">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
            <img src="/hotel_system.png" alt="Property System Logo" className="w-[80%] h-[80%] object-contain mix-blend-screen opacity-90 drop-shadow-[0_0_50px_rgba(6,182,212,0.6)]" />
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
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Tenant Inquiries</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>24/7 Applicant Q&A:</strong> Instantly answers leasing questions regarding pet policies, deposit requirements, and amenity details via SMS and web chat.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Onboarding:</strong> Automatically guides new tenants through lease signing portals, utility setup requirements, and move-in checklists.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Maintenance & Vendors</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Issue Triaging:</strong> Intelligently classifies maintenance requests, diagnosing urgency to escalate emergencies while filtering out minor DIY fixes.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Vendor Coordination:</strong> Automatically dispatches pre-approved contractors for urgent issues and manages scheduling ping-pong between tenants and vendors.</span>
                </li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Wallet className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Rent Collection</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Proactive Reminders:</strong> Sends timely SMS/email reminders days prior to the first of the month to drastically minimize late payments.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Late Fee Orchestration:</strong> Automates the awkward follow-up process and late fee notifications strictly according to lease terms.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Lease Renewals</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>90-Day Pathways:</strong> Initiates structured renewal follow-ups 90 days before lease maturity, assessing tenant intent to renew or vacate.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Turnover Mitigation:</strong> Seamlessly auto-schedules property walkthroughs or triggers marketing if a tenant decides to move out.</span>
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
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">On-Time Rent</div>
                 <div className="text-3xl font-extrabold text-emerald-400 tracking-tight mb-4"><AnimatedCounter value={25} prefix="+" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="Reduction in delinquent accounts via multi-channel reminders" />
            </div>

            <div className="bg-slate-900/50 border border-slate-700/50 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Support Tickets</div>
                 <div className="text-5xl font-black text-emerald-500 tracking-tight mb-4"><AnimatedCounter value={45} prefix="-" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="Drop in manual support volume due to automated FAQ deflection" />
            </div>

            <div className="bg-slate-900/50 border border-slate-700/50 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Renewal Rates</div>
                 <div className="text-5xl font-black text-emerald-500 tracking-tight mb-4"><AnimatedCounter value={18} prefix="+" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="Increase in tenant retention through early, structured engagement" />
            </div>

            <div className="bg-slate-900/50 border border-slate-700/50 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Vendor Response</div>
                 <div className="text-5xl font-black text-emerald-500 tracking-tight mb-4"><AnimatedCounter value={60} prefix="+" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="Faster maintenance resolution via direct auto-dispatching" />
            </div>
         </div>
      </div>

      {/* Role Overview & Benefits */}
      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <div className="p-8 md:p-12 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none"></div>
           <h3 className="text-3xl font-bold text-slate-50 mb-6 relative z-10">Role Overview</h3>
           <p className="text-slate-400 text-lg leading-relaxed mb-6 relative z-10">
             Your relentless property coordinator. Property Management System serves as the digital front door for your portfolio, handling the endless stream of minor requests, late alerts, and contractor scheduling so your property managers can focus on acquiring more doors.
           </p>
        </div>

        <div className="p-8 md:p-12 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none"></div>
           <h3 className="text-3xl font-bold text-slate-50 mb-6 relative z-10">Why PMs Love It</h3>
           <p className="text-slate-400 text-lg leading-relaxed mb-6 relative z-10">
             Without scale, property management becomes physically unsustainable. Burnout is high. AI solves this.
           </p>
           
           <div className="space-y-4 relative z-10">
             <div className="flex gap-4 items-start bg-slate-900/50 p-4 rounded-xl border border-red-500/20">
               <span className="font-bold text-red-500 flex-shrink-0 w-24 flex items-center gap-1">
                 <XCircle className="w-4 h-4" /> Without:
               </span>
               <span className="text-sm text-slate-300">3 AM emergency calls that turn out to be minor leaks, chasing down rent checks, chaotic vendor tracking.</span>
             </div>
             <div className="flex gap-4 items-start bg-slate-900/50 p-4 rounded-xl border border-emerald-500/20">
               <span className="font-bold text-emerald-500 flex-shrink-0 w-24 flex items-center gap-1">
                 <CheckCircle2 className="w-4 h-4" /> With AI:
               </span>
               <span className="text-sm text-slate-300">Intelligent maintenance triage, automated late fees, fully synced tenant communications, higher ROI for owners.</span>
             </div>
           </div>
        </div>
      </div>

      <SystemAutomations automations={[
        {
          "title": "MaintainBot",
          "icon": "🔧",
          "description": "Automates the intake, triage, and vendor assignment of property maintenance requests.",
          "href": "/automations/maintainbot"
        },
        {
          "title": "OmniServe",
          "icon": "💬",
          "description": "24/7 concierge for leasing questions, policy queries, and amenity availability across all properties.",
          "href": "/automations/omniserve"
        },
        {
          "title": "PulsePay",
          "icon": "💳",
          "description": "Automates multi-channel rent reminders and seamless late-fee execution.",
          "href": "/automations/pulsepay"
        },
        {
          "title": "LeaseSync",
          "icon": "📝",
          "description": "Automatically texts and emails tenants well before lease expiration to drive higher retention rates.",
          "href": "/automations/leasesync"
        },
        {
          "title": "AppointMate",
          "icon": "📅",
          "description": "Automates tour scheduling for prospective tenants to fill vacancies faster.",
          "href": "/automations/appointmate"
        }
      ]} />

      {/* CTA Box */}
      <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 text-center relative overflow-hidden shadow-2xl">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
         <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none"></div>
         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
         
         <div className="relative z-10">
           <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6 tracking-tight">Activate Property AI</h2>
           <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
             Transform chaos into an assembly line of efficiency. Let AI handle the tedious communication layer so you can manage more properties with less stress.
           </p>
           
           <Link href="/pricing" className="inline-flex items-center gap-2 px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-full transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:-translate-y-1 text-lg">
              Activate It <ChevronRight className="w-5 h-5" />
           </Link>
         </div>
      </div>
    </div>
  );
}
