# Prompt: Website Undangan Pernikahan Digital

Buatkan saya website undangan pernikahan digital menggunakan **Next.js (App Router) + Tailwind CSS + Framer Motion**, yang ringan, modern, responsive, dan siap di-deploy ke Vercel.

## Stack Teknis

- Next.js 14/15 (App Router, TypeScript)
- Tailwind CSS untuk styling
- Framer Motion untuk animasi scroll (whileInView, fade, slide)
- next/image untuk semua gambar (lazy load otomatis, format WebP)
- Font optimal via next/font (pilih font elegan, misal serif untuk judul + sans untuk body)
- Struktur folder rapi per komponen/section (components/, app/, public/images, public/audio)

## Fitur Utama

### 1. Nama Tamu Otomatis

- Baca nama tamu dari query parameter URL, contoh: `?to=Budi+%26+Keluarga`
- Gunakan `useSearchParams()` untuk menampilkan nama di halaman cover/pembuka
- Jika parameter kosong, tampilkan teks default seperti "Bapak/Ibu/Saudara/i"
- Sertakan juga cara generate link massal (misalnya lewat spreadsheet sederhana)

### 2. Musik Latar

- Halaman dibuka dengan "cover/gerbang pembuka" berisi nama mempelai + tombol besar "Buka Undangan"
- Saat tombol diklik: cover hilang dengan animasi, isi undangan muncul, audio mulai autoplay (karena dipicu user gesture)
- Ada tombol kecil melayang (floating button) untuk mute/unmute & play/pause lagu, terlihat di semua section

### 3. Responsive + Animasi Scroll

- Mobile-first, tampil rapi di semua ukuran layar (HP, tablet, desktop)
- Animasi fade-up/slide-in saat setiap section muncul di viewport (pakai Framer Motion `whileInView`)
- Animasi halus, tidak berlebihan, tetap terasa ringan saat scroll

### 4. Performa

- Optimasi semua gambar (compress, WebP, lazy load)
- Hindari library berat yang tidak perlu
- Skor Lighthouse target: Performance & Best Practices di atas 90

### 5. Foto Mempelai

Sediakan slot foto berikut (total sekitar 8 foto, mudah diganti nanti):

- 1 foto hero/cover (background utama)
- 1 foto pria + 1 foto wanita (foto profil masing-masing mempelai)
- 5 foto galeri prewedding dalam bentuk grid/carousel yang bisa di-scroll atau lightbox saat diklik

### 6. Kartu Bank / E-Wallet

- Section "Amplop Digital" berisi beberapa card: Bank (BCA/BRI/Mandiri dll), Dana, ShopeePay, GoPay
- Setiap card menampilkan nama pemilik rekening, nomor rekening/nomor e-wallet, dan tombol "Salin" (pakai `navigator.clipboard.writeText`) dengan notifikasi kecil "Berhasil disalin"

### 7. Lokasi & Google Maps

- Section detail acara menampilkan alamat lengkap
- Embed `<iframe>` Google Maps yang bisa di-scroll/zoom
- Tombol "Buka di Google Maps" yang mengarahkan ke aplikasi Maps (via URL `https://www.google.com/maps?q=...`)

### 8. Fitur Tambahan yang Perlu Disertakan

- **Countdown timer** menuju hari-H (hari, jam, menit, detik)
- **Detail acara**: tanggal & jam akad, tanggal & jam resepsi (bisa beda lokasi)
- **Love story / timeline** perjalanan hubungan (beberapa poin dengan tanggal)
- **Buku tamu / ucapan & doa**: form input ucapan + list ucapan dari tamu lain (real-time atau refresh)
- **Tombol share** ke WhatsApp dengan link undangan
- **Halaman fallback** jika nama tamu di link tidak valid/kosong

## Struktur Halaman (Section Order)

1. Cover/Gerbang pembuka (nama tamu + tombol buka)
2. Hero (nama mempelai, tanggal pernikahan, foto utama)
3. Mempelai (foto & bio singkat pria-wanita)
4. Love story / timeline
5. Detail acara (akad & resepsi + countdown)
6. Lokasi (Google Maps)
7. Galeri foto
8. Amplop digital (bank/e-wallet)
9. Buku tamu / ucapan
10. Footer (ucapan terima kasih + credit)

## Catatan Tambahan

- Gunakan warna & tema yang elegan, bisa disesuaikan lewat file konfigurasi (misal `config/theme.ts` atau `config/wedding.ts`) supaya gampang diganti tanpa ubah banyak kode
- Semua data mempelai (nama, tanggal, lokasi, foto, rekening) sebaiknya dikumpulkan dalam satu file konfigurasi terpusat, bukan hardcode di banyak file
- Pastikan project siap deploy langsung ke Vercel (tanpa konfigurasi server tambahan)

## Data yang tersedia saat ini

- Nama mempelai: "Muhammad Nabil Mufarruidt ilallah & Aminatul Mukholifah"
- Tanggal akad: "Minggu, 16 Agustus 2026 pukul 08.00 WIB"
- Tanggal resepsi: "Minggu, 16 Agustus 2026 pukul 12.00 WIB"
- Alamat akad dan resepsi: "V9RJ+2GJ, Tunggangan, Yosorati, Kec. Sumberbaru, Kabupaten Jember, Jawa Timur 68156"
- Bank: BRI, Nama Pemilik: "Muhammad Nabil Mufarruidt ilallah", Nomor Rekening: "006501192218539"
- Lokasi Google Maps: "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigAdIBCTIyMzY3ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=id&sa=X&geocode=KQXc8i8AX9YtMea4_GoEu76G&daddr=V9RJ%2B2GJ,+Tunggangan,+Yosorati,+Kec.+Sumberbaru,+Kabupaten+Jember,+Jawa+Timur+68156"
- Foto yang tersedia: hanya ada 4 foto mempelai berdua ( tolong bisa diatur hanya 4 foto dulu, nanti bisa ditambah sendiri)
