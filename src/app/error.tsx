'use client';

import Link from "next/link";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p className="text-slate-600 dark:text-slate-400">Please try again or return to the home page.</p>
      <div className="flex gap-3">
        <button onClick={reset} className="rounded-full bg-slate-900 px-5 py-3 text-white">Try again</button>
        <Link href="/" className="rounded-full border border-slate-300 px-5 py-3">Home</Link>
      </div>
    </main>
  );
}
