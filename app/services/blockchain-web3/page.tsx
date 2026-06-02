import ServicePageLayout from "@/components/layout/ServicePageLayout";

const data = {
  name: "Blockchain & Web3",
  tagline:
    "Smart contracts, tokenisation, and decentralised application development.",
  overview: [
    "We build decentralised applications, smart contracts, and tokenisation solutions on public and private blockchains. Focused on real business utility - not hype.",
    "From supply chain traceability to decentralised finance (DeFi) protocols, we help organisations explore and implement blockchain where it genuinely adds value.",
  ],
  deliverables: [
    "Smart contract development (Solidity, Rust)",
    "NFT & tokenisation platforms",
    "DeFi protocol integrations",
    "Private/permissioned blockchain networks (Hyperledger)",
    "Wallet & dApp development",
    "Security audits & gas optimisation",
  ],
  forWhom: [
    {
      icon: "\uD83C\uDFE6",
      label: "Fintechs",
      description: "Exploring tokenised assets and programmable money.",
    },
    {
      icon: "\uD83D\uDEE1\uFE0F",
      label: "Supply Chains",
      description: "Needing immutable audit trails for goods.",
    },
    {
      icon: "\uD83C\uDFDB\uFE0F",
      label: "Organisations",
      description: "Experimenting with decentralised governance models.",
    },
  ],
  differentiators: [
    "We only recommend blockchain when it solves a real problem - we will tell you if a database suffices.",
    "Multi-chain expertise: Ethereum, Polygon, Solana, Hyperledger - we choose the right chain for the use case.",
    "Security-first: every smart contract undergoes rigorous testing and audit before mainnet deployment.",
  ],
};

export default function Page() {
  return <ServicePageLayout data={data} />;
}
