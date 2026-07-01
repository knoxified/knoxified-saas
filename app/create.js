const fs = require('fs');
const path = require('path');

const newAutomations = [
  {
    id: "appointmate",
    title: "AppointMate 📅",
    name: "Intelligent Scheduling & Calendar Automation",
    desc: "AppointMate ensures you never miss a meeting by intelligently syncing calendars, managing double-bookings, and handling rescheduling automatically.",
    keyCapabilities: [
      "Automatically synchronizes across Google Calendar, Outlook, and Apple Calendar",
      "Reduces no-shows with automated SMS and email reminders",
      "Handles rescheduling instantly through natural language chat",
      "Allocates buffer times automatically between appointments",
      "Supports time-zone logic for global meetings"
    ],
    role: "AppointMate acts as a 24/7 digital scheduler. Instead of playing email ping-pong to find a time, it books meetings instantly based on predefined availability rules."
  },
  {
    id: "routemaster",
    title: "RouteMaster 🗺️",
    name: "Dispatch & Logistics Routing Automation",
    desc: "RouteMaster optimizes field service and delivery routes in real time, cutting travel time and fuel costs.",
    keyCapabilities: [
      "Calculates the most efficient paths for multi-stop schedules",
      "Automatically re-routes around traffic or cancellations",
      "Provides real-time ETA updates to customers via SMS",
      "Balances workload across available field workers",
      "Integrates with GPS tracking and fleet management tools"
    ],
    role: "RouteMaster is your AI dispatcher. It ensures the right person gets to the right location via the most efficient path, saving fuel and time."
  },
  {
    id: "claimbot",
    title: "ClaimBot 🛡️",
    name: "Claims Processing & Verification Automation",
    desc: "ClaimBot accelerates the insurance and warranty claims process by validating forms, checking policies, and fast-tracking approvals.",
    keyCapabilities: [
      "Automatically extracts data from uploaded claim forms and images",
      "Cross-references submissions against active policy limits",
      "Flags anomalies or suspected fraud for human review",
      "Sends instant status updates to claimants",
      "Integrates directly with enterprise estimating systems"
    ],
    role: "ClaimBot is your automated underwriter assistant. It removes manual data entry and basic verifications, accelerating payouts and resolution times."
  },
  {
    id: "screensync",
    title: "ScreenSync 🤝",
    name: "AI Candidate Screening & Onboarding Action",
    desc: "ScreenSync evaluates applicants, conducts initial screening chats, and accelerates the hiring process.",
    keyCapabilities: [
      "Automatically parses resumes and compares them against job requirements",
      "Conducts preliminary text-based skill assessments",
      "Schedules human interviews for qualified candidates automatically",
      "Triggers onboarding paperwork flows once offers are accepted",
      "Maintains candidate pipelines within ATS systems"
    ],
    role: "ScreenSync is your automated recruiter. It ensures high-volume applicant pools are triaged instantly so your team only spends time with the best talent."
  }
];

const template = (auto) => `import Link from 'next/link';
import { CheckCircle2, ChevronRight, Settings } from 'lucide-react';

export default function AutomationPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: '${auto.title}',
    description: '${auto.name}',
    provider: {
      '@type': 'Organization',
      name: 'Knoxified'
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
             <Settings className="w-4 h-4" /> ${auto.title}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 mb-6 tracking-tight leading-tight">
            ${auto.name}
          </h1>
          <p className="text-xl font-medium text-cyan-400 mb-6">
            ${auto.desc}
          </p>
          
          <Link href="/pricing" className="inline-flex px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            Deploy Automation
          </Link>
        </div>
        
        <div className="relative group perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="w-full aspect-square relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 overflow-hidden flex items-center justify-center transform transition-transform duration-700 hover:rotate-y-12 shadow-2xl">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/10 rounded-full animate-pulse"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-24 h-24 bg-slate-900 rounded-2xl border border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.3)] z-10 text-4xl">
               ${auto.title.split(' ')[1] || '⚙️'}
             </div>
          </div>
        </div>
      </div>

      {/* Key Capabilities */}
      <div className="mb-24">
         <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-12 text-center tracking-tight">🚀 Key Capabilities</h2>
         
         <div className="grid md:grid-cols-2 gap-6">
            {${JSON.stringify(auto.keyCapabilities)}.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-slate-800/40 rounded-2xl border border-slate-700/50 hover:bg-slate-800/80 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-cyan-500 shrink-0 mt-0.5" />
                <p className="text-slate-300 leading-relaxed text-sm">{feature}</p>
              </div>
            ))}
         </div>
      </div>

      {/* Role Overview */}
      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <div className="p-8 md:p-12 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden">
           <h3 className="text-3xl font-bold text-slate-50 mb-6 relative z-10">Role Overview</h3>
           <p className="text-slate-400 text-lg leading-relaxed mb-6 relative z-10">
             ${auto.role}
           </p>
        </div>

        <div className="p-8 md:p-12 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden flex flex-col justify-center">
           <h3 className="text-3xl font-bold text-slate-50 mb-6 relative z-10">📊 Why Businesses Love It</h3>
           <p className="text-slate-400 text-lg leading-relaxed mb-8 relative z-10">
             Eliminates manual friction, speeds up turnaround times, and ensures tasks are completed flawlessly.
           </p>
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 text-center relative overflow-hidden shadow-2xl">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
         <div className="relative z-10">
           <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4 tracking-tight">⚡ Deploy It</h2>
           <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
             Activate Knoxified ${auto.title.split(' ')[0]} today.
           </p>
           <Link href="/pricing" className="inline-flex items-center gap-2 px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-full transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:-translate-y-1 text-lg">
              Deploy Automation <ChevronRight className="w-5 h-5" />
           </Link>
         </div>
      </div>

    </div>
  );
}
`;

newAutomations.forEach(auto => {
  const dir = path.join(__dirname, 'app/automations', auto.id);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), template(auto));
  console.log('Created ' + auto.id);
});
