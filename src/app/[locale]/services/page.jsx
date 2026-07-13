import {Link} from '@/i18n/navigation';
import PageHero from '@/components/PageHero';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb={<><Link href="/">Home</Link> / Support Services</>}
        eyebrow="Support Services"
        title="How We Can"
        highlight="Help You"
        description="Whether you need licensed mental health counseling or goal-focused coaching, we meet you exactly where you are."
      />
      <section className="content-section alt">
        <div className="container">
          <div className="two-col">
            <div className="card">
              <span className="card-icon">🌿</span>
              <h3>Counseling &amp; Therapy</h3>
              <p style={{marginBottom: '1.25rem'}}>Licensed mental health counseling using CBT, ACT, and eclectic approaches. For anxiety, depression, trauma, parenting stress, and life transitions - children through adults.</p>
              <div className="tag-row" style={{marginBottom: '1.25rem'}}><span className="tag">LMHC</span><span className="tag">CBT</span><span className="tag">ACT</span><span className="tag">Ages 3+</span></div>
              <Link href="/counseling-therapy" className="btn-gold">Learn More</Link>
            </div>
            <div className="card">
              <span className="card-icon">🌟</span>
              <h3>Coaching &amp; Mentoring</h3>
              <p style={{marginBottom: '1.25rem'}}>Goal-focused support for parents, teens, and adults. Build confidence, set clear goals, and develop the skills and accountability to reach your full potential.</p>
              <div className="tag-row" style={{marginBottom: '1.25rem'}}><span className="tag">Parents</span><span className="tag">Youth</span><span className="tag">Adults</span><span className="tag">Goal Setting</span></div>
              <Link href="/coaching-mentoring" className="btn-gold">Learn More</Link>
            </div>
          </div>
          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <p style={{color: 'var(--text-muted)', marginBottom: '1.25rem'}}>Not sure which is right for you?</p>
            <Link href="/contact" className="btn-outline">Book a Free 20-Minute Consultation</Link>
          </div>
        </div>
      </section>
      <div className="cta-strip"><div className="container"><h2>Every journey begins with one step.</h2><p>Book a free consultation today - no commitment needed.</p><Link href="/contact" className="btn-gold">Get Started</Link></div></div>
    </>
  );
}
