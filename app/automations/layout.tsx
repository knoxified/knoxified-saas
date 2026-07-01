import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automations — LeadReach, AppointMate & MailCraft | Knoxified',
  description: 'Automate lead enrichment, appointment booking, and 4-email personalized outreach sequences. Deploy in minutes with no code required.',
  alternates: {
    canonical: 'https://knoxified.org/automations',
  },
};

export default function AutomationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
