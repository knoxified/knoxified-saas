import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Knoxified',
  description: 'Get in touch with Knoxified for custom AI automation deployments, support, and general inquiries.',
  alternates: {
    canonical: 'https://knoxified.org/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
