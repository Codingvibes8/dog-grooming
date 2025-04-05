import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import TestimonialCarousel from "@/components/testimonial-carousel"
import ServiceHighlights from "@/components/service-highlights"

export const metadata = {
  title: "Pawfect Grooming | Professional Dog Grooming Services",
  description:
      "Professional dog grooming services with experienced groomers. Bath, haircut, nail trimming, and more for all dog breeds.",
  openGraph: {
    title: "Pawfect Grooming | Professional Dog Grooming Services",
    description:
        "Professional dog grooming services with experienced groomers. Bath, haircut, nail trimming, and more for all dog breeds.",
    images: [{ url: "/images/og-image.jpg" }],
  },
}

export default function Home() {
  return (
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full h-[80vh] min-h-[600px] ">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black to-black/70 ">
            <Image
                src="/dog-bg.jpg"
                alt="Happy dog after grooming"
                fill
                priority
                className="object-cover"
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-2xl space-y-6">
              <Badge className="bg-rose-500 hover:bg-rose-600 px-4 py-1 text-white text-xl">Professional Grooming</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md">
                Pawfect Grooming For Your Furry Friends
              </h1>
              <p className="text-lg md:text-xl text-white drop-shadow-md">
                Professional dog grooming services with experienced groomers. We treat your pets like family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-rose-500 text-white hover:bg-rose-600">
                  Book Appointment
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
                <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 backdrop-blur-sm text-gray-700 border-white hover:bg-white/20"
                >
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-rose-100 text-rose-700 hover:bg-rose-200">Our Services</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Grooming Services We Offer</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide a range of professional grooming services to keep your furry friend looking and feeling their
                best.
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <TabsTrigger value="all">All Services</TabsTrigger>
                  <TabsTrigger value="basic">Basic Grooming</TabsTrigger>
                  <TabsTrigger value="premium">Premium Packages</TabsTrigger>
                  <TabsTrigger value="addon">Add-ons</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Basic Bath */}
                  <Card className="overflow-hidden transition-all hover:shadow-lg">
                    <div className="relative h-48">
                      <Image
                          src="/dog-bath3.jpg"

                          alt="Basic Bath Service"
                          fill
                          className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Basic Bath</CardTitle>
                      <CardDescription>Essential cleaning for your dog</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Includes shampoo, conditioner, blow dry, ear cleaning, and nail trimming.
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-xl font-bold">From $45</p>
                        <Badge variant="outline" className="text-rose-500 border-rose-200">
                          30-45 min
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-rose-500 hover:bg-rose-600">Book Now</Button>
                    </CardFooter>
                  </Card>

                  {/* Full Groom */}
                  <Card className="overflow-hidden transition-all hover:shadow-lg">
                    <div className="relative h-48">
                      <Image
                          src="/dog-hero3.jpg?"
                          alt="Full Groom Service"
                          fill
                          className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>Full Groom</CardTitle>
                        <Badge className="bg-rose-500">Popular</Badge>
                      </div>
                      <CardDescription>Complete grooming experience</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Includes bath, haircut, style, ear cleaning, nail trimming, and teeth brushing.
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-xl font-bold">From $75</p>
                        <Badge variant="outline" className="text-rose-500 border-rose-200">
                          60-90 min
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-rose-500 hover:bg-rose-600">Book Now</Button>
                    </CardFooter>
                  </Card>

                  {/* Deluxe Spa */}
                  <Card className="overflow-hidden transition-all hover:shadow-lg">
                    <div className="relative h-48">
                      <Image
                          src="/dog-hero3.jpg"
                          alt="Deluxe Spa Package"
                          fill
                          className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Deluxe Spa</CardTitle>
                      <CardDescription>Premium pampering session</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Includes full groom plus paw massage, special shampoo treatment, and facial scrub.
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-xl font-bold">From $95</p>
                        <Badge variant="outline" className="text-rose-500 border-rose-200">
                          90-120 min
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-rose-500 hover:bg-rose-600">Book Now</Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="text-center">
                  <Link href="/services">
                    <Button variant="outline" size="lg" className="mt-8">
                      View All Services
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="basic" className="space-y-8">
                {/* Basic grooming services content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Basic Bath */}
                  <Card className="overflow-hidden transition-all hover:shadow-lg">
                    <div className="relative h-48">
                      <Image
                          src="/dog-bath.jpg"
                          alt="Basic Bath Service"
                          fill
                          className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Basic Bath</CardTitle>
                      <CardDescription>Essential cleaning for your dog</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Includes shampoo, conditioner, blow dry, ear cleaning, and nail trimming.
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-xl font-bold">From $45</p>
                        <Badge variant="outline" className="text-rose-500 border-rose-200">
                          30-45 min
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-rose-500 hover:bg-rose-600">Book Now</Button>
                    </CardFooter>
                  </Card>

                  {/* Nail Trim */}
                  <Card className="overflow-hidden transition-all hover:shadow-lg">
                    <div className="relative h-48">
                      <Image
                          src="/dog-bath3.jpg"
                          alt="Nail Trim Service"
                          fill
                          className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Nail Trim</CardTitle>
                      <CardDescription>Quick nail maintenance</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Professional nail trimming to keep your dog comfortable and prevent scratches.
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-xl font-bold">$15</p>
                        <Badge variant="outline" className="text-rose-500 border-rose-200">
                          15 min
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-rose-500 hover:bg-rose-600">Book Now</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="premium" className="space-y-8">
                {/* Premium packages content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Full Groom */}
                  <Card className="overflow-hidden transition-all hover:shadow-lg">
                    <div className="relative h-48">
                      <Image
                          src="/dog-hero3.jpg"
                          alt="Full Groom Service"
                          fill
                          className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>Full Groom</CardTitle>
                        <Badge className="bg-rose-500">Popular</Badge>
                      </div>
                      <CardDescription>Complete grooming experience</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Includes bath, haircut, style, ear cleaning, nail trimming, and teeth brushing.
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-xl font-bold">From $75</p>
                        <Badge variant="outline" className="text-rose-500 border-rose-200">
                          60-90 min
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-rose-500 hover:bg-rose-600">Book Now</Button>
                    </CardFooter>
                  </Card>

                  {/* Deluxe Spa */}
                  <Card className="overflow-hidden transition-all hover:shadow-lg">
                    <div className="relative h-48">
                      <Image
                          src="/dog-bath3.jpg"
                          alt="Deluxe Spa Package"
                          fill
                          className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Deluxe Spa</CardTitle>
                      <CardDescription>Premium pampering session</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Includes full groom plus paw massage, special shampoo treatment, and facial scrub.
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-xl font-bold">From $95</p>
                        <Badge variant="outline" className="text-rose-500 border-rose-200">
                          90-120 min
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-rose-500 hover:bg-rose-600">Book Now</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="addon" className="space-y-8">
                {/* Add-on services content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Teeth Brushing */}
                  <Card className="overflow-hidden transition-all hover:shadow-lg">
                    <div className="relative h-48">
                      <Image
                          src="/dog-teeth.jpg"
                          alt="Teeth Brushing Service"
                          fill
                          className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Teeth Brushing</CardTitle>
                      <CardDescription>Dental hygiene for your pet</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Keep your dog's teeth clean and breath fresh with our gentle brushing service.
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-xl font-bold">$15</p>
                        <Badge variant="outline" className="text-rose-500 border-rose-200">
                          15 min
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-rose-500 hover:bg-rose-600">Add to Service</Button>
                    </CardFooter>
                  </Card>

                  {/* Paw Massage */}
                  <Card className="overflow-hidden transition-all hover:shadow-lg">
                    <div className="relative h-48">
                      <Image
                          src="/dog-hero2.jpg?"
                          alt="Paw Massage Service"
                          fill
                          className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Paw Massage</CardTitle>
                      <CardDescription>Relaxing treatment for tired paws</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Soothing massage with moisturizing balm to keep paw pads soft and healthy.
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-xl font-bold">$20</p>
                        <Badge variant="outline" className="text-rose-500 border-rose-200">
                          20 min
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-rose-500 hover:bg-rose-600">Add to Service</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Service Highlights */}
        <ServiceHighlights />

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-rose-100 text-rose-700 hover:bg-rose-200">Testimonials</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what pet parents have to say about our grooming services.
              </p>
            </div>

            <TestimonialCarousel />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-rose-500 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Dog's Grooming Session?</h2>
                <p className="text-white/90 text-lg">
                  Schedule an appointment today and give your furry friend the pampering they deserve.
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

