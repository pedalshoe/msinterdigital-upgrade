import PageHero from '@/components/PageHero';
import {Link} from '@/i18n/navigation';

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero breadcrumb={<><Link href="/">Home</Link> / Privacy Policy</>} eyebrow="Legal" title="Privacy" highlight="Policy" description="How we collect, use, and protect information shared through this website." />
      <section className="content-section alt"><div className="container" style={{maxWidth: '780px'}}><div className="card"><h3>Information We Collect</h3><p>When you contact us, subscribe to updates, or book a consultation, we may collect details such as your name, email address, phone number, and any information you choose to share with us.</p><h3 style={{marginTop: '1.5rem'}}>How We Use Information</h3><p>We use submitted information to respond to inquiries, coordinate consultations, share requested resources, and improve the experience of our website and services.</p><h3 style={{marginTop: '1.5rem'}}>Sharing and Protection</h3><p>We do not sell your personal information. We may use trusted service providers such as scheduling, email, or analytics tools when needed to operate the site, and we take reasonable steps to protect the information shared with us.</p><h3 style={{marginTop: '1.5rem'}}>Your Choices</h3><p>You may contact us at <a href="mailto:kdf@msinterdigital.com">kdf@msinterdigital.com</a> if you would like to update, correct, or remove information you have submitted through this website.</p></div></div></section>
    </>
  );
}
