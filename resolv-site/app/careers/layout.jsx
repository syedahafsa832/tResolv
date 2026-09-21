import { Caveat } from 'next/font/google';
import './careers.css';

// Handwriting accent font, loaded only for the careers routes.
const hand = Caveat({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-hand', display: 'swap' });

export default function CareersLayout({ children }) {
  return <div className={`cr ${hand.variable}`}>{children}</div>;
}
