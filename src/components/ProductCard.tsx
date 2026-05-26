"use client";

import React from "react";
import { motion } from "framer-motion";
import { iconMap, IconCheck } from "@/lib/icons";
import Button from "@/components/Button";

interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  icon: string;
  features: string[];
  gradient: string;
  index: number;
}

export default function ProductCard({
  name,
  tagline,
  description,
  icon,
  features,
  gradient,
  index,
}: ProductCardProps) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative p-6 sm:p-8 rounded-2xl bg-dark-card border border-white/5 hover:border-primary/20 transition-all duration-500 h-full flex flex-col">
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

        <div className="flex items-start gap-4 mb-5">
          <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
            {Icon && <Icon className="w-6 h-6 text-white" />}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
              {name}
            </h3>
            <p className="text-sm text-primary-light">{tagline}</p>
          </div>
        </div>

        <p className="text-sm text-muted leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        <div className="space-y-2 mb-6">
          {features.map((feat) => (
            <div key={feat} className="flex items-center gap-2.5 text-xs text-muted-light">
              <span className="flex-shrink-0 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                <IconCheck className="w-2.5 h-2.5 text-primary" />
              </span>
              {feat}
            </div>
          ))}
        </div>

        <Button variant="outline" size="sm" showArrow className="w-full mt-auto">
          Learn More
        </Button>
      </div>
    </motion.div>
  );
}
