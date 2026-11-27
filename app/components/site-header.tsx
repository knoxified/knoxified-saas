'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/systems', label: 'Systems' },
  { href: '/automations', label: 'Automations' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const DASHBOARD_URL = 'https://dashboard.knoxified.org';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock page scroll while the menu is open, close on Escape
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group shrink-0">
          <img
            src="/logo.png"
            alt="Knoxified Logo"
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]"
          />
          <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-50">Knoxified</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-300">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-cyan-400 transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Dashboard button: desktop only (lives in the menu on mobile) */}
          <a
            href={DASHBOARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-block px-5 py-2 text-sm font-medium bg-gradient-to-br from-cyan-500/20 to-blue-500/10 hover:from-cyan-500/30 hover:to-blue-500/20 text-cyan-300 hover:text-cyan-200 border border-cyan-500/30 hover:border-cyan-500/60 rounded-xl backdrop-blur-xl shadow-[0_8px_32px_0_rgba(6,182,212,0.1)] hover:shadow-[0_8px_32px_0_rgba(6,182,212,0.2)] transition-all duration-300 relative group overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-blue-400/0 group-hover:via-cyan-400/20 transition-all duration-300"></span>
            <span className="relative flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:bg-cyan-300 transition-colors"></span>
              Dashboard
            </span>
          </a>

          <Link
            href="/get-started"
            className="px-3 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm font-medium whitespace-nowrap bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-md transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]"
          >
            Get Started
          </Link>

          {/* Hamburger: below lg only */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 rounded-md text-slate-200 hover:text-cyan-300 hover:bg-slate-800/60 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden absolute top-full left-0 right-0 h-[calc(100dvh-4rem)] overflow-y-auto bg-slate-900  border-t border-slate-700/50"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.href || pathname.startsWith(l.href + '/');
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`py-4 text-lg font-medium border-b border-slate-800 transition-colors ${
                    active ? 'text-cyan-400' : 'text-slate-200 hover:text-cyan-400'
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}

            <div className="flex flex-col gap-3 pt-6 pb-10">
              <Link
                href="/get-started"
                onClick={() => setOpen(false)}
                className="w-full text-center px-5 py-3 text-base font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                Get Started
              </Link>
              <a
                href={DASHBOARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-5 py-3 text-base font-medium text-cyan-300 border border-cyan-500/30 bg-cyan-500/10 rounded-md"
              >
                Dashboard
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
