'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { track } from '@/lib/track';
import { DESK_PATH } from '@/lib/desk-auth-path';

// Links worth recording as call-to-action clicks.
const CTA_RE = /^(\/get-started|\/create-account|\/pricing|\/contact)(\/|$|\?)|dashboard\.knoxified\.org/;
const SECTION_SELECTOR = 'h1, h2, [data-track-section]';
const SKIP_INSIDE = 'nav, header, footer, aside, [data-no-track]';

export function SiteTracker() {
  const pathname = usePathname();

  // Page view.
  useEffect(() => {
    if (pathname.startsWith(DESK_PATH)) return;
    track('page_view');
  }, [pathname]);

  // Per-page engagement: scroll depth, which headings/sections were reached, time on page.
  useEffect(() => {
    if (pathname.startsWith(DESK_PATH)) return;
    const path = pathname; // captured: by cleanup time the URL already points at the next page

    let activeMs = 0;
    let visibleSince = document.visibilityState === 'visible' ? Date.now() : 0;
    let maxScroll = 0;
    let left = false;
    let ticking = false;
    const depthsFired = new Set<number>();
    const labelsSeen = new Set<string>();
    const observed = new WeakSet<Element>();
    const timers: number[] = [];

    const depthNow = () => {
      const total = Math.max(document.documentElement.scrollHeight, document.body?.scrollHeight ?? 0);
      return total ? Math.min(100, Math.round(((window.scrollY + window.innerHeight) / total) * 100)) : 0;
    };
    const onScroll = () => {
      const d = depthNow();
      if (d > maxScroll) maxScroll = d;
      for (const t of [25, 50, 75, 100]) {
        if (!depthsFired.has(t) && d >= (t === 100 ? 97 : t)) {
          depthsFired.add(t);
          track('scroll_depth', { depth: t }, path);
        }
      }
    };
    const onScrollThrottled = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { ticking = false; onScroll(); });
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          io.unobserve(el);
          const label = (el.getAttribute('data-track-section') || el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 50);
          if (!label || labelsSeen.has(label)) continue;
          labelsSeen.add(label);
          const idx = Array.from(document.querySelectorAll(SECTION_SELECTOR)).indexOf(el);
          track('section_view', { section: label, idx }, path);
        }
      },
      { rootMargin: '0px 0px -15% 0px', threshold: 0 }
    );
    const scan = () => {
      document.querySelectorAll(SECTION_SELECTOR).forEach((el) => {
        if (observed.has(el) || el.closest(SKIP_INSIDE)) return;
        observed.add(el);
        io.observe(el);
      });
    };

    const sendLeave = () => {
      if (left) return;
      left = true;
      const active = activeMs + (visibleSince ? Date.now() - visibleSince : 0);
      track('page_leave', { seconds: Math.min(Math.round(active / 1000), 1800), max_scroll: maxScroll }, path);
    };
    const onVisibility = () => {
      if (document.visibilityState === 'hidden') {
        if (visibleSince) { activeMs += Date.now() - visibleSince; visibleSince = 0; }
        sendLeave();
      } else if (!visibleSince) {
        visibleSince = Date.now();
      }
    };

    // Content can render a moment after the route changes, so scan twice.
    timers.push(window.setTimeout(() => { scan(); onScroll(); }, 900));
    timers.push(window.setTimeout(scan, 3000));
    window.addEventListener('scroll', onScrollThrottled, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('pagehide', sendLeave);

    return () => {
      sendLeave();
      timers.forEach((t) => window.clearTimeout(t));
      io.disconnect();
      window.removeEventListener('scroll', onScrollThrottled);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pagehide', sendLeave);
    };
  }, [pathname]);

  // Button / link clicks.
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
