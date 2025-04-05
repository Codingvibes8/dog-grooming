import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {  Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Pawfect Groom</h3>
                        <p className="text-gray-300 mb-4">
                            Professional dog grooming services with experienced groomers. We treat your pets like family.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-300 hover:text-rose-400">
                                <Image src="/images/facebook.svg" width={24} height={24} alt="Facebook" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-gray-300 hover:text-rose-400">
                                <Image src="/images/instagram.svg" width={24} height={24} alt="Instagram" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-gray-300 hover:text-rose-400">
                                <Image src="/images/twitter.svg" width={24} height={24} alt="Twitter" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-rose-400">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-300 hover:text-rose-400">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="text-gray-300 hover:text-rose-400">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-rose-400">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-rose-400">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/booking" className="text-gray-300 hover:text-rose-400">
                                    Book Appointment
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-rose-400" />
                                <span className="text-gray-300">
                  123 Grooming Street
                  <br />
                  Pawville, CA 90210
                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-2 text-rose-400" />
                                <Link href="tel:+1234567890" className="text-gray-300 hover:text-rose-400">
                                    (123) 456-7890
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-2 text-rose-400" />
                                <Link href="mailto:info@pawfectgrooming.com" className="text-gray-300 hover:text-rose-400">
                                    info@pawfectgrooming.com
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                        <p className="text-gray-300 mb-4">Subscribe to our newsletter for grooming tips and special offers.</p>
                        <form className="space-y-2">
                            <Input type="email" placeholder="Your email address" className="bg-gray-800 border-gray-700 text-white" />
                            <Button className="w-full bg-rose-500 hover:bg-rose-600">Subscribe</Button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Pawfect Grooming. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="text-gray-400 text-sm hover:text-rose-400">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-gray-400 text-sm hover:text-rose-400">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

