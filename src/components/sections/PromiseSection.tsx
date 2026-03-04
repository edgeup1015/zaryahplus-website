"use client";

import { AnimatedSection, FadeIn } from "../ui/AnimatedSection";
import { GoldButton } from "../ui/GoldButton";

const promises = [
  {
    text: "We are not here to judge.",
    sub: "Everyone's journey is different. We honor yours.",
  },
  {
    text: "We are not here to gatekeep.",
    sub: "Islam belongs to every Muslim. Knowledge should flow freely.",
  },
  {
    text: "We are here to uplift.",
    sub: "To help you learn, grow, and connect with your faith on your terms.",
  },
  {
    text: "We are here to serve.",
    sub: "The beauty of Islam — made accessible, practical, and personal.",
  },
];

export function PromiseSection() {
  return (
    <section id="promise" className="section-padding bg-black-pure relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/[0.02] blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            Our Promise
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-light mt-6 mb-16">
            What We{" "}
            <span className="gold-gradient-text font-medium">
              Stand For
            </span>
          </h2>
        </AnimatedSection>

        <div className="space-y-8 mb-16">
          {promises.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <div className="py-6 border-b border-white/[0.04]">
                <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-light text-white mb-2">
                  {p.text}
                </p>
                <p className="text-text-secondary breathe">{p.sub}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <FadeIn>
          <p className="text-text-secondary text-lg breathe max-w-2xl mx-auto mb-4">
            Whether you&apos;re a lifelong scholar or just beginning to explore your
            faith — Zaryah+ meets you where you are.
          </p>
          <p className="font-[family-name:var(--font-display)] text-xl text-cream font-light mb-12">
            No sectarianism. No gatekeeping.
            <br />
            Just authentic knowledge, served with{" "}
            <span className="gold-gradient-text font-medium">mercy</span>.
          </p>
        </FadeIn>

        <AnimatedSection delay={0.3}>
          <GoldButton href="https://app.zaryahplus.com" variant="filled">
            Begin Your Journey
          </GoldButton>
        </AnimatedSection>
      </div>
    </section>
  );
}
