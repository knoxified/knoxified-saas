import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Candidate Engagement for Recruiters | Knoxified",
  description: "Screen candidates, schedule interviews and keep talent warm with a Knoxified voice agent for recruitment teams.",
  alternates: { canonical: 'https://knoxified.org/systems/recruitment' },
  openGraph: {
    title: "AI Candidate Engagement for Recruiters | Knoxified",
    description: "Screen candidates, schedule interviews and keep talent warm with a Knoxified voice agent for recruitment teams.",
    url: 'https://knoxified.org/systems/recruitment',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
