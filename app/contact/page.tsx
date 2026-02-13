import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactContent } from "@/components/contact/contact-content"

export const metadata: Metadata = {
  title: "Contact - Vasthram | Get In Touch",
  description:
    "Reach out to Vasthram for inquiries, orders, and styling advice. Order premium sarees directly via WhatsApp.",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <ContactContent />
      </main>
      <Footer />
    </>
  )
}
