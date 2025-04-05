"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Calendar, Menu, Phone, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
    const pathname = usePathname()
    const isMobile = useMobile()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navigation = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Gallery", href: "/gallery" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
            )}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-rose-700">Pawfect</span>
                        {!isMobile && <span className="text-xl font-medium text-red-800"></span>}
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-rose-500",
                                    pathname === item.href ? "text-rose-500" : isScrolled ? "text-gray-900" : "text-gray-900",
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="tel:+1234567890" className="flex items-center text-sm font-medium hover:text-rose-500">
                            <Phone className="h-4 w-4 mr-2" />
                            (123) 456-7890
                        </Link>
                        <Button className="bg-rose-500 hover:bg-rose-600">
                            Book Now
                            <Calendar className="ml-2 h-4 w-4" />
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center justify-between py-4">
                                    <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                                        <span className="text-2xl font-bold text-rose-500">Pawfect</span>
                                        <span className="text-xl font-medium">Grooming</span>
                                    </Link>
                                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                                        <X className="h-6 w-6" />
                                        <span className="sr-only">Close menu</span>
                                    </Button>
                                </div>
                                <nav className="flex flex-col space-y-6 py-8">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={cn(
                                                "text-lg font-medium transition-colors hover:text-rose-500",
                                                pathname === item.href ? "text-rose-500" : "text-gray-900",
                                            )}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </nav>
                                <div className="mt-auto space-y-4 py-6">
                                    <Link
                                        href="tel:+1234567890"
                                        className="flex items-center text-base font-medium hover:text-rose-500"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <Phone className="h-5 w-5 mr-2" />
                                        (123) 456-7890
                                    </Link>
                                    <Button className="w-full bg-rose-500 hover:bg-rose-600" onClick={() => setIsOpen(false)}>
                                        Book Appointment
                                        <Calendar className="ml-2 h-5 w-5" />
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

