import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  console.log('Waitlist submission:', body)
  // TODO: Connect to database / email service in backend phase
  return NextResponse.json({ success: true, message: 'Added to waitlist' })
}
