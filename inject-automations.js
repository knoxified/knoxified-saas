const fs = require('fs');
const path = require('path');

const mapping = {
  "corporate": [
    { title: "MemoMind", icon: "🧠", description: "AI Meeting Summarizer + Task Generator.", href: "/automations/memomind" },
    { title: "DocuFlow", icon: "🔒", description: "Contract & Document Management Automation.", href: "/automations/docuflow" },
    { title: "LeadLoom", icon: "🎯", description: "Hyper-Personalized Lead Nurture Automation.", href: "/automations/leadloom" }
  ],
  "dental": [
    { title: "AppointMate", icon: "📅", description: "Intelligent Scheduling & Calendar Automation.", href: "/automations/appointmate" },
    { title: "ProofPulse", icon: "⭐", description: "Social Proof & Review Collector.", href: "/automations/proofpulse" },
    { title: "OmniServe", icon: "💬", description: "Cross-Platform Customer Support Routing.", href: "/automations/omniserve" }
  ],
  "healthcare": [
    { title: "AppointMate", icon: "📅", description: "Intelligent Scheduling & Calendar Automation.", href: "/automations/appointmate" },
    { title: "DocuFlow", icon: "🔒", description: "Contract & Document Management Automation.", href: "/automations/docuflow" },
    { title: "OmniServe", icon: "💬", description: "Cross-Platform Customer Support Routing.", href: "/automations/omniserve" }
  ],
  "hotel": [
    { title: "AppointMate", icon: "📅", description: "Intelligent Scheduling & Calendar Automation.", href: "/automations/appointmate" },
    { title: "ProofPulse", icon: "⭐", description: "Social Proof & Review Collector.", href: "/automations/proofpulse" },
    { title: "OmniServe", icon: "💬", description: "Cross-Platform Customer Support Routing.", href: "/automations/omniserve" }
  ],
  "hvac": [
    { title: "RouteMaster", icon: "🗺️", description: "Dispatch & Logistics Routing Automation.", href: "/automations/routemaster" },
    { title: "LeadLoom", icon: "🎯", description: "Hyper-Personalized Lead Nurture Automation.", href: "/automations/leadloom" },
    { title: "ProofPulse", icon: "⭐", description: "Social Proof & Review Collector.", href: "/automations/proofpulse" }
  ],
  "insurance": [
    { title: "ClaimBot", icon: "🛡️", description: "Claims Processing & Verification Automation.", href: "/automations/claimbot" },
    { title: "DocuFlow", icon: "🔒", description: "Contract & Document Management Automation.", href: "/automations/docuflow" },
    { title: "LeadLoom", icon: "🎯", description: "Hyper-Personalized Lead Nurture Automation.", href: "/automations/leadloom" }
  ],
  "logistics": [
    { title: "StockSentinel", icon: "📦", description: "Intelligent Inventory & Restock Alerts.", href: "/automations/stocksentinel" },
    { title: "RouteMaster", icon: "🗺️", description: "Dispatch & Logistics Routing Automation.", href: "/automations/routemaster" },
    { title: "DocuFlow", icon: "🔒", description: "Contract & Document Management Automation.", href: "/automations/docuflow" }
  ],
  "plumbing": [
    { title: "RouteMaster", icon: "🗺️", description: "Dispatch & Logistics Routing Automation.", href: "/automations/routemaster" },
    { title: "QualiSync", icon: "🚀", description: "Hyper-Personalized Lead Nurture Automation.", href: "/automations/qualisync" },
    { title: "ProofPulse", icon: "⭐", description: "Social Proof & Review Collector.", href: "/automations/proofpulse" }
  ],
  "real-estate": [
    { title: "QualiSync", icon: "🚀", description: "Hyper-Personalized Lead Nurture Automation.", href: "/automations/qualisync" },
    { title: "DocuFlow", icon: "🔒", description: "Contract & Document Management Automation.", href: "/automations/docuflow" },
    { title: "AppointMate", icon: "📅", description: "Intelligent Scheduling & Calendar Automation.", href: "/automations/appointmate" }
  ],
  "recruitment": [
    { title: "ScreenSync", icon: "🤝", description: "AI Candidate Screening & Onboarding Automation.", href: "/automations/screensync" },
    { title: "MemoMind", icon: "🧠", description: "AI Meeting Summarizer + Task Generator.", href: "/automations/memomind" },
    { title: "AppointMate", icon: "📅", description: "Intelligent Scheduling & Calendar Automation.", href: "/automations/appointmate" }
  ],
  "retail": [
    { title: "StockSentinel", icon: "📦", description: "Intelligent Inventory & Restock Alerts.", href: "/automations/stocksentinel" },
    { title: "OmniPulse", icon: "🚀", description: "Marketing Campaign Trigger Automation.", href: "/automations/omnipulse" },
    { title: "PulsePay", icon: "💳", description: "Subscription & Payment Management Automation.", href: "/automations/pulsepay" }
  ],
  "roofing": [
    { title: "QualiSync", icon: "🚀", description: "Hyper-Personalized Lead Nurture Automation.", href: "/automations/qualisync" },
    { title: "RouteMaster", icon: "🗺️", description: "Dispatch & Logistics Routing Automation.", href: "/automations/routemaster" },
    { title: "DocuFlow", icon: "🔒", description: "Contract & Document Management Automation.", href: "/automations/docuflow" }
  ],
  "solar": [
    { title: "QualiSync", icon: "🚀", description: "Hyper-Personalized Lead Nurture Automation.", href: "/automations/qualisync" },
    { title: "AppointMate", icon: "📅", description: "Intelligent Scheduling & Calendar Automation.", href: "/automations/appointmate" },
    { title: "DocuFlow", icon: "🔒", description: "Contract & Document Management Automation.", href: "/automations/docuflow" }
  ]
};

Object.keys(mapping).forEach(niche => {
  const p = path.join(__dirname, 'app/systems', niche, 'page.tsx');
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    
    // Add import
    if (!content.includes('SystemAutomations')) {
      const match = content.match(/import /);
      if (match) {
        content = content.replace(/import /, `import { SystemAutomations } from '@/app/components/system-automations';\nimport `);
      }
    }
    
    // Insert component
    if (!content.includes('<SystemAutomations')) {
      const ctaRegex = /\{\/\* CTA Box \*\/\}/g;
      
      const componentStr = `
      <SystemAutomations automations={${JSON.stringify(mapping[niche], null, 2)}} />
      
      {/* CTA Box */}`;
      
      content = content.replace(ctaRegex, componentStr);
      fs.writeFileSync(p, content);
      console.log('Updated ' + niche);
    }
  }
});
