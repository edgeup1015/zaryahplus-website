"use client";

import { AnimatedSection, FadeIn } from "../ui/AnimatedSection";

const values = [
  {
    title: "No Judgment, Only Upliftment",
    description:
      "We're not here to judge anyone's journey. Every Muslim is at a different stage, and that's beautiful. We exist solely to uplift, educate, and support - meeting you exactly where you are.",
    icon: "01",
  },
  {
    title: "Grounded Scholarship",
    description:
      "Every piece of guidance is rooted in verified Quran, Hadith, classical Fiqh, and verified Seerah. No opinions - just traceable, grounded knowledge from recognized Islamic sources.",
    icon: "02",
  },
  {
    title: "Every Madhab, Every Muslim",
    description:
      "We respect all four schools of thought and never impose a single view. Zaryah+ is built for every Muslim - Hanafi, Maliki, Shafi'i, Hanbali - united in faith, diverse in practice.",
    icon: "03",
  },
  {
    title: "Your Journey, Your Privacy",
    description:
      "Your memories, your goals, your conversations - they belong to you. We build trust through transparency and treat your data with the sanctity it deserves.",
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
            When the World Overwhelms You
            <br />
            <span className="gold-gradient-text font-medium">
              Your Deen Shouldn&apos;t Feel Out of Reach
            </span>
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto breathe">
            We live in an age of endless noise - information without wisdom,
            connection without depth, tools without soul. Muslims deserve more
            than scattered apps that don&apos;t understand them.
            <br />
            <br />
            Zaryah+ is the intelligence we wished existed - one that thinks
            with you, learns with you, and never loses sight of what matters:
            your <span className="text-gold">faith</span>, your{" "}
            <span className="text-gold">ethics</span>, your peace of mind.
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
              Imagine an intelligence that doesn&apos;t just answer your questions
              - but understands{" "}
              <span className="gold-gradient-text font-medium">
                why you&apos;re asking
              </span>
              . One that protects your principles in a world that constantly
              challenges them. That&apos;s not a dream. That&apos;s Zaryah.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
