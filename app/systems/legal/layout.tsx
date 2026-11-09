import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Legal Intake for Law Firms | Knoxified",
  description: "Screen inquiries, qualify cases and book consultations automatically. Knoxified answers every call to your firm, day or night.",
  alternates: { canonical: 'https://knoxified.org/systems/legal' },
  openGraph: {
    title: "AI Legal Intake for Law Firms | Knoxified",
    description: "Screen inquiries, qualify cases and book consultations automatically. Knoxified answers every call to your firm, day or night.",
    url: 'https://knoxified.org/systems/legal',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
