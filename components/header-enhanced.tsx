"use client"

import { useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { 
  Menu, 
  X, 
  Wallet,
  ChevronDown,
  Moon,
  Sun,
  Monitor
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { truncateAddress } from "@/lib/format"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Swap", href: "/swap" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Docs", href: "/docs" },
]

export function HeaderEnhanced() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const { theme, setTheme } = useTheme()
  const [network, setNetwork] = useState<"mainnet" | "testnet">("mainnet")

  const walletAddress = "0x1234567890abcdef"

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 shadow-lg transition-transform group-hover:scale-110">
            <span className="text-sm font-bold text-primary-foreground">SO</span>
          </div>
          <span className="text-lg font-bold tracking-tight">StellarOmni</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex md:items-center md:gap-3">
          {/* Theme Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                <Sun className="mr-2 h-4 w-4" />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                <Moon className="mr-2 h-4 w-4" />
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                <Monitor className="mr-2 h-4 w-4" />
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Network Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <div className={cn(
                  "h-2 w-2 rounded-full",
                  network === "mainnet" ? "bg-success animate-pulse" : "bg-warning animate-pulse"
                )} />
                {network === "mainnet" ? "Mainnet" : "Testnet"}
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setNetwork("mainnet")}>
                <div className="mr-2 h-2 w-2 rounded-full bg-success" />
                Mainnet
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setNetwork("testnet")}>
                <div className="mr-2 h-2 w-2 rounded-full bg-warning" />
                Testnet
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Wallet Connection */}
          {isConnected ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Wallet className="h-4 w-4" />
                  {truncateAddress(walletAddress)}
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-2 py-1.5">
                  <p className="text-xs text-muted-foreground">Connected Wallet</p>
                  <p className="font-mono text-sm">{truncateAddress(walletAddress, 10, 8)}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View on Explorer</DropdownMenuItem>
                <DropdownMenuItem>Copy Address</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={() => setIsConnected(false)}
                  className="text-destructive"
                >
                  Disconnect
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              size="sm"
              onClick={() => setIsConnected(true)}
              className="gap-2 shadow-lg transition-all hover:shadow-xl"
            >
              <Wallet className="h-4 w-4" />
              Connect Wallet
            </Button>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="rounded-lg p-2 transition-colors hover:bg-muted md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block rounded-lg px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="space-y-2 pt-4">
              <Button 
                className="w-full gap-2"
                onClick={() => {
                  setIsConnected(true)
                  setMobileMenuOpen(false)
                }}
              >
                <Wallet className="h-4 w-4" />
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
