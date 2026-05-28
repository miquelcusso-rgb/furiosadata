import Link from 'next/link';
import type { Metadata } from 'next';
import { SITES, SITE_URL } from '../../lib/sites';

export const metadata: Metadata = {
  title: 'Tools — 8 free specialized web apps by Furiosa Studio',
  description:
    'Browse all 8 tools in the Furiosa Studio network: timezones, full moons, eclipses, football scorers, epidemics, mortality data and more.',
  alternates: { canonical: '/tools' },
};

const itemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: SITES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.name,
    url: `${SITE_URL}/tools/${s.slug}`,
    item: { '@type': 'WebSite', name: s.name, url: s.url, description: s.description },
  })),
};

export default function ToolsIndex() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <h1 className="text-4xl font-bold tracking-tight">The 8 tools</h1>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-2xl">
        Every tool is independently designed for one job, free to use, and built by{' '}
        <strong>Furiosa Studio</strong>.
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {SITES.map((s) => (
          <Link
            key={s.slug}
            href={`/tools/${s.slug}`}
            className="p-6 rounded-md border border-neutral-200 dark:border-neutral-800 hover:border-orange-500 transition block"
          >
            <div className="flex items-baseline justify-between">
              <p className="font-semibold text-lg">{s.name}</p>
              <span className="text-xs text-neutral-500">{s.category}</span>
            </div>
            <p className="text-sm text-neutral-500 mt-1">{s.tagline}</p>
            <p className="text-sm mt-3">{s.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
