import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const supabase = createRouteHandlerClient({ cookies })
    const data = await request.json()

    const { data: availability, error: availabilityError } = await supabase
        .from('availability')
        .select('*')
        .eq('date', data.booking_date)
        .single()

    if (availabilityError || !availability) {
        return NextResponse.json(
            { error: 'No availability for selected date' },
            { status: 400 }
        )
    }

    const { data: existingBookings, error: bookingError } = await supabase
        .from('bookings')
        .select('*')
        .eq('booking_date', data.booking_date)

    if (bookingError) {
        return NextResponse.json(
            { error: 'Error checking existing bookings' },
            { status: 500 }
        )
    }

    if (existingBookings.length >= availability.max_slots) {
        return NextResponse.json(
            { error: 'No available slots for selected time' },
            { status: 400 }
        )
    }

    const { data: newBooking, error } = await supabase
        .from('bookings')
        .insert([data])
        .select()

    if (error) {
        return NextResponse.json(
            { error: 'Error creating booking' },
            { status: 500 }
        )
    }

    return NextResponse.json(newBooking[0])
}