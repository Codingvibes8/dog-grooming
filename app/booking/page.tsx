'use client'

import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function BookingPage() {
    const router = useRouter()
    const [selectedTime, setSelectedTime] = useState<string | null>(null)

    const mutation = useMutation({
        mutationFn: async (values: z.infer<typeof formSchema>) => {
            const response = await fetch('/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            })

            if (!response.ok) {
                const error = await response.json()
                throw new Error(error.error)
            }

            return response.json()
        },
        onSuccess: () => {
            toast.success('Booking confirmed! Check your email for details.')
            router.push('/confirmation')
        },
        onError: (error: Error) => {
            toast.error(error.message)
        }
    })

    const formSchema = z.object({
        serviceId: z.string().min(1),
        userEmail: z.string().email(),
        petName: z.string().min(2),
        bookingDate: z.date(),
        startTime: z.string(),
        endTime: z.string(),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            serviceId: '',
            userEmail: '',
            petName: '',
        }
    })

    const handleTimeSelect = (time: string) => {
        const [hours, minutes] = time.split(':')
        const date = form.getValues('bookingDate')
        const start = new Date(date.setHours(parseInt(hours), parseInt(minutes), 0))
        const end = new Date(start.getTime() + 30 * 60000) // 30 minutes

        form.setValue('startTime', format(start, 'HH:mm:ss'))
        form.setValue('endTime', format(end, 'HH:mm:ss'))
        setSelectedTime(time)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit((values) => mutation.mutate(values))}>
                {/* Service Selection */}
                <FormField
                    control={form.control}
                    name="serviceId"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Select Service</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {services.map((service) => (
                                        <SelectItem key={service.id} value={service.id}>
                                            {service.name} ({service.duration} mins)
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Date and Time Selection */}
                <FormField
                    control={form.control}
                    name="bookingDate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Select Date & Time</FormLabel>
                            <AvailabilityChecker
                                serviceId={form.watch('serviceId')}
                                onDateSelect={field.onChange}
                                onTimeSelect={handleTimeSelect}
                            />
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Other form fields */}

                <Button
                    type="submit"
                    disabled={mutation.isPending}
                    className="w-full mt-6"
                >
                    {mutation.isPending ? 'Processing...' : 'Confirm Booking'}
                </Button>
            </form>
        </Form>
    )
}