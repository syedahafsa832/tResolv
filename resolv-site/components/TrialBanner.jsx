'use client';

import { useEffect, useRef, useState } from 'react';

export default function TrialBanner() {
  const [dismissed, setDismissed] = useState(true);
  const ref = useRef(null);

  const syncHeight = (hidden) => {
    const h = hidden ? 0 : ref.current?.offsetHeight || 0;
    document.documentElement.style.setProperty('--banner-h', `${h}px`);
  };

  useEffect(() => {
    const alreadyDismissed = sessionStorage.getItem('fb_dismissed') === '1';
    setDismissed(alreadyDismissed);
    // Height depends on layout, so sync after paint.
    requestAnimationFrame(() => syncHeight(alreadyDismissed));

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => syncHeight(dismissed), 120);
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      clearTimeout(resizeTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    sessionStorage.setItem('fb_dismissed', '1');
    setDismissed(true);
    syncHeight(true);
  };

  if (dismissed) return null;

  return (
    <div className="founding-banner" ref={ref}>
      <div className="founding-banner-inner">
        <span className="fb-text">🚀 Start your 14-day free trial. No credit card required.</span>
        <a href="https://app.tresolv.online" target="_blank" rel="noopener" className="fb-cta">
          Start free trial →
        </a>
      </div>
      <button type="button" className="fb-close" aria-label="Dismiss banner" onClick={handleClose}>
        ×
      </button>
    </div>
  );
}
