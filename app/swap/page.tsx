import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SwapInterface } from "@/components/swap-interface"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Info } from "lucide-react"

export default function SwapPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold">Cross-Chain Swap</h1>
            <p className="text-muted-foreground">
              Swap tokens across any connected blockchain with atomic execution
            </p>
          </div>

          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-center">
            {/* Swap Interface */}
            <SwapInterface />

            {/* Info Panel */}
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Info className="h-5 w-5" />
                  How It Works
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <Badge variant="outline" className="h-6 w-6 shrink-0 items-center justify-center rounded-full p-0">
                      1
                    </Badge>
                    <div>
                      <p className="font-medium">Select Tokens</p>
                      <p className="text-sm text-muted-foreground">
                        Choose the source and destination tokens from any supported chain.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Badge variant="outline" className="h-6 w-6 shrink-0 items-center justify-center rounded-full p-0">
                      2
                    </Badge>
                    <div>
                      <p className="font-medium">Confirm Transaction</p>
                      <p className="text-sm text-muted-foreground">
                        Review the exchange rate and fees, then confirm in your wallet.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Badge variant="outline" className="h-6 w-6 shrink-0 items-center justify-center rounded-full p-0">
                      3
                    </Badge>
                    <div>
                      <p className="font-medium">Atomic Execution</p>
                      <p className="text-sm text-muted-foreground">
                        Your swap is processed atomically on ZetaChain and delivered to the destination.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-muted/50 p-4 text-sm">
                  <p className="font-medium">Supported Chains</p>
                  <p className="mt-1 text-muted-foreground">
                    Ethereum, Bitcoin, Solana, Stellar, Polygon, Arbitrum, BSC, and more.
                  </p>
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
