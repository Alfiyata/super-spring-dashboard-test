# Super Spring Test

Project frontend menggunakan Vue 3, TypeScript, Vite, Pinia, Vue Router, dan Axios.

## Requirement

- Node.js 20 atau lebih baru
- npm

## Install Dependency

```bash
npm install
```

## Environment

Buat file `.env.local` di root project, lalu isi:

```env
VITE_SUPER_SPRING_API_URL=https://dev-portal.gps.id/backend/seen/public
```

## Menjalankan Project

```bash
npm run dev
```

Setelah server berjalan, buka URL yang muncul di terminal. Biasanya:

```text
http://localhost:5173/
```

## Build Production

```bash
npm run build
```

Hasil build akan dibuat di folder `dist`.

## Preview Build

```bash
npm run preview
```

## Struktur Singkat

```text
src/
  api/          konfigurasi axios dan request API
  assets/       asset aplikasi
  components/   komponen reusable
  pages/        halaman aplikasi
  router/       konfigurasi route
  stores/       state management Pinia
  style.css     global style dan CSS variable
```

## Script

- `npm run dev` menjalankan development server
- `npm run build` build aplikasi untuk production
- `npm run preview` preview hasil build
