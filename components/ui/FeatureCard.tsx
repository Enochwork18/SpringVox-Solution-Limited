"use client";

import React from "react";
import { motion } from "framer-motion";
import { iconMap } from "@/lib/icons";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

export default function FeatureCard({
  title,
  description,
  icon,
  index,
}: FeatureCardProps) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="flex gap-4"
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
        {Icon && <Icon className="w-5 h-5 text-primary" />}
      </div>
      <div>
        <h3 className="text-sm font-semibold text-white mb-1.5">{title}</h3>
        <p className="text-xs text-muted leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
