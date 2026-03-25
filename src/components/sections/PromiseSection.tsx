"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
    sub: "The beauty of Islam - made accessible, practical, and personal.",
  },
];

function PromiseLine({ text, sub, index }: { text: string; sub: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.85"],
  });

  const opacity = index === 0 ? useTransform(scrollYProgress, [0, 0.3], [0, 1]) : useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = index === 0 ? useTransform(scrollYProgress, [0, 0.3], [30, 0]) : useTransform(scrollYProgress, [0, 1], [30, 0]);
  const blur = index === 0 ? useTransform(scrollYProgress, [0, 0.3], [8, 0]) : useTransform(scrollYProgress, [0, 1], [8, 0]);
  const scale = index === 0 ? useTransform(scrollYProgress, [0, 0.3], [0.95, 1]) : useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const subOpacity = index === 0 ? useTransform(scrollYProgress, [0.1, 0.4], [0, 1]) : useTransform(scrollYProgress, [0.4, 1], [0, 1]);
  const subY = index === 0 ? useTransform(scrollYProgress, [0.1, 0.4], [10, 0]) : useTransform(scrollYProgress, [0.4, 1], [10, 0]);

  return (
    <div ref={ref} className="py-6 md:py-8 border-b border-white/[0.06]">
      <motion.p
        style={{ opacity, y, scale }}
        className="font-[family-name:var(--font-display)] text-2xl md:text-3xl lg:text-4xl font-light text-white mb-2"
      >
        <motion.span style={{ filter: useTransform(blur, (v) => `blur(${v}px)`) }}>
          {text}
        </motion.span>
      </motion.p>
      <motion.p
        style={{ opacity: subOpacity, y: subY }}
        className="text-text-secondary text-sm md:text-base"
      >
        {sub}
      </motion.p>
    </div>
  );
}

export function PromiseSection() {
  return (
    <section id="promise" className="section-padding bg-transparent relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/[0.02] blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
          Our Promise
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mt-6 mb-12">
          What We{" "}
          <span className="gold-gradient-text font-medium">Stand For</span>
        </h2>

        <div>
          {promises.map((p, i) => (
            <PromiseLine key={i} text={p.text} sub={p.sub} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
