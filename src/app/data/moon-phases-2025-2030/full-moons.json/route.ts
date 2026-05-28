import { getFullMoons } from '../../../../lib/moons';

export const dynamic = 'force-static';

export function GET() {
  const moons = getFullMoons(2025, 2030);
  return Response.json(
    {
      source: 'furiosadata.com',
      license: 'CC BY 4.0',
      generated: new Date().toISOString(),
      count: moons.length,
      moons,
    },
    {
      headers: {
        'cache-control': 'public, max-age=86400, s-maxage=86400',
        'access-control-allow-origin': '*',
      },
    },
  );
}
