import { getNextFullMoon, getFullMoons } from '../../../lib/moons';

export const dynamic = 'force-dynamic';

export function GET() {
  const now = new Date();
  const next = getNextFullMoon(now);
  const upcoming = getFullMoons(now.getUTCFullYear(), now.getUTCFullYear() + 1)
    .filter((m) => new Date(m.iso).getTime() > now.getTime())
    .slice(0, 12);
  const msUntil = new Date(next.iso).getTime() - now.getTime();
  return Response.json(
    {
      source: 'furiosadata.com',
      license: 'CC BY 4.0',
      now: now.toISOString(),
      next: { ...next, daysUntil: Math.round(msUntil / 86_400_000), millisecondsUntil: msUntil },
      upcoming,
    },
    {
      headers: {
        'cache-control': 'public, max-age=3600, s-maxage=3600',
        'access-control-allow-origin': '*',
      },
    },
  );
}
