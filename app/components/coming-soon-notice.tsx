'use client';

import { usePathname } from 'next/navigation';
import { LIVE_AUTOMATION_SLUGS } from './automation-status';

// Shown at the top of any individual automation page that isn't live yet.
export function ComingSoonNotice() {
  const pathname = usePathname() || '';
  const parts = pathname.split('/').filter(Boolean); // ['automations', slug]
  if (parts.length !== 2 || parts[0] !== 'automations') return null;
  if (LIVE_AUTOMATION_SLUGS.includes(parts[1])) return null;
  return (
    <div className="mx-auto max-w-4xl px-6 pt-24">
      <div className="rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-sm text-amber-200">
        <strong>Coming soon.</strong> This automation is still in development and isn&apos;t available to activate yet.
        The description below is what we&apos;re building toward.
      </div>
    </div>
  );
}
