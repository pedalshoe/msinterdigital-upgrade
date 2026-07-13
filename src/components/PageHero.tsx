import type {ReactNode} from 'react';

type PageHeroProps = {
  breadcrumb: ReactNode;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
};

export default function PageHero({
  breadcrumb,
  eyebrow,
  title,
  highlight,
  description
}: PageHeroProps) {
  return (
    <div className="page-hero">
      <div className="container">
        <div className="breadcrumb">{breadcrumb}</div>
        <div className="page-hero-eyebrow">{eyebrow}</div>
        <h1>
          {title} <span>{highlight}</span>
        </h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
