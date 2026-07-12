import Link from 'next/link';
import { ArrowRight, Database, Moon, Sparkles, Wrench } from 'lucide-react';
import { SITES } from '../lib/sites';
import { ToolCard } from '../components/ToolCard';
import { getNextFullMoon } from '../lib/moons';
import { getNextEclipse } from '../lib/eclipses';

// ISR daily: hero shows the live next-full-moon / next-eclipse dates.
export const revalidate = 86400;

const DATASETS = [
  { slug: 'moon-phases-2025-2030',   title: 'Moon phases 2025–2030',    desc: 'Every full moon with traditional names and supermoon flags.' },
  { slug: 'eclipses-2025-2035',      title: 'Eclipses 2025–2035',       desc: 'Solar and lunar eclipses sourced from NASA Goddard.' },
  { slug: 'historical-epidemics',    title: 'Historical epidemics',     desc: '21 pandemics from the Antonine Plague to COVID-19.' },
  { slug: 'football-scorers-europe', title: 'Football top scorers',     desc: 'All-time leaders across the 5 major European leagues.' },
];

export default function Home() {
  const nextMoon = getNextFullMoon();
  const nextEclipse = getNextEclipse();

  return (
    <div>
      <section className="hero-grid">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-12 sm:pt-20 pb-12 sm:pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-orange-500/10 text-orange-600 dark:text-orange-400 mb-6">
            <Sparkles size={12} /> The Data Tools Network · {SITES.length} tools live
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl">
            Small tools.<br className="hidden sm:block" />{' '}
            <span className="text-orange-500">Serious data.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
            A network of specialized web apps by <strong>Furiosa Studio</strong> across
            astronomy, sports, productivity, research and post-production —
            plus open datasets you can use anywhere. No login, no ads in your face, no fluff.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 px-5 py-3 bg-orange-500 text-white rounded-md font-medium hover:bg-orange-600 active:bg-orange-700"
            >
              Explore the {SITES.length} tools <ArrowRight size={16} />
            </Link>
            <Link
              href="/data/moon-phases-2025-2030"
              className="inline-flex items-center gap-2 px-5 py-3 border border-neutral-300 dark:border-neutral-700 rounded-md font-medium hover:border-orange-500"
            >
              Browse datasets
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl">
            <div className="p-5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-500">
                <Moon size={12} /> Next full moon
              </div>
              <p className="text-2xl font-semibold mt-1 font-mono">{nextMoon.date}</p>
              <p className="text-sm text-neutral-500">{nextMoon.name}</p>
            </div>
            <div className="p-5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-500">
                <Sparkles size={12} /> Next eclipse
              </div>
              <p className="text-2xl font-semibold mt-1 font-mono">{nextEclipse.date}</p>
              <p className="text-sm text-neutral-500 line-clamp-1">{nextEclipse.type} — {nextEclipse.visibility}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Wrench size={16} className="text-orange-500" />
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">Tools</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">The network</h2>
          </div>
          <Link href="/tools" className="hidden sm:inline text-sm text-orange-500 hover:underline">
            See all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {SITES.map((s) => <ToolCard key={s.slug} site={s} />)}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 border-t border-neutral-200 dark:border-neutral-800">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Database size={16} className="text-orange-500" />
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">Open data</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Free datasets</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 max-w-xl">
            Curated, downloadable, CC BY 4.0. Cite them, remix them, build on them.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {DATASETS.map((d) => (
            <Link
              key={d.slug}
              href={`/data/${d.slug}`}
              className="group p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-orange-500 transition bg-white dark:bg-neutral-950"
            >
              <p className="font-semibold group-hover:text-orange-500">{d.title}</p>
              <p className="text-sm text-neutral-500 mt-1">{d.desc}</p>
              <p className="text-xs font-mono text-orange-500 mt-3">CSV · JSON →</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
