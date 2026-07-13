import type {ReactNode} from 'react';

export const metadata = {
  title: 'Ms. Interdigital',
  description:
    'Counseling, coaching, educational products, and wellness resources from Ms. Interdigital.'
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
