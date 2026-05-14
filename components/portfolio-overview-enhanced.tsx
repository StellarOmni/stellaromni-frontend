"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, ArrowDownRight, TrendingUp, Wallet, PieChart as PieChartIcon } from "lucide-react"
import { formatCurrency, formatPercentage, formatNumber } from "@/lib/format"
import { cn } from "@/lib/utils"

const chains = [
  {
    name: "Ethereum",
    symbol: "ETH",
    balance: "2.4521",
    usdValue: 4523.87,
    change: 2.4,
    positive: true,
    color: "bg-blue-500",
    allocation: 26.7,
    logo: "🔷",
  },
  {
    name: "Bitcoin",
    symbol: "BTC",
    balance: "0.1234",
    usdValue: 7821.34,
    change: 5.2,
    positive: true,
    color: "bg-orange-500",
    allocation: 46.1,
    logo: "₿",
  },
  {
    name: "Solana",
    symbol: "SOL",
    balance: "45.67",
    usdValue: 3125.67,
    change: -1.2,
    positive: false,
    color: "bg-purple-500",
    allocation: 18.4,
    logo: "◎",
  },
  {
    name: "Stellar",
    symbol: "XLM",
    balance: "12,345.00",
    usdValue: 1482.90,
    change: 0.8,
    positive: true,
    color: "bg-cyan-500",
    allocation: 8.8,
    logo: "✦",
  },
]

const performanceData = [
  { period: "24h", value: 3.2, positive: true },
  { period: "7d", value: 12.5, positive: true },
  { period: "30d", value: -2.1, positive: false },
  { period: "1y", value: 145.8, positive: true },
]

export function PortfolioOverviewEnhanced() {
  const totalValue = chains.reduce((sum, chain) => sum + chain.usdValue, 0)
  const totalChange = 3.2

  return (
    <div className="space-y-6">
      {/* Total Portfolio Value - Hero Card */}
      <Card className="relative overflow-hidden border-border/50 bg-gradient-to-br from-primary/5 via-card to-card shadow-xl">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/10 to-transparent" />
        <CardContent className="relative p-8">
          <div className="flex items-start justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5 text-muted-foreground" />
                <p className="text-sm font-medium text-muted-foreground">Total Portfolio Value</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline gap-4">
                  <span className="text-5xl font-bold tracking-tight">{formatCurrency(totalValue)}</span>
                  <Badge 
                    variant="secondary" 
                    className={cn(
                      "gap-1 px-3 py-1 text-base",
                      totalChange >= 0 ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
                    )}
                  >
                    {totalChange >= 0 ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                    {formatPercentage(totalChange)}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">Across {chains.length} connected chains</p>
              </div>
            </div>
            
            {/* Performance Stats */}
            <div className="flex gap-6">
              {performanceData.map((perf) => (
                <div key={perf.period} className="text-right">
                  <p className="text-xs text-muted-foreground">{perf.period}</p>
                  <p className={cn(
                    "text-lg font-semibold",
                    perf.positive ? "text-success" : "text-destructive"
                  )}>
                    {formatPercentage(perf.value)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs for different views */}
      <Tabs defaultValue="assets" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="assets">Assets</TabsTrigger>
          <TabsTrigger value="allocation">Allocation</TabsTrigger>
        </TabsList>

        <TabsContent value="assets" className="space-y-4">
          {/* Chain Balances Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {chains.map((chain) => (
              <Card 
                key={chain.name} 
                className="group relative overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer border-border/50"
              >
                <div className={cn(
                  "absolute right-0 top-0 h-full w-1 transition-all group-hover:w-2",
                  chain.color
                )} />
                <CardContent className="flex items-center justify-between p-5">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "flex h-14 w-14 items-center justify-center rounded-xl text-2xl shadow-lg transition-transform group-hover:scale-110",
                      chain.color
                    )}>
                      {chain.logo}
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{chain.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {formatNumber(parseFloat(chain.balance), 4)} {chain.symbol}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">{formatCurrency(chain.usdValue)}</p>
                    <div className={cn(
                      "flex items-center justify-end gap-1 text-sm font-medium",
                      chain.positive ? "text-success" : "text-destructive"
                    )}>
                      {chain.positive ? (
                        <ArrowUpRight className="h-3 w-3" />
                      ) : (
                        <ArrowDownRight className="h-3 w-3" />
                      )}
                      {formatPercentage(chain.change)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="allocation" className="space-y-4">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChartIcon className="h-5 w-5" />
                Portfolio Allocation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Allocation Bars */}
              {chains.map((chain) => (
                <div key={chain.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{chain.logo}</span>
                      <span className="font-medium">{chain.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground">{formatCurrency(chain.usdValue)}</span>
                      <span className="font-semibold">{chain.allocation.toFixed(1)}%</span>
                    </div>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className={cn("h-full rounded-full transition-all", chain.color)}
                      style={{ width: `${chain.allocation}%` }}
                    />
                  </div>
                </div>
              ))}

              {/* Summary Stats */}
              <div className="mt-6 grid grid-cols-3 gap-4 rounded-lg bg-muted/30 p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">{chains.length}</p>
                  <p className="text-xs text-muted-foreground">Chains</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{formatCurrency(totalValue, 0)}</p>
                  <p className="text-xs text-muted-foreground">Total Value</p>
                </div>
                <div className="text-center">
                  <p className={cn(
                    "text-2xl font-bold",
                    totalChange >= 0 ? "text-success" : "text-destructive"
                  )}>
                    {formatPercentage(totalChange)}
                  </p>
                  <p className="text-xs text-muted-foreground">24h Change</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
