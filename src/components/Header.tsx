'use client';

import {useState} from 'react';

import {useTranslations} from 'next-intl';

import CalendlyButton from '@/components/CalendlyButton';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import {company} from '@/data/siteData';
import {Link, usePathname} from '@/i18n/navigation';

type NavItem = {
  href: string;
  label: string;
  active: boolean;
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const page = pathname === '/' ? 'home' : pathname.replace(/^\//, '').split('/')[0];
  const isServicesPage = ['services', 'counseling-therapy', 'coaching-mentoring'].includes(page);

  const navItems: NavItem[] = [
    {href: '/', label: t('home'), active: page === 'home'},
    {href: '/about', label: t('about'), active: page === 'about'},
    {
      href: '/educational-products',
      label: t('educationalProducts'),
      active: page === 'educational-products'
    },
    {
      href: '/affiliate-marketing',
      label: t('affiliateMarketing'),
      active: page === 'affiliate-marketing'
    },
    {href: '/contact', label: t('contact'), active: page === 'contact'}
  ];

  return (
    <header>
      <div id="topbar">
        📞 <a href={company.phoneHref}>{company.phoneLabel}</a> &nbsp;·&nbsp;
        ✉ <a href={`mailto:${company.email}`}>{company.email}</a> &nbsp;·&nbsp;
        Licensed Mental Health Counselor &amp; Certified Guidance Counselor
      </div>
      <nav>
        <div className="nav-inner">
          <Link href="/" className="logo-text" onClick={() => setIsOpen(false)}>
            Ms. Interdigital
            <span>Clarity · Faith · Wellness</span>
          </Link>

          <ul className={`nav-links${isOpen ? ' is-open' : ''}`} id="primary-navigation">
            {navItems.slice(0, 2).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={item.active ? 'active' : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/services"
                className={isServicesPage ? 'active' : undefined}
                onClick={() => setIsOpen(false)}
              >
                {t('supportServices')} ▾
              </Link>
              <div className="dropdown">
                <Link href="/counseling-therapy" onClick={() => setIsOpen(false)}>
                  {t('counseling')}
                </Link>
                <Link href="/coaching-mentoring" onClick={() => setIsOpen(false)}>
                  {t('coaching')}
                </Link>
              </div>
            </li>
            {navItems.slice(2).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={item.active ? 'active' : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="nav-locale-item">
              <LocaleSwitcher />
            </li>
          </ul>

          <div className="header-right">
            <div className="nav-cta-wrap">
              <CalendlyButton href={company.calendlyUrl} className="btn-gold header-cta">
                {t('schedule')}
                <span className="header-cta-detail">&nbsp;{t('consultation')}</span>
              </CalendlyButton>
            </div>
          </div>

          <button
            className="hamburger"
            aria-label="Menu"
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsOpen((value) => !value)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
