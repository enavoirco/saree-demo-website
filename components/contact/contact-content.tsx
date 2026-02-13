"use client"

import { AnimatedSection } from "@/components/animated-section"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9876543210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@vasthram.com",
    href: "mailto:hello@vasthram.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "T. Nagar, Chennai, Tamil Nadu 600017",
    href: null,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Sat: 10 AM - 8 PM",
    href: null,
  },
]

export function ContactContent() {
  const [showDemoPopup, setShowDemoPopup] = useState(true)

  return (
    <section className="py-16">
      {showDemoPopup && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
          <div className="mx-4 max-w-sm rounded-lg bg-background p-6 shadow-lg">
            <h4 className="font-serif text-lg font-semibold text-foreground">
              Demo Project
            </h4>
            <p className="mt-2 font-body text-sm text-muted-foreground">
              This is a demo project. Please do not share sensitive or confidential information in the contact form.
            </p>
            <button
              onClick={() => setShowDemoPopup(false)}
              className="mt-4 inline-flex items-center rounded-full bg-primary px-4 py-2 font-body text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
            >
              Got it
            </button>
          </div>
        </div>
      )}
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Contact Info + WhatsApp */}
          <div>
            <AnimatedSection>
              <h2 className="font-serif text-3xl font-bold text-foreground">
                The Easiest Way to Order
              </h2>
              <p className="mt-3 font-body text-base leading-relaxed text-muted-foreground">
                Simply tap the button below to start a WhatsApp chat with us.
                Share your preferences and we will help you find the perfect saree.
              </p>
              <div className="mt-6">
                <WhatsAppButton
                  label="Start WhatsApp Chat"
                  message="Hi! I'd like to know more about your saree collection."
                  className="text-base"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="mt-12 flex flex-col gap-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-body text-xs font-medium uppercase tracking-widest text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="mt-0.5 font-body text-sm font-medium text-foreground">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )

                  if (item.href) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="transition-opacity duration-300 hover:opacity-80"
                      >
                        {content}
                      </a>
                    )
                  }

                  return <div key={item.label}>{content}</div>
                })}
              </div>
            </AnimatedSection>
          </div>

          {/* Right column removed: Contact form has been disabled for demo */}
        </div>
      </div>
    </section>
  )
}
