
const images = Array.from({ length: 30 }).map((_, i) => `https://picsum.photos/seed/${i}/1200/800`);

export default function SlowImages() {
  return (
    <main style={{ padding: 24 }}>
      <h2>Slow Images (CLS & LCP challenges)</h2>
      {images.map((src, i) => (
        <div key={i} style={{ marginBottom: 16 }}>
          <img src={src} alt={`random-${i}`} />
        </div>
      ))}
    </main>
  );
}
