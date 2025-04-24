import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { Resend } from 'resend'

// To prevent multiple instances of Prisma Client in development
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
const prisma = globalForPrisma.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, company, title, message } = body

    // Save to database
    const demoRequest = await prisma.demoRequest.create({
      data: {
        firstName,
        lastName,
        email,
        company,
        title,
        message
      }
    })

    // Send notification email to admin
    await resend.emails.send({
      from: 'KekeliAI <demo@kekeli-ai.com>',
      to: [process.env.ADMIN_EMAIL || 'your-email@example.com'],
      subject: 'New Demo Request',
      html: `
        <h1>New Demo Request</h1>
        <p>Name: ${firstName} ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Company: ${company}</p>
        <p>Title: ${title}</p>
        ${message ? `<p>Message: ${message}</p>` : ''}
      `
    })

    // Send confirmation email to user
    await resend.emails.send({
      from: 'KekeliAI <demo@kekeli-ai.com>',
      to: [email],
      subject: 'Thanks for your interest in KekeliAI',
      html: `
        <h1>Thanks for your interest in KekeliAI</h1>
        <p>Hi ${firstName},</p>
        <p>We've received your demo request and will be in touch shortly.</p>
        <p>Best regards,</p>
        <p>The KekeliAI Team</p>
      `
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Demo request received' 
    })

  } catch (error) {
    console.error('Error processing demo request:', error)
    return NextResponse.json(
      { success: false, message: 'Error processing request' },
      { status: 500 }
    )
  }
} 