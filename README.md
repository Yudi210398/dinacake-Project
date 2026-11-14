# Dina Cake

Website katalog satu halaman untuk mengenalkan produk dan membantu pengunjung memulai percakapan WhatsApp. Batas bisnis dan aturan publikasi tersedia dalam dokumen konteks di bawah.

## Status terbaru — 14 November 2026

| Milestone | Status |
| --- | --- |
| D-000 — Business Discovery | Dokumentasi selesai; validasi fakta dan izin Dina masih **PENDING**. Status DRAFT/PENDING/BLOCKED per item tetap berlaku. |
| D-001 — Requirements & Sitemap | **APPROVED sebagai baseline requirements MVP** oleh Decision Owner pada sesi “D-001 Final Decision & D-002 Documentation Approval”. Approval tidak menyetujui otomatis item yang masih PENDING/BLOCKED dan bukan izin publikasi. |
| D-002 — Technical Architecture | **ACCEPTED** oleh owner; ADR **Accepted** dan dokumentasi sudah tersimpan di GitHub. |
| D-003 — Static Frontend Foundation | Implementasi selesai; commit dan push berhasil. Scaffold HTML/CSS tersedia untuk pengembangan internal. |
| D-004 — Impeccable Setup | Instalasi dan init Impeccable **4.7.0** berhasil; hasil setup dan konfigurasi diterima owner berdasarkan review dokumen. Git handoff dilakukan oleh Decision Owner. |
| D-005 — Design Tokens & Skeleton | **IMPLEMENTED; OWNER ACCEPTED** sesuai keputusan owner bahwa D-005 diterima dan Git handoff selesai. |
| Implementasi section dan interaksi | Navbar/Hero, Kue Harian, Pesanan Acara, Cara Pemesanan, Tentang Mama Dina, Footer, floating WhatsApp, scrollspy, smooth scrolling, dan editorial reveal **IMPLEMENTED**. Status ini bukan acceptance otomatis seluruh milestone. |
| Pengujian lokal | **TESTED** pada Full Application Audit 14 November 2026: delapan viewport 320–1440px, teks 200%, anchor/menu/keyboard, no-JS, reduced motion, reveal, serta URL WhatsApp desktop/Android emulasi. LCP/CLS diukur lokal tanpa throttling; bukan bukti performa production. Screen reader, HP fisik, dan pembukaan aplikasi WhatsApp **NOT RUN**. |
| Acceptance lanjutan | Acceptance final D-006 dan milestone setelahnya **NOT VERIFIED** dalam handoff ini. Tidak disimpulkan dari keberadaan source atau hasil tes. |
| Versi untuk hosting | Branch yang diperiksa `fix/pesanan-acara-desktop-typography`, baseline HEAD `e12cc99`. Perubahan cleanup/dokumentasi belum di-commit; Decision Owner harus menetapkan SHA handoff setelah review. **REMOTE SYNC NOT VERIFIED**; ref remote lokal bukan bukti GitHub live. |
| Publikasi | **BLOCKED** sampai konten/izin, verifikasi, dan gate rilis terpenuhi. |

Label DRAFT serta arsitektur/approval PENDING dalam dokumen lama adalah catatan status saat dokumen ditulis. Keputusan owner di atas memperbarui status baseline D-001; keputusan arsitektur dijelaskan di ADR. Enam dokumen lama sengaja tidak diedit. Status item bisnis, aset, interaksi tambahan, dan izin yang belum disetujui tidak dinaikkan oleh pembaruan ini.

**TECHNICAL IMPLEMENTATION STATUS:** aplikasi statis telah tersedia dan diuji lokal. Pesanan Acara terimplementasi, bukan placeholder/HOLD teknis. URL WhatsApp terintegrasi melalui `assets/js/contact-config.js`; validitas format tidak membuktikan akun aktif, kepemilikan, atau izin nomor. Technical hosting handoff **CONDITIONAL GO**, menunggu review versi source, verifikasi GitHub, dan staging dengan akses terbatas.

**PUBLICATION APPROVAL STATUS:** **PENDING CONTENT APPROVAL / BLOCKED FOR RELEASE**. Foto/ilustrasi, nama/logo, deskripsi produk, narasi Mama Dina, menu acara, serta nomor kontak masih mengikuti register izin; jangan menyimpulkan APPROVED dari UI. Public production release **NO-GO** sampai approval dan gate rilis terpenuhi. Lihat [hosting handoff](docs/hosting-handoff.md) untuk daftar runtime, checklist konten, dan tanggung jawab developer.

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
| [Hosting handoff](docs/hosting-handoff.md) | Versi source, daftar file runtime, batas staging, checklist approval, dan verifikasi hosting. |

Referensi roadmap: **Dina Cake Codex Execution Roadmap 2026**, bagian D-002–D-019 dan halaman 30–32 (Impeccable, design contract, release gates). PDF dibaca dari `C:/Users/User/Downloads/Dina_Cake_Codex_Execution_Roadmap_2026.pdf` pada sesi D-002; file tidak tersimpan dalam repository dan path tersebut tidak portabel. Kontrak teknis yang diadaptasi dicatat dalam architecture, bukan instruksi untuk langsung mengeksekusi PDF.

## Melanjutkan dari komputer berbeda

1. Buka clone repository yang benar. Jalankan `git rev-parse --show-toplevel`, `git branch --show-current`, `git status --short`, dan `git log -1 --oneline`. Jangan menganggap branch selalu `main` atau clone sudah memuat pekerjaan terbaru.
2. Baca AGENTS dan peta dokumen di atas; pulihkan status dari file aktual. Jika lima dokumen D-002 tidak ada, jangan menganggap keputusan sudah tercatat pada clone tersebut.
3. Cocokkan branch dan SHA dengan handoff terbaru yang disetujui owner; jangan menganggap default branch memuat implementasi terbaru. Verifikasi GitHub setelah owner menyinkronkan perubahan. Seluruh Git write dilakukan Decision Owner. Jangan reset perubahan lokal untuk menyamakan clone.
4. PDF, foto, screenshot referensi, dan bukti izin di komputer lama mungkin tidak tersedia. Tandai input yang hilang PENDING; jangan menggantinya dengan asumsi. Gunakan PDF asli jika perlu meninjau kontrak yang tidak tercakup dokumentasi ini.
5. Periksa ketersediaan Impeccable dan engine lokal, lalu reload Codex bila diperlukan agar skill dikenali. Ikuti satu task yang secara eksplisit diizinkan owner; status implementasi tidak mengizinkan task atau deployment berikutnya.

## Menjalankan website

Aplikasi dapat dilayani dengan server HTTP statis lokal yang tersedia, terikat ke loopback; dokumentasikan tool, versi, command, dan URL yang benar-benar dipakai. Jangan memasang tool otomatis atau memakai `file://` sebagai satu-satunya bukti browser. CSS modular dimuat langsung dari `index.html`; `assets/css/styles.css` hanya peta modul. Tidak ada build command, backend, atau environment variable runtime. Paket hosting mengikuti allowlist dalam hosting handoff; jangan menjadikan seluruh repository sebagai document root publik. Materi tanpa izin tidak boleh diterbitkan.
