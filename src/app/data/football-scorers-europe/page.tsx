import Link from 'next/link';
import type { Metadata } from 'next';
import { Download } from 'lucide-react';
import { SCORERS } from '../../../lib/scorers';
import { SITE_URL, PUBLISHER } from '../../../lib/sites';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Top scorers — 5 major European football leagues (all-time)',
  description:
    'Open dataset of all-time top scorers across the Premier League, La Liga, Serie A, Bundesliga and Ligue 1. Free CSV and JSON downloads.',
  alternates: { canonical: '/data/football-scorers-europe' },
};

export default function ScorersPage() {
  const datasetLd = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Top scorers — 5 major European leagues',
    description:
      'All-time top scorers in the Premier League, La Liga, Serie A, Bundesliga and Ligue 1.',
    url: `${SITE_URL}/data/football-scorers-europe`,
    keywords: ['football', 'soccer', 'top scorers', 'goalscorers', 'Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1'],
    creator: { '@type': 'Organization', name: PUBLISHER, url: SITE_URL },
    publisher: { '@type': 'Organization', name: PUBLISHER, url: SITE_URL },
    license: 'https://creativecommons.org/licenses/by/4.0/',
    isAccessibleForFree: true,
    distribution: [
      { '@type': 'DataDownload', encodingFormat: 'text/csv',         contentUrl: `${SITE_URL}/data/football-scorers-europe/scorers.csv` },
      { '@type': 'DataDownload', encodingFormat: 'application/json', contentUrl: `${SITE_URL}/data/football-scorers-europe/scorers.json` },
    ],
  };

  const leagues = Array.from(new Set(SCORERS.map((s) => s.league)));

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetLd) }} />
      <p className="text-sm font-mono text-orange-500">Open dataset · Sports</p>
      <h1 className="text-4xl font-bold tracking-tight mt-2">Top scorers — 5 major European leagues</h1>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        All-time top scorers in each of the five major European leagues. Premier League figures
        cover the post-1992 era. Sources: official league records and RSSSF archives.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a href="/data/football-scorers-europe/scorers.csv" className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md hover:border-orange-500">
          <Download size={16} /> CSV
        </a>
        <a href="/data/football-scorers-europe/scorers.json" className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md hover:border-orange-500">
          <Download size={16} /> JSON
        </a>
      </div>

      <h2 className="text-2xl font-semibold mt-12">Related tools</h2>
      <div className="mt-3 flex flex-wrap gap-3 text-sm">
        <Link href="/tools/top-scorers" className="px-3 py-1 border border-neutral-300 dark:border-neutral-700 rounded-md hover:border-orange-500">Top Scorers</Link>
        <a href="https://top-scorers.com" className="px-3 py-1 border border-neutral-300 dark:border-neutral-700 rounded-md hover:border-orange-500">Live league rankings →</a>
      </div>

      {leagues.map((league) => (
        <section key={league} className="mt-10">
          <h2 className="text-xl font-semibold">{league}</h2>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-neutral-300 dark:border-neutral-700 text-left">
                <tr>
                  <th className="py-2 pr-4 w-10">#</th>
                  <th className="py-2 pr-4">Player</th>
                  <th className="py-2 pr-4">Nation</th>
                  <th className="py-2 pr-4">Span</th>
                  <th className="py-2 pr-4 text-right">Goals</th>
                </tr>
              </thead>
              <tbody>
                {SCORERS.filter((s) => s.league === league).map((s) => (
                  <tr key={`${league}-${s.player}`} className="border-b border-neutral-100 dark:border-neutral-900">
                    <td className="py-2 pr-4 font-mono text-neutral-500">{s.rank}</td>
                    <td className="py-2 pr-4 font-medium">{s.player}</td>
                    <td className="py-2 pr-4">{s.nationality}</td>
                    <td className="py-2 pr-4 font-mono text-neutral-500">{s.span}</td>
                    <td className="py-2 pr-4 text-right font-mono">{s.goals}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  );
}
