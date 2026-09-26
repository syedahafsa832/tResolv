'use client';

import { useEffect, useRef, useState } from 'react';

// The video sits just below the 100vh hero, so on initial load it's off-screen.
// The <video> element is deferred until it's about to scroll into view so its
// fetch doesn't compete with the hero's critical-path requests. Playback starts
// only once the video is mostly in view AND the visitor has stopped scrolling,
// and pauses when it leaves the viewport. Browsers only allow autoplay when
// muted, so a hint invites the visitor to turn the sound on.
const SETTLE_MS = 400;

export default function ProductVideo() {
  const wrapRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [muted, setMuted] = useState(true);

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

  useEffect(() => {
    const wrap = wrapRef.current;
    const video = videoRef.current;
    if (!shouldLoad || !wrap || !video) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let inView = false;
    let timer = null;
    let autoPaused = false;
    let userPaused = false;

    const settle = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (!inView || userPaused || video.ended || reduceMotion) return;
        video.play().catch(() => {});
      }, SETTLE_MS);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView) {
          settle();
        } else {
          clearTimeout(timer);
          if (!video.paused) {
            autoPaused = true;
            video.pause();
          }
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(wrap);

    const onScroll = () => {
      if (inView) settle();
    };
    const onPlay = () => {
      userPaused = false;
    };
    const onPause = () => {
      if (autoPaused) {
        autoPaused = false;
        return;
      }
      userPaused = !video.ended;
    };
    const onVolume = () => setMuted(video.muted || video.volume === 0);

    window.addEventListener('scroll', onScroll, { passive: true });
    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    video.addEventListener('volumechange', onVolume);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('volumechange', onVolume);
    };
  }, [shouldLoad]);

  const unmute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    if (video.volume === 0) video.volume = 1;
    if (video.paused && !video.ended) video.play().catch(() => {});
  };

  return (
    <section id="product-demo" className="section" style={{ paddingBottom: 0 }}>
      <div className="wrap">
        <div style={{ maxWidth: 760, margin: '0 auto 40px' }}>
          <div className="eyebrow"><span className="eyebrow-dot" />Real product demo</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(26px, 3vw, 36px)' }}>Watch Luna resolve a ticket.</h2>
          <p className="section-sub" style={{ maxWidth: 'none' }}>
            A customer asks. Luna checks what actually happened. Then she handles the next step.
          </p>
        </div>
        <div className="product-video-wrap" ref={wrapRef} style={{ aspectRatio: '16 / 9' }}>
          {!shouldLoad && (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="product-video" src="/video/poster.jpg" alt="" aria-hidden="true" />
          )}
          {shouldLoad && (
            <>
              <video
                ref={videoRef}
                className="product-video"
                src="/video/tresolv-product-video.mp4"
                poster="/video/poster.jpg"
                muted
                playsInline
                controls
                preload="metadata"
              />
              {muted && (
                <button type="button" className="product-video-hint" onClick={unmute}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M11 5 6 9H3v6h3l5 4V5Z" fill="currentColor" stroke="none" />
                    <path d="M15.5 8.5a5 5 0 0 1 0 7" />
                    <path d="M18.5 5.5a9 9 0 0 1 0 13" />
                  </svg>
                  Turn your volume up
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
