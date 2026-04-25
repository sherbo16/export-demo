import { motion } from "framer-motion";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="label-eyebrow inline-flex items-center gap-2"
    >
      <span className="h-px w-8 bg-[#D4AF37]/60" />
      {children}
    </motion.div>
  );
}
