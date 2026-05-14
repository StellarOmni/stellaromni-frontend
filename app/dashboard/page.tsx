import { HeaderEnhanced } from "@/components/header-enhanced"
import { Footer } from "@/components/footer"
import { PortfolioOverviewEnhanced } from "@/components/portfolio-overview-enhanced"
import { SwapInterfaceEnhanced } from "@/components/swap-interface-enhanced"
import { TransactionHistoryEnhanced } from "@/components/transaction-history-enhanced"
import { ChainStatusEnhanced } from "@/components/chain-status-enhanced"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderEnhanced />
      <main className="flex-1 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Manage your cross-chain portfolio and transactions
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Column - Portfolio & Transactions */}
            <div className="space-y-8 lg:col-span-2">
              <PortfolioOverviewEnhanced />
              <TransactionHistoryEnhanced />
            </div>

            {/* Right Column - Swap & Status */}
            <div className="space-y-8">
              <SwapInterfaceEnhanced />
              <ChainStatusEnhanced />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
