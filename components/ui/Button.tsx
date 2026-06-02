"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconArrowRight } from "@/lib/icons";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  target,
  onClick,
  className = "",
  showArrow = false,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    "relative inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-dark-bg";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-[#0299b1] text-white hover:bg-[#017a8f] shadow-lg shadow-[#0299b1]/20 hover:shadow-[#0299b1]/30 active:scale-[0.98]",
    outline:
      "border border-[#0299b1]/40 text-[#0299b1] hover:bg-[#0299b1]/10 hover:border-[#0299b1]/60 active:scale-[0.98]",
  };

  const mergedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabled ? "opacity-50 pointer-events-none" : ""} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && (
        <IconArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href && !disabled) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={`group ${mergedClasses}`}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`group ${mergedClasses}`}
      whileHover={disabled ? {} : { y: -2 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
