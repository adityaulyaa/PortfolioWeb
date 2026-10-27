interface EmptyStateProps {
  title?: string;
  message?: string;
  icon?: 'search' | 'inbox' | 'alert';
}

function EmptyIcon({ type }: { type?: string }) {
  if (type === 'search') {
    return <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
  }
  return <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>;
}

export function EmptyState({ 
  title = 'No data found', 
  message = 'There is no data to display.',
  icon = 'inbox'
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="text-[#7a8db3] mb-4">
        <EmptyIcon type={icon} />
      </div>
      <h3 className="text-lg font-semibold text-[#eef2ff] mb-2">{title}</h3>
      <p className="text-[14px] text-[#a0afc8] text-center max-w-sm">{message}</p>
    </div>
  );
}
