import { EPIDEMICS } from '../../../../lib/epidemics';

export const dynamic = 'force-static';

export function GET() {
  return Response.json(
    {
      source: 'furiosadata.com',
      license: 'CC BY 4.0',
      generated: new Date().toISOString(),
      count: EPIDEMICS.length,
      epidemics: EPIDEMICS,
    },
    { headers: { 'cache-control': 'public, max-age=86400, s-maxage=86400', 'access-control-allow-origin': '*' } },
  );
}
