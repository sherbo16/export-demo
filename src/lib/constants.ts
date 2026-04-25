import type { Product, Certification, Advantage, NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Certifications", href: "#certifications" },
  { label: "Global Reach", href: "#global" },
  { label: "Contact", href: "#contact" },
];

export const PRODUCTS: Product[] = [
  {
    name: "Black Tiger Shrimp",
    scientific: "Penaeus monodon",
    description:
      "Premium-grade tiger shrimp with firm texture and superior color, sourced from coastal aquaculture.",
    size: "U/6 – 31/40",
    pack: "IQF / Block",
    grade: "Grade A",
    gradient: "from-[#006D5B]/40 to-[#0A0F1C]",
  },
  {
    name: "Vannamei Shrimp",
    scientific: "Litopenaeus vannamei",
    description:
      "Pacific white shrimp with consistent sizing and clean flavor — our highest-volume export line.",
    size: "16/20 – 71/90",
    pack: "IQF",
    grade: "Premium",
    gradient: "from-[#00F5D4]/20 to-[#0A0F1C]",
  },
  {
    name: "Seer Fish (Surmai)",
    scientific: "Scomberomorus commerson",
    description:
      "Prized king mackerel with rich oily flesh, exported as whole, steaks or boneless fillets.",
    size: "1 – 10 kg",
    pack: "Block / IQF",
    grade: "Grade A",
    gradient: "from-[#006D5B]/30 to-[#111827]",
  },
  {
    name: "Squid",
    scientific: "Loligo spp.",
    description: "Whole, cleaned tubes and rings — bright white meat with tender, firm bite.",
    size: "U/5 – 21/30",
    pack: "IQF / Block",
    grade: "Premium",
    gradient: "from-[#00F5D4]/15 to-[#111827]",
  },
  {
    name: "Cuttlefish",
    scientific: "Sepia spp.",
    description:
      "Whole cleaned and tube-cleaned cuttlefish, ivory-white meat with consistent grading.",
    size: "100 – 1000 g",
    pack: "Block",
    grade: "Grade A",
    gradient: "from-[#006D5B]/35 to-[#0A0F1C]",
  },
  {
    name: "Ribbon Fish",
    scientific: "Trichiurus lepturus",
    description:
      "Silver-skinned ribbon fish in natural curl or straight pack, prized in East Asian markets.",
    size: "200 – 1500 g",
    pack: "Block",
    grade: "Premium",
    gradient: "from-[#00F5D4]/20 to-[#111827]",
  },
  {
    name: "Dried Fish Varieties",
    scientific: "Multi-species",
    description:
      "Sun-dried and salt-cured anchovy, sardine and Bombay duck — traditionally processed.",
    size: "Bulk / Retail",
    pack: "Carton",
    grade: "Export Grade",
    gradient: "from-[#006D5B]/25 to-[#0A0F1C]",
  },
  {
    name: "Frozen Fish Fillets",
    scientific: "Multi-species",
    description:
      "Skinless, boneless fillets — vacuum packed and individually quick-frozen for retail and HoReCa.",
    size: "100 – 500 g",
    pack: "IQF / VAC",
    grade: "Premium",
    gradient: "from-[#00F5D4]/25 to-[#111827]",
  },
];

export const CERTIFICATIONS: Certification[] = [
  { abbr: "HACCP", name: "Hazard Analysis Critical Control Point", body: "Codex Alimentarius" },
  { abbr: "EU", name: "EU Approved Establishment", body: "European Commission CE" },
  { abbr: "FDA", name: "FDA Registered Facility", body: "U.S. Food & Drug Administration" },
  { abbr: "ISO", name: "ISO 22000:2018", body: "Food Safety Management" },
  { abbr: "BRC", name: "BRC Global Standard", body: "British Retail Consortium" },
  { abbr: "HALAL", name: "Halal Certified", body: "Jamiat Ulama Halal Committee" },
  { abbr: "MPEDA", name: "MPEDA Registered", body: "Marine Products Export Authority" },
  { abbr: "EIC", name: "EIC Certified", body: "Export Inspection Council of India" },
];

export const ADVANTAGES: Advantage[] = [
  {
    icon: "🔍",
    title: "Full Traceability",
    body: "From catch to container, every batch is traceable and documented.",
  },
  {
    icon: "❄️",
    title: "Cold Chain Excellence",
    body: "Unbroken refrigerated supply chain from harvest to port of destination.",
  },
  {
    icon: "🌿",
    title: "Sustainable Sourcing",
    body: "Responsible fishing practices aligned with global sustainability standards.",
  },
  {
    icon: "💰",
    title: "Competitive Pricing",
    body: "Direct sourcing and efficient logistics ensure best market rates.",
  },
  {
    icon: "🚢",
    title: "Timely Shipment",
    body: "Strict adherence to shipment schedules with real-time documentation.",
  },
  {
    icon: "🤝",
    title: "Personalized Service",
    body: "Dedicated export managers for every buyer relationship.",
  },
];

export const REGIONS: { region: string; countries: string[] }[] = [
  { region: "Americas", countries: ["United States", "Canada", "Brazil"] },
  {
    region: "Europe",
    countries: ["United Kingdom", "Germany", "France", "Netherlands", "Spain", "Italy"],
  },
  { region: "Middle East", countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman"] },
  {
    region: "Asia Pacific",
    countries: ["Japan", "South Korea", "China", "Singapore", "Australia"],
  },
  { region: "South Asia", countries: ["Sri Lanka", "Malaysia", "Maldives", "Bangladesh"] },
];

export const FACILITY_GALLERY = [
  "Processing Unit — Exterior",
  "Cold Storage Facility",
  "Quality Control Lab",
  "IQF Freezing Line",
  "Packaging & Labeling",
  "Export Ready Containers",
];

export const STATS = [
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 40, suffix: "+", label: "Countries Reached" },
  { value: 10000, suffix: " MT", label: "Annual Export" },
];
