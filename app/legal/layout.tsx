import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal — Knoxified',
  description: 'View Knoxified legal information, privacy policy, terms, and refund policy.',
  alternates: {
    canonical: 'https://knoxified.org/legal',
  },
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
