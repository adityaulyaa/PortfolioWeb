export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function formatDateRange(startDate: Date, endDate: Date | null): string {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : 'Present';
  return `${start} – ${end}`;
}

export function formatMonthYear(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  }).format(date);
}

export function formatMonthYearRange(startDate: Date, endDate: Date | null): string {
  const start = formatMonthYear(startDate);
  const end = endDate ? formatMonthYear(endDate) : 'Present';
  return `${start} – ${end}`;
}
