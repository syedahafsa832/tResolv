export default function HeroVideo() {
  return (
    <div className="hero-video-wrap">
      <video
        className="hero-video"
        src="/video/tresolv-product-demo.mp4"
        autoPlay
        muted
        playsInline
        controls
        preload="metadata"
      />
    </div>
  );
}
