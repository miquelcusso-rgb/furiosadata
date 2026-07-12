import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { ECLIPSES } from '../../../../lib/eclipses';
import { SITE_URL, PUBLISHER, DEFAULT_OG_IMAGES } from '../../../../lib/sites';

// ISR daily so "in N days" and past/upcoming state stay correct.
export const revalidate = 86400;

export function generateStaticParams() {
  return ECLIPSES.map((e) => ({ date: e.date }));
}

const fmtLong = (date: string) =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ date: string }>;
}): Promise<Metadata> {
  const { date } = await params;
  const e = ECLIPSES.find((x) => x.date === date);
  if (!e) return {};
  const title = `${e.type} eclipse — ${fmtLong(e.date)}`;
  const description = `${e.type} eclipse on ${fmtLong(e.date)} at ${e.maxTimeUTC} UTC, visible from ${e.visibility}.${e.notes ? ` ${e.notes}.` : ''} Exact time, visibility and context.`;
  return {
    title,
    description,
    alternates: { canonical: `/data/eclipses/${e.date}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/data/eclipses/${e.date}`,
      images: DEFAULT_OG_IMAGES,
    },
  };
}

export default async function EclipsePage({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;
  const idx = ECLIPSES.findIndex((x) => x.date === date);
  if (idx === -1) notFound();
  const e = ECLIPSES[idx];
  const prev = ECLIPSES[idx - 1];
  const next = ECLIPSES[idx + 1];

  const when = new Date(`${e.date}T${e.maxTimeUTC}:00Z`);
  const now = new Date();
  const daysDiff = Math.ceil((when.getTime() - now.getTime()) / 86_400_000);
  const isPast = when.getTime() < now.getTime();
  const isSolar = e.type.includes('Solar');

  const eventLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: `${e.type} eclipse — ${fmtLong(e.date)}`,
    startDate: when.toISOString(),
    description: `${e.type} eclipse visible from ${e.visibility}.${e.notes ? ` ${e.notes}.` : ''}`,
    location: { '@type': 'Place', name: e.visibility },
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    organizer: { '@type': 'Organization', name: PUBLISHER, url: SITE_URL },
    isAccessibleForFree: true,
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Eclipses 2025–2035', item: `${SITE_URL}/data/eclipses-2025-2035` },
      { '@type': 'ListItem', position: 2, name: fmtLong(e.date), item: `${SITE_URL}/data/eclipses/${e.date}` },
    ],
  };

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="text-sm text-neutral-500 mb-6">
        <Link href="/data/eclipses-2025-2035" className="hover:text-orange-500">Eclipses 2025–2035</Link>
        <span className="mx-2">/</span>
        <span>{e.date}</span>
      </nav>

      <p className="text-xs font-mono uppercase tracking-wider text-orange-500">
        {isSolar ? 'Solar eclipse' : 'Lunar eclipse'} · {e.date.slice(0, 4)}
      </p>
      <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mt-2">
        {e.type} eclipse<br className="hidden sm:block" /> on {fmtLong(e.date)}
      </h1>

      {/* Answer-first summary — self-contained, extractable */}
      <div className="mt-6 p-5 rounded-xl border border-orange-300/40 dark:border-orange-500/30 bg-orange-50/50 dark:bg-orange-950/30">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-orange-500 mb-1">
          <Sparkles size={12} /> Quick answer
        </div>
        <p className="text-lg">
          A <strong>{e.type.toLowerCase()} eclipse</strong> {isPast ? 'took place' : 'will take place'} on{' '}
          <strong>{fmtLong(e.date)}</strong>, with maximum eclipse at{' '}
          <strong>{e.maxTimeUTC} UTC</strong>. It {isPast ? 'was' : 'will be'} visible from{' '}
          <strong>{e.visibility}</strong>
          {!isPast && daysDiff >= 0 && (
            <> — {daysDiff === 0 ? 'today' : daysDiff === 1 ? 'tomorrow' : `in ${daysDiff} days`}</>
          )}.
        </p>
      </div>

      {e.notes && (
        <p className="mt-5 text-base text-neutral-700 dark:text-neutral-300">{e.notes}.</p>
      )}

      <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <dt className="text-xs uppercase tracking-wider text-neutral-500">Type</dt>
          <dd className="font-semibold mt-1">{e.type}</dd>
        </div>
        <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <dt className="text-xs uppercase tracking-wider text-neutral-500">Date</dt>
          <dd className="font-semibold mt-1 font-mono">{e.date}</dd>
        </div>
        <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <dt className="text-xs uppercase tracking-wider text-neutral-500">Max (UTC)</dt>
          <dd className="font-semibold mt-1 font-mono">{e.maxTimeUTC}</dd>
        </div>
        <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <dt className="text-xs uppercase tracking-wider text-neutral-500">Status</dt>
          <dd className="font-semibold mt-1">{isPast ? 'Past' : 'Upcoming'}</dd>
        </div>
      </dl>

      <div className="mt-8 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
        <p className="text-xs uppercase tracking-wider text-neutral-500">Visibility</p>
        <p className="mt-1">{e.visibility}</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="https://next-eclipse.com"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 px-5 py-3 bg-orange-500 text-white rounded-md font-medium hover:bg-orange-600"
        >
          Track it live on next-eclipse.com <ExternalLink size={16} />
        </a>
        <Link
          href="/data/eclipses-2025-2035"
          className="inline-flex items-center gap-2 px-5 py-3 border border-neutral-300 dark:border-neutral-700 rounded-md font-medium hover:border-orange-500"
        >
          Full dataset (CSV/JSON)
        </Link>
      </div>

      <p className="mt-8 text-xs text-neutral-500">
        Source: NASA Goddard Space Flight Center (eclipse.gsfc.nasa.gov). Data licensed CC BY 4.0
        by Furiosa Studio.
      </p>

      <nav className="mt-10 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex justify-between text-sm">
        {prev ? (
          <Link href={`/data/eclipses/${prev.date}`} className="inline-flex items-center gap-1 text-orange-500 hover:underline">
            <ArrowLeft size={14} /> {prev.date} · {prev.type}
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`/data/eclipses/${next.date}`} className="inline-flex items-center gap-1 text-orange-500 hover:underline text-right">
            {next.date} · {next.type} <ArrowRight size={14} />
          </Link>
        ) : <span />}
      </nav>
    </div>
  );
}
