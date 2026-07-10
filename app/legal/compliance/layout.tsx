import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compliance — Knoxified',
  description: 'How Knoxified supports lawful, compliant use of AI voice calling, automation, and customer communication.',
  alternates: {
    canonical: 'https://knoxified.org/legal/compliance',
  },
};

export default function ComplianceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
