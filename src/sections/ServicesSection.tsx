"use client";

import React from "react";
import SectionWrapper, { SectionHeader } from "@/components/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/constants";

export default function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <SectionHeader
        tag="Our Services"
        title="End-to-End Technology Services"
        subtitle="From strategy to execution, we deliver comprehensive technology services that drive measurable business outcomes."
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {services.map((service, i) => (
          <ServiceCard key={service.name} {...service} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
