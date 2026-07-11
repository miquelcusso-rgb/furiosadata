import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ExternalLink, Globe } from 'lucide-react';
import { SITES, SITE_URL, PUBLISHER, DEFAULT_OG_IMAGES } from '../../../lib/sites';
import { ToolCard } from '../../../components/ToolCard';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return SITES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const site = SITES.find((s) => s.slug === slug);
  if (!site) return {};
  return {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    alternates: { canonical: `/tools/${site.slug}` },
    openGraph: {
      title: `${site.name} — ${site.tagline}`,
      description: site.description,
      url: `${SITE_URL}/tools/${site.slug}`,
      images: DEFAULT_OG_IMAGES,
    },
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const site = SITES.find((s) => s.slug === slug);
  if (!site) notFound();

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: site.lang,
    publisher: { '@type': 'Organization', name: PUBLISHER, url: SITE_URL },
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Tools', item: `${SITE_URL}/tools` },
      { '@type': 'ListItem', position: 2, name: site.name, item: `${SITE_URL}/tools/${site.slug}` },
    ],
  };

  const related = SITES.filter((s) => s.category === site.category && s.slug !== site.slug);

  const heroStyle = {
    background: `radial-gradient(ellipse 60% 80% at 50% 0%, ${site.color}22, transparent 70%)`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <section style={heroStyle}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-8 sm:pt-12 pb-10">
          <nav className="text-sm text-neutral-500 mb-6">
            <Link href="/tools" className="hover:text-orange-500">Tools</Link>
            <span className="mx-2">/</span>
            <span>{site.name}</span>
          </nav>

          <div className="flex items-start gap-4 sm:gap-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/logos/${site.slug}.png`}
              alt={`${site.name} logo`}
              width={96}
              height={96}
              className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-contain"
              style={{ filter: `drop-shadow(0 12px 32px ${site.color}55)` }}
            />
            <div className="min-w-0">
              <p className="text-xs font-mono uppercase tracking-wider" style={{ color: site.color }}>{site.category}</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-1">{site.name}</h1>
              <p className="mt-2 text-base sm:text-lg text-neutral-600 dark:text-neutral-400">{site.tagline}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={site.url}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-5 py-3 text-white rounded-md font-medium"
              style={{ backgroundColor: site.color, color: '#0a0a0a' }}
            >
              Open {site.url.replace('https://', '')} <ExternalLink size={16} />
            </a>
            <a
              href={site.url}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-4 py-3 text-sm font-mono text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
            >
              <Globe size={14} /> {site.lang}
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 pb-16">
        <p className="text-base sm:text-lg">{site.description}</p>

        <div className="mt-6 space-y-4 text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {site.details.map((d, i) => (
            <p key={i}>{d}</p>
          ))}
        </div>

        <a
          href={site.url}
          target="_blank"
          rel="noopener"
          className="mt-10 inline-flex items-center gap-2 text-sm font-mono px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 hover:border-orange-500"
        >
          Visit {site.url.replace('https://', '')} <ExternalLink size={14} />
        </a>

        {related.length > 0 && (
          <section className="mt-14 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <h2 className="text-xl font-semibold mb-4">Related {site.category.toLowerCase()} tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {related.map((r) => <ToolCard key={r.slug} site={r} variant="compact" />)}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
