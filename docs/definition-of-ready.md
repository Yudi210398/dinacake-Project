# Definition of Ready — Dina Cake (D-001)

**Status dokumen: DRAFT untuk review Decision Owner.** Ada dua gate berbeda: izin mulai coding dan izin menerbitkan website. Keputusan produk D-000 tetap **APPROVED**; fakta usaha/aset yang **PENDING/BLOCKED** tidak otomatis menjadi benar karena gate teknis terpenuhi. Sumber: [project-brief.md](project-brief.md), [content-inventory.md](content-inventory.md), [business-rules.md](business-rules.md), [requirements.md](requirements.md), dan [sitemap.md](sitemap.md).

## Gate 1 — Ready to Implement

Website boleh mulai diimplementasikan setelah semua butir berikut jelas dan disetujui oleh Decision Owner:

- [ ] **Requirements dan scope:** FR/NFR MUST, acceptance criteria, enam section, prioritas MUST/SHOULD/LATER/OUT OF SCOPE, dan batas katalog disetujui. Keputusan CTA tambahan dibuat atau tetap dinyatakan PENDING tanpa diam-diam dimasukkan ke MVP.
- [ ] **Interaction contract:** perilaku anchor, empty/failure states, floating WhatsApp kanan bawah, format tautan, perilaku saat nomor belum ada, dan batas uji navigasi browser disetujui. Tidak ada asumsi website dapat memastikan chat/pesanan berhasil.
- [ ] **Design reference:** arah warna, layout responsif, dan komposisi Hero yang sudah disetujui tersedia sebagai acuan kerja. Aset final boleh masih PENDING selama tidak dipakai sebagai materi publik.
- [ ] **Arsitektur:** pendekatan teknis untuk satu halaman, penyimpanan konten/aset, serta cara build/hosting diputuskan owner secukupnya untuk coding. Next.js, TypeScript, Tailwind CSS, dan static export masih rekomendasi, bukan keputusan otomatis.
- [ ] **Rencana verifikasi:** pemilik implementasi mempunyai skenario T-01 sampai T-08 dan pemeriksaan NFR-01 sampai NFR-05, termasuk viewport batas, keyboard/reduced motion, tautan, ukuran gambar, LCP/CLS, dan review konten.

Data operasional Dina yang belum selesai tidak memblokir seluruh coding. Implementasi boleh memakai fixture internal yang jelas bukan fakta publik untuk menguji struktur dan states. Acceptance yang memerlukan nomor, foto, atau konten final tetap belum lulus sampai materi disetujui. **Status saat D-001 ditulis: PENDING** persetujuan requirement turunan, interaction contract, arsitektur, dan rencana verifikasi oleh Decision Owner.

## Gate 2 — Ready to Publish

Website hanya boleh dipublikasikan setelah semua butir berikut terpenuhi:

- [ ] **Konten:** Dina mengonfirmasi produk aktif, kelompok Kue Harian/Pesanan Acara, nama/cerita usaha, dan setiap klaim operasional yang benar-benar ditampilkan. Section dengan konten inti kosong harus punya keputusan eksplisit owner dan Dina; tidak boleh diisi data fiktif.
- [ ] **Aset:** foto/ilustrasi dan logo yang digunakan telah tersedia, cocok dengan produk, serta mendapat izin publikasi final dari Dina. Foto referensi asli yang dilaporkan owner belum memenuhi syarat ini dengan sendirinya.
- [ ] **WhatsApp:** Dina memberikan dan mengizinkan nomor final; format nomor/URL valid; critical journey dari halaman ke navigasi browser diuji pada perangkat yang relevan. Tidak perlu dan tidak boleh mengklaim verifikasi bahwa pesan terkirim atau pesanan diterima oleh Dina.
- [ ] **QA:** semua acceptance criteria MUST dan pemeriksaan NFR yang relevan lulus pada konten serta aset final; tidak ada broken links, horizontal overflow, atau blocker aksesibilitas. LCP/CLS dan ukuran gambar sudah diukur dan ditinjau; ambang numerik masih **PENDING** keputusan owner jika akan dijadikan gate kuantitatif.
- [ ] **SEO dan operasi:** judul/deskripsi serta konten final disetujui, halaman publik tidak sengaja diblokir dari crawler, domain/hosting dan penanggung jawab pemeliharaan konten ditetapkan. Budget dan target rilis tetap **PENDING** keputusan owner hingga diputuskan.
- [ ] **Approval rilis:** Decision Owner memberi persetujuan publikasi setelah melihat hasil QA dan status konten/izin Dina.

**Status saat D-001 ditulis: BLOCKED untuk publikasi** oleh konten/aset dan nomor WhatsApp yang belum disetujui Dina, QA yang belum berjalan, serta approval rilis yang belum diberikan. Ini tidak menyatakan semua detail operasional harus dipublikasikan: harga, minimum order, kapasitas, jam, atau area yang tetap PENDING boleh tidak ditampilkan, asalkan tidak ada klaim tersirat yang menyesatkan dan keputusan kontennya disetujui.

## Pemilik keputusan yang masih terbuka

| Keputusan/data | Pemilik | Status |
| --- | --- | --- |
| CTA WhatsApp tambahan, arsitektur, ambang/alat pengukuran performa | Decision Owner | **PENDING** |
| Produk aktif, atribut yang akan terbit, nomor, cerita, serta izin foto/aset | Dina; owner menyediakan file foto yang ia miliki | **PENDING/BLOCKED** untuk publikasi |
| Pemeliharaan konten dan alur persetujuan perubahan | Decision Owner bersama Dina | **PENDING** |
| Budget domain/hosting, target rilis, dan approval rilis | Decision Owner | **PENDING** |
