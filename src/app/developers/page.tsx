import Link from 'next/link';
import type { Metadata } from 'next';
import { Code2, Database } from 'lucide-react';
import { SITE_URL, PUBLISHER } from '../../lib/sites';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Free public APIs — no key required',
  description:
    'Free JSON APIs by Furiosa Studio: next full moon and next eclipse. No API key, no rate-limit registration, CORS enabled. Plus CSV/JSON open datasets under CC BY 4.0.',
  alternates: { canonical: '/developers' },
};

const apiLd = {
  '@context': 'https://schema.org',
  '@type': 'WebAPI',
  name: 'Furiosa Data public API',
  description: 'Free JSON endpoints for the next full moon and next eclipse. No key required, CORS enabled.',
  documentation: `${SITE_URL}/developers`,
  provider: { '@type': 'Organization', name: PUBLISHER, url: SITE_URL },
  termsOfService: 'https://creativecommons.org/licenses/by/4.0/',
};

const ENDPOINTS = [
  {
    path: '/api/next-full-moon',
    what: 'The next full moon (date, UTC time, traditional name, supermoon flag, days until) plus the next 12 upcoming full moons.',
    example: `{
  "next": {
    "date": "2026-07-29",
    "iso": "2026-07-29T14:35:12.000Z",
    "name": "Buck Moon",
    "supermoon": false,
    "daysUntil": 20
  },
  "upcoming": [ ... 12 items ... ]
}`,
  },
  {
    path: '/api/next-eclipse',
    what: 'The next solar or lunar eclipse (type, date, max-eclipse UTC time, visibility region) plus the next total solar eclipse.',
    example: `{
  "next": {
    "date": "2026-08-12",
    "type": "Total Solar",
    "maxTimeUTC": "17:46",
    "visibility": "Greenland, Iceland, N Spain"
  },
  "nextTotalSolar": { ... }
}`,
  },
];

export default function DevelopersPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(apiLd) }} />
      <p className="text-xs font-mono uppercase tracking-wider text-orange-500 mb-3">Developers</p>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Free public APIs.</h1>
      <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
        JSON over HTTPS. <strong>No API key. No signup. CORS enabled.</strong> Attribution
        (CC BY 4.0) appreciated: link to furiosadata.com.
      </p>

      <div className="mt-10 space-y-10">
        {ENDPOINTS.map((ep) => (
          <section key={ep.path}>
            <div className="flex items-center gap-2">
              <Code2 size={16} className="text-orange-500 shrink-0" />
              <h2 className="font-mono font-semibold text-lg break-all">GET {ep.path}</h2>
            </div>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{ep.what}</p>
            <pre className="mt-3 p-4 rounded-lg bg-neutral-900 text-neutral-100 text-xs overflow-x-auto">
              <code>{`curl ${SITE_URL}${ep.path}`}</code>
            </pre>
            <pre className="mt-2 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 text-xs overflow-x-auto text-neutral-600 dark:text-neutral-400">
              <code>{ep.example}</code>
            </pre>
            <a
              href={ep.path}
              className="mt-2 inline-block text-sm text-orange-500 hover:underline font-mono"
            >
              Try it live →
            </a>
          </section>
        ))}
      </div>

      <section className="mt-14 pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center gap-2">
          <Database size={16} className="text-orange-500" />
          <h2 className="text-xl font-semibold">Bulk data (CSV / JSON)</h2>
        </div>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Prefer static files? Every dataset ships as CSV and JSON, licensed CC BY 4.0:
        </p>
        <ul className="mt-4 space-y-2 text-sm">
          <li><Link href="/data/moon-phases-2025-2030" className="text-orange-500 hover:underline">Full moons 2025–2030</Link> — 74 events with names and supermoon flags</li>
          <li><Link href="/data/eclipses-2025-2035" className="text-orange-500 hover:underline">Eclipses 2025–2035</Link> — 40 events, NASA-sourced</li>
          <li><Link href="/data/historical-epidemics" className="text-orange-500 hover:underline">Historical epidemics</Link> — 21 pandemics, 165 CE → today</li>
          <li><Link href="/data/football-scorers-europe" className="text-orange-500 hover:underline">Football top scorers</Link> — all-time, 5 leagues</li>
        </ul>
      </section>

      <section className="mt-14 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-sm text-neutral-500">
        <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">Fair use</h2>
        <p className="mt-2">
          Responses are cached (1h) — please don&apos;t poll more often than that. If you&apos;re
          building something on top of these, <Link href="/contact" className="text-orange-500 hover:underline">tell us</Link>:
          we love seeing what people ship, and we&apos;ll link back to interesting projects.
        </p>
      </section>
    </div>
  );
}
