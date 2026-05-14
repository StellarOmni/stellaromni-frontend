"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Globe2, 
  Layers,
  Code2,
  Smartphone,
  Server,
  FileCode
} from "lucide-react"

const features = [
  {
    icon: Globe2,
    title: "Universal Cross-Chain",
    description: "Connect to any blockchain including Bitcoin, Ethereum, Solana, and Stellar from a single interface.",
  },
  {
    icon: Zap,
    title: "Atomic Execution",
    description: "All cross-chain logic completes entirely or reverts fully, ensuring true atomicity and security.",
  },
  {
    icon: Shield,
    title: "TSS Security",
    description: "Threshold Signature Scheme ensures decentralized key management with validator consensus.",
  },
  {
    icon: Layers,
    title: "ZRC-20 Standard",
    description: "Native assets are automatically converted to programmable ZRC-20 tokens on ZetaChain.",
  },
]

const stats = [
  { label: "Total Value Locked", value: "$97M+" },
  { label: "Supported Chains", value: "15" },
  { label: "Transactions", value: "2.5M+" },
  { label: "Active Users", value: "41K+" },
]

const repos = [
  {
    name: "stellaromni-contracts",
    description: "Rust smart contracts for ZetaChain Universal Apps",
    icon: FileCode,
    tech: "Rust",
    status: "Active",
  },
  {
    name: "stellaromni-backend",
    description: "Node infrastructure with Rust and SQLite",
    icon: Server,
    tech: "Rust + SQLite",
    status: "Active",
  },
  {
    name: "stellaromni-frontend",
    description: "Next.js web application for cross-chain operations",
    icon: Code2,
    tech: "Next.js",
    status: "Active",
  },
  {
    name: "stellaromni-mobile",
    description: "React Native mobile wallet application",
    icon: Smartphone,
    tech: "React Native",
    status: "Coming Soon",
  },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">
            Powered by ZetaChain
          </Badge>
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            One Protocol.{" "}
            <span className="text-primary">Every Chain.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
            StellarOmni is the universal protocol for seamless cross-chain transactions. 
            Send, swap, and manage assets across Bitcoin, Ethereum, Solana, and Stellar 
            from a single interface.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/dashboard">
                Launch App
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/docs">
                Read Documentation
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold tracking-tight text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FeaturesSection() {
  return (
    <section className="border-t border-border bg-card/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Built for the Omnichain Future
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            StellarOmni leverages ZetaChain&apos;s hub-and-spoke architecture to enable 
            truly universal blockchain connectivity.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-card">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ArchitectureSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">
            Open Source
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            Project Architecture
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            StellarOmni is built with four core repositories, each handling a critical 
            layer of the protocol.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {repos.map((repo) => (
            <Card key={repo.name} className="transition-colors hover:border-primary/50">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <repo.icon className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold font-mono text-sm">{repo.name}</h3>
                    <Badge 
                      variant={repo.status === "Active" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {repo.status}
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {repo.description}
                  </p>
                  <p className="mt-2 text-xs text-primary">{repo.tech}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link href="https://github.com/StellarOmni" target="_blank">
              View on GitHub
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export function CTASection() {
  return (
    <section className="border-t border-border bg-card/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-card to-card p-8 text-center sm:p-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to go cross-chain?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Connect your wallet and start swapping assets across any blockchain. 
            No bridges, no wrapped tokens, just native cross-chain transactions.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/dashboard">
                Launch App
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com/StellarOmni" target="_blank">
                Contribute on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
