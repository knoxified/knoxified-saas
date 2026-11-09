import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Front Desk for Retail Stores | Knoxified",
  description: "Answer product, stock and store-hours calls automatically with a Knoxified voice agent for retail.",
  alternates: { canonical: 'https://knoxified.org/systems/retail' },
  openGraph: {
    title: "AI Front Desk for Retail Stores | Knoxified",
    description: "Answer product, stock and store-hours calls automatically with a Knoxified voice agent for retail.",
    url: 'https://knoxified.org/systems/retail',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
