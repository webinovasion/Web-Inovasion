export interface NavItem {
  href: string;
  label: string;
}

export const navigation = {
  home: [
    {
      href: "#services",
      label: "Layanan",
    },
    {
      href: "#harga",
      label: "Harga",
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
      label: "Kontak",
    },
  ],

  bekasi: [
    {
      href: "#benefits",
      label: "Keunggulan",
    },
    {
      href: "#areas",
      label: "Area Layanan",
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
      label: "Kontak",
    },
  ],
} as const;

export type NavigationPage = keyof typeof navigation;