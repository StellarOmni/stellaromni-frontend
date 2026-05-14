"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowDownUp, Settings2 } from "lucide-react"

const tokens = [
  { symbol: "ETH", name: "Ethereum", chain: "Ethereum" },
  { symbol: "BTC", name: "Bitcoin", chain: "Bitcoin" },
  { symbol: "SOL", name: "Solana", chain: "Solana" },
  { symbol: "XLM", name: "Stellar Lumens", chain: "Stellar" },
  { symbol: "USDC", name: "USD Coin", chain: "Ethereum" },
  { symbol: "USDT", name: "Tether", chain: "Ethereum" },
]

export function SwapInterface() {
  const [fromToken, setFromToken] = useState("ETH")
  const [toToken, setToToken] = useState("SOL")
  const [fromAmount, setFromAmount] = useState("")
  const [toAmount, setToAmount] = useState("")

  const handleSwapDirection = () => {
    const temp = fromToken
    setFromToken(toToken)
    setToToken(temp)
    setFromAmount(toAmount)
    setToAmount(fromAmount)
  }

  const handleFromAmountChange = (value: string) => {
    setFromAmount(value)
    // Simulate exchange rate calculation
    if (value) {
      const rate = 12.5 // Mock rate
      setToAmount((parseFloat(value) * rate).toFixed(4))
    } else {
      setToAmount("")
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-lg">Cross-Chain Swap</CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Settings2 className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* From Token */}
        <div className="space-y-2">
          <Label className="text-muted-foreground">From</Label>
          <div className="flex gap-2">
            <Select value={fromToken} onValueChange={setFromToken}>
              <SelectTrigger className="w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {tokens.map((token) => (
                  <SelectItem key={token.symbol} value={token.symbol}>
                    <span className="font-medium">{token.symbol}</span>
                    <span className="ml-2 text-muted-foreground text-xs">{token.chain}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="number"
              placeholder="0.00"
              value={fromAmount}
              onChange={(e) => handleFromAmountChange(e.target.value)}
              className="flex-1 text-right font-mono"
            />
          </div>
          <p className="text-right text-xs text-muted-foreground">
            Balance: 2.4521 ETH
          </p>
        </div>

        {/* Swap Direction Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="icon"
            onClick={handleSwapDirection}
            className="h-10 w-10 rounded-full"
          >
            <ArrowDownUp className="h-4 w-4" />
          </Button>
        </div>

        {/* To Token */}
        <div className="space-y-2">
          <Label className="text-muted-foreground">To</Label>
          <div className="flex gap-2">
            <Select value={toToken} onValueChange={setToToken}>
              <SelectTrigger className="w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {tokens.map((token) => (
                  <SelectItem key={token.symbol} value={token.symbol}>
                    <span className="font-medium">{token.symbol}</span>
                    <span className="ml-2 text-muted-foreground text-xs">{token.chain}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="number"
              placeholder="0.00"
              value={toAmount}
              readOnly
              className="flex-1 text-right font-mono bg-muted/50"
            />
          </div>
          <p className="text-right text-xs text-muted-foreground">
            Balance: 45.67 SOL
          </p>
        </div>

        {/* Exchange Rate */}
        {fromAmount && toAmount && (
          <div className="rounded-lg bg-muted/50 p-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Exchange Rate</span>
              <span>1 {fromToken} = 12.5 {toToken}</span>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-muted-foreground">Network Fee</span>
              <span>~$2.50</span>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-muted-foreground">Estimated Time</span>
              <span>~2 minutes</span>
            </div>
          </div>
        )}

        {/* Swap Button */}
        <Button className="w-full" size="lg">
          {fromAmount ? "Swap Tokens" : "Enter an amount"}
        </Button>
      </CardContent>
    </Card>
  )
}
