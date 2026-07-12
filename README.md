# 💍 Website Undangan Pernikahan Digital

Undangan pernikahan digital — **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion**. Ringan, responsive, siap deploy ke Vercel.

Palet warna diselaraskan dengan foto mempelai: **ivory / sage green / gold**.

## 🚀 Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build produksi
```

## ✏️ Mengubah Data

Semua data terpusat di **`config/wedding.ts`** — nama mempelai, tanggal, acara,
lokasi, love story, galeri, rekening, musik, dan quote. Tidak perlu menyentuh
file lain.

Tema warna diatur di **`tailwind.config.ts`** (`cream`, `sage`, `gold`, dst).

## 🖼️ Mengganti Foto

Taruh file di `public/images/` lalu sesuaikan path di `config/wedding.ts`:

| Slot        | File default            |
| ----------- | ----------------------- |
| Hero/cover  | `hero.jpg`              |
| Mempelai ♂  | `groom.jpg`             |
| Mempelai ♀  | `bride.jpg`             |
| Galeri      | `gallery-1..4.jpg`      |

Tambah galeri cukup dengan menambahkan path baru ke array `gallery`.

## 🎵 Musik Latar

Sudah ada instrumental piano lembut bawaan di `public/audio/backsound.wav`.
Musik autoplay saat tombol **"Buka Undangan"** diklik (mematuhi kebijakan
browser: butuh gesture user). Tombol melayang di kanan-bawah untuk play/pause.

Ingin ganti lagu sendiri? Taruh file di `public/audio/` lalu ubah `music.src`
di `config/wedding.ts`. Jika file tidak ada, tombol otomatis disembunyikan.

## 👤 Nama Tamu Otomatis

Tambahkan query `?to=` di URL:

```
https://situs-anda.vercel.app/?to=Budi+%26+Keluarga
```

Nama muncul di halaman cover. Kosong → tampil "Bapak/Ibu/Saudara/i".

### Generate Link Massal (Spreadsheet)

Di Google Sheets, kolom A = nama tamu. Kolom B rumus:

```
="https://situs-anda.vercel.app/?to="&ENCODEURL(A2)
```

Tarik ke bawah untuk semua tamu — setiap baris jadi link personal siap kirim.

## 💌 Buku Tamu

Ucapan disimpan di **localStorage** browser (tanpa backend, aman untuk static
hosting). Untuk versi real-time lintas perangkat, hubungkan ke Firebase /
Supabase / Google Sheets API pada `components/Guestbook.tsx`.

## ☁️ Deploy ke Vercel

1. Push ke GitHub.
2. Import repo di [vercel.com](https://vercel.com) → deploy (tanpa konfigurasi tambahan).
3. (Opsional) set env `NEXT_PUBLIC_SITE_URL` ke domain final untuk OG image.

## 🧩 Struktur Section

Cover → Hero → Quote → Mempelai → Love Story → Detail Acara + Countdown →
Lokasi (Maps) → Galeri → Amplop Digital → Buku Tamu → Footer (share WhatsApp).
