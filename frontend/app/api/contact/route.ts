import { NextRequest, NextResponse } from 'next/server'
import { checkRateLimit } from '@/lib/api/rateLimit'
import { sanitize, sanitizeAll } from '@/lib/api/sanitize'
import { isValidEmail } from '@/lib/api/emailValidator'
import { getCorsHeaders, isOriginAllowed, handleOptions } from '@/lib/api/cors'

export async function OPTIONS(req: NextRequest) {
  return handleOptions(req.headers.get('origin'))
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin')
  const corsHeaders = getCorsHeaders(origin)

  if (origin && !isOriginAllowed(origin)) {
    return NextResponse.json({ success: false, error: 'Origin not allowed' }, { status: 403, headers: corsHeaders })
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  const rateCheck = checkRateLimit(ip)
  if (!rateCheck.allowed) {
    return NextResponse.json(
      { success: false, error: 'Too many requests. Please try again later.' },
      { status: 429, headers: { ...corsHeaders, 'Retry-After': String(Math.ceil(rateCheck.resetInMs / 1000)) } }
    )
  }

  const cl = req.headers.get('content-length')
  if (cl && parseInt(cl) > 10240) {
    return NextResponse.json({ success: false, error: 'Payload too large' }, { status: 413, headers: corsHeaders })
  }

  try {
    const raw = await req.json() as Record<string, unknown>

    const website = raw.website as string | undefined
    if (website) {
      return NextResponse.json({ success: true, message: 'Message received.' }, { headers: corsHeaders })
    }

    const body = sanitizeAll(raw)
    const { name, email, company, service, message } = body as Record<string, string>

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required' },
        { status: 400, headers: corsHeaders }
      )
    }

    const cleanEmail = sanitize(email)
    if (!isValidEmail(cleanEmail)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400, headers: corsHeaders }
      )
    }

    console.log('[Contact] New message:', { name, email: cleanEmail, company, service, message })

    if (process.env.RESEND_API_KEY) {
      try {
        const notifyEmail = process.env.WAITLIST_NOTIFY_EMAIL || 'hello@springvox.ai'
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: `SpringVox Contact <${process.env.RESEND_FROM_EMAIL || 'noreply@springvox.com'}>`,
            to: [notifyEmail],
            reply_to: cleanEmail,
            subject: `New Contact: ${name} (${company || 'Individual'})`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${cleanEmail}</p>
              <p><strong>Company:</strong> ${company || 'Not provided'}</p>
              <p><strong>Service Interest:</strong> ${service || 'Not specified'}</p>
              <p><strong>Message:</strong><br/>${message}</p>
              <p><strong>Submitted:</strong> ${new Date().toISOString()}</p>
            `,
          }),
        })
        if (!response.ok) {
          throw new Error(`Resend API error: ${await response.text()}`)
        }
      } catch (emailError) {
        console.error('[Contact] Email notification failed:', emailError)
      }
    }

    return NextResponse.json({ success: true, message: 'Message received. We will be in touch shortly.' }, { headers: corsHeaders })
  } catch (error) {
    console.error('[Contact] Error:', error)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500, headers: corsHeaders })
  }
}
