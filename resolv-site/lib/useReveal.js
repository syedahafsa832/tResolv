'use client';

import { useEffect, useRef, useState } from 'react';

// One scroll-reveal primitive for the whole site: fires once when the
// element first enters the viewport, then disconnects: never re-triggers
// on scrolling back up/down past it. Respects prefers-reduced-motion by
// reporting "already visible" immediately, so reduced-motion users get the
// final state with no transform/opacity animation at all.
export function useReveal({ rootMargin = '0px 0px -10% 0px', threshold = 0.1 } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return [ref, visible];
}
