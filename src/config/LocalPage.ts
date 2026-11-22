import { siteData } from "../data/site";

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

  areas: readonly {
    heading: string;
    context: string;
    places: readonly string[];
  }[];

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
      "Jasa website untuk perusahaan teknik, industri, kontraktor, dan supplier di Kota serta Kabupaten Bekasi. UMKM juga dapat memilih layanan Profil Bisnis.",

    badge:
      "Kota dan Kabupaten Bekasi",

    hero: {

        title:
            "Jasa Pembuatan Website Bekasi",

        subtitle:
            "Perusahaan teknik, kontraktor, dan supplier di Kota atau Kabupaten Bekasi dapat menampilkan layanan, kapabilitas, dan proyek melalui website. Saya juga melayani UMKM dengan paket Profil Bisnis."

    },

    cta:{

        primary:{

            text:"Bahas Kebutuhan Website",

            href:"#contact"

        },

        secondary:{

            text:"Lihat Area Layanan",

            href:"#areas"

        }

    },

    areas: [
      {
        heading: "Kota Bekasi",
        context: "Untuk kontraktor, distributor, dan perusahaan jasa di Kota Bekasi, website dapat merangkum layanan, area kerja, dan kontak bisnis dalam satu tempat.",
        places: ["Pondok Gede", "Jatisampurna", "Pondok Melati", "Jatiasih", "Bantargebang", "Mustika Jaya", "Bekasi Timur", "Rawalumbu", "Bekasi Selatan", "Bekasi Barat", "Medan Satria", "Bekasi Utara"],
      },
      {
        heading: "Kabupaten Bekasi",
        context: "Perusahaan industri, kontraktor, dan supplier di Kabupaten Bekasi dapat memakai company profile untuk menjelaskan kapabilitas serta proyek kepada calon mitra.",
        places: ["Babelan", "Bojongmangu", "Cabangbungin", "Cibarusah", "Cibitung", "Cikarang Barat", "Cikarang Pusat", "Cikarang Selatan", "Cikarang Timur", "Cikarang Utara", "Karangbahagia", "Kedungwaringin", "Muaragembong", "Pebayuran", "Serang Baru", "Setu", "Sukakarya", "Sukatani", "Sukawangi", "Tambelang", "Tambun Selatan", "Tambun Utara", "Tarumajaya"],
      },
      {
        heading: "Kawasan industri",
        context: "Supplier dan penyedia jasa di kawasan industri dapat menampilkan spesialisasi, sertifikasi, produk, dan proyek agar calon mitra lebih mudah menilai kecocokan.",
        places: ["Jababeka", "Delta Silicon", "Kawasan Hyundai", "Lippo Cikarang", "EJIP", "MM2100"],
      },
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

            description:"Pilih salah satu paket utama atau diskusikan kebutuhan di luar lingkup paket. Fitur ditetapkan sebelum pengerjaan."

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
    icon: "monitor",
    title: "Company Profile",
    description:
      "Tampilkan profil, layanan, galeri, dan kontak perusahaan dalam satu website yang mudah dibagikan."
  },
  {
    icon: "briefcase",
    title: "Profil Bisnis",
    description:
      "Tampilkan katalog produk dan cara pemesanan agar pelanggan tahu apa yang dijual dan bagaimana menghubungi Anda."
  },
  {
    icon: "zap",
    title: "Landing Page",
    description:
      "Satu halaman terfokus untuk menjelaskan penawaran, menjawab pertanyaan utama, dan mengarahkan pengunjung ke WhatsApp."
  },
  {
    icon: "catalog",
    title: "Katalog dengan Dashboard",
    description:
      "Kelola data produk atau proyek melalui dashboard admin dengan lingkup dan struktur yang disepakati sebelum pengerjaan."
  },
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
      "Ya, saya melayani bisnis di Kota Bekasi dan Kabupaten Bekasi. Konsultasi awal dapat dilakukan secara online melalui WhatsApp."
  },
  {
    question: "Berapa biaya pembuatan website di Bekasi?",
    answer:
      `${siteData.packages[0].name} ${siteData.packages[0].price}, ${siteData.packages[1].name} ${siteData.packages[1].price}, dan ${siteData.packages[2].name} ${siteData.packages[2].price}. Landing Page ${siteData.landingPagePrice}; kebutuhan khusus dibahas sebelum penawaran.`
  },
  {
    question: "Berapa lama proses pengerjaan website?",
    answer:
      "Estimasi mulai 7 hari kerja setelah materi lengkap dan lingkup disepakati. Fitur dan kecepatan persetujuan revisi dapat memengaruhi durasi; jadwal dikonfirmasi sebelum mulai."
  },
  {
    question: "Apakah website bisa ditemukan di Google?",
    answer:
      "Saya menyiapkan dasar SEO teknis seperti title, deskripsi, struktur heading, canonical, dan sitemap. Posisi di Google juga dipengaruhi persaingan, kualitas konten, dan faktor di luar website."
  },
  {
    question: "Apakah domain dan hosting sudah termasuk?",
    answer:
      `Domain dan shared hosting termasuk untuk tahun pertama. Perpanjangan diperkirakan ${siteData.renewal.annualDisplay} dan dikonfirmasi sebelum waktunya. Domain didaftarkan atas nama klien; hosting bersama dikelola Web Inovasion tanpa membagikan akses cPanel utama.`
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
