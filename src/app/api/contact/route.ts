import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { name, email, phone, company, message } = body

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
        }

        const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: 'Logibyte Contact Form <onboarding@resend.dev>',
                to: ['contact@logibyte.ca'], // Your receiving email address
                subject: `New Contact Form Submission from ${name}`,
                reply_to: email,
                html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
            }),
        });

        const data = await resendResponse.json();

        if (!resendResponse.ok) {
            // If Resend returned an error, forward it
            return NextResponse.json({ error: data.message || 'Failed to send email.' }, { status: resendResponse.status });
        }

        return NextResponse.json({ message: 'Email sent successfully!', data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
    }
} 