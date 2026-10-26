# Dina Cake

Website katalog satu halaman untuk mengenalkan produk dan membantu pengunjung memulai percakapan WhatsApp. Batas bisnis dan aturan publikasi tersedia dalam dokumen konteks di bawah.

## Status terbaru — 26 Oktober 2026

| Milestone | Status |
| --- | --- |
| D-000 — Business Discovery | Dokumentasi selesai; validasi fakta dan izin Dina masih **PENDING**. Status DRAFT/PENDING/BLOCKED per item tetap berlaku. |
| D-001 — Requirements & Sitemap | **APPROVED sebagai baseline requirements MVP** oleh Decision Owner pada sesi “D-001 Final Decision & D-002 Documentation Approval”. Approval tidak menyetujui otomatis item yang masih PENDING/BLOCKED dan bukan izin publikasi. |
| D-002 — Technical Architecture | **ACCEPTED** oleh owner; ADR **Accepted** dan dokumentasi sudah tersimpan di GitHub. |
| D-003 — Static Frontend Foundation | Implementasi selesai; commit dan push berhasil. Scaffold HTML/CSS tersedia untuk pengembangan internal. |
| D-004 — Impeccable Setup | Instalasi dan init Impeccable **4.7.0** berhasil; hasil setup dan konfigurasi diterima owner berdasarkan review dokumen. Git handoff dilakukan oleh Decision Owner. |
| D-005 — Design Tokens & Skeleton | Belum dimulai. |
| D-006–D-019 | Belum dimulai. |
| Source aplikasi dan pengujian runtime | `index.html` dan `assets/css/styles.css` tersedia. Browser/E2E/performance **NOT RUN**; klasifikasi build/typecheck lihat test plan. |
| Publikasi | **BLOCKED** sampai konten/izin, verifikasi, dan gate rilis terpenuhi. |

Label DRAFT serta arsitektur/approval PENDING dalam dokumen lama adalah catatan status saat dokumen ditulis. Keputusan owner di atas memperbarui status baseline D-001; keputusan arsitektur dijelaskan di ADR. Enam dokumen lama sengaja tidak diedit. Status item bisnis, aset, interaksi tambahan, dan izin yang belum disetujui tidak dinaikkan oleh pembaruan ini.

Impeccable terpasang **project-scoped** untuk Codex; hooks dan telemetry proyek **disabled**. Engine lokal per platform di-ignore oleh Git, sehingga mungkin perlu disiapkan ulang setelah clone pada komputer berbeda. Periksa skill/engine yang tersedia dan ikuti approval setup yang berlaku; jangan mengaktifkan hooks atau mengubah konfigurasi global otomatis.

## Peta dokumen

| Dokumen | Tanggung jawab |
| --- | --- |
| [AGENTS.md](AGENTS.md) | Pedoman kerja dan batas izin agen. |
| [Project brief](docs/project-brief.md) | Tujuan bisnis dan batas produk D-000. |
| [Content inventory](docs/content-inventory.md) | Register verifikasi konten/aset dan approval Dina. |
| [Business rules](docs/business-rules.md) | Aturan pemesanan dan fakta operasional yang belum terverifikasi. |
| [Requirements](docs/requirements.md) | FR/NFR, acceptance criteria, dan prioritas D-001. |
| [Sitemap](docs/sitemap.md) | Enam section, anchor, dan user journey. |
| [Definition of Ready](docs/definition-of-ready.md) | Syarat implementasi dan publikasi D-001. |
| [ADR 001](docs/adr/001-static-site.md) | Keputusan stack, alasan, alternatif, dan trade-off. |
| [Architecture](docs/architecture.md) | Struktur, flow konten, serta adaptasi D-003–D-019. |
| [Test plan](docs/test-plan.md) | Skenario verifikasi, evidence, dan empat release gates. |
| [Product context](PRODUCT.md) | Konteks produk hasil Impeccable init; status fakta dan izin tetap merujuk inventaris. |

Referensi roadmap: **Dina Cake Codex Execution Roadmap 2026**, bagian D-002–D-019 dan halaman 30–32 (Impeccable, design contract, release gates). PDF dibaca dari `C:/Users/User/Downloads/Dina_Cake_Codex_Execution_Roadmap_2026.pdf` pada sesi D-002; file tidak tersimpan dalam repository dan path tersebut tidak portabel. Kontrak teknis yang diadaptasi dicatat dalam architecture, bukan instruksi untuk langsung mengeksekusi PDF.

## Melanjutkan dari komputer berbeda

1. Buka clone repository yang benar. Jalankan `git rev-parse --show-toplevel`, `git branch --show-current`, `git status --short`, dan `git log -1 --oneline`. Jangan menganggap branch selalu `main` atau clone sudah memuat pekerjaan terbaru.
2. Baca AGENTS dan peta dokumen di atas; pulihkan status dari file aktual. Jika lima dokumen D-002 tidak ada, jangan menganggap keputusan sudah tercatat pada clone tersebut.
3. Cocokkan file dengan handoff terbaru. D-002 dan D-003 sudah tersimpan di GitHub; pastikan hasil D-004 juga telah disinkronkan oleh owner sebelum menganggapnya tersedia di clone lain. Seluruh Git write dilakukan Decision Owner. Jangan reset perubahan lokal untuk menyamakan clone.
4. PDF, foto, screenshot referensi, dan bukti izin di komputer lama mungkin tidak tersedia. Tandai input yang hilang PENDING; jangan menggantinya dengan asumsi. Gunakan PDF asli jika perlu meninjau kontrak yang tidak tercakup dokumentasi ini.
5. Periksa ketersediaan Impeccable dan engine lokal, lalu reload Codex bila diperlukan agar skill dikenali. Minta/ikuti instruksi satu task aktif dan periksa dependency serta gate; D-005 belum diizinkan untuk dimulai.

## Menjalankan website

Scaffold D-003 dapat dilayani dengan server HTTP statis lokal yang tersedia, terikat ke loopback; dokumentasikan tool, versi, command, dan URL yang benar-benar dipakai. Jangan memasang tool otomatis atau memakai `file://` sebagai satu-satunya bukti browser. Scaffold belum siap dipublikasikan; paket publik kelak harus mengecualikan dokumentasi internal dan seluruh materi tanpa izin. Tidak ada command Next.js, instalasi framework, atau build generator untuk MVP ini.
