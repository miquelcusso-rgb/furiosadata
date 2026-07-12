import Link from 'next/link';
import type { Metadata } from 'next';
import { Download, Sparkles } from 'lucide-react';
import { ECLIPSES, getNextEclipse } from '../../../lib/eclipses';
import { SITE_URL, PUBLISHER } from '../../../lib/sites';

// ISR daily so the answer-first block stays current.
export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Solar and lunar eclipses 2025–2035 — open dataset',
  description:
    'Curated NASA-sourced dataset of every solar and lunar eclipse from 2025 through 2035 with type, UTC time and visibility region. Free CSV and JSON downloads.',
  alternates: { canonical: '/data/eclipses-2025-2035' },
};

const fmtLong = (date: string) =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

export default function EclipsesDataPage() {
  const nextEclipse = getNextEclipse();
  const datasetLd = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Eclipses 2025–2035',
    description:
      'All solar and lunar eclipses from 2025–2035 with type, maximum eclipse UTC time and visibility region. Sourced from NASA Goddard.',
    url: `${SITE_URL}/data/eclipses-2025-2035`,
    keywords: ['eclipse', 'solar eclipse', 'lunar eclipse', 'astronomy', 'NASA'],
    creator: { '@type': 'Organization', name: PUBLISHER, url: SITE_URL },
    publisher: { '@type': 'Organization', name: PUBLISHER, url: SITE_URL },
    license: 'https://creativecommons.org/licenses/by/4.0/',
    isAccessibleForFree: true,
    distribution: [
      { '@type': 'DataDownload', encodingFormat: 'text/csv',         contentUrl: `${SITE_URL}/data/eclipses-2025-2035/eclipses.csv` },
      { '@type': 'DataDownload', encodingFormat: 'application/json', contentUrl: `${SITE_URL}/data/eclipses-2025-2035/eclipses.json` },
    ],
  };

  // Mark notable eclipses as Schema Events
  const eventLd = ECLIPSES.filter((e) => e.type.startsWith('Total Solar')).map((e) => ({
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: `${e.type} eclipse — ${e.date}`,
    startDate: `${e.date}T${e.maxTimeUTC}:00Z`,
    location: { '@type': 'Place', name: e.visibility },
    description: e.notes ?? `Total solar eclipse visible from ${e.visibility}.`,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    organizer: { '@type': 'Organization', name: PUBLISHER, url: SITE_URL },
  }));

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetLd) }} />
      {eventLd.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}
      <p className="text-sm font-mono text-orange-500">Open dataset · Astronomy</p>
      <h1 className="text-4xl font-bold tracking-tight mt-2">Eclipses 2025–2035</h1>

      {/* Answer-first block — extractable by AI Overviews / featured snippets */}
      <div className="mt-6 p-5 rounded-xl border border-orange-300/40 dark:border-orange-500/30 bg-orange-50/50 dark:bg-orange-950/30">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-orange-500 mb-1">
          <Sparkles size={12} /> Quick answer
        </div>
        <p className="text-lg">
          The next eclipse is a <strong>{nextEclipse.type}</strong> eclipse on{' '}
          <strong>{fmtLong(nextEclipse.date)}</strong> at {nextEclipse.maxTimeUTC} UTC, visible
          from {nextEclipse.visibility}.{' '}
          <Link href={`/data/eclipses/${nextEclipse.date}`} className="text-orange-500 underline">
            Details →
          </Link>
        </p>
      </div>

      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        All {ECLIPSES.length} solar and lunar eclipses between 2025 and 2035, with type, maximum
        eclipse UTC time and visibility region. Source: NASA Goddard Space Flight Center
        (eclipse.gsfc.nasa.gov).
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a href="/data/eclipses-2025-2035/eclipses.csv" className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md hover:border-orange-500">
          <Download size={16} /> CSV
        </a>
        <a href="/data/eclipses-2025-2035/eclipses.json" className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md hover:border-orange-500">
          <Download size={16} /> JSON
        </a>
      </div>

      <h2 className="text-2xl font-semibold mt-12">Related tools</h2>
      <div className="mt-3 flex flex-wrap gap-3 text-sm">
        <Link href="/tools/next-eclipse" className="px-3 py-1 border border-neutral-300 dark:border-neutral-700 rounded-md hover:border-orange-500">Next Eclipse</Link>
        <a href="https://next-eclipse.com" className="px-3 py-1 border border-neutral-300 dark:border-neutral-700 rounded-md hover:border-orange-500">Live tracker →</a>
      </div>

      <div className="mt-10 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b border-neutral-300 dark:border-neutral-700 text-left">
            <tr>
              <th className="py-2 pr-4">Date</th>
              <th className="py-2 pr-4">Type</th>
              <th className="py-2 pr-4">UTC</th>
              <th className="py-2 pr-4">Visibility</th>
            </tr>
          </thead>
          <tbody>
            {ECLIPSES.map((e) => (
              <tr key={e.date} className="border-b border-neutral-100 dark:border-neutral-900 align-top">
                <td className="py-2 pr-4 font-mono">
                  <Link href={`/data/eclipses/${e.date}`} className="text-orange-500 hover:underline">{e.date}</Link>
                </td>
                <td className="py-2 pr-4">{e.type}</td>
                <td className="py-2 pr-4 font-mono text-neutral-500">{e.maxTimeUTC}</td>
                <td className="py-2 pr-4">
                  {e.visibility}
                  {e.notes && <div className="text-xs text-neutral-500 mt-1">{e.notes}</div>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
