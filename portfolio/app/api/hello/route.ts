import { NextResponse } from 'next/server';
export const dynamic = 'force-static'
// res.status(200).json({ message: 'Hello from Next.js!' })

export async function GET() {
  return NextResponse.json({ message: 'Hello, API with TypeScript!' });
  // return NextResponse.json({ message: 'Hello, API with TypeScript!' }, { status: 200 });
}