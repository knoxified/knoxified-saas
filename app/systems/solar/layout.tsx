import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Lead Qualification for Solar Companies | Knoxified",
  description: "Qualify solar leads, answer common questions and book consultations automatically with a Knoxified voice agent.",
  alternates: { canonical: 'https://knoxified.org/systems/solar' },
  openGraph: {
    title: "AI Lead Qualification for Solar Companies | Knoxified",
    description: "Qualify solar leads, answer common questions and book consultations automatically with a Knoxified voice agent.",
    url: 'https://knoxified.org/systems/solar',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
