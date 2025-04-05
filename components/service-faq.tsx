import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export default function ServiceFAQ() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-rose-100 text-rose-700 hover:bg-rose-200">FAQ</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about our grooming services.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-left">How often should I have my dog groomed?</AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-600">
                                    The frequency of grooming depends on your dog's breed, coat type, and lifestyle. Generally, dogs with
                                    longer coats may need grooming every 4-6 weeks, while shorter-haired breeds might go 8-12 weeks
                                    between appointments. Regular brushing at home between professional groomings is recommended for all
                                    dogs.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-left">Do you groom all dog breeds?</AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-600">
                                    Yes, our professional groomers are trained to handle all dog breeds, from tiny Chihuahuas to large
                                    Great Danes. We have experience with various coat types and breed-specific cuts to ensure your dog
                                    looks their best.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-left">How long does a grooming session take?</AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-600">
                                    Grooming sessions typically take between 1-3 hours, depending on your dog's size, coat condition, and
                                    the services requested. Some specialty services or dogs with special needs may take longer. We'll
                                    provide you with a time estimate when you book your appointment.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-left">What if my dog is anxious about grooming?</AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-600">
                                    We understand that some dogs get anxious during grooming. Our groomers are experienced in handling
                                    nervous pets with patience and gentle techniques. We take breaks when needed and work at your dog's
                                    pace. For extremely anxious dogs, we recommend scheduling shorter, more frequent visits to help them
                                    become comfortable with the grooming process.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5">
                            <AccordionTrigger className="text-left">
                                Do I need to bring anything for my dog's appointment?
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-600">
                                    We provide all necessary grooming supplies, but if your dog requires a special shampoo due to
                                    allergies or skin conditions, you're welcome to bring it. Please inform us of any health issues or
                                    special requirements when booking. It's also helpful to bring vaccination records for your first
                                    visit.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-6">
                            <AccordionTrigger className="text-left">Do you offer any packages or discounts?</AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-600">
                                    Yes, we offer various packages that combine services at a discounted rate. We also have loyalty
                                    programs for regular clients and special discounts for multiple pets from the same household. Ask
                                    about our current promotions when you call to book your appointment.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-7">
                            <AccordionTrigger className="text-left">How do I prepare my dog for grooming?</AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-600">
                                    Before your appointment, it's helpful to brush your dog to remove loose fur and tangles. Take your dog
                                    for a walk to allow them to relieve themselves. If possible, bathe your dog a few days before rather
                                    than immediately before the appointment, as freshly bathed coats can be more difficult to cut
                                    properly.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

