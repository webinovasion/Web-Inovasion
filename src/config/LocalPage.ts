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

  websiteTypes: readonly {
  icon: string;
  title: string;
  description: string;
}[];

workflow: readonly {
  step: string;
  title: string;
  description: string;
}[];

faq: readonly {
  question: string;
  answer: string;
}[];

faqSection: {
title:string;
description:string;
cta:string;
},

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

    ],

    websiteTypes: [
  {
    icon: "🏢",
    title: "Website Company Profile",
    description:
      "Website profesional untuk perusahaan agar meningkatkan kredibilitas bisnis."
  },
  {
    icon: "🛒",
    title: "Website UMKM",
    description:
      "Membantu UMKM memperluas jangkauan pasar dan meningkatkan penjualan."
  },
  {
    icon: "🚀",
    title: "Landing Page",
    description:
      "Landing page fokus konversi untuk promosi produk, jasa, maupun iklan digital."
  },
  {
    icon: "🎓",
    title: "Website Sekolah",
    description:
      "Website informasi sekolah, PPDB online, hingga portal akademik."
  },
  {
    icon: "🏥",
    title: "Website Klinik",
    description:
      "Website klinik lengkap dengan profil, layanan, dan informasi jadwal praktik."
  },
  {
    icon: "🍽️",
    title: "Website Restoran",
    description:
      "Tampilkan menu, reservasi, lokasi, dan promo restoran secara profesional."
  },
  {
    icon: "🏠",
    title: "Website Properti",
    description:
      "Website untuk agen properti maupun developer agar listing lebih mudah ditemukan."
  },
  {
    icon: "💻",
    title: "Website Custom",
    description:
      "Pengembangan website sesuai kebutuhan bisnis maupun sistem internal perusahaan."
  }
],

workflow: [
  {
    step: "01",
    title: "Konsultasi",
    description:
      "Diskusikan kebutuhan website, target bisnis, fitur, dan referensi desain yang diinginkan."
  },
  {
    step: "02",
    title: "Perencanaan",
    description:
      "Kami menyusun struktur website, sitemap, dan timeline pengerjaan agar proyek berjalan terarah."
  },
  {
    step: "03",
    title: "Development",
    description:
      "Website mulai dikembangkan menggunakan teknologi modern dengan fokus pada performa dan SEO."
  },
  {
    step: "04",
    title: "Review & Revisi",
    description:
      "Anda dapat melakukan pengecekan dan mengajukan revisi sesuai kesepakatan."
  },
  {
    step: "05",
    title: "Launch",
    description:
      "Website dipublikasikan ke domain dan hosting sehingga siap digunakan oleh pelanggan."
  },
  {
    step: "06",
    title: "Support",
    description:
      "Kami tetap memberikan bantuan teknis dan pendampingan setelah website selesai."
  }
],

faq: [
  {
    question: "Apakah Web Inovasion melayani seluruh wilayah Bekasi?",
    answer:
      "Ya. Kami melayani Kota Bekasi maupun Kabupaten Bekasi seperti Bekasi Barat, Bekasi Timur, Tambun, Cibitung, Cikarang, dan sekitarnya."
  },
  {
    question: "Apakah bisa konsultasi secara online?",
    answer:
      "Bisa. Konsultasi dapat dilakukan melalui WhatsApp, Google Meet, atau platform lainnya sehingga lebih praktis."
  },
  {
    question: "Berapa lama proses pembuatan website?",
    answer:
      "Durasi pengerjaan tergantung kompleksitas website. Rata-rata website company profile selesai dalam 7–14 hari kerja."
  },
  {
    question: "Apakah website sudah SEO Friendly?",
    answer:
      "Ya. Website dibuat dengan struktur SEO Friendly, mobile responsive, dan memiliki performa yang baik."
  },
  {
    question: "Apakah mendapatkan domain dan hosting?",
    answer:
      "Ya. Kami dapat membantu penyediaan domain dan hosting sesuai kebutuhan proyek Anda."
  },
  {
    question: "Apakah ada revisi setelah website selesai?",
    answer:
      "Tentu. Kami menyediakan revisi sesuai kesepakatan serta support setelah website dipublikasikan."
  }
],

faqSection:{
title:"Pertanyaan Umum Seputar Jasa Pembuatan Website di Bekasi",

description:
"Temukan jawaban mengenai layanan pembuatan website di Bekasi mulai dari proses pengerjaan hingga support setelah website selesai.",

cta:"Masih ada pertanyaan?"
}
},
} as const;

export type LocalPageKey = keyof typeof localPages;