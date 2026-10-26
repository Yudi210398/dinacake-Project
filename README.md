# Dina Cake

Website katalog satu halaman untuk mengenalkan produk dan membantu pengunjung memulai percakapan WhatsApp. Batas bisnis dan aturan publikasi tersedia dalam dokumen konteks di bawah.

## Status terbaru — 26 Oktober 2026

| Milestone | Status |
| --- | --- |
| D-000 — Business Discovery | Tiga dokumen tersedia; fakta, konten, aset, dan izin Dina tetap mengikuti status DRAFT/PENDING/BLOCKED masing-masing item. |
| D-001 — Requirements & Sitemap | **APPROVED sebagai baseline requirements MVP** oleh Decision Owner pada sesi “D-001 Final Decision & D-002 Documentation Approval”. Approval tidak menyetujui otomatis item yang masih PENDING/BLOCKED dan bukan izin publikasi. |
| D-002 — Technical Architecture | Arsitektur **APPROVED**; ADR **Accepted**. Lima dokumen D-002 disiapkan untuk review owner; penerimaan akhir hasil dokumentasi masih PENDING. |
| D-003–D-019 | Belum dimulai. D-003 memerlukan instruksi owner setelah review D-002 dan pemeriksaan gate. |
| Impeccable | Penggunaan disetujui; belum diinstal/diinisialisasi. Setup berada pada D-004. |
| Source aplikasi dan pengujian runtime | Belum ada source website. Browser/E2E/performance **NOT RUN**; klasifikasi build/typecheck lihat test plan. |
| Publikasi | **BLOCKED** sampai konten/izin, verifikasi, dan gate rilis terpenuhi. |

Label DRAFT serta arsitektur/approval PENDING dalam dokumen lama adalah catatan status saat dokumen ditulis. Keputusan owner di atas memperbarui status baseline D-001; keputusan arsitektur dijelaskan di ADR. Enam dokumen lama sengaja tidak diedit. Status item bisnis, aset, interaksi tambahan, dan izin yang belum disetujui tidak dinaikkan oleh pembaruan ini.

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

Referensi roadmap: **Dina Cake Codex Execution Roadmap 2026**, bagian D-002–D-019 dan halaman 30–32 (Impeccable, design contract, release gates). PDF dibaca dari `C:/Users/User/Downloads/Dina_Cake_Codex_Execution_Roadmap_2026.pdf` pada sesi D-002; file tidak tersimpan dalam repository dan path tersebut tidak portabel. Kontrak teknis yang diadaptasi dicatat dalam architecture, bukan instruksi untuk langsung mengeksekusi PDF.

## Melanjutkan dari komputer berbeda

1. Buka clone repository yang benar. Jalankan `git rev-parse --show-toplevel`, `git branch --show-current`, `git status --short`, dan `git log -1 --oneline`. Jangan menganggap branch selalu `main` atau clone sudah memuat pekerjaan terbaru.
2. Baca AGENTS dan peta dokumen di atas; pulihkan status dari file aktual. Jika lima dokumen D-002 tidak ada, jangan menganggap keputusan sudah tercatat pada clone tersebut.
3. Cocokkan file dengan handoff terbaru. Perubahan D-002 pada sesi ini belum di-commit/push; clone lain tidak otomatis mendapatkannya. Sinkronisasi dilakukan setelah owner memberi instruksi yang sesuai. Jangan reset perubahan lokal untuk menyamakan clone.
4. PDF, foto, screenshot referensi, dan bukti izin di komputer lama mungkin tidak tersedia. Tandai input yang hilang PENDING; jangan menggantinya dengan asumsi. Gunakan PDF asli jika perlu meninjau kontrak yang tidak tercakup dokumentasi ini.
5. Minta/ikuti instruksi satu task aktif, periksa dependency dan gate, lalu kerjakan hanya scope yang diizinkan. Langkah terdekat saat ini adalah review dokumentasi D-002, bukan scaffold otomatis.

## Menjalankan website

Belum ada aplikasi untuk dijalankan pada D-002. Setelah D-003 diizinkan, gunakan server HTTP statis lokal yang tersedia, terikat ke loopback; dokumentasikan tool, versi, command, dan URL yang benar-benar dipakai. Jangan memasang tool otomatis atau memakai `file://` sebagai satu-satunya bukti browser. Tidak ada command Next.js, instalasi framework, atau build generator untuk MVP ini.
