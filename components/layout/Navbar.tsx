"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, LINKS } from "@/lib/constants";
import { IconMenu, IconX } from "@/lib/icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHashClick = (href: string) => {
    setMobileOpen(false);
    if (isHome) {
      const offset = window.innerWidth < 768 ? 64 : 80;
      const el = document.querySelector(href);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else {
      window.location.href = "/" + href;
    }
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
        <Link
          href="/"
          className="flex items-center gap-2 mr-auto"
        >
          <img
            src="/logo.jpeg"
            alt="SpringVox"
            className="h-8 sm:h-9 w-auto rounded"
          />
          <span className="font-bold text-[#0299b1] text-lg">SpringVox</span>
          <span className="font-normal text-white hidden sm:inline text-lg">
            Solution Limited
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleHashClick(link.href)}
              className="px-3 py-2 text-sm text-muted hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
            >
              {link.label}
            </button>
          ))}
          <Link
            href="/rekall-iq"
            className="px-3 py-2 text-sm text-muted hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
          >
            ReKallIQ
          </Link>
          <Link
            href="/contact"
            className="ml-2 px-5 py-2 text-sm font-medium text-white bg-[#0299b1] rounded-xl hover:bg-[#017a8f] transition-all duration-300 shadow-lg shadow-[#0299b1]/20"
          >
            Contact Us
          </Link>
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
            className="md:hidden border-t border-white/5 bg-dark-bg/95 backdrop-blur-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleHashClick(link.href)}
                  className="block w-full text-left px-4 py-3 text-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Link
                href="/rekall-iq"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-left px-4 py-3 text-[#0299b1] hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                ReKallIQ
              </Link>
              <Link
                href="/rekall-iq/readiness"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-left px-4 py-3 text-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                AI Readiness Checklist
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full mt-3 px-5 py-3 text-center text-white bg-[#0299b1] rounded-xl hover:bg-[#017a8f] transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
