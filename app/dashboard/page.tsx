import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PortfolioOverview } from "@/components/portfolio-overview"
import { SwapInterface } from "@/components/swap-interface"
import { TransactionHistory } from "@/components/transaction-history"
import { ChainStatus } from "@/components/chain-status"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your cross-chain portfolio and transactions
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Column - Portfolio & Swap */}
            <div className="space-y-8 lg:col-span-2">
              <PortfolioOverview />
              <TransactionHistory />
            </div>

            {/* Right Column - Swap & Status */}
            <div className="space-y-8">
              <SwapInterface />
              <ChainStatus />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
