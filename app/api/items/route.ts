
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export async function GET() {
  const size = 50000;
  const items = Array.from({ length: size }).map((_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    value: Math.floor(Math.random() * 100000),
  }));
  return NextResponse.json(items, { headers: { 'Cache-Control': 'no-store' } });
}
