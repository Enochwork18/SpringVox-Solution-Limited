"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Button from "@/components/Button";
import AnimatedBackground from "@/components/AnimatedBackground";
import { IconShield, IconCpu, IconZap } from "@/lib/icons";

const ThreeScene = dynamic(() => import("@/components/ThreeScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-10 h-10 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
    </div>
  ),
});

const floatingCards = [
  {
    Icon: IconShield,
    label: "Enterprise Security",
    color: "from-cyan-500 to-blue-600",
    position: "top-[15%] right-[8%]",
    delay: 0.8,
  },
  {
    Icon: IconCpu,
    label: "AI Powered",
    color: "from-cyan-400 to-emerald-500",
    position: "top-[45%] right-[2%]",
    delay: 1.2,
  },
  {
    Icon: IconZap,
    label: "99.9% Uptime",
    color: "from-cyan-500 to-purple-500",
    position: "top-[70%] right-[10%]",
    delay: 1.6,
  },
];

export default function HeroSection() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <AnimatedBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg/95 to-dark-card pointer-events-none" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/[0.08] rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      {floatingCards.map((card) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: card.delay }}
          className={`hidden lg:flex absolute ${card.position} items-center gap-3 px-4 py-3 rounded-xl bg-dark-card/60 backdrop-blur-xl border border-white/5 shadow-xl pointer-events-none`}
        >
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center`}>
            <card.Icon className="w-4 h-4 text-white" />
          </div>
          <span className="text-xs font-medium text-white/80 whitespace-nowrap">{card.label}</span>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 rounded-full border border-primary/20">
                SpringVox Solution Limited
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight"
            >
              <span className="text-white">Building Intelligent</span>
              <br />
              <span className="gradient-text">Software Solutions</span>
              <br />
              <span className="text-white/80">for the Future</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-muted leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              AI, enterprise software, cybersecurity, and digital innovation &mdash;
              empowering businesses with cutting-edge technology solutions that
              drive transformation and growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 justify-center lg:justify-start"
            >
              <Button variant="primary" size="lg" showArrow onClick={() => handleClick("#products")}>
                Explore Solutions
              </Button>
              <Button variant="outline" size="lg" onClick={() => handleClick("#cta")}>
                Request Consultation
              </Button>
              <Button variant="ghost" size="lg" showArrow onClick={() => handleClick("#products")}>
                View Products
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex items-center gap-8 justify-center lg:justify-start text-xs text-muted"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Enterprise Ready
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                SOC 2 Compliant
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                99.9% Uptime
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block relative h-[500px] xl:h-[600px]"
          >
            <div className="absolute inset-0">
              <ThreeScene />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => handleClick("#about")}
          className="flex flex-col items-center gap-2 text-muted hover:text-primary transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-current flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-current"
            />
          </div>
        </button>
      </motion.div>
    </section>
  );
}
