"use client";

import { motion } from "framer-motion";
import { AnimatedSection, FadeIn } from "../ui/AnimatedSection";

const capabilities = [
  {
    title: "Madhab-Aware Guidance",
    description:
      "Respects your school of thought. Never imposes a single opinion.",
    icon: "📖",
  },
  {
    title: "Quran & Hadith Intelligence",
    description:
      "Full context, chain verification, and scholarly commentary — not just isolated verses.",
    icon: "🔍",
  },
  {
    title: "Emotional & Spiritual Awareness",
    description:
      "Responds with comforting Duas, motivational guidance, or just a listening ear.",
    icon: "💛",
  },
  {
    title: "Digital Twin - Raya Remembers",
    description:
      "Your goals, struggles, milestones — Raya never forgets. Upload your memories and Raya walks beside you.",
    icon: "🧠",
  },
  {
    title: "Tajweed Companion",
    description:
      "AI-powered Quranic pronunciation correction. Practice your recitation, anytime.",
    icon: "🎙️",
  },
  {
    title: "Scholar Connector",
    description:
      "Connects you directly to verified scholars for live, personal consultation.",
    icon: "🤝",
  },
];

export function RayaSection() {
  return (
    <section id="raya" className="section-padding bg-black-soft/80 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.02] blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            Meet Raya
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-light mt-6 mb-8">
            An Islamic Chatbot
            <br />
            <span className="gold-gradient-text font-medium">
              Trained to Be Your Companion.
            </span>
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Ask anything — faith, finance, family, life. Raya is trained to guide you
            through it all, grounded in Islamic scholarship.
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
                  Raya Remembers Everything.
                </span>
              </h3>
              <p className="text-text-secondary text-lg breathe mb-6">
                Your goals, your struggles, your milestones — Raya remembers.
                A companion that grows with you through every chapter of your life.
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

        {/* Companion Mode & Digital Legacy */}
        <FadeIn className="mt-20">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Companion Mode */}
            <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-black-card to-gold/[0.03] border border-gold/15">
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
                Companion Mode
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-light mt-4 mb-4">
                <span className="gold-gradient-text font-medium">
                  Guidance From the Sahaba
                </span>
              </h3>
              <p className="text-text-secondary breathe">
                An AI companion trained on the history, rulings, and wisdom of the
                Sahaba — sourced from verified hadith, authenticated biographies, and
                trusted scholarly works. Not impersonation — real guidance drawn from real scholarship.
              </p>
            </div>

            {/* Digital Legacy */}
            <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-black-card to-black-elevated border border-gold/15 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/[0.04] blur-[80px] rounded-full" />
              <div className="relative z-10">
                <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
                  Digital Twin
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-light mt-4 mb-4">
                  <span className="gold-gradient-text font-medium">
                    Your Digital Legacy.
                  </span>
                </h3>
                <p className="text-text-secondary breathe mb-4">
                  What if your great-grandchildren could learn from your journey?
                  The Sahaba passed down wisdom through narration. Now you can too.
                  Your Digital Twin captures your milestones, your lessons, your duas.
                  You own it. You control it. Nothing is shared without your permission.
                </p>
                <p className="text-cream font-medium font-[family-name:var(--font-display)]">
                  A sadaqah jariyah of knowledge, from you to your lineage.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
