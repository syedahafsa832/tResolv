'use client';

import { useEffect, useState } from 'react';
import { useReveal } from '@/lib/useReveal';

// Counts down from the starting number a few steps once the inbox scrolls
// into view: a small, honest visual cue that Luna is working through the
// same sample inbox shown below it, not a fabricated live metric. Runs
// once (useReveal never re-fires) and settles on `end`.
export default function UnreadCounter({ start = 23, end = 20, className }) {
  const [ref, visible] = useReveal({ threshold: 0.6 });
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!visible || start === end) return;
    const steps = start - end;
    const stepDelay = 450;
    const timers = Array.from({ length: steps }, (_, i) =>
      setTimeout(() => setCount(start - (i + 1)), 500 + i * stepDelay)
    );
    return () => timers.forEach(clearTimeout);
  }, [visible, start, end]);

  return (
    <span ref={ref} className={className}>
      {count}
    </span>
  );
}
