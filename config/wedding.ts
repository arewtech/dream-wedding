// =====================================================================
//  KONFIGURASI TERPUSAT UNDANGAN PERNIKAHAN
//  Ubah semua data di file ini saja — tidak perlu menyentuh kode lain.
// =====================================================================

export const wedding = {
  // ---------------------------------------------------------------
  // Mempelai
  // ---------------------------------------------------------------
  groom: {
    name: "Muhammad Nabil Mufarruidt ilallah",
    shortName: "Nabil",
    parents: "Putra dari Bapak Syaifuddin Zuhri & Ibu Suhartini (Almh.)",
  },
  bride: {
    name: "Aminatul Mukholifah",
    shortName: "Ami",
    parents: "Putri dari Bapak Siswoko & Ibu Sriyem",
  },

  // ---------------------------------------------------------------
  // Tanggal utama (dipakai countdown & format tanggal)
  //   Format ISO: YYYY-MM-DDTHH:mm:ss  (WIB = +07:00)
  // ---------------------------------------------------------------
  date: "2026-08-16T09:00:00+07:00",

  // ---------------------------------------------------------------
  // Acara
  // ---------------------------------------------------------------
  events: [
    {
      title: "Akad Nikah",
      date: "Minggu, 16 Agustus 2026",
      time: "09.00 WIB",
      place: "Kediaman Mempelai Wanita",
      address:
        "Dusun Banjarrejo Barat RT 1 RW 9, Sumberagung, Sumberbaru, Jember (Barat Lapangan Sumberagung)",
    },
    {
      title: "Temu Manten",
      date: "Minggu, 16 Agustus 2026",
      time: "12.00 WIB",
      place: "Kediaman Mempelai Wanita",
      address:
        "Dusun Banjarrejo Barat RT 1 RW 9, Sumberagung, Sumberbaru, Jember (Barat Lapangan Sumberagung)",
    },
    {
      title: "Resepsi",
      date: "Minggu, 16 Agustus 2026",
      time: "14.00 WIB",
      place: "Kediaman Mempelai Wanita",
      address:
        "Dusun Banjarrejo Barat RT 1 RW 9, Sumberagung, Sumberbaru, Jember (Barat Lapangan Sumberagung)",
    },
  ],

  // ---------------------------------------------------------------
  // Lokasi / Google Maps
  // ---------------------------------------------------------------
  location: {
    // Alamat yang ditampilkan
    address:
      "Dusun Banjarrejo Barat RT 1 RW 9, Sumberagung, Sumberbaru, Jember (Barat Lapangan Sumberagung)",
    // Embed map (iframe) — memakai query alamat agar titik peta muncul
    mapEmbed:
      "https://www.google.com/maps?q=Dusun+Banjarrejo+Barat%2C+Sumberagung%2C+Sumberbaru%2C+Jember&output=embed",
    // Tombol "Buka di Google Maps" — link asli dari mempelai
    mapUrl: "https://maps.app.goo.gl/oecdtzrHuh9eN75n7?g_st=iw",
  },

  // ---------------------------------------------------------------
  // Love story / timeline
  // ---------------------------------------------------------------
  story: [
    {
      date: "2024",
      title: "Awal Bertemu",
      text: "Segala sesuatu telah tertulis dengan indah dalam rencana-Nya. Kami pertama kali dipertemukan di tempat kerja, sebagai pekerja dan nasabah. Siapa sangka pertemuan sederhana di Banking Hall menjadi awal dari perjalanan panjang kami bersama.",
    },
    {
      date: "2025",
      title: "Menjalin Hubungan",
      text: "Dari pertemuan sederhana berlanjut menjadi obrolan hangat. Perasaan yang awalnya samar perlahan tumbuh menjadi nyata. Hingga kami akhirnya memutuskan untuk menjalin hubungan. Perjalanan cinta kami bukanlah tanpa ujian. Kami dihadapkan dengan jarak yang memisahkan, dilingkupi keraguan, dihadapkan dengan pilihan yang sulit, bahkan sempat terlintas keinginan untuk menyerah. Entah sudah berapa kali kami saling memaafkan dan kembali menguatkan.",
    },
    {
      date: "2026",
      title: "Lamaran",
      text: "Atas restu orang tua dan keluarga kami melangsungkan lamaran pada 4 Juli 2026. Pada akhirnya jemari akan menemukan genggaman yang tepat, kepala akan menemukan bahu yang tepat, hati akan menemukan rumah yang tepat.",
    },
    {
      date: "2026",
      title: "Menikah",
      text: "Pernikahan bukan karena bertemu lalu berjodoh tapi karena berjodohlah kami dipertemukan, kami memutuskan untuk mengikrarkan janji suci pernikahan pada tanggal 16 Agustus 2026. Semoga langkah baru yang kami mulai ini senantiasa diberkahi dan menjadi perjalanan cinta yang indah sepanjang hayat.",
    },
  ],

  // ---------------------------------------------------------------
  // Galeri (mudah ditambah — cukup taruh file baru & tambahkan path)
  // ---------------------------------------------------------------
  gallery: [
    "/images/new-1.jpg",
    "/images/new-2.jpg",
    "/images/new-3.jpg",
    "/images/new-4.jpg",
    "/images/new-5.jpg",
    "/images/new-6.jpg",
    "/images/new-7.jpg",
  ],
  heroPhoto: "/images/hero-studio.jpg",

  // ---------------------------------------------------------------
  // Amplop digital (bank / e-wallet)
  //   type: "bank" | "ewallet"  — dipakai untuk label
  // ---------------------------------------------------------------
  gifts: [
    {
      type: "bank" as const,
      provider: "BRI",
      name: "Muhammad Nabil Mufarruidt ilallah",
      number: "006501192218539",
      color: "from-[#00529C] to-[#0a6fd1]",
    },
    // Contoh tambahan (aktifkan bila sudah ada datanya):
    // { type: "ewallet", provider: "DANA", name: "...", number: "0812xxxx", color: "from-[#118EEA] to-[#38a7f5]" },
    // { type: "ewallet", provider: "ShopeePay", name: "...", number: "0812xxxx", color: "from-[#EE4D2D] to-[#ff6a48]" },
  ],

  // ---------------------------------------------------------------
  // Musik latar (instrumental piano lembut — bawaan project).
  // Ganti dengan lagu sendiri: taruh file di /public/audio/ lalu ubah src.
  // ---------------------------------------------------------------
  music: {
    src: "/audio/backsound.wav",
    title: "Instrumental",
  },

  // ---------------------------------------------------------------
  // Ayat / quote pembuka
  // ---------------------------------------------------------------
  quote: {
    text: "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
    source: "Q.S. Ar-Rum: 21",
  },

  // ---------------------------------------------------------------
  // Hashtag & meta
  // ---------------------------------------------------------------
  hashtag: "#NabilAmiForever",
  defaultGuest: "Bapak/Ibu/Saudara/i",
} as const;

export type Wedding = typeof wedding;
