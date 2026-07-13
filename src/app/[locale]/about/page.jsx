import {Link} from '@/i18n/navigation';
import PageHero from '@/components/PageHero';

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb={<><Link href="/">Home</Link> / About</>}
        eyebrow="Our Story"
        title="Meet"
        highlight="Kean Dey-Foy"
        description="Licensed Mental Health Counselor, Certified Guidance Counselor, and founder of Ms. Interdigital - with over 20 years of experience supporting children, families, and adults."
      />
      <section className="content-section alt">
        <div className="container">
          <div className="two-col" style={{alignItems: 'center', gap: '4rem'}}>
            <div>
              <div className="section-label">Credentials &amp; Background</div>
              <h2 className="section-title">Why I Created Ms. Interdigital</h2>
              <hr className="divider" />
              <p style={{fontSize: '.97rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.25rem'}}>My name is Kean Dey-Foy. I am a certified and licensed Guidance Counselor and Mental Health Counselor with more than 20 years of experience. My clientele have been both children and adults, but my emphasis has been with youngsters between the ages of 3 and 18 years old.</p>
              <p style={{fontSize: '.97rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.25rem'}}>As a Guidance Counselor, I saw many frustrated parents trying to find adequate support for their children. Many had concerns about their child&apos;s developmental and behavioral issues - finding the right therapy, and knowing how to choose the type that fits the specific issue and goals, can be quite challenging.</p>
              <p style={{fontSize: '.97rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.75rem'}}>As a counselor and therapist I am always seeking ways to encourage my clients to reach their full potential. I utilize CBT and ACT, but most of the time I am eclectic. With younger clients I utilize early childhood developmental theories, ABA, and CBT to help build a healthy foundation of skills they can use throughout their lifetime.</p>
              <blockquote style={{fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: '1.35rem', fontStyle: 'italic', color: 'var(--purple)', lineHeight: 1.5, borderLeft: '3px solid var(--gold)', paddingLeft: '1.25rem', marginBottom: '1.75rem'}}>“My concern and care for our youngsters&apos; well-being is still central to my focus.”</blockquote>
              <Link href="/contact" className="btn-gold">Book a Free Consultation</Link>
            </div>
            <div>
              <div style={{background: 'linear-gradient(155deg,var(--purple),#2D1547)', borderRadius: '24px', padding: '2.5rem', textAlign: 'center', color: 'white'}}>
                <img src="/assets/images/kean-dey-foy.png" alt="Portrait of Kean Dey-Foy" style={{width: '132px', height: '132px', objectFit: 'cover', objectPosition: 'center top', borderRadius: '50%', display: 'block', margin: '0 auto 1.25rem', border: '4px solid rgba(201,168,76,.45)', boxShadow: '0 12px 30px rgba(0,0,0,.22)'}} />
                <h3 style={{fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: '1.6rem', color: 'var(--gold-light)', marginBottom: '.3rem'}}>Kean Dey-Foy</h3>
                <p style={{fontSize: '.88rem', color: 'rgba(255,255,255,.7)', marginBottom: '1.5rem'}}>LMHC · Certified Guidance Counselor</p>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem'}}>
                  <div style={{background: 'rgba(255,255,255,.08)', borderRadius: '12px', padding: '1rem'}}><div style={{fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: '1.8rem', fontWeight: 600, color: 'var(--gold-light)'}}>20+</div><div style={{fontSize: '.75rem', color: 'rgba(255,255,255,.6)', marginTop: '.2rem'}}>Years Experience</div></div>
                  <div style={{background: 'rgba(255,255,255,.08)', borderRadius: '12px', padding: '1rem'}}><div style={{fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: '1.8rem', fontWeight: 600, color: 'var(--gold-light)'}}>3–18</div><div style={{fontSize: '.75rem', color: 'rgba(255,255,255,.6)', marginTop: '.2rem'}}>Primary Age Focus</div></div>
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '.5rem', justifyContent: 'center'}}>
                  {['CBT', 'ACT', 'ABA', 'Eclectic', 'Developmental'].map((item) => (
                    <span key={item} style={{background: 'rgba(201,168,76,.18)', border: '1px solid rgba(201,168,76,.35)', borderRadius: '50px', fontSize: '.73rem', color: 'var(--gold-light)', padding: '.25rem .75rem'}}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content-section" style={{background: 'var(--cream)'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <div className="section-label">Approach</div>
            <h2 className="section-title">How I Work With Clients</h2>
          </div>
          <div className="three-col">
            <div className="card"><span className="card-icon">🧠</span><h3>Cognitive Behavioral Therapy</h3><p>CBT helps clients identify and challenge unhelpful thought patterns, replacing negative self-talk with rational, constructive perspectives to reduce anxiety and depression.</p><div className="tag-row"><span className="tag">Evidence-Based</span><span className="tag">All Ages</span></div></div>
            <div className="card"><span className="card-icon">🌿</span><h3>Acceptance &amp; Commitment Therapy</h3><p>ACT encourages acceptance of difficult thoughts and feelings while committing to healthy actions that align with personal values and goals.</p><div className="tag-row"><span className="tag">Mindfulness</span><span className="tag">Values-Based</span></div></div>
            <div className="card"><span className="card-icon">🌱</span><h3>Eclectic &amp; Developmental</h3><p>With younger clients, I draw on early childhood developmental theories and ABA to build a healthy foundation of skills for lifelong emotional wellbeing.</p><div className="tag-row"><span className="tag">Children</span><span className="tag">Families</span></div></div>
          </div>
        </div>
      </section>
      <div className="cta-strip"><div className="container"><h2>Ready to take the first step?</h2><p>Book a free 20-minute consultation. No commitment - just a conversation about where you are and how we can help.</p><Link href="/contact" className="btn-gold">Book Free Consultation</Link></div></div>
    </>
  );
}
