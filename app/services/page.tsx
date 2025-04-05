import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Check } from "lucide-react"
import ServiceFAQ from "@/components/service-faq"

export const metadata = {
    title: "Our Services | Pawfect Grooming",
    description:
        "Explore our comprehensive dog grooming services including baths, haircuts, nail trimming, and specialty treatments for all breeds.",
}

export default function ServicesPage() {
    return (
        <main className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-[40vh] min-h-[300px]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/placeholder.svg?height=800&width=1920"
                        alt="Dog grooming services"
                        fill
                        priority
                        className="object-cover brightness-[0.85]"
                    />
                </div>
                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
                    <div className="max-w-2xl space-y-4">
                        <Badge className="bg-rose-500 hover:bg-rose-600 px-4 py-1 text-white">Services</Badge>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-md">
                            Our Grooming Services
                        </h1>
                        <p className="text-lg text-white drop-shadow-md">
                            Comprehensive grooming services tailored to your dog's specific needs and breed requirements.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
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
                                            src="/placeholder.svg?height=400&width=600"
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
                                        <ul className="space-y-2">
                                            <li className="flex items-center">
                                                <Check className="h-5 w-5 text-rose-500 mr-2" />
                                                <span>Gentle shampoo & conditioner</span>
                                            </li>
                                            <li className="flex items-center">
                                                <Check className="h-5 w-5 text-rose-500 mr-2" />
                                                <span>Blow dry & brush out</span>
                                            </li>
                                            <li className="flex items-center">
                                                <Check className="h-5 w-5 text-rose-500 mr-2" />
                                                <span>Ear cleaning</span>
                                            </li>
                                            <li className="flex items-center">
                                                <Check className="h-5 w-5 text-rose-500 mr-2" />
                                                <span>Nail trimming</span>
                                            </li>
                                        </ul>
                                        <div className="flex items-center justify-between mt-6">
                                            <p className="text-xl font-bold">From $45</p>
                                            <Badge variant="outline" className="text-rose-500 border-rose-200">
                                                30-45 min
                                            </Badge>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full bg-rose-500 hover:bg-rose-600">
                                            Book Now
                                            <Calendar className="ml-2 h-5 w-5" />
                                        </Button>
                                    </CardFooter>
                                </Card>

                                {/* Full Groom */}
                                <Card className="overflow-hidden transition-all hover:shadow-lg">
                                    <div className="relative h-48">
                                        <Image
                                            src="/placeholder.svg?height=400&width=600"
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
                                        <ul className="space-y-2">
                                            <li className="flex items-center">
                                                <Check className="h-5 w-5 text-rose-500 mr-2" />
                                                <span>Everything in Basic Bath</span>
                                            </li>
                                            <li className="flex items-center">
                                                <Check className="h-5 w-5 text-rose-500 mr-2" />
                                                <span>Breed-specific haircut</span>
                                            </li>
                                            <li className="flex items-center">
                                                <Check className="h-5 w-5 text-rose-500 mr-2" />
                                                <span>Styling & finishing</span>
                                            </li>
                                            <li className="flex items-center">
                                                <Check className="h-5 w-5 text-rose-500 mr-2" />
                                                <span>Teeth brushing</span>
                                            </li>
                                            <li className="flex items-center">
                                                <Check className="h-5 w-5 text-rose-500 mr-2" />
                                                <span>Sanitary trim</span>
                                            </li>
                                        </ul>
                                        <div className="flex items-center justify-between mt-6">
                                            <p className="text-xl font-bold">From $75</p>
                                            <Badge variant="outline" className="text-rose-500 border-rose-200">
                                                60-90 min
                                            </Badge>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full bg-rose-500 hover:bg-rose-600">
                                            Book Now
                                            <Calendar className="ml-2 h-5 w-5" />
                                        </Button>
                                    </CardFooter>
                                </Card>

                                {/* Deluxe Spa */}
                                <Card className="overflow-hidden transition-all hover:shadow-lg">
                                    <div className="relative h-48">
                                        <Image
                                            src="/placeholder.svg?height=400&width=600"
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
                                        <ul className="space-y-2">
                                            <li className="flex items-center">
                                                <Check className="h-5 w-5 text-rose-500 mr-2" />
                                                <span>Everything in Full Groom</span>
                                            </li>
                                            <li className="flex items-center">
                                                <Check className="h-5 w-5 text-rose-500 mr-2" />
                                                <span>Luxury aromatherapy shampoo</span>
                                            </li>
                                            <li className="flex items-center">
                                                <Check className="h-5 w-5 text-rose-500 mr-2" />
                                                <span>Paw massage & moisturizing</span>
                                            </li>
                                            <li className="flex items-center">
                                                <Check className="h-5 w-5 text-rose-500 mr-2" />
                                                <span>Facial scrub & treatment</span>
                                            </li>
                                            <li className="flex items-center">
                                                <Check className="h-5 w-5 text-rose-500 mr-2" />
                                                <span>Cologne or perfume finish</span>
                                            </li>
                                        </ul>
                                        <div className="flex items-center justify-between mt-6">
                                            <p className="text-xl font-bold">From $95</p>
                                            <Badge variant="outline" className="text-rose-500 border-rose-200">
                                                90-120 min
                                            </Badge>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full bg-rose-500 hover:bg-rose-600">
                                            Book Now
                                            <Calendar className="ml-2 h-5 w-5" />
                                        </Button>
                                    </CardFooter>
                                </Card>

                                {/* Nail Trim */}
                                <Card className="overflow-hidden transition-all hover:shadow-lg">
                                    <div className="relative h-48">
                                        <Image
                                            src="/placeholder.svg?height=400&width=600"
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
                                        <ul className="space-y-2">
                                            <li className="flex items-center">
                                                <Check className="h-5 w-5 text-rose-500 mr-2" />
                                                <span>Nail inspection</span>
                                            </li>
                                            <li className="flex items-center">
                                                <Check className="h-5 w-5 text-rose-500 mr-2" />
                                                <span>Precise trimming</span>
                                            </li>
                                            <li className="flex items-center">
                                                <Check className="h-5 w-5 text-rose-500 mr-2" />
                                                <span>Nail filing</span>
                                            </li>
                                        </ul>
                                        <div className="flex items-center justify-between mt-6">
                                            <p className="text-xl font-bold">$15</p>
                                            <Badge variant="outline" className="text-rose-500 border-rose-200">
                                                15 min
                                            </Badge>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full bg-rose-500 hover:bg-rose-600">
                                            Book Now
                                            <Calendar className="ml-2 h-5 w-5" />
                                        </Button>
                                    </CardFooter>
                                </Card>

                                {/* Teeth Brushing */}
                                <Card className="overflow-hidden transition-all hover:shadow-lg">
                                    <div className="relative h-48">
                                        <Image
                                            src="/placeholder.svg?height=400&width=600"
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
                                        <ul className="space-y-2">
                                            <li className="flex items-center">
                                                <Check className="h-5 w-5 text-rose-500 mr-2" />
                                                <span>Pet-safe toothpaste</span>
                                            </li>
                                            <li className="flex items-center">
                                                <Check className="h-5 w-5 text-rose-500 mr-2" />
                                                <span>Gentle brushing technique</span>
                                            </li>
                                            <li className="flex items-center">
                                                <Check className="h-5 w-5 text-rose-500 mr-2" />
                                                <span>Breath freshening</span>
                                            </li>
                                        </ul>
                                        <div className="flex items-center justify-between mt-6">
                                            <p className="text-xl font-bold">$15</p>
                                            <Badge variant="outline" className="text-rose-500 border-rose-200">
                                                15 min
                                            </Badge>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full bg-rose-500 hover:bg-rose-600">
                                            Book Now
                                            <Calendar className="ml-2 h-5 w-5" />
                                        </Button>
                                    </CardFooter>
                                </Card>

                                {/* Paw Massage */}
                                <Card className="overflow-hidden transition-all hover:shadow-lg">
                                    <div className="relative h-48">
                                        <Image
                                            src="/placeholder.svg?height=400&width=600"
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
                                        <ul className="space-y-2">
                                            <li className="flex items-center">
                                                <Check className="h-5 w-5 text-rose-500 mr-2" />
                                                <span>Paw pad inspection</span>
                                            </li>
                                            <li className="flex items-center">
                                                <Check className="h-5 w-5 text-rose-500 mr-2" />
                                                <span>Gentle massage</span>
                                            </li>
                                            <li className="flex items-center">
                                                <Check className="h-5 w-5 text-rose-500 mr-2" />
                                                <span>Moisturizing treatment</span>
                                            </li>
                                        </ul>
                                        <div className="flex items-center justify-between mt-6">
                                            <p className="text-xl font-bold">$20</p>
                                            <Badge variant="outline" className="text-rose-500 border-rose-200">
                                                20 min
                                            </Badge>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full bg-rose-500 hover:bg-rose-600">
                                            Book Now
                                            <Calendar className="ml-2 h-5 w-5" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        </TabsContent>

                        {/* Other tab contents would be similar to the "all" tab but filtered */}
                        <TabsContent value="basic" className="space-y-8">
                            {/* Basic grooming services content */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Basic Bath */}
                                <Card className="overflow-hidden transition-all hover:shadow-lg">
                                    {/* Content similar to above but filtered for basic services */}
                                    {/* ... */}
                                </Card>
                                {/* Nail Trim */}
                                <Card className="overflow-hidden transition-all hover:shadow-lg">
                                    {/* Content similar to above but filtered for basic services */}
                                    {/* ... */}
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="premium" className="space-y-8">
                            {/* Premium packages content */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Full Groom */}
                                <Card className="overflow-hidden transition-all hover:shadow-lg">
                                    {/* Content similar to above but filtered for premium services */}
                                    {/* ... */}
                                </Card>
                                {/* Deluxe Spa */}
                                <Card className="overflow-hidden transition-all hover:shadow-lg">
                                    {/* Content similar to above but filtered for premium services */}
                                    {/* ... */}
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="addon" className="space-y-8">
                            {/* Add-on services content */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Teeth Brushing */}
                                <Card className="overflow-hidden transition-all hover:shadow-lg">
                                    {/* Content similar to above but filtered for add-on services */}
                                    {/* ... */}
                                </Card>
                                {/* Paw Massage */}
                                <Card className="overflow-hidden transition-all hover:shadow-lg">
                                    {/* Content similar to above but filtered for add-on services */}
                                    {/* ... */}
                                </Card>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Breed-Specific Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="mb-4 bg-rose-100 text-rose-700 hover:bg-rose-200">Breed-Specific</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialized Grooming by Breed</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We understand that different breeds have different grooming needs. Our groomers are trained in
                            breed-specific cuts and styles.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Breed Card 1 */}
                        <Card className="overflow-hidden transition-all hover:shadow-lg">
                            <div className="relative h-48">
                                <Image
                                    src="/placeholder.svg?height=400&width=600"
                                    alt="Poodle Grooming"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle>Poodles</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    Specialized cuts including puppy clip, continental clip, and more for all poodle varieties.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Breed Card 2 */}
                        <Card className="overflow-hidden transition-all hover:shadow-lg">
                            <div className="relative h-48">
                                <Image
                                    src="/placeholder.svg?height=400&width=600"
                                    alt="Shih Tzu Grooming"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle>Shih Tzus</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    Expert handling of their long, flowing coats with options for puppy cuts or show styles.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Breed Card 3 */}
                        <Card className="overflow-hidden transition-all hover:shadow-lg">
                            <div className="relative h-48">
                                <Image
                                    src="/placeholder.svg?height=400&width=600"
                                    alt="Golden Retriever Grooming"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle>Golden Retrievers</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    De-shedding treatments and proper coat maintenance for this double-coated breed.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Breed Card 4 */}
                        <Card className="overflow-hidden transition-all hover:shadow-lg">
                            <div className="relative h-48">
                                <Image
                                    src="/placeholder.svg?height=400&width=600"
                                    alt="Yorkshire Terrier Grooming"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle>Yorkshire Terriers</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    Careful handling of their silky coats with options for traditional or modern styles.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <ServiceFAQ />

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

