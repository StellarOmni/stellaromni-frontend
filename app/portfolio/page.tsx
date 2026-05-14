import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PortfolioOverview } from "@/components/portfolio-overview"
import { TransactionHistory } from "@/components/transaction-history"

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Portfolio</h1>
            <p className="text-muted-foreground">
              View your complete cross-chain asset portfolio
            </p>
          </div>

          <div className="space-y-8">
            <PortfolioOverview />
            <TransactionHistory />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
