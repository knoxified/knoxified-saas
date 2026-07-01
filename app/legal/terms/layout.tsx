import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions — Knoxified',
  description: 'Review Knoxified’s terms and conditions for using the platform, services, and integrations.',
  alternates: {
    canonical: 'https://knoxified.org/legal/terms',
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
