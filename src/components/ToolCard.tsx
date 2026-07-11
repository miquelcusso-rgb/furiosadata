import Link from 'next/link';
import type { Site } from '../lib/sites';

type Variant = 'default' | 'compact';

export function ToolCard({ site, variant = 'default' }: { site: Site; variant?: Variant }) {
  const cardStyle = { ['--brand' as string]: site.color } as React.CSSProperties;
  const logoSize = variant === 'compact' ? 'w-12 h-12' : 'w-16 h-16 sm:w-[72px] sm:h-[72px]';
  return (
    <Link
      href={`/tools/${site.slug}`}
      className="tool-card block rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
      style={cardStyle}
    >
      <span className="tool-card__halo" aria-hidden="true" />
      <div className={variant === 'compact' ? 'p-4 flex items-center gap-3' : 'p-5 flex items-center gap-4'}>
        {/* No background behind the icon — the PNGs carry their own rounded
            shape, a solid bg bleeds through their transparent corners. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/logos/${site.slug}.png`}
          alt=""
          width={72}
          height={72}
          loading="lazy"
          className={`${logoSize} shrink-0 rounded-2xl object-contain`}
          style={{ filter: `drop-shadow(0 4px 14px ${site.color}44)` }}
        />
        <div className="min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className={variant === 'compact' ? 'font-semibold truncate' : 'font-semibold text-lg truncate'}>
              {site.name}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-neutral-500 shrink-0">{site.category}</span>
          </div>
          <p className="text-sm text-neutral-500 mt-1 line-clamp-2">{site.tagline}</p>
        </div>
      </div>
    </Link>
  );
}
