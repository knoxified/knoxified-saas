import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Dispatcher for Plumbing Companies | Knoxified",
  description: "24/7 emergency triage and technician scheduling for plumbers with a Knoxified voice agent that never misses a call.",
  alternates: { canonical: 'https://knoxified.org/systems/plumbing' },
  openGraph: {
    title: "AI Dispatcher for Plumbing Companies | Knoxified",
    description: "24/7 emergency triage and technician scheduling for plumbers with a Knoxified voice agent that never misses a call.",
    url: 'https://knoxified.org/systems/plumbing',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
