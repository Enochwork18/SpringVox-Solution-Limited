"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { iconMap } from "@/lib/icons";
import { IconArrowRight } from "@/lib/icons";

interface ServiceCardProps {
  name: string;
  description: string;
  icon: string;
  index: number;
  slug?: string;
}

export default function ServiceCard({ name, description, icon, index, slug }: ServiceCardProps) {
  const Icon = iconMap[icon];
  const href = slug ? `/services/${slug}` : undefined;

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group h-full"
    >
      <div className="p-5 sm:p-6 rounded-xl bg-dark-card border border-white/5 hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-400 h-full flex flex-col">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
          {Icon && <Icon className="w-5 h-5 text-primary" />}
        </div>
        <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        <p className="text-xs text-muted leading-relaxed flex-1">{description}</p>
        {href && (
          <span className="inline-flex items-center gap-1 text-xs text-[#0299b1] font-medium mt-3 group-hover:gap-1.5 transition-all">
            Learn More <IconArrowRight className="w-3 h-3" />
          </span>
        )}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
