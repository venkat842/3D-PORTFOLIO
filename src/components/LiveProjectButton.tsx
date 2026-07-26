import React from 'react';

interface LiveProjectButtonProps {
  href: string;
  label?: string;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  href,
  label = 'Live Project',
  className = '',
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest text-center px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] ${className}`}
    >
      {label}
    </a>
  );
};
