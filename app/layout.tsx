import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { ChatBot } from './components/chat-bot';
import { SiteHeader } from './components/site-header';
import { SiteTracker } from './components/site-tracker';
import { ReferralTracker } from './components/referral-tracker';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://knoxified.org'),
  title: 'Knoxified — AI Voice Agents & Automation for Service Businesses',
  description: 'Knoxified builds AI voice agents and workflow automations that answer calls, book appointments and follow up with leads for dental, real estate, legal, fitness and other service businesses.',
  alternates: {
    canonical: 'https://knoxified.org',
  },
  applicationName: 'Knoxified',
  openGraph: {
    siteName: 'Knoxified',
    title: 'Knoxified — AI Voice Agents & Automation for Service Businesses',
    description: 'Knoxified builds AI voice agents and workflow automations that answer calls, book appointments and follow up with leads for dental, real estate, legal, fitness and other service businesses.',
    type: 'website',
    url: 'https://knoxified.org',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Knoxified — AI Voice Agents & Automation for Service Businesses',
    description: 'Knoxified builds AI voice agents and workflow automations that answer calls, book appointments and follow up with leads for dental, real estate, legal, fitness and other service businesses.',
  },
  icons: {
  icon: '/favicon.png',
  shortcut: '/favicon.png',
  apple: '/favicon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://knoxified.org/#organization',
      name: 'Knoxified',
      url: 'https://knoxified.org',
      logo: 'https://knoxified.org/logo.png',
      email: 'support@knoxified.org',
      description: 'Knoxified builds AI voice agents and workflow automations that answer calls, book appointments and follow up with leads for dental, real estate, legal, fitness and other service businesses.',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://knoxified.org/#website',
      url: 'https://knoxified.org',
      name: 'Knoxified',
      publisher: { '@id': 'https://knoxified.org/#organization' },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://knoxified.org/#software',
      name: 'Knoxified',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: 'https://knoxified.org',
      description: 'Knoxified builds AI voice agents and workflow automations that answer calls, book appointments and follow up with leads for dental, real estate, legal, fitness and other service businesses.',
      publisher: { '@id': 'https://knoxified.org/#organization' },
    },
  ],
};

export const viewport = {
  themeColor: '#080d1a',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WGJ3T3BR');`,
          }}
        />
      </head>
      <body className={`${inter.className} bg-slate-900 text-slate-50 antialiased min-h-screen flex flex-col`} suppressHydrationWarning>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WGJ3T3BR" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <SiteHeader />

        <main className="flex-1 flex flex-col relative z-0">
          <div className="absolute top-0 left-0 right-0 h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/30 via-slate-900/10 to-transparent -z-10 pointer-events-none"></div>
          {children}
        </main>

        <footer className="border-t border-cyan-500/10 bg-slate-900 py-16 mt-20 relative overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 relative z-10">
            <div className="flex flex-col items-start gap-4 max-w-sm">
              <div className="flex items-center space-x-3">
                <img 
                  src="/logo.png" 
                  alt="Knoxified Logo" 
                  className="w-8 h-8 object-contain opacity-80" 
                />
                <span className="text-2xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">Knoxified</span>
              </div>
              <p className="text-sm text-slate-400 font-medium whitespace-pre-wrap">Automations with a Soul.</p>
              <div className="text-sm text-slate-400 mt-2">
                Contact: <a href="mailto:support@knoxified.org" className="hover:text-cyan-400 transition-colors">support@knoxified.org</a>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-10 md:gap-16">
              <div className="flex flex-col gap-3 text-sm text-slate-300">
                <h4 className="font-semibold text-white mb-2">Platform</h4>
                <Link href="/systems" className="hover:text-cyan-400 transition-colors">Systems</Link>
                <Link href="/automations" className="hover:text-cyan-400 transition-colors">Automations</Link>
                <Link href="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link>
                <a href="https://dashboard.knoxified.org" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Dashboard</a>
              </div>
              
              <div className="flex flex-col gap-3 text-sm text-slate-300">
                <h4 className="font-semibold text-white mb-2">Company</h4>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">About</Link>
                <Link href="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
              </div>
              
              <div className="flex flex-col gap-3 text-sm text-slate-300">
                <h4 className="font-semibold text-white mb-2">Legal</h4>
                <Link href="/legal/terms" className="hover:text-cyan-400 transition-colors">Terms &amp; Conditions</Link>
                <Link href="/legal/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
                <Link href="/legal/affiliate-terms" className="hover:text-cyan-400 transition-colors">Affiliate Terms</Link>
                <Link href="/legal/acceptable-use" className="hover:text-cyan-400 transition-colors">Acceptable Use Policy</Link>
                <Link href="/legal/compliance" className="hover:text-cyan-400 transition-colors">Compliance</Link>
                <Link href="/legal/ai-calling-guide" className="hover:text-cyan-400 transition-colors">AI Calling Guide</Link>
                <Link href="/legal/dpa" className="hover:text-cyan-400 transition-colors">Data Processing Agreement</Link>
                <Link href="/legal/refunds" className="hover:text-cyan-400 transition-colors">Refund Policy</Link>
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 mt-12 pt-12 border-t border-slate-700/50 relative z-10">
            <p className="text-sm text-slate-500 text-center">&copy; Knoxified 2026. All rights reserved.</p>
          </div>
        </footer>
        <ReferralTracker />
        <SiteTracker />
        <ChatBot />
      </body>
    </html>
  );
}
