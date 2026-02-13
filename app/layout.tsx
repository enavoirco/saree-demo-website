import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, DM_Sans } from "next/font/google"

import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Vasthram - Premium Indian Sarees",
  description:
    "Discover exquisite handcrafted sarees from across India. Shop premium silk, cotton, and designer sarees via WhatsApp.",
}

export const viewport: Viewport = {
  themeColor: "#8C3544",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
