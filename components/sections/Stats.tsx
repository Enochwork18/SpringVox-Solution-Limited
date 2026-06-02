"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats, testimonials } from "@/lib/constants";
import TestimonialCard from "@/components/ui/TestimonialCard";

function useCountUp(end: string, isInView: boolean, delay: number, duration = 1500) {
  const [display, setDisplay] = useState(end);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!isInView || startedRef.current) return;
    startedRef.current = true;

    const numericMatch = end.match(/^(\d+)(.*)$/);
    if (!numericMatch) {
      setDisplay(end);
      return;
    }

    const target = parseInt(numericMatch[1], 10);
    const suffix = numericMatch[2];

    const startTime = performance.now() + delay;
    let frameId: number;

    const animate = (now: number) => {
      if (now < startTime) {
        frameId = requestAnimationFrame(animate);
        return;
      }
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setDisplay(`${current}${suffix}`);
      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [end, isInView, delay, duration]);

  return display;
}

function StatItem({
  value,
  label,
  index,
}: {
  value: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const display = useCountUp(value, isInView, index * 150);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="text-center"
    >
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text tabular-nums">
        {display}
      </div>
      <div className="mt-1.5 text-xs text-muted">{label}</div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative bg-dark-card border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              label={stat.label}
              index={i}
            />
          ))}
        </div>

        <div>
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 rounded-full border border-primary/20">
              Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              What Our Clients Say
            </h2>
          </div>
          <div className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.author} {...t} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
