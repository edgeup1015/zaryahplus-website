"use client";

import { AnimatedSection } from "../ui/AnimatedSection";

export function DinarzSection() {
  return (
    <section id="dinarz" className="section-padding bg-transparent relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.03] blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center p-14 md:p-20 rounded-3xl bg-gradient-to-br from-black-card to-gold/[0.03] border border-gold/15">
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
              Dinarz & Wallet
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-light mt-6 mb-8">
              The First Islamic Ecosystem
              <br />
              <span className="gold-gradient-text font-medium">
                That Also Pays You to Use It.
              </span>
            </h2>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
              Meet Dinarz — a halal cryptocurrency you earn through your
              contributions, engagement, and Digital Twin activity. Just real value generated while you sleep, work,
              or go about your day. Your built-in wallet lets you hold, transact,
              convert to fiat, or reinvest in the community. No banks. No
              middlemen. No riba. No compromise.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
