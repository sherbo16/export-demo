import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
          scrolled
            ? "border-[#D4AF37]/25 bg-[#0A0F1C]/95 backdrop-blur-xl"
            : "border-[#D4AF37]/15 bg-[#0A0F1C]/70 backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#home" aria-label="OceanHarvest Exports home">
            <Logo />
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-sm font-medium text-[#94A3B8] transition-colors hover:text-[#00F5D4]"
              >
                {l.label}
                <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-[#00F5D4] to-[#D4AF37] transition-transform duration-200 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-md border border-[#D4AF37] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] transition-all duration-200 hover:bg-[#D4AF37] hover:text-[#0A0F1C] hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] lg:inline-flex"
          >
            Partner With Us
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            className="rounded-md border border-[#D4AF37]/40 p-2 text-[#D4AF37] lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-[#D4AF37]/20 bg-[#0A0F1C]/98 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-6">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-[#F1F5F9] transition-colors hover:bg-white/5 hover:text-[#00F5D4]"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-md border border-[#D4AF37] px-4 py-3 text-center text-xs font-semibold uppercase tracking-widest text-[#D4AF37]"
              >
                Partner With Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
