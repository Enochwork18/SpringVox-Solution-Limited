import { NextRequest, NextResponse } from 'next/server'
import { checkRateLimit } from '@/lib/api/rateLimit'
import { sanitize, sanitizeAll } from '@/lib/api/sanitize'
import { isValidEmail } from '@/lib/api/emailValidator'
import { getCorsHeaders, isOriginAllowed, handleOptions } from '@/lib/api/cors'

export interface WaitlistSubmission {
  organisationName: string
  contactName: string
  email: string
  industry?: string
  teamSize?: string
  useCase?: string
  submittedAt: string
}

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
      return NextResponse.json({ success: true, message: 'Application received.' }, { headers: corsHeaders })
    }

    const body = sanitizeAll(raw) as Partial<WaitlistSubmission>

    const required = ['organisationName', 'contactName', 'email']
    for (const field of required) {
      if (!body[field as keyof WaitlistSubmission]?.toString().trim()) {
        return NextResponse.json(
          { success: false, error: `${field} is required` },
          { status: 400, headers: corsHeaders }
        )
      }
    }

    const email = sanitize(body.email || '')
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400, headers: corsHeaders }
      )
    }

    const submission: WaitlistSubmission = {
      organisationName: sanitize(body.organisationName!),
      contactName: sanitize(body.contactName!),
      email: email.toLowerCase(),
      industry: body.industry?.trim() || 'Not specified',
      teamSize: body.teamSize?.trim() || 'Not specified',
      useCase: body.useCase?.trim() || 'Not specified',
      submittedAt: new Date().toISOString(),
    }

    console.log('[Waitlist] New pilot programme application:', submission)

    if (process.env.RESEND_API_KEY) {
      try {
        await sendWaitlistEmail(submission)
      } catch (emailError) {
        console.error('[Waitlist] Email notification failed:', emailError)
      }
    }

    if (process.env.NOTION_TOKEN && process.env.NOTION_WAITLIST_DB_ID) {
      try {
        await saveToNotion(submission)
      } catch (notionError) {
        console.error('[Waitlist] Notion save failed:', notionError)
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Application received. We will be in touch shortly.',
    }, { headers: corsHeaders })
  } catch (error) {
    console.error('[Waitlist] Unexpected error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error. Please try again.' },
      { status: 500, headers: corsHeaders }
    )
  }
}

async function sendWaitlistEmail(data: WaitlistSubmission) {
  const notifyEmail = process.env.WAITLIST_NOTIFY_EMAIL || 'hello@springvox.ai'
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'noreply@springvox.com'

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `SpringVox Waitlist <${fromEmail}>`,
      to: [notifyEmail],
      subject: `New Pilot Application: ${data.organisationName}`,
      html: `
        <h2>New ReKallIQ Pilot Application</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #ddd"><strong>Organisation</strong></td><td style="padding:8px;border:1px solid #ddd">${data.organisationName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd"><strong>Contact</strong></td><td style="padding:8px;border:1px solid #ddd">${data.contactName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd"><strong>Email</strong></td><td style="padding:8px;border:1px solid #ddd">${data.email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd"><strong>Industry</strong></td><td style="padding:8px;border:1px solid #ddd">${data.industry}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd"><strong>Team Size</strong></td><td style="padding:8px;border:1px solid #ddd">${data.teamSize}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd"><strong>Use Case</strong></td><td style="padding:8px;border:1px solid #ddd">${data.useCase}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd"><strong>Submitted</strong></td><td style="padding:8px;border:1px solid #ddd">${data.submittedAt}</td></tr>
        </table>
      `,
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Resend API error: ${error}`)
  }
}

async function saveToNotion(data: WaitlistSubmission) {
  const response = await fetch('https://api.notion.com/v1/pages', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28',
    },
    body: JSON.stringify({
      parent: { database_id: process.env.NOTION_WAITLIST_DB_ID },
      properties: {
        'Organisation': { title: [{ text: { content: data.organisationName } }] },
        'Contact Name': { rich_text: [{ text: { content: data.contactName } }] },
        'Email': { email: data.email },
        'Industry': { select: { name: data.industry || 'Other' } },
        'Team Size': { select: { name: data.teamSize || 'Not specified' } },
        'Use Case': { rich_text: [{ text: { content: data.useCase || '' } }] },
        'Status': { select: { name: 'New' } },
      },
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Notion API error: ${error}`)
  }
}
