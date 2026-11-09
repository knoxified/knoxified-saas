import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Customer Support Agent for E-commerce | Knoxified",
  description: "Handle order-status calls, returns and abandoned-cart follow-up with a Knoxified voice agent, without growing your support team.",
  alternates: { canonical: 'https://knoxified.org/systems/ecommerce' },
  openGraph: {
    title: "AI Customer Support Agent for E-commerce | Knoxified",
    description: "Handle order-status calls, returns and abandoned-cart follow-up with a Knoxified voice agent, without growing your support team.",
    url: 'https://knoxified.org/systems/ecommerce',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
