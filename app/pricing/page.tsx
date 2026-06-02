"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { IconCheck } from "@/lib/icons";

const tiers = [
  {
    name: "Consultation",
    price: "Free",
    description:
      "Initial discovery call to understand your needs and scope your project.",
    features: [
      "30-minute discovery call",
      "Project scope discussion",
      "Preliminary technology assessment",
      "No obligation",
      "Estimated timeline and budget",
    ],
    cta: "Book Free Consultation",
    href: "mailto:contact@springvox.com?subject=Free%20Consultation",
    featured: false,
  },
  {
    name: "Starter",
    price: "Custom",
    period: "per project",
    description:
      "For small to medium projects with clear requirements and defined scope.",
    features: [
      "Full requirements analysis",
      "UI/UX design & prototyping",
      "Development & testing",
      "Basic CI/CD setup",
      "1-month post-launch support",
      "Dedicated project manager",
    ],
    cta: "Get Started",
    href: "mailto:contact@springvox.com?subject=Starter%20Project",
    featured: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "per engagement",
    description:
      "End-to-end enterprise solutions with ongoing support and strategic partnership.",
    features: [
      "Everything in Starter, plus:",
      "Enterprise architecture design",
      "Advanced security & compliance",
      "24/7 dedicated support",
      "SLA guarantees (99.9% uptime)",
      "Regular performance reviews",
      "Dedicated engineering team",
      "Strategic technology advisory",
    ],
    cta: "Talk to Sales",
    href: "mailto:contact@springvox.com?subject=Enterprise%20Inquiry",
    featured: true,
  },
];

const faqs = [
  {
    q: "How do you price your services?",
    a: "We provide custom quotes based on project complexity, timeline, and resource requirements. Contact us for a free consultation.",
  },
  {
    q: "Do you offer fixed-price contracts?",
    a: "Yes, for well-defined projects. For ongoing work or evolving requirements, we recommend time-and-materials or retainer models.",
  },
  {
    q: "What is your typical project timeline?",
    a: "Small projects can be delivered in 2-4 weeks. Enterprise engagements typically run 2-6 months depending on scope.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. We offer post-launch support, maintenance retainers, and managed services for enterprise clients.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-dark-bg pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase text-[#0299b1] bg-[#0299b1]/10 rounded-full border border-[#0299b1]/20">
            Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
            Every project is unique. We offer flexible engagement models to
            match your budget and requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-20">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative p-6 sm:p-8 rounded-2xl border flex flex-col ${
                tier.featured
                  ? "border-[#0299b1]/40 bg-[#0299b1]/5 shadow-lg shadow-[#0299b1]/10 scale-105"
                  : "border-white/5 bg-dark-card"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold bg-[#0299b1] text-white rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-white mb-1">
                {tier.name}
              </h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-white">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-sm text-muted ml-1">{tier.period}</span>
                )}
              </div>
              <p className="text-sm text-muted mb-6">{tier.description}</p>
              <ul className="space-y-2.5 mb-8 flex-1">
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
                showArrow
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group p-5 rounded-xl bg-dark-card border border-white/5 open:border-[#0299b1]/20"
              >
                <summary className="text-sm font-medium text-white cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <svg
                    className="w-4 h-4 text-muted group-open:rotate-180 transition-transform"
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

        <div className="mt-16 text-center">
          <p className="text-muted text-sm mb-4">
            Need a custom package or have questions?
          </p>
          <Link
            href="/#cta"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#0299b1] rounded-xl hover:bg-[#017a8f] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
