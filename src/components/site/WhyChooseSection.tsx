import { motion } from "framer-motion";
import { ADVANTAGES } from "@/lib/constants";
import { SectionLabel } from "./SectionLabel";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function WhyChooseSection() {
  return (
    <section id="why" className="relative bg-[#111827] py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel>Our Advantage</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease }}
          className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl"
        >
          Why Global Buyers Trust Us
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {ADVANTAGES.map((a) => (
            <motion.div
              key={a.title}
              variants={{
                hidden: { opacity: 0, scale: 0.96, y: 20 },
                show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease } },
              }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-white/10 bg-[#0A0F1C] p-7 transition-all duration-200 hover:border-[#D4AF37]/45 hover:shadow-[0_0_24px_rgba(212,175,55,0.18)]"
            >
              <div className="text-3xl text-[#00F5D4] transition-colors duration-200 group-hover:text-[#D4AF37]">
                {a.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">{a.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
