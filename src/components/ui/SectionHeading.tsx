interface SectionHeadingProps {
  label: string;
  title: string;
  icon?: 'about' | 'skills' | 'experience' | 'education' | 'projects';
}

function SectionIcon({ type }: { type?: string }) {
  if (type === 'about') {
    return <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" /></svg>;
  }
  if (type === 'skills') {
    return <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>;
  }
  if (type === 'experience') {
    return <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6h-2.18c.11-.89.86-1.54 1.63-1.97.78-.42 1.45-1.01 2.05-1.84-.7-.57-1.51-1.03-2.42-1.29.96-.58 2.56-.76 3.54.03.93-.83 1.08-2.05.1-2.8.99.26 1.65 1.13 1.57 2.1h2.5c1.45 0 2.46 1.29 1.24 2.64.6.5 1.56 3.4 1.56 3.4s-1.89.1-2.19.12V15c0 .45-.45.95-.95.95h-4.1c.5-.5.95-1.05.95-1.45v-4h-4v4c0 .4.45.95.95 1.45h-4.1c-.5 0-.95-.5-.95-.95V8.12c-.3-.02-2.19-.12-2.19-.12s.96-2.9 1.56-3.4c-1.22-1.35-.21-2.64 1.24-2.64z" /></svg>;
  }
  if (type === 'education') {
    return <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13.18v4c0 .55.45 1 1 1h1v4h1v-4h1v4h1v-4h1c.55 0 1-.45 1-1v-4l-4-3zm4.84-2.15c.78.48 1.45 1.01 2.24 1.9.02.01.03.03.05.04.93.77 1.53 1.23 2.01 1.84.48-.61 1.08-1.07 2.01-1.84.02-.01.03-.03.05-.04.79-.89 1.46-1.42 2.24-1.9L12 5.5z" /></svg>;
  }
  return <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>;
}

export function SectionHeading({ label, title, icon }: SectionHeadingProps) {
  return (
    <div className="mb-8 sm:mb-10">
      <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#2f72ff] to-[#154fe9]">
          <SectionIcon type={icon} />
        </div>
        <span className="text-[11px] sm:text-[12px] font-bold tracking-widest text-[#2f72ff] uppercase">{label}</span>
      </div>
      <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-tight">
        <span className="text-[#f4f6ff]">{title.split(' ')[0]}</span>
        {title.split(' ').length > 1 && <span className="gradient-text"> {title.split(' ').slice(1).join(' ')}</span>}
      </h2>
    </div>
  );
}
