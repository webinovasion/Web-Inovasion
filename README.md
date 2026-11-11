![Astro](https://img.shields.io/badge/Astro-v6-FF5D01)
![Tailwind](https://img.shields.io/badge/Tailwind-v3-38BDF8)
![SEO](https://img.shields.io/badge/SEO-Basics%20Configured-10B981)

# Web Inovasion — Official Landing Page

Responsive • Static HTML • Structured Data • Data-Driven Sections

Landing page resmi **Web Inovasion**, layanan pembuatan website profesional untuk bisnis, UMKM, startup, dan perusahaan di Indonesia.

Menggunakan halaman statis Astro, komponen yang dapat digunakan ulang, metadata SEO dasar, dan beberapa section berbasis data JSON.

---

# 🚀 Tech Stack

| Layer           | Technology                          |
| :-------------- | :---------------------------------- |
| Framework       | Astro v6                            |
| Styling         | Tailwind CSS v3                     |
| Language        | TypeScript                          |
| Font            | Plus Jakarta Sans, JetBrains Mono   |
| Icons           | Inline SVG                          |
| Data Source     | JSON                                |
| Structured Data | Schema.org JSON-LD                  |
| Deployment      | Vercel / Netlify / Cloudflare Pages |

---

# 📁 Project Structure

```text
src/
├── components/
│   ├── Header.astro, Hero.astro, ServiceCard.astro
│   ├── Pricing.astro, ProjectCard.astro, Testimonial.astro
│   ├── FAQ.astro, CTA.astro, Contact.astro, Footer.astro
│   └── local/                 # Section khusus halaman Bekasi
│
├── data/
│   ├── Service.json
│   ├── Projects.json
│   └── Pricing.json
│
├── config/                    # Site, schema, navigasi, footer, konten lokal
├── layouts/
│   └── BaseLayout.astro
│
├── pages/
│   ├── index.astro
│   └── jasa-pembuatan-website-bekasi.astro
│
└── styles/
    └── global.css

public/
├── assets/images/             # Logo dan gambar portfolio
├── favicon.ico
├── favicon.svg
└── robots.txt
```

---

# ⚙️ Getting Started

## Requirements

* Node.js >= 22.12
* npm

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

Development server:

```
http://localhost:4321
```

## Production Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

---

# 🔧 Project Configuration

## Astro

Pastikan domain sudah diatur.

```js
site: "https://webinovasion.com"
```

---

## BaseLayout

Sesuaikan apabila diperlukan:

* Meta Title
* Meta Description
* Canonical URL
* Open Graph
* Twitter Card
* Structured Data
* Social Media URL
* Business Information

---

## Contact

Perbarui domain, email, nomor WhatsApp, analytics ID, dan tautan sosial di `src/config/Site.ts`. Nomor WhatsApp dipakai oleh form kontak dan tautan konsultasi. Susunan menu footer berada di `src/config/Footer.ts`.

---

## Project Data

Folder:

```
src/data/
```

Kelola:

* Service.json
* Projects.json
* Pricing.json

Layanan, portfolio, dan harga dibaca dari JSON. FAQ dan sebagian besar konten halaman Bekasi berada dalam komponen serta `src/config/LocalPage.ts`. Komponen testimonial berupa placeholder dan belum dipasang pada halaman aktif.

---

## Images

Folder:

```
public/assets/images/
```

Rekomendasi:

* Format: WebP
* Minimal: 1280×720
* Maksimal: 100 KB

Optimasi menggunakan Squoosh.

---

# 🔍 SEO Features

## Basic SEO

* Meta Title
* Meta Description
* Canonical URL
* Open Graph
* Twitter Card
* robots.txt
* sitemap.xml

---

## Structured Data

Website menggunakan JSON-LD.

Schema pada `src/config/Schema.ts` mencakup Organization, LocalBusiness, WebSite, WebPage, dan Service. Schema FAQ ditambahkan oleh komponen FAQ beranda dan halaman Bekasi.

---

## Accessibility

* Semantic HTML
* Single H1
* Proper heading hierarchy
* Accessible navigation
* aria-label
* aria-labelledby
* Keyboard friendly
* Decorative elements hidden from screen readers

---

## Technical SEO

* Clean URL
* Canonical
* Lazy loading
* Async image decoding
* Optimized SVG
* Mobile-first
* Internal anchor navigation

---

# 📈 Performance Goals

| Metric         | Target |
| :------------- | :----: |
| Performance    |  ≥ 90  |
| Accessibility  |  ≥ 95  |
| Best Practices |   100  |
| SEO            |   100  |

---

# 🚀 Deployment

Recommended:

| Platform         | Description        |
| :--------------- | :----------------- |
| Vercel           | GitHub integration |
| Netlify          | Stable deployment  |
| Cloudflare Pages | Edge performance   |

Build settings:

```
Build Command:
npm run build

Output:
dist
```

---

# 📊 Search Engine

Repository currently configures:

* XML sitemap melalui integrasi `@astrojs/sitemap`
* `robots.txt` yang menunjuk ke sitemap index
* Canonical URL, Open Graph, dan Twitter Card di `BaseLayout.astro`
* Structured data JSON-LD

Record TXT verifikasi Google Search Console ditemukan pada DNS publik `webinovasion.com`. Ini mengonfirmasi record DNS tersedia; status properti dan pengiriman sitemap tetap perlu dipastikan dari akun Search Console.

Recommended validation:

* Google Rich Results Test
* Schema Validator
* PageSpeed Insights

---

# 📝 Content Management

Beberapa konten utama menggunakan JSON.

| Content   | File          |
| :-------- | :------------ |
| Services  | Service.json  |
| Portfolio | Projects.json |
| Pricing   | Pricing.json  |

Menambah item layanan, portfolio, atau paket biasanya hanya memerlukan perubahan pada file JSON terkait. Menambah halaman, mengubah FAQ, atau mengubah struktur section memerlukan perubahan pada berkas Astro/config yang menggunakannya.

---

# 🎯 Main Features

* Responsive Design
* Landing Page Architecture
* JSON-driven Content
* SEO Metadata and Structured Data
* Structured Data
* FAQ Schema
* WhatsApp Lead Form
* Portfolio Showcase
* Static Page Rendering
* Accessibility Friendly

---

# 📄 License

Private Project.

All source code and assets are proprietary and may not be redistributed, copied, modified, or used commercially without permission from the project owner.

---

Built with Astro + Tailwind CSS for Web Inovasion.
