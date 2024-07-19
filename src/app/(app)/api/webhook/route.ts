import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const eventData = await req.json()
  console.log('New meeting created:', eventData)
  return NextResponse.json({ received: true })
}
