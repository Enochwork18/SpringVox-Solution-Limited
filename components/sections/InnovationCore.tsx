"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ThreeScene = dynamic(() => import("@/components/three/GlobeSphere"), { ssr: false });

export default function ThreeSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-card via-dark-bg to-dark-card pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 rounded-full border border-primary/20">
              Innovation Core
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5">
              Powered by{" "}
              <span className="gradient-text">Next-Generation</span> Technology
            </h2>
            <p className="text-sm text-muted leading-relaxed max-w-md">
              Our technology stack leverages cutting-edge advancements in AI, 
              cloud computing, and cybersecurity to deliver solutions that are 
              not just modern - but future-ready.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              {["AI & ML", "Cloud Native", "Zero Trust", "Edge Ready"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[350px] sm:h-[400px] lg:h-[500px]"
          >
            <div className="absolute inset-0">
              <ThreeScene />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 text-sm mb-3">
            See this technology in action in our flagship product
          </p>
          <a
            href="https://springvox-knowledge-ai.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#0299b1] font-medium hover:underline"
          >
            Explore ReKallIQ Knowledge AI
          </a>
        </motion.div>
      </div>
    </section>
  );
}
