
'use client';
export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body style={{ padding: 24 }}>
        <h1>Global Error</h1>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{String(error?.message || error)}</pre>
        <button onClick={reset}>Reload</button>
      </body>
    </html>
  );
}
