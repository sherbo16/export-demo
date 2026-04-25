import { motion } from "framer-motion";
import { REGIONS } from "@/lib/constants";
import { SectionLabel } from "./SectionLabel";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

// Approximate map coords (percent positioning over 1000x500 viewBox)
const HUBS: { name: string; x: number; y: number }[] = [
  { name: "USA", x: 230, y: 200 },
  { name: "UK", x: 480, y: 175 },
  { name: "Germany", x: 510, y: 185 },
  { name: "France", x: 488, y: 200 },
  { name: "Netherlands", x: 498, y: 178 },
  { name: "UAE", x: 605, y: 245 },
  { name: "Saudi Arabia", x: 590, y: 245 },
  { name: "Qatar", x: 612, y: 240 },
  { name: "India (Origin)", x: 690, y: 260 },
  { name: "Sri Lanka", x: 700, y: 285 },
  { name: "Singapore", x: 770, y: 305 },
  { name: "Malaysia", x: 765, y: 295 },
  { name: "China", x: 800, y: 220 },
  { name: "South Korea", x: 830, y: 215 },
  { name: "Japan", x: 855, y: 220 },
  { name: "Australia", x: 830, y: 360 },
];

export function GlobalReachSection() {
  return (
    <section id="global" className="relative bg-[#0A0F1C] py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel>Where We Export</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease }}
          className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl"
        >
          Delivering Excellence Across <span className="text-gradient-brand">40+ Nations</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
          className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#111827] p-4 md:p-8"
        >
          <div className="relative w-full">
            <svg viewBox="0 0 1000 500" className="h-auto w-full" aria-label="World export map">
              <defs>
                <radialGradient id="hubGlow">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                </radialGradient>
              </defs>
              {/* Stylized continent silhouettes (simplified abstract shapes) */}
              <g fill="#1E293B" stroke="#334155" strokeWidth="0.5">
                <path d="M120,170 Q180,140 240,165 L290,200 L260,260 L210,290 L160,310 L130,260 Z" />
                <path d="M260,300 L300,330 L290,400 L250,440 L220,400 Z" />
                <path d="M440,150 L560,140 L590,180 L570,230 L500,250 L450,220 Z" />
                <path d="M460,260 Q510,260 540,290 L520,360 L470,380 L450,330 Z" />
                <path d="M580,200 L720,190 L820,220 L860,260 L840,310 L760,330 L700,300 L640,270 L600,250 Z" />
                <path d="M770,330 Q830,340 870,380 L850,420 L790,420 L760,380 Z" />
              </g>

              {/* Connection lines from Kanyakumari (≈690,265) */}
              <g
                stroke="#00F5D4"
                strokeWidth="0.6"
                strokeDasharray="2 3"
                opacity="0.35"
                fill="none"
              >
                {HUBS.filter((h) => h.name !== "India (Origin)").map((h) => (
                  <path
                    key={h.name}
                    d={`M690,265 Q${(690 + h.x) / 2},${Math.min(h.y, 265) - 40} ${h.x},${h.y}`}
                  />
                ))}
              </g>

              {/* Hub dots with pulse */}
              {HUBS.map((h, i) => (
                <g key={h.name}>
                  <motion.circle
                    cx={h.x}
                    cy={h.y}
                    r="3"
                    fill="#D4AF37"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                  />
                  <motion.circle
                    cx={h.x}
                    cy={h.y}
                    r="3"
                    fill="url(#hubGlow)"
                    animate={{ r: [3, 9, 3], opacity: [0.7, 0, 0.7] }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeOut",
                    }}
                  />
                </g>
              ))}
            </svg>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {REGIONS.map((r, i) => (
            <motion.div
              key={r.region}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.06, ease }}
            >
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
                {r.region}
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-[#94A3B8]">
                {r.countries.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45, ease }}
          className="mt-14"
        >
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#94A3B8]">
            Trusted by buyers worldwide
          </div>
          <div className="mt-5 flex gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex h-20 min-w-[160px] items-center justify-center rounded-xl border border-[#D4AF37]/25 bg-white/[0.03] backdrop-blur-xl"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#94A3B8]">
                  Buyer Partner Logo
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
