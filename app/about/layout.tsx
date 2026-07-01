import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Knoxified',
  description: 'Learn how Knoxified builds AI systems and automations that help growing businesses scale without adding headcount.',
  alternates: {
    canonical: 'https://knoxified.org/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
