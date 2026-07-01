'use client';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Stethoscope, Building, Users, Home, Sun, Briefcase, Video, Shield, ShoppingBag, HeartPulse, Truck, Hammer, Thermometer, Droplet, Scale, ShoppingCart, Utensils, Dumbbell, Car } from 'lucide-react';

const enterpriseSystems = [
  { id: 'real-estate', name: 'Real Estate Agent System', icon: Home, desc: 'Handles the entire property inquiry lifecycle, qualifying serious buyers and organizing viewings to build a stronger sales pipeline.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'property', name: 'Property Management System', icon: Building, desc: 'Manages tenant requests end-to-end, instantly routing maintenance issues and driving lease renewals without staff involvement.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'healthcare', name: 'Healthcare Inquiry System', icon: HeartPulse, desc: 'Automates the complete patient intake process, securing private pre-consultation triage and seamless cross-department scheduling.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'recruitment', name: 'Recruitment System', icon: Users, desc: 'Runs candidate screening on autopilot, handling interview staging to ensure you never lose top talent to competitors.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'insurance', name: 'Insurance Concierge System', icon: Shield, desc: 'Manages first-response claims intake and seamlessly collects policy documents to accelerate your underwriting handoffs.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'logistics', name: 'Logistics Supervisor System', icon: Truck, desc: 'Resolves delivery carrier tracking disputes and manages proactive exception handling to keep customers fully updated.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'ecommerce', name: 'E-commerce System', icon: ShoppingCart, desc: 'Protects overall revenue by managing post-purchase workflows, returns authorization, and incoming order inquiries automatically.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'corporate', name: 'Corporate Virtual Executive System', icon: Video, desc: 'Operates as a continuous digital executive, coordinating complex cross-department meetings to save management hours each week.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'med-spa', name: 'Med Spa System', icon: HeartPulse, desc: 'Drives high-ticket treatment growth by securing premium consultations and managing the full membership lifecycle.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'legal', name: 'Legal Intake System', icon: Scale, desc: 'Secures sensitive case details instantly, organizing attorney routing so your firm can focus exclusively on winning premium cases.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'construction', name: 'Construction System', icon: Hammer, desc: 'Accelerates bid closing by capturing incoming inquiries and organizing complex dispatch routing while your team stays on the job site.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'hotel', name: 'Hotel System', icon: Building, desc: 'Elevates guest experiences through automated concierge-level service, upselling amenities and deflecting front-desk volume.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'solar', name: 'Solar Consultant System', icon: Sun, desc: 'Manages the multi-step solar qualification process, verifying homeowner leads to secure solid, ready-to-close appointments.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'retail', name: 'Retail Frontdesk System', icon: ShoppingBag, desc: 'Drives true sales volume by handling inventory questions instantly, providing VIP-level guidance that brings customers to the register.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'dental', name: 'Dental Receptionist System', icon: Stethoscope, desc: 'Controls complex treatment scheduling and insurance verification to ensure your chairs stay full and patients stay engaged.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'custom', name: 'Custom Agent System', icon: Briefcase, desc: 'An exclusive, tailored AI operating system engineered specifically to resolve your exact bottlenecks and scale your unique capabilities.', tier: 'Custom Setup', complexity: 'Advanced' }
];

const proSystems = [
  { id: 'plumbing', name: 'Plumbing Dispatcher System', icon: Droplet, desc: 'Answers emergency calls and dispatches technicians automatically.', tier: 'Pro Tier', complexity: 'Standard' },
  { id: 'hvac', name: 'HVAC Dispatcher System', icon: Thermometer, desc: 'Handles incoming service calls and manages your technician scheduling.', tier: 'Pro Tier', complexity: 'Standard' },
  { id: 'roofing', name: 'Roofing Estimator System', icon: Hammer, desc: 'Catches storm damage leads instantly and schedules your inspections.', tier: 'Pro Tier', complexity: 'Standard' },
  { id: 'restaurant', name: 'Restaurant System', icon: Utensils, desc: 'Takes reservations automatically and answers basic customer questions.', tier: 'Pro Tier', complexity: 'Standard' },
  { id: 'fitness', name: 'Gym & Fitness System', icon: Dumbbell, desc: 'Answers membership inquiries and helps book trial passes for new visitors.', tier: 'Pro Tier', complexity: 'Standard' },
  { id: 'automotive', name: 'Automotive Dealership System', icon: Car, desc: 'Helps dealerships book test drives and log initial vehicle interest.', tier: 'Pro Tier', complexity: 'Standard' }
];

export default function SystemsPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4 tracking-tight">Smart Agents. Real Impact.</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">Automation isn&apos;t about doing less. It&apos;s about doing what truly matters, with precision.</p>
      </div>

      <div className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-50 mb-4 inline-flex items-center gap-3">
            Enterprise Tier <Shield className="w-6 h-6 text-cyan-400" />
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Complete business infrastructure. Multi-step workflows and revenue-driving optimization.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {enterpriseSystems.map((s, idx) => {
            const Icon = s.icon;
            return (
              <Link key={s.id} href={`/systems/${s.id}`}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx % 6) * 0.1 }}
                  className={`flex flex-col p-8 rounded-2xl backdrop-blur-md border transition-all group h-full relative ${s.id === 'custom' ? 'bg-gradient-to-br from-slate-800 to-amber-950/20 border-amber-500/50 hover:border-amber-400/80 shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:shadow-[0_0_40px_rgba(245,158,11,0.4)]' : 'bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950/40 border-indigo-500/50 hover:border-indigo-400/70 shadow-[0_0_40px_rgba(99,102,241,0.25)] hover:shadow-[0_0_50px_rgba(99,102,241,0.4)] relative z-10'}`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-all ${s.id === 'custom' ? 'bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-900 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]' : 'bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]' }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-50 mb-2 pr-16">{s.name}</h3>
                  <p className="text-slate-300 text-sm mb-6">{s.desc}</p>
                  
                  <div className="absolute top-6 right-6 flex flex-col items-end gap-2">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${s.id === 'custom' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.2)]' : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-[0_0_10px_rgba(99,102,241,0.2)]'}`}>{s.tier}</span>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-slate-700/50 flex flex-col gap-2">
                     <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold flex justify-between items-center">
                       Platform Capability 
                       <span className={s.id === 'custom' ? 'text-amber-400 font-bold' : 'text-indigo-400 font-bold'}>{s.complexity}</span>
                     </span>
                     <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden shadow-inner">
                       <div className={`h-full ${s.id === 'custom' ? 'bg-amber-400 w-full' : 'bg-indigo-400 w-4/5'}`}></div>
                     </div>
                  </div>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </div>

      <div>
         <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-50 mb-4 inline-flex items-center gap-3">
            Pro Tier
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Helpful single-function automation for your core daily workflows.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {proSystems.map((s, idx) => {
            const Icon = s.icon;
            return (
              <Link key={s.id} href={`/systems/${s.id}`}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx % 6) * 0.1 }}
                  className="flex flex-col p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-md border border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all group h-full relative"
                >
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500 mb-6 group-hover:bg-cyan-500 group-hover:text-slate-900 group-hover:shadow-[0_0_15px_rgba(8,145,178,0.5)] transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-50 mb-2 pr-16">{s.name}</h3>
                  <p className="text-slate-400 text-sm mb-6">{s.desc}</p>

                  <div className="absolute top-6 right-6 flex flex-col items-end gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">{s.tier}</span>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-slate-700/50 flex flex-col gap-2">
                     <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold flex justify-between items-center">
                       Platform Capability 
                       <span className="text-cyan-400 font-bold">{s.complexity}</span>
                     </span>
                     <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden shadow-inner">
                       <div className="h-full bg-cyan-400 w-1/3"></div>
                     </div>
                  </div>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  );
}
