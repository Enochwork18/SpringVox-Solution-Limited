"use client";

import React from "react";
import { motion } from "framer-motion";
import { iconMap, IconArrowRight } from "@/lib/icons";

interface IndustryCardProps {
  name: string;
  description: string;
  icon: string;
  index: number;
}

export default function IndustryCard({
  name,
  description,
  icon,
  index,
}: IndustryCardProps) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="group"
    >
      <div className="p-4 sm:p-5 rounded-xl bg-dark-card/50 border border-white/5 hover:border-primary/20 hover:bg-dark-card transition-all duration-300">
        <div className="flex items-center justify-between mb-3">
          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            {Icon && <Icon className="w-[18px] h-[18px] text-primary" />}
          </div>
          <IconArrowRight className="w-4 h-4 text-muted group-hover:text-primary transition-colors duration-300" />
        </div>
        <h4 className="text-sm font-semibold text-white mb-1">{name}</h4>
        <p className="text-xs text-muted">{description}</p>
      </div>
    </motion.div>
  );
}
