"use client";

import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { RayaSection } from "@/components/sections/RayaSection";
import { CompanionsSection } from "@/components/sections/CompanionsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PromiseSection } from "@/components/sections/PromiseSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <RayaSection />
      <CompanionsSection />
      <FeaturesSection />
      <PromiseSection />
      <Footer />
    </main>
  );
}
