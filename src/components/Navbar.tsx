"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/constants";
import { IconMenu, IconX } from "@/lib/icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-bg/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleClick("#hero"); }}
          className="text-xl sm:text-2xl font-bold tracking-tight flex items-center gap-2"
        >
          <span className="gradient-text">SpringVox</span>
          <span className="text-white/60 font-light ml-0 hidden sm:inline">Solution Limited</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="px-4 py-2 text-sm text-muted hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://springvox-knowledge-ai.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm text-[#0299b1] hover:text-white transition-colors duration-200 rounded-lg hover:bg-primary/10 font-medium"
            style={{ textShadow: '0 0 20px rgba(2,153,177,0.3)' }}
          >
            ReKallIQ ↗
          </a>
          <button
            onClick={() => handleClick("#cta")}
            className="ml-3 px-5 py-2 text-sm font-medium text-white bg-primary rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20"
          >
            Contact Us
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-muted hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <IconX size={24} /> : <IconMenu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-white/5 bg-dark-bg/95 backdrop-blur-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="block w-full text-left px-4 py-3 text-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://springvox-knowledge-ai.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left px-4 py-3 text-[#0299b1] hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                ReKallIQ ↗
              </a>
              <button
                onClick={() => handleClick("#cta")}
                className="w-full mt-3 px-5 py-3 text-center text-white bg-primary rounded-xl hover:bg-primary-dark transition-all"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
