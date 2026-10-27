# D-005 — Disposition finding Impeccable

Tanggal verifikasi: 27 Oktober 2026 (Asia/Jakarta). CLI/skill project-scoped **4.7.0**, engine **0.1.16**, browser Microsoft Edge **156.0.4314.42**. Decision Owner telah menerima klasifikasi di bawah dan mengizinkan exception brand terbatas. Final acceptance hasil QA ini tetap menunggu review owner.

## Lima finding dan keputusan

Raw static scan menunjuk `index.html`, severity `warning`, dengan `line: 0`. Empat entri padding tidak memiliki selector unik; semuanya membawa snippet yang sama. Lokasi section pada tabel merupakan penelusuran source/DOM dalam investigasi, bukan selector yang disediakan JSON detector.

| Finding | Rule | Lokasi terkait | Klasifikasi dan keputusan |
| --- | --- | --- | --- |
| 1 | `cramped-padding` | `#kue-harian`, baris source 18 | **FALSE POSITIVE**, diterima owner; tidak diberi ignore. |
| 2 | `cramped-padding` | `#pesanan-acara`, baris source 24 | **FALSE POSITIVE**, diterima owner; tidak diberi ignore. |
| 3 | `cramped-padding` | `#tentang`, baris source 36 | **FALSE POSITIVE**, diterima owner; tidak diberi ignore. |
| 4 | `cramped-padding` | `#kontak`, baris source 42 | **FALSE POSITIVE**, diterima owner; tidak diberi ignore. |
| 5 | `cream-palette` | `body`, baris source 9 | **INTENTIONAL DESIGN**: background `#FFF8EE` disetujui Decision Owner; exception satu rule/satu file. |

Snippet lengkap untuk finding 1–4:

```text
<section> "section": children flush against bg on all sides (no inset)
```

Snippet finding 5:

```text
cream/beige page background rgb(255, 248, 238)
```

## Bukti investigasi dan verifikasi

Section memakai `padding-block`; jarak horizontal berasal dari lebar `.container` dan margin otomatis. Raw static engine tidak merepresentasikan logical spacing tersebut setara dengan hasil browser. Source engine versi terpasang memperlihatkan cabang flush-boundary yang menggunakan sisi padding fisik dengan threshold 2px: [rule](https://github.com/pbakaus/impeccable/blob/engine-v0.1.16/crates/html/src/quality.rs#L573) dan [pemetaan CSS](https://github.com/pbakaus/impeccable/blob/engine-v0.1.16/crates/html/src/cascade/defaults.rs#L195).

Computed styles/rendered geometry dan screenshot pada investigasi sebelumnya membuktikan bahwa teks tidak menempel pada batas. Pemeriksaan browser sesudah exception mengonfirmasi kondisi berikut tanpa perubahan source:

| Viewport | Inset horizontal minimum | Padding vertikal minimum | Overflow | Kontras teks minimum |
| --- | --- | --- | --- | --- |
| 360px | 16px | 32px | Tidak ada | 5,28:1 |
| 768px | 30,72px | 48px | Tidak ada | 5,28:1 |
| 1440px | 144px | 64px | Tidak ada | 5,28:1 |

Background body tetap `rgb(255, 248, 238)` / `#FFF8EE`. Struktur satu main, satu H1, lima H2, enam ID section dan label tetap valid. Keyboard Tab/Enter pada skip link, fokus 3px, serta reduced motion diperiksa dan **PASS**. Pemeriksaan ini terbatas pada skeleton dan Edge Windows, bukan sertifikasi accessibility atau QA produk final.

## Exception yang diizinkan

Exception disimpan pada konfigurasi project-shared yang terlacak Git: [config.json](../../.impeccable/config.json). Hanya ada satu entri `detector.ignoreValues`: rule `cream-palette`, value `*`, files `["index.html"]`, dengan alasan:

> Decision Owner menyetujui warna background #FFF8EE sebagai keputusan brand Dina Cake

`ignoreRules` dan `ignoreFiles` tetap kosong. Tidak ada ignore untuk `cramped-padding`. Hooks dan telemetry tetap nonaktif; `buildPath` tetap `code`. Tidak dibuat konfigurasi ignore lokal.

Engine 0.1.16 tidak memiliki extractor nilai spesifik untuk `cream-palette`; [daftar extractor](https://github.com/pbakaus/impeccable/blob/engine-v0.1.16/crates/detect/src/config.rs#L921) dan [validasi CLI](https://github.com/pbakaus/impeccable/blob/engine-v0.1.16/crates/detect/src/ignores.rs#L378) menjelaskan penolakan nilai spesifik. Karena itu wildcard ini **tidak mengikat exception ke hex #FFF8EE**: ia mengecualikan semua finding rule cream-palette yang cocok dengan scope file. Review ulang diperlukan bila warna atau struktur halaman berubah.

Scope dicocokkan terhadap field `file` finding. Rendered scan memakai URL eksplisit `http://127.0.0.1:58787/index.html`, dilayani dari file repository yang sama lewat server allowlist lokal. URL `/` tidak otomatis dipetakan engine ke `index.html`; jangan menganggap exception pasti berlaku pada URL tersebut. Penamaan file serupa di kemudian hari perlu ditinjau karena engine juga mencocokkan suffix path. Tidak ada scope URL/global yang ditambahkan.

## Command dan hasil aktual

Command dijalankan dari root repository dengan opt-out sementara `IMPECCABLE_NO_TELEMETRY=1` dan `IMPECCABLE_NO_UPDATE_CHECK=1`, lalu nilai environment sebelumnya dipulihkan. Definisi `<launcher>` di bawah adalah `.agents/skills/impeccable/scripts/impeccable.cmd`.

```text
<launcher> ignores add-value cream-palette "*" --file index.html --shared --reason "Decision Owner menyetujui warna background #FFF8EE sebagai keputusan brand Dina Cake"
<launcher> ignores list
<launcher> detect --json --no-config index.html
<launcher> detect --json index.html
<launcher> detect --json --no-config --cdp 9227 --target /index.html
<launcher> detect --json --cdp 9227 --target /index.html
```

CDP terikat ke loopback; viewport diatur pada tab yang sama menggunakan Playwright bawaan environment, tanpa instalasi dependency. Server hanya melayani HTML/CSS yang diuji; browser/server ditutup sesudah pemeriksaan.

| Scan | Viewport | Jumlah warning | Rincian | Exit | Status |
| --- | --- | --- | --- | --- | --- |
| Raw static, `--no-config` | N/A | 5 | 4 padding + 1 cream | 2 | Scan selesai dengan finding; **bukan clean PASS**. |
| Static, konfigurasi shared | N/A | 4 | 4 padding; tidak disembunyikan | 2 | Scan selesai dengan false positive yang dicatat. |
| Raw rendered, `--no-config` | 360px | 1 | Cream saja; padding 0 | 2 | Scan selesai dengan finding brand. |
| Raw rendered, `--no-config` | 768px | 1 | Cream saja; padding 0 | 2 | Scan selesai dengan finding brand. |
| Raw rendered, `--no-config` | 1440px | 1 | Cream saja; padding 0 | 2 | Scan selesai dengan finding brand. |
| Rendered, konfigurasi shared | 360px | 0 | Tidak ada | 0 | **PASS** |
| Rendered, konfigurasi shared | 768px | 0 | Tidak ada | 0 | **PASS** |
| Rendered, konfigurasi shared | 1440px | 0 | Tidak ada | 0 | **PASS** |

## Integritas dan batas penerimaan

SHA-256 sebelum dan sesudah task identik:

```text
index.html
61c75cd7e672bd6bf4239cf6b6d1d6e6274eca17c4d88ac9df108168bfdcb765

assets/css/styles.css
678dd482d25cd2d85eaa6dc554b7431c1a1d867449b4e4fd346f9e76e15707a4
```

Target rendered scan dengan exception terpenuhi pada ketiga viewport. Raw static tetap transparan memiliki lima finding. Tidak ada perubahan HTML/CSS, refactor layout, dependency, Git write, deployment, atau pekerjaan D-006 dalam task ini.

Performa, E2E pemesanan, validator standar lengkap, dan pengujian lintas browser/perangkat **NOT RUN** pada task ini. Temuan kualitas baru tidak boleh otomatis dianggap false positive hanya karena mirip dengan hasil D-005.
