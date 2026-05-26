"use client";

import React from "react";
import { company, navLinks, socialLinks } from "@/lib/constants";
import { iconMap } from "@/lib/icons";

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
              <span className="text-xl font-bold gradient-text">SpringVox</span>
              <span className="text-white/60 font-light ml-1.5">Solution</span>
            </a>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
              {company.description}
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 transition-all duration-200"
                    aria-label={link.name}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-sm text-muted hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2.5">
              {["Custom Software Development", "AI & Machine Learning", "Cybersecurity", "Cloud Infrastructure", "Web Development", "Mobile App Development"].map(
                (s) => (
                  <li key={s}>
                    <span className="text-sm text-muted hover:text-primary transition-colors duration-200 cursor-pointer">
                      {s}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-sm text-muted">{company.email}</li>
              <li className="text-sm text-muted">{company.phone}</li>
              <li className="text-sm text-muted leading-relaxed">{company.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>&copy; {currentYear} {company.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
