"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  href?: string;
  variant?: "filled" | "outline";
  className?: string;
}

export function GoldButton({
  children,
  href = "#",
  variant = "filled",
  className = "",
}: Props) {
  const base =
    "relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wider uppercase rounded-full transition-all duration-300 cursor-pointer";

  const variants = {
    filled:
      "bg-gradient-to-r from-gold-dim via-gold to-gold-light text-black hover:shadow-[0_0_30px_rgba(215,181,106,0.4)]",
    outline:
      "border border-gold/30 text-gold hover:border-gold/60 hover:shadow-[0_0_20px_rgba(215,181,106,0.15)]",
  };

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.a>
  );
}
