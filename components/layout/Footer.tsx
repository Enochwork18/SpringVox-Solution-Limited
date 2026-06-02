"use client";

import React from "react";
import { COMPANY } from "@/lib/constants";
import { IconMail, IconMapPin } from "@/lib/icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-4">
            <a href="#hero" onClick={(e) => { e.preventDefault(); handleClick("#hero"); }} className="inline-block">
              <span className="text-xl font-bold text-[#0299b1]">SpringVox</span>
              <span className="text-white/60 font-light ml-1.5">Solution Limited</span>
            </a>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
              {COMPANY.description}
            </p>
            <div className="space-y-2 mt-6">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <IconMail className="w-4 h-4 text-[#0299b1] flex-shrink-0" aria-hidden="true" />
                <a href="mailto:contact@springvox.com" className="hover:text-white transition-colors">
                  contact@springvox.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <IconMapPin className="w-4 h-4 text-[#0299b1] flex-shrink-0" aria-hidden="true" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '#hero' },
                { label: 'About', href: '#about' },
                { label: 'Products', href: '#products' },
                { label: 'Services', href: '#services' },
                { label: 'Why Us', href: '#why-us' },
                { label: 'Contact', href: '#cta' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-sm text-muted hover:text-[#0299b1] transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="https://springvox-knowledge-ai.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#0299b1] hover:text-white transition-colors duration-200"
                >
                  ReKallIQ
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://springvox-knowledge-ai.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-[#0299b1] transition-colors duration-200"
                >
                  ReKallIQ (Knowledge AI)
                </a>
              </li>
              <li>
                <button
                  onClick={() => handleClick("#products")}
                  className="text-sm text-muted hover:text-[#0299b1] transition-colors duration-200"
                >
                  AegisIDS
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick("#products")}
                  className="text-sm text-muted hover:text-[#0299b1] transition-colors duration-200"
                >
                  TrueKall
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick("#products")}
                  className="text-sm text-muted hover:text-[#0299b1] transition-colors duration-200"
                >
                  Coming Soon
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2.5">
              {["Custom Software Development", "AI & Machine Learning", "Cybersecurity", "Cloud Infrastructure", "Web Development", "Mobile App Development"].map(
                (s) => (
                  <li key={s}>
                    <span className="text-sm text-muted hover:text-[#0299b1] transition-colors duration-200 cursor-pointer">
                      {s}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted">
                <IconMail className="w-4 h-4 text-[#0299b1] flex-shrink-0" />
                <a href="mailto:contact@springvox.com" className="hover:text-white transition-colors">contact@springvox.com</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <IconMapPin className="w-4 h-4 text-[#0299b1] flex-shrink-0" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>&copy; {currentYear} {COMPANY.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-white transition-colors cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
