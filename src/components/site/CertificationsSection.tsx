import { motion } from "framer-motion";
import { CERTIFICATIONS } from "@/lib/constants";
import { SectionLabel } from "./SectionLabel";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function CertificationsSection() {
  return (
    <section id="certifications" className="relative bg-[#111827] py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel>Our Credentials</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease }}
          className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl"
        >
          Internationally Recognized Standards
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.05, ease }}
          className="mt-5 max-w-2xl text-[15px] text-[#94A3B8]"
        >
          Our processing infrastructure is independently audited under leading global food safety
          and traceability frameworks, giving buyers complete confidence in every shipment.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {CERTIFICATIONS.map((c) => (
            <motion.div
              key={c.abbr}
              variants={{
                hidden: { opacity: 0, scale: 0.96, y: 16 },
                show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease } },
              }}
              whileHover={{ y: -4 }}
              className="group rounded-xl border border-[#D4AF37]/30 bg-[#0A0F1C] p-6 text-center transition-all duration-200 hover:border-[#D4AF37]/70 hover:shadow-[0_0_24px_rgba(212,175,55,0.25)]"
              style={{ boxShadow: "inset 0 1px 0 rgba(212,175,55,0.1)" }}
            >
              <div className="text-3xl font-extrabold tracking-tight text-[#D4AF37] transition-all duration-200 group-hover:text-[#F5C518] [text-shadow:0_0_18px_rgba(212,175,55,0.35)]">
                {c.abbr}
              </div>
              <div className="mt-3 text-sm font-semibold text-white">{c.name}</div>
              <div className="mt-1 text-[12px] text-[#94A3B8]">{c.body}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
