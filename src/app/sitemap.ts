import type { MetadataRoute } from 'next';
import { SITES, SITE_URL } from '../lib/sites';
import { BLOG_POSTS } from '../lib/blog';
import { ECLIPSES } from '../lib/eclipses';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const dataSlugs = [
    'moon-phases-2025-2030',
    'eclipses-2025-2035',
    'historical-epidemics',
    'football-scorers-europe',
  ];
  return [
    { url: `${SITE_URL}/`,     lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${SITE_URL}/tools`,   lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/blog`,    lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${SITE_URL}/contact`,    lastModified: now, changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${SITE_URL}/about`,      lastModified: now, changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${SITE_URL}/developers`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    ...ECLIPSES.map((e) => ({
      url: `${SITE_URL}/data/eclipses/${e.date}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...SITES.map((s) => ({
      url: `${SITE_URL}/tools/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...dataSlugs.map((slug) => ({
      url: `${SITE_URL}/data/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...BLOG_POSTS.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
