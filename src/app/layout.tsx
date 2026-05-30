import type { Metadata } from 'next';
import Script from 'next/script';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import { SITE_URL, PUBLISHER } from '../lib/sites';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Furiosa Data — The Data Tools Network',
    template: '%s · Furiosa Data',
  },
  description:
    'Open datasets and free specialized web tools from Furiosa Studio: moon phases, eclipses, time zones, football scorers, historical epidemics, post-production calculators and more.',
  applicationName: 'Furiosa Data',
  authors: [{ name: PUBLISHER, url: SITE_URL }],
  creator: PUBLISHER,
  publisher: PUBLISHER,
  // canonical NO en metadata — Next.js 15 stripea el trailing slash del root.
  // Se inyecta a mano en <head> debajo para preservar https://furiosadata.com/
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Furiosa Data',
    title: 'Furiosa Data — The Data Tools Network',
    description:
      'Free open datasets and a growing network of specialized web tools by Furiosa Studio.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@furiosadata',
    creator: '@furiosadata',
    title: 'Furiosa Data — The Data Tools Network',
    description: 'Free open datasets and a growing network of specialized web tools by Furiosa Studio.',
    images: [
      {
        url: 'https://furiosadata.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Furiosa Studio — The Data Tools Network',
      },
    ],
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
    'https://x.com/furiosadata',
    'https://top-scorers.com',
    'https://timezonematcher.com',
    'https://next-eclipse.com',
    'https://lunallena.co',
    'https://nextfullmoon.co',
    'https://plagueatlas.com',
    'https://deathvault.app',
    'https://postmicrotools.com',
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
        <link rel="canonical" href="https://furiosadata.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        {GTM_ID && (
          <Script id="gtm-init" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
      </head>
      <body className="min-h-full flex flex-col bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 font-sans">
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
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
            <div className="flex gap-4 items-center">
              <a
                href="https://x.com/furiosadata"
                target="_blank"
                rel="me noopener"
                className="inline-flex items-center gap-1.5 hover:text-orange-500"
                aria-label="Follow @furiosadata on X"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  aria-hidden="true"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>@furiosadata</span>
              </a>
              <Link href="/llms.txt">llms.txt</Link>
              <Link href="/sitemap.xml">sitemap</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
