import Link from 'next/link';
import type { Metadata } from 'next';
import { CATEGORY_ORDER, SITES, SITE_URL } from '../../lib/sites';
import { ToolCard } from '../../components/ToolCard';

export const metadata: Metadata = {
  title: 'Tools — free specialized web apps by Furiosa Studio',
  description:
    'Browse all tools in the Furiosa Studio network: timezones, full moons, eclipses, football scorers, epidemics, mortality data, post-production calculators and more.',
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
  const grouped = CATEGORY_ORDER
    .map((category) => ({ category, sites: SITES.filter((s) => s.category === category) }))
    .filter((g) => g.sites.length > 0);
  const categories = grouped.map((g) => g.category);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <p className="text-xs font-mono uppercase tracking-wider text-orange-500 mb-3">
        The network · {SITES.length} tools
      </p>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">All tools</h1>
      <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
        Every tool is independently designed for one job, free to use, and built by{' '}
        <strong>Furiosa Studio</strong>.
      </p>

      {/* Category jump-links: pure-CSS in-page anchors, no JS */}
      <div className="mt-6 flex flex-wrap gap-2 overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 pb-1">
        {categories.map((c) => (
          <a
            key={c}
            href={`#${c.replace(/\s|&/g, '-')}`}
            className="whitespace-nowrap text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-orange-500 hover:text-orange-500"
          >
            {c}
          </a>
        ))}
      </div>

      <div className="mt-10 space-y-14">
        {grouped.map(({ category, sites }) => (
          <section key={category} id={category.replace(/\s|&/g, '-')} className="scroll-mt-20">
            <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-4">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {sites.map((s) => <ToolCard key={s.slug} site={s} />)}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center">
        <p className="text-sm text-neutral-500">
          Have an idea for the next one?{' '}
          <Link href="/contact" className="text-orange-500 hover:underline">Get in touch</Link>.
        </p>
      </div>
    </div>
  );
}
