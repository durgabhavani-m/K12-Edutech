import type React from "react"
import type { Metadata } from "next"
import { Poppins, Merriweather } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
  display: "swap",
})

export const metadata: Metadata = {
  title: "EduFun - K-12 Hybrid Learning Platform",
  description: "Learning Made Fun & Smart - The ultimate hybrid learning platform for students, teachers, and parents",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${merriweather.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
