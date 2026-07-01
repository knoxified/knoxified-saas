import { PhoneCall, CheckCircle2 } from 'lucide-react';

import { notFound } from 'next/navigation';
import Link from 'next/link';

export function generateStaticParams() {
  return [
    { niche: 'solar' },
    { niche: 'custom' },
    { niche: 'insurance' },
    { niche: 'retail' },
    { niche: 'healthcare' },
    { niche: 'logistics' },
    { niche: 'roofing' },
    { niche: 'hvac' },
    { niche: 'plumbing' },
    { niche: 'legal' },
    { niche: 'ecommerce' }
  ];
}

type Props = { params: Promise<{ niche: string }> };

export default async function NichePage(props: Props) {
  const params = await props.params;
  const niche = params.niche;

  const niches: Record<string, { title: string; desc: string }> = {
    'solar': { title: 'Solar Consultant', desc: 'Qualify solar leads instantly.' },
    'custom': { title: 'Custom Agent', desc: 'A custom solution tailored for your enterprise.' },
    'legal': { title: 'Legal Intake AI', desc: 'Screen inquiries, qualify cases, and book consultations instantly.' },
    'ecommerce': { title: 'E-commerce AI', desc: 'Handle WISMO inquiries, process returns, and capture abandoned carts.' }
  };

  const nicheData = niches[niche];
  if (!nicheData) return notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${nicheData.title} System`,
    description: nicheData.desc,
    provider: {
      '@type': 'Organization',
      name: 'Platform'
    }
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 backdrop-blur-md border border-cyan-500/30 text-sm font-medium text-cyan-400 mb-8 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
           Niche Integration
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-50 mb-6 tracking-tight">{nicheData.title}</h1>
        <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">{nicheData.desc}</p>
        
        <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-800/50 backdrop-blur-md border-t border-cyan-500/20 border-x border-b border-x-slate-700/50 border-b-slate-700/50 mt-12 text-left shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
          <h2 className="text-3xl font-semibold text-slate-50 mb-6 tracking-tight">Why you need this system</h2>
          <p className="text-slate-400 mb-8 text-base md:text-lg leading-relaxed">
            You&apos;ve built something valuable; this helps it run smoother. By leveraging an AI {nicheData.title.toLowerCase()}, you can guarantee rapid response times, capture leads outside of business hours, and free up your human staff for complex, high-value interactions. AI is powerful, but it handles the repetition so you can strategize.
          </p>
          <Link href="/pricing" className="inline-flex px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            Activate this System
          </Link>
        </div>
      </div>
    </div>
  );
}
