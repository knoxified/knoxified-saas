import { NextResponse } from 'next/server';

const enterpriseSystems = [
  { id: 'real-estate', name: 'Real Estate Agent System', iconName: 'Home', desc: 'Handles the entire property inquiry lifecycle, qualifying serious buyers and organizing viewings to build a stronger sales pipeline.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'property', name: 'Property Management System', iconName: 'Building', desc: 'Manages tenant requests end-to-end, instantly routing maintenance issues and driving lease renewals without staff involvement.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'healthcare', name: 'Healthcare Inquiry System', iconName: 'HeartPulse', desc: 'Automates the complete patient intake process, securing private pre-consultation triage and seamless cross-department scheduling.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'recruitment', name: 'Recruitment System', iconName: 'Users', desc: 'Supports recruiter-led candidate intake, interview staging, and workflow organization so teams can review talent faster.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'insurance', name: 'Insurance Concierge System', iconName: 'Shield', desc: 'Manages first-response claims intake and seamlessly collects policy documents to accelerate your underwriting handoffs.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'logistics', name: 'Logistics Supervisor System', iconName: 'Truck', desc: 'Resolves delivery carrier tracking disputes and manages proactive exception handling to keep customers fully updated.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'ecommerce', name: 'E-commerce System', iconName: 'ShoppingCart', desc: 'Protects overall revenue by managing post-purchase workflows, returns authorization, and incoming order inquiries automatically.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'corporate', name: 'Corporate Virtual Executive System', iconName: 'Video', desc: 'Operates as a continuous digital executive, coordinating complex cross-department meetings to save management hours each week.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'med-spa', name: 'Med Spa System', iconName: 'HeartPulse', desc: 'Drives high-ticket treatment growth by securing premium consultations and managing the full membership lifecycle.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'legal', name: 'Legal Intake System', iconName: 'Scale', desc: 'Secures sensitive case details instantly, organizing attorney routing so your firm can focus exclusively on winning premium cases.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'construction', name: 'Construction System', iconName: 'Hammer', desc: 'Accelerates bid closing by capturing incoming inquiries and organizing complex dispatch routing while your team stays on the job site.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'hotel', name: 'Hotel System', iconName: 'Building', desc: 'Elevates guest experiences through automated concierge-level service, upselling amenities and deflecting front-desk volume.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'solar', name: 'Solar Consultant System', iconName: 'Sun', desc: 'Manages the multi-step solar qualification process, verifying homeowner leads to secure solid, ready-to-close appointments.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'retail', name: 'Retail Frontdesk System', iconName: 'ShoppingBag', desc: 'Drives true sales volume by handling inventory questions instantly, providing VIP-level guidance that brings customers to the register.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'dental', name: 'Dental Receptionist System', iconName: 'Stethoscope', desc: 'Controls complex treatment scheduling and insurance verification to ensure your chairs stay full and patients stay engaged.', tier: 'Enterprise Tier', complexity: 'High' },
  { id: 'custom', name: 'Custom Agent System', iconName: 'Briefcase', desc: 'An exclusive, tailored AI operating system engineered specifically to resolve your exact bottlenecks and scale your unique capabilities.', tier: 'Custom Setup', complexity: 'Advanced' }
];

const proSystems = [
  { id: 'plumbing', name: 'Plumbing Dispatcher System', iconName: 'Droplet', desc: 'Answers emergency calls and dispatches technicians automatically.', tier: 'Pro Tier', complexity: 'Standard' },
  { id: 'hvac', name: 'HVAC Dispatcher System', iconName: 'Thermometer', desc: 'Handles incoming service calls and manages your technician scheduling.', tier: 'Pro Tier', complexity: 'Standard' },
  { id: 'roofing', name: 'Roofing Estimator System', iconName: 'Hammer', desc: 'Catches storm damage leads instantly and schedules your inspections.', tier: 'Pro Tier', complexity: 'Standard' },
  { id: 'restaurant', name: 'Restaurant System', iconName: 'Utensils', desc: 'Takes reservations automatically and answers basic customer questions.', tier: 'Pro Tier', complexity: 'Standard' },
  { id: 'fitness', name: 'Gym & Fitness System', iconName: 'Dumbbell', desc: 'Answers membership inquiries and helps book trial passes for new visitors.', tier: 'Pro Tier', complexity: 'Standard' },
  { id: 'automotive', name: 'Automotive Dealership System', iconName: 'Car', desc: 'Helps dealerships book test drives and log initial vehicle interest.', tier: 'Pro Tier', complexity: 'Standard' }
];

const automations = [
  { "title": "AdPilot 🎯", "desc": "Monitors campaigns, detects waste, suggests optimizations, generates reports, and triggers alerts.", "id": "adpilot" },
  { "title": "WaitlistBot 🛎️", "desc": "Intelligently manages virtual queues, providing live updates and maximizing table turns.", "id": "waitlistbot" },
  { "title": "CaterBot 🍽️", "desc": "Automatically qualifies, nurtures, and builds out catering quotes directly from customer inquiries.", "id": "caterbot" },
  { "title": "WinBackBot 🔥", "desc": "Identifies dormant clients and automatically re-engages them with personalized offers.", "id": "winbackbot" },
  { "title": "MemoMind 🧠", "desc": "Automatically transcribes and summarizes meetings, capturing key decisions without manual effort.", "id": "memomind" },
  { "title": "TaskGen ✅", "desc": "Parses conversations and documents to automatically create and assign tasks in project management tools.", "id": "taskgen" },
  { "title": "DocuFlow 📄", "desc": "Auto-generates contracts, proposals, and reports from CRM data instantly.", "id": "docuflow" },
  { "title": "SignSync 🖋️", "desc": "Manages the entire e-signature lifecycle, from sending to follow-ups and final storage.", "id": "signsync" },
  { "title": "AppointMate 📅", "desc": "Automates calendar availability, booking, and buffer time allocation to eliminate email ping-pong.", "id": "appointmate" },
  { "title": "ReminderBot ⏰", "desc": "Reduces no-shows by sending timed SMS and email reminders to scheduled clients.", "id": "reminderbot" },
  { "title": "ProofPulse ⭐", "desc": "Triggers review requests to satisfied customers automatically after successful transactions or services.", "id": "proofpulse" },
  { "title": "CaseGen 💼", "desc": "Drafts compelling case studies and portfolio entries based on project wrap-up data.", "id": "casegen" },
  { "title": "SocialSync 📱", "desc": "Monitors industry trends and generates relevant social media posts aligned with brand voice.", "id": "socialsync" },
  { "title": "LeadScore 🎯", "desc": "Evaluates incoming leads against ideal customer profiles to prioritize high-value prospects.", "id": "leadscore" },
  { "title": "Onboarder 🚀", "desc": "Orchestrates the entire client onboarding sequence, delivering training materials and checking progress.", "id": "onboarder" },
  { "title": "InvoiceAI 💰", "desc": "Automatically generates and sends invoices based on completed milestones or time tracking.", "id": "invoiceai" },
  { "title": "ExpenseFlow 💳", "desc": "Categorizes receipts and matches expenses against budgets for instant financial oversight.", "id": "expenseflow" },
  { "title": "SupportBot 💬", "desc": "Handles tier-1 support queries instantly, resolving common issues before human escalation.", "id": "supportbot" },
  { "title": "FeedbackLoop 🔄", "desc": "Conducts post-interaction surveys and categorizes sentiment for service improvement.", "id": "feedbackloop" }
];

export async function GET() {
  return NextResponse.json({
    enterpriseSystems,
    proSystems,
    automations
  });
}
