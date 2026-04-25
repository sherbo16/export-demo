import { motion } from "framer-motion";
import { ArrowRight, Fish } from "lucide-react";
import { PRODUCTS } from "@/lib/constants";
import { SectionLabel } from "./SectionLabel";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function ProductsSection() {
  return (
    <section id="products" className="relative bg-[#0A0F1C] py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel>What We Export</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease }}
          className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl"
        >
          Our Premium Seafood Range
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07 } },
          }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PRODUCTS.map((p) => (
            <motion.article
              key={p.name}
              variants={{
                hidden: { opacity: 0, scale: 0.96, y: 20 },
                show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease } },
              }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111827] transition-all duration-200 hover:border-[#00F5D4]/50 hover:shadow-[0_8px_32px_rgba(0,245,212,0.15),0_0_0_1px_rgba(212,175,55,0.3)]"
            >
              <div
                className={`relative flex aspect-[16/9] items-center justify-center bg-gradient-to-br ${p.gradient}`}
              >
                <Fish className="absolute right-4 top-4 text-[#D4AF37]/40" size={22} />
                <div className="px-6 text-center text-lg font-semibold uppercase tracking-[0.18em] text-white/80">
                  {p.name}
                </div>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0A0F1C_120%)]" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{p.name}</h3>
                <p className="mt-1 text-[13px] italic text-[#94A3B8]">{p.scientific}</p>
                <p className="mt-3 line-clamp-2 text-sm text-[#94A3B8]">{p.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[p.size, p.pack, p.grade].map((b) => (
                    <span
                      key={b}
                      className="rounded-md bg-[#006D5B]/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#00F5D4]"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#00F5D4] transition-colors hover:text-[#D4AF37]"
                >
                  Request Quote <ArrowRight size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
