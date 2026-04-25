import { motion } from "framer-motion";
import { Factory, Globe2, ScrollText, Handshake } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const HIGHLIGHTS = [
  {
    Icon: Factory,
    title: "State-of-the-Art Processing Unit",
    body: "MPEDA-approved facility with IQF tunnels and contact freezers.",
  },
  {
    Icon: Globe2,
    title: "40+ International Markets Served",
    body: "Trusted exporter to USA, EU, Middle East and Asia Pacific.",
  },
  {
    Icon: ScrollText,
    title: "HACCP, EU, FDA, ISO Certified",
    body: "Audited under international food safety frameworks.",
  },
  {
    Icon: Handshake,
    title: "Direct Farm-to-Port Sourcing",
    body: "Long-term partnerships with coastal fishing communities.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative bg-[#111827] py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel>Who We Are</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease }}
          className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl"
        >
          Rooted in Kanyakumari. <span className="text-gradient-brand">Trusted Worldwide.</span>
        </motion.h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease }}
            className="space-y-5 text-[15px] leading-relaxed text-[#94A3B8] md:text-base"
          >
            <p>
              Founded on the southernmost tip of India, OceanHarvest Exports has grown over more
              than two decades into one of South India's most respected names in seafood export. Our
              origins in Kanyakumari give us a unique advantage — direct access to some of the
              richest fishing waters where the Bay of Bengal, the Arabian Sea and the Indian Ocean
              meet.
            </p>
            <p>
              We work hand-in-hand with established coastal fishing communities and certified
              aquaculture farms, sourcing each consignment with full traceability. Our integrated
              processing infrastructure — from blast freezers and IQF tunnels to in-house
              microbiology labs — ensures every container we ship meets the standards demanded by
              the world's most quality-conscious markets.
            </p>
            <p>
              Today we serve buyers across more than 40 countries, supplying retailers, importers
              and HoReCa operators with a consistent, fully documented and ethically sourced
              product. We're built for serious B2B partners who value reliability, compliance and
              long-term supply security.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: 0.1, ease }}
            className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{ boxShadow: "inset 0 1px 0 rgba(212,175,55,0.18)" }}
            />
            <div className="grid gap-6 sm:grid-cols-2">
              {HIGHLIGHTS.map(({ Icon, title, body }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease }}
                  className="flex flex-col gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37]">
                    <Icon size={20} />
                  </div>
                  <div className="text-sm font-bold uppercase tracking-wide text-white">
                    {title}
                  </div>
                  <p className="text-sm text-[#94A3B8]">{body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
