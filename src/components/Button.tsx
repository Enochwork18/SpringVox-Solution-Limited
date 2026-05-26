"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconArrowRight } from "@/lib/icons";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  showArrow = false,
  type = "button",
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
      "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98]",
    secondary:
      "bg-secondary text-white hover:bg-secondary-light shadow-lg shadow-secondary/20 active:scale-[0.98]",
    outline:
      "border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 active:scale-[0.98]",
    ghost: "text-muted hover:text-white hover:bg-white/5 active:scale-[0.98]",
  };

  const content = (
    <>
      {children}
      {showArrow && (
        <IconArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={`group ${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`group ${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
