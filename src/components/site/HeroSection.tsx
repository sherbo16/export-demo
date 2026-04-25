import { motion } from "framer-motion";
import { ParticleField } from "./ParticleField";
import { CountUp } from "./CountUp";
import { STATS } from "@/lib/constants";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0A0F1C] pt-24"
    >
      <ParticleField />

      {/* Geometric wave lines */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
      >
        <defs>
          <linearGradient id="wv1" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#00F5D4" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3].map((i) => (
          <motion.line
            key={i}
            x1={-200 + i * 80}
            y1={200 + i * 90}
            x2={1640 + i * 60}
            y2={120 + i * 130}
            stroke="url(#wv1)"
            strokeWidth={1}
            initial={{ x: -40 }}
            animate={{ x: 40 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          />
        ))}
      </svg>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0A0F1C_85%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]"
        >
          🌊 Kanyakumari · Tamil Nadu · India
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05, ease }}
          className="max-w-5xl text-[clamp(40px,7vw,88px)] font-extrabold leading-[1.02] tracking-tight text-white"
        >
          Premium Seafood Exports from the Coast of{" "}
          <span className="text-gradient-teal">Kanyakumari</span> to the World
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.25, ease }}
          style={{ transformOrigin: "left" }}
          className="mt-5 h-[3px] w-16 rounded-sm bg-gradient-to-r from-[#D4AF37] to-[#F5C518]"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          className="mt-6 max-w-2xl text-base tracking-wide text-[#94A3B8] md:text-lg"
        >
          Fresh • Sustainable • Internationally Certified • Reliable
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#products"
            className="rounded-lg bg-gradient-to-r from-[#006D5B] to-[#00F5D4] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_24px_rgba(0,245,212,0.4)]"
          >
            Explore Our Products
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-[#D4AF37] bg-transparent px-7 py-3.5 text-sm font-semibold text-[#D4AF37] transition-all duration-200 hover:bg-[#D4AF37]/10 hover:shadow-[0_0_24px_rgba(212,175,55,0.35)]"
          >
            Become Our Buyer
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55, ease }}
          className="mt-16 grid max-w-3xl grid-cols-1 gap-6 border-t border-[#D4AF37]/15 pt-8 sm:grid-cols-3"
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col gap-1 ${
                i !== 0 ? "sm:border-l sm:border-[#D4AF37]/15 sm:pl-6" : ""
              }`}
            >
              <div className="text-3xl font-extrabold text-white md:text-4xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#94A3B8]">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
