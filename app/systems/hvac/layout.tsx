import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Dispatcher for HVAC Companies | Knoxified",
  description: "24/7 call triage, emergency routing and technician scheduling for HVAC businesses with a Knoxified voice agent.",
  alternates: { canonical: 'https://knoxified.org/systems/hvac' },
  openGraph: {
    title: "AI Dispatcher for HVAC Companies | Knoxified",
    description: "24/7 call triage, emergency routing and technician scheduling for HVAC businesses with a Knoxified voice agent.",
    url: 'https://knoxified.org/systems/hvac',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
