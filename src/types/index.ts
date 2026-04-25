export interface Product {
  name: string;
  scientific: string;
  description: string;
  size: string;
  pack: string;
  grade: string;
  gradient: string;
}

export interface Certification {
  abbr: string;
  name: string;
  body: string;
}

export interface Advantage {
  icon: string;
  title: string;
  body: string;
}

export interface NavLink {
  label: string;
  href: string;
}
