"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface ServicePageData {
  name: string;
  tagline: string;
  overview: string[];
  deliverables: string[];
  forWhom: { icon: string; label: string; description: string }[];
  differentiators: string[];
}

export default function ServicePageLayout({ data }: { data: ServicePageData }) {
  return (
    <div className="min-h-screen bg-dark-bg pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/#services"
          className="inline-flex items-center gap-1 text-sm text-muted hover:text-[#0299b1] transition-colors mb-6"
        >
          Back to Services
        </Link>

        <div className="mb-6 h-1 w-16 bg-[#0299b1] rounded-full" />

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
          {data.name}
        </h1>
        <p className="text-lg sm:text-xl text-[#0299b1] font-medium mb-10">
          {data.tagline}
        </p>

        <div className="max-w-3xl mb-12 space-y-4">
          {data.overview.map((para, i) => (
            <p
              key={i}
              className="text-sm sm:text-base text-muted leading-relaxed"
            >
              {para}
            </p>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            What We Deliver
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {data.deliverables.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-lg bg-dark-card border border-white/5"
              >
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0299b1]/20 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-3 h-3 text-[#0299b1]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="text-sm text-muted">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Who It&apos;s For
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {data.forWhom.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-dark-card border border-white/5"
              >
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h3 className="text-sm font-semibold text-white mb-1">
                  {item.label}
                </h3>
                <p className="text-xs text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Why SpringVox</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {data.differentiators.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-[#0299b1]/20 bg-[#0299b1]/5"
              >
                <span className="text-[#0299b1] text-lg font-bold mb-2 block">
                  0{i + 1}
                </span>
                <p className="text-sm text-muted">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0299b1]/10 to-secondary/10 border border-[#0299b1]/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to get started?
          </h2>
          <p className="text-sm text-muted mb-6 max-w-md mx-auto">
            Let&apos;s talk about how SpringVox can help you achieve your goals.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              showArrow
              href="mailto:contact@springvox.com"
            >
              Let&apos;s Talk
            </Button>
            <Button variant="outline" size="lg" href="/#cta">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/#services"
            className="inline-flex items-center gap-1 text-sm text-muted hover:text-[#0299b1] transition-colors"
          >
            Back to All Services
          </Link>
        </div>
      </div>
    </div>
  );
}
