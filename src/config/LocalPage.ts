export interface LocalPage {

  city:string;

  province:string;

  slug:string;

  title:string;

  description:string;

  badge:string;

  hero:{
      title:string;
      subtitle:string;
  };

  navigation:"home"|"bekasi";

  footer:"home"|"bekasi";

  cta:{
      primary:{
          text:string;
          href:string;
      };
      secondary:{
          text:string;
          href:string;
      };
  };

  stats: readonly {
      value:string;
      label:string;
  }[];

  areas: readonly string[];

  benefits: readonly {
      title:string;
      description:string;
      icon:string;
  }[];

}
export const localPages = {
  bekasi: {

    city: "Bekasi",

    province: "Jawa Barat",

    slug: "jasa-pembuatan-website-bekasi",

    title:
      "Jasa Pembuatan Website Bekasi | Web Inovasion",

    description:
      "Layanan pembuatan website profesional untuk UMKM, bisnis, startup, dan perusahaan di Bekasi.",

    badge:
      "Melayani Bekasi & Sekitarnya",

    hero: {

        title:
            "Jasa Pembuatan Website Bekasi",

        subtitle:
            "Website profesional untuk UMKM, bisnis, startup, dan perusahaan di Bekasi."

    },

    navigation:"bekasi",

    footer:"bekasi",

    cta:{

        primary:{

            text:"Konsultasi Gratis",

            href:"#contact"

        },

        secondary:{

            text:"Lihat Portfolio",

            href:"#portfolio"

        }

    },

    stats:[

        {

            value:"SEO",

            label:"Friendly"

        },

        {

            value:"Fast",

            label:"Loading"

        },

        {

            value:"24/7",

            label:"Support"

        }

    ],

    areas:[

        "Bekasi Barat",
        "Bekasi Timur",
        "Bekasi Selatan",
        "Bekasi Utara",
        "Jatiasih",
        "Jatisampurna",
        "Rawalumbu",
        "Mustika Jaya",
        "Pondok Gede",
        "Medan Satria",
        "Bantargebang",
        "Tambun",
        "Cibitung",
        "Cikarang"

    ],

    benefits:[

        {

            icon:"rocket",

            title:"SEO Friendly",

            description:"Website dioptimalkan agar lebih mudah ditemukan di Google."

        },

        {

            icon:"search",

            title:"Loading Cepat",

            description:"Dibangun menggunakan Astro sehingga ringan dan cepat."

        },

        {

            icon:"smartphone",

            title:"Mobile Responsive",

            description:"Tampilan optimal di desktop, tablet, maupun smartphone."

        },

        {

            icon:"shield",

            title:"Desain Modern",

            description:"UI/UX profesional yang meningkatkan kepercayaan calon pelanggan."

        },

        {

            icon:"code",

            title:"Mudah Dikelola",

            description:"Website mudah diperbarui sesuai kebutuhan bisnis."

        },

        {

            icon:"headset",

            title:"Support Berkelanjutan",

            description:"Tetap mendapatkan bantuan setelah website selesai."

        }

    ]

},
} as const;

export type LocalPageKey = keyof typeof localPages;