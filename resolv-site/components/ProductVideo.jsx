'use client';

import { useEffect, useRef, useState } from 'react';

// The demo video is a large (~90MB) screen recording. It sits just below the
// 100vh hero, so on initial load it's off-screen, but a bare <video autoPlay>
// still has the browser start fetching it immediately, competing with the
// hero's critical-path requests (fonts, JS) for bandwidth. Deferring the
// element itself until it's about to scroll into view keeps that fetch from
// starting until it's actually relevant. The placeholder shares the video's
// real 16:9 intrinsic ratio so swapping it in causes no layout shift.
export default function ProductVideo() {
  const wrapRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="product-demo" className="section" style={{ paddingBottom: 0 }}>
      <div className="wrap">
        <div className="product-video-wrap" ref={wrapRef} style={{ aspectRatio: '16 / 9' }}>
          {shouldLoad && (
            <video
              className="product-video"
              src="/video/tresolv-product-demo.mp4"
              autoPlay
              muted
              playsInline
              controls
              preload="metadata"
            />
          )}
        </div>
      </div>
    </section>
  );
}
