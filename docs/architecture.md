# Arsitektur teknis dan adaptasi roadmap — D-002

**Status:** turunan dari [ADR Accepted](adr/001-static-site.md); dokumen ini menunggu review hasil D-002. Baseline bisnis dan acceptance tetap merujuk [requirements](requirements.md), [sitemap](sitemap.md), serta [Definition of Ready](definition-of-ready.md). Tidak ada source aplikasi yang dibuat dalam D-002.

## Struktur minimum yang direncanakan

```text
index.html                  sumber konten publik dan enam section
assets/
  css/styles.css            tokens dan styling responsif
  js/main.js                opsional, hanya jika ada kebutuhan interaksi
  images/                   aset yang telah diizinkan untuk paket publik
docs/                       konteks, register, keputusan, dan evidence internal
tests/e2e/                  saat D-017; fixture internal tidak dipublikasikan
AGENTS.md                   pedoman agen
README.md                   status dan pemulihan konteks
```

Pohon ini adalah rencana, bukan inventaris file yang sudah dibuat. Hindari file JS kosong dan folder abstraksi yang belum diperlukan. Konfigurasi Playwright/dependency pengujian hanya ditambahkan pada task yang mengizinkannya, setelah kebutuhan dan sumber tool ditinjau. Tidak ada dependency runtime aplikasi yang direncanakan.

## Alur data dan pembaruan

Dina memverifikasi informasi/aset dan izin → register mencatat item/atribut yang disetujui beserta bukti yang tersedia → maintainer menyalin hanya konten yang boleh terbit ke `index.html` → review diff dan test relevan → approval/gate → paket publik diperbarui.

Register dan HTML memiliki peran berbeda: register menyimpan provenance/status, HTML menyimpan konten tayang. Jangan membuat salinan katalog ketiga. Pada task pembaruan konten yang diizinkan, cocokkan keduanya; approval suatu nama produk tidak otomatis menyetujui harga, foto, stok, atau kelompoknya. Pemilik operasional dan proses persetujuan update masih PENDING owner bersama Dina.

Konten yang dicabut izinnya harus dikeluarkan dari HTML dan paket aset terkait. Jika dipakai ulang pada beberapa section, periksa semua kemunculan. Foto gagal harus menyisakan teks terbaca; tidak boleh diganti foto produk rekaan. Section inti tanpa konten mengikuti keputusan publikasi dalam Definition of Ready, bukan dihapus otomatis.

Browser menerima HTML/CSS/aset → pengguna menuju anchor/katalog → tautan WhatsApp membuka navigasi eksternal. Tidak ada API, database, token, penyimpanan data pelanggan, atau deteksi pesan/pesanan berhasil. Detail nomor, encoding opsional, dan keadaan nomor hilang mengikuti FR-05 serta test plan.

## Rekonsiliasi sumber

- Gunakan anchor D-001: `hero`, `kue-harian`, `pesanan-acara`, `cara-pemesanan`, `tentang`, `kontak`. Contoh `cara-pesan` pada PDF diselaraskan ke baseline ini.
- Pesan awal WhatsApp dan CTA tambahan tetap PENDING bila belum disetujui. Contoh PDF tidak membuatnya wajib; encoding diuji bila pesan dipakai.
- Approval D-001 terbaru menggantikan status review baseline historis, bukan status fakta usaha/aset. Catatan keputusan terbaru ada di README tanpa mengedit dokumen lama.
- Arahan desain tetap mengikuti keputusan owner di project brief dan referensi final. Detail tambahan dalam PDF yang belum disetujui tidak otomatis menjadi keputusan baru.

## Kontrak teknis D-003–D-019 yang diadaptasi

Sumber: roadmap halaman 13–30. Seluruh tujuan bisnis, dependency approval/konten yang relevan, dan acceptance perilaku dipertahankan. Detail alat/file Next.js diganti sesuai ADR; verifikasi rinci serta empat gates ada pada test plan. Tabel ini tidak memberi izin memulai task.

| Task | Kontrak dan target setelah adaptasi | Verifikasi/evidence utama |
| --- | --- | --- |
| D-003 Scaffold frontend statis | Sesudah ADR Accepted, review D-002, gate implementasi, dan instruksi task. Siapkan `index.html` dan CSS minimum; JS hanya bila perlu. Tidak ada instalasi framework, export `out/`, atau generator. | Struktur HTML/path valid, file dapat dilayani lewat HTTP lokal; catat server/versi dan daftar file publik. Compiler build/typecheck N/A. Browser acceptance lengkap tetap task berikutnya. |
| D-004 Setup Impeccable | Sesudah D-003 diterima dan sumber installer disetujui. Review setup project-scoped; target `.agents/skills/impeccable/`, `PRODUCT.md`, `.impeccable/` sesuai versi aktual. Hooks opsional dengan approval terpisah. | Skill discovery, review PRODUCT, status hooks/telemetry/config. Sintaks installer/init diperiksa saat eksekusi, bukan diasumsikan dari PDF. |
| D-005 Tokens/skeleton | CSS custom properties dalam `assets/css/styles.css`; shell HTML semantik enam section; spec visual saat diperlukan. Impeccable shape/document terarah. | ID unik, fokus, screenshot 360/768/1440 dan validasi HTML. |
| D-006 Navbar/Hero | Bagian navbar/Hero di HTML; CSS dan JS menu bila perlu; aset Hero berizin. Komposisi mengikuti referensi final. Impeccable critique. | Visual comparison, screenshot 360/768/1024/1440, klik/keyboard dan no overlap. |
| D-007 Kue Harian | Kartu HTML konsisten; field nama, deskripsi, foto, kategori, harga opsional diverifikasi lewat register, tanpa model runtime/tipe TS. Visibility melalui keputusan menyertakan markup. | Fixture 0/1/3+, atribut kosong, item pending tidak masuk output publik; review inventaris dan responsive. |
| D-008 Pesanan Acara | Section HTML terpisah; hanya menu dan aturan approved, tanpa janji pemenuhan. | Variasi jumlah item, review kategori/aturan Dina, screenshot mobile/desktop. |
| D-009 Cara Pemesanan | Daftar langkah semantik di HTML berdasarkan business rules approved. | Review alur/copy, responsive; klik WhatsApp tidak dianggap order diterima. |
| D-010 Tentang | Narasi HTML dan foto berizin bila tersedia. | Review fakta/privasi, keadaan tanpa foto, screenshot. |
| D-011 Kontak/Footer | Kontak approved dan anchor HTML yang valid. | Semua link/fokus, kontras dan viewport 320px. |
| D-012 WhatsApp/CTA | Anchor `wa.me` dengan nomor final; floating CSS kanan bawah; JS bukan syarat navigasi. CTA/pesan opsional sesuai keputusan. | Format/encoding, nomor hilang/tidak valid, keyboard, navigasi browser, overlap 320/360/768/1440. |
| D-013 Konten/aset final | Rekonsiliasi `index.html`, `assets/images/`, dan register. Tidak ada pipeline data. | Checklist Dina/owner, diff konten/aset, tidak ada placeholder atau materi tanpa izin dalam paket publik. |
| D-014 Responsive/a11y | Hardening HTML/CSS/JS terbatas pada temuan; Impeccable adapt. | Gabungan viewport roadmap/D-001, konten panjang, keyboard, heading/label/alt, kontras, reduced motion. |
| D-015 Impeccable QA | Critique → audit tanpa edit → review prioritas/approval daftar fix → polish terbatas → audit ulang. Evidence di `docs/qa-report.md` saat task diizinkan. | P0/P1, keputusan owner, screenshot before/after, re-test; tidak auto-redesign. |
| D-016 SEO/robustness/security | Metadata HTML, favicon/OG; `robots.txt`/`sitemap.xml` jika relevan dan URL approved. Hapus kontrak API metadata/optimasi Next. | Inspeksi HTML/file publik, links/assets/crawl, privasi/secrets; tanpa backend/analytics tambahan. |
| D-017 E2E/performance/regression | Playwright menguji server statis; `tests/e2e/`, konfigurasi dan dependency test hanya saat diizinkan. Impeccable detect opsional. | Critical journey, mobile menu bila ada, failure states, trace/screenshot, LCP/CLS dan ukuran aset aktual. |
| D-018 Preview/handover | Rencana hosting dan paket file, runbook update/rollback, release checklist. Deploy preview hanya dengan izin owner. | URL/versi preview jika diizinkan, smoke direct URL/aset/WA/mobile, runbook dan pemilik operasi. |
| D-019 UAT/rilis | Review owner+Dina, daftar blocker, approval dan instruksi produksi spesifik, rollback/handover. | UAT, izin konten, production smoke setelah deploy diizinkan; tanpa P0/P1 unresolved. |

Codex tetap pelaksana, Impeccable pendukung desain/QA: init D-004; shape/document D-005; critique selektif D-006–D-013; adapt D-014; critique/audit/polish D-015; detect opsional D-017. Approval penggunaan bukan approval installer/hooks dan bukan penyerahan keputusan desain.

## Paket publik dan operasi

Deploy kelak hanya memilih `index.html`, aset approved yang digunakan, dan file publik SEO yang relevan. Jangan mengunggah root repository secara keseluruhan: `docs/`, `.git/`, konfigurasi agen, fixture/tests, serta bukti izin bukan materi publik. Tidak ada folder `dist/` atau skrip packaging yang diwajibkan oleh keputusan ini.

Server development hanya lokal/loopback; jangan membagikan root repo melalui tunnel sebagai preview. Preview menggunakan paket publik yang telah diperiksa. Provider dan mekanisme allowlist/upload ditetapkan saat task hosting, sesuai budget dan kemampuan layanan; jangan mengklaim sudah dikonfigurasi.

Setiap update publik punya identitas versi dan file yang dapat dipulihkan. Runbook D-018 mendokumentasikan backup/rollback yang sesuai layanan serta pemiliknya. Git dan deployment tetap mengikuti izin dalam AGENTS.

## Risiko dan keputusan tersisa

Risiko manual content drift ditangani dengan review register-versus-HTML, diff, dan regression relevan. Tidak ada guard otomatis approval; kelulusan browser tidak membuktikan izin konten. Risiko foto besar ditangani audit aset/performance, bukan generator.

PENDING: konten/aset/nomor dan izin Dina; CTA/pesan tambahan; alat serta ambang performa; owner pemeliharaan; domain/hosting/budget/jadwal; setup installer/hooks; review dokumentasi dan izin task berikut. Tidak ada alasan membuka kembali stack tanpa requirement baru.
