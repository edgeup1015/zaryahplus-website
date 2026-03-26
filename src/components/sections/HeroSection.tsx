"use client";

import { motion } from "framer-motion";
import { GoldButton } from "../ui/GoldButton";


export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/[0.03] blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/[0.02] blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(215,181,106,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(215,181,106,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 text-gold text-xs tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            The World&apos;s First Islamic Super Agent
          </span>
        </motion.div>

        {/* Main heading */}
        <div className="font-[family-name:var(--font-display)] font-light leading-[1.2] mb-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.2]"
          >
            Your Deen. Your Agent. Your Way.
          </motion.h1>
        </div>

        {/* Lincoln-inspired subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="gold-gradient-text font-medium font-[family-name:var(--font-display)] text-xl sm:text-2xl md:text-3xl tracking-wide mb-8"
        >
          Of the Muslims. By the Muslims. For the Muslims.
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-12"
        >
          One app. Faith, finance, community, education — powered by AI agents
          that understand your values and actually get things done.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <GoldButton href="https://app.zaryahplus.com" variant="filled" className="!normal-case">
            Try Zaryah<sup className="text-[1.2em] -ml-[2px] relative -top-[0.2em]">+</sup>
          </GoldButton>
          <GoldButton href="#raya" variant="outline">
            Meet Raya
          </GoldButton>
        </motion.div>

      </div>
    </section>
  );
}
