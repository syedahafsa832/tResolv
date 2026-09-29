import { DM_Mono, Inter } from 'next/font/google';
import { SITE } from '@/lib/site';
import './globals.css';

// Inter is the one typeface for the whole site (body + every heading).
// It is exposed as both --font-inter and, via globals.css, --font-sans so
// legacy rules that reference --font-sans (careers/team pages) follow it too.
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-inter', display: 'swap' });

// Mono is kept only for the careers/team pages' numbering; no homepage rule uses it.
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
    <html lang="en" className={`${inter.variable} ${dmMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
