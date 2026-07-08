import Link from 'next/link';
import type { Site } from '../lib/sites';

type Variant = 'default' | 'compact';

export function ToolCard({ site, variant = 'default' }: { site: Site; variant?: Variant }) {
  const cardStyle = { ['--brand' as string]: site.color } as React.CSSProperties;
  return (
    <Link
      href={`/tools/${site.slug}`}
      className="tool-card block rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
      style={cardStyle}
    >
      <span className="tool-card__halo" aria-hidden="true" />
      <div className={variant === 'compact' ? 'p-4 flex items-center gap-3' : 'p-5'}>
        <div
          className={
            variant === 'compact'
              ? 'shrink-0 w-10 h-10 rounded-lg overflow-hidden ring-1 ring-black/5 dark:ring-white/10 bg-white flex items-center justify-center'
              : 'w-12 h-12 rounded-lg overflow-hidden ring-1 ring-black/5 dark:ring-white/10 bg-white flex items-center justify-center mb-4'
          }
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/logos/${site.slug}.png`}
            alt=""
            width={48}
            height={48}
            loading="lazy"
            className="w-full h-full object-contain"
          />
        </div>
        <div className={variant === 'compact' ? 'min-w-0' : ''}>
          <div className="flex items-baseline gap-2">
            <span className="font-semibold truncate">{site.name}</span>
            <span className="text-[10px] uppercase tracking-wider text-neutral-500 shrink-0">{site.category}</span>
          </div>
          <p className="text-sm text-neutral-500 mt-1 line-clamp-2">{site.tagline}</p>
        </div>
      </div>
    </Link>
  );
}
