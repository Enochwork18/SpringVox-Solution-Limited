"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { trackCTAClick } from "@/lib/analytics";

interface Props {
  onOpenWaitlist?: () => void;
}

export default function CtaSection({ onOpenWaitlist }: Props) {
  return (
    <section
      id="cta"
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg to-dark-card pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 rounded-full border border-primary/20">
            Let&apos;s Build Together
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
        >
          Ready to Transform Your{" "}
          <span className="gradient-text">Business</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-base sm:text-lg text-muted max-w-2xl mx-auto"
        >
          Let&apos;s discuss how SpringVox Solution Limited can help you achieve
          your technology goals with innovative, scalable, and secure solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            variant="primary"
            size="lg"
            showArrow
            href="mailto:contact@springvox.com?subject=Start%20a%20Project%20Inquiry"
            onClick={() => trackCTAClick("Start a Project", "cta_section")}
          >
            Start a Project
          </Button>
          <Button
            variant="outline"
            size="lg"
            href="mailto:contact@springvox.com?subject=Book%20a%20Consultation"
            onClick={() => trackCTAClick("Book a Consultation", "cta_section")}
          >
            Book a Consultation
          </Button>
          <Button
            variant="outline"
            size="lg"
            showArrow
            onClick={() => {
              trackCTAClick("Request a Demo", "cta_section");
              onOpenWaitlist?.();
            }}
          >
            Request a Demo
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 text-xs text-muted"
        >
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Free consultation - No commitment required
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 p-4 rounded-xl border border-[#0299b1]/20 bg-[#0299b1]/5 text-center"
        >
          <p className="text-sm text-gray-300 mb-1">
            Looking to demo our AI knowledge platform?
          </p>
          <a
            href="https://springvox-knowledge-ai.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0299b1] font-semibold text-sm hover:underline"
          >
            Visit SpringVox Knowledge AI - AI-Powered Enterprise Answers
          </a>
        </motion.div>
      </div>
    </section>
  );
}
