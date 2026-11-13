'use client';

import { useEffect } from 'react';
import { supabase } from '@/src/lib/supabase';

// Partner referral capture: ?ref=<code> -> first-touch cookie (60 days) shared across
// *.knoxified.org, plus one visit row in partner_leads. The signup page reads the cookies.
const REF_RE = /^[a-z0-9_-]{3,40}$/;
const MAX_AGE = 60 * 60 * 24 * 60;

function getCookie(name: string): string | null {
  const hit = document.cookie.split('; ').find((c) => c.startsWith(name + '='));
  return hit ? decodeURIComponent(hit.slice(name.length + 1)) : null;
}

function setCookie(name: string, value: string) {
  const host = window.location.hostname;
  const domain = host === 'knoxified.org' || host.endsWith('.knoxified.org') ? '; domain=.knoxified.org' : '';
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${MAX_AGE}; path=/${domain}; SameSite=Lax${secure}`;
}

export function ReferralTracker() {
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const code = (params.get('ref') || '').trim().toLowerCase();
      if (!REF_RE.test(code)) return;
      if (getCookie('kx_ref')) return; // first touch wins

      let visitorId = getCookie('kx_vid');
      if (!visitorId) {
        visitorId = crypto.randomUUID();
        setCookie('kx_vid', visitorId);
      }
      setCookie('kx_ref', code);

      const utm: Record<string, string> = {};
      for (const key of ['utm_source', 'utm_medium', 'utm_campaign']) {
        const value = params.get(key);
        if (value) utm[key] = value.slice(0, 100);
      }
      supabase
        .rpc('record_partner_visit', {
          p_ref_code: code,
          p_visitor_id: visitorId,
          p_landing_path: window.location.pathname,
          p_utm: utm,
        })
        .then(() => {}, () => {});
    } catch {
      // Tracking must never affect the page.
    }
  }, []);

  return null;
}
