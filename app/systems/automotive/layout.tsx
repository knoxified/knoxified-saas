import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Voice Agent for Car Dealerships | Knoxified",
  description: "Answer every sales and service call, book test drives and qualify leads around the clock with a Knoxified voice agent built for dealerships.",
  alternates: { canonical: 'https://knoxified.org/systems/automotive' },
  openGraph: {
    title: "AI Voice Agent for Car Dealerships | Knoxified",
    description: "Answer every sales and service call, book test drives and qualify leads around the clock with a Knoxified voice agent built for dealerships.",
    url: 'https://knoxified.org/systems/automotive',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
