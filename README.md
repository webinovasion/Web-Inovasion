# Web Inovasion — Landing Page

Website landing page untuk **Web Inovasion**, jasa pembuatan website
profesional untuk bisnis, UMKM, dan perusahaan di Indonesia.

---

## Tech Stack

| Layer | Teknologi |
|---|---|
| Framework | [Astro](https://astro.build) v6 |
| Styling | Tailwind CSS v3 |
| Font | Plus Jakarta Sans, JetBrains Mono |
| Icons | SVG inline (no external library) |
| Deploy | — |

---

## Struktur Project

src/
├── components/
│   ├── Header.astro       # Sticky header + mobile menu
│   ├── Hero.astro         # Hero section + Lighthouse card
│   ├── ServiceCard.astro  # Grid layanan (data-driven)
│   ├── ProjectCard.astro  # Portfolio grid (data-driven)
│   ├── Testimonial.astro  # Testimonial cards
│   ├── CTA.astro          # Call-to-action section
│   ├── Contact.astro      # Form → WhatsApp redirect
│   └── Footer.astro       # Footer 3 kolom
├── data/
│   ├── services.json      # Data layanan
│   ├── projects.json      # Data portfolio
│   └── testimonials.json  # Data testimoni
├── layouts/
│   └── BaseLayout.astro   # HTML shell + meta + schema
├── pages/
│   └── index.astro        # Entry point
└── styles/
└── global.css         # Base styles + utilities

---

## Menjalankan Project

### Prerequisites

- Node.js >= 22.12.0
- npm atau package manager lain

### Install & Dev

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build production
npm run build

# Preview build
npm run preview
```

Server dev berjalan di `http://localhost:4321`

---

## Konfigurasi Sebelum Deploy

Sebelum deploy ke production, pastikan update hal-hal berikut:

### 1. `astro.config.mjs`
```js
export default defineConfig({
  site: "https://webinovasion.com", // domain final
});
```

### 2. `src/layouts/BaseLayout.astro`
- Ganti nomor WA di schema `"telephone"`
- Ganti `sameAs` URL social media
- Ganti koordinat `geo` dengan lokasi aktual

### 3. `src/components/Contact.astro`
```astro
const WA_NUMBER = "6285881582774"; // nomor WA aktual
```

### 4. `src/components/Footer.astro`
- Update link Instagram, WhatsApp, LinkedIn
- Update alamat email

### 5. `public/sitemap.xml`
- Update `lastmod` dengan tanggal deploy terakhir

### 6. `src/data/`
- `projects.json` — pastikan path image sudah benar
- `testimonials.json` — ganti placeholder dengan testimoni asli
- `services.json` — sesuaikan deskripsi jika perlu

### 7. `public/assets/images/project/`
- Tambahkan screenshot project dalam format `.webp`
- Resolusi minimal 1280×720px
- Target ukuran < 100kb per file (gunakan [Squoosh](https://squoosh.app))

---

## SEO Checklist

- [x] Meta title & description
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Canonical URL
- [x] Schema.org structured data (LocalBusiness, WebSite, Person)
- [x] Semantic HTML (h1→h2 hierarchy, article, section, figure)
- [x] aria-label & aria-labelledby
- [x] Image alt text
- [x] robots.txt
- [x] sitemap.xml
- [ ] Google Search Console — submit sitemap setelah deploy
- [ ] Rich Results Test — validasi schema

---

## Performa

Target Lighthouse score:

| Metrik | Target |
|---|---|
| Performance | ≥ 90 |
| Accessibility | ≥ 95 |
| Best Practices | 100 |
| SEO | 100 |

---

## Deployment

Rekomendasikan deploy ke:

- **[Vercel](https://vercel.com)** — paling mudah, connect GitHub repo langsung
- **[Netlify](https://netlify.com)** — alternatif solid
- **[Cloudflare Pages](https://pages.cloudflare.com)** — performa edge terbaik

Build command: `npm run build`
Output directory: `dist/`

---

## Update Konten

Semua konten utama dikelola via file JSON di `src/data/`:

- Tambah project baru → edit `projects.json`
- Tambah layanan → edit `services.json`
- Tambah testimoni → edit `testimonials.json`

Tidak perlu sentuh komponen Astro untuk update konten rutin.

---

## Lisensi

Private project. Tidak untuk didistribusikan.