import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://knoxified.org'),
  title: 'Knoxified — AI Systems & Automation for Growing Businesses',
  description: 'Knoxified builds AI systems and automation workflows for calls, appointments, operations, and customer communication - built for growing businesses that want to scale.',
  alternates: {
    canonical: 'https://knoxified.org',
  },
  openGraph: {
    title: 'Knoxified — AI Systems & Automation for Growing Businesses',
    description: 'Knoxified builds AI systems and automation workflows for calls, appointments, operations, and customer communication - built for growing businesses that want to scale.',
    type: 'website',
    url: 'https://knoxified.org',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Knoxified' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Knoxified — AI Systems & Automation for Growing Businesses',
    description: 'Knoxified builds AI systems and automation workflows for calls, appointments, operations, and customer communication - built for growing businesses that want to scale.',
    images: ['/og-image.png'],
  },
  icons: {
  icon: '/favicon.png',
  shortcut: '/favicon.png',
  apple: '/favicon.png',
  },
};

export const viewport = {
  themeColor: '#080d1a',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
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
        <header className="sticky top-0 z-50 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <img 
                src="/logo.png" 
                alt="Knoxified Logo"
                className="w-8 h-8 object-contain opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]" 
              />
              <span className="text-xl font-bold tracking-tight text-slate-50">Knoxified</span>
            </Link>
            <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-300">
              <Link href="/systems" className="hover:text-cyan-400 transition-colors">Systems</Link>
              <Link href="/automations" className="hover:text-cyan-400 transition-colors">Automations</Link>
              <Link href="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link>
              <Link href="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link>
              <Link href="/about" className="hover:text-cyan-400 transition-colors">About</Link>
              <Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="https://dashboard.knoxified.org" className="px-5 py-2 text-sm font-medium bg-gradient-to-br from-cyan-500/20 to-blue-500/10 hover:from-cyan-500/30 hover:to-blue-500/20 text-cyan-300 hover:text-cyan-200 border border-cyan-500/30 hover:border-cyan-500/60 rounded-xl backdrop-blur-xl shadow-[0_8px_32px_0_rgba(6,182,212,0.1)] hover:shadow-[0_8px_32px_0_rgba(6,182,212,0.2)] transition-all duration-300 relative group overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-blue-400/0 group-hover:via-cyan-400/20 transition-all duration-300"></span>
                <span className="relative flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:bg-cyan-300 transition-colors"></span>
                  Dashboard
                </span>
              </a>
              <Link href="/get-started" className="px-5 py-2 text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-md transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]">
                Get Started
              </Link>
            </div>
          </div>
        </header>

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
                <a href="https://dashboard.knoxified.org" className="hover:text-cyan-400 transition-colors">Dashboard</a>
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
                <Link href="/legal/acceptable-use" className="hover:text-cyan-400 transition-colors">Acceptable Use Policy</Link>
                <Link href="/legal/refunds" className="hover:text-cyan-400 transition-colors">Refund Policy</Link>
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 mt-12 pt-12 border-t border-slate-700/50 relative z-10">
            <p className="text-sm text-slate-500 text-center">© Knoxified 2025. All rights reserved.</p>
          </div>
        </footer>
        <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
        <script src="https://mediafiles.botpress.cloud/f004f977-d4af-4da7-a5db-68ec3ecce7ca/webchat/config.js" defer></script>
      </body>
    </html>
  );
}
