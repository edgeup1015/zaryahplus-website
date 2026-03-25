"use client";

import { AnimatedSection } from "../ui/AnimatedSection";

export function CompanionsSection() {
  return (
    <section id="companions" className="section-padding bg-black-pure relative">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            Companion Mode
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-light mt-6 mb-8">
            <span className="gold-gradient-text font-medium">
              Guidance From the Sahaba
            </span>
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            An AI companion trained on the history, rulings, and wisdom of the
            Sahaba — sourced from verified hadith, authenticated biographies, and
            trusted scholarly works. Not impersonation — real guidance drawn from real scholarship.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
