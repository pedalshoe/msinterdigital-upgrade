import CalendlyButton from '@/components/CalendlyButton';
import NewsletterForm from '@/components/NewsletterForm';
import {company, testimonials} from '@/data/siteData';
import {Link} from '@/i18n/navigation';

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-eyebrow">✦ Licensed Mental Health Counselor</div>
            <h1 className="hero-title">
              Daily <strong>Clarity</strong>
              <br />
              for Mind, <em>Faith</em>
              <br />
              &amp; Wellness
            </h1>
            <p className="hero-tagline">
              Counseling, coaching, and practical tools for people ready to find lasting peace - not just a moment of it.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn-gold">Book a Free Consultation</Link>
              <Link href="/educational-products" className="btn-outline-white">Shop eBooks &amp; Courses</Link>
            </div>
            <div className="hero-social">
              <a href="https://www.facebook.com/msinterdigital" target="_blank" rel="noopener noreferrer">Facebook</a>
              <span style={{color: 'rgba(255,255,255,.25)'}}>·</span>
              <a href="https://www.instagram.com/ms.interdigital_" target="_blank" rel="noopener noreferrer">Instagram</a>
              <span style={{color: 'rgba(255,255,255,.25)'}}>·</span>
              <a href="https://www.youtube.com/@kdeyfoy" target="_blank" rel="noopener noreferrer">YouTube</a>
              <span style={{color: 'rgba(255,255,255,.25)'}}>·</span>
              <a href="https://www.pinterest.com/kdf1333/" target="_blank" rel="noopener noreferrer">Pinterest</a>
              <span style={{color: 'rgba(255,255,255,.25)'}}>·</span>
              <a href="https://substack.com/@keandflawes" target="_blank" rel="noopener noreferrer">Substack</a>
            </div>
          </div>
          <div className="hero-float-card">
            <div className="float-icon">🕊️</div>
            <h3>Breathe Peaceful</h3>
            <p>Affirmations to improve every aspect of life - our flagship eBook series.</p>
            <div className="pill-row">
              <span className="pill">Mental Health</span>
              <span className="pill">Affirmations</span>
              <span className="pill">Faith</span>
            </div>
            <Link href="/educational-products" className="btn-gold" style={{width: '100%', textAlign: 'center', display: 'block'}}>Get Your Copy →</Link>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      <div id="trust">
        <div className="trust-inner">
          <div className="trust-item"><div className="trust-icon">🎓</div><span>Licensed Mental Health Counselor</span></div>
          <div className="trust-item"><div className="trust-icon">📜</div><span>Certified Guidance Counselor</span></div>
          <div className="trust-item"><div className="trust-icon">💛</div><span>Faith-Based Approach</span></div>
          <div className="trust-item"><div className="trust-icon">📅</div><span>Online &amp; Remote Sessions</span></div>
          <div className="trust-item"><div className="trust-icon">📚</div><span>Courses, eBooks &amp; Resources</span></div>
        </div>
      </div>

      <section id="about">
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="section-label">Our Story</div>
              <h2 className="section-title">Peace has become rare. We&apos;re here to change that.</h2>
              <hr className="divider" />
              <p className="section-sub">We started this company for one reason: people are overwhelmed. In a world that moves fast and demands more, we created a space where clarity can grow daily.</p>
              <blockquote className="about-quote">"We wanted something practical, grounding, and meaningful - tools that support the mind and the heart."</blockquote>
              <p style={{fontSize: '.88rem', color: 'var(--text-muted)', lineHeight: 1.7}}>Online counseling, marketing, and services supporting parents and young people - whether it&apos;s therapy, coaching, or simply a guide for your next step forward.</p>
              <div className="about-stats">
                <div className="stat-box"><div className="stat-num serif">500+</div><div className="stat-label">Lives Supported</div></div>
                <div className="stat-box"><div className="stat-num serif">10+</div><div className="stat-label">Years of Practice</div></div>
                <div className="stat-box"><div className="stat-num serif">3</div><div className="stat-label">Digital Products</div></div>
                <div className="stat-box"><div className="stat-num serif">100%</div><div className="stat-label">Online &amp; Remote</div></div>
              </div>
            </div>
            <div className="about-visual">
              <h3>What We Offer</h3>
              <ul className="service-list">
                <li><span className="service-dot"></span><span><strong>Counseling &amp; Therapy</strong> - One-on-one licensed mental health support tailored to your needs.</span></li>
                <li><span className="service-dot"></span><span><strong>Coaching &amp; Mentoring</strong> - Goal-oriented guidance for parents and young people navigating life transitions.</span></li>
                <li><span className="service-dot"></span><span><strong>eBooks &amp; Courses</strong> - Practical digital resources for mental clarity, faith, and personal growth.</span></li>
                <li><span className="service-dot"></span><span><strong>Affiliate Resources</strong> - Curated tools and platforms we trust and recommend.</span></li>
                <li><span className="service-dot"></span><span><strong>Newsletter &amp; Community</strong> - Stay connected with insights, deals, and encouragement.</span></li>
              </ul>
              <div style={{marginTop: '1.75rem'}}><Link href="/contact" className="btn-gold">Start Your Journey →</Link></div>
            </div>
          </div>
        </div>
      </section>

      <section id="products">
        <div className="container">
          <div className="products-intro">
            <div className="section-label">Educational Products</div>
            <h2 className="section-title">eBooks &amp; Courses</h2>
            <p className="section-sub">Practical tools designed to ground you, grow you, and guide you toward daily clarity.</p>
          </div>
          <div className="product-grid">
            <div className="product-card">
              <div className="product-banner"></div>
              <div className="product-body">
                <span className="product-tag">eBook · Series Vol. 1</span>
                <h3>Breathe Peaceful Affirmations</h3>
                <p>Daily affirmations aligned with presence, peace, and personal improvement. Grounding reflections for every aspect of life.</p>
                <Link href="/educational-products" className="btn-gold">View Product Details</Link>
              </div>
              <div className="product-footer">
                <span className="product-price serif">$17.00</span>
                <span style={{fontSize: '.78rem', color: 'var(--text-muted)'}}>Instant PDF Download</span>
              </div>
            </div>
            <div className="product-card">
              <div className="product-banner"></div>
              <div className="product-body">
                <span className="product-tag">eBook · Series Vol. 2</span>
                <h3>Daily Clarity Mindset Guide</h3>
                <p>Mental health, faith, and wellness in one practical guide. Tools for parents and young people to reset and rebuild clarity.</p>
                <Link href="/educational-products" className="btn-gold">Explore the Collection</Link>
              </div>
              <div className="product-footer">
                <span className="product-price serif">$22.00</span>
                <span style={{fontSize: '.78rem', color: 'var(--text-muted)'}}>Instant PDF Download</span>
              </div>
            </div>
            <div className="product-card">
              <div className="product-banner" style={{background: 'linear-gradient(90deg,var(--gold-deep),var(--gold),var(--gold-light))'}}></div>
              <div className="product-body">
                <span className="product-tag" style={{background: 'var(--gold-pale)', color: 'var(--gold-deep)'}}>Online Course</span>
                <h3>Clarity &amp; Wellness Foundations</h3>
                <p>Evidence-based practices for managing stress, building emotional resilience, and sustaining mental wellness through a faith-forward lens.</p>
                <Link href="/contact" className="btn-gold">Join the Course Waitlist</Link>
              </div>
              <div className="product-footer" style={{background: 'var(--purple-pale)'}}>
                <span className="product-price serif">$97.00</span>
                <span style={{fontSize: '.78rem', color: 'var(--text-muted)'}}>Self-paced · Lifetime Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="img-strip">
        <div className="img-strip-photo"></div>
        <div className="img-strip-overlay"></div>
        <div className="img-strip-content">
          <div className="img-strip-text">
            <div className="section-label">Where Clarity Begins</div>
            <h2>A peaceful mind is not a destination - it&apos;s a daily practice.</h2>
            <p>Whether you&apos;re carrying stress, seeking direction, or simply looking for space to breathe - we meet you exactly where you are.</p>
            <Link href="/contact" className="btn-gold">Begin Your Journey</Link>
          </div>
        </div>
      </div>

      <section id="services">
        <div className="container">
          <div className="section-label">Support Services</div>
          <h2 className="section-title">Counseling &amp; Coaching</h2>
          <p className="section-sub">Whether you&apos;re seeking licensed therapy or practical life coaching, we meet you where you are.</p>
          <div className="services-grid">
            <div className="service-card featured">
              <span className="service-icon">🌿</span>
              <h3 style={{color: 'var(--gold-light)'}}>Counseling &amp; Therapy</h3>
              <p className="service-sub" style={{color: 'rgba(255,255,255,.72)'}}>Licensed mental health counseling delivered with empathy and clinical expertise. Individual sessions for anxiety, stress, parenting pressures, and life transitions.</p>
              <div className="tag-row">
                <span className="tag" style={{background: 'rgba(201,168,76,.15)', borderColor: 'rgba(201,168,76,.3)', color: 'var(--gold-light)'}}>Individual</span>
                <span className="tag" style={{background: 'rgba(201,168,76,.15)', borderColor: 'rgba(201,168,76,.3)', color: 'var(--gold-light)'}}>Online</span>
                <span className="tag" style={{background: 'rgba(201,168,76,.15)', borderColor: 'rgba(201,168,76,.3)', color: 'var(--gold-light)'}}>LMHC</span>
              </div>
              <div style={{marginTop: '1.5rem'}}><Link href="/contact" className="btn-gold">Book a Session</Link></div>
            </div>
            <div className="service-card">
              <span className="service-icon">🌟</span>
              <h3>Coaching &amp; Mentoring</h3>
              <p className="service-sub">Goal-focused support for parents and young adults. Build confidence, navigate transitions, and unlock your potential with structured accountability.</p>
              <div className="tag-row"><span className="tag">Parents</span><span className="tag">Young Adults</span><span className="tag">Goal Setting</span></div>
              <div style={{marginTop: '1.5rem'}}><Link href="/contact" className="btn-gold">Book a Session</Link></div>
            </div>
            <div className="service-card">
              <span className="service-icon">✨</span>
              <h3>Free Consultation</h3>
              <p className="service-sub">Not sure where to start? Book a free 20-minute discovery call. We&apos;ll help you understand which service best fits where you are today.</p>
              <div className="tag-row"><span className="tag">20 Minutes</span><span className="tag">No Commitment</span><span className="tag">Free</span></div>
              <div style={{marginTop: '1.5rem'}}><Link href="/contact" className="btn-outline">Schedule Free Call</Link></div>
            </div>
            <div className="service-card">
              <span className="service-icon">📖</span>
              <h3>Faith &amp; Wellness Resources</h3>
              <p className="service-sub">Supplement your journey with our newsletter, Substack, and curated digital resources - grounded in faith, designed for everyday wellness.</p>
              <div className="tag-row"><span className="tag">Newsletter</span><span className="tag">Substack</span><span className="tag">eBooks</span></div>
              <div style={{marginTop: '1.5rem'}}><a href="#newsletter" className="btn-outline">Subscribe</a></div>
            </div>
          </div>
        </div>
      </section>

      <section id="affiliate">
        <div className="container">
          <div className="section-label">Affiliate Resources</div>
          <h2 className="section-title">Tools We Trust &amp; Recommend</h2>
          <p className="section-sub">We only share resources we believe in. These affiliate links help support our mission at no extra cost to you.</p>
          <div className="affiliate-grid">
            <div className="aff-card"><h4>🔗 Wellness Favorites</h4><p>Explore a curated selection of wellness and home products we genuinely recommend, including Melaleuca essentials and everyday Amazon finds.</p><Link href="/affiliate-marketing" className="aff-link">Browse Recommendations →</Link></div>
            <div className="aff-card"><h4>📚 Recommended Reading</h4><p>Discover books selected for parents, caregivers, and growth-minded readers looking for practical support and thoughtful encouragement.</p><Link href="/affiliate-marketing" className="aff-link">See the Reading List →</Link></div>
            <div className="aff-card"><h4>🍵 Tea &amp; Rituals</h4><p>Find calming rituals and naturally sourced wellness picks, including caffeine-free rooibos tea for peaceful evenings and daily reset moments.</p><Link href="/affiliate-marketing" className="aff-link">Explore Wellness Picks →</Link></div>
            <div className="aff-card" style={{background: 'var(--purple-pale)', borderColor: 'rgba(74,44,107,.2)'}}>
              <h4 style={{color: 'var(--purple-mid)'}}>💜 Substack</h4>
              <p>Follow along for deeper writing on faith, mental health, and the everyday work of building peace.</p>
              <a href="https://substack.com/@keandflawes" className="aff-link" style={{color: 'var(--purple-mid)'}} target="_blank" rel="noopener noreferrer">Read on Substack →</a>
            </div>
          </div>
        </div>
      </section>

      <section id="schedule">
        <div className="container">
          <div className="schedule-box">
            <div className="section-label">Book a Session</div>
            <h2 className="section-title">Ready to Begin?</h2>
            <p className="section-sub">Use the scheduler below to book your free consultation or a paid session. No commitment needed to start.</p>
            <div className="schedule-embed-placeholder">
              <p>Choose a time that fits your schedule and open a consultation request in just a few clicks. If you prefer, you can also reach out by email and we will help you find the right next step.</p>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center'}}>
              <CalendlyButton href={company.calendlyUrl} className="btn-gold">Open the Scheduler</CalendlyButton>
              <a href={`mailto:${company.email}`} className="btn-outline-white">Or Email Us Directly</a>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '2.5rem'}}>
            <div className="section-label">Kind Words</div>
            <h2 className="section-title">What Our Community Says</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <div className="testi-card" key={item.author}>
                <div className="testi-stars">★★★★★</div>
                <p className="testi-quote">"{item.quote}"</p>
                <div className="testi-author">- {item.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="newsletter">
        <div className="container">
          <div className="newsletter-wrap">
            <div className="section-label">Stay Connected</div>
            <h2 className="section-title">Join the Clarity Community</h2>
            <p className="section-sub">Exclusive deals, mental wellness tips, faith reflections, and early access to new products - straight to your inbox.</p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
