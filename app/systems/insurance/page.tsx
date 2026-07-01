import { RefreshCw } from 'lucide-react';

import { PhoneCall, CheckCircle2, ChevronRight, XCircle, Shield, BarChart, CreditCard } from 'lucide-react';

import { SystemAutomations } from '@/app/components/system-automations';
import { AnimatedCounter } from '@/app/components/animated-counter';
import Link from 'next/link';
import { motion } from 'motion/react';
import { BenchmarkWidget } from '@/app/components/benchmark-widget';
import { AIVoiceSample } from '@/components/ui/ai-voice-sample';

export default function InsuranceSystemPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Insurance Concierge System`,
    description: 'Automate Every Client Interaction — 24/7, Human-Level Care',
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
             Insurance Concierge
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 mb-6 tracking-tight leading-tight">
            Insurance Concierge System
          </h1>
          <p className="text-xl font-medium text-cyan-400 mb-6">
            Automate Every Client Interaction — 24/7, Human-Level Care
          </p>
          <div className="text-lg text-slate-400 mb-10 leading-relaxed space-y-4">
            <p>
              In insurance, trust drives loyalty. Our System brings emotional intelligence and precision to your operations, ensuring every client is heard, supported, and guided clearly. 
            </p>
            <p>
              From claims to renewals, Our System turns complex insurance processes into calm, human conversations. Automation doesn’t replace care — it strengthens it.
            </p>
          </div>

                                        <AIVoiceSample 
            industry="insurance"
            text="Hello from the Insurance System. Navigating claims shouldn&apos;t be stressful. Whether you need to file a new claim immediately, or you&apos;re looking for a cheaper quote, I can confidently guide you through the entire process in under 5 minutes. Where should we start?"
          />
          
          <Link href="/pricing" className="inline-flex px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            Activate Insurance System
          </Link>
        </div>
        
        <div className="relative group perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="w-full aspect-square relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 overflow-hidden flex items-center justify-center transform transition-transform duration-700 hover:rotate-y-12 shadow-2xl">
            {/* The Logo */}
            <img src="/hotel_system.png" alt="Insurance System Logo" className="w-[80%] h-[80%] object-contain mix-blend-screen opacity-90 drop-shadow-[0_0_50px_rgba(6,182,212,0.6)]" />
            
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
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Claims & Intake Management</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Instant Client Engagement:</strong> Eliminates wait times and abandoned calls while building immediate trust.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Full Claims Intake:</strong> Captures incident details, documentation, policy references, and next steps seamlessly.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Policy Verification & Benefits:</strong> Translates technical insurance language into clear guidance clients understand.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Customer Sentiment Detection:</strong> Monitors stress, urgency, and tone, escalating sensitive cases instantly.</span>
                </li>
              </ul>
            </div>

            {/* Category 2 */}
            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Payments & Billing</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Payment Confirmations:</strong> Guides clients through secure transactions with clarity.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Billing Support:</strong> Handles questions, updates, and account changes efficiently.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Automated Reminders:</strong> Sends notifications for payments, pending documentation, and updates.</span>
                </li>
              </ul>
            </div>

            {/* Category 3 */}
            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Renewals & Retention</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Proactive Renewals:</strong> Identifies expiring policies and manages confirmations automatically.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Customer Engagement Profiles:</strong> Captures communication style, preferences, claim history, and interactions for personalized service.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Retention Insights:</strong> Tracks behavior patterns, predicts churn, and surfaces opportunities to optimize loyalty.</span>
                </li>
              </ul>
            </div>

            {/* Category 4 */}
            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <BarChart className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Operational Intelligence & Insights</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>24/7 Operations:</strong> Handles claims, billing, renewals, and inquiries without bottlenecks.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>CRM Integration:</strong> Logs structured call data, outcomes, and sentiment scores automatically, saving staff valuable time.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Dashboards & Analytics:</strong> Provides visibility into claim volumes, resolution timelines, satisfaction, and agent performance.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Post-Interaction Follow-Up:</strong> Automates satisfaction checks and follow-ups for continuous engagement.</span>
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
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Wait Times</div>
                 <div className="text-3xl font-extrabold text-emerald-400 tracking-tight mb-4"><AnimatedCounter value={0} prefix="" suffix=" Min" /></div>
              </div>
              <BenchmarkWidget description="High abandonment rate during peak claim periods" />
            </div>

            <div className="bg-slate-900/50 border border-slate-700/50 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Claim Intake Velocity</div>
                 <div className="text-3xl font-extrabold text-emerald-400 tracking-tight mb-4"><AnimatedCounter value={45} prefix="+" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="Slower claims processing frustrating customers" />
            </div>

            <div className="bg-slate-900/50 border border-slate-700/50 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Policy Renewals</div>
                 <div className="text-3xl font-extrabold text-emerald-400 tracking-tight mb-4"><AnimatedCounter value={32} prefix="+" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="Client churn resulting from neglected follow-ups" />
            </div>

            <div className="bg-slate-900/50 border border-slate-700/50 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                 <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Staff Overhead</div>
                 <div className="text-3xl font-extrabold text-emerald-400 tracking-tight mb-4"><AnimatedCounter value={30} prefix="-" suffix="%" /></div>
              </div>
              <BenchmarkWidget description="Agent burnout from answering routine policy queries" />
            </div>
         </div>
      </div>

      {/* Role Overview & Benefits */}
      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <div className="p-8 md:p-12 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none"></div>
           <h3 className="text-3xl font-bold text-slate-50 mb-6 relative z-10">Role Overview</h3>
           <p className="text-slate-400 text-lg leading-relaxed mb-6 relative z-10">
             Meet the frontline representative that never sleeps. Our System manages inbound conversations, captures claim info, clarifies coverage, resolves routine issues, and guides clients confidently through every stage.
           </p>
           <p className="text-slate-400 text-lg leading-relaxed mb-6 relative z-10">
             It blends conversational empathy with analytical precision, ensuring every interaction drives resolution and retention.
           </p>
        </div>

        <div className="p-8 md:p-12 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden flex flex-col justify-center">
           <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none"></div>
           <h3 className="text-3xl font-bold text-slate-50 mb-6 relative z-10">Why Insurance Companies Love It</h3>
           <p className="text-slate-400 text-lg leading-relaxed mb-8 relative z-10">
             Customers don’t wait. Delayed responses increase churn, and human teams fatigue. Our system scales instantly, keeping clients engaged, satisfied, and loyal — while reducing staff workload without adding overhead.
           </p>
           
           <div className="space-y-4 mb-8 relative z-10">
             <div className="flex items-center gap-3">
               <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
               <span className="text-slate-300 font-medium">Instant engagement eliminating wait times</span>
             </div>
             <div className="flex items-center gap-3">
               <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
               <span className="text-slate-300 font-medium">Scalable support during claim surges</span>
             </div>
             <div className="flex items-center gap-3">
               <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
               <span className="text-slate-300 font-medium">Reduced support costs and agent overhead</span>
             </div>
           </div>
           
           <div className="space-y-4 relative z-10">
             <div className="flex gap-4 items-start bg-slate-900/50 p-4 rounded-xl border border-red-500/20">
               <span className="font-bold text-red-500 flex-shrink-0 w-24 flex items-center gap-1">
                 <XCircle className="w-4 h-4" /> Without:
               </span>
               <span className="text-sm text-slate-300">Customer frustration, abandoned queries, lower retention rates.</span>
             </div>
             <div className="flex gap-4 items-start bg-slate-900/50 p-4 rounded-xl border border-emerald-500/20">
               <span className="font-bold text-emerald-500 flex-shrink-0 w-24 flex items-center gap-1">
                 <CheckCircle2 className="w-4 h-4" /> With AI:
               </span>
               <span className="text-sm text-slate-300">Empathetic support, rapid claim resolution, and unwavering client loyalty.</span>
             </div>
           </div>
        </div>
      </div>

      <SystemAutomations automations={[
  {
    "title": "ClaimBot",
    "icon": "🛡️",
    "description": "Automatically extracts and structures data from forms and images to accelerate processing.",
    "href": "/automations/claimbot"
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
  },
  {
    "title": "LeadLoom",
    "icon": "🎯",
    "description": "Routes incoming leads instantly to the correct sales rep based on territory, size, or round-robin rules.",
    "href": "/automations/leadloom"
  },
  {
    "title": "FraudShield",
    "icon": "🛑",
    "description": "Monitors e-commerce transactions and flags highly suspicious orders for manual review.",
    "href": "/automations/fraudshield"
  }
]} />

      {/* CTA Box */}
      <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 text-center relative overflow-hidden shadow-2xl">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
         <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none"></div>
         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
         
         <div className="relative z-10">
           <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6 tracking-tight">Support operations, systemized</h2>
           <p className="text-xl text-slate-400 mb-2 max-w-2xl mx-auto">
             Upgrade your client relations today.
           </p>
           <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
             Activate Insurance Concierge System, the system that effortlessly handles operations while ensuring every customer receives round-the-clock, empathetic support.
           </p>
           
           <Link href="/pricing" className="inline-flex items-center gap-2 px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-full transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:-translate-y-1 text-lg">
              Activate It <ChevronRight className="w-5 h-5" />
           </Link>
         </div>
      </div>

    </div>
  );
}
