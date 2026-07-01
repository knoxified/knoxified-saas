'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CheckCircle2, ChevronRight, Settings, Mail, User, Building2, Briefcase, Phone, Globe, Twitter, Linkedin, Facebook, Copy, Check, Zap, RefreshCw, ArrowRight } from 'lucide-react';

const industries = ['SaaS', 'Dental', 'Real Estate', 'E-Commerce', 'HVAC', 'Insurance', 'Recruitment', 'Law Firm'];

const leadProfiles: Record<string, {
  first_name: string;
  last_name: string;
  company_name: string;
  position: string;
  work_email: string;
  twitter_handle: string;
  facebook_url: string;
  linkedin_personal: string;
  linkedin_company: string;
  corporate_phone: string;
  industry: string;
  website_url: string;
}> = {
  SaaS: {
    first_name: 'Marcus', last_name: 'Chen', company_name: 'Nexlify Inc.',
    position: 'Head of Growth', work_email: 'marcus.chen@nexlify.io',
    twitter_handle: '@marcus_growth', facebook_url: 'facebook.com/marcus.chen.nexlify',
    linkedin_personal: 'linkedin.com/in/marcuschen-growth', linkedin_company: 'linkedin.com/company/nexlify',
    corporate_phone: '+1 (415) 882-3301', industry: 'SaaS', website_url: 'nexlify.io',
  },
  Dental: {
    first_name: 'Sarah', last_name: 'Whitmore', company_name: 'Whitmore Family Dentistry',
    position: 'Practice Owner', work_email: 'sarah@whitmoredental.com',
    twitter_handle: '@drwhitmore', facebook_url: 'facebook.com/WhitmoreFamilyDentistry',
    linkedin_personal: 'linkedin.com/in/dr-sarah-whitmore', linkedin_company: 'linkedin.com/company/whitmore-family-dentistry',
    corporate_phone: '+1 (602) 550-4420', industry: 'Dental', website_url: 'whitmoredental.com',
  },
  'Real Estate': {
    first_name: 'Jordan', last_name: 'Reeves', company_name: 'Premier Realty Group',
    position: 'Senior Realtor', work_email: 'jordan.reeves@premierrealty.com',
    twitter_handle: '@jordanreeves_re', facebook_url: 'facebook.com/JordanReevesRealtor',
    linkedin_personal: 'linkedin.com/in/jordan-reeves-realtor', linkedin_company: 'linkedin.com/company/premier-realty-group',
    corporate_phone: '+1 (305) 774-0012', industry: 'Real Estate', website_url: 'premierrealty.com',
  },
  'E-Commerce': {
    first_name: 'Priya', last_name: 'Sharma', company_name: 'VelvetNest',
    position: 'Co-Founder & CEO', work_email: 'priya@velvetnest.co',
    twitter_handle: '@priyavelvetnest', facebook_url: 'facebook.com/VelvetNestStore',
    linkedin_personal: 'linkedin.com/in/priya-sharma-velvetnest', linkedin_company: 'linkedin.com/company/velvetnest',
    corporate_phone: '+44 207 946 0082', industry: 'E-Commerce', website_url: 'velvetnest.co',
  },
  HVAC: {
    first_name: 'Derek', last_name: 'Paulson', company_name: 'Comfort Zone HVAC',
    position: 'Operations Manager', work_email: 'd.paulson@comfortzonehvac.com',
    twitter_handle: '@derekpaulsonhvac', facebook_url: 'facebook.com/ComfortZoneHVAC',
    linkedin_personal: 'linkedin.com/in/derek-paulson-hvac', linkedin_company: 'linkedin.com/company/comfort-zone-hvac',
    corporate_phone: '+1 (713) 382-5500', industry: 'HVAC', website_url: 'comfortzonehvac.com',
  },
  Insurance: {
    first_name: 'Linda', last_name: 'Hargrove', company_name: 'Hargrove Financial Group',
    position: 'VP of Client Relations', work_email: 'l.hargrove@hargrovefinancial.com',
    twitter_handle: '@lindahargrove_fi', facebook_url: 'facebook.com/HargroveFinancialGroup',
    linkedin_personal: 'linkedin.com/in/linda-hargrove-financial', linkedin_company: 'linkedin.com/company/hargrove-financial-group',
    corporate_phone: '+1 (312) 667-9900', industry: 'Insurance', website_url: 'hargrovefinancial.com',
  },
  Recruitment: {
    first_name: 'James', last_name: 'Okafor', company_name: 'TalentBridge Staffing',
    position: 'Managing Director', work_email: 'james.okafor@talentbridge.io',
    twitter_handle: '@jamesokafor_tb', facebook_url: 'facebook.com/TalentBridgeStaffing',
    linkedin_personal: 'linkedin.com/in/james-okafor-talent', linkedin_company: 'linkedin.com/company/talentbridge-staffing',
    corporate_phone: '+44 161 820 4400', industry: 'Recruitment', website_url: 'talentbridge.io',
  },
  'Law Firm': {
    first_name: 'Angela', last_name: 'Mercer', company_name: 'Mercer & Associates Law',
    position: 'Managing Partner', work_email: 'a.mercer@mercerassociates.law',
    twitter_handle: '@angela_mercer_esq', facebook_url: 'facebook.com/MercerAssociatesLaw',
    linkedin_personal: 'linkedin.com/in/angela-mercer-attorney', linkedin_company: 'linkedin.com/company/mercer-associates-law',
    corporate_phone: '+1 (212) 555-3300', industry: 'Law Firm', website_url: 'mercerassociates.law',
  },
};

function LeadField({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-700/40 hover:border-cyan-500/30 transition-all group">
      <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-0.5">{label}</div>
        <div className="text-slate-200 text-sm font-medium break-all">{value}</div>
      </div>
      <button
        onClick={() => { navigator.clipboard.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
        className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-slate-200 shrink-0"
      >
        {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
}

export default function LeadReachPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('SaaS');
  const [generating, setGenerating] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const lead = leadProfiles[selectedIndustry];

  const handleGenerate = () => {
    setRevealed(false);
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setRevealed(true);
    }, 2200);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'LeadReach 🔍',
    description: 'Automated Lead Enrichment — 12 Verified Contact Fields Per Lead',
    provider: { '@type': 'Organization', name: 'Knoxified' },
  };

  return (
    <div className="container mx-auto px-4 py-24 max-w-7xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 backdrop-blur-md border border-cyan-500/30 text-sm font-medium text-cyan-400 mb-8 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <Settings className="w-4 h-4" /> LeadReach 🔍
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 mb-6 tracking-tight leading-tight">
            Automated Lead Enrichment
          </h1>
          <p className="text-xl font-medium text-cyan-400 mb-6">
            Instantly finds and enriches any lead with 12 verified contact data fields — name, email, phone, all social handles, LinkedIn URLs, company info, and more.
          </p>
          <div className="text-lg text-slate-400 mb-8 leading-relaxed space-y-4">
            <p>
              Stop spending hours manually researching prospects. LeadReach automatically surfaces a complete, verified contact dossier for every lead — so your team walks into every outreach with the full picture.
            </p>
            <p>
              The output feeds directly into <strong className="text-slate-200">MailCraft</strong>, our companion automation that converts the enriched data into a 4-email personalized sequence — ready to send.
            </p>
          </div>

          {/* Companion banner */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 mb-8">
            <div className="text-2xl">🔗</div>
            <div className="flex-1">
              <p className="text-slate-200 text-sm font-semibold">Works with MailCraft ✍️</p>
              <p className="text-slate-400 text-xs">Use LeadReach first, then hand enriched profiles to MailCraft to draft outreach emails.</p>
            </div>
            <Link href="/automations/mailcraft" className="shrink-0 flex items-center gap-1 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors">
              View MailCraft <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <Link href="/pricing" className="inline-flex px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            Deploy LeadReach
          </Link>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="w-full aspect-square relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 overflow-hidden flex items-center justify-center shadow-2xl">
            <div className="relative w-full h-full">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/20 rounded-full animate-ping" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/10 rounded-full animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-24 h-24 bg-slate-900 rounded-2xl border border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.3)] z-10 text-5xl">
                🔍
              </div>
              {[
                { top: '10%', left: '3%', text: 'marcus.chen@nexlify.io' },
                { top: '18%', right: '3%', text: 'linkedin.com/in/marcuschen' },
                { bottom: '22%', left: '2%', text: '+1 (415) 882-3301' },
                { bottom: '12%', right: '3%', text: '@marcus_growth' },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom, animationDelay: `${i * 0.6}s` }}
                  className="absolute px-3 py-1.5 rounded-lg bg-slate-800/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono shadow-lg animate-pulse whitespace-nowrap"
                >
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Live Enrichment Playground */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4 tracking-tight">🔬 Live Enrichment Demo</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Select an industry. LeadReach will surface a fully enriched lead profile — all 12 contact fields — in seconds.
          </p>
        </div>

        {/* Industry Selector */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {industries.map((industry) => (
            <button
              key={industry}
              id={`industry-btn-${industry.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => { setSelectedIndustry(industry); setRevealed(false); }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${
                selectedIndustry === industry
                  ? 'bg-cyan-500 border-cyan-500 text-slate-900 shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  : 'bg-slate-800/60 border-slate-700/50 text-slate-300 hover:border-cyan-500/40 hover:text-slate-100'
              }`}
            >
              {industry}
            </button>
          ))}
        </div>

        <div className="flex justify-center mb-10">
          <button
            id="enrich-lead-btn"
            onClick={handleGenerate}
            disabled={generating}
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-full text-lg transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:-translate-y-0.5"
          >
            {generating ? (
              <><RefreshCw className="w-5 h-5 animate-spin" /> Enriching Lead…</>
            ) : (
              <><Zap className="w-5 h-5" /> Enrich Lead Profile</>
            )}
          </button>
        </div>

        {/* Loading */}
        {generating && (
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full border-4 border-cyan-500/30 border-t-cyan-500 animate-spin" />
              <div className="space-y-2">
                <p className="text-slate-200 font-semibold text-lg">Scanning & verifying contact data…</p>
                <p className="text-slate-400 text-sm">Pulling 12 enriched fields across public databases and social platforms</p>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden mt-2">
                <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse" style={{ width: '75%' }} />
              </div>
            </div>
          </div>
        )}

        {/* Revealed Profile */}
        {revealed && !generating && (
          <div className="max-w-3xl mx-auto">
            <div className="rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 overflow-hidden">
              <div className="p-6 border-b border-slate-700/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-slate-50 font-bold text-lg">Enriched Lead Profile</h3>
                    <p className="text-slate-400 text-xs">12 verified contact fields · {lead.industry} industry</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  ✓ Verified
                </span>
              </div>

              <div className="p-5 grid sm:grid-cols-2 gap-2.5">
                <LeadField icon={<User className="w-4 h-4" />} label="First Name" value={lead.first_name} />
                <LeadField icon={<User className="w-4 h-4" />} label="Last Name" value={lead.last_name} />
                <LeadField icon={<Building2 className="w-4 h-4" />} label="Company Name" value={lead.company_name} />
                <LeadField icon={<Briefcase className="w-4 h-4" />} label="Position" value={lead.position} />
                <LeadField icon={<Mail className="w-4 h-4" />} label="Work Email" value={lead.work_email} />
                <LeadField icon={<Phone className="w-4 h-4" />} label="Corporate Phone" value={lead.corporate_phone} />
                <LeadField icon={<Twitter className="w-4 h-4" />} label="Twitter / X Handle" value={lead.twitter_handle} />
                <LeadField icon={<Facebook className="w-4 h-4" />} label="Facebook" value={lead.facebook_url} />
                <LeadField icon={<Linkedin className="w-4 h-4" />} label="LinkedIn (Personal)" value={lead.linkedin_personal} />
                <LeadField icon={<Linkedin className="w-4 h-4" />} label="LinkedIn (Company)" value={lead.linkedin_company} />
                <LeadField icon={<Building2 className="w-4 h-4" />} label="Industry" value={lead.industry} />
                <LeadField icon={<Globe className="w-4 h-4" />} label="Website URL" value={lead.website_url} />
              </div>

              {/* Hand off to MailCraft */}
              <div className="p-5 border-t border-slate-700/50">
                <div className="flex items-center justify-between p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                  <div>
                    <p className="text-slate-200 text-sm font-semibold">✅ Lead enriched — ready for outreach</p>
                    <p className="text-slate-400 text-xs mt-0.5">Hand this profile to MailCraft to generate 4 personalized outreach emails instantly.</p>
                  </div>
                  <Link
                    href="/automations/mailcraft"
                    className="shrink-0 ml-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white text-sm font-bold rounded-lg transition-all"
                  >
                    Go to MailCraft <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* What Data It Generates */}
      <div className="mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-12 text-center tracking-tight">📋 12 Fields Enriched Per Lead</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: <User className="w-5 h-5" />, label: 'First Name', desc: "Contact's given name for personalisation" },
            { icon: <User className="w-5 h-5" />, label: 'Last Name', desc: 'Full surname for formal correspondence' },
            { icon: <Building2 className="w-5 h-5" />, label: 'Company Name', desc: 'Organisation the lead works for' },
            { icon: <Briefcase className="w-5 h-5" />, label: 'Position', desc: 'Exact job title and seniority level' },
            { icon: <Mail className="w-5 h-5" />, label: 'Work Email', desc: 'Verified professional email address' },
            { icon: <Twitter className="w-5 h-5" />, label: 'Twitter / X Handle', desc: 'Social profile for warm multi-channel outreach' },
            { icon: <Facebook className="w-5 h-5" />, label: 'Facebook Link', desc: 'Facebook profile URL for social outreach' },
            { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn Personal URL', desc: 'Direct personal profile link' },
            { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn Company URL', desc: 'Company page for org-level intelligence' },
            { icon: <Phone className="w-5 h-5" />, label: 'Corporate Phone', desc: 'Direct-dial or main office number' },
            { icon: <Building2 className="w-5 h-5" />, label: 'Industry', desc: 'Vertical used for context-aware outreach' },
            { icon: <Globe className="w-5 h-5" />, label: 'Website URL', desc: 'Company domain for personalised copy' },
          ].map((field, idx) => (
            <div key={idx} className="flex items-start gap-4 p-5 bg-slate-800/30 rounded-2xl border border-slate-700/40 hover:border-cyan-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                {field.icon}
              </div>
              <div>
                <div className="text-slate-100 font-semibold text-sm mb-0.5">{field.label}</div>
                <div className="text-slate-400 text-xs leading-relaxed">{field.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Capabilities */}
      <div className="mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-12 text-center tracking-tight">🚀 Key Capabilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Automatically sources and verifies 12 contact data points per lead with no manual input',
            'Works across every major industry — SaaS, healthcare, legal, real estate, e-commerce, and more',
            'Pulls from LinkedIn, company websites, social profiles, and public business databases',
            'Outputs a clean, structured lead dossier ready for CRM import or direct use',
            'Triggers automatically when a new lead enters your pipeline or form',
            'Feeds output directly into MailCraft for instant personalized email generation',
          ].map((feature, idx) => (
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
            LeadReach is the intelligence layer of your outreach pipeline. The moment a prospect enters your funnel — via web form, CRM, social ad, or manual entry — it begins enriching their profile across 12 data dimensions automatically.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed relative z-10">
            This removes the single most time-consuming step in outbound sales: manual research. Your reps receive a fully briefed contact card and can move straight to action — or pass it to MailCraft.
          </p>
        </div>

        <div className="p-8 md:p-12 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-slate-50 mb-6 relative z-10">📊 Why Sales Teams Love It</h3>
          <div className="space-y-6 relative z-10">
            {[
              'Eliminates 2–4 hours of daily lead research per rep',
              'Every rep walks in with the same high-quality intel',
              'Zero missed contact channels — email, phone, LinkedIn, social all captured',
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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4 tracking-tight">⚡ Deploy LeadReach</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Every new lead deserves a full contact dossier. Stop guessing, start knowing. Pair with MailCraft to close the loop on outreach.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/pricing" className="inline-flex items-center gap-2 px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-full transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:-translate-y-1 text-lg">
              Deploy LeadReach <ChevronRight className="w-5 h-5 flex-shrink-0" />
            </Link>
            <Link href="/automations/mailcraft" className="inline-flex items-center gap-2 px-10 py-5 bg-slate-700/80 hover:bg-slate-600/80 text-slate-100 font-bold rounded-full transition-all border border-slate-600/50 hover:-translate-y-1 text-lg">
              View MailCraft ✍️ <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
