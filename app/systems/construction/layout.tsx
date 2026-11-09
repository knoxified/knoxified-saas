import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Phone Agent for Construction Companies | Knoxified",
  description: "Never lose a bid to a missed call. Knoxified answers inquiries, qualifies projects and books site visits while your crew is on the job.",
  alternates: { canonical: 'https://knoxified.org/systems/construction' },
  openGraph: {
    title: "AI Phone Agent for Construction Companies | Knoxified",
    description: "Never lose a bid to a missed call. Knoxified answers inquiries, qualifies projects and books site visits while your crew is on the job.",
    url: 'https://knoxified.org/systems/construction',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
