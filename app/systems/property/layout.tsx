import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Voice Agent for Property Management | Knoxified",
  description: "Handle maintenance requests, after-hours calls and lease inquiries automatically with Knoxified.",
  alternates: { canonical: 'https://knoxified.org/systems/property' },
  openGraph: {
    title: "AI Voice Agent for Property Management | Knoxified",
    description: "Handle maintenance requests, after-hours calls and lease inquiries automatically with Knoxified.",
    url: 'https://knoxified.org/systems/property',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
