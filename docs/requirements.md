# Requirements — Dina Cake (D-001)

**Status dokumen: DRAFT untuk review Decision Owner.** Sumber keputusan: [project-brief.md](project-brief.md), [content-inventory.md](content-inventory.md), dan [business-rules.md](business-rules.md). **APPROVED** di sini hanya menandai keputusan produk yang sudah diberikan owner; requirement turunan dan prioritas di bawah adalah rancangan D-001 sampai disetujui. **PENDING** menunggu keputusan/data dari pihak yang disebut; **BLOCKED** berarti belum boleh dipakai untuk publikasi.

## Tujuan dan prioritas

MVP adalah katalog satu halaman yang membantu pengunjung melihat kelompok produk dan memulai percakapan WhatsApp. Klik tautan tidak sama dengan pesan terkirim atau pesanan diterima.

| Prioritas | Cakupan |
| --- | --- |
| **MUST — rancangan D-001** | FR-01 sampai FR-08 serta NFR-01 sampai NFR-05 di bawah. Keputusan dasar katalog, enam section, floating WhatsApp kanan bawah, dan arah Hero sudah **APPROVED** owner. |
| **SHOULD — usulan, PENDING keputusan owner** | CTA WhatsApp tambahan pada Hero atau kartu produk. Alternatifnya hanya memakai floating WhatsApp dan informasi Kontak; ini lebih sederhana dan menghindari CTA berulang, tetapi jalur kontak dari kartu produk kurang langsung. CTA tambahan mempersingkat langkah, tetapi perlu aturan penempatan, label, dan pesan yang konsisten. |
| **LATER — usulan** | Metode pengukuran kunjungan, klik, chat, dan pesanan setelah kebutuhan pengukuran diputuskan. Analytics bukan syarat wajib MVP. |
| **OUT OF SCOPE — APPROVED owner** | Checkout, payment gateway, database pesanan, dashboard admin, dan konfirmasi pesanan otomatis. |

## Functional requirements dan acceptance criteria

Setiap kriteria di bawah adalah perilaku yang diuji setelah implementasi, bukan klaim bahwa website sudah ada. Data untuk skenario uji boleh berupa fixture internal yang jelas bukan konten publik; konten production tetap mengikuti persetujuan Dina. Pemetaan section mengikuti [sitemap.md](sitemap.md).

| ID | Requirement MUST dan status sumber | Section | Acceptance criteria berbasis perilaku | Verifikasi yang direncanakan |
| --- | --- | --- | --- | --- |
| **FR-01** | Satu halaman berisi enam section sesuai urutan **APPROVED** owner. | Semua | Saat halaman dibuka, Hero, Kue Harian, Pesanan Acara, Cara Pemesanan, Tentang Dina Cake, lalu Kontak & Footer muncul dalam urutan itu; tidak ada alur checkout. | **T-01:** periksa struktur, urutan, dan konten section pada tiga kelompok viewport. |
| **FR-02** | Hero mengikuti arah visual **APPROVED**: cream, peach, sage green; referensi dua cucur, dua bakpao, satu pastel. Aset final **PENDING** persetujuan Dina. | Hero | Saat aset final disetujui dan tersedia, Hero menampilkan komposisi yang disepakati; muffin tidak menjadi bagian komposisi Hero. Jika aset belum siap, tidak ada foto atau klaim produk rekaan yang dipublikasikan. | **T-02:** cocokkan referensi dan aset final yang disetujui; uji kondisi aset belum tersedia. |
| **FR-03** | Katalog memisahkan produk harian dan pesanan acara sesuai keputusan owner; daftar item/atribut masih **PENDING** Dina. | Kue Harian; Pesanan Acara | Item yang telah disetujui muncul hanya pada kelompok yang dikonfirmasi Dina; item yang belum diverifikasi tidak ditampilkan sebagai produk aktif. Harga, stok, varian, dan aturan pesan hanya tampil bila nilainya disetujui. Muffin tetap kandidat katalog. | **T-03:** uji item terverifikasi, item pending, dan atribut kosong untuk tiap kelompok. |
| **FR-04** | Alur pesan lewat WhatsApp **APPROVED**; aturan operasional final **PENDING** Dina. | Cara Pemesanan | Teks menjelaskan bahwa pengunjung menghubungi Dina dan pesanan dikonfirmasi manual; tidak menyatakan klik sebagai pesanan berhasil, tidak menjanjikan harga, stok, waktu respons, atau pengantaran yang belum disetujui. | **T-04:** review teks terhadap aturan dan izin Dina; uji tidak ada klaim otomatis. |
| **FR-05** | Floating WhatsApp kanan bawah **APPROVED**. Nomor dan izin publikasi **BLOCKED** sampai Dina mengonfirmasi. | Global; Kontak & Footer | Dengan nomor final yang valid, kontrol berlabel jelas membuka URL `https://wa.me/<nomor>`; nomor memakai format internasional berupa digit tanpa `+`, nol awalan nasional, spasi, atau tanda baca. Jika pesan awal diputuskan dipakai, teksnya di-URL-encode. URL, label, dan navigasi browser dapat diuji; website tidak mengklaim mendeteksi aplikasi terbuka atau pesan terkirim. Tanpa nomor valid, tautan aktif tidak dipublikasikan. | **T-05:** periksa format nomor/URL, encoding bila ada pesan, fokus keyboard, label, dan aktivasi tautan di browser; uji kondisi nomor hilang/tidak valid. |
| **FR-06** | Tentang dan Kontak hanya memuat fakta serta aset yang berizin; fakta/izin **PENDING** Dina. | Tentang Dina Cake; Kontak & Footer | Nama, narasi, foto, dan kontak yang tampil cocok dengan daftar konten yang disetujui Dina; materi pending tidak tampil sebagai fakta publik. | **T-06:** cocokkan tiap elemen yang tampil dengan status di inventaris dan bukti persetujuan. |
| **FR-07** | Empty/failure state tidak mengarang konten; rancangan perilaku **DRAFT**. | Hero; Kue Harian; Pesanan Acara; Kontak & Footer | Jika item belum terverifikasi, section tidak menampilkan kartu fiktif; jika gambar gagal, teks tetap terbaca dan tidak ada gambar rusak yang menutupi informasi; jika nomor tidak tersedia, tidak ada tautan WhatsApp aktif. Keadaan ini boleh untuk pengembangan, sedangkan kelayakan publikasi mengikuti [definition-of-ready.md](definition-of-ready.md). | **T-07:** simulasi data kosong, gambar gagal, dan nomor hilang; cek isi yang terlihat serta tidak ada tautan palsu. |
| **FR-08** | Navigasi anchor satu halaman adalah rancangan D-001. | Semua | Saat pengunjung mengaktifkan tautan section, browser menuju section yang dituju, fokus dan posisi konten tetap dapat dipahami, serta heading tujuan tidak tertutup header. Setiap target anchor ada dan tidak menghasilkan tautan rusak. | **T-08:** aktifkan semua anchor dengan pointer dan keyboard pada mobile/tablet/desktop; periksa target dan posisi heading. |

## Non-functional requirements

| ID | Requirement MUST (rancangan D-001) | Verifikasi yang direncanakan |
| --- | --- | --- |
| **NFR-01 — responsive** | Mobile `<768px`, tablet `768–1024px`, desktop `>1024px`. Isi dan kontrol tetap terbaca/dapat dipakai; tidak ada horizontal overflow; floating WhatsApp tidak menutup konten atau kontrol penting. | Uji setidaknya pada lebar 767, 768, 1024, 1025px dan satu layar sempit; periksa scroll horizontal serta tumpang tindih. |
| **NFR-02 — accessibility** | Semua kontrol bisa dicapai dan diaktifkan lewat keyboard, urutan fokus logis, fokus terlihat, nama tautan jelas, gambar informatif punya alt yang bermakna, dan `prefers-reduced-motion` mengurangi/meniadakan animasi non-esensial. Anchor tidak tertutup header. | Uji keyboard-only, indikator fokus, pembaca layar atau pemeriksaan nama aksesibel, reduced motion, dan perpindahan anchor. |
| **NFR-03 — performance & aset** | Ukur LCP dan CLS pada build yang kelak berjalan; catat perangkat, viewport, jaringan, dan hasil. Periksa ukuran file serta dimensi gambar, gunakan aset berukuran sesuai tampilan, kompres tanpa merusak keterbacaan, dan sediakan ruang gambar agar layout tidak bergeser. **DRAFT/PENDING owner:** ambang lulus numerik dan alat pengukuran belum diputuskan; tidak ada angka target buatan dalam D-001. | Audit ukuran/dimensi semua gambar final; ukur LCP/CLS pada mobile dan desktop; dokumentasikan temuan dan perbaikan sebelum rilis. |
| **NFR-04 — SEO dasar** | Konten publik yang telah disetujui tersedia sebagai teks HTML yang dapat dibaca, judul halaman dan meta description menggambarkan konten final, heading terstruktur, tautan memakai URL valid, dan konfigurasi publik tidak sengaja memblokir perayapan/pengindeksan. Tidak menjanjikan ranking atau indexing. | Inspeksi HTML/metadata, semua tautan internal/eksternal, dan pengaturan crawl pada build publik. |
| **NFR-05 — reliability** | Tidak ada broken link, gambar penting yang rusak tanpa penanganan, atau teks bisnis pending yang tampil sebagai fakta. Kegagalan layanan eksternal WhatsApp tidak diartikan sebagai status pesanan oleh website. | Pemeriksaan tautan dan aset; uji keadaan kosong/gagal; review konten terhadap inventaris. |

Panduan teknis yang menjadi dasar rancangan: [WhatsApp Click to Chat](https://faq.whatsapp.com/5913398998672934/), [Google Search SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), dan [web.dev Web Vitals](https://web.dev/articles/vitals). Rujukan ini tidak mengubah status keputusan bisnis.

## Keputusan dan data terbuka

- **PENDING — Decision Owner:** setujui requirement turunan, prioritas SHOULD, CTA tambahan atau floating-only, arsitektur/teknologi, metode dan ambang pengukuran performa bila diperlukan.
- **PENDING — Dina:** produk aktif dan pengelompokannya, teks operasional, nomor WhatsApp yang boleh terbit, nama/cerita/aset final serta izin publikasi. Detail harga, stok, minimum order, dan jam layanan hanya menjadi requirement konten jika Dina memilih untuk menampilkannya.
- **PENDING — Decision Owner bersama Dina:** pemelihara konten dan proses persetujuan pembaruan; budget domain/hosting serta target rilis tetap keputusan owner.
