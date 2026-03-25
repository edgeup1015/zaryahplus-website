"use client";

export function Footer() {
  return (
    <footer className="py-16 px-6 bg-black-card border-t border-gold/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <span className="text-2xl font-bold tracking-tight font-[family-name:var(--font-display)]">
              <span className="gold-gradient-text">Zaryah</span><sup className="text-[1.2em] -ml-[2px] relative -top-[0.25em] gold-gradient-text">+</sup>
            </span>
            <p className="text-text-tertiary text-sm mt-2">
              The World&apos;s First Islamic Super Agent
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-text-secondary">
            <a
              href="#about"
              className="hover:text-gold transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#raya"
              className="hover:text-gold transition-colors duration-300"
            >
              Raya
            </a>
            <a
              href="#companions"
              className="hover:text-gold transition-colors duration-300"
            >
              Companions
            </a>
            <a
              href="#features"
              className="hover:text-gold transition-colors duration-300"
            >
              Features
            </a>
          </div>

          {/* CTA */}
          <a
            href="https://app.zaryahplus.com"
            className="px-6 py-2.5 text-sm font-medium bg-gradient-to-r from-gold-dim via-gold to-gold-light text-black rounded-full hover:shadow-[0_0_25px_rgba(215,181,106,0.35)] transition-all duration-300"
          >
            Try Zaryah<sup className="text-[1.2em] -ml-[2px] relative -top-[0.2em]">+</sup>
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-tertiary text-xs">
            &copy; {new Date().getFullYear()} Zaryah<sup className="text-[1.2em] -ml-[2px] relative -top-[0.2em]">+</sup>. All rights reserved.
          </p>
          <p className="text-text-tertiary text-xs">
            Built with faith. Powered by technology. Guided by scholarship.
          </p>
        </div>
      </div>
    </footer>
  );
}
