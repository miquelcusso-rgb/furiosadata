import { ECLIPSES } from '../../../../lib/eclipses';

export const dynamic = 'force-static';

export function GET() {
  return Response.json(
    {
      source: 'furiosadata.com (NASA Goddard upstream)',
      license: 'CC BY 4.0',
      generated: new Date().toISOString(),
      count: ECLIPSES.length,
      eclipses: ECLIPSES,
    },
    { headers: { 'cache-control': 'public, max-age=86400, s-maxage=86400', 'access-control-allow-origin': '*' } },
  );
}
