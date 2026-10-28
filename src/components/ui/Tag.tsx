interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export function Tag({ children, variant = 'default', size = 'md' }: TagProps) {
  const sizeClasses = {
    sm: 'px-2.5 py-1 text-[12px]',
    md: 'px-3 py-1.5 text-[13px] sm:text-[14px]',
    lg: 'px-4 py-2 text-[14px] sm:text-[15px]',
  };

  const variantClasses = {
    default: 'border-[#2b67db] bg-[#071544]/60 text-[#dbe8ff] hover:bg-[#071544]/80 hover:border-[#2b67db] hover:text-[#eef4ff] shadow-[0_0_14px_rgba(37,103,255,0.18)]',
    primary: 'border-[#2f72ff] bg-[#2f72ff]/10 text-[#7ba3ff]',
    secondary: 'border-[#7a8db3]/40 text-[#a0afc8] hover:border-[#7a8db3]/60',
  };

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border font-medium transition-all ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      {children}
    </span>
  );
}
