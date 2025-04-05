import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
    title: "Gallery | Pawfect Grooming",
    description:
        "View our gallery of before and after transformations, happy clients, and grooming styles for various dog breeds.",
}

export default function GalleryPage() {
    return (
        <main className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-[40vh] min-h-[300px]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/placeholder.svg?height=800&width=1920"
                        alt="Dog grooming gallery"
                        fill
                        priority
                        className="object-cover brightness-[0.85]"
                    />
                </div>
                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
                    <div className="max-w-2xl space-y-4">
                        <Badge className="bg-rose-500 hover:bg-rose-600 px-4 py-1 text-white">Gallery</Badge>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-md">
                            Our Grooming Gallery
                        </h1>
                        <p className="text-lg text-white drop-shadow-md">
                            Browse through our collection of before and after transformations and happy clients.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <Tabs defaultValue="all" className="w-full">
                        <div className="flex justify-center mb-12">
                            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                <TabsTrigger value="all">All Photos</TabsTrigger>
                                <TabsTrigger value="before-after">Before & After</TabsTrigger>
                                <TabsTrigger value="breeds">Breed Styles</TabsTrigger>
                                <TabsTrigger value="happy-clients">Happy Clients</TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value="all" className="space-y-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {[...Array(12)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                                    >
                                        <Image
                                            src={`/placeholder.svg?height=500&width=500&text=Gallery+Image+${i + 1}`}
                                            alt={`Gallery image ${i + 1}`}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="before-after" className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="space-y-4">
                                        <h3 className="text-xl font-bold text-center">Transformation {i + 1}</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                                                <Image
                                                    src={`/placeholder.svg?height=400&width=400&text=Before`}
                                                    alt={`Before transformation ${i + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-2">
                                                    Before
                                                </div>
                                            </div>
                                            <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                                                <Image
                                                    src={`/placeholder.svg?height=400&width=400&text=After`}
                                                    alt={`After transformation ${i + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-2">
                                                    After
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-center">
                                            {i === 0 && "Complete makeover for a matted coat"}
                                            {i === 1 && "Breed-specific styling for a Poodle"}
                                            {i === 2 && "Deshedding treatment for a Husky"}
                                            {i === 3 && "Summer cut for a Golden Retriever"}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="breeds" className="space-y-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {[
                                    "Poodle",
                                    "Shih Tzu",
                                    "Yorkshire Terrier",
                                    "Schnauzer",
                                    "Bichon Frise",
                                    "Cocker Spaniel",
                                    "Golden Retriever",
                                    "Labrador",
                                ].map((breed, i) => (
                                    <div key={i} className="space-y-3">
                                        <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                                            <Image
                                                src={`/placeholder.svg?height=400&width=400&text=${breed}`}
                                                alt={`${breed} grooming style`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <h3 className="text-lg font-bold text-center">{breed}</h3>
                                        <p className="text-gray-600 text-center text-sm">
                                            {i % 2 === 0 ? "Standard cut" : "Custom styling"}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="happy-clients" className="space-y-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="space-y-3">
                                        <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                                            <Image
                                                src={`/placeholder.svg?height=400&width=400&text=Happy+Client+${i + 1}`}
                                                alt={`Happy client ${i + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <h3 className="text-lg font-bold">{["Max", "Bella", "Charlie", "Luna", "Cooper", "Daisy"][i]}</h3>
                                            <p className="text-gray-600 text-sm">
                                                {["Golden Retriever", "Shih Tzu", "Poodle", "Husky", "Labrador", "Bichon Frise"][i]}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Instagram Feed Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="mb-4 bg-rose-100 text-rose-700 hover:bg-rose-200">Instagram</Badge>
                        <h2 className="text-3xl font-bold mb-4">Follow Us on Instagram</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Check out our latest grooming transformations and behind-the-scenes moments on Instagram.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="relative aspect-square rounded-lg overflow-hidden shadow-md group">
                                <Image
                                    src={`/placeholder.svg?height=300&width=300&text=Instagram+${i + 1}`}
                                    alt={`Instagram post ${i + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-medium">View Post</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-rose-500 hover:text-rose-600 font-medium"
                        >
                            @pawfectgrooming
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}

