import { Linkedin, Mail, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

const QUICK = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#D4AF37]/20 bg-[#0A0F1C] py-12">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-3 text-sm text-[#94A3B8]">From Kanyakumari's Coast to the World.</p>
          </div>
          <nav
            className="flex flex-wrap items-start gap-x-6 gap-y-2 md:justify-center"
            aria-label="Footer"
          >
            {QUICK.map((q) => (
              <a
                key={q.href}
                href={q.href}
                className="text-sm text-[#94A3B8] transition-colors hover:text-[#00F5D4]"
              >
                {q.label}
              </a>
            ))}
          </nav>
          <div className="flex items-start gap-3 md:justify-end">
            {[
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
              { Icon: MessageCircle, href: "#", label: "WhatsApp" },
              { Icon: Mail, href: "mailto:exports@oceanharvestexports.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-[#94A3B8] transition-all duration-200 hover:border-[#D4AF37]/60 hover:text-[#D4AF37] hover:shadow-[0_0_18px_rgba(212,175,55,0.25)]"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-[#D4AF37]/15 pt-6 text-center text-[13px] text-[#94A3B8]">
          © 2026 OceanHarvest Exports · All Rights Reserved · Powered by{" "}
          <a href="#" className="font-semibold text-[#D4AF37] underline-offset-2 hover:underline">
            Zynvix Studio
          </a>
        </div>
      </div>
    </footer>
  );
}
