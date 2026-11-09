import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Reservation Agent for Restaurants | Knoxified",
  description: "Stop missing reservations during the rush. Knoxified answers calls, books tables and handles common questions.",
  alternates: { canonical: 'https://knoxified.org/systems/restaurant' },
  openGraph: {
    title: "AI Reservation Agent for Restaurants | Knoxified",
    description: "Stop missing reservations during the rush. Knoxified answers calls, books tables and handles common questions.",
    url: 'https://knoxified.org/systems/restaurant',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
