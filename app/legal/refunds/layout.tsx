import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy — Knoxified',
  description: 'Review Knoxified’s refund policy for subscriptions, usage-based services, and billing-related questions.',
  alternates: {
    canonical: 'https://knoxified.org/legal/refunds',
  },
};

export default function RefundsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
