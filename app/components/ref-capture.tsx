'use client';
import { useEffect } from 'react';

// Partner program: remember which partner link (?ref=code) a visitor arrived
// through. First touch wins -- an unexpired stored code is never overwritten.
const KEY = 'kx_ref';
const TTL_MS = 90 * 24 * 60 * 60 * 1000;
const CODE_RE = /^[a-z0-9_-]{3,40}$/;

export function getStoredRef(): string | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const { code, exp } = JSON.parse(raw);
    if (typeof code === 'string' && CODE_RE.test(code) && Date.now() < exp) return code;
    localStorage.removeItem(KEY);
  } catch {
    // storage blocked or corrupted -- treat as no referral
  }
  return null;
}

export function RefCapture() {
  useEffect(() => {
    try {
      const code = new URLSearchParams(window.location.search).get('ref')?.trim().toLowerCase();
      if (!code || !CODE_RE.test(code) || getStoredRef()) return;
      localStorage.setItem(KEY, JSON.stringify({ code, exp: Date.now() + TTL_MS }));
    } catch {
      // never let attribution break a page load
    }
  }, []);
  return null;
}
