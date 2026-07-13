'use client';

import type {CSSProperties, MouseEvent, ReactNode} from 'react';

type CalendlyButtonProps = {
  href: string;
  className: string;
  children: ReactNode;
  style?: CSSProperties;
};

export default function CalendlyButton({
  href,
  className,
  children,
  style
}: CalendlyButtonProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (typeof window !== 'undefined' && window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({url: href});
      return;
    }

    window.location.href = href;
  };

  return (
    <a href={href} className={className} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}
