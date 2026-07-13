export default function PageHero({breadcrumb, eyebrow, title, highlight, description}) {
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
