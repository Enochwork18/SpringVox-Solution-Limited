"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import ProductsSection from "@/components/sections/Products";
import ServicesSection from "@/components/sections/Services";
import WhyChooseUsSection from "@/components/sections/WhyUs";
import IndustriesSection from "@/components/sections/Industries";
import StatsSection from "@/components/sections/Stats";
import ThreeSection from "@/components/sections/InnovationCore";
import CtaSection from "@/components/sections/CTA";
import WaitlistModal from "@/components/ui/WaitlistModal";
import ReKallIQPopup from "@/components/ui/ReKallIQPopup";

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
