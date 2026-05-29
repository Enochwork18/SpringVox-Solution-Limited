"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProductsSection from "@/sections/ProductsSection";
import ServicesSection from "@/sections/ServicesSection";
import WhyChooseUsSection from "@/sections/WhyChooseUsSection";
import IndustriesSection from "@/sections/IndustriesSection";
import StatsSection from "@/sections/StatsSection";
import ThreeSection from "@/sections/ThreeSection";
import CtaSection from "@/sections/CtaSection";
import WaitlistModal from "@/components/WaitlistModal";
import ReKallIQPopup from "@/components/ReKallIQPopup";

export default function Home() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection onOpenWaitlist={() => setWaitlistOpen(true)} />
        <ServicesSection />
        <ThreeSection />
        <WhyChooseUsSection />
        <IndustriesSection />
        <StatsSection />
        <CtaSection onOpenWaitlist={() => setWaitlistOpen(true)} />
      </main>
      <Footer />
      <WaitlistModal
        isOpen={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />
      <ReKallIQPopup onOpenWaitlist={() => setWaitlistOpen(true)} />
    </>
  );
}
