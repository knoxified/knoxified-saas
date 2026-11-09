import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Booking Agent for Med Spas | Knoxified",
  description: "Fill your treatment calendar. Knoxified answers every call, books consultations and sends reminders for med spas.",
  alternates: { canonical: 'https://knoxified.org/systems/med-spa' },
  openGraph: {
    title: "AI Booking Agent for Med Spas | Knoxified",
    description: "Fill your treatment calendar. Knoxified answers every call, books consultations and sends reminders for med spas.",
    url: 'https://knoxified.org/systems/med-spa',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
