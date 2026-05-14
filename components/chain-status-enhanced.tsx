"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const chains = [
  { name: "Ethereum", status: "online", latency: "45ms", logo: "🔷", color: "bg-blue-500" },
  { name: "Bitcoin", status: "online", latency: "120ms", logo: "₿", color: "bg-orange-500" },
  { name: "Solana", status: "online", latency: "23ms", logo: "◎", color: "bg-purple-500" },
  { name: "Stellar", status: "online", latency: "38ms", logo: "✦", color: "bg-cyan-500" },
  { name: "Polygon", status: "online", latency: "52ms", logo: "🟣", color: "bg-violet-500" },
  { name: "Arbitrum", status: "online", latency: "31ms", logo: "🔵", color: "bg-blue-600" },
]

export function ChainStatusEnhanced() {
  const avgLatency = Math.round(
    chains.reduce((sum, chain) => sum + parseInt(chain.latency), 0) / chains.length
  )

  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Activity className="h-5 w-5 text-primary" />
            Network Status
          </CardTitle>
          <Badge variant="secondary" className="gap-1 bg-success/10 text-success">
            <div className="h-2 w-2 animate-pulse rounded-full bg-success" />
            All Systems Operational
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Average Latency Card */}
        <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Average Latency</span>
            </div>
            <span className="text-2xl font-bold text-primary">{avgLatency}ms</span>
          </div>
        </div>

        {/* Chain Status Grid */}
        <div className="grid gap-3 sm:grid-cols-2">
          {chains.map((chain) => (
            <div
              key={chain.name}
              className="group relative overflow-hidden rounded-lg border border-border bg-card p-3 transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-lg text-xl shadow-sm transition-transform group-hover:scale-110",
                    chain.color
                  )}>
                    {chain.logo}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{chain.name}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
                      <span className="text-xs text-muted-foreground capitalize">{chain.status}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="font-mono text-xs">
                    {chain.latency}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="rounded-lg bg-muted/30 p-3 text-center text-xs text-muted-foreground">
          Real-time network monitoring • Updated every 30 seconds
        </div>
      </CardContent>
    </Card>
  )
}
