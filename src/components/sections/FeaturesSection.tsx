"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";

interface Feature {
  name: string;
  description: string;
  category: string;
}

const features: Feature[] = [
  // Faith
  {
    name: "Quran & Tafsir",
    description: "Complete Quran with multiple Tafsir traditions, bookmarks, and intelligent search",
    category: "Faith",
  },
  {
    name: "Prayer Times",
    description: "Accurate prayer times, Qibla compass, and daily prayer tracking",
    category: "Faith",
  },
  {
    name: "Hijri Calendar",
    description: "Islamic calendar with important dates, events, and reminders",
    category: "Faith",
  },
  {
    name: "Faith & Spirituality",
    description: "Duas, Dhikr, daily reflections, and masjid finder for your spiritual journey",
    category: "Faith",
  },
  // Finance
  {
    name: "Islamic Finance",
    description: "Shariah-compliant financial planning, tools, and guidance for ethical wealth",
    category: "Finance",
  },
  {
    name: "Zakat Calculator",
    description: "Precise Zakat calculation with distribution tracking and reminders",
    category: "Finance",
  },
  {
    name: "Halal Stock Screener",
    description: "Screen stocks for Shariah compliance with detailed financial analysis",
    category: "Finance",
  },
  {
    name: "Bait ul Maal",
    description: "Community treasury for collective welfare, Sadaqah, and transparent giving",
    category: "Finance",
  },
  // Community
  {
    name: "Islamic Matrimony",
    description: "Faith-centered matchmaking with values-based profiles and family involvement",
    category: "Community",
  },
  {
    name: "Halaqah",
    description: "Virtual and local study circles for collective learning and spiritual growth",
    category: "Community",
  },
  {
    name: "Islamic Shark Tank",
    description: "Muslim entrepreneurship platform connecting ideas with ethical investment",
    category: "Community",
  },
  {
    name: "Real Estate",
    description: "Shariah-compliant property marketplace and Islamic mortgage guidance",
    category: "Community",
  },
  // Education
  {
    name: "Islamic Education",
    description: "Courses, certifications, and structured learning paths for all ages",
    category: "Education",
  },
  {
    name: "Halal Commerce",
    description: "Verified Halal marketplace for products and services you can trust",
    category: "Education",
  },
  {
    name: "Media Library",
    description: "Curated Islamic content — Quran recitations, podcasts, lectures, and nasheeds",
    category: "Education",
  },
  {
    name: "Ramadan Edition",
    description: "Special Ramadan features — fasting tracker, Taraweeh guide, charity goals",
    category: "Education",
  },
];

const categories = ["Faith", "Finance", "Community", "Education"];

export function FeaturesSection() {
  return (
    <section id="features" className="section-padding bg-black-soft relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-20">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            Platform
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-light mt-6 mb-8">
            A Complete{" "}
            <span className="gold-gradient-text font-medium">
              Islamic Ecosystem
            </span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto breathe">
            Everything you need for Deen and Dunya — integrated, authenticated,
            and beautifully designed. No more switching between a dozen apps.
          </p>
        </AnimatedSection>

        {categories.map((cat) => (
          <div key={cat} className="mb-12 last:mb-0">
            <AnimatedSection>
              <h3 className="text-gold/60 text-xs tracking-[0.3em] uppercase font-medium mb-6">
                {cat}
              </h3>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {features
                .filter((f) => f.category === cat)
                .map((feature, i) => (
                  <AnimatedSection key={feature.name} delay={i * 0.06}>
                    <motion.div
                      whileHover={{
                        y: -4,
                        borderColor: "rgba(215,181,106,0.3)",
                      }}
                      transition={{ duration: 0.3 }}
                      className="p-6 rounded-xl bg-black-card border border-white/[0.04] transition-all duration-500 h-full"
                    >
                      <h4 className="text-white font-medium mb-2">
                        {feature.name}
                      </h4>
                      <p className="text-text-secondary text-sm breathe">
                        {feature.description}
                      </p>
                    </motion.div>
                  </AnimatedSection>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
