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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { 
  ArrowDownUp, 
  Settings2, 
  Search, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle2,
  Clock,
  Info
} from "lucide-react"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { formatCurrency, formatNumber, formatPercentage } from "@/lib/format"
import { cn } from "@/lib/utils"

const tokens = [
  { 
    symbol: "ETH", 
    name: "Ethereum", 
    chain: "Ethereum",
    balance: "2.4521",
    usdValue: 4523.87,
    price: 1845.23,
    change24h: 2.4,
    logo: "🔷"
  },
  { 
    symbol: "BTC", 
    name: "Bitcoin", 
    chain: "Bitcoin",
    balance: "0.1234",
    usdValue: 7821.34,
    price: 63400.00,
    change24h: 5.2,
    logo: "₿"
  },
  { 
    symbol: "SOL", 
    name: "Solana", 
    chain: "Solana",
    balance: "45.67",
    usdValue: 3125.67,
    price: 68.45,
    change24h: -1.2,
    logo: "◎"
  },
  { 
    symbol: "XLM", 
    name: "Stellar Lumens", 
    chain: "Stellar",
    balance: "12345.00",
    usdValue: 1482.90,
    price: 0.12,
    change24h: 0.8,
    logo: "✦"
  },
  { 
    symbol: "USDC", 
    name: "USD Coin", 
    chain: "Ethereum",
    balance: "5000.00",
    usdValue: 5000.00,
    price: 1.00,
    change24h: 0.0,
    logo: "💵"
  },
  { 
    symbol: "USDT", 
    name: "Tether", 
    chain: "Ethereum",
    balance: "3200.00",
    usdValue: 3200.00,
    price: 1.00,
    change24h: 0.0,
    logo: "₮"
  },
]

type SwapStatus = "idle" | "loading" | "success" | "error"

export function SwapInterfaceEnhanced() {
  const [fromToken, setFromToken] = useState("ETH")
  const [toToken, setToToken] = useState("SOL")
  const [fromAmount, setFromAmount] = useState("")
  const [toAmount, setToAmount] = useState("")
  const [slippage, setSlippage] = useState(0.5)
  const [showSettings, setShowSettings] = useState(false)
  const [showTokenSelect, setShowTokenSelect] = useState<"from" | "to" | null>(null)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [swapStatus, setSwapStatus] = useState<SwapStatus>("idle")
  const [searchQuery, setSearchQuery] = useState("")

  const fromTokenData = tokens.find(t => t.symbol === fromToken)
  const toTokenData = tokens.find(t => t.symbol === toToken)

  const handleSwapDirection = () => {
    const temp = fromToken
    setFromToken(toToken)
    setToToken(temp)
    setFromAmount(toAmount)
    setToAmount(fromAmount)
  }

  const handleFromAmountChange = (value: string) => {
    setFromAmount(value)
    if (value && fromTokenData && toTokenData) {
      const rate = toTokenData.price / fromTokenData.price
      setToAmount((parseFloat(value) * rate).toFixed(6))
    } else {
      setToAmount("")
    }
  }

  const handleMaxClick = () => {
    if (fromTokenData) {
      handleFromAmountChange(fromTokenData.balance)
    }
  }

  const priceImpact = fromAmount ? Math.random() * 2 : 0
  const networkFee = 2.50
  const estimatedTime = 2

  const filteredTokens = tokens.filter(token =>
    token.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
    token.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSwap = async () => {
    setShowConfirmation(false)
    setSwapStatus("loading")
    
    // Simulate transaction
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    setSwapStatus("success")
    setTimeout(() => {
      setSwapStatus("idle")
      setFromAmount("")
      setToAmount("")
    }, 2000)
  }

  const TokenSelectDialog = () => (
    <Dialog open={showTokenSelect !== null} onOpenChange={() => setShowTokenSelect(null)}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Select Token</DialogTitle>
          <DialogDescription>
            Choose a token to swap {showTokenSelect === "from" ? "from" : "to"}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by name or symbol"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="max-h-[300px] space-y-1 overflow-y-auto">
            {filteredTokens.map((token) => (
              <button
                key={token.symbol}
                onClick={() => {
                  if (showTokenSelect === "from") {
                    setFromToken(token.symbol)
                  } else {
                    setToToken(token.symbol)
                  }
                  setShowTokenSelect(null)
                  setSearchQuery("")
                }}
                className="flex w-full items-center justify-between rounded-lg p-3 transition-colors hover:bg-muted"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-xl">
                    {token.logo}
                  </div>
                  <div className="text-left">
                    <p className="font-medium">{token.symbol}</p>
                    <p className="text-xs text-muted-foreground">{token.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{formatNumber(parseFloat(token.balance), 4)}</p>
                  <p className="text-xs text-muted-foreground">{formatCurrency(token.usdValue)}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )

  const SettingsDialog = () => (
    <Dialog open={showSettings} onOpenChange={setShowSettings}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Swap Settings</DialogTitle>
          <DialogDescription>
            Customize your swap preferences
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>Slippage Tolerance</Label>
              <span className="text-sm font-medium">{slippage}%</span>
            </div>
            <Slider
              value={[slippage]}
              onValueChange={(value) => setSlippage(value[0])}
              min={0.1}
              max={5}
              step={0.1}
              className="w-full"
            />
            <div className="flex gap-2">
              {[0.5, 1.0, 2.0].map((value) => (
                <Button
                  key={value}
                  variant={slippage === value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSlippage(value)}
                  className="flex-1"
                >
                  {value}%
                </Button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )

  const ConfirmationDialog = () => (
    <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Confirm Swap</DialogTitle>
          <DialogDescription>
            Review your transaction details before confirming
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="rounded-lg bg-muted/50 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{fromTokenData?.logo}</span>
                <div>
                  <p className="font-medium">{fromAmount} {fromToken}</p>
                  <p className="text-xs text-muted-foreground">{fromTokenData?.chain}</p>
                </div>
              </div>
              <ArrowDownUp className="h-5 w-5 text-muted-foreground" />
              <div className="flex items-center gap-2">
                <div className="text-right">
                  <p className="font-medium">{toAmount} {toToken}</p>
                  <p className="text-xs text-muted-foreground">{toTokenData?.chain}</p>
                </div>
                <span className="text-2xl">{toTokenData?.logo}</span>
              </div>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Exchange Rate</span>
              <span>1 {fromToken} = {formatNumber((toTokenData?.price || 0) / (fromTokenData?.price || 1), 4)} {toToken}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Price Impact</span>
              <span className={cn(
                priceImpact > 1 ? "text-warning" : "text-success"
              )}>
                {formatPercentage(priceImpact, 2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Network Fee</span>
              <span>{formatCurrency(networkFee)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Slippage Tolerance</span>
              <span>{slippage}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Estimated Time</span>
              <span>~{estimatedTime} minutes</span>
            </div>
          </div>

          {priceImpact > 1 && (
            <div className="flex gap-2 rounded-lg bg-warning/10 p-3 text-sm">
              <AlertTriangle className="h-4 w-4 shrink-0 text-warning" />
              <p className="text-warning">High price impact. Consider reducing your swap amount.</p>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setShowConfirmation(false)}>
            Cancel
          </Button>
          <Button onClick={handleSwap}>
            Confirm Swap
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )

  return (
    <>
      <Card className="w-full max-w-md backdrop-blur-xl bg-card/80 border-border/50 shadow-2xl">
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <CardTitle className="text-lg">Cross-Chain Swap</CardTitle>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 hover:bg-muted/50"
            onClick={() => setShowSettings(true)}
          >
            <Settings2 className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* From Token */}
          <div className="space-y-2">
            <Label className="text-muted-foreground text-xs">From</Label>
            <div className="relative rounded-xl border border-border bg-muted/30 p-4 transition-all hover:border-primary/50 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
              <div className="flex items-center justify-between gap-2">
                <button
                  onClick={() => setShowTokenSelect("from")}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-muted"
                >
                  <span className="text-2xl">{fromTokenData?.logo}</span>
                  <div className="text-left">
                    <p className="font-semibold">{fromToken}</p>
                    <p className="text-xs text-muted-foreground">{fromTokenData?.chain}</p>
                  </div>
                </button>
                <Input
                  type="number"
                  placeholder="0.00"
                  value={fromAmount}
                  onChange={(e) => handleFromAmountChange(e.target.value)}
                  className="border-0 bg-transparent text-right text-2xl font-semibold focus-visible:ring-0"
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">
                  Balance: {formatNumber(parseFloat(fromTokenData?.balance || "0"), 4)} {fromToken}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleMaxClick}
                  className="h-6 px-2 text-xs text-primary hover:text-primary"
                >
                  MAX
                </Button>
              </div>
            </div>
          </div>

          {/* Swap Direction Button */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/50" />
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={handleSwapDirection}
              className="relative h-10 w-10 rounded-full border-2 bg-background shadow-lg transition-all hover:scale-110 hover:rotate-180 hover:border-primary"
            >
              <ArrowDownUp className="h-4 w-4" />
            </Button>
          </div>

          {/* To Token */}
          <div className="space-y-2">
            <Label className="text-muted-foreground text-xs">To</Label>
            <div className="relative rounded-xl border border-border bg-muted/30 p-4 transition-all hover:border-primary/50">
              <div className="flex items-center justify-between gap-2">
                <button
                  onClick={() => setShowTokenSelect("to")}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-muted"
                >
                  <span className="text-2xl">{toTokenData?.logo}</span>
                  <div className="text-left">
                    <p className="font-semibold">{toToken}</p>
                    <p className="text-xs text-muted-foreground">{toTokenData?.chain}</p>
                  </div>
                </button>
                <Input
                  type="number"
                  placeholder="0.00"
                  value={toAmount}
                  readOnly
                  className="border-0 bg-transparent text-right text-2xl font-semibold focus-visible:ring-0"
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">
                  Balance: {formatNumber(parseFloat(toTokenData?.balance || "0"), 4)} {toToken}
                </span>
              </div>
            </div>
          </div>

          {/* Exchange Details */}
          {fromAmount && toAmount && (
            <div className="space-y-3 rounded-xl border border-border/50 bg-gradient-to-br from-muted/30 to-muted/10 p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Exchange Rate</span>
                <div className="flex items-center gap-1">
                  <span className="font-medium">
                    1 {fromToken} = {formatNumber((toTokenData?.price || 0) / (fromTokenData?.price || 1), 4)} {toToken}
                  </span>
                  <TrendingUp className="h-3 w-3 text-success" />
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1">
                  <span className="text-muted-foreground">Price Impact</span>
                  <Info className="h-3 w-3 text-muted-foreground" />
                </div>
                <span className={cn(
                  "font-medium",
                  priceImpact > 1 ? "text-warning" : "text-success"
                )}>
                  {formatPercentage(priceImpact, 2)}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Network Fee</span>
                <span className="font-medium">{formatCurrency(networkFee)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Estimated Time</span>
                <span className="font-medium">~{estimatedTime} minutes</span>
              </div>
            </div>
          )}

          {/* Swap Button */}
          <Button 
            className="w-full h-12 text-base font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]" 
            size="lg"
            disabled={!fromAmount || swapStatus === "loading"}
            onClick={() => setShowConfirmation(true)}
          >
            {swapStatus === "loading" ? (
              <LoadingSpinner size="sm" />
            ) : swapStatus === "success" ? (
              <>
                <CheckCircle2 className="mr-2 h-5 w-5" />
                Swap Successful!
              </>
            ) : fromAmount ? (
              "Review Swap"
            ) : (
              "Enter an amount"
            )}
          </Button>
        </CardContent>
      </Card>

      <TokenSelectDialog />
      <SettingsDialog />
      <ConfirmationDialog />
    </>
  )
}
