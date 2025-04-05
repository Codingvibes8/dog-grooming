import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    const { email, bookingDetails } = await request.json()

    try {
        const data = await resend.emails.send({
            from: 'Paws & Style <booking@pawsandstyle.com>',
            to: email,
            subject: 'Booking Confirmation',
            react: BookingConfirmationEmail({ bookingDetails }),
        })

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}