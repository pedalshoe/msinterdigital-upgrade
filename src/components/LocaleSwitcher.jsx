'use client';

import {useLocale, useTranslations} from 'next-intl';

import {localeMeta} from '@/data/siteData';
import {Link, usePathname} from '@/i18n/navigation';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('LocaleSwitcher');
  const current = localeMeta[locale];

  return (
    <details className="locale-switcher">
      <summary aria-label={t('label')}>
        <span aria-hidden="true">🌐</span>
        <span className="locale-chip">
          <span aria-hidden="true">{current.flag}</span>
          <span className="locale-switcher-current-label">{t(current.labelKey)}</span>
        </span>
      </summary>
      <div className="locale-switcher-menu">
        {Object.entries(localeMeta).map(([code, meta]) => (
          <Link
            key={code}
            href={pathname}
            locale={code}
            className={`locale-switcher-option${code === locale ? ' is-active' : ''}`}
          >
            <span className="locale-chip">
              <span aria-hidden="true">{meta.flag}</span>
              <span>{t(meta.labelKey)}</span>
            </span>
            {code === locale ? <span aria-hidden="true">✓</span> : null}
          </Link>
        ))}
      </div>
    </details>
  );
}
