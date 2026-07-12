import Link from 'next/link';
import type { Metadata } from 'next';
import { SITES, SITE_URL, PUBLISHER } from '../../lib/sites';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'About — Furiosa Studio',
  description:
    'Furiosa Studio is an independent studio building small, focused web tools and open datasets: astronomy, football stats, timezones, historical data, post-production utilities.',
  alternates: { canonical: '/about' },
};

const aboutLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Furiosa Studio',
  url: `${SITE_URL}/about`,
  mainEntity: {
    '@type': 'Organization',
    name: PUBLISHER,
    url: SITE_URL,
    foundingDate: '2025',
    description:
      'Independent studio building small, focused, free web tools and open datasets.',
    sameAs: ['https://x.com/furiosadata'],
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-10 sm:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutLd) }} />
      <p className="text-xs font-mono uppercase tracking-wider text-orange-500 mb-3">About</p>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
        Small tools, built to last.
      </h1>

      <div className="mt-8 space-y-5 text-base sm:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
        <p>
          <strong>Furiosa Studio</strong> is an independent studio that builds small, focused web
          tools. Each one does a single job — telling you when the next full moon is, matching
          time zones across a remote team, tracking who leads the scoring charts in European
          football — and does it without asking for an account, an email, or your patience.
        </p>
        <p>
          The studio currently runs <strong>{SITES.length} live properties</strong> across
          astronomy, sports, productivity, research, post-production and AI media. They share one
          principle: the answer you came for should be on screen in under a second.
        </p>
        <p>
          furiosadata.com is the network&apos;s home. It hosts the{' '}
          <Link href="/data/moon-phases-2025-2030" className="text-orange-500 hover:underline">open datasets</Link>{' '}
          behind the tools — full moons, eclipses, historical epidemics, football records — free
          to download and reuse under CC BY 4.0, plus{' '}
          <Link href="/developers" className="text-orange-500 hover:underline">public JSON APIs</Link>{' '}
          with no key required.
        </p>
        <p>
          Everything is built and maintained in-house. Datasets cite their upstream sources (NASA
          Goddard for eclipses, WHO/CDC and academic literature for epidemics, official league
          records for football) and corrections are welcome — the fastest way to reach us is{' '}
          <Link href="/contact" className="text-orange-500 hover:underline">the contact page</Link>.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <h2 className="text-xl font-semibold">The network</h2>
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
          {SITES.map((s) => (
            <li key={s.slug}>
              <Link href={`/tools/${s.slug}`} className="text-orange-500 hover:underline">{s.name}</Link>
              <span className="text-neutral-500"> — {s.category}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
