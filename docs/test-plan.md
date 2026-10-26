# Rencana verifikasi HTML statis — D-002

**Status:** rencana untuk review owner; bukan laporan tes aplikasi. Referensi acceptance adalah [requirements D-001](requirements.md), bukan daftar ini sebagai pengganti. [Architecture](architecture.md) menetapkan implementasi dan adaptasi task; [AGENTS](../AGENTS.md) menetapkan izin.

## Status dan evidence

| Label | Arti |
| --- | --- |
| PASS | Pemeriksaan relevan benar-benar dijalankan dan hasilnya memenuhi kriteria. |
| FAIL | Pemeriksaan dijalankan dan ada kriteria yang tidak terpenuhi. |
| NOT RUN | Relevan tetapi belum dijalankan; catat penyebab/input/tool yang kurang. Tidak sama dengan PASS. |
| N/A | Tidak berlaku untuk objek/stack ini; selalu sertakan alasan. |

Catat task, versi/file yang diperiksa, tanggal, alat/versi, command atau langkah manual, expected/actual, viewport/browser/perangkat, hasil, dan lokasi evidence. Untuk masalah catat severity, tindakan fixed/deferred, alasan/mitigasi yang disetujui, serta hasil re-test. Temuan izin/konten menggunakan status bisnis PENDING/BLOCKED secara terpisah dari hasil tes.

Screenshot, trace, dan laporan kelak disimpan sebagai evidence internal pada task terkait; jangan masukkan fixture atau kontak uji ke paket publik. Tidak ada evidence runtime yang dihasilkan pada D-002.

## Pemetaan FR dan skenario

| ID | Verifikasi yang harus dilakukan |
| --- | --- |
| T-01 / FR-01 | Enam section berurutan sesuai sitemap pada mobile/tablet/desktop; tidak ada checkout atau section global tambahan akibat floating WhatsApp. |
| T-02 / FR-02 | Cocokkan Hero dengan referensi final dan izin aset: dua cucur, dua bakpao, satu pastel, tanpa muffin. Uji aset belum siap; tidak mengganti dengan produk rekaan. |
| T-03 / FR-03 | Cocokkan kartu/atribut HTML dengan register dan kelompok approved. Uji 0/1/3+ kartu per kelompok, atribut opsional kosong, dan item pending/blocked tidak muncul dalam artefak publik. |
| T-04 / FR-04 | Review copy terhadap business rules/Dina: percakapan dan konfirmasi manual, tidak ada janji harga/stok/waktu/pengantaran yang belum disetujui. |
| T-05 / FR-05 | Nomor digit internasional, tanpa plus/spasi/tanda baca/nol awalan nasional; label/fokus/aktivasi dan URL `wa.me` benar. Encoding hanya bila pesan awal disetujui. Uji nomor kosong/tidak valid: tidak ada tautan aktif. Website tidak mendeteksi chat terkirim/order diterima. |
| T-06 / FR-06 | Review tiap fakta, cerita, nama, kontak, dan aset pada HTML/paket publik terhadap register dan bukti izin Dina. Materi tanpa izin tidak boleh lolos karena hidden atau berada dalam komentar. |
| T-07 / FR-07 | Fixture katalog kosong, aset hilang/gagal, teks/atribut kosong, nomor hilang. Teks terbaca, layout tidak rusak, tanpa kartu/link fiktif atau klaim pending. Kondisi internal tidak otomatis layak rilis. |
| T-08 / FR-08 | Semua anchor di navbar/footer menuju ID sitemap yang unik dan ada; pointer/keyboard, urutan fokus, posisi heading tidak tertutup header pada tiga kelompok viewport. |

Karena situs tidak merender data runtime, variasikan fixture HTML internal atau salinan lokal yang terisolasi pada task testing. Untuk produk pending, uji proses pemilihan markup dan periksa HTML/paket akhir; jangan mengharapkan runtime membaca status register. Fixture tidak boleh menimpa sumber publik, menjadi data produk production, atau ikut deploy. Pengujian gambar gagal dapat memakai request blocking browser. Cara fixture yang konkret ditetapkan saat D-017 tanpa menambah generator website.

## Pemetaan NFR

| ID | Pemeriksaan dan kondisi uji |
| --- | --- |
| NFR-01 Responsive | Lebar 320, 360, 390, 767, 768, 1024, 1025, 1280, 1440px; konten panjang, portrait/landscape yang relevan. Tidak ada overflow/overlap, nav dapat dipakai, floating WhatsApp tidak menutup konten penting. |
| NFR-02 Accessibility | Keyboard-only, urutan/indikator fokus, nama aksesibel, heading/landmark, alt bermakna, kontras, anchor, dan reduced motion. Gunakan inspeksi accessibility tree atau pembaca layar sesuai alat tersedia. Audit otomatis/Impeccable tidak menggantikan pemeriksaan manual. |
| NFR-03 Performance/aset | Audit ukuran/dimensi, kompresi, ruang gambar, dan kesesuaian resolusi. Ukur LCP/CLS mobile dan desktop; catat tool, perangkat/browser, viewport, jaringan/CPU/cache dan kondisi pengukuran. Ambang numerik/alat final PENDING owner; jangan mengarang target/skor atau klaim lulus kuantitatif. |
| NFR-04 SEO | Inspeksi HTML yang dilayani: konten inti tersedia tanpa JS, title/description faktual, heading, URL/aset, OG/favicon jika relevan, domain dan pengaturan crawl publik benar. Robots/sitemap diputuskan sesuai kebutuhan; tidak menjanjikan indexing/ranking. |
| NFR-05 Reliability | Semua link/target/aset valid, failure states aman, tanpa fakta pending sebagai klaim publik; error eksternal WhatsApp tidak diartikan website sebagai status pesanan. |

Tambahkan pemeriksaan paket publik: tidak mengandung secrets, data pelanggan, nomor/aset tak berizin, dokumen internal, fixture, atau metadata sensitif yang tidak diizinkan. Jika menggunakan tautan tab baru, periksa semantik/keamanan rel yang sesuai. Tidak perlu API atau layanan eksternal untuk verifikasi ini.

## Tooling dan aplikasi pengujian

- Setelah source tersedia, layani melalui HTTP statis lokal; catat command/versi/URL aktual. Inspeksi sumber dan lakukan validasi HTML/CSS dengan alat tersedia. Alat belum dipilih/tersedia berarti NOT RUN, bukan PASS.
- Pemeriksaan sintaks/lint JS hanya berlaku bila JS ada; dependency lint bukan kewajiban otomatis. Periksa perilaku inti dengan JS dinonaktifkan.
- D-017 tetap menggunakan Playwright untuk critical journey Home → Kue Harian → Pesanan Acara → Cara Pemesanan → tautan WhatsApp. Periksa menu mobile jika ada, keyboard/anchor, missing products, link eksternal, dan 404 bila relevan. Jalankan terhadap paket yang sama dengan calon publikasi.
- Untuk WhatsApp, automation dapat memeriksa href dan navigasi keluar; manual smoke memakai browser/perangkat relevan dengan nomor berizin. Jangan otomatis mengirim pesan atau mengklaim status aplikasi/pesan terkirim.
- Pertahankan Impeccable sesuai pemetaan architecture. Output clean/detect tidak membuktikan LCP/CLS, izin konten, atau seluruh UX lulus.
- Re-test kasus yang terdampak setiap perubahan; jalankan critical journey dan gate terkait pada kandidat final. Perubahan konten/foto juga dapat memengaruhi layout, alt, metadata, dan performa.

## Pemeriksaan yang tidak berlaku

| Pemeriksaan | Status untuk arsitektur ini | Pengganti yang relevan |
| --- | --- | --- |
| TypeScript typecheck | N/A — tidak menggunakan TypeScript | Validasi HTML, pemeriksaan JS bila ada, dan perilaku browser. |
| Next.js lint/config/server-feature compatibility | N/A — tidak menggunakan Next.js | Pemeriksaan source statis dan paket publik. |
| Compiler build / `next build` / static export `out/` | N/A — HTML langsung tanpa kompilasi/generator | Kesiapan file statis, validasi, HTTP serving, link/aset dan smoke; pemeriksaan pengganti tetap NOT RUN sampai dijalankan. |
| Install dependency framework aplikasi | N/A — tidak ada framework aplikasi | Tool test/server dibahas pada task relevan; bukan bukti aplikasi lulus. |

Jangan mengganti kewajiban verifikasi dengan label N/A secara menyeluruh. Contohnya, tidak ada compiler build tidak menghapus pemeriksaan file yang akan dihosting.

## Empat gates roadmap

Gate ini mengoperasionalkan Definition of Ready: Gate A selaras Ready to Implement; B/C/D memperinci jalur penerimaan hingga Ready to Publish. Tidak ada gate yang dilonggarkan karena memilih HTML.

| Gate | Evidence dan syarat keputusan |
| --- | --- |
| A — Ready to Implement | Scope/baseline approved, interaction contract dan referensi jelas; konten penting terverifikasi atau dikecualikan dari publik sesuai baseline; ADR diterima dan rencana verifikasi disetujui. Tidak otomatis memberi izin task berikut. |
| B — Ready to Accept | File changed/alasan dan hasil pemeriksaan relevan aktual; N/A framework dengan alasan; browser/E2E serta responsive/keyboard diperiksa pada milestone terkait; critique/audit ditinjau; P0/P1 tidak dibiarkan tanpa mitigasi yang disetujui. |
| C — Ready to Preview | Paket publik hanya konten approved, WA valid, file/aset statis lulus smoke; preview mendapat izin owner; materi pending tidak bocor. |
| D — Ready to Release | Dina menyetujui konten/nomor, owner menerima UAT dan menginstruksikan deploy; rollback/handover siap, limitations diketahui, status akurat; production smoke setelah deploy diizinkan dan tidak ada P0/P1 unresolved. |

Build/validasi PASS bukan bukti UI, interaksi, fakta, atau izin lulus. Persetujuan publikasi tetap keputusan owner, bukan keluaran tool.

## Verifikasi dokumentasi D-002

Periksa tepat lima file yang diizinkan, tautan lokal, konsistensi status/ADR, cakupan T-01–T-08 dan NFR-01–NFR-05, adaptasi seluruh D-003–D-019, empat gates, batas izin, serta tidak berubahnya enam dokumen lama. Status hasil aktual dilaporkan setelah pemeriksaan, bukan diasumsikan oleh rencana ini.

Pada akhir penulisan D-002: acceptance aplikasi, browser/E2E, performance, dan smoke deployment tetap NOT RUN karena source, konten final, serta deployment belum tersedia. Review akhir hasil D-002 masih PENDING owner. Approval dokumentasi sebelumnya adalah izin menulis, bukan klaim semua gate implementasi/rilis sudah lulus.
