'use client';

import { useEffect, useRef, useState } from 'react';

export default function TrialBanner() {
  const [dismissed, setDismissed] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    setDismissed(sessionStorage.getItem('fb_dismissed') === '1');
  }, []);

  // Re-syncs whenever `dismissed` changes, so this always runs after React
  // has actually committed the banner to the DOM (unlike a one-shot rAF
  // scheduled in the same effect as the setDismissed call above, which can
  // fire before that state update is reflected in the DOM and read a null
  // ref, permanently locking --banner-h at 0 while the banner is visible).
  useEffect(() => {
    const syncHeight = () => {
      const h = dismissed ? 0 : ref.current?.offsetHeight || 0;
      document.documentElement.style.setProperty('--banner-h', `${h}px`);
    };
    syncHeight();
    if (dismissed) return;

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(syncHeight, 120);
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      clearTimeout(resizeTimer);
    };
  }, [dismissed]);

  const handleClose = () => {
    sessionStorage.setItem('fb_dismissed', '1');
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <div className="founding-banner" ref={ref}>
      <div className="founding-banner-inner">
        <span className="fb-text">Start your 14-day free trial. No credit card required.</span>
        <a href="https://app.tresolv.online" target="_blank" rel="noopener" className="fb-cta">
          Start free trial
        </a>
      </div>
      <button type="button" className="fb-close" aria-label="Dismiss banner" onClick={handleClose}>
        ×
      </button>
    </div>
  );
}
