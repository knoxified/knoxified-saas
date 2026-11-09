import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing — Knoxified Voice Agent & Automation Plans',
  description: 'Simple, transparent pricing for Knoxified voice agents, workflow automation, and customer communication systems. Starter from $247/mo. No hidden fees.',
  alternates: {
    canonical: 'https://knoxified.org/pricing',
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
