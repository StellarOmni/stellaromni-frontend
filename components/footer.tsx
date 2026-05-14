import Link from "next/link"
import { Github, Twitter } from "lucide-react"

const footerLinks = {
  product: [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Swap", href: "/swap" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Explorer", href: "/explorer" },
  ],
  developers: [
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/api" },
    { name: "GitHub", href: "https://github.com/StellarOmni" },
    { name: "Status", href: "/status" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">SO</span>
              </div>
              <span className="text-lg font-semibold">StellarOmni</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              The universal protocol for seamless cross-chain transactions. One interface, infinite possibilities.
            </p>
            <div className="mt-4 flex gap-4">
              <Link href="https://twitter.com/StellarOmni" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://github.com/StellarOmni" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold">Product</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h3 className="text-sm font-semibold">Developers</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.developers.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} StellarOmni. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
