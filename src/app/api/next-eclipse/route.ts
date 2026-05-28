import { getNextEclipse, ECLIPSES } from '../../../lib/eclipses';

export const dynamic = 'force-dynamic';

export function GET() {
  const now = new Date();
  const next = getNextEclipse(now);
  const nextTotalSolar = ECLIPSES.find(
    (e) => e.type === 'Total Solar' && new Date(`${e.date}T${e.maxTimeUTC}:00Z`).getTime() > now.getTime(),
  );
  return Response.json(
    {
      source: 'furiosadata.com (NASA Goddard upstream)',
      license: 'CC BY 4.0',
      now: now.toISOString(),
      next,
      nextTotalSolar,
    },
    {
      headers: {
        'cache-control': 'public, max-age=3600, s-maxage=3600',
        'access-control-allow-origin': '*',
      },
    },
  );
}
