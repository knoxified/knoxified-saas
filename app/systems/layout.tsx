import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Systems — Knoxified',
  description: "Explore Knoxified's AI-powered systems: inbound voice agents, outbound dialers, and virtual receptionists built for your industry.",
  alternates: {
    canonical: 'https://knoxified.org/systems',
  },
};

export default function SystemsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
