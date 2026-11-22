/** Sumber data tunggal untuk penawaran, identitas bisnis, dan navigasi situs. */
export const siteData = {
  name: "Web Inovasion",
  url: "https://webinovasion.com",
  author: "Web Inovasion",
  contact: {
    email: "websiteinovasion@gmail.com",
    phone: "+6285881582774",
    location: "Babelan, Kabupaten Bekasi, Jawa Barat",
    addressLocality: "Babelan, Kabupaten Bekasi",
    addressRegion: "Jawa Barat",
    addressCountry: "ID",
  },
  social: {
    instagram: "https://instagram.com/webinovasion",
    linkedin: "https://www.linkedin.com/in/rayhan-nurahman-1b29a2300/",
  },
  logo: "/assets/images/logo/logo_web_inovasion.png",
  defaultTitle: "Jasa Website untuk Perusahaan Teknik dan Industri | Web Inovasion",
  defaultDescription:
    "Website company profile untuk perusahaan teknik, industri, kontraktor, dan supplier. Lihat layanan dan proyek Web Inovasion.",
  defaultOgImage: "/assets/images/og-webinovasion.png",
  analyticsId: "G-R1D3PJ8FHK",
  locale: "id-ID",
  themeColor: "#0F766E",
  renewal: {
    annualAmount: 1_500_000,
    annualDisplay: "Rp1.500.000 per tahun",
    /** TODO: konfirmasi komponen layanan apa saja yang termasuk biaya perpanjangan. */
    includedItems: [] as string[],
  },
  services: [
    {
      name: "Profil Bisnis",
      description: "Website ringkas untuk memperkenalkan usaha, layanan, produk, dan kontak.",
      tags: ["Profil dan layanan", "Kontak bisnis", "Responsif"],
      icon: "monitor",
    },
    {
      name: "Company Profile",
      description: "Jelaskan kapabilitas, layanan, produk, dan proyek agar calon klien mendapat gambaran perusahaan.",
      tags: ["Profil perusahaan", "Galeri proyek", "Permintaan penawaran"],
      icon: "monitor",
    },
    {
      name: "Katalog dengan Dashboard",
      description: "Kelola data produk atau proyek melalui dashboard dengan lingkup yang disepakati.",
      tags: ["Katalog dikelola sendiri", "Akun admin", "Inquiry WhatsApp"],
      icon: "cart",
    },
    {
      name: "Landing Page",
      description: "Satu halaman terfokus untuk menjelaskan penawaran dan mengarahkan pengunjung menghubungi Anda.",
      tags: ["Satu halaman", "CTA WhatsApp", "Form calon pelanggan"],
      icon: "zap",
    },
  ],
  /** TODO: saya akan memutuskan angka harga Landing Page. Nilai saat ini dipertahankan. */
  landingPagePrice: "Mulai Rp2.000.000",
  profile: {
    /** TODO: isi nama sesuai nama yang ingin ditampilkan. */
    name: "",
    /** TODO: tambahkan foto profil setelah foto yang disetujui tersedia. */
    photo: "",
    /** TODO: lengkapi latar belakang pribadi. */
    background: "",
  },
  packages: [
    {
      name: "Profil Bisnis",
      price: "Rp2.500.000",
      priceNote: "Untuk UMKM yang butuh situs ringkas",
      popular: false,
      features: [
        "Hingga 3 halaman",
        "Profil usaha, layanan atau produk, dan kontak",
        "Tombol WhatsApp dan formulir kontak",
        "Desain responsif untuk HP dan desktop",
        "Pengaturan SEO teknis dasar",
        "2 putaran revisi",
        "Klien menyiapkan materi bisnis dan foto",
        "Domain dan shared hosting tahun pertama termasuk",
      ],
      cta: "Pilih Profil Bisnis",
    },
    {
      name: "Company Profile",
      price: "Rp4.500.000",
      priceNote: "Untuk bisnis dengan layanan dan proyek yang perlu dijelaskan",
      popular: true,
      features: [
        "Hingga 6 halaman",
        "Profil, layanan, produk atau keahlian, proyek, dan kontak",
        "Galeri proyek atau produk",
        "Formulir permintaan penawaran",
        "Integrasi WhatsApp dan Google Maps bila dibutuhkan",
        "Pengaturan SEO on-page dasar",
        "Bantuan menyusun kerangka konten dari materi klien",
        "3 putaran revisi",
        "Domain dan shared hosting tahun pertama termasuk",
      ],
      cta: "Pilih Company Profile",
    },
    {
      name: "Katalog dengan Dashboard",
      price: "Mulai Rp8.500.000",
      priceNote: "Untuk bisnis yang ingin mengelola katalog sendiri",
      popular: false,
      features: [
        "Hingga 6 halaman publik",
        "Satu jenis katalog yang dikelola melalui dashboard",
        "Satu jenis akun admin",
        "Tombol WhatsApp atau formulir pada item katalog",
        "Kolom katalog ditentukan sebelum pengerjaan",
        "Panduan penggunaan dashboard",
        "3 putaran revisi",
        "Domain dan shared hosting tahun pertama termasuk",
      ],
      cta: "Diskusikan Kebutuhan",
    },
  ],
  navigation: [
    { href: "/#services", label: "Layanan" },
    { href: "/#harga", label: "Harga" },
    { href: "/#portfolio", label: "Proyek" },
    { href: "/tentang", label: "Tentang" },
    { href: "/jasa-pembuatan-website-bekasi", label: "Jasa Website Bekasi" },
    { href: "/#faq", label: "FAQ" },
    { href: "/#contact", label: "Kontak" },
  ],
} as const;

export type OfficialServiceName = (typeof siteData.services)[number]["name"];
