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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ServicesSection />
        <ThreeSection />
        <WhyChooseUsSection />
        <IndustriesSection />
        <StatsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
