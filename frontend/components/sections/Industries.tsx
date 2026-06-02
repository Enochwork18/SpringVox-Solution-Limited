"use client";

import React from "react";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import IndustryCard from "@/components/ui/IndustryCard";
import { industries } from "@/lib/constants";

export default function IndustriesSection() {
  return (
    <SectionWrapper id="industries">
      <SectionHeader
        tag="Industries"
        title="Serving Diverse Sectors"
        subtitle="Our solutions are tailored to meet the unique challenges of various industries, delivering measurable results."
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
        {industries.map((industry, i) => (
          <IndustryCard key={industry.name} {...industry} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
