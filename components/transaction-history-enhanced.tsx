"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  ExternalLink,
  Search,
  Filter,
  Download
} from "lucide-react"
import { EmptyState } from "@/components/ui/empty-state"
import { formatNumber, truncateAddress } from "@/lib/format"
import { cn } from "@/lib/utils"

type TransactionStatus = "completed" | "pending" | "failed"

interface Transaction {
  id: string
  from: { chain: string; amount: string; symbol: string; logo: string }
  to: { chain: string; amount: string; symbol: string; logo: string }
  status: TransactionStatus
  timestamp: string
  txHash: string
}

const transactions: Transaction[] = [
  {
    id: "1",
    from: { chain: "Ethereum", amount: "1.5", symbol: "ETH", logo: "🔷" },
    to: { chain: "Solana", amount: "187.5", symbol: "SOL", logo: "◎" },
    status: "completed",
    timestamp: "2 hours ago",
    txHash: "0x1234567890abcdef",
  },
  {
    id: "2",
    from: { chain: "Bitcoin", amount: "0.05", symbol: "BTC", logo: "₿" },
    to: { chain: "Stellar", amount: "8,234.56", symbol: "XLM", logo: "✦" },
    status: "pending",
    timestamp: "15 minutes ago",
    txHash: "0xabcdef1234567890",
  },
  {
    id: "3",
    from: { chain: "Solana", amount: "25", symbol: "SOL", logo: "◎" },
    to: { chain: "Ethereum", amount: "0.2", symbol: "ETH", logo: "🔷" },
    status: "completed",
    timestamp: "1 day ago",
    txHash: "0x9876543210fedcba",
  },
  {
    id: "4",
    from: { chain: "Stellar", amount: "5,000", symbol: "XLM", logo: "✦" },
    to: { chain: "Bitcoin", amount: "0.003", symbol: "BTC", logo: "₿" },
    status: "failed",
    timestamp: "3 days ago",
    txHash: "0xfedcba0987654321",
  },
]

const statusConfig: Record<TransactionStatus, { 
  icon: React.ReactNode
  className: string
  label: string
  bgClass: string
}> = {
  completed: {
    icon: <CheckCircle2 className="h-4 w-4" />,
    className: "text-success",
    bgClass: "bg-success/10",
    label: "Completed",
  },
  pending: {
    icon: <Clock className="h-4 w-4 animate-pulse" />,
    className: "text-warning",
    bgClass: "bg-warning/10",
    label: "Pending",
  },
  failed: {
    icon: <AlertCircle className="h-4 w-4" />,
    className: "text-destructive",
    bgClass: "bg-destructive/10",
    label: "Failed",
  },
}

export function TransactionHistoryEnhanced() {
  const [filter, setFilter] = useState<TransactionStatus | "all">("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTransactions = transactions.filter((tx) => {
    const matchesFilter = filter === "all" || tx.status === filter
    const matchesSearch = 
      tx.from.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.to.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.txHash.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Transaction History</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
        
        {/* Filters */}
        <div className="flex flex-col gap-3 pt-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search transactions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <Select value={filter} onValueChange={(value) => setFilter(value as TransactionStatus | "all")}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Transactions</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {filteredTransactions.length === 0 ? (
          <EmptyState
            icon={Search}
            title="No transactions found"
            description="Try adjusting your search or filter criteria"
          />
        ) : (
          filteredTransactions.map((tx) => {
            const status = statusConfig[tx.status]
            return (
              <div
                key={tx.id}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  {/* Transaction Flow */}
                  <div className="flex items-center gap-3">
                    {/* From Token */}
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-xl">
                        {tx.from.logo}
                      </div>
                      <div className="text-left">
                        <p className="font-semibold">
                          {formatNumber(parseFloat(tx.from.amount), 4)} {tx.from.symbol}
                        </p>
                        <p className="text-xs text-muted-foreground">{tx.from.chain}</p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center">
                      <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                    </div>

                    {/* To Token */}
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-xl">
                        {tx.to.logo}
                      </div>
                      <div className="text-left">
                        <p className="font-semibold">
                          {formatNumber(parseFloat(tx.to.amount.replace(/,/g, "")), 4)} {tx.to.symbol}
                        </p>
                        <p className="text-xs text-muted-foreground">{tx.to.chain}</p>
                      </div>
                    </div>
                  </div>

                  {/* Status and Details */}
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-end gap-2">
                      <Badge 
                        variant="secondary" 
                        className={cn("gap-1", status.bgClass, status.className)}
                      >
                        {status.icon}
                        {status.label}
                      </Badge>
                      <p className="text-xs text-muted-foreground">{tx.timestamp}</p>
                    </div>
                    
                    {/* View Transaction Link */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100"
                      onClick={() => window.open(`https://explorer.zetachain.com/tx/${tx.txHash}`, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Transaction Hash */}
                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <span>Tx Hash:</span>
                  <code className="rounded bg-muted px-2 py-1 font-mono">
                    {truncateAddress(tx.txHash, 8, 6)}
                  </code>
                </div>
              </div>
            )
          })
        )}
      </CardContent>
    </Card>
  )
}
