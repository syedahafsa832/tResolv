'use client';

import { useEffect, useRef, useState } from 'react';

const STATS = [
  { target: 0, prefix: '$', label: 'unauthorized financial actions' },
  { target: 10, suffix: ' min', label: 'to go live' },
];

function CountUp({ target, decimals = 0, prefix = '', suffix = '', active }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1200;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);

  return <>{prefix}{value.toFixed(decimals)}{suffix}</>;
}

export default function HeroStats() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="hero-band" ref={ref}>
      <div className="hero-band-inner">
        <div className="hb-item">
          <div className="hb-val">Respond in seconds</div>
          <div className="hb-label">with Luna</div>
        </div>
        {STATS.map((stat) => (
          <div key={stat.label} className="hb-item">
            <div className="hb-val hb-cu"><CountUp {...stat} active={active} /></div>
            <div className="hb-label">{stat.label}</div>
          </div>
        ))}
        <div className="hb-item">
          <div className="hb-val">24/7</div>
          <div className="hb-label">chat + email coverage</div>
        </div>
      </div>
    </div>
  );
}
