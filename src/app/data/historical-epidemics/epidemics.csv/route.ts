import { EPIDEMICS } from '../../../../lib/epidemics';

export const dynamic = 'force-static';

export function GET() {
  const header = 'name,start,end,region,pathogen,deaths_low,deaths_high,era\n';
  const body = EPIDEMICS
    .map((e) => `"${e.name}",${e.start},${e.end ?? ''},"${e.region}","${e.pathogen}",${e.deathsLow},${e.deathsHigh},${e.era}`)
    .join('\n');
  return new Response(header + body, {
    headers: {
      'content-type': 'text/csv; charset=utf-8',
      'content-disposition': 'attachment; filename="furiosadata-epidemics.csv"',
      'cache-control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
