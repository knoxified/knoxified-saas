import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Started — Knoxified',
  description: "Answer 3 quick questions and we'll configure your AI system. Takes less than 60 seconds.",
  alternates: {
    canonical: 'https://knoxified.org/get-started',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function GetStartedLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
