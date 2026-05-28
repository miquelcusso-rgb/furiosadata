import type { MetadataRoute } from 'next';
import { SITE_URL } from '../lib/sites';

export default function robots(): MetadataRoute.Robots {
  // Allow all crawlers including AI bots (GPTBot, ClaudeBot, PerplexityBot,
  // Google-Extended, CCBot). Per sites-system rule 16 (GEO-friendly).
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: '/api/private/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
