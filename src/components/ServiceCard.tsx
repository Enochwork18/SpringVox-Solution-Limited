"use client";

import React from "react";
import { motion } from "framer-motion";
import { iconMap } from "@/lib/icons";

interface ServiceCardProps {
  name: string;
  description: string;
  icon: string;
  index: number;
}

export default function ServiceCard({ name, description, icon, index }: ServiceCardProps) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <div className="p-5 sm:p-6 rounded-xl bg-dark-card border border-white/5 hover:border-primary/20 transition-all duration-400 h-full">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
          {Icon && <Icon className="w-5 h-5 text-primary" />}
        </div>
        <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        <p className="text-xs text-muted leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
