"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { IconCheck } from "@/lib/icons";

interface Props {
  onOpenWaitlist?: () => void;
}

const tabs = [
  { id: "rekalliq", label: "ReKallIQ" },
  { id: "next1", label: "Next Innovation" },
  { id: "next2", label: "Next Innovation" },
  { id: "next3", label: "Next Innovation" },
];

const rekalliqFeatures = [
  "Private RAG over your internal documents",
  "Vector semantic search across all company files",
  "Built-in speech-to-text for voice Q&A",
  "Knowledge-gap analytics & stale content alerts",
  "Role-Based Access Control (RBAC) per workspace",
  "Multi-tenant with strict data isolation per organisation",
  "Admin console with usage dashboards",
  "Enterprise-grade security: data never leaves your org",
];

export default function ProductsSection({ onOpenWaitlist }: Props) {
  const [activeTab, setActiveTab] = useState("rekalliq");

  return (
    <SectionWrapper id="products" className="bg-dark-card">
      <SectionHeader
        tag="Our Products"
        title="Innovative Platforms We've Built"
        subtitle="Discover our flagship products designed to transform businesses and drive digital innovation across industries."
      />

      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-[#0299b1] text-white shadow-lg shadow-[#0299b1]/20"
                : "text-muted border border-white/10 hover:border-white/20 hover:text-white bg-dark-card"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "rekalliq" ? (
          <ReKalliqPanel key="rekalliq" onOpenWaitlist={onOpenWaitlist} />
        ) : (
          <NextInnovationPanel key={activeTab} />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}

function ReKalliqPanel({ onOpenWaitlist }: { onOpenWaitlist?: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
    >
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {["AI-Powered", "Enterprise", "Pilot Programme Open"].map((badge) => (
            <span
              key={badge}
              className="px-3 py-1 text-xs font-semibold tracking-wider uppercase text-[#0299b1] bg-[#0299b1]/10 rounded-full border border-[#0299b1]/20"
            >
              {badge}
            </span>
          ))}
        </div>

        <div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            ReKallIQ
          </h3>
          <p className="mt-2 text-lg text-[#0abde3] font-medium">
            Enterprise Knowledge Intelligence - Reimagined
          </p>
        </div>

        <p className="text-sm text-muted leading-relaxed">
          ReKallIQ is SpringVox&apos;s flagship AI platform that transforms your
          internal documents, policies, and institutional knowledge into a
          secure, always-available AI assistant. Powered by private RAG
          (Retrieval-Augmented Generation), your team gets instant, source-cited
          answers without your data ever touching a public AI model.
        </p>

        <div className="space-y-2.5">
          {rekalliqFeatures.map((feat) => (
            <div
              key={feat}
              className="flex items-start gap-2.5 text-sm text-muted"
            >
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0299b1]/20 flex items-center justify-center mt-0.5">
                <IconCheck className="w-3 h-3 text-[#0299b1]" />
              </span>
              <span>{feat}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://springvox-knowledge-ai.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#0299b1] rounded-xl hover:bg-[#017a8f] transition-all duration-300 shadow-lg shadow-[#0299b1]/20"
          >
            Request Demo / See How It Works
          </a>
          <button
            onClick={onOpenWaitlist}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#0299b1] border border-[#0299b1]/40 rounded-xl hover:bg-[#0299b1]/10 transition-all duration-300"
          >
            Join Beta Waitlist
          </button>
        </div>

        <p className="text-xs text-muted/70 flex items-center gap-1.5">
          <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#0299b1]/20 flex items-center justify-center mt-0.5">
            <svg
              className="w-2.5 h-2.5 text-[#0299b1]"
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
          Selecting a limited number of organisations for our Pilot Programme.
          Free access during pilot in exchange for your feedback.
        </p>
      </div>

      <div className="relative">
        <div className="absolute -top-4 -right-4 flex flex-wrap gap-2 z-10">
          {["RAG-Powered", "Source-Cited", "Private & Secure"].map((pill) => (
            <span
              key={pill}
              className="px-3 py-1 text-xs font-medium text-[#0299b1] bg-[#0299b1]/10 backdrop-blur-sm rounded-full border border-[#0299b1]/20"
            >
              {pill}
            </span>
          ))}
        </div>

        <div
          className="rounded-2xl overflow-hidden border"
          style={{
            background: "rgba(17, 24, 32, 0.6)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderColor: "rgba(2, 153, 177, 0.2)",
            boxShadow:
              "0 0 40px rgba(2, 153, 177, 0.08), 0 0 80px rgba(2, 153, 177, 0.03)",
          }}
        >
          <div className="p-4 sm:p-5 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0299b1] to-[#0abde3] flex items-center justify-center text-white text-xs font-bold">
                SK
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-white">
                  SpringVox Knowledge AI
                </p>
                <p className="text-[10px] text-muted">
                  Workspace: Your Organisation
                </p>
              </div>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-red-400" />
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5 space-y-4">
            <div className="flex justify-end">
              <div className="max-w-[80%] p-3 rounded-2xl rounded-br-sm bg-[#0299b1]/20 border border-[#0299b1]/10">
                <p className="text-xs text-white/90">
                  What does our leave policy say about sick days?
                </p>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="max-w-[85%] p-3 rounded-2xl rounded-bl-sm bg-white/5 border border-white/5">
                <p className="text-xs text-white/90 leading-relaxed">
                  According to your HR Policy document, employees are entitled
                  to 10 sick days per year. Unused days do not roll over but are
                  reviewed annually.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  <span className="px-2 py-0.5 text-[10px] bg-[#0299b1]/10 text-[#0299b1] rounded-full border border-[#0299b1]/20">
                    HR_Policy.pdf
                  </span>
                  <span className="px-2 py-0.5 text-[10px] bg-[#0299b1]/10 text-[#0299b1] rounded-full border border-[#0299b1]/20">
                    Employee_Handbook.docx
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 pl-2">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#0299b1] animate-bounce"
                style={{ animationDelay: "0ms" }}
              />
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#0299b1] animate-bounce"
                style={{ animationDelay: "150ms" }}
              />
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#0299b1] animate-bounce"
                style={{ animationDelay: "300ms" }}
              />
            </div>
          </div>

          <div className="px-4 sm:px-5 py-2.5 border-t border-white/5 text-center">
            <span className="text-[10px] text-muted/50">
              Powered by ReKallIQ
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function NextInnovationPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-lg mx-auto text-center"
    >
      <div
        className="rounded-2xl p-12 sm:p-16 border flex flex-col items-center gap-6"
        style={{
          background: "rgba(17, 24, 32, 0.6)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderColor: "rgba(2, 153, 177, 0.2)",
          boxShadow: "0 0 40px rgba(2, 153, 177, 0.08)",
        }}
      >
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-[#0299b1]/10 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-[#0299b1]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
          <div
            className="absolute inset-0 rounded-full animate-ping opacity-20"
            style={{ backgroundColor: "#0299b1", animationDuration: "3s" }}
          />
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-2">
            Something Powerful is Coming
          </h3>
          <p className="text-sm text-muted leading-relaxed">
            Our team is finalising the next addition to the SpringVox product
            suite. Stay tuned or get early access by joining our community.
          </p>
        </div>

        <button
          onClick={() => {
            if (window.location.pathname === "/") {
              const offset = window.innerWidth < 768 ? 64 : 80;
              const el = document.querySelector("#cta");
              if (el) {
                const top =
                  el.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: "smooth" });
              }
            } else {
              window.location.href = "/#cta";
            }
          }}
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#0299b1] border border-[#0299b1]/40 rounded-xl hover:bg-[#0299b1]/10 transition-all duration-300"
        >
          Stay Updated
        </button>
      </div>
    </motion.div>
  );
}
