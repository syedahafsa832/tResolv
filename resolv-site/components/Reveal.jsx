'use client';

import { useReveal } from '@/lib/useReveal';

// Shared scroll-reveal wrapper. `delay` (ms) staggers a group of these,
// e.g. heading at 0, subheading at 80, visual at 160; see globals.css
// ".reveal" for the actual transition (opacity + translateY, ~700ms).
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms', ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
