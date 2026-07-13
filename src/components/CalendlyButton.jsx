'use client';

export default function CalendlyButton({
  href,
  className,
  children,
  style
}) {
  const handleClick = (event) => {
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
