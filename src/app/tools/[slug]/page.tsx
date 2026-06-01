import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import { SITES, SITE_URL, PUBLISHER } from '../../../lib/sites';

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
      images: [
        {
          url: `${SITE_URL}/og-default.png`,
          width: 1200,
          height: 630,
          alt: 'Furiosa Studio — The Data Tools Network',
          type: 'image/png',
        },
      ],
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

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <nav className="text-sm text-neutral-500 mb-6">
        <Link href="/tools" className="hover:text-orange-500">Tools</Link>
        <span className="mx-2">/</span>
        <span>{site.name}</span>
      </nav>
      <p className="text-sm font-mono text-orange-500">{site.category}</p>
      <h1 className="text-4xl font-bold tracking-tight mt-2">{site.name}</h1>
      <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-400">{site.tagline}</p>
      <p className="mt-6 text-base">{site.description}</p>

      <a
        href={site.url}
        target="_blank"
        rel="noopener"
        className="mt-8 inline-flex items-center gap-2 px-5 py-3 bg-orange-500 text-white rounded-md font-medium hover:bg-orange-600"
      >
        Visit {site.url.replace('https://', '')} <ExternalLink size={16} />
      </a>

      {related.length > 0 && (
        <section className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-xl font-semibold">Related {site.category.toLowerCase()} tools</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/tools/${r.slug}`}
                className="p-4 rounded-md border border-neutral-200 dark:border-neutral-800 hover:border-orange-500"
              >
                <p className="font-semibold">{r.name}</p>
                <p className="text-sm text-neutral-500">{r.tagline}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
