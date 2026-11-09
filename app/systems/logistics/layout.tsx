import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Voice Agent for Logistics Companies | Knoxified",
  description: "Handle shipment-status calls and post-purchase questions 24/7 with a Knoxified voice agent built for logistics teams.",
  alternates: { canonical: 'https://knoxified.org/systems/logistics' },
  openGraph: {
    title: "AI Voice Agent for Logistics Companies | Knoxified",
    description: "Handle shipment-status calls and post-purchase questions 24/7 with a Knoxified voice agent built for logistics teams.",
    url: 'https://knoxified.org/systems/logistics',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
