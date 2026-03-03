import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000
const DEFAULT_RATE_LIMIT_REQUESTS_PER_HOUR = 20

type ContactPayload = {
  name?: string
  email?: string
  company?: string
  message?: string
  interest?: string
}

type SmtpConfig = {
  host: string
  port: number
  secure: boolean
  user: string
  pass: string
  from: string
  to: string
}

const rateLimitStore = new Map<string, { count: number; resetAt: number }>()
let transporter: nodemailer.Transporter | null = null

function parseRateLimitValue() {
  const configured = Number.parseInt(process.env.RATE_LIMIT_REQUESTS_PER_HOUR ?? '', 10)
  if (Number.isFinite(configured) && configured > 0) {
    return configured
  }
  return DEFAULT_RATE_LIMIT_REQUESTS_PER_HOUR
}

function getClientIp(request: NextRequest) {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim()
    if (first) return first
  }

  const realIp = request.headers.get('x-real-ip')?.trim()
  return realIp || 'unknown'
}

function isRateLimited(ip: string, maxRequests: number) {
  const now = Date.now()
  const bucket = rateLimitStore.get(ip)

  if (!bucket || bucket.resetAt <= now) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    })
    return false
  }

  if (bucket.count >= maxRequests) {
    return true
  }

  bucket.count += 1
  rateLimitStore.set(ip, bucket)
  return false
}

function normalizeText(value: unknown, maxLength: number) {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, maxLength)
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function getSmtpConfig(): SmtpConfig | null {
  const host = process.env.SMTP_HOST?.trim()
  const port = Number.parseInt(process.env.SMTP_PORT ?? '', 10)
  const user = process.env.SMTP_USER?.trim()
  const pass = process.env.SMTP_PASS
  const to = process.env.CONTACT_TO_EMAIL?.trim()
  const from = (process.env.CONTACT_FROM_EMAIL?.trim() || user || '').trim()

  if (!host || !Number.isFinite(port) || !user || !pass || !to || !from) {
    return null
  }

  const secureEnv = process.env.SMTP_SECURE?.trim().toLowerCase()
  const secure =
    secureEnv === 'true' || secureEnv === '1' || (secureEnv !== 'false' && port === 465)

  return {
    host,
    port,
    secure,
    user,
    pass,
    from,
    to,
  }
}

function getTransporter(config: SmtpConfig) {
  if (transporter) return transporter

  transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  })

  return transporter
}

export async function POST(request: NextRequest) {
  const maxRequests = parseRateLimitValue()
  const clientIp = getClientIp(request)
  if (isRateLimited(clientIp, maxRequests)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  let body: ContactPayload
  try {
    body = (await request.json()) as ContactPayload
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const name = normalizeText(body.name, 120)
  const email = normalizeText(body.email, 200).toLowerCase()
  const company = normalizeText(body.company, 200)
  const interest = normalizeText(body.interest, 80) || 'general'
  const message = normalizeText(body.message, 5000)

  if (!name) {
    return NextResponse.json({ error: 'Name is required.' }, { status: 400 })
  }
  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 })
  }
  if (!message) {
    return NextResponse.json({ error: 'Message is required.' }, { status: 400 })
  }

  const smtpConfig = getSmtpConfig()
  if (!smtpConfig) {
    console.error('Contact form is not configured: missing SMTP or contact email environment variables.')
    return NextResponse.json(
      { error: 'Contact form is temporarily unavailable. Please email info@meridianso.com directly.' },
      { status: 500 }
    )
  }

  try {
    const userAgent = request.headers.get('user-agent') || 'unknown'
    const nowIso = new Date().toISOString()
    const subject = `New Meridian inquiry: ${interest}`

    const text = [
      'New contact form submission',
      `Submitted at: ${nowIso}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || 'Not provided'}`,
      `Interest: ${interest}`,
      `IP: ${clientIp}`,
      `User agent: ${userAgent}`,
      '',
      'Message:',
      message,
    ].join('\n')

    const html = `
      <h2>New contact form submission</h2>
      <p><strong>Submitted at:</strong> ${escapeHtml(nowIso)}</p>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company || 'Not provided')}</p>
      <p><strong>Interest:</strong> ${escapeHtml(interest)}</p>
      <p><strong>IP:</strong> ${escapeHtml(clientIp)}</p>
      <p><strong>User agent:</strong> ${escapeHtml(userAgent)}</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space: pre-wrap; font-family: inherit;">${escapeHtml(message)}</pre>
    `

    await getTransporter(smtpConfig).sendMail({
      from: smtpConfig.from,
      to: smtpConfig.to,
      replyTo: email,
      subject,
      text,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Failed to send contact email:', error)
    return NextResponse.json(
      { error: 'Could not send message right now. Please try again shortly.' },
      { status: 500 }
    )
  }
}
