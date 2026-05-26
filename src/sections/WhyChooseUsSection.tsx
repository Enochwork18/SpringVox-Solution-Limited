"use client";

import React from "react";
import SectionWrapper, { SectionHeader } from "@/components/SectionWrapper";
import FeatureCard from "@/components/FeatureCard";
import { features } from "@/lib/constants";

export default function WhyChooseUsSection() {
  return (
    <SectionWrapper id="why-us" className="bg-dark-card">
      <SectionHeader
        tag="Why Choose Us"
        title="What Sets Us Apart"
        subtitle="We combine technical excellence with strategic thinking to deliver solutions that make a real impact."
      />

      <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
        {features.map((feature, i) => (
          <FeatureCard key={feature.title} {...feature} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
