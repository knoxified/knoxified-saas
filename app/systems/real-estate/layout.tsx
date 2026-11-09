import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Voice Agent for Real Estate Teams | Knoxified",
  description: "Respond to every lead in seconds, qualify buyers and sellers, and book showings with a Knoxified voice agent.",
  alternates: { canonical: 'https://knoxified.org/systems/real-estate' },
  openGraph: {
    title: "AI Voice Agent for Real Estate Teams | Knoxified",
    description: "Respond to every lead in seconds, qualify buyers and sellers, and book showings with a Knoxified voice agent.",
    url: 'https://knoxified.org/systems/real-estate',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
