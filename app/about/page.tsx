import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Heart, Award, Clock, Scissors, Shield, Sparkles } from "lucide-react"

export const metadata = {
    title: "About Us | Pawfect Grooming",
    description:
        "Learn about our professional dog grooming team, our story, and our commitment to providing the best care for your furry friends.",
}

export default function AboutPage() {
    return (
        <main className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-[40vh] min-h-[300px]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/placeholder.svg?height=800&width=1920"
                        alt="Our grooming team"
                        fill
                        priority
                        className="object-cover brightness-[0.85]"
                    />
                </div>
                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
                    <div className="max-w-2xl space-y-4">
                        <Badge className="bg-rose-500 hover:bg-rose-600 px-4 py-1 text-white">About Us</Badge>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-md">
                            Our Story & Our Team
                        </h1>
                        <p className="text-lg text-white drop-shadow-md">
                            Meet the passionate professionals behind Pawfect Grooming and learn about our journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge className="mb-4 bg-rose-100 text-rose-700 hover:bg-rose-200">Our Story</Badge>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Passionate About Pets Since 2010</h2>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    Pawfect Grooming was founded in 2010 by Jane Smith, a certified professional groomer with over 15
                                    years of experience and a lifelong love for animals. What started as a small, one-person operation has
                                    grown into a team of dedicated professionals who share Jane's passion for pet care.
                                </p>
                                <p>
                                    Our mission is simple: to provide exceptional grooming services that prioritize your pet's comfort,
                                    safety, and well-being. We believe that grooming is not just about making your dog look good—it's
                                    about contributing to their overall health and happiness.
                                </p>
                                <p>
                                    Over the years, we've had the privilege of serving thousands of dogs and their owners, building
                                    lasting relationships based on trust and quality service. We continuously educate ourselves on the
                                    latest grooming techniques and pet care practices to ensure we're providing the best possible
                                    experience for your furry family members.
                                </p>
                            </div>
                            <div className="mt-8">
                                <Button className="bg-rose-500 hover:bg-rose-600">
                                    Book an Appointment
                                    <Calendar className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/placeholder.svg?height=1000&width=800"
                                alt="Pawfect Grooming founder with a dog"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="mb-4 bg-rose-100 text-rose-700 hover:bg-rose-200">Our Values</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Drives Us Every Day</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our core values guide everything we do at Pawfect Grooming, from how we treat your pets to how we run our
                            business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="flex flex-col items-center text-center">
                                    <Heart className="h-12 w-12 text-rose-500 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Compassion</h3>
                                    <p className="text-gray-600">
                                        We treat every pet with kindness and understanding, recognizing that each has unique needs and
                                        personalities.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="flex flex-col items-center text-center">
                                    <Award className="h-12 w-12 text-rose-500 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Excellence</h3>
                                    <p className="text-gray-600">
                                        We strive for excellence in every aspect of our service, from the quality of our grooming to our
                                        customer care.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="flex flex-col items-center text-center">
                                    <Shield className="h-12 w-12 text-rose-500 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Safety</h3>
                                    <p className="text-gray-600">
                                        The safety and well-being of your pet is our top priority, guiding all our procedures and practices.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="flex flex-col items-center text-center">
                                    <Clock className="h-12 w-12 text-rose-500 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Reliability</h3>
                                    <p className="text-gray-600">
                                        We value your time and trust, which is why we're committed to consistency and dependability in our
                                        service.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="flex flex-col items-center text-center">
                                    <Scissors className="h-12 w-12 text-rose-500 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Expertise</h3>
                                    <p className="text-gray-600">
                                        Our team is continuously learning and improving our skills to provide the best grooming experience
                                        possible.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="flex flex-col items-center text-center">
                                    <Sparkles className="h-12 w-12 text-rose-500 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Personalization</h3>
                                    <p className="text-gray-600">
                                        We recognize that each pet and owner has unique preferences, and we tailor our services accordingly.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="mb-4 bg-rose-100 text-rose-700 hover:bg-rose-200">Our Team</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Grooming Experts</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our team of certified professional groomers brings years of experience and a genuine love for animals to
                            every appointment.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Team Member 1 */}
                        <div className="flex flex-col items-center">
                            <div className="relative w-64 h-64 rounded-full overflow-hidden mb-6">
                                <Image
                                    src="/placeholder.svg?height=400&width=400"
                                    alt="Jane Smith - Founder & Head Groomer"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold">Jane Smith</h3>
                            <p className="text-rose-500 mb-2">Founder & Head Groomer</p>
                            <p className="text-center text-gray-600 max-w-xs">
                                With over 15 years of experience, Jane specializes in breed-specific cuts and handling anxious dogs.
                            </p>
                        </div>

                        {/* Team Member 2 */}
                        <div className="flex flex-col items-center">
                            <div className="relative w-64 h-64 rounded-full overflow-hidden mb-6">
                                <Image
                                    src="/placeholder.svg?height=400&width=400"
                                    alt="Michael Johnson - Senior Groomer"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold">Michael Johnson</h3>
                            <p className="text-rose-500 mb-2">Senior Groomer</p>
                            <p className="text-center text-gray-600 max-w-xs">
                                Michael's 8 years of experience and gentle approach make him a favorite among our regular clients.
                            </p>
                        </div>

                        {/* Team Member 3 */}
                        <div className="flex flex-col items-center">
                            <div className="relative w-64 h-64 rounded-full overflow-hidden mb-6">
                                <Image
                                    src="/placeholder.svg?height=400&width=400"
                                    alt="Sarah Williams - Groomer"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold">Sarah Williams</h3>
                            <p className="text-rose-500 mb-2">Groomer</p>
                            <p className="text-center text-gray-600 max-w-xs">
                                Sarah specializes in creative grooming and has a special way with puppies and first-time clients.
                            </p>
                        </div>

                        {/* Team Member 4 */}
                        <div className="flex flex-col items-center">
                            <div className="relative w-64 h-64 rounded-full overflow-hidden mb-6">
                                <Image
                                    src="/placeholder.svg?height=400&width=400"
                                    alt="David Chen - Groomer"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold">David Chen</h3>
                            <p className="text-rose-500 mb-2">Groomer</p>
                            <p className="text-center text-gray-600 max-w-xs">
                                David excels at handling large breeds and is known for his patience with high-energy dogs.
                            </p>
                        </div>

                        {/* Team Member 5 */}
                        <div className="flex flex-col items-center">
                            <div className="relative w-64 h-64 rounded-full overflow-hidden mb-6">
                                <Image
                                    src="/placeholder.svg?height=400&width=400"
                                    alt="Emily Rodriguez - Bather & Assistant"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold">Emily Rodriguez</h3>
                            <p className="text-rose-500 mb-2">Bather & Assistant</p>
                            <p className="text-center text-gray-600 max-w-xs">
                                Emily is our talented bather who ensures every dog is perfectly clean before their grooming session.
                            </p>
                        </div>

                        {/* Team Member 6 */}
                        <div className="flex flex-col items-center">
                            <div className="relative w-64 h-64 rounded-full overflow-hidden mb-6">
                                <Image
                                    src="/placeholder.svg?height=400&width=400"
                                    alt="Lisa Taylor - Receptionist"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold">Lisa Taylor</h3>
                            <p className="text-rose-500 mb-2">Receptionist</p>
                            <p className="text-center text-gray-600 max-w-xs">
                                Lisa keeps everything running smoothly and is the friendly face that greets you and your pet.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="mb-4 bg-rose-100 text-rose-700 hover:bg-rose-200">Certifications</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Professional Qualifications</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We're committed to maintaining the highest standards of professional grooming through ongoing education
                            and certification.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative w-24 h-24 mb-4">
                                        <Image
                                            src="/placeholder.svg?height=200&width=200"
                                            alt="National Dog Groomers Association"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">NDGA Certified</h3>
                                    <p className="text-gray-600">
                                        Our groomers are certified by the National Dog Groomers Association, demonstrating expertise in
                                        breed standards and grooming techniques.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative w-24 h-24 mb-4">
                                        <Image
                                            src="/placeholder.svg?height=200&width=200"
                                            alt="Pet First Aid Certified"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Pet First Aid Certified</h3>
                                    <p className="text-gray-600">
                                        All our staff members are trained in pet first aid, ensuring we can respond appropriately in case of
                                        any emergency.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative w-24 h-24 mb-4">
                                        <Image
                                            src="/placeholder.svg?height=200&width=200"
                                            alt="International Professional Groomers"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">IPG Member</h3>
                                    <p className="text-gray-600">
                                        We're proud members of the International Professional Groomers, keeping us updated on the latest
                                        industry standards and techniques.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-rose-500 text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="lg:w-2/3">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the Pawfect Difference?</h2>
                            <p className="text-white/90 text-lg">
                                Schedule an appointment today and see why pet parents trust us with their furry family members.
                            </p>
                        </div>
                        <div className="lg:w-1/3 flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-white text-rose-500 hover:bg-white/90">
                                Book Appointment
                                <Calendar className="ml-2 h-5 w-5" />
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

