import Link from 'next/link';
import type { Metadata } from 'next';
import { BLOG_POSTS } from '../../lib/blog';

export const metadata: Metadata = {
  title: 'Blog — guides and analysis from Furiosa Studio',
  description:
    'Articles on astronomy tools, football statistics, timezones, epidemics and the weirder corners of the indie web.',
  alternates: { canonical: '/blog' },
};

export default function BlogIndex() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-400">
        Guides on the tools and open data we build at Furiosa Studio.
      </p>
      <ul className="mt-10 space-y-6">
        {BLOG_POSTS.map((p) => (
          <li key={p.slug} className="border-b border-neutral-200 dark:border-neutral-800 pb-6">
            <Link href={`/blog/${p.slug}`} className="block group">
              <p className="text-xs font-mono text-neutral-500">{p.date} · {p.readMinutes} min read</p>
              <h2 className="mt-1 text-2xl font-semibold group-hover:text-orange-500">{p.title}</h2>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">{p.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
