import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Award, Clock, Scissors, Shield, Sparkles } from "lucide-react"

export default function ServiceHighlights() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-rose-100 text-rose-700 hover:bg-rose-200">Why Choose Us</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">The Pawfect Grooming Experience</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We provide exceptional care for your furry friends with our professional and compassionate grooming
                        services.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-2">
                            <Heart className="h-10 w-10 text-rose-500 mb-2" />
                            <CardTitle>Compassionate Care</CardTitle>
                            <CardDescription>Gentle handling for all pets</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                Our groomers are trained to handle pets with patience and care, ensuring a stress-free experience for
                                even the most anxious dogs.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card 2 */}
                    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-2">
                            <Award className="h-10 w-10 text-rose-500 mb-2" />
                            <CardTitle>Certified Groomers</CardTitle>
                            <CardDescription>Experienced professionals</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                All our groomers are certified professionals with years of experience in handling various breeds and
                                coat types.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card 3 */}
                    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-2">
                            <Clock className="h-10 w-10 text-rose-500 mb-2" />
                            <CardTitle>Efficient Service</CardTitle>
                            <CardDescription>Respect for your time</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                We value your time and strive to complete grooming services efficiently without compromising on quality.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card 4 */}
                    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-2">
                            <Scissors className="h-10 w-10 text-rose-500 mb-2" />
                            <CardTitle>Premium Tools</CardTitle>
                            <CardDescription>Quality equipment</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                We use only the highest quality grooming tools and products to ensure the best results for your pet.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card 5 */}
                    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-2">
                            <Shield className="h-10 w-10 text-rose-500 mb-2" />
                            <CardTitle>Safe Environment</CardTitle>
                            <CardDescription>Clean and secure facility</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                Our grooming salon is maintained to the highest standards of cleanliness and safety for your pet's
                                wellbeing.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card 6 */}
                    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-2">
                            <Sparkles className="h-10 w-10 text-rose-500 mb-2" />
                            <CardTitle>Personalized Service</CardTitle>
                            <CardDescription>Tailored to your pet</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                We take the time to understand your preferences and your pet's needs to provide a truly personalized
                                grooming experience.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

