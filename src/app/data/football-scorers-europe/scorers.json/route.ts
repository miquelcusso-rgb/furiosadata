import { SCORERS } from '../../../../lib/scorers';

export const dynamic = 'force-static';

export function GET() {
  return Response.json(
    {
      source: 'furiosadata.com',
      license: 'CC BY 4.0',
      generated: new Date().toISOString(),
      count: SCORERS.length,
      scorers: SCORERS,
    },
    { headers: { 'cache-control': 'public, max-age=86400, s-maxage=86400', 'access-control-allow-origin': '*' } },
  );
}
