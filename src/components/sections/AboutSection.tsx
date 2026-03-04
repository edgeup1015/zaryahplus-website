"use client";

import { AnimatedSection, FadeIn } from "../ui/AnimatedSection";

const values = [
  {
    title: "No Judgment, Only Upliftment",
    description:
      "We're not here to judge anyone's journey. Every Muslim is at a different stage, and that's beautiful. We exist solely to uplift, educate, and support — meeting you exactly where you are.",
    icon: "01",
  },
  {
    title: "Authentic Scholarship",
    description:
      "Every piece of guidance is grounded in verified Quran, Hadith, classical Fiqh, and authenticated Seerah. No opinions — just traceable, authentic knowledge from recognized Islamic sources.",
    icon: "02",
  },
  {
    title: "Every Madhab, Every Muslim",
    description:
      "We respect all four schools of thought and never impose a single view. Zaryah+ is built for every Muslim — Hanafi, Maliki, Shafi'i, Hanbali — united in faith, diverse in practice.",
    icon: "03",
  },
  {
    title: "Your Journey, Your Privacy",
    description:
      "Your memories, your goals, your conversations — they belong to you. We build trust through transparency and treat your data with the sanctity it deserves.",
    icon: "04",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-black-pure">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <AnimatedSection className="text-center mb-24">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            Our Vision
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-light mt-6 mb-8">
            One Trusted Source for
            <br />
            <span className="gold-gradient-text font-medium">
              1.8 Billion Believers
            </span>
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto breathe">
            Muslims today juggle dozens of apps of varying authenticity — one for
            prayer times, another for Quran, yet another for Islamic finance.
            None of them talk to each other. None of them truly understand you.
            <br />
            <br />
            Zaryah+ changes that. A single, comprehensive platform that serves
            as your trusted gateway for both{" "}
            <span className="text-gold">Deen</span> and{" "}
            <span className="text-gold">Dunya</span> — firmly rooted in
            authentic Islamic scholarship.
          </p>
        </AnimatedSection>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <AnimatedSection key={value.title} delay={i * 0.1}>
              <div className="group p-8 md:p-10 rounded-2xl bg-black-card gold-border gold-border-hover transition-all duration-500 hover:gold-glow h-full">
                <span className="text-gold/40 text-sm font-mono tracking-wider">
                  {value.icon}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-medium text-white mt-4 mb-4">
                  {value.title}
                </h3>
                <p className="text-text-secondary breathe leading-relaxed">
                  {value.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Problem statement */}
        <FadeIn className="mt-24">
          <div className="text-center p-12 md:p-16 rounded-3xl bg-gradient-to-b from-gold/[0.03] to-transparent border border-gold/10">
            <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-light text-cream leading-relaxed max-w-4xl mx-auto">
              &ldquo;We are not here to tell you what&apos;s wrong with you. We are
              here to help you discover what&apos;s{" "}
              <span className="gold-gradient-text font-medium">
                beautiful within you
              </span>
              — and nurture it with authentic knowledge, genuine care, and
              unwavering respect.&rdquo;
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
