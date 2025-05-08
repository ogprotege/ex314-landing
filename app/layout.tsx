import type React from "react"
import type { Metadata } from "next"
import { Cinzel } from "next/font/google"
import "./globals.css"

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
})

export const metadata: Metadata = {
  title: "ex314.ai | Catholic Theological AI Assistant",
  description: "Where Divine Truth Meets Digital Inquiry - A Catholic theological AI assistant guided by Exodus 3:14",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cinzel.variable}>
      <body>{children}</body>
    </html>
  )
}
