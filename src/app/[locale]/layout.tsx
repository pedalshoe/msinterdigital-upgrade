import type {ReactNode} from 'react';

import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import Script from 'next/script';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {routing} from '@/i18n/routing';

import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{locale: string}>;
};

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      <div className="page-shell">
        <Header />
        {children}
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
