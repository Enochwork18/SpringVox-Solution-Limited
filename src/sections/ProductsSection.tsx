"use client";

import React from "react";
import SectionWrapper, { SectionHeader } from "@/components/SectionWrapper";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/constants";

export default function ProductsSection() {
  return (
    <SectionWrapper id="products" className="bg-dark-card">
      <SectionHeader
        tag="Our Products"
        title="Innovative Solutions We Build"
        subtitle="Discover our flagship products designed to transform businesses and drive digital innovation across industries."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {products.map((product, i) => (
          <ProductCard key={product.name} {...product} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
