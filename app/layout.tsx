import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ErrorBoundary } from "@/components/error-boundary"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DigitalCraft - Premium Digital Solutions",
  description:
    "Crafting extraordinary digital experiences with cutting-edge technology and creative excellence. Web development, mobile apps, and UI/UX design services.",
  keywords: "web development, mobile apps, UI/UX design, digital solutions, Next.js, React, TypeScript",
  authors: [{ name: "DigitalCraft Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "DigitalCraft - Premium Digital Solutions",
    description: "Crafting extraordinary digital experiences with cutting-edge technology and creative excellence.",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ErrorBoundary>
          {children}
          <Toaster />
        </ErrorBoundary>
      </body>
    </html>
  )
}
