
'use client';
import { useEffect, useMemo, useState } from 'react';

type Item = { id: number; name: string; value: number };

export default function SlowList() {
  const [items, setItems] = useState<Item[] | null>(null);
  useEffect(() => {
    fetch('/api/items')
      .then((r) => r.json())
      .then((data) => setItems(data));
  }, []);

  if (!items) return <p>Loading 50k items…</p>;

  const total = useMemo(() => {
    let sum = 0;
    for (const it of items) sum += it.value;
    return sum;
  }, [items]);

  return (
    <div>
      <p>Total value: {total}</p>
      <div style={{ height: 500, overflow: 'auto', border: '1px solid #eee' }}>
        {items.map((it) => (
          <div key={it.id} style={{ padding: 8, borderBottom: '1px solid #f0f0f0' }}>
            #{it.id} — {it.name} — {it.value}
          </div>
        ))}
      </div>
    </div>
  );
}
