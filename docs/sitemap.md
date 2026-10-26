# Sitemap & User Journey — Dina Cake (D-001)

**Status dokumen: DRAFT untuk review Decision Owner.** Ini peta informasi website satu halaman, bukan keputusan membuat XML sitemap. Struktur enam section dan floating WhatsApp kanan bawah sudah **APPROVED**; anchor ID, isi detail, dan aset final adalah rancangan/masih perlu konfirmasi. Rujukan: [requirements.md](requirements.md) dan tiga dokumen D-000.

## Struktur satu halaman

| Urutan | Section / anchor usulan | Tugas bagi pengunjung | Requirement terkait |
| --- | --- | --- | --- |
| 1 | Hero / `#hero` | Memahami Dina Cake dan pilihan jalur melihat produk; arah visual dua cucur, dua bakpao, satu pastel. | FR-01, FR-02, FR-08 |
| 2 | Kue Harian / `#kue-harian` | Melihat item harian yang sudah diverifikasi Dina. Muffin tetap kandidat katalog, bukan bagian komposisi Hero. | FR-01, FR-03, FR-07, FR-08 |
| 3 | Pesanan Acara / `#pesanan-acara` | Melihat item berdasarkan pesanan yang sudah diverifikasi Dina. | FR-01, FR-03, FR-07, FR-08 |
| 4 | Cara Pemesanan / `#cara-pemesanan` | Memahami bahwa permintaan dan konfirmasi dilakukan manual lewat WhatsApp. | FR-01, FR-04, FR-08 |
| 5 | Tentang Dina Cake / `#tentang` | Membaca narasi usaha yang disetujui Dina. | FR-01, FR-06, FR-08 |
| 6 | Kontak & Footer / `#kontak` | Menemukan kontak yang diizinkan dan informasi penutup. | FR-01, FR-05, FR-06, FR-08 |

Hanya ada satu URL halaman (`/`) dengan anchor untuk navigasi. Anchor adalah usulan implementasi yang perlu disetujui owner; setiap target harus ada dan tidak tertutup header saat dituju. Floating WhatsApp adalah kontrol global di kanan bawah, bukan section ketujuh. CTA WhatsApp tambahan di Hero/kartu produk **PENDING** keputusan owner; sitemap tidak menganggapnya sudah disetujui.

## User journey dan keadaan penting

1. Pengunjung membuka `/`, memahami penawaran di Hero, lalu menuju Kue Harian atau Pesanan Acara.
2. Pengunjung membaca item yang telah diverifikasi, lalu memahami proses manual di Cara Pemesanan.
3. Pengunjung mengaktifkan floating WhatsApp dengan nomor yang telah disetujui Dina. Browser menavigasi ke URL WhatsApp yang valid; pengunjung melanjutkan percakapan di luar website. Website tidak dapat memastikan aplikasi berhasil terbuka, pesan terkirim, atau pesanan diterima.

| Keadaan | Perilaku yang direncanakan |
| --- | --- |
| Fokus/aktivasi keyboard | Anchor dan floating WhatsApp punya nama aksesibel, fokus terlihat, dan urutan fokus logis. |
| Produk atau teks belum disetujui | Jangan tampilkan informasi seolah sudah pasti. Section tetap dapat diuji dengan empty state internal; keputusan publikasi mengikuti gate Ready to Publish. |
| Gambar belum ada/gagal dimuat | Konten tekstual tetap terbaca; jangan menampilkan gambar rusak sebagai informasi produk. Aset final dan izin tetap syarat publikasi. |
| Nomor WhatsApp hilang/tidak valid | Jangan terbitkan tautan aktif atau nomor pengganti. Kondisi ini memblokir Ready to Publish, bukan semua pekerjaan teknis. |
| WhatsApp di luar browser | Uji hanya URL, format nomor, encoding pesan bila dipakai, aksesibilitas, dan navigasi browser. Jangan buat deteksi status aplikasi/pesan. |
| Anchor/tautan gagal | Pemeriksaan sebelum rilis harus menemukan target hilang dan broken links; heading anchor tidak boleh tertutup header. |

Rincian produk, harga, jam, area layanan, serta cerita usaha tetap mengikuti status di [content-inventory.md](content-inventory.md) dan [business-rules.md](business-rules.md). XML sitemap untuk satu URL bukan bagian dari struktur halaman ini dan dapat diputuskan saat persiapan publikasi; keberadaannya tidak menjamin indexing. [Google Search Central](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview).
