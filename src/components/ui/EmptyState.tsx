export function EmptyState({ message = "No skills available at the moment." }: { message?: string }) {
  return (
    <div role="status" className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
      {message}
    </div>
  );
}