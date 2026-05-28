import Link from 'next/link';
import { ArrowRight, Database, Wrench } from 'lucide-react';
import { SITES } from '../lib/sites';
import { getNextFullMoon } from '../lib/moons';
import { getNextEclipse } from '../lib/eclipses';

export const dynamic = 'force-static';

const DATASETS = [
  { slug: 'moon-phases-2025-2030',  title: 'Moon phases 2025–2030',     desc: 'Every full moon with traditional names and supermoon flags.' },
  { slug: 'eclipses-2025-2035',     title: 'Eclipses 2025–2035',        desc: 'Solar and lunar eclipses sourced from NASA Goddard.' },
  { slug: 'historical-epidemics',   title: 'Historical epidemics',      desc: '21 pandemics from the Antonine Plague to COVID-19.' },
  { slug: 'football-scorers-europe',title: 'Football top scorers',      desc: 'All-time leaders across the 5 major European leagues.' },
];

export default function Home() {
  const nextMoon = getNextFullMoon();
  const nextEclipse = getNextEclipse();

  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <p className="text-sm font-mono text-orange-500 mb-4">The Data Tools Network</p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
          Open datasets and free web tools by{' '}
          <span className="text-orange-500">Furiosa Studio</span>.
        </h1>
        <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Eight specialized tools across astronomy, sports, productivity and research — plus
          downloadable datasets you can use anywhere. No login, no ads in your face, no fluff.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-5 py-3 bg-orange-500 text-white rounded-md font-medium hover:bg-orange-600"
          >
            Explore the 8 tools <ArrowRight size={16} />
          </Link>
          <Link
            href="/data/moon-phases-2025-2030"
            className="inline-flex items-center gap-2 px-5 py-3 border border-neutral-300 dark:border-neutral-700 rounded-md font-medium hover:border-orange-500"
          >
            Browse datasets
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
            <p className="text-xs uppercase tracking-wider text-neutral-500">Next full moon</p>
            <p className="text-2xl font-semibold mt-1">{nextMoon.date}</p>
            <p className="text-sm text-neutral-500">{nextMoon.name}</p>
          </div>
          <div className="p-5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
            <p className="text-xs uppercase tracking-wider text-neutral-500">Next eclipse</p>
            <p className="text-2xl font-semibold mt-1">{nextEclipse.date}</p>
            <p className="text-sm text-neutral-500">{nextEclipse.type} — {nextEclipse.visibility}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center gap-2 mb-6">
          <Wrench size={18} className="text-orange-500" />
          <h2 className="text-2xl font-bold">The 8 tools</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SITES.map((s) => (
            <Link
              key={s.slug}
              href={`/tools/${s.slug}`}
              className="p-5 rounded-md border border-neutral-200 dark:border-neutral-800 hover:border-orange-500 transition"
            >
              <p className="text-xs uppercase tracking-wider text-neutral-500">{s.category}</p>
              <p className="font-semibold mt-1">{s.name}</p>
              <p className="text-sm text-neutral-500 mt-1 line-clamp-2">{s.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center gap-2 mb-6">
          <Database size={18} className="text-orange-500" />
          <h2 className="text-2xl font-bold">Open datasets</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DATASETS.map((d) => (
            <Link
              key={d.slug}
              href={`/data/${d.slug}`}
              className="p-5 rounded-md border border-neutral-200 dark:border-neutral-800 hover:border-orange-500 transition"
            >
              <p className="font-semibold">{d.title}</p>
              <p className="text-sm text-neutral-500 mt-1">{d.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
