"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2, Clock, AlertCircle } from "lucide-react"

type TransactionStatus = "completed" | "pending" | "failed"

interface Transaction {
  id: string
  from: { chain: string; amount: string; symbol: string }
  to: { chain: string; amount: string; symbol: string }
  status: TransactionStatus
  timestamp: string
  txHash: string
}

const transactions: Transaction[] = [
  {
    id: "1",
    from: { chain: "Ethereum", amount: "1.5", symbol: "ETH" },
    to: { chain: "Solana", amount: "187.5", symbol: "SOL" },
    status: "completed",
    timestamp: "2 hours ago",
    txHash: "0x1234...5678",
  },
  {
    id: "2",
    from: { chain: "Bitcoin", amount: "0.05", symbol: "BTC" },
    to: { chain: "Stellar", amount: "8,234.56", symbol: "XLM" },
    status: "pending",
    timestamp: "15 minutes ago",
    txHash: "0xabcd...efgh",
  },
  {
    id: "3",
    from: { chain: "Solana", amount: "25", symbol: "SOL" },
    to: { chain: "Ethereum", amount: "0.2", symbol: "ETH" },
    status: "completed",
    timestamp: "1 day ago",
    txHash: "0x9876...5432",
  },
  {
    id: "4",
    from: { chain: "Stellar", amount: "5,000", symbol: "XLM" },
    to: { chain: "Bitcoin", amount: "0.003", symbol: "BTC" },
    status: "failed",
    timestamp: "3 days ago",
    txHash: "0xfedc...ba98",
  },
]

const statusConfig: Record<TransactionStatus, { icon: React.ReactNode; className: string; label: string }> = {
  completed: {
    icon: <CheckCircle2 className="h-4 w-4" />,
    className: "bg-success/10 text-success",
    label: "Completed",
  },
  pending: {
    icon: <Clock className="h-4 w-4" />,
    className: "bg-warning/10 text-warning",
    label: "Pending",
  },
  failed: {
    icon: <AlertCircle className="h-4 w-4" />,
    className: "bg-destructive/10 text-destructive",
    label: "Failed",
  },
}

export function TransactionHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {transactions.map((tx) => {
          const status = statusConfig[tx.status]
          return (
            <div
              key={tx.id}
              className="flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-muted/50"
            >
              <div className="flex items-center gap-4">
                {/* Transaction Flow */}
                <div className="flex items-center gap-2 text-sm">
                  <div className="text-center">
                    <p className="font-medium">{tx.from.amount} {tx.from.symbol}</p>
                    <p className="text-xs text-muted-foreground">{tx.from.chain}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  <div className="text-center">
                    <p className="font-medium">{tx.to.amount} {tx.to.symbol}</p>
                    <p className="text-xs text-muted-foreground">{tx.to.chain}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <Badge variant="secondary" className={`gap-1 ${status.className}`}>
                    {status.icon}
                    {status.label}
                  </Badge>
                  <p className="mt-1 text-xs text-muted-foreground">{tx.timestamp}</p>
                </div>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
