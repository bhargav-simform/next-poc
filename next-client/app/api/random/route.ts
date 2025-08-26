import { NextResponse } from 'next/server';

export async function GET() {
  const value = Math.floor(Math.random() * 1000);
  return NextResponse.json({ value, ts: Date.now() });
}
