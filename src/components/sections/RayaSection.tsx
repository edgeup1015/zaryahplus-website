"use client";

import { motion } from "framer-motion";
import { AnimatedSection, FadeIn } from "../ui/AnimatedSection";

const capabilities = [
  {
    title: "Madhab-Aware Guidance",
    description:
      "Respects your school of thought. Clearly indicates when scholars differ. Never imposes a single opinion.",
    icon: "📖",
  },
  {
    title: "Quran & Hadith Intelligence",
    description:
      "Search with full context, chain verification, and scholarly commentary - not just isolated verses.",
    icon: "🔍",
  },
  {
    title: "Emotional & Spiritual Awareness",
    description:
      "Detects your emotional state and responds with comforting Duas, motivational guidance, or just a listening ear.",
    icon: "💛",
  },
  {
    title: "Digital Twin - She Remembers",
    description:
      "Your goals, struggles, milestones - Raya never forgets. Upload your memories and she walks beside you on your journey.",
    icon: "🧠",
  },
  {
    title: "Tajweed Companion",
    description:
      "AI voice recognition for Quranic pronunciation correction. Practice and perfect your recitation, anytime.",
    icon: "🎙️",
  },
  {
    title: "Scholar Connector",
    description:
      "For questions beyond AI - connects you directly to verified scholars for live, personal consultation.",
    icon: "🤝",
  },
];

export function RayaSection() {
  return (
    <section id="raya" className="section-padding bg-black-soft relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.02] blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            Meet Raya
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-light mt-6 mb-8">
            More Than a Chatbot.
            <br />
            <span className="gold-gradient-text font-medium">
              A Companion That Understands Both of Your Worlds.
            </span>
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto breathe">
            In a world of AI that knows everything about you but cares about
            nothing - Raya is different. She&apos;s built on trusted scholarship,
            trained to understand your struggles, and designed with one purpose:
            to help you navigate both Dunya and Akhirah with confidence and
            clarity.
          </p>
        </AnimatedSection>

        {/* Digital Twin spotlight */}
        <FadeIn className="mb-20">
          <div className="relative p-10 md:p-14 rounded-3xl bg-gradient-to-br from-black-card to-black-elevated border border-gold/15 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/[0.04] blur-[80px] rounded-full" />
            <div className="relative z-10 max-w-3xl">
              <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-light text-white mb-6">
                Your Digital Twin.
                <br />
                <span className="gold-gradient-text">
                  She Remembers Everything.
                </span>
              </h3>
              <p className="text-text-secondary text-lg breathe mb-6">
                Your Hajj savings target. The Surah you&apos;re memorizing. The
                day you felt lost. The dua that brought you peace.
              </p>
              <p className="text-text-secondary text-lg breathe mb-6">
                Raya remembers. Upload your memories, your aspirations, your
                milestones - and she&apos;ll gently walk beside you. Reminding
                you. Encouraging you. Never forgetting.
              </p>
              <p className="text-cream text-lg font-medium">
                It&apos;s not just AI. It&apos;s an emotional bond built on trust - a
                companion that grows with you through every chapter of your life.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <AnimatedSection key={cap.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-2xl bg-black-card gold-border gold-border-hover transition-all duration-500 h-full"
              >
                <span className="text-3xl">{cap.icon}</span>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-white mt-4 mb-3">
                  {cap.title}
                </h3>
                <p className="text-text-secondary text-sm breathe">
                  {cap.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Two modes */}
        <AnimatedSection className="mt-20">
          <div className="text-center mb-12">
            <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-light">
              Two Ways to{" "}
              <span className="gold-gradient-text font-medium">
                Seek Guidance
              </span>
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 md:p-10 rounded-2xl bg-black-card border border-gold/10">
              <div className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-4">
                Mode 1
              </div>
              <h4 className="font-[family-name:var(--font-display)] text-2xl font-medium text-white mb-4">
                Raya Default
              </h4>
              <p className="text-text-secondary breathe">
                Direct, practical Islamic guidance with trusted sources and
                clear action steps. Raya gives you what you need - grounded,
                sourced, and actionable. At the end, she offers the option to go
                deeper with Companion Mode.
              </p>
            </div>
            <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-black-card to-gold/[0.03] border border-gold/20">
              <div className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-4">
                Mode 2
              </div>
              <h4 className="font-[family-name:var(--font-display)] text-2xl font-medium text-white mb-4">
                Companion Mode
              </h4>
              <p className="text-text-secondary breathe">
                Deeper, character-driven guidance framed through the documented
                wisdom of the Sahaba, Sahabiyat, or Four Imams. Historical
                context meets practical wisdom - tailored to your life today.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
