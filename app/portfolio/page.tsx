import { HeaderEnhanced } from "@/components/header-enhanced"
import { Footer } from "@/components/footer"
import { PortfolioOverviewEnhanced } from "@/components/portfolio-overview-enhanced"
import { TransactionHistoryEnhanced } from "@/components/transaction-history-enhanced"

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderEnhanced />
      <main className="flex-1 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight">Portfolio</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              View your complete cross-chain asset portfolio
            </p>
          </div>

          <div className="space-y-8">
            <PortfolioOverviewEnhanced />
            <TransactionHistoryEnhanced />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
