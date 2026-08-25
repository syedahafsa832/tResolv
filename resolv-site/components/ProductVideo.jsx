export default function ProductVideo() {
  return (
    <section className="section" style={{ paddingBottom: 0 }}>
      <div className="wrap">
        <div className="product-video-wrap">
          <video
            className="product-video"
            src="/video/tresolv-product-demo.mp4"
            autoPlay
            muted
            playsInline
            controls
            preload="metadata"
          />
        </div>
      </div>
    </section>
  );
}
