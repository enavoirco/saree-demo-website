import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-primary">Vasthram</h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
              Curating the finest handcrafted sarees from across India.
              Tradition woven with elegance for the modern woman.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-widest text-foreground">
              Quick Links
            </h4>
            <ul className="mt-4 flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/collection", label: "Collection" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-widest text-foreground">
              Get In Touch
            </h4>
            <ul className="mt-4 flex flex-col gap-2 font-body text-sm text-muted-foreground">
              <li>+91 98765 43210</li>
              <li>hello@vasthram.com</li>
              <li>Chennai, Tamil Nadu, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center">
          <p className="font-body text-xs text-muted-foreground">
            {"© 2026 Vasthram. All rights reserved. Crafted with love for Indian heritage."}
          </p>
        </div>
      </div>
    </footer>
  )
}
