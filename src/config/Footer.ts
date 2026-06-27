export interface FooterLink {
  href: string;
  label: string;
}

export interface FooterConfig {
  heading: string;
  services: FooterLink[];
  quickLinks: FooterLink[];
}

export const footerMenus = {
  home: {
    heading: "Layanan",
    services: [
      {
        href: "#services",
        label: "Company Profile",
      },
      {
        href: "#services",
        label: "Landing Page",
      },
      {
        href: "#services",
        label: "Website UMKM",
      },
      {
        href: "#services",
        label: "Website Custom",
      },
      {
        href: "#services",
        label: "Portfolio Pribadi",
      },
    ],

    quickLinks: [
      {
        href: "#portfolio",
        label: "Portfolio",
      },
      {
        href: "#faq",
        label: "FAQ",
      },
      {
        href: "#contact",
        label: "Kontak",
      },
      {
        href: "#contact",
        label: "Konsultasi Gratis",
      },
    ],
  },

  bekasi: {
    heading: "Layanan",
    services: [
      {
        href: "#benefits",
        label: "Website Company Profile",
      },
      {
        href: "#benefits",
        label: "Website UMKM",
      },
      {
        href: "#benefits",
        label: "Landing Page",
      },
      {
        href: "#benefits",
        label: "Website Custom",
      },
      {
        href: "#benefits",
        label: "SEO Friendly",
      },
    ],

    quickLinks: [
      {
        href: "#areas",
        label: "Area Bekasi",
      },
      {
        href: "#portfolio",
        label: "Portfolio",
      },
      {
        href: "#faq",
        label: "FAQ",
      },
      {
        href: "#contact",
        label: "Konsultasi Gratis",
      },
    ],
  },
} as const;

export type FooterPage = keyof typeof footerMenus;