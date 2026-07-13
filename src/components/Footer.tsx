import {useTranslations} from 'next-intl';

import {company} from '@/data/siteData';
import {Link} from '@/i18n/navigation';

export default function Footer() {
  const tNav = useTranslations('Navigation');
  const tFooter = useTranslations('Footer');

  return (
    <>
      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo-text">
              Ms. Interdigital
              <span>Clarity · Faith · Wellness</span>
            </Link>
            <p>{tFooter('brand')}</p>
            <div className="footer-social">
              <a href="https://www.facebook.com/msinterdigital" target="_blank" rel="noopener noreferrer">fb</a>
              <a href="https://www.instagram.com/ms.interdigital_" target="_blank" rel="noopener noreferrer">ig</a>
              <a href="https://www.youtube.com/@kdeyfoy" target="_blank" rel="noopener noreferrer">yt</a>
              <a href="https://www.pinterest.com/kdf1333/" target="_blank" rel="noopener noreferrer">pin</a>
              <a href="https://substack.com/@keandflawes" target="_blank" rel="noopener noreferrer">sub</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>{tFooter('services')}</h4>
            <ul>
              <li><Link href="/counseling-therapy">{tNav('counseling')}</Link></li>
              <li><Link href="/coaching-mentoring">{tNav('coaching')}</Link></li>
              <li><Link href="/contact">{tFooter('freeConsultation')}</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{tFooter('products')}</h4>
            <ul>
              <li><Link href="/educational-products">Breathe Peaceful eBook</Link></li>
              <li><Link href="/educational-products">Mindfulness eBook</Link></li>
              <li><Link href="/educational-products">Mindfulness Course</Link></li>
              <li><Link href="/affiliate-marketing">Affiliate Resources</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{tFooter('company')}</h4>
            <ul>
              <li><Link href="/about">{tNav('about')}</Link></li>
              <li><Link href="/contact">{tNav('contact')}</Link></li>
              <li><Link href="/privacy-policy">{tFooter('privacy')}</Link></li>
              <li><Link href="/terms-and-conditions">{tFooter('terms')}</Link></li>
              <li><Link href="/cookie-policy">{tFooter('cookies')}</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Ms. Interdigital. {tFooter('rights')}</span>
          <span>
            {tFooter('country')} &nbsp;·&nbsp; <a href={company.phoneHref}>{company.phoneLabel}</a> &nbsp;·&nbsp; <a href={`mailto:${company.email}`}>{company.email}</a>
          </span>
        </div>
      </footer>
      <Link href="/contact" className="btn-gold sticky-book">📅 Book Free Consultation</Link>
    </>
  );
}
