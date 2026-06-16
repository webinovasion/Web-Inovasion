![Astro](https://img.shields.io/badge/Astro-v6-FF5D01)
![Tailwind](https://img.shields.io/badge/Tailwind-v3-38BDF8)
![SEO](https://img.shields.io/badge/SEO-Optimized-10B981)

# Web Inovasion — Official Landing Page

Fast • SEO-Friendly • Responsive • Structured Data • JSON-Driven

Landing page resmi **Web Inovasion**, layanan pembuatan website profesional untuk bisnis, UMKM, startup, dan perusahaan di Indonesia.

Dirancang dengan pendekatan modern, SEO-friendly, performa tinggi, dan arsitektur komponen berbasis Astro.

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
│   ├── Header.astro
│   ├── Hero.astro
│   ├── ServiceCard.astro
│   ├── ProjectCard.astro
│   ├── Testimonial.astro
│   ├── FAQ.astro
│   ├── CTA.astro
│   ├── Contact.astro
│   └── Footer.astro
│
├── data/
│   ├── Service.json
│   ├── Projects.json
│   └── Testimonials.json
│
├── layouts/
│   └── BaseLayout.astro
│
├── pages/
│   └── index.astro
│
└── styles/
    └── global.css

public/
└── assets/
    ├── images/
    ├── favicon/
    └── logo/
```

---

# ⚙️ Getting Started

## Requirements

* Node.js >= 22
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

Perbarui nomor WhatsApp.

```astro
const WA_NUMBER = "...";
```

---

## Footer

Periksa:

* Instagram
* WhatsApp
* LinkedIn
* Email
* Lokasi

---

## Project Data

Folder:

```
src/data/
```

Kelola:

* Service.json
* Projects.json
* Testimonials.json

Seluruh section bersifat JSON-driven.

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

### Organization

* Brand information
* Logo
* Contact

### LocalBusiness

* Area served
* Contact
* Service catalog

### WebSite

* Publisher
* Language

### Person

* Founder

### FAQPage

* Frequently Asked Questions

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

Current implementation includes:

* Google Search Console
* XML Sitemap
* robots.txt
* Canonical URL
* Structured Data
* Open Graph
* Twitter Card

Recommended validation:

* Google Rich Results Test
* Schema Validator
* PageSpeed Insights

---

# 📝 Content Management

Main content is JSON-driven.

| Content      | File              |
| :----------- | :---------------- |
| Services     | Service.json      |
| Portfolio    | Projects.json     |
| Testimonials | Testimonials.json |

Adding new content does not require modifying Astro components.

---

# 🎯 Main Features

* Responsive Design
* Landing Page Architecture
* JSON-driven Content
* SEO Optimized
* Structured Data
* FAQ Schema
* WhatsApp Lead Form
* Portfolio Showcase
* Testimonial Section
* Performance Optimized
* Accessibility Friendly

---

# 📄 License

Private Project.

All source code and assets are proprietary and may not be redistributed, copied, modified, or used commercially without permission from the project owner.

---

Built with Astro + Tailwind CSS for Web Inovasion.
