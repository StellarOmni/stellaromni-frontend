# StellarOmni Frontend

> Universal cross-chain protocol interface built on ZetaChain

StellarOmni is a Next.js web application that provides a seamless interface for cross-chain transactions across Bitcoin, Ethereum, Solana, Stellar, and more. Built on ZetaChain's Universal Apps architecture, it enables native asset transfers without bridges or wrapped tokens.

## Features

- **Universal Cross-Chain Swaps** - Trade assets across 15+ blockchains from a single interface
- **Portfolio Management** - Track and manage multi-chain assets in one dashboard
- **Atomic Execution** - All transactions complete fully or revert entirely
- **TSS Security** - Decentralized key management with threshold signatures
- **ZRC-20 Standard** - Native assets automatically converted to programmable tokens

## Tech Stack

- **Framework**: Next.js 16 with React 19
- **Styling**: Tailwind CSS 4 with custom design system
- **UI Components**: Radix UI primitives
- **Web3**: wagmi + viem for blockchain interactions
- **State Management**: TanStack Query
- **Forms**: React Hook Form + Zod validation
- **Theme**: next-themes with dark mode support

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/StellarOmni/stellaromni-frontend.git
cd stellaromni-frontend

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Available Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## Project Structure

```
stellaromni-frontend/
├── app/                    # Next.js app router pages
│   ├── dashboard/         # User dashboard
│   ├── swap/              # Token swap interface
│   ├── portfolio/         # Portfolio management
│   └── docs/              # Documentation
├── components/            # React components
│   ├── ui/               # Reusable UI primitives
│   ├── swap-interface.tsx
│   ├── portfolio-overview.tsx
│   └── transaction-history.tsx
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
└── public/               # Static assets
```

## Architecture

StellarOmni is part of a multi-repository ecosystem:

- **stellaromni-contracts** - Rust smart contracts for ZetaChain
- **stellaromni-backend** - Node infrastructure (Rust + SQLite)
- **stellaromni-frontend** - This repository
- **stellaromni-mobile** - React Native mobile app (coming soon)

## Key Pages

- `/` - Landing page with protocol overview
- `/dashboard` - User dashboard with portfolio and activity
- `/swap` - Cross-chain token swap interface
- `/portfolio` - Multi-chain asset management
- `/docs` - Protocol documentation

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Links

- [GitHub Organization](https://github.com/StellarOmni)
- [ZetaChain Documentation](https://www.zetachain.com/docs)
- [Live Demo](https://stellaromni.vercel.app) _(coming soon)_

## Stats

- **Total Value Locked**: $97M+
- **Supported Chains**: 15
- **Transactions**: 2.5M+
- **Active Users**: 41K+

---

Built with ⚡ by the StellarOmni team
