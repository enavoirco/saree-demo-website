import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const host = process.env.SMTP_HOST
    const port = process.env.SMTP_PORT
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const to =
      process.env.CONTACT_RECIPIENT_EMAIL ||
      process.env.SMTP_USER ||
      process.env.NEXT_PUBLIC_CONTACT_EMAIL

    if (!host || !port || !user || !pass || !to) {
      console.error("Contact form is not fully configured in environment variables.")
      return NextResponse.json(
        { error: "Contact form is not configured on the server." },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host,
      port: Number(port),
      secure: Number(port) === 465,
      auth: {
        user,
        pass,
      },
    })

    const subject = `New message from ${name} via RK Silks contact form`

    const text = [
      `You have received a new message from the contact form:`,
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n")

    const html = `
      <h2>New Contact Form Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `

    await transporter.sendMail({
      from: `"RK Silks Contact" <${user}>`,
      to,
      replyTo: email,
      subject,
      text,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error handling contact form submission:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}

