// app/.well-known/discord/route.ts - Discord verification for Next.js App Router
import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse('d3c9e5f4096214183571e04e328add58e64ac33f', {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
