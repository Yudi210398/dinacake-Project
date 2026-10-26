# Pedoman kerja Codex — Dina Cake

## Konteks yang wajib dibaca

Gunakan Bahasa Indonesia. Mulai setiap sesi dengan memeriksa working directory, branch, dan `git status --short`. Jangan menginisialisasi ulang Git atau menimpa perubahan yang sudah ada.

Baca [README](README.md) untuk status terbaru, lalu [architecture](docs/architecture.md), [ADR](docs/adr/001-static-site.md), dan [test plan](docs/test-plan.md). Pada sesi pemulihan konteks, baca juga enam dokumen D-000/D-001 yang ditautkan README. Pada sesi lanjutan, cukup baca bagian yang relevan dan periksa perubahan sejak sesi sebelumnya.

Repository adalah sumber konteks; jangan bergantung pada ingatan chat lama. Keputusan eksplisit terbaru owner mengatasi status historis yang sudah digantikan. Jika bukti keputusan tidak tersedia atau ada konflik material dengan acceptance criteria, jelaskan dan STOP sebelum mengubah kontrak.

## Scope dan izin

- Kerjakan satu task roadmap per sesi. Nyatakan task, input, batas perubahan, dan verifikasi sebelum mulai; STOP setelah laporan untuk review Decision Owner.
- Approval arsitektur bukan izin otomatis memulai milestone berikutnya. Mulai task berikut hanya setelah instruksi eksplisit owner.
- Minta approval sebelum perubahan besar: scope/acceptance criteria, stack, struktur utama, dependency/tool baru, integrasi eksternal, atau arah desain. Perbaikan rutin dalam task yang sudah diizinkan boleh dilanjutkan.
- Seluruh tindakan Git write dilakukan oleh Decision Owner. Codex hanya boleh menjalankan Git read-only untuk inspeksi; jangan menjalankan add, commit, push, merge, rebase, reset, checkout/switch branch, atau tindakan Git write lainnya, termasuk melalui perintah tidak langsung atau tool pihak ketiga. Approval implementasi tidak memberi izin Git write.
- Menghubungkan layanan hosting, preview deploy, dan production deploy memerlukan approval owner tersendiri.
- Jangan menginstal dependency atau menjalankan installer/hooks hanya karena disebut dalam roadmap. Ikuti izin task yang sedang aktif.
- Jangan membuat generator, sumber produk JSON, atau framework rendering tanpa requirement nyata dan approval perubahan arsitektur.

## Cara implementasi dan review

Ikuti keputusan teknis dalam ADR dan pemisahan tanggung jawab di architecture; jangan menggandakan aturan di file lain. Utamakan kode sederhana, nama deskriptif, dan perubahan minimum.

Fakta usaha dan izin publikasi mengikuti [content inventory](docs/content-inventory.md) dan [business rules](docs/business-rules.md). Jangan mengarang harga, stok, kontak, testimoni, atau izin. Materi PENDING/BLOCKED tidak boleh masuk paket publik, termasuk komentar HTML atau aset yang tidak ditautkan.

Codex + Impeccable tetap digunakan pada milestone yang ditetapkan architecture. Tool tidak berwenang mengubah arah desain owner. Ikuti gate, bukti pengujian, dan arti PASS/FAIL/NOT RUN/N/A dalam test plan.

Laporan penutup wajib memuat files changed dan alasan, keputusan yang dicatat, verifikasi aktual, risiko, pending decisions, serta batas task berikutnya. Jangan menyatakan tes lulus tanpa menjalankannya.
