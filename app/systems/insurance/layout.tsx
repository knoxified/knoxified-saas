import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Voice Agent for Insurance Agencies | Knoxified",
  description: "Automate client calls, quote requests and policy questions around the clock with a Knoxified voice agent.",
  alternates: { canonical: 'https://knoxified.org/systems/insurance' },
  openGraph: {
    title: "AI Voice Agent for Insurance Agencies | Knoxified",
    description: "Automate client calls, quote requests and policy questions around the clock with a Knoxified voice agent.",
    url: 'https://knoxified.org/systems/insurance',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
