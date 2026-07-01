const fs = require('fs');
const path = require('path');

const systemsDir = path.join(__dirname, 'app', 'systems');
const systems = fs.readdirSync(systemsDir).filter(f => fs.statSync(path.join(systemsDir, f)).isDirectory());

const scripts = {
  automotive: "Hi, this is Knoxified Automotive's AI assistant. I see you're interested in the 2024 Model Y. Are you looking to schedule a test drive this week?",
  construction: "Hello! You've reached Knoxified Construction. Looking for a quote on a roof repair? If you can text me a photo of the damage, I can provide a preliminary estimate right now.",
  corporate: "Welcome to Knoxified Corporate. I can assist you with scheduling a consultation with our executive team. What day works best for you?",
  dental: "Hi, Knoxified Dental here! I see you requested an emergency appointment for a toothache. We have an opening at 2 PM today. Should I book that for you?",
  ecommerce: "Hi there! I'm the AI assistant for Knoxified Commerce. I notice you left some items in your cart. Can I help answer any questions about the product to help you decide?",
  fitness: "Welcome to Knoxified Fitness! Ready to start your free trial? I can sign you up for the 6 PM HIIT class tonight. Shall I reserve your spot?",
  healthcare: "Hello, this is the Knoxified Clinic assistant. I see you need to schedule your annual physical. Do you prefer mornings or afternoons?",
  hotel: "Welcome to Knoxified Hospitality! I see you're inquiring about our suite availability for this weekend. We have one ocean-view suite left. Would you like me to hold it for you?",
  hvac: "Hi, Knoxified HVAC here. Is your AC blowing warm air? I can dispatch a technician to your location within 2 hours. What's your address?",
  insurance: "Hello from Knoxified Insurance. Are you looking to file a claim or get a new quote? I can guide you through either process in just a few minutes.",
  legal: "Welcome to Knoxified Legal. I'm our AI intake assistant. To help us prepare for your consultation, could you briefly describe the nature of your case?",
  logistics: "Hi, Knoxified Logistics tracking here. I see you're checking on shipment #8492. It's currently out for delivery and will arrive by 5 PM today.",
  'med-spa': "Hello! Knoxified Med Spa's virtual assistant here. Interested in booking a Botox consultation? I have an opening tomorrow at 10 AM. Does that work for you?",
  plumbing: "Hi, Knoxified Plumbing. Do you have a plumbing emergency? I can dispatch our on-call plumber to your house right now. What's the address?",
  property: "Hello from Knoxified Property Management. Are you calling to report a maintenance issue or inquire about a vacant unit?",
  'real-estate': "Hi! I'm the AI assistant for Knoxified Realty. Want to schedule a viewing for the property on Elm Street? I have times available this Thursday and Friday.",
  recruitment: "Welcome to Knoxified Staffing. I see you're applying for the Senior Developer role. I'd like to ask you three quick screening questions to fast-track your application.",
  restaurant: "Hi, Knoxified Restaurant! Looking to make a reservation for dinner? I can accommodate a party of 4 at 7:30 PM tonight. Should I book it?",
  retail: "Welcome to Knoxified Retail. Do you need help finding a product in-store or checking on an online order?",
  roofing: "Hello! Knoxified Roofing here. Would you like to schedule a free drone inspection of your roof? I can send a technician out as early as tomorrow."
};

let errors = [];

systems.forEach(system => {
  const pagePath = path.join(systemsDir, system, 'page.tsx');
  if (!fs.existsSync(pagePath)) return;
  
  let content = fs.readFileSync(pagePath, 'utf8');
  
  // Add import if not exists
  if (!content.includes('AIVoiceSample')) {
    content = content.replace(/(import .*?;[\n\r]+)/, "$1import { AIVoiceSample } from '@/components/ui/ai-voice-sample';\n");
  }
  
  // Inject the component before the "Deploy" Link button
  const replaceTarget = /<\/div>\s*<Link href="\/pricing"/;
  const scriptText = scripts[system] || "Hi there, I am the Knoxified AI Assistant. How can I help you today?";
  
  // Escape quotes
  const safeScriptText = scriptText.replace(/"/g, '&quot;').replace(/'/g, '&apos;');
  
  if (replaceTarget.test(content) && !content.includes('<AIVoiceSample')) {
    const replacement = `</div>\n          \n          <AIVoiceSample \n            industry="${system}"\n            text="${safeScriptText}"\n          />\n          \n          <Link href="/pricing"`;
    content = content.replace(replaceTarget, replacement);
    fs.writeFileSync(pagePath, content);
  } else {
    errors.push(system);
  }
});

console.log("Errors/Skipped:", errors);