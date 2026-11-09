import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Receptionist for Dental Practices | Knoxified",
  description: "Stop missing patient calls. Knoxified answers 24/7, books and confirms appointments, and follows up with patients for your dental practice.",
  alternates: { canonical: 'https://knoxified.org/systems/dental' },
  openGraph: {
    title: "AI Receptionist for Dental Practices | Knoxified",
    description: "Stop missing patient calls. Knoxified answers 24/7, books and confirms appointments, and follows up with patients for your dental practice.",
    url: 'https://knoxified.org/systems/dental',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
