"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const studies = [
  {
    title: "Enterprise AI Knowledge Platform",
    client: "Financial Services Company",
    industry: "Banking & Finance",
    challenge:
      "Staff spent 15+ hours per week searching through scattered documents across multiple systems for compliance and policy information.",
    solution:
      "Deployed ReKallIQ with private RAG over 10,000+ internal documents, policies, and training materials with role-based access control.",
    result:
      "90% reduction in document search time, 35% faster employee onboarding, and 100% compliance audit pass rate.",
    metrics: [
      "90% faster search",
      "35% faster onboarding",
      "100% audit pass rate",
    ],
  },
  {
    title: "Cloud Infrastructure Modernization",
    client: "Telecommunications Provider",
    industry: "Telecommunications",
    challenge:
      "Legacy on-premise infrastructure caused frequent outages, slow deployment cycles, and high maintenance costs.",
    solution:
      "Designed and migrated to a multi-cloud architecture on AWS with automated CI/CD pipelines, containerization, and 24/7 monitoring.",
    result:
      "99.9% uptime achieved, deployment time reduced from weeks to hours, and 40% reduction in infrastructure costs.",
    metrics: ["99.9% uptime", "Deploy in hours", "40% cost reduction"],
  },
  {
    title: "Custom CRM & Workflow Automation",
    client: "Logistics & Supply Chain Company",
    industry: "Logistics",
    challenge:
      "Off-the-shelf CRM could not handle unique logistics workflows, leading to manual data entry and tracking errors.",
    solution:
      "Built a custom CRM with automated order tracking, real-time inventory management, and integrated communication tools.",
    result:
      "70% reduction in manual data entry, real-time shipment visibility, and 25% increase in customer satisfaction scores.",
    metrics: [
      "70% less manual entry",
      "Real-time tracking",
      "25% higher satisfaction",
    ],
  },
  {
    title: "Cybersecurity Posture Assessment & Hardening",
    client: "Healthcare Provider",
    industry: "Healthcare",
    challenge:
      "Outdated security infrastructure with no incident response plan, exposing patient data to potential breaches.",
    solution:
      "Conducted full security audit, implemented zero-trust architecture, deployed intrusion detection, and trained staff on security protocols.",
    result:
      "Zero security incidents in 12 months, full NDPR compliance achieved, and security audit score improved from 45% to 92%.",
    metrics: ["Zero incidents", "92% security score", "Full compliance"],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-dark-bg pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase text-[#0299b1] bg-[#0299b1]/10 rounded-full border border-[#0299b1]/20">
            Case Studies
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Success <span className="gradient-text">Stories</span>
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
            See how we have helped businesses transform their technology and
            achieve measurable results.
          </p>
        </div>

        <div className="space-y-8">
          {studies.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-dark-card border border-white/5 hover:border-[#0299b1]/20 transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-semibold text-[#0299b1] bg-[#0299b1]/10 px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mt-3">
                    {study.title}
                  </h2>
                  <p className="text-sm text-muted mt-1">
                    Client: {study.client}
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6 mt-6">
                <div className="lg:col-span-1">
                  <h3 className="text-sm font-semibold text-white mb-2">
                    The Challenge
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {study.challenge}
                  </p>
                </div>
                <div className="lg:col-span-1">
                  <h3 className="text-sm font-semibold text-white mb-2">
                    Our Solution
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {study.solution}
                  </p>
                </div>
                <div className="lg:col-span-1">
                  <h3 className="text-sm font-semibold text-white mb-2">
                    The Results
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {study.result}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {study.metrics.map((m) => (
                      <span
                        key={m}
                        className="text-xs font-medium text-[#0299b1] bg-[#0299b1]/10 px-2.5 py-1 rounded-full"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center p-10 rounded-2xl bg-gradient-to-r from-[#0299b1]/10 to-secondary/10 border border-[#0299b1]/20">
          <h2 className="text-2xl font-bold text-white mb-3">
            Start Your Success Story
          </h2>
          <p className="text-sm text-muted mb-6 max-w-md mx-auto">
            Ready to transform your business? Let&apos;s discuss how we can help
            you achieve your technology goals.
          </p>
          <Button
            variant="primary"
            size="lg"
            showArrow
            href="mailto:contact@springvox.com?subject=Project%20Inquiry"
          >
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  );
}
