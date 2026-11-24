'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { track } from '@/lib/track';
import { DESK_PATH } from '@/lib/desk-auth-path';

// Links worth recording as call-to-action clicks.
const CTA_RE = /^(\/get-started|\/create-account|\/pricing|\/contact)(\/|$|\?)|dashboard\.knoxified\.org/;

export function SiteTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith(DESK_PATH)) return;
    track('page_view');
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a');
      const href = a?.getAttribute('href');
      if (!a || !href || !CTA_RE.test(href)) return;
      track('cta_click', {
        href: href.replace(/^https?:\/\/[^/]+/, '').slice(0, 100) || '/',
        to_dashboard: /dashboard\.knoxified\.org/.test(href),
        label: (a.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 40),
      });
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
