import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: {
        template: "%s | Pawfect Grooming",
        default: "Pawfect Grooming | Professional Dog Grooming Services",
    },
    description:
        "Professional dog grooming services with experienced groomers. Bath, haircut, nail trimming, and more for all dog breeds.",
    keywords: ["dog grooming", "pet grooming", "dog haircut", "dog bath", "professional groomer"],
    authors: [{ name: "Pawfect Grooming" }],
    creator: "Pawfect Grooming",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://pawfectgrooming.com",
        siteName: "Pawfect Grooming",
        title: "Pawfect Grooming | Professional Dog Grooming Services",
        description:
            "Professional dog grooming services with experienced groomers. Bath, haircut, nail trimming, and more for all dog breeds.",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Pawfect Grooming",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Pawfect Grooming | Professional Dog Grooming Services",
        description:
            "Professional dog grooming services with experienced groomers. Bath, haircut, nail trimming, and more for all dog breeds.",
        images: ["/images/twitter-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="flex-grow">{children}</div>
                <Footer />
            </div>
        </ThemeProvider>
        </body>
        </html>
    )
}

