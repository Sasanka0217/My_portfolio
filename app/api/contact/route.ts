import { NextResponse } from "next/server"

type ContactPayload = {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload
    const name = body?.name?.trim()
    const email = body?.email?.trim()
    const subject = body?.subject?.trim()
    const message = body?.message?.trim()

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 },
      )
    }

    const serviceId =
      process.env.EMAILJS_SERVICE_ID || process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId =
      process.env.EMAILJS_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey =
      process.env.EMAILJS_PUBLIC_KEY || process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      return NextResponse.json(
        { error: "Email service is not configured on the server." },
        { status: 500 },
      )
    }

    const emailJsResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          // Support both old and new EmailJS template placeholders.
          name,
          email,
          from_name: name,
          from_email: email,
          subject,
          title: subject,
          message,
          time: new Date().toLocaleString(),
          to_email: "sasankamp01@gmail.com",
        },
      }),
    })

    if (!emailJsResponse.ok) {
      const details = await emailJsResponse.text()
      return NextResponse.json(
        {
          error: `EmailJS (${emailJsResponse.status}): ${details || emailJsResponse.statusText || "Request failed"}`,
        },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch {
    return NextResponse.json(
      { error: "Unexpected server error while sending email." },
      { status: 500 },
    )
  }
}
