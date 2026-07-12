import Link from 'next/link';
import type { Metadata } from 'next';
import { Download, Moon } from 'lucide-react';
import { getFullMoons, getNextFullMoon } from '../../../lib/moons';
import { SITE_URL, PUBLISHER } from '../../../lib/sites';

// ISR daily: the answer-first block below must never go stale.
export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Moon phases 2025–2030 — full moon calendar with dates and names',
  description:
    'Open dataset of every full moon from 2025 to 2030 with UTC time, traditional name and supermoon flag. Free CSV and JSON downloads.',
  alternates: { canonical: '/data/moon-phases-2025-2030' },
};

const fmtLong = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

export default function MoonDataPage() {
  const moons = getFullMoons(2025, 2030);
  const now = new Date();
  const next = getNextFullMoon(now);
  const daysUntil = Math.ceil((new Date(next.iso).getTime() - now.getTime()) / 86_400_000);
  const datasetLd = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Full moons 2025–2030',
    description:
      'Calculated full moon dates from 2025 through 2030 with UTC times, traditional moon names and supermoon flags.',
    url: `${SITE_URL}/data/moon-phases-2025-2030`,
    keywords: ['full moon', 'moon calendar', 'lunar', 'astronomy', 'supermoon'],
    creator: { '@type': 'Organization', name: PUBLISHER, url: SITE_URL },
    publisher: { '@type': 'Organization', name: PUBLISHER, url: SITE_URL },
    license: 'https://creativecommons.org/licenses/by/4.0/',
    isAccessibleForFree: true,
    distribution: [
      {
        '@type': 'DataDownload',
        encodingFormat: 'text/csv',
        contentUrl: `${SITE_URL}/data/moon-phases-2025-2030/full-moons.csv`,
      },
      {
        '@type': 'DataDownload',
        encodingFormat: 'application/json',
        contentUrl: `${SITE_URL}/data/moon-phases-2025-2030/full-moons.json`,
      },
    ],
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetLd) }}
      />
      <p className="text-sm font-mono text-orange-500">Open dataset · Astronomy</p>
      <h1 className="text-4xl font-bold tracking-tight mt-2">Moon phases 2025–2030</h1>

      {/* Answer-first: the sentence AI Overviews / featured snippets extract */}
      <div className="mt-6 p-5 rounded-xl border border-indigo-300/40 dark:border-indigo-500/30 bg-indigo-50/50 dark:bg-indigo-950/30">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-indigo-500 mb-1">
          <Moon size={12} /> Quick answer
        </div>
        <p className="text-lg">
          The next full moon is on <strong>{fmtLong(next.iso)}</strong> — the{' '}
          <strong>{next.name}</strong>
          {next.supermoon ? ' (a supermoon)' : ''}, {daysUntil === 0 ? 'today' : daysUntil === 1 ? 'tomorrow' : `in ${daysUntil} days`},
          at {next.iso.slice(11, 16)} UTC.
        </p>
      </div>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        Every full moon between January 2025 and December 2030 — {moons.length} events total. UTC
        times are computed from the mean synodic month (29.53059 days) starting from the reference
        full moon of 21 January 2000 04:41 UTC. Supermoon flags are cross-referenced with NASA and
        TimeAndDate.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="/data/moon-phases-2025-2030/full-moons.csv"
          className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md hover:border-orange-500"
        >
          <Download size={16} /> CSV
        </a>
        <a
          href="/data/moon-phases-2025-2030/full-moons.json"
          className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md hover:border-orange-500"
        >
          <Download size={16} /> JSON
        </a>
      </div>

      <h2 className="text-2xl font-semibold mt-12">Related tools</h2>
      <div className="mt-3 flex flex-wrap gap-3 text-sm">
        <Link href="/tools/lunallena" className="px-3 py-1 border border-neutral-300 dark:border-neutral-700 rounded-md hover:border-orange-500">Luna Llena</Link>
        <Link href="/tools/nextfullmoon" className="px-3 py-1 border border-neutral-300 dark:border-neutral-700 rounded-md hover:border-orange-500">Next Full Moon</Link>
        <a href="https://nextfullmoon.co" className="px-3 py-1 border border-neutral-300 dark:border-neutral-700 rounded-md hover:border-orange-500">Live countdown →</a>
      </div>

      <div className="mt-10 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b border-neutral-300 dark:border-neutral-700 text-left">
            <tr>
              <th className="py-2 pr-4">Date</th>
              <th className="py-2 pr-4">UTC time</th>
              <th className="py-2 pr-4">Name</th>
              <th className="py-2 pr-4">Supermoon</th>
            </tr>
          </thead>
          <tbody>
            {moons.map((m) => (
              <tr key={m.iso} className="border-b border-neutral-100 dark:border-neutral-900">
                <td className="py-2 pr-4 font-mono">{m.date}</td>
                <td className="py-2 pr-4 font-mono text-neutral-500">{m.iso.slice(11, 16)}</td>
                <td className="py-2 pr-4">{m.name}</td>
                <td className="py-2 pr-4">{m.supermoon ? '★' : ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
