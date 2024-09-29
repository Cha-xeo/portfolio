import { NextResponse } from 'next/server';
export const dynamic = 'force-static'
// res.status(200).json({ message: 'Hello from Next.js!' })

export async function GET(request: Request) {
  return new Response('Hello, Next.js!', {
    status: 200,
  })
}