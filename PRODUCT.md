# Product

<!-- impeccable:product-schema 1 -->

Konteks internal Dina Cake, dicatat melalui alur `$impeccable init` pada D-004 menggunakan skill 4.7.0. Dokumen ini menunggu review Decision Owner dan bukan materi website atau izin publikasi.

## Platform

web

## Users

Menurut [project brief](docs/project-brief.md), segmentasi berikut masih **DRAFT / PENDING konfirmasi Dina**, bukan hasil riset atau fakta pelanggan yang sudah terverifikasi:

- Pengguna utama yang dihipotesiskan: pembeli kue atau camilan harian yang ingin melihat pilihan sebelum menghubungi Dina.
- Pengguna sekunder yang dihipotesiskan: pemesan makanan untuk acara, dengan arisan dan kegiatan gereja sebagai contoh yang dilaporkan owner.
- Pelanggan lama diperkirakan dapat membagikan katalog; peran ini juga belum diverifikasi Dina.

## Product Purpose

**APPROVED — keputusan produk owner:** menyediakan katalog satu halaman untuk mengenalkan usaha, memperlihatkan informasi dan foto produk yang diizinkan, membedakan kue harian dari pesanan acara, dan memudahkan calon pelanggan memulai percakapan melalui WhatsApp. Katalog menjadi media promosi yang dapat dibagikan dan diharapkan berpeluang ditemukan melalui Google Search; indexing atau ranking tidak dijanjikan.

**DRAFT — masalah bisnis yang dilaporkan:** informasi pilihan produk belum terkumpul dalam satu katalog digital yang mudah dibagikan; promosi dan komunikasi saat ini dilaporkan berlangsung melalui mulut ke mulut dan WhatsApp. Laporan bahwa Dina Cake adalah usaha kue rumahan milik Dina yang sudah berjalan, beserta pola operasionalnya, tetap menunggu konfirmasi Dina sesuai project brief.

Keberhasilan utama yang disepakati adalah membantu pengunjung menuju percakapan WhatsApp. Klik belum berarti pesan terkirim, pesanan diterima, atau penjualan terjadi. Belum ada target angka; analytics bukan kewajiban MVP dan hasil penjualan tidak boleh diklaim telah meningkat.

## Operating Context

Customer journey yang disepakati:

1. Pengunjung membuka halaman dan memahami pengenalan usaha.
2. Pengunjung melihat kelompok Kue Harian atau Pesanan Acara yang telah diverifikasi.
3. Pengunjung membaca Cara Pemesanan untuk memahami proses komunikasi dan konfirmasi manual yang direncanakan.
4. Setelah nomor dan izin publikasinya tersedia, pengunjung mengaktifkan tautan WhatsApp dan melanjutkan percakapan di luar website. Website tidak memantau keberhasilan aplikasi terbuka, pengiriman pesan, atau penerimaan pesanan.

Detail proses operasional aktual dan teks publiknya tetap **PENDING** konfirmasi Dina dalam [business rules](docs/business-rules.md). Jangan mengubah alur produk yang disetujui menjadi klaim bahwa seluruh aturan usaha telah diverifikasi.

Decision Owner memutuskan requirement, arsitektur, dan acceptance milestone. Dina mengonfirmasi fakta operasional dan izin publikasi. Pemelihara konten serta alur persetujuan pembaruan masih **PENDING** owner bersama Dina. Penyimpanan konten mengikuti [ADR 001](docs/adr/001-static-site.md): HTML publik diedit langsung dan register approval tetap pada inventaris; PRODUCT.md tidak menggantikannya.

## Capabilities and Constraints

**APPROVED — baseline produk:** satu URL halaman dengan enam section berurutan berikut, merujuk [sitemap](docs/sitemap.md):

1. Hero — `#hero`.
2. Kue Harian — `#kue-harian`.
3. Pesanan Acara — `#pesanan-acara`.
4. Cara Pemesanan — `#cara-pemesanan`.
5. Tentang Dina Cake — `#tentang`.
6. Kontak & Footer — `#kontak`.

Floating WhatsApp berada di kanan bawah sebagai kontrol global. CTA tambahan pada Hero/kartu dan pesan awal WhatsApp tetap **PENDING**; jangan menambahkannya sebagai requirement yang sudah disetujui.

**APPROVED — batas MVP:** katalog dengan HTML5 semantik, CSS3, dan Vanilla JavaScript minimal sesuai ADR. Tidak ada Next.js, React, TypeScript, Tailwind, backend, database pesanan, checkout, pembayaran, dashboard admin, stok otomatis, atau konfirmasi pesanan otomatis. Tidak ada custom generator atau sumber produk JSON untuk rendering.

**PENDING/BLOCKED — konten dan publikasi:**

- Dina belum mengonfirmasi daftar produk aktif, pengelompokan, varian, harga/satuan, dan ketersediaan. Kandidat di inventaris bukan katalog siap jual.
- Nomor WhatsApp belum diberikan/diizinkan; tautan aktif dengan nomor nyata **BLOCKED** sampai persetujuan tersedia.
- Nama publik, headline/logo, cerita usaha, foto produk, dan aset final mengikuti status serta izin per item dalam inventaris. Materi yang belum diizinkan tidak boleh diterbitkan.
- Preorder, minimum order, kapasitas, area, penyerahan, dan jam layanan masih **PENDING**. Hanya informasi yang dipilih untuk ditampilkan dan telah diverifikasi yang boleh menjadi klaim publik.
- Budget/domain/hosting, jadwal rilis, penanggung jawab operasi, serta alat/ambang performa masih memerlukan keputusan terkait.

Publikasi mengikuti Definition of Ready dan empat release gates dalam [test plan](docs/test-plan.md). Approval baseline D-001 dan acceptance D-002/D-003 tidak menggantikan izin Dina atau approval rilis. Dokumen lama memuat status historis; keputusan terbaru owner memperbarui status milestone saja, bukan persetujuan otomatis atas item bisnis yang terbuka.

## Brand Commitments

Nama kerja proyek adalah Dina Cake; penggunaan nama untuk publik tetap mengikuti izin dalam inventaris. Komitmen visual dan referensi Hero yang sudah disetujui owner dalam project brief tetap mengikat. Init merujuk komitmen tersebut tanpa memilih arah baru, memperluas desain, atau menjadikan mockup sebagai bukti foto produk nyata yang berizin.

## Evidence on Hand

- Sumber tujuan dan status fakta: [project brief](docs/project-brief.md) serta [business rules](docs/business-rules.md).
- Sumber verifikasi produk/aset dan izin: [content inventory](docs/content-inventory.md). Daftar di sana adalah register internal; jangan menganggap seluruh item APPROVED.
- Baseline perilaku: [requirements](docs/requirements.md), sitemap, dan [Definition of Ready](docs/definition-of-ready.md). Keputusan owner telah menyetujui baseline D-001 dengan pengecualian PENDING/BLOCKED tetap berlaku.
- Batas implementasi dan QA: ADR 001, [architecture](docs/architecture.md), dan test plan. D-002 telah diterima owner; D-003 menyediakan scaffold development yang belum siap publikasi.
- File aplikasi yang tersedia baru `index.html` dan `assets/css/styles.css`. Belum ada foto produk atau aset final pada direktori aplikasi yang diperiksa. Foto referensi asli dilaporkan dimiliki owner, tetapi penerimaan file dan izin per aset belum diverifikasi.
- Bukti testimoni, penghargaan, sertifikasi, keunggulan bahan, dan hasil promosi tidak disediakan. Jangan mengarang atau menyatakan klaim tersebut sebagai fakta.

## Product Principles

1. Tampilkan hanya fakta dan aset yang memiliki persetujuan untuk publikasi; keterbukaan keputusan lebih baik daripada klaim rekaan.
2. Bantu pengunjung memahami pilihan dan menuju komunikasi WhatsApp tanpa menciptakan ekspektasi transaksi otomatis.
3. Pertahankan solusi katalog yang sederhana dan mudah diperbarui sesuai arsitektur yang diterima.
4. Buktikan kualitas melalui pemeriksaan aktual; status NOT RUN bukan PASS dan keluaran tool bukan izin rilis.

## Accessibility & Inclusion

Website harus tetap terbaca dan dapat digunakan pada mobile, tablet, dan desktop. Baseline NFR mengharuskan navigasi keyboard, fokus terlihat dan logis, nama kontrol jelas, heading semantik, alt bermakna untuk gambar informatif, reduced motion, anchor yang tidak tertutup header, serta floating WhatsApp yang tidak menutup konten penting. Rincian dan verifikasinya mengikuti requirements/test plan; kebutuhan pengguna khusus lain belum diverifikasi dan tidak boleh diasumsikan.
