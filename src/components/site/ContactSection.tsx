import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { PRODUCTS } from "@/lib/constants";
import { SectionLabel } from "./SectionLabel";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const fieldClass =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#475569] focus:border-[#00F5D4] focus:shadow-[0_0_0_3px_rgba(0,245,212,0.18)] focus:outline-none transition-all duration-150";
const labelClass =
  "mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D4AF37]";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative bg-[#111827] py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel>Get In Touch</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease }}
          className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl"
        >
          Start a Conversation with Our Export Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.05, ease }}
          className="mt-5 max-w-2xl text-[15px] text-[#94A3B8]"
        >
          Whether you're a first-time buyer or an established importer, we're ready to meet your
          seafood sourcing needs.
        </motion.p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease }}
            className="space-y-6"
          >
            {[
              {
                Icon: Mail,
                label: "Email",
                value: "exports@oceanharvestexports.com",
                href: "mailto:exports@oceanharvestexports.com",
              },
              { Icon: Phone, label: "Phone", value: "+91 94XXX XXXXX", href: "tel:+9194000000" },
              {
                Icon: MapPin,
                label: "Location",
                value: "Kanyakumari District, Tamil Nadu — 629 XXX",
                href: undefined,
              },
              {
                Icon: Clock,
                label: "Business Hours",
                value: "Mon–Sat · 9:00 AM – 6:00 PM IST",
                href: undefined,
              },
            ].map(({ Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#00F5D4]/30 bg-[#00F5D4]/10 text-[#00F5D4]">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#94A3B8]">
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="mt-0.5 block text-base font-medium text-white hover:text-[#00F5D4]"
                    >
                      {value}
                    </a>
                  ) : (
                    <div className="mt-0.5 text-base font-medium text-white">{value}</div>
                  )}
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/910000000000"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_24px_rgba(37,211,102,0.4)]"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: 0.05, ease }}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="rounded-2xl border border-white/10 bg-[#0A0F1C]/80 p-6 backdrop-blur-xl md:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="fullName">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  required
                  className={fieldClass}
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="company">
                  Company Name
                </label>
                <input
                  id="company"
                  name="company"
                  required
                  className={fieldClass}
                  placeholder="Acme Importers Ltd."
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="country">
                  Country
                </label>
                <input
                  id="country"
                  name="country"
                  required
                  className={fieldClass}
                  placeholder="United States"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={fieldClass}
                  placeholder="jane@acme.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  className={fieldClass}
                  placeholder="+1 555 000 0000"
                />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="product">
                  Product Inquiry
                </label>
                <select
                  id="product"
                  name="product"
                  className={`${fieldClass} appearance-none`}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a product…
                  </option>
                  {PRODUCTS.map((p) => (
                    <option key={p.name} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={fieldClass}
                  placeholder="Tell us about your sourcing requirements, target markets, and volumes."
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-gradient-to-r from-[#006D5B] to-[#00F5D4] py-4 text-sm font-bold text-white transition-all duration-200 hover:scale-[1.01] hover:shadow-[0_0_28px_rgba(0,245,212,0.4)]"
            >
              Send Inquiry
            </button>

            {submitted && (
              <p className="mt-4 text-center text-sm font-semibold text-[#00F5D4]">
                Thank you — our export team will respond within one business day.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
