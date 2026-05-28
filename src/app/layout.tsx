import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import { SITE_URL, PUBLISHER } from '../lib/sites';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Furiosa Data — The Data Tools Network',
    template: '%s · Furiosa Data',
  },
  description:
    'Open datasets and free specialized web tools from Furiosa Studio: moon phases, eclipses, time zones, football scorers, historical epidemics and more.',
  applicationName: 'Furiosa Data',
  authors: [{ name: PUBLISHER, url: SITE_URL }],
  creator: PUBLISHER,
  publisher: PUBLISHER,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Furiosa Data',
    title: 'Furiosa Data — The Data Tools Network',
    description:
      'Free open datasets and 8 specialized web tools by Furiosa Studio.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Furiosa Data — The Data Tools Network',
    description: 'Free open datasets and 8 specialized web tools by Furiosa Studio.',
  },
  robots: { index: true, follow: true },
};

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: PUBLISHER,
  url: SITE_URL,
  description:
    'Furiosa Studio builds free specialized web tools and open datasets across astronomy, sports, productivity and research.',
  sameAs: [
    'https://top-scorers.com',
    'https://timezonematcher.com',
    'https://next-eclipse.com',
    'https://lunallena.co',
    'https://nextfullmoon.co',
    'https://plagueatlas.com',
    'https://deathvault.app',
    'https://fartrank.app',
  ],
};

const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Furiosa Data',
  url: SITE_URL,
  publisher: { '@type': 'Organization', name: PUBLISHER },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        {/* GA4 / GTM placeholder — replace G-XXXXXXXXXX once domain is live */}
        {/* <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" /> */}
      </head>
      <body className="min-h-full flex flex-col bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 font-sans">
        <header className="border-b border-neutral-200 dark:border-neutral-800">
          <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight">
              Furiosa<span className="text-orange-500">Data</span>
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/tools" className="hover:text-orange-500">Tools</Link>
              <Link href="/data/moon-phases-2025-2030" className="hover:text-orange-500">Data</Link>
              <Link href="/blog" className="hover:text-orange-500">Blog</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-16">
          <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-neutral-600 dark:text-neutral-400 flex flex-col md:flex-row justify-between gap-4">
            <div>© {new Date().getFullYear()} {PUBLISHER}. Open data, free tools.</div>
            <div className="flex gap-4">
              <Link href="/llms.txt">llms.txt</Link>
              <Link href="/sitemap.xml">sitemap</Link>
              <a href="https://furiosadata.com" className="hover:text-orange-500">furiosadata.com</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
