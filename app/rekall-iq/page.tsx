"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { IconCheck, IconX } from "@/lib/icons";
import { trackCTAClick } from "@/lib/analytics";

const differentiators = [
  {
    title: "The Only Africa-First Enterprise AI",
    body: "No competitor claims this position. Every other platform was built for Western enterprises with Western budgets and Western regulations. Rekall-IQ was engineered specifically for African organisations with NDPR compliance built in, pricing designed for African IT budgets, and support that understands your region.",
  },
  {
    title: "Strictest Compliance — No Hallucinations",
    body: "Every other platform can hallucinate. Rekall-IQ has a hard rule: if the answer is not in your approved documents, the system says 'I don't know' and escalates. Zero hallucination risk. No guessing.",
  },
  {
    title: "Price-Accessible",
    body: "Glean costs $60K/year minimum. Notion AI requires $12K/year minimum. Rekall-IQ's Pilot tier brings enterprise AI within reach for organisations that could not previously afford it.",
  },
  {
    title: "NDPR Alignment",
    body: "Nigerian organisations face NDPR requirements that make ChatGPT and MS Copilot risky. Rekall-IQ was engineered with NDPR compliance from the ground up.",
  },
  {
    title: "Voice Queries",
    body: "Field technicians, clinical staff, and hands-on teams can ask questions hands-free with native speech-to-text. No competitor offers this as a native feature.",
  },
  {
    title: "Knowledge Gap Analytics",
    body: "See the questions your staff ask that your documents cannot answer. This actionable intelligence shows where knowledge gaps exist and what training is needed.",
  },
  {
    title: "No Duplicate Data Storage",
    body: "Rekall-IQ answers from source documents only. Your data never leaves your control. Smaller audit scope, happier compliance team.",
  },
  {
    title: "Days to Value, Not Months",
    body: "Upload your documents, set permissions, invite users, go live. Most clients are live within days, not the months that Glean or Confluence migrations require.",
  },
];

const industries = [
  {
    name: "Banking & Finance",
    problem: "Regulatory compliance, staff training on complex policies",
    solution:
      "NDPR-compliant AI that keeps sensitive financial data safe while empowering teams",
  },
  {
    name: "Healthcare",
    problem:
      "Clinical staff need instant protocol access without leaving the patient",
    solution:
      "Voice-powered knowledge AI designed for hands-on healthcare environments",
  },
  {
    name: "Legal & Compliance",
    problem: "Hallucination risk makes AI untrustworthy with case law",
    solution:
      "The only enterprise AI with zero hallucination answers from your approved docs only",
  },
  {
    name: "Government & NGO",
    problem: "Budget constraints and rigorous compliance requirements",
    solution: "Enterprise AI designed for lean budgets and rigorous compliance",
  },
  {
    name: "Manufacturing & Logistics",
    problem: "Field technicians need instant troubleshooting guidance",
    solution:
      "Voice-enabled knowledge search for teams working with their hands",
  },
  {
    name: "Telecom & Utilities",
    problem:
      "Field staff need 24/7 access to troubleshooting and compliance docs",
    solution:
      "Mobile-first, voice-enabled knowledge platform for distributed teams",
  },
  {
    name: "Education",
    problem:
      "Students and staff need instant access to institutional knowledge",
    solution:
      "Secure, affordable knowledge platform for educational institutions",
  },
];

const features = [
  "Private RAG over internal documents",
  "Vector semantic search across all company files",
  "Built-in speech-to-text for voice queries",
  "Knowledge-gap analytics and stale content alerts",
  "Role-Based Access Control per workspace",
  "Multi-tenant with strict data isolation",
  "Admin console with usage dashboards",
  "Enterprise-grade security",
  "NDPR compliance built in",
  "Multi-language support (English, Yoruba, Hausa, more)",
];

const pricingTiers = [
  {
    name: "Pilot",
    price: "Free",
    period: "during pilot",
    description:
      "For organisations ready to test Rekall-IQ with limited scope.",
    features: [
      "Up to 500 documents",
      "Up to 25 users",
      "Basic RAG querying",
      "Email support",
      "30-day pilot period",
    ],
    cta: "Join Pilot Program",
    href: "mailto:contact@springvox.com?subject=RekallIQ%20Pilot%20Program",
  },
  {
    name: "Starter",
    price: "Custom",
    description:
      "For small teams ready to deploy Rekall-IQ across their department.",
    features: [
      "Up to 5,000 documents",
      "Up to 100 users",
      "Advanced RAG + analytics",
      "Voice query support",
      "Standard support",
      "Admin dashboard",
    ],
    cta: "Get Started",
    href: "mailto:contact@springvox.com?subject=RekallIQ%20Starter",
    featured: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description:
      "Full deployment across your entire organisation with dedicated support.",
    features: [
      "Unlimited documents",
      "Unlimited users",
      "All features included",
      "Dedicated account manager",
      "24/7 premium support",
      "Custom integrations",
      "SLA guarantees",
      "On-premise option",
    ],
    cta: "Talk to Sales",
    href: "mailto:contact@springvox.com?subject=RekallIQ%20Enterprise",
    featured: true,
  },
];

const comparisonRows = [
  {
    feature: "Document-only RAG",
    rekalliq: true,
    glean: false,
    guru: "Partial",
    notion: false,
    copilot: false,
    chatgpt: false,
  },
  {
    feature: "No hallucination risk",
    rekalliq: true,
    glean: false,
    guru: "Partial",
    notion: false,
    copilot: false,
    chatgpt: false,
  },
  {
    feature: "NDPR compliant",
    rekalliq: true,
    glean: false,
    guru: false,
    notion: false,
    copilot: false,
    chatgpt: false,
  },
  {
    feature: "Africa-first support",
    rekalliq: true,
    glean: false,
    guru: false,
    notion: false,
    copilot: false,
    chatgpt: false,
  },
  {
    feature: "Speech-to-text native",
    rekalliq: true,
    glean: false,
    guru: false,
    notion: false,
    copilot: "Partial",
    chatgpt: "Partial",
  },
  {
    feature: "Knowledge gap analytics",
    rekalliq: true,
    glean: "Partial",
    guru: "Partial",
    notion: false,
    copilot: false,
    chatgpt: false,
  },
  {
    feature: "Multi-tenant isolation",
    rekalliq: true,
    glean: "Partial",
    guru: false,
    notion: false,
    copilot: false,
    chatgpt: false,
  },
  {
    feature: "Affordable pilot tier",
    rekalliq: true,
    glean: false,
    guru: false,
    notion: "Partial",
    copilot: false,
    chatgpt: "Partial",
  },
];

const faqs = [
  {
    q: "How is Rekall-IQ different from ChatGPT Enterprise?",
    a: "ChatGPT can hallucinate answers outside your documents. Rekall-IQ has a hard rule: if it is not in your approved documents, it says 'I don't know.' For compliance-sensitive work, that is the difference between approved and banned.",
  },
  {
    q: "Can you compare Rekall-IQ to Glean?",
    a: "Glean is the category leader but costs $60K/year minimum and is not built for African regulations. Rekall-IQ's pilot tier is more affordable, NDPR-compliant, and designed specifically for African enterprises.",
  },
  {
    q: "Why is NDPR compliance important?",
    a: "Nigerian organisations handling personal or sensitive data face NDPR requirements. Tools not built for NDPR compliance create legal risk. Rekall-IQ was engineered with NDPR in mind.",
  },
  {
    q: "How quickly can we go live?",
    a: "Most platforms take months. With Rekall-IQ: upload your documents, set permissions, invite users, go live. Most clients go live within days.",
  },
  {
    q: "Can Rekall-IQ handle multiple languages?",
    a: "Yes. Built for teams across Nigeria, Ghana, Kenya, and beyond supporting English, Yoruba, Hausa, and other languages your team uses.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. Rekall-IQ answers from source documents only. Your data never leaves your control. No duplicate storage. Full audit trails.",
  },
  {
    q: "What is the Pilot Program?",
    a: "A limited free program for organisations to test Rekall-IQ with real use cases. Free access during the pilot in exchange for your feedback.",
  },
  {
    q: "Do I need technical expertise to set it up?",
    a: "No. Upload your documents, set user permissions, and invite your team. Our support team will guide you through the process.",
  },
];

function ComparisonCell({ value }: { value: boolean | string }) {
  if (value === true)
    return <IconCheck className="w-4 h-4 text-green-400 mx-auto" />;
  if (value === "Partial")
    return <span className="text-xs text-yellow-400 text-center block">~</span>;
  return <IconX className="w-4 h-4 text-red-400/60 mx-auto" />;
}

export default function RekallIQPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0299b1]/5 via-dark-bg to-dark-bg pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#0299b1]/10 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase text-[#0299b1] bg-[#0299b1]/10 rounded-full border border-[#0299b1]/20">
              Rekall-IQ Product
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6"
          >
            The Enterprise Knowledge AI
            <br />
            <span className="gradient-text">Built for Africa</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted max-w-3xl mx-auto mb-8"
          >
            Secure. Compliant. Intelligent. The only enterprise knowledge AI
            that is Africa-first, NDPR-compliant, and affordable. Document-only.
            No hallucinations. Results in days, not months.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              showArrow
              href="mailto:contact@springvox.com?subject=RekallIQ%20Pilot%20Program"
              onClick={() =>
                trackCTAClick("Start Pilot Program", "rekall_iq_hero")
              }
            >
              Start Pilot Program
            </Button>
            <Button
              variant="outline"
              size="lg"
              showArrow
              href="https://springvox-knowledge-ai.vercel.app/"
              target="_blank"
              onClick={() =>
                trackCTAClick("See How It Works", "rekall_iq_hero")
              }
            >
              See How It Works
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-16 sm:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-red-400 bg-red-400/10 px-3 py-1 rounded-full">
                The Problem
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-4 mb-4">
                Enterprise Knowledge Is Broken
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                Your organisation&apos;s critical knowledge is scattered across
                documents, emails, wikis, and chat threads. Staff waste hours
                searching for information. Compliance teams worry about data
                leaving approved systems. And when you look at enterprise AI
                solutions, they are either too expensive, not compliant, or
                built for someone else&apos;s market.
              </p>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl bg-dark-card border border-white/5">
              <span className="text-xs font-semibold tracking-widest uppercase text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                The Solution
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-4 mb-4">
                Rekall-IQ Changes That
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                A secure, compliant, and affordable knowledge AI platform that
                understands your documents, your regulations, and your budget.
                Upload your files, set permissions, and give your team instant
                access to institutional knowledge with confidence, speed, and
                full compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 sm:py-20 bg-dark-card border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Rekall-IQ?
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Eight reasons enterprise teams choose Rekall-IQ over every other
              option.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-5 rounded-xl bg-dark-bg border border-white/5 hover:border-[#0299b1]/20 transition-colors"
              >
                <span className="text-[#0299b1] text-lg font-bold mb-2 block">
                  0{i + 1}
                </span>
                <h3 className="text-sm font-semibold text-white mb-2">
                  {d.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">{d.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Built for Every Industry
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Rekall-IQ adapts to your industry&apos;s unique challenges and
              compliance requirements.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-5 rounded-xl bg-dark-card border border-white/5"
              >
                <h3 className="text-sm font-semibold text-white mb-1">
                  {ind.name}
                </h3>
                <p className="text-xs text-muted/70 mb-2">
                  <span className="text-yellow-400">Pain:</span> {ind.problem}
                </p>
                <p className="text-xs text-[#0299b1]">
                  <span className="text-green-400">Fix:</span> {ind.solution}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 bg-dark-card border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Everything You Need
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              A comprehensive feature set designed for enterprise knowledge
              management.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {features.map((f) => (
              <div
                key={f}
                className="flex items-center gap-2 p-3 rounded-lg bg-dark-bg border border-white/5"
              >
                <IconCheck className="w-4 h-4 text-[#0299b1] flex-shrink-0" />
                <span className="text-xs text-muted">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Enterprise AI that does not require an enterprise budget. Start
              with our free Pilot tier.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`relative p-6 rounded-2xl border flex flex-col ${tier.featured ? "border-[#0299b1]/40 bg-[#0299b1]/5 scale-105 shadow-lg" : "border-white/5 bg-dark-card"}`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold bg-[#0299b1] text-white rounded-full">
                    Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-white">
                  {tier.name}
                </h3>
                <div className="my-3">
                  <span className="text-3xl font-bold text-white">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-sm text-muted ml-1">
                      {tier.period}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted mb-4">{tier.description}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <IconCheck className="w-4 h-4 text-[#0299b1] mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.featured ? "primary" : "outline"}
                  href={tier.href}
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 sm:py-20 bg-dark-card border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How We Compare
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              See how Rekall-IQ stacks up against the competition.
            </p>
          </div>
          <div className="overflow-x-auto max-w-5xl mx-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 pr-4 text-muted font-medium">
                    Feature
                  </th>
                  <th className="text-center py-3 px-3 text-[#0299b1] font-bold">
                    Rekall-IQ
                  </th>
                  <th className="text-center py-3 px-3 text-muted">Glean</th>
                  <th className="text-center py-3 px-3 text-muted">Guru</th>
                  <th className="text-center py-3 px-3 text-muted">
                    Notion AI
                  </th>
                  <th className="text-center py-3 px-3 text-muted">
                    MS Copilot
                  </th>
                  <th className="text-center py-3 px-3 text-muted">ChatGPT</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-white/5">
                    <td className="py-3 pr-4 text-white">{row.feature}</td>
                    <td className="py-3 px-3">
                      <ComparisonCell value={row.rekalliq} />
                    </td>
                    <td className="py-3 px-3">
                      <ComparisonCell value={row.glean} />
                    </td>
                    <td className="py-3 px-3">
                      <ComparisonCell value={row.guru} />
                    </td>
                    <td className="py-3 px-3">
                      <ComparisonCell value={row.notion} />
                    </td>
                    <td className="py-3 px-3">
                      <ComparisonCell value={row.copilot} />
                    </td>
                    <td className="py-3 px-3">
                      <ComparisonCell value={row.chatgpt} />
                    </td>
                  </tr>
                ))}
                <tr className="border-t border-white/10">
                  <td className="py-3 pr-4 text-muted text-xs">
                    Starting price
                  </td>
                  <td className="py-3 px-3 text-center text-[#0299b1] text-xs font-semibold">
                    Pilot tier
                  </td>
                  <td className="py-3 px-3 text-center text-muted text-xs">
                    $50+/user
                  </td>
                  <td className="py-3 px-3 text-center text-muted text-xs">
                    $10-25
                  </td>
                  <td className="py-3 px-3 text-center text-muted text-xs">
                    $10-20
                  </td>
                  <td className="py-3 px-3 text-center text-muted text-xs">
                    $18-30
                  </td>
                  <td className="py-3 px-3 text-center text-muted text-xs">
                    $30+/user
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Security & Compliance
          </h2>
          <p className="text-muted max-w-2xl mx-auto mb-8">
            Your data stays your data. Built for the strictest regulatory
            environments.
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {[
              "NDPR Compliant",
              "Document-Only RAG",
              "No Hallucination",
              "Data Isolation",
              "Full Audit Trails",
              "RBAC",
              "Encrypted at Rest",
              "Encrypted in Transit",
            ].map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 text-sm font-medium text-[#0299b1] bg-[#0299b1]/10 border border-[#0299b1]/20 rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Readiness CTA */}
      <section className="py-16 sm:py-20 bg-dark-card border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Is Your Organisation AI-Ready?
          </h2>
          <p className="text-muted max-w-2xl mx-auto mb-6">
            Take our 28-question AI Readiness Checklist to assess your
            organisation&apos;s preparedness for enterprise AI deployment.
          </p>
          <Link
            href="/rekall-iq/readiness"
            onClick={() =>
              trackCTAClick("Take Readiness Assessment", "rekall_iq_cta")
            }
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white bg-[#0299b1] rounded-xl hover:bg-[#017a8f] transition-colors shadow-lg shadow-[#0299b1]/20"
          >
            Take the Readiness Assessment
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group p-5 rounded-xl bg-dark-card border border-white/5 open:border-[#0299b1]/20"
              >
                <summary className="text-sm font-medium text-white cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <svg
                    className="w-4 h-4 text-muted group-open:rotate-180 transition-transform flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-28 bg-gradient-to-r from-[#0299b1]/10 to-secondary/10 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Launch?
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
            Go live this week, not this quarter. Join the Rekall-IQ Pilot
            Program today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              showArrow
              href="mailto:contact@springvox.com?subject=RekallIQ%20Pilot%20Program"
              onClick={() =>
                trackCTAClick("Start Pilot Program", "rekall_iq_final_cta")
              }
            >
              Start Pilot Program
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="mailto:contact@springvox.com?subject=RekallIQ%20Question"
              onClick={() =>
                trackCTAClick("Ask a Question", "rekall_iq_final_cta")
              }
            >
              Ask a Question
            </Button>
            <Link
              href="/rekall-iq/readiness"
              onClick={() =>
                trackCTAClick(
                  "Take Readiness Assessment",
                  "rekall_iq_final_cta",
                )
              }
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-[#0299b1] border border-[#0299b1]/40 rounded-xl hover:bg-[#0299b1]/10 transition-colors"
            >
              Take Readiness Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
