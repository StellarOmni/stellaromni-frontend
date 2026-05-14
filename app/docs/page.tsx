import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { 
  BookOpen, 
  Code2, 
  FileCode, 
  Server, 
  Smartphone, 
  ArrowRight,
  ExternalLink
} from "lucide-react"

const sections = [
  {
    title: "Smart Contracts",
    description: "Universal Smart Contracts deployed on ZetaChain that atomically manage state across all blockchains.",
    icon: FileCode,
    links: [
      { name: "Contract Architecture", href: "#contracts" },
      { name: "ZRC-20 Standard", href: "#zrc20" },
      { name: "Deployment Guide", href: "#deployment" },
    ],
  },
  {
    title: "Backend Infrastructure",
    description: "Distributed off-chain services including ZetaCore nodes, observers, and TSS key management.",
    icon: Server,
    links: [
      { name: "Node Setup", href: "#node" },
      { name: "Observer Client", href: "#observer" },
      { name: "API Reference", href: "#api" },
    ],
  },
  {
    title: "Frontend SDK",
    description: "React hooks and utilities for building cross-chain dApps with wallet integration.",
    icon: Code2,
    links: [
      { name: "Getting Started", href: "#start" },
      { name: "React Hooks", href: "#hooks" },
      { name: "Wallet Connection", href: "#wallet" },
    ],
  },
  {
    title: "Mobile SDK",
    description: "React Native SDK for building universal wallet applications on iOS and Android.",
    icon: Smartphone,
    links: [
      { name: "Installation", href: "#install" },
      { name: "Authentication", href: "#auth" },
      { name: "Transaction Signing", href: "#signing" },
    ],
  },
]

const quickLinks = [
  { name: "GitHub Repository", href: "https://github.com/StellarOmni", external: true },
  { name: "API Reference", href: "/api", external: false },
  { name: "Examples", href: "/examples", external: false },
  { name: "Community Discord", href: "https://discord.gg/stellaromni", external: true },
]

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <Badge variant="secondary" className="mb-4">Documentation</Badge>
            <h1 className="text-3xl font-bold">StellarOmni Developer Docs</h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Everything you need to build on the StellarOmni protocol. From smart contracts 
              to mobile apps, we&apos;ve got you covered.
            </p>
          </div>

          {/* Quick Links */}
          <Card className="mb-12">
            <CardContent className="flex flex-wrap gap-4 p-6">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
                >
                  {link.name}
                  {link.external ? (
                    <ExternalLink className="h-3 w-3" />
                  ) : (
                    <ArrowRight className="h-3 w-3" />
                  )}
                </Link>
              ))}
            </CardContent>
          </Card>

          {/* Documentation Sections */}
          <div className="grid gap-6 md:grid-cols-2">
            {sections.map((section) => (
              <Card key={section.title}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <section.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {section.description}
                  </p>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="flex items-center gap-2 text-sm text-primary hover:underline"
                        >
                          <BookOpen className="h-3 w-3" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Getting Started */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Quick Start</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg bg-muted p-4 font-mono text-sm">
                <p className="text-muted-foreground"># Clone the frontend repository</p>
                <p>git clone https://github.com/StellarOmni/stellaromni-frontend.git</p>
                <p className="mt-2 text-muted-foreground"># Install dependencies</p>
                <p>cd stellaromni-frontend && pnpm install</p>
                <p className="mt-2 text-muted-foreground"># Start development server</p>
                <p>pnpm dev</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
