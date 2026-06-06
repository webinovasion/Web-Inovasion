# Web Inovasion — Landing Page

Landing page resmi **Web Inovasion**, layanan pembuatan website profesional untuk bisnis, UMKM, startup, dan perusahaan di Indonesia.

---

## 🚀 Tech Stack

| Layer      | Technology                          |
| :--------- | :---------------------------------- |
| Framework  | Astro v6                            |
| Styling    | Tailwind CSS v3                     |
| Font       | Plus Jakarta Sans, JetBrains Mono   |
| Icons      | Inline SVG                          |
| Deployment | Vercel / Netlify / Cloudflare Pages |

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── Header.astro
│   ├── Hero.astro
│   ├── ServiceCard.astro
│   ├── ProjectCard.astro
│   ├── Testimonial.astro
│   ├── CTA.astro
│   ├── Contact.astro
│   └── Footer.astro
│
├── data/
│   ├── services.json
│   ├── projects.json
│   └── testimonials.json
│
├── layouts/
│   └── BaseLayout.astro
│
├── pages/
│   └── index.astro
│
└── styles/
    └── global.css
```

---

## ⚙️ Getting Started

### Prerequisites

* Node.js >= 22.12.0
* npm atau package manager lainnya

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Development server:

```
http://localhost:4321
```

### Build Production

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

---

## 🔧 Configuration Before Deployment

Pastikan beberapa konfigurasi berikut telah diperbarui sebelum website dipublikasikan.

### 1. `astro.config.mjs`

```js
export default defineConfig({
  site: "https://webinovasion.com",
});
```

---

### 2. `src/layouts/BaseLayout.astro`

Sesuaikan informasi berikut:

* Nomor WhatsApp (`telephone`)
* URL media sosial (`sameAs`)
* Koordinat lokasi (`geo`)

---

### 3. `src/components/Contact.astro`

```astro
const WA_NUMBER = "6285881582774";
```

---

### 4. `src/components/Footer.astro`

Perbarui:

* Instagram
* WhatsApp
* LinkedIn
* Email
* Informasi perusahaan

---

### 5. Sitemap

Jika menggunakan sitemap manual:

```
public/sitemap.xml
```

Perbarui:

```xml
<lastmod>YYYY-MM-DD</lastmod>
```

---

### 6. Data Content

Folder:

```
src/data/
```

Periksa:

* `services.json`
* `projects.json`
* `testimonials.json`

---

### 7. Project Images

Folder:

```
public/assets/images/projects/
```

Rekomendasi:

* Format: `.webp`
* Resolusi: minimal 1280×720 px
* Ukuran: < 100 KB

Optimasi gambar menggunakan Squoosh.

---

## 🔍 SEO Checklist

### Basic SEO

* [x] Meta Title
* [x] Meta Description
* [x] Canonical URL
* [x] Open Graph Tags
* [x] Twitter Card

### Structured Data

* [x] LocalBusiness
* [x] WebSite
* [x] Person

### Accessibility

* [x] Semantic HTML
* [x] Heading hierarchy
* [x] Image alt text
* [x] aria-label
* [x] aria-labelledby

### Technical SEO

* [x] robots.txt
* [x] sitemap.xml
* [ ] Submit sitemap ke Google Search Console
* [ ] Validasi Rich Results Test

---

## 📈 Performance Goals

| Metric         | Target |
| :------------- | :----: |
| Performance    |  ≥ 90  |
| Accessibility  |  ≥ 95  |
| Best Practices |   100  |
| SEO            |   100  |

---

## 🚀 Deployment

Direkomendasikan menggunakan:

| Platform         | Keterangan                    |
| :--------------- | :---------------------------- |
| Vercel           | Integrasi GitHub paling mudah |
| Netlify          | Alternatif yang stabil        |
| Cloudflare Pages | Edge performance terbaik      |

### Build Settings

```text
Build Command : npm run build
Output Folder : dist
```

---

## 📝 Content Management

Seluruh konten utama dikelola melalui file JSON.

| Konten    | File                |
| :-------- | :------------------ |
| Layanan   | `services.json`     |
| Portfolio | `projects.json`     |
| Testimoni | `testimonials.json` |

Penambahan atau perubahan konten tidak memerlukan modifikasi komponen Astro.

---

## 📄 License

**Private Project**

Seluruh kode dan aset dalam repository ini bersifat privat dan tidak diperbolehkan untuk didistribusikan tanpa izin dari pemilik proyek.
