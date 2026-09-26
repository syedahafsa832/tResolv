import { DM_Sans, DM_Mono, Fraunces } from 'next/font/google';
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

// Editorial serif used for the hero headline and other emotional statement
// moments; DM Sans stays the workhorse for everything functional/UI. Fraunces
// has the higher-contrast, warm/organic character matching the approved hero
// reference (chosen over Newsreader, which read too plain/text-like at hero size).
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: 'tResolv | AI Support Employee for Shopify Brands',
  description:
    'tResolv reads your inbox, drafts replies, and resolves routine customer support emails automatically. Every financial action requires your approval.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
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
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable} ${fraunces.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
