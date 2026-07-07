
import Link from 'next/link';
import { Bot, ChevronRight, Zap, Target, BarChart, Settings, Repeat } from 'lucide-react';

export default function AutomationsDirectory() {
  const allAutomations = [
  {
    "title": "LeadReach 🔍",
    "desc": "Automatically finds and enriches any lead with 12 verified contact fields — name, email, phone, all social handles, LinkedIn URLs, and more.",
    "href": "/automations/leadreach"
  },
  {
    "title": "MailCraft ✍️",
    "desc": "Takes approved contact context and drafts customer-authorized email follow-ups for team review.",
    "href": "/automations/mailcraft"
  },
  {
    "title": "AdPilot 🎯",
    "desc": "Monitors campaigns, detects waste, suggests optimizations, generates reports, and triggers alerts.",
    "href": "/automations/adpilot"
  },
  {
    "title": "WaitlistBot 🛎️",
    "desc": "Intelligently manages virtual queues, providing live updates and maximizing table turns.",
    "href": "/automations/waitlistbot"
  },
  {
    "title": "CaterBot 🍽️",
    "desc": "Automatically qualifies, nurtures, and builds out catering quotes directly from customer inquiries.",
    "href": "/automations/caterbot"
  },
  {
    "title": "WinBackBot 🔥",
    "desc": "Helps teams prepare authorized follow-ups for existing clients with relevant service updates.",
    "href": "/automations/winbackbot"
  },
  {
    "title": "MemoMind 🧠",
    "desc": "Automatically transcribes and summarizes meetings, capturing key decisions without manual effort.",
    "href": "/automations/memomind"
  },
  {
    "title": "TaskGen ✅",
    "desc": "Parses conversations and documents to automatically create and assign tasks in project management tools.",
    "href": "/automations/taskgen"
  },
  {
    "title": "DocuFlow 📄",
    "desc": "Auto-generates contracts, proposals, and reports from CRM data instantly.",
    "href": "/automations/docuflow"
  },
  {
    "title": "SignSync 🖋️",
    "desc": "Manages the entire e-signature lifecycle, from sending to follow-ups and final storage.",
    "href": "/automations/signsync"
  },
  {
    "title": "AppointMate 📅",
    "desc": "Automates calendar availability, booking, and buffer time allocation to eliminate email ping-pong.",
    "href": "/automations/appointmate"
  },
  {
    "title": "ReminderBot ⏰",
    "desc": "Reduces no-shows by sending timed SMS and email reminders to scheduled clients.",
    "href": "/automations/reminderbot"
  },
  {
    "title": "ProofPulse ⭐",
    "desc": "Triggers review requests to satisfied customers automatically after successful transactions or services.",
    "href": "/automations/proofpulse"
  },
  {
    "title": "OmniServe 💬",
    "desc": "Triages and routes incoming support emails and chats to the appropriate department.",
    "href": "/automations/omniserve"
  },
  {
    "title": "ReplyBot 🤖",
    "desc": "Instantly answers common customer questions, deflecting basic inquiries away from human agents.",
    "href": "/automations/replybot"
  },
  {
    "title": "RouteMaster 🗺️",
    "desc": "Optimizes field service and delivery routes based on location, traffic, and schedule.",
    "href": "/automations/routemaster"
  },
  {
    "title": "StatuSync 🚚",
    "desc": "Keeps clients informed with automated 'on-the-way' notifications and live ETAs.",
    "href": "/automations/statusync"
  },
  {
    "title": "ClaimBot 🛡️",
    "desc": "Automatically extracts and structures data from forms and images to accelerate processing.",
    "href": "/automations/claimbot"
  },
  {
    "title": "StockSentinel 📦",
    "desc": "Monitors inventory levels and automatically alerts procurement when stocks drop below critical metrics.",
    "href": "/automations/stocksentinel"
  },
  {
    "title": "QualiSync 🚀",
    "desc": "Engages new leads instantly via chat or SMS to vet them before handing off to sales.",
    "href": "/automations/qualisync"
  },
  {
    "title": "ScreenSync 🤝",
    "desc": "Organizes incoming resumes against recruiter-defined criteria for human review.",
    "href": "/automations/screensync"
  },
  {
    "title": "EventStream 🎥",
    "desc": "Manages the entire pre-event sequence to maximize webinar attendance rates.",
    "href": "/automations/eventstream"
  },
  {
    "title": "OmniPulse 🚀",
    "desc": "Sends customer-authorized SMS updates based on relevant account or purchase events.",
    "href": "/automations/omnipulse"
  },
  {
    "title": "PulsePay 💳",
    "desc": "Automatically engages customers whose credit cards decline to recover lost recurring revenue.",
    "href": "/automations/pulsepay"
  },
  {
    "title": "OnboardIQ 📑",
    "desc": "Automates the collection and filing of new hire documents and IT provisioning requests.",
    "href": "/automations/onboardiq"
  },
  {
    "title": "InvoiceAI 💰",
    "desc": "Creates and dispatches accurate invoices based on logged hours or completed project milestones.",
    "href": "/automations/invoiceai"
  },
  {
    "title": "LeadLoom 🎯",
    "desc": "Routes incoming leads instantly to the correct sales rep based on territory, size, or round-robin rules.",
    "href": "/automations/leadloom"
  },
  {
    "title": "FraudShield 🛑",
    "desc": "Monitors e-commerce transactions and flags highly suspicious orders for manual review.",
    "href": "/automations/fraudshield"
  },
  {
    "title": "CaseSync ⚖️",
    "desc": "Organizes new legal inquiries by your firm's criteria before they reach attorneys, gathering initial case facts.",
    "href": "/automations/casesync"
  },
  {
    "title": "CartRevive 🛒",
    "desc": "Sends customer-authorized cart reminders on SMS and WhatsApp with approved recovery offers.",
    "href": "/automations/cartrevive"
  },
  {
    "title": "ReturnBot 📦",
    "desc": "Automates the entire RMA and return processing lifecycle to reduce operational costs.",
    "href": "/automations/returnbot"
  },
  {
    "title": "EstiMate 📐",
    "desc": "Instantly process project dimensions and job types to generate and send accurate preliminary estimates.",
    "href": "/automations/estimate"
  },
  {
    "title": "MaintainBot 🔧",
    "desc": "Automates the intake, triage, and vendor assignment of property maintenance requests.",
    "href": "/automations/maintainbot"
  },
  {
    "title": "LeaseSync 📝",
    "desc": "Automatically texts and emails tenants well before lease expiration to drive higher retention rates.",
    "href": "/automations/leasesync"
  },
  {
    "title": "CarePulse 🩺",
    "desc": "Triggers highly specific post-treatment check-ins to monitor healing and request reviews.",
    "href": "/automations/carepulse"
  }
];

  return (
    <div className="container mx-auto px-4 py-24 max-w-7xl">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 backdrop-blur-md border border-cyan-500/30 text-sm font-medium text-cyan-400 mb-6 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
           <Zap className="w-4 h-4" /> The Arsenal
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 mb-6 tracking-tight">
          Let AI handle the work.
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed">
          AI doesn&apos;t forget, sleep, or lose interest. Turn insights into results instantly by deploying individual automations to fill the gaps in your workflow.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {allAutomations.map((auto, idx) => (
          <Link href={auto.href} key={idx} className="block group">
             <div className="bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/50 rounded-2xl p-8 h-full transition-all hover:bg-slate-800/80 hover:-translate-y-1 shadow-lg flex flex-col justify-between">
                <div>
                   <h3 className="text-2xl font-bold text-slate-50 mb-4 flex items-center justify-between">
                     <span>{auto.title}</span>
                     <ChevronRight className="w-5 h-5 text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                   </h3>
                   <p className="text-slate-400 leading-relaxed mb-6">
                     {auto.desc}
                   </p>
                </div>
                <div className="text-cyan-400 text-sm font-semibold tracking-wide uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore <ChevronRight className="w-4 h-4" />
                </div>
             </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
