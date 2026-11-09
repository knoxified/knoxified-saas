import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Patient Intake for Medical Practices | Knoxified",
  description: "Knoxified answers patient calls 24/7, handles intake and scheduling, and routes urgent cases to your staff.",
  alternates: { canonical: 'https://knoxified.org/systems/healthcare' },
  openGraph: {
    title: "AI Patient Intake for Medical Practices | Knoxified",
    description: "Knoxified answers patient calls 24/7, handles intake and scheduling, and routes urgent cases to your staff.",
    url: 'https://knoxified.org/systems/healthcare',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
