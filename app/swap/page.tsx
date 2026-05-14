import { HeaderEnhanced } from "@/components/header-enhanced"
import { Footer } from "@/components/footer"
import { SwapInterfaceEnhanced } from "@/components/swap-interface-enhanced"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Info, Shield, Zap, Globe2 } from "lucide-react"

export default function SwapPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderEnhanced />
      <main className="flex-1 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight">Cross-Chain Swap</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Swap tokens across any connected blockchain with atomic execution
            </p>
          </div>

          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-center">
            {/* Swap Interface */}
            <SwapInterfaceEnhanced />

            {/* Info Panel */}
            <Card className="w-full max-w-md border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Info className="h-5 w-5 text-primary" />
                  How It Works
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      1
                    </div>
                    <div>
                      <p className="font-semibold">Select Tokens</p>
                      <p className="text-sm text-muted-foreground">
                        Choose the source and destination tokens from any supported chain.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      2
                    </div>
                    <div>
                      <p className="font-semibold">Review & Confirm</p>
                      <p className="text-sm text-muted-foreground">
                        Review the exchange rate, fees, and slippage, then confirm in your wallet.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      3
                    </div>
                    <div>
                      <p className="font-semibold">Atomic Execution</p>
                      <p className="text-sm text-muted-foreground">
                        Your swap is processed atomically on ZetaChain and delivered to the destination.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3 rounded-lg bg-muted/30 p-3">
                    <Globe2 className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">15+ Chains</p>
                      <p className="text-xs text-muted-foreground">Universal connectivity</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-muted/30 p-3">
                    <Zap className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">~2 Minutes</p>
                      <p className="text-xs text-muted-foreground">Average swap time</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-muted/30 p-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">TSS Security</p>
                      <p className="text-xs text-muted-foreground">Decentralized validation</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
