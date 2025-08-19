import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

/**
 * FONT CONFIGURATION
 *
 * Inter: Clean, modern sans-serif for body text and UI elements
 * - Used for navigation, buttons, descriptions, and general content
 * - Weights: 300-700 for various text hierarchies
 *
 * Playfair Display: Elegant serif for headings and emphasis
 * - Used for main titles, section headers, and brand elements
 * - Weights: 400-900 for dramatic typography scaling
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Portfolio - Engineering Intelligence",
  description: "ML • Backend • Systems • Quant - Building systems that endure",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable} dark`}>
      <body className="antialiased overflow-x-hidden font-sans">
        {/* 
          PAGE TRANSITION WRAPPER
          - Provides subtle fade-in animation for page loads
          - Smooth transitions between different sections
          - Maintains performance with CSS-only animations
        */}
        <div className="page-transition">{children}</div>
      </body>
    </html>
  )
}
