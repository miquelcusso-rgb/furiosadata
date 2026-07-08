import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MessageCircle, Send } from 'lucide-react';
import { SITE_URL, PUBLISHER } from '../../lib/sites';

export const dynamic = 'force-static';

const EMAIL = 'hello@furiosadata.com';
const X_HANDLE = '@furiosadata';

export const metadata: Metadata = {
  title: 'Contact — Furiosa Studio',
  description: `Get in touch with Furiosa Studio. Email ${EMAIL} or DM us on X at ${X_HANDLE}.`,
  alternates: { canonical: '/contact' },
};

const contactLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Furiosa Studio',
  url: `${SITE_URL}/contact`,
  mainEntity: {
    '@type': 'Organization',
    name: PUBLISHER,
    url: SITE_URL,
    email: EMAIL,
    contactPoint: [{
      '@type': 'ContactPoint',
      contactType: 'general enquiries',
      email: EMAIL,
      availableLanguage: ['English', 'Spanish'],
    }],
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactLd) }}
      />
      <p className="text-xs font-mono uppercase tracking-wider text-orange-500 mb-3">Contact</p>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Get in touch.</h1>
      <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
        Questions about a tool, a dataset, a bug, an integration idea or a partnership — we read
        everything. One reply, no boilerplate.
      </p>

      <div className="mt-10 space-y-4">
        <a
          href={`mailto:${EMAIL}?subject=Hello%20Furiosa%20Studio`}
          className="flex items-start gap-4 p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-orange-500 transition group"
        >
          <div className="shrink-0 w-11 h-11 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center">
            <Mail size={20} />
          </div>
          <div className="min-w-0">
            <p className="font-semibold group-hover:text-orange-500">Email</p>
            <p className="text-sm text-neutral-500 mt-0.5 break-all">{EMAIL}</p>
            <p className="text-xs font-mono text-neutral-500 mt-2">Best for anything with detail.</p>
          </div>
          <Send size={16} className="ml-auto shrink-0 self-center text-neutral-400 group-hover:text-orange-500" />
        </a>

        <a
          href={`https://x.com/furiosadata`}
          target="_blank"
          rel="noopener"
          className="flex items-start gap-4 p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-orange-500 transition group"
        >
          <div className="shrink-0 w-11 h-11 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 flex items-center justify-center">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="font-semibold group-hover:text-orange-500">X (Twitter)</p>
            <p className="text-sm text-neutral-500 mt-0.5">{X_HANDLE}</p>
            <p className="text-xs font-mono text-neutral-500 mt-2">Best for quick pings and public replies.</p>
          </div>
          <MessageCircle size={16} className="ml-auto shrink-0 self-center text-neutral-400 group-hover:text-orange-500" />
        </a>
      </div>

      <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-sm text-neutral-500">
        <p>
          Furiosa Studio is an independent one-person studio building small tools with a focus on
          open data and the browser. See what we&apos;ve shipped in <Link href="/tools" className="text-orange-500 hover:underline">the network</Link>.
        </p>
      </div>
    </div>
  );
}
