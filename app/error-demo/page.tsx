'use client';
import { useState } from 'react';

export default function ErrorDemo() {
  const [boom, setBoom] = useState(false);
  if (boom) {
    throw new Error('Boom! Simulated rendering error.');
  }
  return (
    <main style={{ padding: 24 }}>
      <h2>Error Demo</h2>
      <button onClick={() => setBoom(true)}>Trigger Error</button>
      <p>Mission: implement error.tsx/global-error.tsx and external logging.</p>
    </main>
  );
}
