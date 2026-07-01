const fs = require('fs');
const path = require('path');

const cwd = process.cwd(); // Should be /app/applet

const automations = [
  {
    id: "memomind",
    title: "MemoMind 🧠",
    name: "AI Meeting Summarizer",
    desc: "Automatically transcribes and summarizes meetings, capturing key decisions without manual effort.",
    keyCapabilities: [
      "Transcribes voice and video meetings across Zoom, Meet, and Teams",
      "Generates concise summaries highlighting decisions and priorities",
      "Identifies key stakeholders and attendees",
      "Detects sentiment and urgency of discussions",
      "Generates downloadable reports for post-project retrospectives",
      "Operates 24/7 across time zones"
    ],
    role: "Acts as a digital executive assistant that listens and converts conversations into structured summaries.",
    benefits: ["95% fewer lost details", "Reclaimed hours of productivity", "Consistent record keeping"]
  },
  {
    id: "taskgen",
    title: "TaskGen ✅",
    name: "Automated Task Generator",
    desc: "Parses conversations and documents to automatically create and assign tasks in project management tools.",
    keyCapabilities: [
      "Extracts action items from meeting notes and emails",
      "Creates tasks automatically in Trello, Asana, ClickUp, and Jira",
      "Assigns tasks to specific team members based on context",
      "Sets deadlines and priority levels automatically",
      "Syncs task statuses across multiple platforms",
      "Follows up on overdue items via Slack or Teams"
    ],
    role: "A tireless project manager that ensures every decision becomes a tracked, assigned, and structured task.",
    benefits: ["Zero forgotten action items", "Seamless task delegation", "Higher accountability"]
  },
  {
    id: "docuflow",
    title: "DocuFlow 📄",
    name: "Document Generation Automation",
    desc: "Auto-generates contracts, proposals, and reports from CRM data instantly.",
    keyCapabilities: [
      "Pulls data directly from HubSpot, Salesforce, or custom CRMs",
      "Generates pixel-perfect PDFs from standardized templates",
      "Customizes clauses based on client data parameters",
      "Emails generated documents to clients automatically",
      "Version controls every generated file in cloud storage",
      "Triggers notifications when documents are ready for review"
    ],
    role: "Replaces manual copy-pasting by dynamically building complex documents based on live data.",
    benefits: ["100% template accuracy", "Hours saved per contract", "Instant delivery to clients"]
  },
  {
    id: "signsync",
    title: "SignSync 🖋️",
    name: "Automated E-Signature Routing",
    desc: "Manages the entire e-signature lifecycle, from sending to follow-ups and final storage.",
    keyCapabilities: [
      "Routes documents to correct signers in sequential order",
      "Sends automated reminder emails for pending signatures",
      "Verifies signer identity where applicable",
      "Automatically saves executed contracts to secure cloud folders",
      "Updates CRM deal stages upon final signature",
      "Provides real-time audit trails for legal compliance"
    ],
    role: "Ensures contracts never stall by continuously tracking and nudging stakeholders to sign.",
    benefits: ["Faster contract turnaround", "Zero manual follow-ups", "Secure, compliant storage"]
  },
  {
    id: "appointmate",
    title: "AppointMate 📅",
    name: "Intelligent Calendar Scheduling",
    desc: "Automates calendar availability, booking, and buffer time allocation to eliminate email ping-pong.",
    keyCapabilities: [
      "Synchronizes real-time availability across multiple calendars",
      "Allows clients to self-book within predefined rules",
      "Allocates travel or buffer times between appointments automatically",
      "Adjusts for time zones seamlessly",
      "Sends confirmation emails instantly upon booking",
      "Handles rescheduling links directly without human intervention"
    ],
    role: "A virtual scheduler that protects your time while making booking effortless for clients.",
    benefits: ["Zero double-bookings", "Optimized calendar density", "Frictionless scheduling"]
  },
  {
    id: "reminderbot",
    title: "ReminderBot ⏰",
    name: "Automated Appointment Reminders",
    desc: "Reduces no-shows by sending timed SMS and email reminders to scheduled clients.",
    keyCapabilities: [
      "Dispatches reminders 24 hours and 1 hour before meetings",
      "Customizes messaging based on appointment type",
      "Supports 2-way SMS for instant confirmations or cancellations",
      "Updates calendar events when a client confirms",
      "Flags unconfirmed appointments for administrative review",
      "Provides directions or prep-materials in the reminder"
    ],
    role: "Ensures that booked appointments actually materialize by keeping clients informed and accountable.",
    benefits: ["Up to 80% reduction in no-shows", "Maximized schedule revenue", "Better client experience"]
  },
  {
    id: "proofpulse",
    title: "ProofPulse ⭐",
    name: "Automated Review Collection",
    desc: "Triggers review requests to satisfied customers automatically after successful transactions or services.",
    keyCapabilities: [
      "Initiates requests via SMS or email post-service",
      "Routes happy customers to Google, Yelp, or Trustpilot",
      "Diverts negative feedback to private internal forms",
      "Follows up once if the initial request is ignored",
      "Syncs new public reviews into a central dashboard",
      "Alerts management instantly to low-star ratings"
    ],
    role: "A reputation engine that passively builds your 5-star profile while you focus on operations.",
    benefits: ["Rapid review growth", "Protection from negative public feedback", "Improved local SEO"]
  },
  {
    id: "omniserve",
    title: "OmniServe 💬",
    name: "Customer Ticket Routing",
    desc: "Triages and routes incoming support emails and chats to the appropriate department.",
    keyCapabilities: [
      "Analyzes incoming messages using Natural Language Processing",
      "Tags and categorizes tickets (e.g., Billing, Tech Support)",
      "Assigns tickets to specific agents based on skill or workload",
      "Sends instant acknowledgment receipts to the customer",
      "Flags high-priority or irate customer messages for urgent review",
      "Integrates with Zendesk, Intercom, and email providers"
    ],
    role: "An intelligent traffic controller for your inbox, ensuring questions get to the right expert instantly.",
    benefits: ["Faster first-response times", "Reduced agent triage work", "Better customer satisfaction"]
  },
  {
    id: "replybot",
    title: "ReplyBot 🤖",
    name: "Customer FAQ Auto-Responder",
    desc: "Instantly answers common customer questions, deflecting basic inquiries away from human agents.",
    keyCapabilities: [
      "Monitors email, chat, and social DMs for FAQ inquiries",
      "Provides instant, accurate answers regarding hours, pricing, or status",
      "Escalates complex queries to human agents seamlessly",
      "Trains continuously on your specific knowledge base",
      "Supports multiple languages automatically",
      "Operates 24/7, providing instant late-night support"
    ],
    role: "Your frontline responder that handles the repetitive questions so your team can focus on complex issues.",
    benefits: ["Immediate customer answers", "Significantly reduced ticket volume", "24/7 support presence"]
  },
  {
    id: "routemaster",
    title: "RouteMaster 🗺️",
    name: "Dispatch Routing Automation",
    desc: "Optimizes field service and delivery routes based on location, traffic, and schedule.",
    keyCapabilities: [
      "Calculates the most time-efficient multi-stop routes",
      "Assigns jobs to the closest available field worker",
      "Adjusts schedules dynamically if a job runs late",
      "Sends route maps directly to driver mobile devices",
      "Tracks driver progress natively via GPS integrations",
      "Optimizes for fuel efficiency and reduced drive time"
    ],
    role: "A logistical brain that ensures fleets and technicians travel the shortest, fastest paths.",
    benefits: ["Lower fuel costs", "More stops per day", "Reduced windshield time"]
  },
  {
    id: "statusync",
    title: "StatuSync 🚚",
    name: "Automated ETA Updates",
    desc: "Keeps clients informed with automated 'on-the-way' notifications and live ETAs.",
    keyCapabilities: [
      "Triggers SMS when a technician is dispatched",
      "Provides real-time mapped ETA links to customers",
      "Alerts customers if delays occur",
      "Sends completion confirmations once the job is done",
      "Collects feedback immediately post-service",
      "Reduces inbound 'where are you' calls"
    ],
    role: "Manages customer expectations proactively, providing the Uber-like tracking modern consumers expect.",
    benefits: ["Fewer dispatch calls", "Higher customer trust", "Better field transparency"]
  },
  {
    id: "claimbot",
    title: "ClaimBot 🛡️",
    name: "Claims Data Extraction",
    desc: "Automatically extracts and structures data from forms and images to accelerate processing.",
    keyCapabilities: [
      "Reads structured and unstructured claim forms via OCR",
      "Extracts key fields (names, dates, amounts, policy numbers)",
      "Validates extracted data against internal databases",
      "Outputs sanitized data directly into claims management systems",
      "Flags illegible or incomplete forms immediately",
      "Processes thousands of claims per hour"
    ],
    role: "A high-speed data entry clerk that digitizes paperwork flawlessly and instantly.",
    benefits: ["10x faster claim intake", "Eliminated manual typing errors", "Highly scalable processing"]
  },
  {
    id: "stocksentinel",
    title: "StockSentinel 📦",
    name: "Inventory Threshold Alerts",
    desc: "Monitors inventory levels and automatically alerts procurement when stocks drop below critical metrics.",
    keyCapabilities: [
      "Tracks live inventory counts across multiple warehouses",
      "Calculates dynamic reorder points based on sales velocity",
      "Sends instant Slack or Email alerts when items run low",
      "Predicts stockouts before they happen using trend analysis",
      "Integrates with Shopify, Amazon, and ERP systems",
      "Generates daily 'Top Items to Reorder' reports"
    ],
    role: "Your automated watchdog preventing out-of-stock scenarios that kill revenue.",
    benefits: ["Zero surprise out-of-stocks", "Optimized cash flow", "No more manual counting"]
  },
  {
    id: "qualisync",
    title: "QualiSync 🚀",
    name: "Lead Qualification Automation",
    desc: "Engages new leads instantly via chat or SMS to vet them before handing off to sales.",
    keyCapabilities: [
      "Reaches out to inbound leads within 30 seconds",
      "Asks customized qualifying questions (budget, timeline, needs)",
      "Disqualifies poor-fit leads politely",
      "Scores leads based on their responses",
      "Routes hot, qualified leads directly to closers",
      "Injects the entire chat history into the CRM"
    ],
    role: "An automated SDR that ensures your human sales team only speaks to high-intent, qualified buyers.",
    benefits: ["Higher close rates", "Zero time wasted on bad leads", "Instant lead engagement"]
  },
  {
    id: "screensync",
    title: "ScreenSync 🤝",
    name: "Applicant Resume Parsing",
    desc: "Automatically reviews and ranks incoming resumes against specific job requirements.",
    keyCapabilities: [
      "Extracts skills, experience, and education from any resume format",
      "Scores applicants based on keyword match to the job description",
      "Sorts candidates into 'Strong Match', 'Review', and 'Rejected' tiers",
      "Sends courteous rejection emails automatically to poor fits",
      "Highlights top-tier candidates for recruiter review",
      "Integrates with Greenhouse, Workable, and standard ATS platforms"
    ],
    role: "A tireless HR assistant that sifts through the noise to find the best talent instantly.",
    benefits: ["Faster time-to-hire", "Unbiased initial screening", "Saved recruitment hours"]
  },
  {
    id: "eventstream",
    title: "EventStream 🎥",
    name: "Webinar Registration Automation",
    desc: "Manages the entire pre-event sequence to maximize webinar attendance rates.",
    keyCapabilities: [
      "Captures registrants from landing pages instantly",
      "Sends immediate calendar invites and confirmation emails",
      "Dispatches a strategic sequence of value-add reminder emails",
      "Sends a 15-minute 'We're Live' SMS alert",
      "Provides unique joining links automatically",
      "Tracks who attended vs. who missed for post-event segmentation"
    ],
    role: "Ensures that your marketing spend on registrations translates into actual live attendees.",
    benefits: ["Doubled show-up rates", "Hands-off event management", "Higher conversion potential"]
  },
  {
    id: "omnipulse",
    title: "OmniPulse 🚀",
    name: "SMS Marketing Triggers",
    desc: "Fires highly targeted SMS campaigns based on user behavior and purchasing events.",
    keyCapabilities: [
      "Triggers texts based on cart abandonment",
      "Sends exclusive VIP offers based on purchase history",
      "Requires compliance with opt-in regulations automatically",
      "Measures click-through and conversion rates natively",
      "Supports dynamic variables (names, product names)",
      "Syncs directly with Shopify and WooCommerce"
    ],
    role: "Drives immediate, high-converting engagement by reaching customers where they look most—their phones.",
    benefits: ["98% open rates", "Recovered abandoned revenue", "High ROI marketing"]
  },
  {
    id: "pulsepay",
    title: "PulsePay 💳",
    name: "Failed Payment Recovery",
    desc: "Automatically engages customers whose credit cards decline to recover lost recurring revenue.",
    keyCapabilities: [
      "Detects failed Stripe, PayPal, or Braintree transactions instantly",
      "Initiates a polite, automated email sequence to prompt card updates",
      "Sends secure 'update billing' links directly to the customer",
      "Attempts intelligent retries on specific days to maximize success",
      "Pauses accounts if payments remain unrecovered",
      "Alerts the customer success team for high-value account failures"
    ],
    role: "A silent collections agent that patches the biggest leak in subscription-based businesses.",
    benefits: ["Up to 40% churn recovery", "Protects recurring revenue", "Requires zero awkward phone calls"]
  },
  {
    id: "onboardiq",
    title: "OnboardIQ 📑",
    name: "Employee Onboarding Paperwork",
    desc: "Automates the collection and filing of new hire documents and IT provisioning requests.",
    keyCapabilities: [
      "Sends welcome packets and digital forms (W4, I9, NDA) automatically",
      "Tracks completion status of all required onboarding tasks",
      "Notifies IT to provision emails and software access",
      "Triggers notifications to payroll once documents are clear",
      "Stores completed documents securely in HR systems",
      "Provides a seamless digital entry experience for the new hire"
    ],
    role: "Replaces chaotic first-day paperwork with a smooth, automated digital flow.",
    benefits: ["Faster ramp-up time", "Zero lost forms", "Professional new employee experience"]
  },
  {
    id: "invoiceai",
    title: "InvoiceAI 💰",
    name: "Automated Invoice Generation",
    desc: "Creates and dispatches accurate invoices based on logged hours or completed project milestones.",
    keyCapabilities: [
      "Pulls billable hours from time-tracking software seamlessly",
      "Generates branded PDF invoices",
      "Emails invoices directly to client accounting departments",
      "Applies correct tax rates and line items automatically",
      "Integrates with QuickBooks, Xero, and FreshBooks",
      "Triggers automated reminders for past-due accounts"
    ],
    role: "Ensures you get paid faster by removing the administrative drag of manual billing.",
    benefits: ["Faster cash flow collection", "Zero billing errors", "Saved accounting hours"]
  },
  {
    id: "leadloom",
    title: "LeadLoom 🎯",
    name: "Inbound Lead Routing",
    desc: "Routes incoming leads instantly to the correct sales rep based on territory, size, or round-robin rules.",
    keyCapabilities: [
      "Captures leads from web forms, Facebook, and Zillow instantly",
      "Evaluates routing rules (e.g., zip code, product interest)",
      "Assigns the lead to the appropriate rep in the CRM",
      "Sends instant SMS alerts to the rep to call the lead",
      "Re-assigns the lead if the first rep doesn't claim it in 15 minutes",
      "Tracks speed-to-lead metrics for management"
    ],
    role: "A lightning-fast dispatcher that guarantees every lead is worked immediately.",
    benefits: ["Sub-5-minute response times", "Fair lead distribution", "Higher contact rates"]
  },
  {
    id: "fraudshield",
    title: "FraudShield 🛑",
    name: "Transaction Fraud Flagging",
    desc: "Monitors e-commerce transactions and flags highly suspicious orders for manual review.",
    keyCapabilities: [
      "Analyzes IP addresses, billing/shipping mismatches, and purchase velocity",
      "Assigns a risk score to every transaction instantly",
      "Automatically holds fulfillment for high-risk orders",
      "Alerts the risk team via Slack or email integration",
      "Learns from past chargebacks to improve detection algorithms",
      "Integrates natively with major payment gateways"
    ],
    role: "Your automated security guard protecting your margins from costly chargebacks and scammers.",
    benefits: ["Reduced chargeback rates", "Protected inventory", "Automated peace of mind"]
  }
];

const automationsPageStr = `
import Link from 'next/link';
import { Bot, ChevronRight, Zap, Target, BarChart, Settings, Repeat } from 'lucide-react';

export default function AutomationsDirectory() {
  const allAutomations = ${JSON.stringify(automations.map(a => ({ title: a.title, desc: a.desc, href: "/automations/" + a.id })), null, 2)};

  return (
    <div className="container mx-auto px-4 py-24 max-w-7xl">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 backdrop-blur-md border border-cyan-500/30 text-sm font-medium text-cyan-400 mb-6 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
           <Zap className="w-4 h-4" /> The Arsenal
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 mb-6 tracking-tight">
          Single-Task Masterpieces
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed">
          While our Niche Systems orchestrate entire workflows, these individual automations execute specific, high-leverage tasks flawlessly. 
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
}`;

const template = (auto) => `import Link from 'next/link';
import { CheckCircle2, ChevronRight, Settings, Clock, BarChart } from 'lucide-react';
import { AnimatedCounter } from '@/app/components/animated-counter';

export default function ${auto.title.replace(/[^a-zA-Z0-9]/g, '')}Page() {
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
          <div className="text-lg text-slate-400 mb-10 leading-relaxed space-y-4">
            <p>
              ${auto.role}
            </p>
          </div>
          
          <Link href="/pricing" className="inline-flex px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            Deploy ${auto.title.split(' ')[0]}
          </Link>
        </div>
        
        <div className="relative group perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="w-full aspect-square relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 overflow-hidden flex items-center justify-center transform transition-transform duration-700 hover:rotate-y-12 shadow-2xl">
            <div className="relative w-full h-full">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/20 rounded-full animate-ping"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/10 rounded-full animate-pulse"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-24 h-24 bg-slate-900 rounded-2xl border border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.3)] z-10 text-5xl">
                 ${auto.title.split(' ')[1] || '⚙️'}
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Capabilities */}
      <div className="mb-24">
         <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-12 text-center tracking-tight">🚀 Key Capabilities</h2>
         
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
           <p className="text-slate-400 text-lg leading-relaxed mb-6 relative z-10">
             By delegating this specific task to an automation, you remove human error, eliminate delays, and ensure consistent execution at scale.
           </p>
        </div>

        <div className="p-8 md:p-12 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden flex flex-col justify-center">
           <h3 className="text-3xl font-bold text-slate-50 mb-6 relative z-10">📊 Why Businesses Love It</h3>
           
           <div className="space-y-6 mb-8 relative z-10">
            {${JSON.stringify(auto.benefits)}.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-4">
                 <div className="w-16 flex justify-center shrink-0">
                   <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                 </div>
                 <span className="text-slate-300 font-medium">{benefit}</span>
              </div>
            ))}
           </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 text-center relative overflow-hidden shadow-2xl">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
         <div className="relative z-10">
           <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4 tracking-tight">⚡ Deploy It</h2>
           <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
             Activate Knoxified ${auto.title.split(' ')[0]} today and start automating.
           </p>
           <Link href="/pricing" className="inline-flex items-center gap-2 px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-full transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:-translate-y-1 text-lg">
              Deploy ${auto.title.split(' ')[0]} <ChevronRight className="w-5 h-5 flex-shrink-0" />
           </Link>
         </div>
      </div>

    </div>
  );
}`;

// 1. Rewrite the main automations page
fs.writeFileSync(path.join(cwd, 'app/automations/page.tsx'), automationsPageStr);

// 2. Create/Rewrite each specific automation page
automations.forEach(auto => {
  const dir = path.join(cwd, 'app/automations', auto.id);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), template(auto));
  console.log('Created ' + auto.id);
});

// 3. Define mapping of 4-5 automations per system
const systemMappings = {
  "corporate": ["memomind", "taskgen", "docuflow", "signsync", "leadloom"],
  "dental": ["appointmate", "reminderbot", "proofpulse", "omniserve", "replybot"],
  "healthcare": ["appointmate", "reminderbot", "docuflow", "signsync", "omniserve"],
  "hotel": ["appointmate", "proofpulse", "omniserve", "replybot", "omnipulse"],
  "hvac": ["routemaster", "statusync", "leadloom", "proofpulse", "invoiceai"],
  "insurance": ["claimbot", "docuflow", "signsync", "leadloom", "fraudshield"],
  "logistics": ["stocksentinel", "routemaster", "statusync", "docuflow", "invoiceai"],
  "plumbing": ["routemaster", "statusync", "qualisync", "proofpulse", "invoiceai"],
  "real-estate": ["qualisync", "docuflow", "signsync", "appointmate", "reminderbot"],
  "recruitment": ["screensync", "memomind", "taskgen", "appointmate", "onboardiq"],
  "retail": ["stocksentinel", "omnipulse", "pulsepay", "fraudshield", "proofpulse"],
  "roofing": ["qualisync", "routemaster", "statusync", "docuflow", "invoiceai"],
  "solar": ["qualisync", "appointmate", "reminderbot", "docuflow", "signsync"]
};

// 4. Update the systems page files to include new SystemAutomations payload
Object.entries(systemMappings).forEach(([niche, autoIds]) => {
  const p = path.join(cwd, 'app/systems', niche, 'page.tsx');
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    
    const payload = autoIds.map(id => {
       const mapped = automations.find(a => a.id === id);
       return {
         title: mapped.title.split(' ')[0], 
         icon: mapped.title.split(' ')[1] || "⚡", 
         description: mapped.desc, 
         href: "/automations/" + mapped.id
       };
    });

    const payloadStr = JSON.stringify(payload, null, 2);
    
    content = content.replace(/<SystemAutomations\s+automations=\{[\s\S]*?\}\s*\/>/g, "<SystemAutomations automations={" + payloadStr + "} />");
    
    fs.writeFileSync(p, content);
    console.log('Updated system ' + niche + ' with ' + autoIds.length + ' automations.');
  }
});

console.log("Done");
