import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Voice Assistant for Corporate Teams | Knoxified",
  description: "A 24/7 Knoxified voice assistant that handles calls, scheduling and routine requests so your team can focus on high-value work.",
  alternates: { canonical: 'https://knoxified.org/systems/corporate' },
  openGraph: {
    title: "AI Voice Assistant for Corporate Teams | Knoxified",
    description: "A 24/7 Knoxified voice assistant that handles calls, scheduling and routine requests so your team can focus on high-value work.",
    url: 'https://knoxified.org/systems/corporate',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
