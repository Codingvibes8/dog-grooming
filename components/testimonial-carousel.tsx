"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=100&width=100",
        pet: "Max",
        petType: "Golden Retriever",
        content:
            "Pawfect Grooming is amazing! My Golden Retriever Max always comes back looking and smelling wonderful. The groomers are so patient with him and he actually enjoys going there!",
        rating: 5,
    },
    {
        id: 2,
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=100&width=100",
        pet: "Bella",
        petType: "Shih Tzu",
        content:
            "I've been taking my Shih Tzu to Pawfect Grooming for over a year now. They always do a fantastic job with her coat and are so gentle with her. Highly recommend!",
        rating: 5,
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        avatar: "/placeholder.svg?height=100&width=100",
        pet: "Charlie",
        petType: "Poodle",
        content:
            "The team at Pawfect Grooming is exceptional. They know exactly how to handle my anxious poodle and always give him the perfect cut. Worth every penny!",
        rating: 5,
    },
    {
        id: 4,
        name: "David Wilson",
        avatar: "/placeholder.svg?height=100&width=100",
        pet: "Luna",
        petType: "Husky",
        content:
            "Finding a groomer who can handle my Husky's shedding was a challenge until I discovered Pawfect Grooming. They do an incredible job and Luna loves them!",
        rating: 4,
    },
    {
        id: 5,
        name: "Jessica Taylor",
        avatar: "/placeholder.svg?height=100&width=100",
        pet: "Cooper",
        petType: "Labrador",
        content:
            "I appreciate how the staff takes the time to understand my preferences for Cooper's grooming. They're professional, friendly, and my Lab always looks amazing after his appointments.",
        rating: 5,
    },
]

export default function TestimonialCarousel() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [autoplay, setAutoplay] = useState(true)

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    useEffect(() => {
        if (!autoplay) return

        const interval = setInterval(() => {
            nextTestimonial()
        }, 5000)

        return () => clearInterval(interval)
    }, [autoplay, activeIndex])

    return (
        <div className="relative">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                            <Card className="border-none shadow-lg">
                                <CardContent className="p-6 md:p-8">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                                            <Image
                                                src={testimonial.avatar || "/placeholder.svg"}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={cn(
                                                        "h-5 w-5",
                                                        i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300",
                                                    )}
                                                />
                                            ))}
                                        </div>
                                        <blockquote className="mb-4 text-gray-700">"{testimonial.content}"</blockquote>
                                        <div className="mt-2">
                                            <h4 className="font-bold">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-500">
                                                Owner of {testimonial.pet} ({testimonial.petType})
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-6 gap-2">
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    onClick={() => {
                        prevTestimonial()
                        setAutoplay(false)
                    }}
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft className="h-5 w-5" />
                </Button>
                {testimonials.map((_, index) => (
                    <Button
                        key={index}
                        variant="ghost"
                        size="sm"
                        className={cn("w-2 h-2 p-0 rounded-full", activeIndex === index ? "bg-rose-500" : "bg-gray-300")}
                        onClick={() => {
                            setActiveIndex(index)
                            setAutoplay(false)
                        }}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    onClick={() => {
                        nextTestimonial()
                        setAutoplay(false)
                    }}
                    aria-label="Next testimonial"
                >
                    <ChevronRight className="h-5 w-5" />
                </Button>
            </div>
        </div>
    )
}

