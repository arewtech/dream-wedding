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
    parents: "Putra dari Bapak Fulan & Ibu Fulanah",
  },
  bride: {
    name: "Aminatul Mukholifah",
    shortName: "Aminatul",
    parents: "Putri dari Bapak Fulan & Ibu Fulanah",
  },

  // ---------------------------------------------------------------
  // Tanggal utama (dipakai countdown & format tanggal)
  //   Format ISO: YYYY-MM-DDTHH:mm:ss  (WIB = +07:00)
  // ---------------------------------------------------------------
  date: "2026-08-16T08:00:00+07:00",

  // ---------------------------------------------------------------
  // Acara
  // ---------------------------------------------------------------
  events: [
    {
      title: "Akad Nikah",
      date: "Minggu, 16 Agustus 2026",
      time: "08.00 WIB",
      place: "Kediaman Mempelai Laki-laki",
      address:
        "Tunggangan, Yosorati, Kec. Sumberbaru, Kabupaten Jember, Jawa Timur 68156",
    },
    {
      title: "Resepsi",
      date: "Minggu, 16 Agustus 2026",
      time: "12.00 WIB",
      place: "Kediaman Mempelai Laki-laki",
      address:
        "Tunggangan, Yosorati, Kec. Sumberbaru, Kabupaten Jember, Jawa Timur 68156",
    },
  ],

  // ---------------------------------------------------------------
  // Lokasi / Google Maps
  // ---------------------------------------------------------------
  location: {
    // Alamat yang ditampilkan (tanpa Plus Code "V9RJ+2GJ")
    address:
      "Tunggangan, Yosorati, Kec. Sumberbaru, Kabupaten Jember, Jawa Timur 68156",
    // Embed map (iframe) — tetap memakai Plus Code agar titik peta akurat
    mapEmbed:
      "https://www.google.com/maps?q=V9RJ%2B2GJ%2C+Tunggangan%2C+Yosorati%2C+Kec.+Sumberbaru%2C+Kabupaten+Jember%2C+Jawa+Timur+68156&output=embed",
    // Tombol "Buka di Google Maps"
    mapUrl:
      "https://www.google.com/maps?q=V9RJ%2B2GJ%2C+Tunggangan%2C+Yosorati%2C+Kec.+Sumberbaru%2C+Kabupaten+Jember%2C+Jawa+Timur+68156",
  },

  // ---------------------------------------------------------------
  // Love story / timeline
  // ---------------------------------------------------------------
  story: [
    {
      date: "2019",
      title: "Pertama Bertemu",
      text: "Takdir mempertemukan kami di bangku kuliah, dari sekadar teman biasa menjadi cerita yang tak terlupakan.",
    },
    {
      date: "2022",
      title: "Menjalin Hubungan",
      text: "Kami memutuskan untuk saling mengenal lebih dalam dan menjalani hari bersama dengan penuh kepercayaan.",
    },
    {
      date: "2025",
      title: "Lamaran",
      text: "Dengan restu kedua keluarga, kami mengikat janji suci pertunangan sebagai langkah menuju pernikahan.",
    },
    {
      date: "2026",
      title: "Menuju Halal",
      text: "Kami mantapkan hati untuk menyempurnakan setengah agama dan memulai lembaran baru bersama selamanya.",
    },
  ],

  // ---------------------------------------------------------------
  // Galeri (mudah ditambah — cukup taruh file baru & tambahkan path)
  // ---------------------------------------------------------------
  gallery: [
    "/images/couple-1.jpg",
    "/images/couple-2.jpg",
    "/images/couple-3.jpg",
    "/images/couple-4.jpg",
  ],
  heroPhoto: "/images/hero.jpg",

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
  hashtag: "#NabilAminForever",
  defaultGuest: "Bapak/Ibu/Saudara/i",
} as const;

export type Wedding = typeof wedding;
