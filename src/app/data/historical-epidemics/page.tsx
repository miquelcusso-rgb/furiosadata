import Link from 'next/link';
import type { Metadata } from 'next';
import { Download } from 'lucide-react';
import { EPIDEMICS } from '../../../lib/epidemics';
import { SITE_URL, PUBLISHER } from '../../../lib/sites';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Historical epidemics dataset — from the Antonine Plague to COVID-19',
  description:
    'Timeline of 21 major epidemics and pandemics across human history, with estimated death tolls, pathogen, region and era. Free CSV and JSON downloads.',
  alternates: { canonical: '/data/historical-epidemics' },
};

const fmt = (n: number) => new Intl.NumberFormat('en-US').format(n);

export default function EpidemicsPage() {
  const datasetLd = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Historical epidemics and pandemics',
    description:
      '21 major pandemics from the Antonine Plague (165 CE) to COVID-19 with estimated low/high death tolls, pathogen, region and era.',
    url: `${SITE_URL}/data/historical-epidemics`,
    keywords: ['epidemic', 'pandemic', 'plague', 'history', 'mortality', 'epidemiology'],
    creator: { '@type': 'Organization', name: PUBLISHER, url: SITE_URL },
    publisher: { '@type': 'Organization', name: PUBLISHER, url: SITE_URL },
    license: 'https://creativecommons.org/licenses/by/4.0/',
    isAccessibleForFree: true,
    distribution: [
      { '@type': 'DataDownload', encodingFormat: 'text/csv',         contentUrl: `${SITE_URL}/data/historical-epidemics/epidemics.csv` },
      { '@type': 'DataDownload', encodingFormat: 'application/json', contentUrl: `${SITE_URL}/data/historical-epidemics/epidemics.json` },
    ],
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetLd) }} />
      <p className="text-sm font-mono text-orange-500">Open dataset · Research</p>
      <h1 className="text-4xl font-bold tracking-tight mt-2">Historical epidemics</h1>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        A curated timeline of {EPIDEMICS.length} major epidemics and pandemics from the Antonine
        Plague (165 CE) to the present. Death-toll figures are best-available estimates from WHO,
        CDC and academic sources; high and low bounds capture uncertainty in older events.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a href="/data/historical-epidemics/epidemics.csv" className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md hover:border-orange-500">
          <Download size={16} /> CSV
        </a>
        <a href="/data/historical-epidemics/epidemics.json" className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md hover:border-orange-500">
          <Download size={16} /> JSON
        </a>
      </div>

      <h2 className="text-2xl font-semibold mt-12">Related tools</h2>
      <div className="mt-3 flex flex-wrap gap-3 text-sm">
        <Link href="/tools/plagueatlas" className="px-3 py-1 border border-neutral-300 dark:border-neutral-700 rounded-md hover:border-orange-500">Plague Atlas</Link>
        <Link href="/tools/deathvault" className="px-3 py-1 border border-neutral-300 dark:border-neutral-700 rounded-md hover:border-orange-500">Death Vault</Link>
      </div>

      <div className="mt-10 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b border-neutral-300 dark:border-neutral-700 text-left">
            <tr>
              <th className="py-2 pr-4">Event</th>
              <th className="py-2 pr-4">Years</th>
              <th className="py-2 pr-4">Pathogen</th>
              <th className="py-2 pr-4">Region</th>
              <th className="py-2 pr-4 text-right">Deaths (est.)</th>
            </tr>
          </thead>
          <tbody>
            {EPIDEMICS.map((e) => (
              <tr key={e.name} className="border-b border-neutral-100 dark:border-neutral-900 align-top">
                <td className="py-2 pr-4 font-medium">{e.name}</td>
                <td className="py-2 pr-4 font-mono text-neutral-500">{e.start}{e.end ? `–${e.end}` : '–'}</td>
                <td className="py-2 pr-4">{e.pathogen}</td>
                <td className="py-2 pr-4">{e.region}</td>
                <td className="py-2 pr-4 text-right font-mono">
                  {e.deathsLow === e.deathsHigh ? fmt(e.deathsLow) : `${fmt(e.deathsLow)}–${fmt(e.deathsHigh)}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
