
'use client';
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <main style={{ padding: 24 }}>
      <h2>Something went wrong.</h2>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{String(error?.message || error)}</pre>
      <button onClick={reset}>Try Again</button>
    </main>
  );
}
