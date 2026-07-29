import { DM_Sans, DM_Mono } from 'next/font/google';
import TrialBanner from '@/components/TrialBanner';
import { SITE } from '@/lib/site';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: 'tResolv | AI Support Employee for Shopify Brands',
  description:
    'tResolv reads your inbox, drafts replies, and resolves routine customer support emails automatically. Every financial action requires your approval.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    siteName: SITE.name,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable}`}>
      <body>
        <TrialBanner />
        {children}
      </body>
    </html>
  );
}
