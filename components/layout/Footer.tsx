"use client";

import React from "react";
import Link from "next/link";
import { COMPANY, SERVICES } from "@/lib/constants";
import { IconMail, IconMapPin } from "@/lib/icons";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Products", href: "/#products" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Contact", href: "/contact" },
];

const handleNav = (href: string) => {
  if (href.startsWith("/#")) {
    if (window.location.pathname === "/") {
      const offset = window.innerWidth < 768 ? 64 : 80;
      const el = document.querySelector(href.replace("/", ""));
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else {
      window.location.href = href;
    }
  } else {
    window.location.href = href;
  }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-3">
            <button
              onClick={() => handleNav("/")}
              className="inline-block text-left"
            >
              <img
                src="/logo.jpeg"
                alt="SpringVox"
                className="h-8 w-auto mb-2 rounded"
              />
              <span className="text-xl font-bold text-[#0299b1]">
                SpringVox
              </span>
              <span className="text-white/60 font-light ml-1.5">
                Solution Limited
              </span>
            </button>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
              {COMPANY.description}
            </p>
            <div className="space-y-2 mt-6">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <IconMail
                  className="w-4 h-4 text-[#0299b1] flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href="mailto:contact@springvox.com"
                  className="hover:text-white transition-colors"
                >
                  contact@springvox.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <IconMapPin
                  className="w-4 h-4 text-[#0299b1] flex-shrink-0"
                  aria-hidden="true"
                />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-muted hover:text-[#0299b1] transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNav("/case-studies")}
                  className="text-sm text-muted hover:text-[#0299b1] transition-colors duration-200"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("/pricing")}
                  className="text-sm text-muted hover:text-[#0299b1] transition-colors duration-200"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => handleNav("/rekall-iq")}
                  className="text-sm text-[#0299b1] hover:text-white transition-colors duration-200"
                >
                  ReKallIQ (Knowledge AI)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("/rekall-iq/readiness")}
                  className="text-sm text-muted hover:text-[#0299b1] transition-colors duration-200"
                >
                  AI Readiness Checklist
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("/#products")}
                  className="text-sm text-muted hover:text-[#0299b1] transition-colors duration-200"
                >
                  AegisIDS
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("/#products")}
                  className="text-sm text-muted hover:text-[#0299b1] transition-colors duration-200"
                >
                  TrueKall
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("/#products")}
                  className="text-sm text-muted hover:text-[#0299b1] transition-colors duration-200"
                >
                  Coming Soon
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2.5 columns-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-muted hover:text-[#0299b1] transition-colors duration-200"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted">
                <IconMail className="w-4 h-4 text-[#0299b1] flex-shrink-0" />
                <a
                  href="mailto:contact@springvox.com"
                  className="hover:text-white transition-colors"
                >
                  contact@springvox.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <IconMapPin className="w-4 h-4 text-[#0299b1] flex-shrink-0" />
                <span>Lagos, Nigeria</span>
              </div>
              <button
                onClick={() => handleNav("/contact")}
                className="mt-2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#0299b1] rounded-lg hover:bg-[#017a8f] transition-colors"
              >
                Send a Message
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>
            &copy; {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
