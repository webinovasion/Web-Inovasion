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
      "Pembuatan website company profile, landing page, dan website UMKM untuk bisnis di Kota dan Kabupaten Bekasi. Konsultasi online via WhatsApp.",

    badge:
      "Kota dan Kabupaten Bekasi",

    hero: {

        title:
            "Jasa Pembuatan Website Bekasi",

        subtitle:
            "Butuh website company profile, landing page, atau toko online? Kami membantu bisnis di Kota dan Kabupaten Bekasi menentukan halaman, fitur, dan biaya sebelum pengerjaan dimulai."

    },

    navigation:"bekasi",

    footer:"bekasi",

    cta:{

        primary:{

            text:"Bahas Kebutuhan Website",

            href:"#contact"

        },

        secondary:{

            text:"Lihat Contoh Proyek",

            href:"#portfolio"

        }

    },

    areas:[
        "Kota Bekasi",
        "Kabupaten Bekasi"
    ],

    benefits:[

        {

            icon:"rocket",

            title:"SEO teknis dasar",

            description:"Halaman memakai judul, deskripsi, heading, canonical, dan sitemap yang bisa dibaca mesin pencari. Ini fondasi teknis, bukan jaminan peringkat."

        },

        {

            icon:"search",

            title:"Struktur halaman terarah",

            description:"Susun informasi layanan, produk, dan kontak agar calon pelanggan tahu langkah berikutnya."

        },

        {

            icon:"smartphone",

            title:"Nyaman dibuka di ponsel",

            description:"Tampilan menyesuaikan layar ponsel dan desktop, termasuk tombol kontak yang mudah ditemukan."

        },

        {

            icon:"shield",

            title:"Biaya dan fitur dibahas di awal",

            description:"Pilih paket yang tersedia atau diskusikan website custom. Ruang lingkup mengikuti fitur yang disepakati."

        },

        {

            icon:"code",

            title:"Kontak langsung ke WhatsApp",

            description:"Pengunjung dapat menghubungi bisnis melalui tombol WhatsApp atau formulir pada website."

        },

        {

            icon:"headset",

            title:"Dukungan mengikuti paket",

            description:"Revisi, garansi, dan pemeliharaan dijelaskan pada paket atau kesepakatan proyek."

        }

    ],

    websiteTypes: [
  {
    icon: "🏢",
    title: "Website Company Profile",
    description:
      "Tampilkan profil, layanan, galeri, dan kontak perusahaan dalam satu website yang mudah dibagikan."
  },
  {
    icon: "🛒",
    title: "Website UMKM dan Toko Online",
    description:
      "Tampilkan katalog produk dan cara pemesanan agar pelanggan tahu apa yang dijual dan bagaimana menghubungi Anda."
  },
  {
    icon: "🚀",
    title: "Landing Page",
    description:
      "Satu halaman terfokus untuk menjelaskan penawaran, menjawab pertanyaan utama, dan mengarahkan pengunjung ke WhatsApp."
  },
  {
    icon: "🗂️",
    title: "Portfolio Pribadi",
    description:
      "Susun proyek, pengalaman, dan informasi kontak untuk membantu calon klien melihat hasil kerja Anda."
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
    title: "Diskusikan kebutuhan",
    description:
      "Ceritakan jenis usaha, tujuan website, materi yang sudah tersedia, dan fitur yang dibutuhkan."
  },
  {
    step: "02",
    title: "Sepakati ruang lingkup",
    description:
      "Tentukan halaman, fitur, materi, paket atau biaya custom, serta jadwal pengerjaan sebelum proyek dimulai."
  },
  {
    step: "03",
    title: "Rancang dan bangun",
    description:
      "Desain dan halaman dibuat berdasarkan ruang lingkup yang telah disepakati."
  },
  {
    step: "04",
    title: "Tinjau hasilnya",
    description:
      "Periksa isi dan tampilan website, lalu sampaikan revisi sesuai ketentuan paket."
  },
  {
    step: "05",
    title: "Terbitkan website",
    description:
      "Setelah persetujuan akhir dan kebutuhan domain/hosting siap, website dipublikasikan."
  }
],

faq: [
  {
    question: "Apakah melayani Kota dan Kabupaten Bekasi?",
    answer:
      "Ya. Web Inovasion melayani bisnis di Kota Bekasi dan Kabupaten Bekasi. Konsultasi awal dapat dilakukan secara online melalui WhatsApp atau Google Meet."
  },
  {
    question: "Berapa biaya pembuatan website di Bekasi?",
    answer:
      "Harga paket yang tersedia tercantum pada halaman ini. Website custom dihitung berdasarkan halaman dan fitur yang dibutuhkan; kami bahas ruang lingkupnya sebelum memberi penawaran."
  },
  {
    question: "Berapa lama proses pengerjaan website?",
    answer:
      "Waktunya mengikuti jumlah halaman, fitur, dan kelengkapan materi. Jadwal dibicarakan sebelum pengerjaan dimulai."
  },
  {
    question: "Apakah website bisa ditemukan di Google?",
    answer:
      "Kami menyiapkan dasar SEO teknis seperti title, deskripsi, struktur heading, canonical, dan sitemap. Posisi di Google juga dipengaruhi persaingan, kualitas konten, dan faktor di luar website."
  },
  {
    question: "Apakah domain dan hosting sudah termasuk?",
    answer:
      "Domain dan hosting termasuk pada beberapa paket yang ditampilkan. Untuk paket custom, detailnya mengikuti penawaran dan ruang lingkup proyek."
  },
  {
    question: "Bisakah saya meminta perubahan setelah website selesai?",
    answer:
      "Bisa. Jumlah revisi, garansi, dan pemeliharaan mengikuti paket atau kesepakatan proyek yang dipilih."
  }
],

faqSection:{
title:"Sebelum membuat website di Bekasi",

description:
"Jawaban tentang biaya, waktu pengerjaan, SEO dasar, dan area layanan Web Inovasion.",

cta:"Masih ada pertanyaan?"
}
},
} as const;

export type LocalPageKey = keyof typeof localPages;
