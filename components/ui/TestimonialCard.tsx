"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconQuote } from "@/lib/icons";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  index: number;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex-shrink-0 w-[320px] sm:w-[380px] lg:w-[420px]"
    >
      <div className="p-6 sm:p-8 rounded-2xl bg-dark-card border border-white/5 h-full flex flex-col">
        <IconQuote className="w-8 h-8 text-primary/20 mb-4" />
        <p className="text-sm text-muted leading-relaxed mb-6 flex-grow">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-bold">
            {author.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{author}</p>
            <p className="text-xs text-muted">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
