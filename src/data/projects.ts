export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectTestimonial {
  kutipan: string;
  nama: string;
  jabatan: string;
}

export interface Project {
  nama: string;
  jenis: string;
  url: string;
  gambar: string;
  lokasiKlien?: string;
  masalah?: string;
  solusi?: string;
  hasil?: ProjectMetric[];
  testimoni?: ProjectTestimonial;
}

// TODO: isi lokasiKlien, masalah, hasil terukur, dan testimoni hanya setelah datanya diverifikasi serta disetujui.
const projects: Project[] = [
  {
    nama: "Berlian Teknik Nusantara",
    jenis: "Company Profile",
    url: "https://berlianteknus.co.id",
    gambar: "/assets/images/projects/Project1.webp",
    solusi:
      "Profil perusahaan teknik dengan katalog produk dan dashboard untuk mengelola produk serta pesan pelanggan.",
  },
  {
    nama: "Abu Berkah Teknik",
    jenis: "Company Profile",
    url: "https://abuberkahteknik.com",
    gambar: "/assets/images/projects/Project2.webp",
    solusi:
      "Website untuk memperkenalkan layanan dan informasi perusahaan dengan tampilan responsif dan struktur konten yang rapi.",
  },
];

export default projects;
