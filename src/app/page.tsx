"use client";

import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { RayaSection } from "@/components/sections/RayaSection";
import { DinarzSection } from "@/components/sections/DinarzSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PromiseSection } from "@/components/sections/PromiseSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <RayaSection />
      <DinarzSection />
      <FeaturesSection />
      <PromiseSection />
      <Footer />
    </main>
  );
}
