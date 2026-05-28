import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="text-5xl font-bold tracking-tight">404</h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-400">
        That page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block px-5 py-3 bg-orange-500 text-white rounded-md font-medium hover:bg-orange-600"
      >
        Back to Furiosa Data
      </Link>
    </div>
  );
}
