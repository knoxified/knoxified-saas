import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Your Account — Knoxified',
  description: 'Join Knoxified and deploy your first AI automation in minutes.',
  alternates: {
    canonical: 'https://knoxified.org/create-account',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function CreateAccountLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
