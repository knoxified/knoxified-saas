import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Receptionist for Gyms & Fitness Studios | Knoxified",
  description: "Turn membership inquiries into booked tours and trials. Knoxified answers every call and follows up with leads for gyms and studios.",
  alternates: { canonical: 'https://knoxified.org/systems/fitness' },
  openGraph: {
    title: "AI Receptionist for Gyms & Fitness Studios | Knoxified",
    description: "Turn membership inquiries into booked tours and trials. Knoxified answers every call and follows up with leads for gyms and studios.",
    url: 'https://knoxified.org/systems/fitness',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
