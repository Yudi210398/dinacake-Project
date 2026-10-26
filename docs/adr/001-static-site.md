# ADR 001 — HTML statis langsung untuk MVP

**Status: Accepted.** Keputusan arsitektur disetujui Decision Owner pada 26 Oktober 2026 melalui instruksi “D-001 Final Decision & D-002 Documentation Approval”. Penerimaan keputusan ini berbeda dari review hasil dokumentasi D-002 dan izin menjalankan D-003.

## Konteks

Baseline [requirements D-001](../requirements.md) telah disetujui owner dengan pengecualian item yang tetap PENDING/BLOCKED. Kebutuhan saat ini adalah katalog satu halaman, enam section, serta tautan WhatsApp; bukan checkout, sistem stok, atau pengelolaan pesanan otomatis. Tim perlu biaya pemeliharaan rendah dan hasil yang mudah ditinjau.

## Keputusan

Gunakan HTML5 semantik, CSS3, dan Vanilla JavaScript minimal. Tidak menggunakan Next.js, React, TypeScript, Tailwind, atau backend.

`index.html` adalah sumber konten publik. [Content inventory](../content-inventory.md) adalah register verifikasi dan approval, bukan input rendering. Tidak ada custom build generator, `build.mjs`, `products.json`, atau framework rendering pada MVP awal. Konten inti dan navigasi memakai HTML; JavaScript hanya untuk interaksi tambahan yang diperlukan dan disetujui.

Hosting menyajikan file statis langsung. Tidak ada kompilasi atau static export framework; penyiapan paket publik berarti memilih file yang diizinkan, bukan menghasilkan konten melalui generator. Provider, domain, dan budget belum dipilih.

## Alternatif dan alasan

| Opsi | Penilaian |
| --- | --- |
| HTML langsung — dipilih | Sesuai scope sekarang, tanpa dependency runtime aplikasi dan tanpa proses generator. Konten serta hasil publik mudah diperiksa. |
| Next.js App Router + TypeScript + Tailwind + static export | Bisa menghasilkan website statis dan memberi struktur komponen/tipe, tetapi menambah dependency serta build untuk kebutuhan yang belum memerlukannya. Tidak dipakai pada MVP yang disetujui. |
| HTML dengan generator ringan dan JSON produk | Memusatkan data dan dapat memfilter visibility otomatis, tetapi menambah pipeline serta sumber pemeliharaan. Owner menolak penggunaannya untuk MVP awal tanpa requirement baru yang membuktikan kebutuhan. |

## Konsekuensi dan trade-off

- Pembaruan produk manual melalui perubahan HTML dan review register. Tidak ada editor mandiri bagi Dina atau penyaringan approval otomatis.
- Markup berulang dapat menjadi tidak konsisten. Kendalikan melalui pola kartu yang konsisten, review diff, dan pengujian skenario; jangan membuat abstraksi prematur.
- Status produk pending dipertahankan dalam register internal; item/atribut tersebut tidak dimasukkan ke HTML publik. Menyembunyikannya dengan CSS bukan perlindungan publikasi.
- Penanggung jawab pembaruan, persetujuan perubahan konten, dan frekuensi update perlu ditetapkan sebelum rilis.
- SEO, responsive, aksesibilitas, dan performa tetap harus dibuktikan; ketiadaan framework tidak menjamin kelulusan.

## Kesesuaian dan pemicu evaluasi ulang

FR-03/FR-07 menetapkan perilaku publik dan failure states, bukan kewajiban JSON, TypeScript, atau generator. Uji internal dapat memvariasikan kartu/atribut pada fixture terisolasi. Tidak ditemukan konflik material dengan acceptance criteria D-001.

Model data dan tipe pada roadmap D-007 merupakan detail teknis yang diadaptasi dengan persetujuan owner; tujuan visibility dan uji 0/1/3+ tetap berlaku. Jika muncul konflik acceptance yang nyata, STOP dan minta keputusan sebelum mengubah pendekatan.

Evaluasi ulang hanya berdasarkan kebutuhan terukur, misalnya banyak halaman/produk menyebabkan kesalahan pembaruan berulang, pembaruan oleh non-developer menjadi requirement, atau perlu integrasi baru. Usulkan ADR lanjutan untuk approval; jangan menambahkan generator/framework diam-diam.

Rincian operasional: [architecture](../architecture.md). Bukti penerimaan: [test plan](../test-plan.md). Izin kerja: [AGENTS](../../AGENTS.md).
