"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

const chains = [
  {
    name: "Ethereum",
    symbol: "ETH",
    balance: "2.4521",
    usdValue: "$4,523.87",
    change: "+2.4%",
    positive: true,
    color: "bg-blue-500",
  },
  {
    name: "Bitcoin",
    symbol: "BTC",
    balance: "0.1234",
    usdValue: "$7,821.34",
    change: "+5.2%",
    positive: true,
    color: "bg-orange-500",
  },
  {
    name: "Solana",
    symbol: "SOL",
    balance: "45.67",
    usdValue: "$3,125.67",
    change: "-1.2%",
    positive: false,
    color: "bg-purple-500",
  },
  {
    name: "Stellar",
    symbol: "XLM",
    balance: "12,345.00",
    usdValue: "$1,482.90",
    change: "+0.8%",
    positive: true,
    color: "bg-cyan-500",
  },
]

export function PortfolioOverview() {
  const totalValue = "$16,953.78"
  const totalChange = "+3.2%"

  return (
    <div className="space-y-6">
      {/* Total Portfolio Value */}
      <Card className="bg-gradient-to-br from-card to-muted/30">
        <CardContent className="p-6">
          <p className="text-sm text-muted-foreground">Total Portfolio Value</p>
          <div className="mt-2 flex items-baseline gap-3">
            <span className="text-4xl font-bold tracking-tight">{totalValue}</span>
            <Badge variant="secondary" className="gap-1 bg-success/10 text-success">
              <ArrowUpRight className="h-3 w-3" />
              {totalChange}
            </Badge>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">Across 4 connected chains</p>
        </CardContent>
      </Card>

      {/* Chain Balances */}
      <div className="grid gap-4 sm:grid-cols-2">
        {chains.map((chain) => (
          <Card key={chain.name} className="transition-colors hover:bg-muted/50">
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className={`h-10 w-10 rounded-full ${chain.color} flex items-center justify-center`}>
                  <span className="text-xs font-bold text-white">{chain.symbol}</span>
                </div>
                <div>
                  <p className="font-medium">{chain.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {chain.balance} {chain.symbol}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">{chain.usdValue}</p>
                <div className={`flex items-center justify-end gap-1 text-sm ${
                  chain.positive ? "text-success" : "text-destructive"
                }`}>
                  {chain.positive ? (
                    <ArrowUpRight className="h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3" />
                  )}
                  {chain.change}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
