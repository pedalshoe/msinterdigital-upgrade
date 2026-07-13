import PageHero from '@/components/PageHero';
import {Link} from '@/i18n/navigation';

export default function TermsPage() {
  return (
    <>
      <PageHero breadcrumb={<><Link href="/">Home</Link> / Terms and Conditions</>} eyebrow="Legal" title="Terms &" highlight="Conditions" description="The basic terms that govern use of this website and the information shared through it." />
      <section className="content-section alt"><div className="container" style={{maxWidth: '780px'}}><div className="card"><h3>Website Use</h3><p>By using this website, you agree to use it only for lawful purposes and in a way that does not interfere with the security or availability of the site.</p><h3 style={{marginTop: '1.5rem'}}>Content and Resources</h3><p>All content on this site is provided for general informational purposes. It is not a substitute for individualized medical, mental health, legal, or financial advice.</p><h3 style={{marginTop: '1.5rem'}}>Appointments and Digital Products</h3><p>Consultation availability, pricing, product offerings, and affiliate recommendations may change over time. Any appointment or purchase details will be confirmed through the relevant booking or checkout process.</p><h3 style={{marginTop: '1.5rem'}}>Third-Party Links</h3><p>This site may link to third-party platforms, including booking tools, email services, and affiliate partners. We are not responsible for the content or policies of external websites.</p></div></div></section>
    </>
  );
}
