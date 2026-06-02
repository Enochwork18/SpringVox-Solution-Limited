"use client";

import React from "react";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICES } from "@/lib/constants";

export default function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <SectionHeader
        tag="Our Services"
        title="End-to-End Technology Services"
        subtitle="From strategy to execution, we deliver comprehensive technology services that drive measurable business outcomes."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {SERVICES.map((service, i) => (
          <ServiceCard
            key={service.name}
            name={service.name}
            description={service.description}
            icon={service.icon.toLowerCase()}
            slug={service.slug}
            index={i}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
