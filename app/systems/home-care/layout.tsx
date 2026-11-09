import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Intake Agent for Home Care Agencies | Knoxified",
  description: "Answer every family’s first call with a warm, fast Knoxified voice agent that gathers details and schedules assessments.",
  alternates: { canonical: 'https://knoxified.org/systems/home-care' },
  openGraph: {
    title: "AI Intake Agent for Home Care Agencies | Knoxified",
    description: "Answer every family’s first call with a warm, fast Knoxified voice agent that gathers details and schedules assessments.",
    url: 'https://knoxified.org/systems/home-care',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
