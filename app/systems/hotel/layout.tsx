import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Hotel Receptionist | Knoxified",
  description: "A Knoxified voice agent that answers guest calls, handles reservations and requests, and hands off to staff when it matters.",
  alternates: { canonical: 'https://knoxified.org/systems/hotel' },
  openGraph: {
    title: "AI Hotel Receptionist | Knoxified",
    description: "A Knoxified voice agent that answers guest calls, handles reservations and requests, and hands off to staff when it matters.",
    url: 'https://knoxified.org/systems/hotel',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
