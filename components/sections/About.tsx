"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { company } from "@/lib/constants";

const values = [
  {
    label: "Innovation",
    description: "Pushing boundaries with cutting-edge technology",
  },
  {
    label: "Scalability",
    description: "Solutions that grow with your business",
  },
  {
    label: "Reliability",
    description: "Enterprise-grade stability and performance",
  },
  { label: "Security", description: "Zero-trust architecture end-to-end" },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about" dark>
      <SectionHeader
        tag="About Us"
        title="Who We Are"
        subtitle="SpringVox Solution Limited is a Nigerian-born technology company building world-class intelligent software for the modern enterprise. We combine deep expertise in AI, cybersecurity, enterprise software, and digital infrastructure to deliver solutions that don't just work - they transform."
        align="left"
      />

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mt-8">
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-dark-card border border-white/5">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
              Our Mission
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {company.mission}
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-dark-card border border-white/5">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
              Our Vision
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {company.vision}
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-6">
            Our Core Values
          </h3>
          <div className="space-y-4">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-white">
                    {v.label}
                  </h4>
                  <p className="text-xs text-muted mt-0.5">{v.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 p-5 sm:p-6 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10"
          >
            <p className="text-sm text-muted leading-relaxed">
              From our flagship <strong className="text-white">ReKallIQ</strong>{" "}
              knowledge AI platform to custom enterprise builds, we serve
              startups, growing businesses, and large organisations across
              Africa and beyond. We believe great technology should be
              accessible, secure, and built to last.
            </p>
            <p className="text-sm text-muted leading-relaxed mt-3">
              Since {company.founded}, we have been at the forefront of digital
              transformation. Our products include ReKallIQ - an enterprise AI
              knowledge platform - and we continue to build solutions across
              cybersecurity, VoIP, and enterprise automation.
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
