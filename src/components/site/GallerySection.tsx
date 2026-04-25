import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FACILITY_GALLERY } from "@/lib/constants";
import { SectionLabel } from "./SectionLabel";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function GallerySection() {
  return (
    <section id="facility" className="relative bg-[#0A0F1C] py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel>Our Facility</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease }}
          className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl"
        >
          World-Class Processing Infrastructure
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FACILITY_GALLERY.map((label) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, scale: 0.96, y: 20 },
                show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease } },
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <div className="aspect-[4/3] w-full bg-gradient-to-br from-[#006D5B]/30 to-[#111827]" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/95 via-[#0A0F1C]/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                <div className="text-sm font-bold text-white md:text-base">{label}</div>
                <div className="translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                    View <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#006D5B]/0 to-[#00F5D4]/0 opacity-0 transition-opacity duration-200 group-hover:from-[#006D5B]/40 group-hover:to-[#00F5D4]/20 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
