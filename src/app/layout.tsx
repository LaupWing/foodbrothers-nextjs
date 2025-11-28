import type React from "react"
import type { Metadata } from "next"
import { Inter, Pacifico } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const pacifico = Pacifico({ weight: "400", subsets: ["latin"], variable: "--font-pacifico" })

export const metadata: Metadata = {
  title: "Food Brothers | Delicious Food, Family Style",
  description:
    "Experience delicious burgers, chicken, fresh salads and more at Food Brothers. Order online for delivery or dine-in with the family.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${pacifico.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
