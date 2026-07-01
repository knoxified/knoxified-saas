import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing — Knoxified AI Automation Plans',
  description: 'Simple, transparent pricing for AI voice agents, lead enrichment, and outreach automation. Starter from $247/mo. No hidden fees.',
  alternates: {
    canonical: 'https://knoxified.org/pricing',
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
