"use client";

import { motion } from "framer-motion";
import { AnimatedSection, FadeIn } from "../ui/AnimatedSection";

interface Companion {
  name: string;
  title: string;
  approach: string;
  description: string;
}

const khulafa: Companion[] = [
  {
    name: "Abu Bakr As-Siddiq",
    title: "The Truthful",
    approach: "Compassion & Mercy",
    description:
      "Gentleness, reconciliation, forgiveness. For when you need a soft hand and a warm heart to guide you through difficulty.",
  },
  {
    name: "Umar ibn Al-Khattab",
    title: "Al-Farooq",
    approach: "Justice & Accountability",
    description:
      "Fairness, transparency, firm ethics. For when you need clear principles and the courage to stand for what's right.",
  },
  {
    name: "Uthman ibn Affan",
    title: "Dhun-Nurain",
    approach: "Generosity & Community",
    description:
      "Charity, modesty, collective benefit. For when you want to understand giving, community, and selfless leadership.",
  },
  {
    name: "Ali ibn Abi Talib",
    title: "The Lion of Allah",
    approach: "Wisdom & Deep Reflection",
    description:
      "Intellectual reasoning, balanced judgment. For when you need deep thought and nuanced understanding.",
  },
];

const sahabiyat: Companion[] = [
  {
    name: "Khadijah bint Khuwaylid",
    title: "Mother of the Believers",
    approach: "Unwavering Support & Sacrifice",
    description:
      "Steadfastness, emotional support, and standing firm beside those you believe in - even when the world turns away.",
  },
  {
    name: "Aisha bint Abi Bakr",
    title: "Scholar of the Ummah",
    approach: "Knowledge & Teaching",
    description:
      "Scholarly inquiry, education, clarity. For when you want to learn, question, and truly understand your Deen.",
  },
  {
    name: "Fatimah Az-Zahra",
    title: "Leader of the Women of Paradise",
    approach: "Piety & Devotion",
    description:
      "Spiritual dedication, family honor, dignity. For when you seek a deeper connection with your faith and family.",
  },
  {
    name: "Sumayyah bint Khayyat",
    title: "The First Martyr",
    approach: "Courage & Perseverance",
    description:
      "Resilience under hardship, moral courage. For when life tests you and you need strength to keep going.",
  },
];

const imams: Companion[] = [
  {
    name: "Imam Abu Hanifa",
    title: "The Great Imam",
    approach: "Reasoning & Independent Judgment",
    description:
      "Analytical thinking and practical application. For when you need logic, context, and real-world solutions.",
  },
  {
    name: "Imam Malik ibn Anas",
    title: "Imam of Madinah",
    approach: "Adherence to Prophetic Practice",
    description:
      "Sunnah-centered guidance rooted in the Madinan tradition. For when you want to walk closest to the Prophet's way.",
  },
  {
    name: "Imam Ash-Shafi'i",
    title: "The Architect of Usul",
    approach: "Systematic Methodology",
    description:
      "Structured principles, balanced synthesis. For when you need a methodical, step-by-step framework.",
  },
  {
    name: "Imam Ahmad ibn Hanbal",
    title: "Imam of Ahl al-Hadith",
    approach: "Textual Integrity",
    description:
      "Strict adherence to Quran and Hadith. For when you want guidance drawn directly from the primary sources.",
  },
];

function CompanionCard({
  companion,
  index,
}: {
  companion: Companion;
  index: number;
}) {
  return (
    <AnimatedSection delay={index * 0.08}>
      <motion.div
        whileHover={{ y: -6, borderColor: "rgba(215,181,106,0.4)" }}
        transition={{ duration: 0.3 }}
        className="p-7 rounded-2xl bg-black-card border border-gold/10 transition-all duration-500 h-full flex flex-col"
      >
        <div className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-3">
          {companion.approach}
        </div>
        <h4 className="font-[family-name:var(--font-display)] text-xl font-medium text-white mb-1">
          {companion.name}
        </h4>
        <p className="text-gold/60 text-sm mb-4 italic">{companion.title}</p>
        <p className="text-text-secondary text-sm breathe mt-auto">
          {companion.description}
        </p>
      </motion.div>
    </AnimatedSection>
  );
}

function CompanionGroup({
  title,
  companions,
}: {
  title: string;
  companions: Companion[];
}) {
  return (
    <div className="mb-16 last:mb-0">
      <FadeIn>
        <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-light text-white mb-8">
          {title}
        </h3>
      </FadeIn>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {companions.map((c, i) => (
          <CompanionCard key={c.name} companion={c} index={i} />
        ))}
      </div>
    </div>
  );
}

export function CompanionsSection() {
  return (
    <section id="companions" className="section-padding bg-black-pure relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            The Companions
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-light mt-6 mb-8">
            Learn From Their{" "}
            <span className="gold-gradient-text font-medium">
              Timeless Wisdom
            </span>
          </h2>
        </AnimatedSection>

        {/* Disclaimer */}
        <FadeIn className="mb-20">
          <div className="max-w-4xl mx-auto p-8 md:p-10 rounded-2xl bg-gradient-to-br from-gold/[0.04] to-transparent border border-gold/15 text-center">
            <p className="text-cream text-lg md:text-xl leading-relaxed font-[family-name:var(--font-display)] font-bold">
              We do not simulate, recreate, or speak as the Sahabah.
            </p>
            <div className="w-12 h-px bg-gold/30 mx-auto my-6" />
            <p className="text-text-secondary breathe max-w-3xl mx-auto">
              Imagine someone who has spent their entire life studying, admiring,
              and absorbing the wisdom of these noble figures. Someone who has
              read every verified account, memorized every lesson, and
              internalized every principle.
            </p>
            <p className="text-text-secondary breathe max-w-3xl mx-auto mt-4">
              That person now sits with you - not speaking{" "}
              <span className="text-cream italic">as</span> the Companion, but
              sharing everything they&apos;ve learned{" "}
              <span className="text-cream italic">from</span> them - with love,
              context, and practical wisdom for your life today.
            </p>
          </div>
        </FadeIn>

        {/* Companion groups */}
        <CompanionGroup title="The Khulafa Rashidun" companions={khulafa} />
        <CompanionGroup
          title="The Noble Women Companions"
          companions={sahabiyat}
        />
        <CompanionGroup title="The Four Great Imams" companions={imams} />

        {/* Bottom note */}
        <FadeIn className="mt-16">
          <p className="text-center text-text-secondary text-lg font-[family-name:var(--font-display)] font-light max-w-2xl mx-auto">
            Learn from their lives. Apply their wisdom.
            <br />
            <span className="gold-gradient-text font-medium">
              Walk their path - in your own way.
            </span>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
