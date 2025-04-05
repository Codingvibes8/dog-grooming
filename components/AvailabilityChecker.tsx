'use client'

import { useEffect, useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { addDays, format, isAfter, isBefore } from 'date-fns'
import { supabase } from '@/lib/supabase'

export function AvailabilityChecker({ serviceId }: { serviceId: string }) {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [availableSlots, setAvailableSlots] = useState<string[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchAvailability = async () => {
            if (!date) return

            setLoading(true)
            const { data, error } = await supabase
                .from('availability')
                .select('*')
                .eq('date', format(date, 'yyyy-MM-dd'))

            if (error || !data?.length) {
                setAvailableSlots([])
                setLoading(false)
                return
            }

            const availability = data[0]
            const start = new Date(`${availability.date}T${availability.start_time}`)
            const end = new Date(`${availability.date}T${availability.end_time}`)

            const { data: bookings } = await supabase
                .from('bookings')
                .select('*')
                .eq('booking_date', format(date, 'yyyy-MM-dd'))

            const slots = []
            let current = start

            while (isBefore(current, end)) {
                const slotEnd = new Date(current.getTime() + 30 * 60000)

                const overlappingBookings = bookings?.filter(b => {
                    const bookingStart = new Date(`${b.booking_date}T${b.start_time}`)
                    const bookingEnd = new Date(`${b.booking_date}T${b.end_time}`)
                    return isBefore(current, bookingEnd) && isAfter(slotEnd, bookingStart)
                }) || []

                if (overlappingBookings.length < availability.max_slots) {
                    slots.push(format(current, 'HH:mm'))
                }

                current = new Date(current.getTime() + 30 * 60000)
            }

            setAvailableSlots(slots)
            setLoading(false)
        }

        fetchAvailability()
    }, [date, serviceId])

    return (
        <div className="space-y-4">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) => date < addDays(new Date(), -1)}
            />

            {loading ? (
                <div className="text-muted-foreground">Loading available slots...</div>
            ) : availableSlots.length > 0 ? (
                <div className="grid grid-cols-3 gap-2">
                    {availableSlots.map((slot) => (
                        <Button
                            key={slot}
                            variant="outline"
                            className="h-12"
                            onClick={() => handleTimeSelect(slot)}
                        >
                            {slot}
                        </Button>
                    ))}
                </div>
            ) : (
                <div className="text-destructive">No available slots for this date</div>
            )}
        </div>
    )
}