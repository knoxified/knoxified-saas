import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Calling Guide — Knoxified',
  description: 'Practical guidance for customers using Knoxified Voice Agents for outbound calling, including consent, disclosure, and suppression list best practices.',
  alternates: {
    canonical: 'https://knoxified.org/legal/ai-calling-guide',
  },
};

export default function AICallingGuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
