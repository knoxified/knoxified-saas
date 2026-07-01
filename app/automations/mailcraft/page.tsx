'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CheckCircle2, ChevronRight, Settings, Mail, Copy, Check, Zap, RefreshCw, ArrowLeft, User, Building2, Briefcase } from 'lucide-react';

const industries = ['SaaS', 'Dental', 'Real Estate', 'E-Commerce', 'HVAC', 'Insurance', 'Recruitment', 'Law Firm'];

const enrichedLeads: Record<string, {
  first_name: string;
  last_name: string;
  company_name: string;
  position: string;
  work_email: string;
  linkedin_personal: string;
  industry: string;
  website_url: string;
}> = {
  SaaS: {
    first_name: 'Marcus', last_name: 'Chen', company_name: 'Nexlify Inc.',
    position: 'Head of Growth', work_email: 'marcus.chen@nexlify.io',
    linkedin_personal: 'linkedin.com/in/marcuschen-growth', industry: 'SaaS', website_url: 'nexlify.io',
  },
  Dental: {
    first_name: 'Sarah', last_name: 'Whitmore', company_name: 'Whitmore Family Dentistry',
    position: 'Practice Owner', work_email: 'sarah@whitmoredental.com',
    linkedin_personal: 'linkedin.com/in/dr-sarah-whitmore', industry: 'Dental', website_url: 'whitmoredental.com',
  },
  'Real Estate': {
    first_name: 'Jordan', last_name: 'Reeves', company_name: 'Premier Realty Group',
    position: 'Senior Realtor', work_email: 'jordan.reeves@premierrealty.com',
    linkedin_personal: 'linkedin.com/in/jordan-reeves-realtor', industry: 'Real Estate', website_url: 'premierrealty.com',
  },
  'E-Commerce': {
    first_name: 'Priya', last_name: 'Sharma', company_name: 'VelvetNest',
    position: 'Co-Founder & CEO', work_email: 'priya@velvetnest.co',
    linkedin_personal: 'linkedin.com/in/priya-sharma-velvetnest', industry: 'E-Commerce', website_url: 'velvetnest.co',
  },
  HVAC: {
    first_name: 'Derek', last_name: 'Paulson', company_name: 'Comfort Zone HVAC',
    position: 'Operations Manager', work_email: 'd.paulson@comfortzonehvac.com',
    linkedin_personal: 'linkedin.com/in/derek-paulson-hvac', industry: 'HVAC', website_url: 'comfortzonehvac.com',
  },
  Insurance: {
    first_name: 'Linda', last_name: 'Hargrove', company_name: 'Hargrove Financial Group',
    position: 'VP of Client Relations', work_email: 'l.hargrove@hargrovefinancial.com',
    linkedin_personal: 'linkedin.com/in/linda-hargrove-financial', industry: 'Insurance', website_url: 'hargrovefinancial.com',
  },
  Recruitment: {
    first_name: 'James', last_name: 'Okafor', company_name: 'TalentBridge Staffing',
    position: 'Managing Director', work_email: 'james.okafor@talentbridge.io',
    linkedin_personal: 'linkedin.com/in/james-okafor-talent', industry: 'Recruitment', website_url: 'talentbridge.io',
  },
  'Law Firm': {
    first_name: 'Angela', last_name: 'Mercer', company_name: 'Mercer & Associates Law',
    position: 'Managing Partner', work_email: 'a.mercer@mercerassociates.law',
    linkedin_personal: 'linkedin.com/in/angela-mercer-attorney', industry: 'Law Firm', website_url: 'mercerassociates.law',
  },
};

function generateEmails(lead: typeof enrichedLeads.SaaS) {
  return [
    {
      tag: 'Email 1',
      label: 'Initial Hook',
      subject: `Quick question for ${lead.first_name}`,
      preview: 'Direct opener built around their role and a clear problem statement.',
      body: `Hi ${lead.first_name},

I came across ${lead.company_name} and noticed you're the ${lead.position} — a role I know gets buried under tasks that don't move the needle.

Most ${lead.position}s in ${lead.industry} tell me the same thing: too much time goes into manual follow-up, prospecting, and admin. We've built AI automations that eliminate exactly that.

No fluff — just systems that handle the repetitive work so you can focus on growth.

Would a 15-minute call this week be worth it?

Best,
[Your Name]`,
    },
    {
      tag: 'Email 2',
      label: 'Case Study',
      subject: `How a ${lead.industry} business cut prospecting time by 80%`,
      preview: 'Industry-specific proof with real outcomes to build credibility.',
      body: `Hi ${lead.first_name},

Following up quickly — wanted to share something relevant to what ${lead.company_name} is doing.

A client of ours in ${lead.industry} had the same challenge: too much manual outreach, inconsistent follow-up, and reps spending hours on research instead of selling.

After deploying our automation stack:

• 80% reduction in daily prospecting time
• 3× increase in qualified replies within 30 days
• Pipeline value up $60,000 in the first quarter

Given your position as ${lead.position}, pipeline efficiency likely matters to you. I think there's a real fit here.

Worth a look? → ${lead.website_url}

[Your Name]`,
    },
    {
      tag: 'Email 3',
      label: 'Value Drop',
      subject: `Something useful for ${lead.company_name}`,
      preview: 'Pure value — no pitch. Builds trust and keeps the door open.',
      body: `Hi ${lead.first_name},

No pitch today — just something genuinely useful.

I put together a short breakdown of the top 3 automation mistakes ${lead.industry} businesses make that quietly kill growth. It's specific to companies at the stage ${lead.company_name} appears to be at.

Happy to send it over at no cost — just reply with "send it" and it's yours.

If you're also open to a quick conversation about what's actually working for ${lead.industry} teams right now, I'm easy to reach.

My LinkedIn if easier: ${lead.linkedin_personal}

[Your Name]`,
    },
    {
      tag: 'Email 4',
      label: 'Breakup',
      subject: `Closing the loop, ${lead.first_name}`,
      preview: "Final touch — respectful, human, and leaves a lasting impression.",
      body: `Hi ${lead.first_name},

I've reached out a few times and completely understand if the timing isn't right — running ${lead.company_name} as ${lead.position} keeps the calendar full.

This will be my last message, but I want to leave the door genuinely open.

If AI-powered automation, lead enrichment, or outreach optimization ever becomes a priority — even months from now — I'd love to reconnect. No pressure, ever.

📧 [Your Email]
📞 [Your Phone]
🔗 [Your LinkedIn]

Wishing ${lead.first_name} and the team at ${lead.company_name} continued success.

[Your Name]`,
    },
  ];
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-700/60 hover:bg-slate-600/80 text-slate-300 hover:text-slate-50 border border-slate-600/50 transition-all"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}

export default function MailCraftPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('SaaS');
  const [drafting, setDrafting] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const lead = enrichedLeads[selectedIndustry];
  const emails = generateEmails(lead);

  const handleDraft = () => {
    setRevealed(false);
    setDrafting(true);
    setActiveTab(0);
    setTimeout(() => {
      setDrafting(false);
      setRevealed(true);
    }, 2400);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'MailCraft ✍️',
    description: '4-Step Personalized Outreach Email Generator from Enriched Lead Data',
    provider: { '@type': 'Organization', name: 'Knoxified' },
  };

  return (
    <div className="container mx-auto px-4 py-24 max-w-7xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 backdrop-blur-md border border-cyan-500/30 text-sm font-medium text-cyan-400 mb-8 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <Settings className="w-4 h-4" /> MailCraft ✍️
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 mb-6 tracking-tight leading-tight">
            4-Step Personalized Outreach Email Drafter
          </h1>
          <p className="text-xl font-medium text-cyan-400 mb-6">
            Takes a fully enriched lead profile from LeadReach and instantly drafts 4 high-converting, hyper-personalized outreach emails — ready to send.
          </p>
          <div className="text-lg text-slate-400 mb-8 leading-relaxed space-y-4">
            <p>
              Once LeadReach has surfaced the full contact picture, MailCraft takes over. It reads the lead&apos;s first name, company, role, industry, LinkedIn URL, and website — then writes a complete 4-email sequence tailored specifically to that person.
            </p>
            <p>
              No templates. No guesswork. Every word is written with that one lead in mind.
            </p>
          </div>

          {/* Companion banner */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 mb-8">
            <div className="text-2xl">🔗</div>
            <div className="flex-1">
              <p className="text-slate-200 text-sm font-semibold">Works with LeadReach 🔍</p>
              <p className="text-slate-400 text-xs">LeadReach enriches the lead first. MailCraft drafts the emails after. Use them in sequence.</p>
            </div>
            <Link href="/automations/leadreach" className="shrink-0 flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
              <ArrowLeft className="w-3 h-3" /> LeadReach
            </Link>
          </div>

          <Link href="/pricing" className="inline-flex px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            Deploy MailCraft
          </Link>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="w-full aspect-square relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 overflow-hidden flex items-center justify-center shadow-2xl">
            <div className="relative w-full h-full">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 rounded-full animate-ping" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/10 rounded-full animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-24 h-24 bg-slate-900 rounded-2xl border border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.3)] z-10 text-5xl">
                ✍️
              </div>
              {[
                { top: '8%', left: '3%', text: 'Email 1 — Initial Hook' },
                { top: '20%', right: '2%', text: 'Email 2 — Case Study' },
                { bottom: '22%', left: '2%', text: 'Email 3 — Value Drop' },
                { bottom: '10%', right: '3%', text: 'Email 4 — Breakup' },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom, animationDelay: `${i * 0.5}s` }}
                  className="absolute px-3 py-1.5 rounded-lg bg-slate-800/90 border border-blue-500/30 text-blue-300 text-xs font-mono shadow-lg animate-pulse whitespace-nowrap"
                >
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Live Demo */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4 tracking-tight">✍️ Live Email Drafting Demo</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Select the industry of an enriched lead. MailCraft reads the profile and drafts all 4 outreach emails instantly — each one uniquely personalized.
          </p>
        </div>

        {/* Industry Selector */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {industries.map((industry) => (
            <button
              key={industry}
              id={`mailcraft-industry-${industry.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => { setSelectedIndustry(industry); setRevealed(false); setActiveTab(0); }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${
                selectedIndustry === industry
                  ? 'bg-blue-500 border-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                  : 'bg-slate-800/60 border-slate-700/50 text-slate-300 hover:border-blue-500/40 hover:text-slate-100'
              }`}
            >
              {industry}
            </button>
          ))}
        </div>

        {/* Lead preview strip */}
        <div className="max-w-3xl mx-auto mb-8 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center">
              <User className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <p className="text-slate-200 text-sm font-bold">{lead.first_name} {lead.last_name}</p>
              <p className="text-slate-400 text-xs">{lead.position}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <Building2 className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <p className="text-slate-200 text-sm font-bold">{lead.company_name}</p>
              <p className="text-slate-400 text-xs">{lead.website_url}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <p className="text-slate-200 text-sm font-bold">{lead.industry}</p>
              <p className="text-slate-400 text-xs">via LeadReach 🔍</p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold whitespace-nowrap">
            ✓ Enriched Profile
          </span>
        </div>

        <div className="flex justify-center mb-10">
          <button
            id="draft-emails-btn"
            onClick={handleDraft}
            disabled={drafting}
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-full text-lg transition-all shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] hover:-translate-y-0.5"
          >
            {drafting ? (
              <><RefreshCw className="w-5 h-5 animate-spin" /> Drafting Emails…</>
            ) : (
              <><Zap className="w-5 h-5" /> Draft 4 Outreach Emails</>
            )}
          </button>
        </div>

        {/* Loading */}
        {drafting && (
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full border-4 border-blue-500/30 border-t-blue-500 animate-spin" />
              <div className="space-y-2">
                <p className="text-slate-200 font-semibold text-lg">Writing personalized emails for {lead.first_name}…</p>
                <p className="text-slate-400 text-sm">Crafting 4 unique emails from enriched lead data — name, role, company, LinkedIn & industry</p>
              </div>
              <div className="grid grid-cols-4 gap-2 w-full mt-2">
                {['Hook', 'Case Study', 'Value', 'Breakup'].map((step, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5">
                    <div className="h-1.5 w-full rounded-full bg-slate-700/50 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"
                        style={{ width: `${(i + 1) * 25}%`, animationDelay: `${i * 0.2}s` }}
                      />
                    </div>
                    <span className="text-slate-500 text-xs">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Revealed Emails */}
        {revealed && !drafting && (
          <div className="max-w-4xl mx-auto rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 overflow-hidden">
            <div className="p-6 border-b border-slate-700/50 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-slate-50 font-bold text-lg">4-Step Outreach Sequence</h3>
                <p className="text-slate-400 text-xs">Personalized for {lead.first_name} {lead.last_name} · {lead.company_name} · {lead.industry}</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-slate-700/50 overflow-x-auto">
              {emails.map((email, idx) => (
                <button
                  key={idx}
                  id={`mailcraft-tab-${idx}`}
                  onClick={() => setActiveTab(idx)}
                  className={`px-5 py-4 text-xs font-semibold whitespace-nowrap border-b-2 transition-all flex flex-col items-center gap-0.5 ${
                    activeTab === idx
                      ? 'border-blue-500 text-blue-400 bg-blue-500/5'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="text-[10px] text-slate-500 font-normal">{email.tag}</span>
                  {email.label}
                </button>
              ))}
            </div>

            {/* Preview badge */}
            <div className="px-5 pt-4">
              <div className="inline-block px-3 py-1 rounded-full bg-slate-700/60 border border-slate-600/50 text-slate-400 text-xs">
                {emails[activeTab].preview}
              </div>
            </div>

            {/* Email body */}
            <div className="p-5 flex flex-col gap-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Subject Line</div>
                  <div className="text-slate-100 font-bold text-sm">{emails[activeTab].subject}</div>
                </div>
                <CopyButton text={`Subject: ${emails[activeTab].subject}\n\n${emails[activeTab].body}`} />
              </div>

              <div className="bg-slate-900/70 rounded-xl border border-slate-700/40 p-5 overflow-y-auto max-h-80">
                <pre className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap font-sans">
                  {emails[activeTab].body}
                </pre>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>{emails[activeTab].tag} of 4 · personalized for {lead.first_name}</span>
                <div className="flex gap-1.5">
                  {emails.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(idx)}
                      className={`h-1.5 rounded-full transition-all ${activeTab === idx ? 'bg-blue-400 w-5' : 'bg-slate-600 w-1.5'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Key Capabilities */}
      <div className="mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-12 text-center tracking-tight">🚀 Key Capabilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Reads enriched lead profiles from LeadReach and immediately begins drafting — zero manual input needed',
            'Writes 4 distinct emails: Initial Hook, Case Study, Value Drop, and a Breakup email',
            'Personalizes every line using the lead\'s name, company, industry, role, LinkedIn, and website',
            'Produces clean, copy-ready text that sales reps can paste and send without editing',
            'Adapts tone and angle based on industry — a SaaS email reads nothing like a dental one',
            'Triggers automatically when LeadReach outputs a completed lead profile to your CRM',
          ].map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4 p-6 bg-slate-800/40 rounded-2xl border border-slate-700/50 hover:bg-slate-800/80 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
              <p className="text-slate-300 leading-relaxed text-sm">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* The 4 Emails Explained */}
      <div className="mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-12 text-center tracking-tight">📧 The 4-Email Sequence</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              number: '01',
              title: 'Initial Hook',
              color: 'cyan',
              desc: 'Opens with a direct, role-specific pain point. Short, sharp, and personalized with the lead\'s name, position, and company. Goal: get a reply.',
            },
            {
              number: '02',
              title: 'Case Study',
              color: 'blue',
              desc: 'Builds credibility with industry-specific proof. Uses real-sounding outcomes relevant to the lead\'s vertical. Goal: build trust.',
            },
            {
              number: '03',
              title: 'Value Drop',
              color: 'violet',
              desc: 'Provides a free, relevant resource. No hard pitch — just genuine value tied to their industry. Includes their LinkedIn URL for a soft CTA. Goal: build rapport.',
            },
            {
              number: '04',
              title: 'Breakup',
              color: 'emerald',
              desc: 'Closes the sequence with grace. Human, respectful, and memorable. Leaves the door completely open for future contact. Goal: be remembered.',
            },
          ].map((item, idx) => (
            <div key={idx} className={`p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-${item.color}-500/30 transition-all`}>
              <div className="flex items-start gap-4">
                <div className={`text-3xl font-black text-${item.color}-500/30 leading-none`}>{item.number}</div>
                <div>
                  <h3 className="text-slate-100 font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Role Overview */}
      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <div className="p-8 md:p-12 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden">
          <h3 className="text-3xl font-bold text-slate-50 mb-6 relative z-10">Role Overview</h3>
          <p className="text-slate-400 text-lg leading-relaxed mb-6 relative z-10">
            MailCraft is the writing arm of your outreach pipeline. After LeadReach surfaces the who, MailCraft handles the what — crafting four sequenced emails that feel hand-written for every single lead.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed relative z-10">
            It eliminates the inconsistency of individual reps writing different emails to similar leads, and removes the blank-page problem entirely. Your team receives ready-to-send copy the moment a lead is enriched.
          </p>
        </div>

        <div className="p-8 md:p-12 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-slate-50 mb-6 relative z-10">📊 Why Sales Teams Love It</h3>
          <div className="space-y-6 relative z-10">
            {[
              'Zero time wasted writing cold emails — 4 drafts appear instantly',
              'Consistent, high-quality copy for every lead regardless of which rep handles them',
              'Each email sequence is unique — no lead gets a generic template',
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-10 flex justify-center shrink-0">
                  <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                </div>
                <span className="text-slate-300 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4 tracking-tight">⚡ Deploy MailCraft</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Pair it with LeadReach and every new lead gets a fully enriched profile and 4 ready-to-send personalized emails — on autopilot.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/pricing" className="inline-flex items-center gap-2 px-10 py-5 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-full transition-all shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] hover:-translate-y-1 text-lg">
              Deploy MailCraft <ChevronRight className="w-5 h-5 flex-shrink-0" />
            </Link>
            <Link href="/automations/leadreach" className="inline-flex items-center gap-2 px-10 py-5 bg-slate-700/80 hover:bg-slate-600/80 text-slate-100 font-bold rounded-full transition-all border border-slate-600/50 hover:-translate-y-1 text-lg">
              <ArrowLeft className="w-5 h-5 flex-shrink-0" /> View LeadReach 🔍
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
