export const profile = {
  name: "Lalu Naufal Arkan",
  shortName: "Naufal",
  roles: ["Full-Stack Developer", "Backend & IoT Engineer", "AI & ML Practitioner", "System Builder"],
  location: "Mataram, Nusa Tenggara Barat",
  email: "lalunaufalarkan21@gmail.com",
  // Simpan foto Anda di folder public/profile.jpg (atau ubah path di bawah ini)
  photo: "/profile.jpg",
  summary:
    "Lulusan Teknik Elektro (Teknik Komputer) Universitas Mataram yang fokus membangun aplikasi web full-stack, sistem berbasis kecerdasan buatan, dan perangkat IoT — merancang solusi digital yang rapi, cepat, dan siap digunakan di dunia nyata.",
  about: [
    "Saya memiliki latar belakang Teknik Komputer yang membuat saya nyaman bekerja di berbagai lapisan sistem: merancang skema basis data dan REST API di backend, menyusun antarmuka web modern di frontend, hingga merakit perangkat telemetri IoT di lapangan.",
    "Saat saya mengikuti program MagangHub di Balai Besar POM (BBPOM) di Mataram sebagai Full-Stack App Developer. Di sana saya mengembangkan dan memelihara berbagai modul aplikasi internal yang terhubung melalui satu portal dan sistem Single Sign-On (SSO) berbasis JWT.",
    "Di luar itu, saya senang membangun produk digital dari nol — termasuk platform analitik sepak bola berbasis machine learning dan platform top-up game otomatis yang berjalan aktif di produksi.",
  ],
  available: true,
  cv: "/cv.pdf",
  socials: {
    github: "https://github.com/Laluarkan",
    linkedin: "",
    instagram: "",
  },
};

export const stats = [
  { value: "10+", label: "Aplikasi & modul web dibangun" },
  { value: "2", label: "Produk web aktif di publik" },
  { value: "17k+", label: "Data pertandingan diproses ML" },
  { value: "7+", label: "Proyek Web, AI & IoT" },
];

export const skills = [
  {
    title: "Full-Stack Web",
    desc: "Membangun aplikasi web end-to-end dengan Laravel, Django, Next.js, dan React beserta arsitektur REST API dan SSO JWT.",
    icon: "globe",
  },
  {
    title: "Backend & Integrasi API",
    desc: "Otentikasi terpusat, payment gateway (Midtrans), penyedia produk digital (Digiflazz), webhook, serta ekspor PDF/Excel presisi.",
    icon: "code",
  },
  {
    title: "AI & Machine Learning",
    desc: "Pemodelan prediksi, reinforcement learning, pengenalan wajah (face recognition), dan integrasi LLM untuk otomasi.",
    icon: "brain",
  },
  {
    title: "Internet of Things",
    desc: "Akuisisi data sensor dengan mikrokontroler ESP, kalibrasi instrumen ukur, dan pengiriman telemetri real-time via MQTT.",
    icon: "cpu",
  },
  {
    title: "Database & Optimasi",
    desc: "Perancangan skema relasional di PostgreSQL, MySQL, dan Supabase serta optimasi kueri untuk pengolahan data skala besar.",
    icon: "database",
  },
  {
    title: "Sistem Informasi & UI",
    desc: "Digitalisasi alur kerja instansi, perancangan antarmuka responsif dengan Tailwind CSS, serta manajemen kode dengan Git.",
    icon: "smartphone",
  },
] as const;

export const techStack = [
  "Laravel", "Next.js", "React", "TypeScript", "Python", "Django", "PHP", "JavaScript",
  "Tailwind CSS", "PostgreSQL", "MySQL", "Supabase", "REST API", "JWT / SSO", "MQTT",
  "ESP32", "Git & GitHub", "Midtrans", "Digiflazz API", "Google Gemini API",
];

export const experiences = [
  {
    role: "Full-Stack Application Developer (MagangHub)",
    company: "Balai Besar POM (BBPOM) di Mataram",
    location: "Kota Mataram, NTB",
    period: "2026 — Sekarang",
    type: "MagangHub",
    points: [
      "Mengembangkan dan mengintegrasikan portal frontend terpadu (Next.js) dengan berbagai layanan backend (Laravel) menggunakan Single Sign-On (JWT) dan sistem notifikasi terpusat.",
      "Membangun fitur pengenalan wajah (face recognition) dan analitik multi-tahun pada buku tamu digital E-Tamu v2.0.",
      "Mengembangkan modul manajemen stok reagen & berita acara stok opname (PERCEPAT), peminjaman armada & aula dengan gate pass pos keamanan (PAULA), serta pengelolaan surat tugas dengan ekspor PDF presisi (E-SAPA).",
      "Merancang modul Riwayat Pemeliharaan sarana-prasarana (genset & aset BMN) berbasis pemindaian QR Code fisik, manajemen ruangan & mutasi (SISMORA), presensi PKL (SIAP-MELAYANI), dan pembaruan sampel pengujian laboratorium.",
    ],
    tags: ["Next.js", "Laravel", "TypeScript", "JWT SSO", "Face Recognition", "REST API"],
  },
  {
    role: "IT Intern",
    company: "PT Air Minum (PTAM) Giri Menang",
    location: "Kota Mataram, NTB",
    period: "Jun 2026 — Agu 2026",
    type: "Magang",
    points: [
      "Mengembangkan dan mengkalibrasi Water Meter Tester untuk memvalidasi kelayakan meteran air pelanggan di lapangan.",
      "Merancang perangkat akuisisi berbasis mikrokontroler ESP dan sensor aliran YF-B1 sebagai komponen pengukuran utama.",
      "Membangun sistem telemetri real-time dengan listener MQTT berbasis Python yang menyalurkan metrik sensor langsung ke dasbor pemantauan berbasis Laravel.",
    ],
    tags: ["IoT", "ESP", "Sensor YF-B1", "MQTT", "Python", "Laravel"],
  },
  {
    role: "S1 Teknik Elektro — Konsentrasi Teknik Komputer",
    company: "Universitas Mataram",
    location: "Kota Mataram, NTB",
    period: "2022 — 2026",
    type: "Pendidikan",
    points: [
      "Fokus studi pada Pemrograman Web, Sistem Basis Data, Kecerdasan Buatan, dan Sistem Tertanam.",
    ],
    tags: ["Teknik Komputer", "Rekayasa Perangkat Lunak", "Sistem Tertanam"],
  },
];

export const bpomModules = [
  { code: "AUTH-BPOM", name: "SSO & Central Notification", desc: "Otentikasi JWT lintas aplikasi, pemetaan peran (Katim, PIC, Kabalai), dan lonceng notifikasi terpusat." },
  { code: "PERCEPAT", name: "Inventaris Lab & Stok Opname", desc: "Manajemen reagen, baku pembanding, suku cadang, ATK, kartu stok PDF, label QR, dan berita acara SO." },
  { code: "E-TAMU v2", name: "Smart Guestbook Face ID", desc: "Buku tamu digital dengan pengenalan wajah (face recognition) server-side dan grafik multi-tahun." },
  { code: "PAULA", name: "Armada Dinas & Gate Pass", desc: "Peminjaman mobil dinas & aula, kalibrasi odometer, laporan kerusakan, dan gate pass pos security." },
  { code: "E-SAPA", name: "Surat Tugas & Perjadin", desc: "Pembuatan surat tugas, SPD, kwitansi perjalanan dinas, dan ekspor PDF presisi tinggi." },
  { code: "SISMORA", name: "Monitoring Ruangan & Mutasi", desc: "Sinkronisasi master ruangan, penanggung jawab/penyelia, dan pelacakan mutasi inventaris." },
  { code: "SARPRAS QR", name: "Riwayat Pemeliharaan Genset", desc: "Log pemeliharaan genset & aset BMN via scan QR Code fisik untuk teknisi dan pimpinan." },
  { code: "PENGUJIAN", name: "Sampel & Barcode Lab", desc: "Manajemen batch sampel SPU laboratorium, cetak barcode/QR, dan ekspor dokumen uji." },
];

export type ProjectCategory = "Semua" | "Full-Stack & Enterprise" | "AI & Machine Learning" | "IoT & Robotics";

export type Project = {
  title: string;
  subtitle?: string;
  category: Exclude<ProjectCategory, "Semua">;
  desc: string;
  highlights?: string[];
  tags: string[];
  accentColor?: string;
  demo?: string;
  repo?: string;
  badge?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Ekosistem Aplikasi Internal BBPOM Mataram",
    subtitle: "Super-App & Single Sign-On Instansi",
    category: "Full-Stack & Enterprise",
    desc: "Portal kerja terpadu untuk Balai Besar POM di Mataram yang menyatukan berbagai aplikasi operasional dalam satu antarmuka Next.js dan otentikasi SSO berbasis JWT.",
    highlights: [
      "Single Sign-On (JWT) & otorisasi berlapis untuk pegawai, Katim, PIC modul, hingga Kepala Balai.",
      "Integrasi real-time antar modul melalui REST API, proxy Next.js, dan sistem notifikasi terpusat.",
    ],
    tags: ["Next.js", "Laravel", "TypeScript", "JWT SSO", "Face Recognition", "MySQL"],
    badge: "MagangHub · Internal",
    accentColor: "from-lime-400/20 via-emerald-500/10 to-cyan-500/20",
    featured: true,
  },
  {
    title: "L1 Prediksi-Kan",
    subtitle: "Platform Analitik & Prediksi Sepak Bola AI",
    category: "AI & Machine Learning",
    desc: "Aplikasi web full-stack bertenaga Machine Learning & Reinforcement Learning untuk memprediksi probabilitas hasil pertandingan, Over/Under, dan rekomendasi value bet dari 17.000+ data historis liga Eropa.",
    highlights: [
      "Otomatisasi pembaruan data pertandingan dan inferensi berkala.",
      "Optimasi kueri basis data untuk mengatasi bottleneck memori pada pemrosesan data skala besar.",
    ],
    tags: ["Django", "React", "Supabase", "Machine Learning", "Reinforcement Learning"],
    demo: "https://www.l1prediksikan.my.id",
    repo: "https://github.com/Laluarkan/l1prediksikan_final",
    badge: "Live · l1prediksikan.my.id",
    accentColor: "from-emerald-400/25 via-teal-500/10 to-cyan-500/20",
    featured: true,
  },
  {
    title: "ArTa Zone",
    subtitle: "Platform Top-Up Game & PPOB Otomatis 24 Jam",
    category: "Full-Stack & Enterprise",
    desc: "Layanan pembelian voucher game dan produk PPOB instan dengan pemrosesan transaksi otomatis dari pembayaran hingga pengiriman produk.",
    highlights: [
      "Integrasi API Digiflazz untuk katalog & pemesanan produk digital serta Midtrans Payment Gateway untuk pembayaran.",
      "Arsitektur webhook terstruktur untuk pembaruan status real-time, sinkronisasi harga, dan auto-refund transaksi gagal.",
    ],
    tags: ["React", "Laravel", "Midtrans", "Digiflazz API", "Webhook", "MySQL"],
    demo: "https://www.kansss.my.id",
    repo: "https://github.com/Laluarkan/Project-Arta-Topup",
    badge: "Live · kansss.my.id",
    accentColor: "from-cyan-400/25 via-sky-500/10 to-indigo-500/20",
    featured: true,
  },
  {
    title: "IoT Water Meter Monitoring & Tester",
    subtitle: "Alat Uji & Telemetri Meteran Air Pelanggan",
    category: "IoT & Robotics",
    desc: "Perangkat keras berbasis ESP dan sensor aliran YF-B1 untuk menguji akurasi meteran air pelanggan di PTAM Giri Menang, dilengkapi pengiriman telemetri real-time melalui protokol MQTT ke dasbor pemantauan Laravel.",
    tags: ["ESP", "Sensor YF-B1", "MQTT", "Python", "Laravel", "Kalibrasi"],
    badge: "Hardware + Web",
    accentColor: "from-teal-400/20 via-emerald-500/10 to-lime-500/15",
  },
  {
    title: "RoboKin DH Studio",
    subtitle: "Simulator Kinematika Manipulator Robot 3D di Browser",
    category: "IoT & Robotics",
    desc: "Platform web interaktif untuk menghitung Forward & Inverse Kinematics berbasis parameter Denavit-Hartenberg (DH), lengkap dengan visualisasi 3D, simulasi lintasan (trajectory), metrik akurasi, dan ekspor kode.",
    tags: ["Robotics", "3D Kinematics", "Denavit-Hartenberg", "TypeScript", "Python"],
    badge: "Robotics Studio",
    accentColor: "from-indigo-400/20 via-purple-500/10 to-cyan-500/15",
  },
  {
    title: "XAU/USD RL + Kalman Filter Trading Bot",
    subtitle: "Agen Reinforcement Learning Multi-Timeframe",
    category: "AI & Machine Learning",
    desc: "Sistem perdagangan algoritmik emas (XAU/USD) yang memadukan ekstraksi state Kalman Filter multi-timeframe dengan agen Reinforcement Learning serta modul backtesting mendalam.",
    tags: ["Python", "Reinforcement Learning", "Kalman Filter", "Time-Series", "SQLite"],
    repo: "https://github.com/Laluarkan/bot-trade",
    badge: "Quantitative AI",
    accentColor: "from-amber-400/20 via-lime-500/10 to-emerald-500/15",
  },
  {
    title: "Monev Logbook Bot",
    subtitle: "Asisten Telegram Berbasis Google Gemini",
    category: "AI & Machine Learning",
    desc: "Bot Telegram yang menjadwalkan pengingat harian dan menyusun draf logbook MagangHub (Rencana Capaian, Realisasi, dan Refleksi) secara otomatis dari catatan singkat menggunakan Google Gemini 2.5 Flash.",
    tags: ["Python", "Telegram Bot", "Gemini API", "Automation"],
    repo: "https://github.com/Laluarkan/Bot_Monev",
    badge: "AI Automation",
    accentColor: "from-lime-400/20 via-cyan-500/10 to-indigo-500/15",
  },
];

export const certificates = [
  {
    title: "Belajar Dasar Data Science",
    issuer: "Dicoding Indonesia · Program Teknologi Informasi dan Komunikasi",
    date: "Feb — Mar 2026",
    url: "",
  },
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia · Program Teknologi Informasi dan Komunikasi",
    date: "Jan — Feb 2026",
    url: "",
  },
];
