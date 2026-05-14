"use client"

import { Card, CardContent } from "@/components/ui/card"

const chains = [
  { name: "Ethereum", status: "online", latency: "45ms" },
  { name: "Bitcoin", status: "online", latency: "120ms" },
  { name: "Solana", status: "online", latency: "23ms" },
  { name: "Stellar", status: "online", latency: "38ms" },
  { name: "Polygon", status: "online", latency: "52ms" },
  { name: "Arbitrum", status: "online", latency: "31ms" },
]

export function ChainStatus() {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="mb-4 text-sm font-semibold">Connected Chains</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {chains.map((chain) => (
            <div
              key={chain.name}
              className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                <span className="text-sm font-medium">{chain.name}</span>
              </div>
              <span className="text-xs text-muted-foreground">{chain.latency}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
