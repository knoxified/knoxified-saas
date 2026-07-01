'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How long does setup take?",
    answer: "For our standard plans, setup is instant. As soon as your payment is confirmed, your features are automatically unlocked. For custom Enterprise solutions, the integration timeframe will be discussed during our initial consultation."
  },
  {
    question: "Can AI replace my thinking?",
    answer: "AI is powerful, but it can never replace your thinking. It handles the repetition, initial touches, and data collection so you can apply your strategic expertise where it matters most."
  },
  {
    question: "Is there a long-term contract?",
    answer: "No, all our plans are month-to-month. You can cancel or upgrade at any time. We believe in earning your business every single month through measurable ROI."
  },
  {
    question: "Does it integrate with my existing CRM?",
    answer: "Yes, we integrate seamlessly with Salesforce, HubSpot, GoHighLevel, and hundreds of other tools via Zapier and custom webhooks."
  }
];

export default function PricingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4 tracking-tight">Pricing</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-4">Which system do I need?</p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/10 text-amber-400 text-sm border border-amber-500/20">
          <span className="font-semibold">Note:</span> AI handles the repetition. You handle the core decisions.
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto items-center mb-32">
        {/* Starter */}
        <div className="p-8 rounded-2xl bg-slate-800/80 backdrop-blur-md border border-slate-700/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all flex flex-col h-full">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-50 mb-2">Starter</h3>
            <p className="text-sm text-slate-400">For solopreneurs tightening the loop.</p>
          </div>
          <div className="mb-6 flex items-baseline gap-1">
            <span className="text-4xl font-bold text-slate-50">$247</span>
            <span className="text-slate-500">/mo</span>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-start gap-3 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
              <span>Inbound Voice Agents</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
              <span>1 Active Automation</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
              <span>250 Mins Inbound Limit</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
              <span>700 Automation Credits</span>
            </li>
          </ul>
          <Link href="/get-started" className="block text-center w-full py-3 px-4 rounded-lg font-medium border border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
            Start Free Trial
          </Link>
        </div>

        {/* Pro */}
        <div className="p-8 rounded-2xl bg-slate-800/95 backdrop-blur-lg border border-cyan-500/50 relative shadow-[0_0_40px_rgba(6,182,212,0.2)] md:-translate-y-4 flex flex-col h-[105%] z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            Recommended
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-50 mb-2">Pro</h3>
            <p className="text-sm text-cyan-400">The complete growth engine for scaling teams.</p>
          </div>
          <div className="mb-6 flex items-baseline gap-1">
            <span className="text-5xl font-bold text-slate-50">$697</span>
            <span className="text-slate-400">/mo</span>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-start gap-3 text-sm text-white">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <span className="font-semibold">Everything in Starter</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
              <span>Outbound System Tools</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
              <span>3 Active Automations</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
              <span>1,000 Mins (Inbound/Outbound)</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
              <span>2,000 Automation Credits</span>
            </li>
          </ul>
          <Link href="/get-started" className="block text-center w-full py-3 px-4 rounded-lg font-medium bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            Start Free Trial
          </Link>
        </div>

        {/* Enterprise */}
        <div className="p-8 rounded-2xl bg-slate-800/80 backdrop-blur-md border border-slate-700/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all flex flex-col h-full">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-50 mb-2">Enterprise</h3>
            <p className="text-sm text-slate-400">For growing teams needing massive scale.</p>
          </div>
          <div className="mb-6 flex items-baseline gap-1">
            <span className="text-4xl font-bold text-slate-50">$2,497</span>
            <span className="text-slate-500">/mo</span>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-start gap-3 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
              <span><strong className="text-slate-200">Everything in Pro</strong></span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
              <span>Virtual System Tools</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
              <span>8 Active Automations</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
              <span>5,500 Mins Limits</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
              <span>8,000 Automation Credits</span>
            </li>
          </ul>
          <Link href="/get-started" className="block text-center w-full py-3 px-4 rounded-lg font-medium border border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
            Start Free Trial
          </Link>
        </div>

        {/* Custom */}
        <div className="p-8 rounded-2xl bg-slate-800/80 backdrop-blur-md border border-slate-700/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all flex flex-col h-full">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-50 mb-2">Custom</h3>
            <p className="text-sm text-slate-400">Custom deployment & hands-on strategy.</p>
          </div>
          <div className="mb-6 flex items-baseline gap-1">
            <span className="text-4xl font-bold text-slate-50">Let&apos;s Talk</span>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-start gap-3 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
              <span><strong className="text-slate-200">Everything in Enterprise</strong></span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
              <span>Dedicated Success Manager</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
              <span>Custom AI model training</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
              <span>Bespoke limits</span>
            </li>
          </ul>
          <Link href="/contact" className="block text-center w-full py-3 px-4 rounded-lg font-medium border border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
            Contact Sales
          </Link>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="max-w-6xl mx-auto mb-32 hidden md:block">
        <h2 className="text-3xl font-bold text-slate-50 mb-10 text-center tracking-tight">Compare Plans</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-700/50">
                <th className="py-4 px-6 text-slate-400 font-medium">Features</th>
                <th className="py-4 px-6 text-slate-50 font-semibold w-1/5 text-center">Starter</th>
                <th className="py-4 px-6 font-bold text-cyan-400 w-1/5 text-center bg-slate-800/30 rounded-t-xl relative">
                  <div className="absolute inset-x-0 top-0 h-px bg-cyan-500/50"></div>
                  Pro
                </th>
                <th className="py-4 px-6 text-slate-50 font-semibold w-1/5 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {/* Category */}
              <tr>
                <td colSpan={4} className="py-4 px-6 font-semibold text-slate-300 bg-slate-800/20">Operational Scale & Infrastructure</td>
              </tr>
              <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-6 text-slate-400">Monthly Minutes Limit</td>
                <td className="py-4 px-6 text-center text-slate-300">250 Mins</td>
                <td className="py-4 px-6 text-center bg-slate-800/30 text-white font-medium">1,000 Mins</td>
                <td className="py-4 px-6 text-center text-slate-300">5,500 Mins</td>
              </tr>
              <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-6 text-slate-400">Active Automations</td>
                <td className="py-4 px-6 text-center text-slate-300">1 Automation</td>
                <td className="py-4 px-6 text-center bg-slate-800/30 text-white font-medium">3 Automations</td>
                <td className="py-4 px-6 text-center text-slate-300">8 Automations</td>
              </tr>
              <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-6 text-slate-400">Automation Credits</td>
                <td className="py-4 px-6 text-center text-slate-300">700 Credits</td>
                <td className="py-4 px-6 text-center bg-slate-800/30 text-white font-medium">2,000 Credits</td>
                <td className="py-4 px-6 text-center text-slate-300">8,000 Credits</td>
              </tr>
              <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-6 text-slate-400">AI Systems</td>
                <td className="py-4 px-6 text-center text-slate-600">—</td>
                <td className="py-4 px-6 text-center bg-slate-800/30"><CheckCircle2 className="w-5 h-5 text-cyan-500 mx-auto" /></td>
                <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-slate-600 mx-auto" /></td>
              </tr>
              <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-6 text-slate-400">System Capabilities</td>
                <td className="py-4 px-6 text-center text-slate-300">Inbound Only</td>
                <td className="py-4 px-6 text-center bg-slate-800/30 text-white font-medium">Inbound & Outbound</td>
                <td className="py-4 px-6 text-center text-slate-300">Virtual System Tools</td>
              </tr>

              {/* Category */}
              <tr>
                <td colSpan={4} className="py-4 px-6 font-semibold text-slate-300 bg-slate-800/20">Growth & Retargeting</td>
              </tr>
              <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-6 text-slate-400">Lead Reactivation</td>
                <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-cyan-500 mx-auto" /></td>
                <td className="py-4 px-6 text-center bg-slate-800/30"><CheckCircle2 className="w-5 h-5 text-cyan-500 mx-auto" /></td>
                <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-slate-600 mx-auto" /></td>
              </tr>
              <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-6 text-slate-400">Multi-Channel Retargeting</td>
                <td className="py-4 px-6 text-center text-slate-600">—</td>
                <td className="py-4 px-6 text-center bg-slate-800/30"><CheckCircle2 className="w-5 h-5 text-cyan-500 mx-auto" /></td>
                <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-slate-600 mx-auto" /></td>
              </tr>
              <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-6 text-slate-400">Intelligent Upsell Workflows</td>
                <td className="py-4 px-6 text-center text-slate-600">—</td>
                <td className="py-4 px-6 text-center bg-slate-800/30"><CheckCircle2 className="w-5 h-5 text-cyan-500 mx-auto" /></td>
                <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-slate-600 mx-auto" /></td>
              </tr>

              {/* Category */}
              <tr>
                <td colSpan={4} className="py-4 px-6 font-semibold text-slate-300 bg-slate-800/20">Support & Setup</td>
              </tr>
              <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-6 text-slate-400">Instant Setup (No 2-Day Delay)</td>
                <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-cyan-500 mx-auto" /></td>
                <td className="py-4 px-6 text-center bg-slate-800/30"><CheckCircle2 className="w-5 h-5 text-cyan-500 mx-auto" /></td>
                <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-slate-600 mx-auto" /></td>
              </tr>
              <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-6 text-slate-400">Email Support</td>
                <td className="py-4 px-6 text-center text-slate-300">Standard</td>
                <td className="py-4 px-6 text-center bg-slate-800/30 text-white font-medium">Priority</td>
                <td className="py-4 px-6 text-center text-slate-300">24/7 Custom</td>
              </tr>
              <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-6 text-slate-400 rounded-bl-xl">Dedicated Success Manager</td>
                <td className="py-4 px-6 text-center text-slate-600">—</td>
                <td className="py-4 px-6 text-center bg-slate-800/30 rounded-b-xl relative text-slate-600">
                  <div className="absolute inset-x-0 bottom-0 h-px bg-cyan-500/50"></div>
                  —
                </td>
                <td className="py-4 px-6 text-center rounded-br-xl"><CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-50 mb-8 text-center tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`rounded-2xl bg-slate-800/80 backdrop-blur-md border transition-all ${openFaqIndex === index ? 'border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.1)]' : 'border-slate-700/50 shadow-md hover:border-slate-600'}`}
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaqIndex === index}
              >
                <h4 className="text-slate-50 text-lg font-bold pr-8">{faq.question}</h4>
                <motion.div
                  animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex-shrink-0 text-cyan-500"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openFaqIndex === index && (
                  <motion.div
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-6 -mt-2">
                      <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
