import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Processing Agreement — Knoxified',
  description: 'Knoxified\'s Data Processing Agreement (DPA), governing how we process personal data on behalf of our customers.',
  alternates: {
    canonical: 'https://knoxified.org/legal/dpa',
  },
};

export default function DPALayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
