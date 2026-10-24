export function Tag({ label }: { label: string }) {
  return (
    <span
      role="status"
      className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
    >
      {label}
    </span>
  );
}