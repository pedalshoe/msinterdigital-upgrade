import {Link} from '@/i18n/navigation';
import PageHero from '@/components/PageHero';
import {reviews} from '@/data/siteData';

export default function EducationalProductsPage() {
  return (
    <>
      <PageHero
        breadcrumb={<><Link href="/">Home</Link> / Educational Products</>}
        eyebrow="Shop"
        title="eBooks &"
        highlight="Courses"
        description="Practical digital resources for mental clarity, faith, and personal growth - downloadable instantly after purchase."
      />
      <section className="content-section alt">
        <div className="container">
          <div className="section-label" style={{textAlign: 'center'}}>Online Courses</div>
          <h2 className="section-title" style={{textAlign: 'center', marginBottom: '2.5rem'}}>Our Educational Courses</h2>
          <div style={{maxWidth: '420px', margin: '0 auto'}}>
            <div className="product-card">
              <div className="product-banner" style={{background: 'linear-gradient(90deg,var(--gold-deep),var(--gold),var(--gold-light))'}}></div>
              <div className="product-body">
                <span className="product-tag" style={{background: 'var(--gold-pale)', color: 'var(--gold-deep)'}}>Online Course</span>
                <h3>The Benefits of Mindfulness</h3>
                <p>A self-paced online course exploring the science and practice of mindfulness - how it reduces stress, improves focus, and supports mental and emotional wellbeing. Includes guided exercises and practical tools.</p>
                <Link href="/contact" className="btn-gold">Join Course Waitlist</Link>
              </div>
              <div className="product-footer" style={{background: 'var(--purple-pale)'}}>
                <span className="product-price">$7.99</span>
                <span style={{fontSize: '.78rem', color: 'var(--text-muted)'}}>Self-paced · Instant Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content-section" style={{background: 'var(--cream)'}}>
        <div className="container">
          <div className="section-label" style={{textAlign: 'center'}}>eBooks</div>
          <h2 className="section-title" style={{textAlign: 'center', marginBottom: '2.5rem'}}>Our eBooks</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.75rem', maxWidth: '760px', margin: '0 auto'}}>
            <div className="product-card"><div className="product-banner"></div><div className="product-body"><span className="product-tag">eBook</span><h3>The Benefits of Mindfulness</h3><p>A comprehensive guide to mindfulness practices - grounded in research and written for everyday people. Learn how to quiet mental noise, reduce anxiety, and bring more presence to your daily life.</p><Link href="/contact" className="btn-gold">Request Purchase Info</Link></div><div className="product-footer"><span className="product-price">$7.99</span><span style={{fontSize: '.78rem', color: 'var(--text-muted)'}}>Instant PDF Download</span></div></div>
            <div className="product-card"><div className="product-banner"></div><div className="product-body"><span className="product-tag">eBook · Affirmations Series</span><h3>Breathe Peaceful Affirmations</h3><p>Daily affirmations aligned with presence, peace, and personal improvement. Our first in the series - grounding reflections for every aspect of life, designed for morning practice.</p><Link href="/contact" className="btn-gold">Request Purchase Info</Link></div><div className="product-footer"><span className="product-price">$7.99</span><span style={{fontSize: '.78rem', color: 'var(--text-muted)'}}>Instant PDF Download</span></div></div>
          </div>
        </div>
      </section>
      <section className="content-section alt">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '2.5rem'}}><div className="section-label">What Our Readers Say</div><h2 className="section-title">Customer Reviews</h2></div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem'}}>
            {reviews.map((review) => (
              <div className="review-card" key={review.quote}><div className="stars">★★★★★</div><p className="review-quote">"{review.quote}"</p><div className="review-author">- {review.author}</div></div>
            ))}
          </div>
        </div>
      </section>
      <div className="cta-strip"><div className="container"><h2>Stay in the loop for new releases.</h2><p>Subscribe to our newsletter to be first to know when new eBooks and courses drop - often with launch-week discounts.</p><Link href="/#newsletter" className="btn-gold">Subscribe to Newsletter</Link></div></div>
    </>
  );
}
