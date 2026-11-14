# Hosting handoff — Dina Cake

Tanggal inspeksi: 14 November 2026. Dokumen internal, tidak ikut document root.

## Batas dan sumber versi

Dina Cake adalah single-page static website HTML5, CSS3, dan Vanilla JavaScript sesuai [ADR 001](adr/001-static-site.md). Tidak ada backend, database, build command, dependency install, atau environment variable runtime. Nomor kontak dibaca dari konfigurasi JS yang dikirim ke browser, bukan secret server. Jangan ubah nomor saat menyiapkan hosting tanpa instruksi owner.

- Remote yang dikonfigurasi lokal: https://github.com/Yudi210398/dinacake-Project (akses/live sync belum terverifikasi).
- Branch inspeksi: `fix/pesanan-acara-desktop-typography`.
- Baseline HEAD: `e12cc99b94ea92d1af8ca1d6e8b07d6fd6afb7f3`.
- Baseline HEAD dua commit di atas ref lokal `origin/main` (619d71b); ref branch tracking lokal cocok dengan HEAD. Ini bukan bukti GitHub live.
- Branch belum memiliki upstream tracking yang dikonfigurasi. Owner perlu memeriksa target push secara eksplisit; keberadaan ref remote lokal tidak berarti upstream sudah diatur. Jika hosting mengambil main, owner perlu review dan integrasi lewat workflow PR/merge yang disepakati; jangan langsung mengasumsikan main siap.
- Cleanup dan dokumen ini belum di-commit saat ditulis. SHA di atas tidak mencakup dokumen handoff ini. Owner menetapkan SHA kandidat setelah review/commit/push sendiri; developer wajib mencocokkan branch dan SHA tersebut. Jangan menganggap default branch versi terbaru.
- Audit sebelumnya: LOCAL WORKSPACE VERIFIED; REMOTE SYNC NOT VERIFIED karena koneksi GitHub gagal. Kesimpulan technical handoff CONDITIONAL GO, public production NO-GO. Verifikasi ulang remote sebelum mengambil versi untuk hosting.

## Runtime allowlist

Salin hanya 35 file di bawah dengan struktur relatif yang sama. Daftar mencakup source responsive Hero dan mask logo dalam CSS, bukan hanya gambar yang terlihat pada satu viewport. SVG dekoratif inline/data URI tidak membutuhkan file tambahan; font memakai system-ui/Georgia, tanpa font lokal atau eksternal. `assets/css/styles.css` hanya peta modul dan tidak dimuat browser.

```text
assets/css/base.css
assets/css/components/buttons.css
assets/css/components/floating-whatsapp.css
assets/css/components/navbar.css
assets/css/motion.css
assets/css/sections/cara-pemesanan.css
assets/css/sections/footer.css
assets/css/sections/hero.css
assets/css/sections/kue-harian.css
assets/css/sections/pesanan-acara.css
assets/css/sections/tentang.css
assets/css/tokens.css
assets/images/cara-pemesanan/steps/01-whatsapp.webp
assets/images/cara-pemesanan/steps/02-pilihan-kue.webp
assets/images/cara-pemesanan/steps/03-penjadwalan.webp
assets/images/cara-pemesanan/steps/04-pesanan-siap.webp
assets/images/hero/picture/mobile-optimized.webp
assets/images/hero/picture/website-optimized.webp
assets/images/kue-harian/product/bakpao-optimized.webp
assets/images/kue-harian/product/dadar-gulung-optimized.webp
assets/images/kue-harian/product/kue-cucur-optimized.webp
assets/images/kue-harian/product/pastel-optimized.webp
assets/images/logo/favicon/favicon-64.png
assets/images/logo/favicon/favicon.ico
assets/images/logo/processed/logo-footer-light.png
assets/images/logo/processed/logo-horizontal-dark.png
assets/images/logo/processed/logo-horizontal-light.png
assets/images/logo/processed/logo-icon-only.png
assets/images/pemesanan-acara/produk/aneka-kue-optimized.webp
assets/images/pemesanan-acara/produk/dina-cake-nasi-kuning-acara-demo-1440x960.webp
assets/images/tentang-dina-cake/tentang-mama-dina-demo.webp
assets/js/contact-config.js
assets/js/floating-whatsapp.js
assets/js/main.js
index.html
```

Daftar ini menjelaskan kebutuhan teknis; bukan izin mempublikasikan konten pending. Jangan unggah seluruh folder assets secara membabi buta. Jangan membuat build/generator untuk mengikuti daftar ini.

Jangan sajikan `.git/`, `.agents/`, `.impeccable/`, `.codex/`, `docs/`, AGENTS.md, README.md, PRODUCT.md, screenshot/audit, mockup/final-design, backup, foto source PNG yang tidak direferensikan, dan file internal lain. Jangan hapus file internal dari repository. Jika repository public, file yang terlacak mungkin tetap terbaca melalui GitHub; mengecualikannya dari hosting tidak membuat repository private. Visibility live perlu diperiksa owner; tidak diubah oleh task ini.

## Kebutuhan hosting — konfigurasi masih PENDING

- Static HTTP server dengan `index.html` sebagai entry di document root dan MIME HTML/CSS/JS/gambar yang benar; tidak ada dev server atau URL localhost yang dibutuhkan aplikasi.
- HTTPS valid untuk domain yang disepakati; redirect HTTP ke HTTPS. Target dinacake.com belum merupakan bukti DNS/sertifikat siap.
- Sepakati canonical host www atau non-www dan redirect host alternatif. Setelah domain final, review canonical/og:url/og:image serta robots/sitemap yang diperlukan; jangan mengarang metadata bisnis.
- Path bersifat case-sensitive. Anchor adalah fragment native pada satu halaman, tidak membutuhkan SPA rewrite. Beri respons 404 yang benar untuk file/path yang tidak ada.
- Compression dan cache sesuai server; hindari cache HTML/config kontak terlalu lama. Nama aset belum memakai content hash: jangan mengasumsikan cache immutable aman tanpa strategi invalidasi.
- IP, provider, document root absolut server, DNS record, kredensial, konfigurasi server, dan pilihan cache belum ditetapkan. Tidak ada konfigurasi server fiktif dalam dokumen ini.

## Staging dan rilis

Staging harus terpisah dari production dan dibatasi aksesnya (autentikasi atau mekanisme akses yang disepakati). Jangan mengandalkan URL sulit ditebak, robots.txt, atau noindex sebagai pembatasan akses. Gunakan noindex pada staging sebagai tambahan; verifikasi akses dan indexing policy pada server sebelum membagikan konten pending. Jangan publikasi konten pending hanya karena runtime lengkap.

Prosedur yang harus disepakati sebelum deployment: owner menyetujui SHA dan izin staging/rilis; developer menyiapkan paket allowlist kandidat dan mencatat versinya; simpan paket serta konfigurasi versi sebelumnya; pasang hanya setelah izin; jalankan smoke; jika smoke gagal, pulihkan paket/config sebelumnya menggunakan mekanisme hosting yang disepakati dan uji lagi. Belum ada deployment atau rollback server yang dijalankan. Jangan memakai reset Git destruktif sebagai prosedur rollback hosting.

## Checklist verifikasi developer hosting

- [ ] Branch/SHA kandidat di GitHub sesuai persetujuan owner, termasuk cleanup dan dokumentasi.
- [ ] Root index 200, seluruh CSS/JS/gambar/favicon termasuk Hero mobile tersedia; tidak ada 404, MIME salah, atau error JavaScript.
- [ ] Direct root/hash, lima menu, logo/CTA anchor, Back/Forward, sticky offset, scrollspy, keyboard/Escape, no-JS, dan reduced motion bekerja.
- [ ] Smoke pada 320, 390, 768, dan 1440px; tidak ada overflow/clipping, foto dan konten lengkap. Retest HP fisik dan pembesaran teks bila kandidat berubah.
- [ ] CTA WhatsApp konsisten: desktop Web pada tab baru, Android/iOS menggunakan HTTPS wa.me sesuai perangkat; format valid. Jangan kirim pesan nyata atau menyimpulkan akun aktif dari URL valid.
- [ ] HTTPS, redirect domain/protokol, 404, cache/compression, staging access, dan indexing policy terverifikasi pada hosting aktual.
- [ ] Document root tidak mengekspos file internal, secret, backup, atau mockup.
- [ ] Konten/aset/nomor dan production release mendapat approval terpisah; final UAT dan smoke kandidat diselesaikan.

## Checklist konten dan kontak — keputusan owner bersama Mama Dina

Register persetujuan tetap [content inventory](content-inventory.md) dan [business rules](business-rules.md). Checklist berikut adalah selisih terhadap implementasi, bukan register approval baru.

| Materi | Kondisi source dan bukti | Keputusan yang masih diperlukan |
| --- | --- | --- |
| Struktur, stack, arah Modern Heritage | Disetujui owner dalam keputusan proyek; bukan izin materi bisnis | Pertahankan; tidak ada perubahan arah desain dalam cleanup |
| Kue Harian: Cucur, Bakpao, Pastel, Dadar Gulung dan deskripsi | IMPLEMENTED; copy DRAFT untuk review internal menurut inventaris D-007 | Konfirmasi produk aktif, pengelompokan dan copy; jangan menganggap daftar sebagai stok tersedia |
| Foto Kue Harian | File existing dari owner; source/izin foto asli belum dibuktikan per aset | Pilih aset, pastikan foto asli atau ilustrasi, representasi produk, hak dan izin publikasi |
| Hero, logo/nama dan klaim promosi | Arah visual/komposisi disetujui owner; file tersedia, izin final tidak dibuktikan | Konfirmasi identitas, klaim dan provenance aset; gambar AI/mockup tidak boleh diklaim foto produk asli |
| Pesanan Acara | IMPLEMENTED, bukan HOLD teknis. Alt kedua gambar menyebut ilustrasi bukan foto produk asli; satu filename bertanda demo | Konfirmasi menu, kategori acara, copy dan izin ilustrasi/provenance AI; hindari kesan foto produk asli |
| Cara Pemesanan | Empat langkah dan aset tersedia | Konfirmasi proses operasional, status foto/ilustrasi dan izin publikasi |
| Tentang Mama Dina | Narasi dan foto cake tersedia; filename foto bertanda demo | Narasi DRAFT/BLOCKED publikasi sampai diizinkan; verifikasi asal/izin foto. Filename saja bukan bukti pasti asal AI |
| Nomor WhatsApp | Config berisi nilai berformat valid; tiga CTA terintegrasi. Register lama masih menyebut nomor belum diberikan | Konfirmasi kepemilikan/izin final dan UAT perangkat fisik. Jangan menyalin nomor ke dokumen ini |
| Harga, jam, kapasitas, minimum order, area/antar | Masih PENDING menurut aturan bisnis | Jangan menambahkan klaim tanpa data/izin; tidak wajib dipublikasikan bila tidak diperlukan |

Belum ada bukti yang cukup untuk mengklasifikasikan semua foto sebagai asli atau AI secara pasti. Pisahkan izin penggunaan development dari izin public production. Approval baseline/milestone bukan persetujuan otomatis konten. Temuan foto mobile sempit, label pasif “Tanya via WhatsApp”, CTA wrapping, dan straggler tetap OPTIONAL/PENDING OWNER DECISION; tidak diperbaiki oleh cleanup ini.

## Pengujian dan tanggung jawab

Full Application Audit 14 November 2026 menguji delapan viewport 320–1440px, teks 200%, menu/keyboard/anchor, no-JS, reduced motion, reveal, dan aktivasi WhatsApp dengan request eksternal dicegat. Tidak ada error JS/404 atau overflow horizontal pada cakupan itu. LCP/CLS hanya lokal tanpa throttling; bukan bukti production. HP fisik, akun WhatsApp/aplikasi sungguhan, screen reader, HTTPS/DNS/redirect hosting, dan performance production belum diverifikasi. Lihat arti PASS/FAIL/NOT RUN/N/A di [test plan](test-plan.md). Typecheck/framework build N/A karena tidak ada TypeScript/framework.

Regresi cleanup 14 November 2026 dijalankan ulang melalui Playwright existing + Edge 157.0.4341.46 pada HTTP loopback: 320×568, 360×800, 390×844, 430×932, 768×1024, 1024×768, 1280×720, 1440×900. PASS untuk overflow/clipping teks kartu, gambar termuat, kelima anchor/scrollspy/offset, dan teks 200%. Keyboard/Escape/skip link dan Back/Forward diuji pada sampel 390/1440px; no-JS pada 320/768/1440px; reveal dan smooth scroll aktif pada 390/1440px; URL ketiga CTA WhatsApp diuji untuk desktop/Android UA tanpa membuka layanan eksternal. Tidak ada request gagal atau error JS pada suite. Ini regression proporsional atas perubahan dokumentasi dan satu spasi, bukan audit aksesibilitas/performa production baru.

Decision Owner melakukan review versi, seluruh Git write, serta memberi izin staging/production. Mama Dina dan owner menyetujui fakta/nomor/aset. Developer hosting menangani konfigurasi yang disepakati, pembatasan akses, deployment/rollback dan verifikasi server; technical handoff tidak memberi izin production otomatis. Penanggung jawab pemeliharaan konten perlu disepakati.
