import PageHero from '@/components/PageHero';
import {Link} from '@/i18n/navigation';

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero breadcrumb={<><Link href="/">Home</Link> / Cookie Policy</>} eyebrow="Legal" title="Cookie" highlight="Policy" description="How this site may use cookies and similar technologies to support core functionality and analytics." />
      <section className="content-section alt"><div className="container" style={{maxWidth: '780px'}}><div className="card"><h3>What Cookies Do</h3><p>Cookies are small data files stored by your browser. They can help websites remember preferences, measure traffic, and improve usability.</p><h3 style={{marginTop: '1.5rem'}}>How We May Use Them</h3><p>This site may rely on cookies or similar technologies from tools such as scheduling platforms, analytics providers, or embedded third-party services to keep those features working properly.</p><h3 style={{marginTop: '1.5rem'}}>Managing Cookies</h3><p>You can usually control or remove cookies through your browser settings. Disabling some cookies may affect how embedded services or third-party widgets behave on the site.</p><h3 style={{marginTop: '1.5rem'}}>Questions</h3><p>If you have questions about this policy, contact <a href="mailto:kdf@msinterdigital.com">kdf@msinterdigital.com</a>.</p></div></div></section>
    </>
  );
}
