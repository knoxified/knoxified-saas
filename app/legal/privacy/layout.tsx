import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Knoxified',
  description: 'Read Knoxified’s privacy policy and learn how customer data is handled across the platform.',
  alternates: {
    canonical: 'https://knoxified.org/legal/privacy',
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
