// Automations that are actually built and working today. Everything else is
// still in development and must be labelled as such on the marketing site.
// Keep in sync with the dashboard's AUTOMATION_CATALOG_KEYS (data/automations.ts).
export const LIVE_AUTOMATION_SLUGS = ['appointmate', 'leadreach', 'mailcraft', 'followflow'];

export function isLiveAutomation(href: string): boolean {
  const slug = href.split('/').filter(Boolean).pop() ?? '';
  return LIVE_AUTOMATION_SLUGS.includes(slug);
}

export function ComingSoonBadge() {
  return (
    <span className="ml-2 inline-block align-middle rounded-full border border-amber-400/40 bg-amber-400/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-400">
      Coming soon
    </span>
  );
}
