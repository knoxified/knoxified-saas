import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Lead Capture for Roofing Contractors | Knoxified",
  description: "Capture every roofing lead, qualify the job and book estimates 24/7 with a Knoxified voice agent.",
  alternates: { canonical: 'https://knoxified.org/systems/roofing' },
  openGraph: {
    title: "AI Lead Capture for Roofing Contractors | Knoxified",
    description: "Capture every roofing lead, qualify the job and book estimates 24/7 with a Knoxified voice agent.",
    url: 'https://knoxified.org/systems/roofing',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
