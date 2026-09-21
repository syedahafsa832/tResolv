import { Caveat } from 'next/font/google';
import '../careers/careers.css';

export const metadata = { title: 'Team | tResolv', robots: { index: false, follow: false } };

const hand = Caveat({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-hand', display: 'swap' });

export default function TeamLayout({ children }) {
  return <div className={`cr ${hand.variable}`}>{children}</div>;
}
