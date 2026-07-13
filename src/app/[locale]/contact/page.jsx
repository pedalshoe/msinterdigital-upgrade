import CalendlyButton from '@/components/CalendlyButton';
import ContactForm from '@/components/ContactForm';
import PageHero from '@/components/PageHero';
import {company} from '@/data/siteData';
import {Link} from '@/i18n/navigation';

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb={<><Link href="/">Home</Link> / Contact</>}
        eyebrow="Get in Touch"
        title="Book a"
        highlight="Consultation"
        description="Tell us a little about yourself and what you're looking for - we'll be in touch within 1 business day."
      />
      <section className="content-section alt">
        <div className="container">
          <div className="two-col" style={{gap: '3rem', alignItems: 'start'}}>
            <div className="contact-form">
              <h2 style={{fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: '1.7rem', color: 'var(--purple)', marginBottom: '.5rem'}}>Let&apos;s Connect</h2>
              <p style={{fontSize: '.88rem', color: 'var(--text-muted)', marginBottom: '1.75rem'}}>Fill out the form below and we&apos;ll reach out to schedule your free consultation.</p>
              <ContactForm />
            </div>

            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              <div className="card" style={{background: 'linear-gradient(155deg,var(--purple),#2D1547)', border: 'none'}}>
                <h3 style={{color: 'var(--gold-light)', fontSize: '1.2rem', marginBottom: '1.25rem'}}>Direct Contact</h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '.75rem'}}><div style={{width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(201,168,76,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0}}>📞</div><div><div style={{fontSize: '.75rem', color: 'rgba(255,255,255,.5)', textTransform: 'uppercase', letterSpacing: '.08em'}}>Phone</div><a href={company.phoneHref} style={{color: 'white', textDecoration: 'none', fontWeight: 500}}>{company.phoneLabel}</a></div></div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '.75rem'}}><div style={{width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(201,168,76,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0}}>✉️</div><div><div style={{fontSize: '.75rem', color: 'rgba(255,255,255,.5)', textTransform: 'uppercase', letterSpacing: '.08em'}}>Email</div><a href={`mailto:${company.email}`} style={{color: 'white', textDecoration: 'none', fontWeight: 500}}>{company.email}</a></div></div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '.75rem'}}><div style={{width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(201,168,76,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0}}>🌍</div><div><div style={{fontSize: '.75rem', color: 'rgba(255,255,255,.5)', textTransform: 'uppercase', letterSpacing: '.08em'}}>Location</div><span style={{color: 'white'}}>United States - Online &amp; Remote</span></div></div>
                </div>
              </div>

              <div className="card">
                <h3>Schedule Directly</h3>
                <p style={{marginBottom: '1.25rem'}}>Prefer to book a time slot right away? Use our Calendly scheduler to find a time that works for you.</p>
                <CalendlyButton href={company.calendlyUrl} className="btn-gold" style={{display: 'block', textAlign: 'center'}}>Schedule a Free Consultation</CalendlyButton>
              </div>

              <div className="card" style={{background: 'var(--gold-pale)'}}>
                <h3>Free 20-Minute Consultation</h3>
                <p>Not sure where to start? Our free consultation is a relaxed, no-pressure conversation to help you figure out the right next step.</p>
                <div className="tag-row" style={{marginTop: '.75rem'}}><span className="tag">No Commitment</span><span className="tag">Confidential</span><span className="tag">Free</span></div>
              </div>

              <div className="card">
                <h3>Follow Along</h3>
                <p style={{marginBottom: '1rem', fontSize: '.88rem'}}>Stay connected for daily clarity, wellness tips, and community.</p>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '.6rem'}}>
                  <a href="https://www.facebook.com/msinterdigital" target="_blank" rel="noopener noreferrer" className="btn-purple" style={{fontSize: '.8rem', padding: '.5rem 1rem'}}>Facebook</a>
                  <a href="https://www.instagram.com/ms.interdigital_" target="_blank" rel="noopener noreferrer" className="btn-purple" style={{fontSize: '.8rem', padding: '.5rem 1rem'}}>Instagram</a>
                  <a href="https://www.youtube.com/@kdeyfoy" target="_blank" rel="noopener noreferrer" className="btn-purple" style={{fontSize: '.8rem', padding: '.5rem 1rem'}}>YouTube</a>
                  <a href="https://substack.com/@keandflawes" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{fontSize: '.8rem', padding: '.5rem 1rem'}}>Substack</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
