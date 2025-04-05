import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export const metadata = {
    title: "Contact Us | Pawfect Grooming",
    description: "Get in touch with our dog grooming team. Contact us for appointments, questions, or special requests.",
}

export default function ContactPage() {
    return (
        <main className="flex flex-col min-h-screen">
            {/* Contact Form Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="mb-4 bg-rose-100 text-rose-700 hover:bg-rose-200">Contact Us</Badge>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Have questions about our services or want to schedule an appointment? We're here to help!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">
                                            Your Name
                                        </label>
                                        <Input id="name" placeholder="John Doe" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">
                                            Email Address
                                        </label>
                                        <Input id="email" type="email" placeholder="john@example.com" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium">
                                        Phone Number
                                    </label>
                                    <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium">
                                        Subject
                                    </label>
                                    <Input id="subject" placeholder="Appointment Request" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us about your pet and what services you're interested in..."
                                        rows={5}
                                        required
                                    />
                                </div>
                                <Button type="submit" className="w-full bg-rose-500 hover:bg-rose-600">
                                    Send Message
                                    <Send className="ml-2 h-5 w-5" />
                                </Button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                                <p className="text-gray-600 mb-8">
                                    We'd love to hear from you! Reach out using any of the methods below, or fill out the form and we'll
                                    get back to you as soon as possible.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                <Card className="border-none shadow-md">
                                    <CardContent className="p-6 flex items-start">
                                        <MapPin className="h-6 w-6 text-rose-500 mr-4 mt-1" />
                                        <div>
                                            <h3 className="font-bold mb-2">Our Location</h3>
                                            <p className="text-gray-600">
                                                123 Grooming Street
                                                <br />
                                                Pawville, CA 90210
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-none shadow-md">
                                    <CardContent className="p-6 flex items-start">
                                        <Phone className="h-6 w-6 text-rose-500 mr-4 mt-1" />
                                        <div>
                                            <h3 className="font-bold mb-2">Phone Number</h3>
                                            <p className="text-gray-600">
                                                <a href="tel:+1234567890" className="hover:text-rose-500">
                                                    (123) 456-7890
                                                </a>
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-none shadow-md">
                                    <CardContent className="p-6 flex items-start">
                                        <Mail className="h-6 w-6 text-rose-500 mr-4 mt-1" />
                                        <div>
                                            <h3 className="font-bold mb-2">Email Address</h3>
                                            <p className="text-gray-600">
                                                <a href="mailto:info@pawfectgrooming.com" className="hover:text-rose-500">
                                                    info@pawfectgrooming.com
                                                </a>
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-none shadow-md">
                                    <CardContent className="p-6 flex items-start">
                                        <Clock className="h-6 w-6 text-rose-500 mr-4 mt-1" />
                                        <div>
                                            <h3 className="font-bold mb-2">Business Hours</h3>
                                            <ul className="text-gray-600 space-y-1">
                                                <li className="flex justify-between">
                                                    <span>Monday - Friday:</span>
                                                    <span>8:00 AM - 6:00 PM</span>
                                                </li>
                                                <li className="flex justify-between">
                                                    <span>Saturday:</span>
                                                    <span>9:00 AM - 5:00 PM</span>
                                                </li>
                                                <li className="flex justify-between">
                                                    <span>Sunday:</span>
                                                    <span>Closed</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Find Us</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We're conveniently located in the heart of Pawville, with easy access and parking.
                        </p>
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-lg h-[400px] bg-gray-200 flex items-center justify-center">
                        {/* This would be replaced with an actual map component in a real implementation */}
                        <div className="text-center p-8">
                            <MapPin className="h-12 w-12 text-rose-500 mx-auto mb-4" />
                            <p className="text-lg font-medium">Map would be displayed here</p>
                            <p className="text-gray-600">123 Grooming Street, Pawville, CA 90210</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="mb-4 bg-rose-100 text-rose-700 hover:bg-rose-200">FAQ</Badge>
                        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Find quick answers to common questions about our services and policies.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">How do I schedule an appointment?</h3>
                            <p className="text-gray-600">
                                You can schedule an appointment by calling us, using our online booking system, or filling out the
                                contact form on this page.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">What should I bring to my dog's appointment?</h3>
                            <p className="text-gray-600">
                                Just bring your dog! If your pet has special needs or requires specific products, you can bring those
                                along as well.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">How long will the grooming take?</h3>
                            <p className="text-gray-600">
                                Grooming sessions typically take 1-3 hours depending on your dog's size, coat condition, and the
                                services requested.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">Do you offer mobile grooming services?</h3>
                            <p className="text-gray-600">
                                Currently, we provide all our services at our salon location. We do not offer mobile grooming at this
                                time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

