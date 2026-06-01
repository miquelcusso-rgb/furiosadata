import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BLOG_POSTS, getPost, renderBody } from '../../../lib/blog';
import { SITE_URL, PUBLISHER, SITES } from '../../../lib/sites';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [PUBLISHER],
      tags: post.tags,
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: PUBLISHER, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: PUBLISHER,
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.ico` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${post.slug}` },
    keywords: post.tags,
    inLanguage: 'en',
  };

  const related = SITES.filter((s) => post.related.includes(s.slug));

  return (
    <article className="mx-auto max-w-2xl px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <nav className="text-sm text-neutral-500 mb-6">
        <Link href="/blog" className="hover:text-orange-500">Blog</Link>
        <span className="mx-2">/</span>
        <span>{post.title}</span>
      </nav>
      <p className="text-xs font-mono text-neutral-500">{post.date} · {post.readMinutes} min read</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">{post.title}</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">{post.description}</p>
      <div
        className="article-body mt-10"
        dangerouslySetInnerHTML={{ __html: renderBody(post.body) }}
      />

      {related.length > 0 && (
        <section className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-xl font-semibold">Tools mentioned</h2>
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
    </article>
  );
}
