
'use client';
import { Chart, registerables } from 'chart.js';
import { useEffect, useRef } from 'react';
Chart.register(...registerables);

export default function BundleBloat() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    const ctx = ref.current.getContext('2d')!;
    const c = new Chart(ctx, {
      type: 'line',
      data: {
        labels: Array.from({ length: 100 }, (_, i) => i),
        datasets: [{ label: 'Heavy Chart', data: Array.from({ length: 100 }, () => Math.random()) }],
      },
    });
    return () => c.destroy();
  }, []);
  return (
    <main style={{ padding: 24 }}>
      <h2>Bundle Bloat (Code-splitting mission)</h2>
      <canvas ref={ref} width={800} height={300} />
    </main>
  );
}
