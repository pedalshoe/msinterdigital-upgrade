import PageHero from '@/components/PageHero';
import {affiliateSections} from '@/data/siteData';
import {Link} from '@/i18n/navigation';

export default function AffiliateMarketingPage() {
  return (
    <>
      <PageHero
        breadcrumb={<><Link href="/">Home</Link> / Affiliate Marketing</>}
        eyebrow="Affiliate Resources"
        title="Products We"
        highlight="Trust & Recommend"
        description="We only share products and services we genuinely believe in. These affiliate links support our mission at no extra cost to you."
      />
      <section className="content-section alt">
        <div className="container">
          <div style={{background: 'var(--gold-pale)', border: '1px solid rgba(201,168,76,.3)', borderRadius: '12px', padding: '1rem 1.5rem', marginBottom: '2.5rem', fontSize: '.88rem', color: 'var(--text-muted)'}}>
            <strong style={{color: 'var(--gold-deep)'}}>Disclosure:</strong> Some links on this page are affiliate links. When you click and make a purchase, we may earn a small commission - at no additional cost to you. We only recommend products we personally use or believe in.
          </div>
          {affiliateSections.map((section) => (
            <div key={section.title}>
              <div className="section-label">{section.label}</div>
              <h2 className="section-title" style={{marginBottom: '1.75rem'}}>{section.title}</h2>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
                {section.cards.map((card) => (
                  <div key={card.title} className={card.className} style={card.containerStyle || card.style}>
                    <div className="aff-badge" style={card.badgeStyle}>{card.badge}</div>
                    <h4>{card.title}</h4>
                    <p>{card.body}</p>
                    <a href={card.href} className="aff-link" style={card.actionStyle} target="_blank" rel="noopener noreferrer">{card.action}</a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="cta-strip"><div className="container"><h2>Have a product recommendation?</h2><p>If there&apos;s a wellness product or service you&apos;d like us to feature, reach out through our contact page.</p><Link href="/contact" className="btn-gold">Get in Touch</Link></div></div>
    </>
  );
}
