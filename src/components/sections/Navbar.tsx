"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Raya", href: "#raya" },
  { label: "Companions", href: "#companions" },
  { label: "Features", href: "#features" },
  { label: "Our Promise", href: "#promise" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black-pure/80 backdrop-blur-xl border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <span className="text-2xl font-bold tracking-tight font-[family-name:var(--font-display)]">
            <span className="gold-gradient-text">Zaryah</span><sup className="text-[1.2em] -ml-[2px] relative -top-[0.25em] gold-gradient-text">+</sup>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-text-secondary hover:text-gold transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <motion.a
            href="https://app.zaryahplus.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2.5 text-sm font-medium bg-gradient-to-r from-gold-dim via-gold to-gold-light text-black rounded-full tracking-wide hover:shadow-[0_0_25px_rgba(215,181,106,0.35)] transition-shadow duration-300"
          >
            Try Zaryah<sup className="text-[1.2em] -ml-[2px] relative -top-[0.2em]">+</sup>
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`w-6 h-0.5 bg-gold transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gold transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gold transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black-pure/95 backdrop-blur-xl border-b border-gold/10"
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-text-secondary hover:text-gold transition-colors py-2 text-lg"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://app.zaryahplus.com"
              className="mt-4 px-6 py-3 text-center text-sm font-medium bg-gradient-to-r from-gold-dim via-gold to-gold-light text-black rounded-full"
            >
              Try Zaryah<sup className="text-[1.2em] -ml-[2px] relative -top-[0.2em]">+</sup>
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
