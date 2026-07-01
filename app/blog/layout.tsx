import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — Knoxified',
  description: 'Read insights, automation ideas, and practical guidance for growing businesses using AI systems.',
  alternates: {
    canonical: 'https://knoxified.org/blog',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
