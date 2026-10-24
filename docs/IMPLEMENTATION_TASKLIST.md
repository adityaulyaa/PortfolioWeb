# IMPLEMENTATION TASK LIST

## Pendahuluan

Dokumen ini merupakan panduan implementasi lengkap untuk proyek Portfolio Web App yang diturunkan langsung dari PRD_PORTFOLIO.md sebagai Single Source of Truth.

Tujuan dokumen:

- Menyediakan panduan implementasi terstruktur untuk AI Coding Agent.
- Memastikan setiap Use Case diimplementasikan secara lengkap dan konsisten.
- Menjamin implementasi dilakukan berdasarkan urutan Use Case yang telah ditentukan.
- Memastikan setiap Use Case diselesaikan sepenuhnya sebelum melanjutkan ke Use Case berikutnya.

Prinsip implementasi:

- PRD_PORTFOLIO.md adalah Single Source of Truth untuk semua kebutuhan proyek.
- Implementasi dilakukan berdasarkan 8 Use Case yang telah didefinisikan.
- Setiap Use Case harus diselesaikan sepenuhnya sebelum melanjutkan ke Use Case berikutnya.
- Tidak boleh menambahkan fitur yang tidak terdapat pada PRD_PORTFOLIO.md.
- Tidak boleh mengubah arsitektur, desain database, atau spesifikasi API yang telah didefinisikan.
- Aplikasi bersifat read-only, publik, dan tanpa autentikasi. Tidak boleh ada endpoint tulis (POST, PUT, PATCH, DELETE).
- Visual design (warna, tipografi, gaya layout) belum didefinisikan di PRD dan harus diputuskan secara terpisah sebelum implementasi UI (PRD Bab 11.10).
- Hosting dan deployment belum didefinisikan di PRD, sehingga tidak termasuk dalam dokumen ini.
- Setiap implementasi harus memenuhi seluruh Acceptance Criteria sebelum dianggap selesai.

Urutan implementasi:

1. UC-01 View Hero Section
2. UC-02 View About Section
3. UC-03 View Skills
4. UC-04 View Experience
5. UC-05 View Education
6. UC-06 View Project List
7. UC-07 View Project Detail
8. UC-08 Toggle Theme

---

# UC-01 View Hero Section

## Tujuan

Mengimplementasikan fitur View Hero Section yang menampilkan nama lengkap, headline, short introduction, dan social links (GitHub, LinkedIn, Email) milik owner pada bagian pertama halaman Home. Implementasi ini juga merupakan fondasi seluruh project: setup Next.js, PostgreSQL, Prisma, struktur direktori, layout dasar (Navbar dan Footer), serta layer backend (Route Handler, Service, Repository) yang akan digunakan oleh Use Case berikutnya.

---

## Initial State

Pada tahap ini, project diasumsikan dalam kondisi berikut:

- Project belum memiliki database.
- Project belum memiliki model Prisma apapun.
- Project belum memiliki implementasi backend (Route Handler, Service, Repository).
- Project belum memiliki implementasi frontend.
- Project belum memiliki API endpoints.
- Project belum memiliki seed script maupun seed data.
- Hanya tersedia PRD_PORTFOLIO.md sebagai referensi implementasi.

---

## Dependencies

Sebelum UC-01 dapat diimplementasikan, dependency berikut harus tersedia:

- PostgreSQL database server terinstall dan berjalan.
- Node.js terinstall.
- Keputusan visual design (warna, tipografi, gaya layout) telah ditentukan secara terpisah sebelum implementasi UI.
- Next.js project (App Router, TypeScript, Tailwind CSS) akan dibuat menggunakan versi stable terbaru saat project dimulai, dan versinya dicatat pada package.json.
- Dependencies yang akan dipasang pada UC-01: Prisma (prisma dan @prisma/client) dan Motion (animasi).
- Struktur direktori mengikuti PRD_PORTFOLIO.md Bab 7: src/app, src/components (layout, sections, projects, ui), src/services, src/repositories, src/mappers, src/lib, src/types, prisma (migrations, seed-data), public/images (profile, projects).

---

## Implementation Steps

### Persiapan Project Next.js

- [x] Buat project Next.js menggunakan App Router, TypeScript, dan Tailwind CSS.
- [x] Verifikasi project dapat dijalankan pada mode development.
- [x] Buat struktur direktori sesuai PRD_PORTFOLIO.md Bab 7.
- [x] Pasang dependency Motion untuk animasi UI.
- [x] Pastikan versi seluruh dependency tercatat pada package.json.

### Persiapan Database PostgreSQL

- [x] Buat database PostgreSQL dengan nama sesuai kebutuhan project (misal: portfolio_db).
- [x] Verifikasi koneksi ke database berhasil.

### Konfigurasi Prisma dan Environment

- [x] Inisialisasi Prisma pada project dengan provider postgresql.
- [x] Simpan DATABASE_URL pada file .env.
- [x] Pastikan .env masuk ke .gitignore dan tidak pernah di-commit.
- [x] Buat file .env.example yang berisi nama variabel tanpa nilai rahasia.
- [x] Buat lib/prisma.ts berisi Prisma Client singleton agar tidak terbentuk banyak koneksi pada mode development.

### Pembuatan Model Profile

- [x] Tambahkan model Profile pada prisma/schema.prisma sesuai Database Design di PRD_PORTFOLIO.md Bab 9.
- [x] Tambahkan field: id (Int, Primary Key, single row), fullName, headline, shortIntro, aboutText (Text), location (nullable), photoUrl, email (nullable), githubUrl (nullable), linkedinUrl (nullable).
- [x] Jalankan Prisma migration untuk membuat table Profile.
- [x] Verifikasi model sesuai dengan Database Design pada PRD_PORTFOLIO.md Bab 9.

### Pembuatan Seed Script dan Seed Data Profile

- [x] Buat prisma/seed.ts sebagai entry point seed dan daftarkan perintah seed pada konfigurasi Prisma/package.json.
- [x] Buat prisma/seed-data/profile.ts berisi data Profile milik owner (seluruh field, termasuk aboutText dan photoUrl).
- [x] Implementasi seed Profile menggunakan upsert dengan id tetap agar table hanya berisi satu row dan seed idempotent.
- [x] Tambahkan validasi pada seed: fullName, headline, dan shortIntro tidak boleh kosong.
- [x] Tambahkan validasi pada seed: githubUrl dan linkedinUrl, jika diisi, harus berupa absolute URL (https).
- [x] Jalankan seed dan verifikasi tepat satu row Profile tersimpan.
- [x] Jalankan seed dua kali dan verifikasi tidak terjadi duplikasi data.

### Pembuatan Shared Library Backend

- [x] Buat lib/errors.ts berisi AppError (base class) dan NotFoundError.
- [x] Buat lib/api-response.ts berisi helper response sukses dan error dengan format standar: sukses `{ success: true, data }`, error `{ success: false, error: { code, message } }`.
- [x] Buat utilitas konversi error ke response: NotFoundError menjadi HTTP 404 (NOT_FOUND), error tak terduga menjadi HTTP 500 (INTERNAL_ERROR) dengan pesan generik.
- [x] Pastikan error tak terduga dicatat di server dan tidak membocorkan stack trace atau detail internal ke response.

### Pembuatan DTO

- [x] Buat ProfileDto pada src/types.
- [x] Tambahkan field: fullName, headline, shortIntro, aboutText, location, photoUrl, email, githubUrl, linkedinUrl.
- [x] Jangan sertakan field internal (misal: id) pada ProfileDto.

### Pembuatan Mapper

- [x] Buat ProfileMapper pada src/mappers.
- [x] Buat method toProfileDto(profile) untuk convert entity Prisma ke ProfileDto.

### Pembuatan Repository

- [x] Buat ProfileRepository pada src/repositories.
- [x] Implementasi method untuk membaca satu row Profile menggunakan Prisma.
- [x] Pastikan repository tidak berisi business logic.

### Pembuatan Service

- [x] Buat ProfileService pada src/services.
- [x] Implementasi method getProfile().
- [x] Panggil ProfileRepository dan convert hasil menggunakan ProfileMapper.
- [x] Lempar NotFoundError jika data Profile tidak ditemukan.
- [x] Return ProfileDto.

### Pembuatan Route Handler

- [x] Buat src/app/api/profile/route.ts.
- [x] Export hanya handler GET.
- [x] Panggil ProfileService.getProfile().
- [x] Return HTTP 200 dengan format response sukses standar.
- [x] Tangani error melalui utilitas konversi error.
- [x] Verifikasi method selain GET menghasilkan HTTP 405.

### Exception Handling

- [x] Pastikan NotFoundError menghasilkan HTTP 404 dengan code NOT_FOUND.
- [x] Pastikan error database dan error tak terduga menghasilkan HTTP 500 dengan code INTERNAL_ERROR dan pesan generik.
- [x] Pastikan kegagalan database pada layout (Navbar dan Footer) tidak menyebabkan crash aplikasi.

### Frontend Root Layout dan Metadata

- [x] Konfigurasi src/app/layout.tsx sebagai root layout berisi Navbar, konten halaman, dan Footer.
- [x] Atur bahasa dokumen menjadi English dan tambahkan metadata title default.
- [x] Tambahkan viewport dan pengaturan dasar agar layout responsive (mobile-first).
- [x] Bersihkan style bawaan template Next.js pada globals.css dan sesuaikan dengan visual design yang telah diputuskan.

### Frontend Reveal Component

- [x] Buat Reveal.tsx pada src/components/ui sebagai wrapper animasi (Client Component) menggunakan Motion.
- [x] Dukung animasi entrance saat load dan reveal saat scroll.
- [x] Gunakan hanya properti transform dan opacity.
- [x] Hormati prefers-reduced-motion: tidak ada animasi jika visitor memilih reduced motion.
- [x] Pastikan animasi tidak menyembunyikan konten secara permanen dan tidak menghalangi akses konten.

### Frontend Navbar

- [x] Buat Navbar.tsx pada src/components/layout.
- [x] Tampilkan nama owner (fullName dari Profile).
- [x] Tambahkan link ke section About, Skills, Projects, Experience, dan Education menggunakan anchor `/#about`, `/#skills`, `/#projects`, `/#experience`, `/#education`.
- [x] Pastikan anchor link berfungsi dari halaman manapun (menuju Home).
- [x] Buat Navbar tetap dapat diakses saat halaman di-scroll.
- [x] Implementasi mobile menu untuk layar kecil menggunakan local state (open/closed).
- [x] Pastikan touch target cukup besar untuk penggunaan mobile.
- [x] Siapkan ruang pada Navbar untuk theme toggle (akan diimplementasikan pada UC-08).

### Frontend Footer

- [x] Buat Footer.tsx pada src/components/layout.
- [x] Tampilkan social links (GitHub, LinkedIn, Email) hanya jika memiliki nilai.
- [x] Tampilkan teks copyright.
- [x] Link GitHub dan LinkedIn dibuka pada tab baru dengan rel="noopener noreferrer".
- [x] Link Email menggunakan skema mailto:.

### Frontend ErrorState dan Error Page

- [x] Buat ErrorState.tsx pada src/components/ui untuk menampilkan pesan error yang jelas.
- [x] Buat src/app/error.tsx sebagai error page untuk error tak terduga dengan opsi retry atau kembali ke Home.
- [x] Pastikan pesan error tidak menampilkan detail internal.

### Frontend Hero Component

- [x] Buat Hero.tsx pada src/components/sections sebagai Server Component yang memanggil ProfileService.getProfile().
- [x] Tampilkan fullName, headline, dan shortIntro.
- [x] Tampilkan social links (GitHub, LinkedIn, Email) hanya yang memiliki nilai.
- [x] Link GitHub dan LinkedIn dibuka pada tab baru dengan rel="noopener noreferrer".
- [x] Link Email menggunakan skema mailto:.
- [x] Terapkan animasi entrance Hero menggunakan Reveal.
- [x] Jika data Profile tidak ditemukan, tampilkan ErrorState sebagai pengganti Hero kosong.
- [x] Pastikan Hero terbaca dengan baik di mobile, tablet, dan desktop.

### Frontend Home Page

- [x] Buat src/app/page.tsx sebagai halaman Home (route `/`).
- [x] Tampilkan Hero sebagai section pertama.
- [x] Tambahkan generateMetadata pada halaman Home agar page title deskriptif (berbasis fullName dan headline Profile).
- [x] Siapkan struktur halaman agar section berikutnya dapat ditambahkan sesuai urutan: Hero, About, Skills, Projects, Experience, Education.

### Testing Backend

- [x] Test endpoint GET /api/profile menggunakan Postman, curl, atau browser.
- [x] Test response HTTP 200 dengan format `{ success: true, data }` dan seluruh field ProfileDto.
- [x] Test response tidak memuat field internal.
- [x] Test method POST, PUT, PATCH, DELETE ke /api/profile: return HTTP 405.
- [x] Test dengan table Profile kosong: return HTTP 404 dengan format error standar.
- [x] Test dengan database tidak tersedia: return HTTP 500 dengan pesan generik tanpa detail internal.
- [x] Test seed dijalankan berulang kali tidak menghasilkan duplikasi.

### Testing Frontend

- [x] Test halaman Home dapat diakses pada route `/`.
- [x] Test Hero menampilkan fullName, headline, dan shortIntro dengan benar.
- [x] Test social links hanya tampil jika memiliki nilai.
- [x] Test link eksternal terbuka pada tab baru.
- [x] Test Navbar dan Footer tampil dengan benar.
- [x] Test mobile menu berfungsi pada layar kecil.
- [x] Test animasi entrance berjalan dan tidak berjalan saat prefers-reduced-motion aktif.
- [x] Test Profile kosong menampilkan ErrorState, bukan halaman rusak.
- [x] Test tidak ada horizontal scroll pada mobile, tablet, dan desktop.

---

## Database Tasks

- [x] Buat database PostgreSQL untuk project.
- [x] Konfigurasi Prisma dan DATABASE_URL.
- [x] Buat model Profile dengan field sesuai Database Design.
- [x] Jalankan migration dan verifikasi table Profile ter-create dengan field yang benar.
- [x] Buat seed script dan seed data Profile.
- [x] Verifikasi seed idempotent dan table Profile hanya berisi satu row.

---

## Backend Tasks

- [x] Buat struktur direktori sesuai PRD_PORTFOLIO.md.
- [x] Implementasi lib/prisma.ts, lib/errors.ts, dan lib/api-response.ts.
- [x] Implementasi ProfileDto.
- [x] Implementasi ProfileMapper.
- [x] Implementasi ProfileRepository.
- [x] Implementasi ProfileService dengan method getProfile.
- [x] Implementasi Route Handler GET /api/profile.
- [x] Implementasi penanganan error sesuai tabel error PRD Bab 10.12 (NOT_FOUND dan INTERNAL_ERROR).
- [x] Buat .env.example dan pastikan .env tidak di-commit.

---

## API Tasks

- [x] Implementasi endpoint GET /api/profile.
- [x] Endpoint tidak memerlukan autentikasi.
- [x] Endpoint tidak menerima request body maupun query parameter.
- [x] Endpoint return HTTP 200 dengan ProfileDto jika berhasil.
- [x] Endpoint return HTTP 404 jika data Profile tidak ditemukan.
- [x] Endpoint return HTTP 405 untuk method selain GET.
- [x] Endpoint return HTTP 500 jika system error.
- [x] Response menggunakan format standar dan dates (jika ada) menggunakan ISO 8601.

---

## Frontend Tasks

- [x] Setup Next.js project dengan dependencies yang diperlukan.
- [x] Buat struktur direktori sesuai PRD_PORTFOLIO.md.
- [x] Implementasi root layout dan metadata.
- [x] Implementasi Reveal component.
- [x] Implementasi Navbar dengan anchor links dan mobile menu.
- [x] Implementasi Footer.
- [x] Implementasi ErrorState dan error.tsx.
- [x] Implementasi Hero section.
- [x] Implementasi halaman Home (page.tsx) beserta generateMetadata.
- [x] Implementasi tampilan responsive (mobile-first).

---

## Business Rules

- [x] Hero selalu menjadi section pertama pada Home.
- [x] Hanya social links yang memiliki nilai yang ditampilkan.
- [x] Link Email menggunakan skema mailto:.
- [x] Link GitHub dan LinkedIn dibuka pada tab baru dengan rel="noopener noreferrer".
- [x] Tabel Profile hanya berisi satu row.
- [x] Konten hanya berasal dari seed data; tidak ada operasi tulis dari aplikasi.

---

## Validation Rules

- [x] Full name tidak boleh kosong pada seed data.
- [x] Headline tidak boleh kosong pada seed data.
- [x] Short introduction tidak boleh kosong pada seed data.
- [x] Social URL (GitHub, LinkedIn), jika diisi, harus berupa absolute URL (https).

---

## Use Case Boundary

Saat mengerjakan UC-01 View Hero Section, implementasi yang boleh dilakukan:

- [x] Setup project Next.js, PostgreSQL, Prisma, dan struktur direktori.
- [x] Pembuatan model Profile, seed script, dan seed data Profile.
- [x] Pembuatan shared library backend (prisma, errors, api-response).
- [x] Implementasi ProfileService, ProfileRepository, ProfileMapper, ProfileDto, dan endpoint GET /api/profile.
- [x] Pembuatan Root Layout, Navbar (tanpa theme toggle), Footer, Reveal, ErrorState, dan error.tsx.
- [x] Implementasi Hero section dan halaman Home.

Implementasi yang TIDAK BOLEH dilakukan pada UC-01:

- [ ] Implementasi About section (akan dikerjakan di UC-02).
- [ ] Implementasi Skills, Experience, Education, atau Project (UC-03 sampai UC-07).
- [ ] Implementasi Theme toggle dan dark mode (akan dikerjakan di UC-08).
- [ ] Implementasi authentication, dashboard, contact form, download CV, blog, search, atau filter.
- [ ] Implementasi endpoint tulis (POST, PUT, PATCH, DELETE).
- [ ] Implementasi fitur lain yang tidak berhubungan langsung dengan View Hero Section.

Fokus hanya pada kebutuhan UC-01 View Hero Section dan dependency langsungnya.

---

## Acceptance Criteria

- [x] Hero menampilkan name, headline, dan short introduction.
- [x] Social links hanya ditampilkan jika tersedia.
- [x] Link eksternal dibuka pada tab baru.
- [x] Hero terbaca dengan baik di mobile, tablet, dan desktop.
- [x] Data Profile yang hilang menghasilkan pesan error, bukan halaman rusak.
- [x] Endpoint GET /api/profile berfungsi sesuai API Specification.
- [x] Seed Profile idempotent dan tabel Profile hanya berisi satu row.
- [x] Animasi hormat terhadap prefers-reduced-motion.

---

## Testing Checklist

### Positive Case

- [x] Hero menampilkan data Profile dengan benar.
- [x] Social links tampil sesuai data yang tersedia.
- [x] Response GET /api/profile return HTTP 200 dengan ProfileDto.
- [x] Navbar dan Footer tampil pada halaman Home.

### Negative Case

- [x] Profile kosong menampilkan ErrorState pada halaman dan HTTP 404 pada API.
- [x] Method selain GET ke /api/profile return HTTP 405.
- [x] Social link tanpa nilai tidak ditampilkan.

### Validation Case

- [x] Seed dengan fullName, headline, atau shortIntro kosong ditolak.
- [x] Seed dengan URL sosial tidak valid ditolak.

### Error Case

- [x] Database connection error di-handle dengan baik (error page atau ErrorState).
- [x] Unexpected error return HTTP 500 dengan pesan generik.

---

## Completion State

Setelah UC-01 View Hero Section selesai, kondisi project adalah:

- [x] Project Next.js telah dibuat dengan struktur direktori sesuai PRD_PORTFOLIO.md.
- [x] Database PostgreSQL telah dibuat dan Prisma telah dikonfigurasi.
- [x] Table Profile telah dibuat dan berisi satu row dari seed.
- [x] Endpoint GET /api/profile telah berfungsi dan teruji.
- [x] Root layout, Navbar, Footer, Reveal, ErrorState, dan error.tsx telah berfungsi.
- [x] Hero section dan halaman Home telah berfungsi dan teruji.
- [x] Project siap untuk implementasi UC-02 View About Section.

---

# UC-02 View About Section

## Tujuan

Mengimplementasikan fitur View About Section yang menampilkan foto profil, teks About, dan location milik owner. Fitur ini menggunakan data Profile dan endpoint yang telah dibuat pada UC-01, sehingga tidak memerlukan perubahan database maupun API.

---

## Initial State

Pada tahap ini, project diasumsikan telah menyelesaikan UC-01 dengan kondisi:

- Database PostgreSQL dan Prisma telah dikonfigurasi.
- Table Profile telah tersedia dan berisi satu row dari seed.
- ProfileService, ProfileRepository, ProfileMapper, dan ProfileDto telah tersedia.
- Endpoint GET /api/profile telah berfungsi.
- Root layout, Navbar (dengan anchor `/#about`), Footer, Reveal, ErrorState, dan error.tsx telah tersedia.
- Halaman Home telah menampilkan Hero.

---

## Dependencies

UC-02 View About Section bergantung pada:

- ProfileService.getProfile() dari UC-01.
- Data Profile dengan field aboutText, location, dan photoUrl pada seed.
- Komponen Reveal dari UC-01.
- Halaman Home (page.tsx) dari UC-01.
- File foto profil pada direktori public/images/profile.

---

## Implementation Steps

### Persiapan Foto Profil

- [x] Simpan file foto profil pada public/images/profile.
- [x] Pastikan photoUrl pada seed data Profile menunjuk ke file yang benar-benar ada di public/.
- [x] Jalankan ulang seed jika data seed diperbarui.

### Frontend SectionHeading Component

- [x] Buat SectionHeading.tsx pada src/components/ui untuk judul section yang konsisten.
- [x] Komponen akan digunakan ulang oleh seluruh section berikutnya.

### Frontend About Component

- [x] Buat About.tsx pada src/components/sections sebagai Server Component yang memanggil ProfileService.getProfile().
- [x] Beri id="about" pada section agar anchor `/#about` berfungsi.
- [x] Tampilkan foto profil menggunakan komponen image Next.js dengan alt text berbasis nama owner.
- [x] Tentukan ukuran gambar agar tidak terjadi layout shift.
- [x] Tampilkan aboutText sebagai plain text dengan paragraf yang dipisahkan baris kosong tetap terjaga (misal: whitespace-pre-line).
- [x] Tampilkan location hanya jika memiliki nilai.
- [x] Bungkus section dengan Reveal untuk animasi scroll reveal.
- [x] Jika data Profile tidak ditemukan, tampilkan ErrorState.
- [x] Pastikan layout responsive di mobile, tablet, dan desktop.

### Frontend Home Page Update

- [x] Tambahkan About sebagai section kedua setelah Hero pada page.tsx.
- [ ] Verifikasi klik link About pada Navbar menggulir ke section About.

### Testing Backend

- [ ] Test GET /api/profile tetap return field aboutText, location, dan photoUrl dengan benar.
- [ ] Test tidak ada endpoint baru yang ditambahkan.

### Testing Frontend

- [ ] Test About section menampilkan foto, teks, dan location.
- [ ] Test paragraf pada aboutText tetap terpisah.
- [ ] Test location tidak ditampilkan jika kosong.
- [ ] Test foto tampil tanpa layout shift.
- [ ] Test animasi scroll reveal berjalan dan tidak berjalan saat prefers-reduced-motion aktif.
- [ ] Test link About pada Navbar menggulir ke section yang benar.
- [ ] Test UI responsive di berbagai ukuran layar.

---

## Database Tasks

- [ ] Tidak ada perubahan skema database.
- [ ] Verifikasi seed Profile memiliki aboutText dan photoUrl yang valid.
- [ ] Verifikasi file foto pada photoUrl tersedia di public/.

---

## Backend Tasks

- [ ] Tidak ada komponen backend baru; gunakan ProfileService dari UC-01.

---

## API Tasks

- [ ] Tidak ada endpoint baru; gunakan GET /api/profile dari UC-01.
- [ ] Verifikasi endpoint tetap sesuai API Specification.

---

## Frontend Tasks

- [ ] Implementasi SectionHeading.tsx.
- [ ] Implementasi About.tsx dengan foto, teks, dan location.
- [ ] Update halaman Home untuk menambahkan About.
- [ ] Implementasi scroll reveal animation pada About.
- [ ] Implementasi tampilan responsive.

---

## Business Rules

- [ ] About text adalah plain text; paragraf dipisahkan oleh baris kosong.
- [ ] Location hanya ditampilkan jika memiliki nilai.
- [ ] Foto menampilkan alt text berbasis nama owner.
- [ ] Gambar dirender melalui komponen image Next.js.

---

## Validation Rules

- [ ] About text tidak boleh kosong pada seed data.
- [ ] Path foto harus menunjuk ke file yang ada di public/.

---

## Use Case Boundary

Saat mengerjakan UC-02 View About Section, implementasi yang boleh dilakukan:

- [ ] Penyimpanan file foto profil pada public/images/profile.
- [ ] Pembuatan SectionHeading dan About component.
- [ ] Penambahan About pada halaman Home.
- [ ] Penerapan scroll reveal animation pada About.

Implementasi yang TIDAK BOLEH dilakukan pada UC-02:

- [ ] Perubahan skema database atau pembuatan endpoint baru.
- [ ] Implementasi Skills, Experience, Education, atau Project (UC-03 sampai UC-07).
- [ ] Implementasi Theme toggle dan dark mode (UC-08).
- [ ] Implementasi fitur editing konten, upload file, atau CV download.
- [ ] Implementasi fitur lain yang tidak berhubungan dengan View About Section.

---

## Acceptance Criteria

- [ ] About section menampilkan foto, teks, dan location (jika tersedia).
- [ ] Paragraf pada teks About tetap terjaga.
- [ ] Section tampil dengan animasi scroll reveal.
- [ ] Foto menggunakan alt text dan tidak menyebabkan layout shift.
- [ ] Section responsive di mobile, tablet, dan desktop.

---

## Testing Checklist

### Positive Case

- [ ] About menampilkan data Profile dengan benar.
- [ ] Foto, teks, dan location tampil sesuai seed.
- [ ] Anchor `/#about` berfungsi.

### Negative Case

- [ ] Location kosong tidak ditampilkan dan layout tidak rusak.
- [ ] Profile kosong menampilkan ErrorState.

### Error Case

- [ ] Database connection error di-handle dengan baik.
- [ ] Unexpected error menampilkan error page.

---

## Completion State

Setelah UC-02 View About Section selesai, kondisi project adalah:

- [ ] About section berfungsi dan teruji pada halaman Home.
- [ ] SectionHeading siap digunakan ulang oleh section lain.
- [ ] Foto profil tersedia dan ter-render dengan benar.
- [ ] Project siap untuk implementasi UC-03 View Skills.

---

# UC-03 View Skills

## Tujuan

Mengimplementasikan fitur View Skills yang menampilkan skill milik owner, dikelompokkan berdasarkan kategori dan diurutkan berdasarkan display order. Implementasi mencakup model SkillCategory dan Skill, seed data, service, endpoint GET /api/skills, serta Skills section pada halaman Home.

---

## Initial State

Pada tahap ini, project diasumsikan telah menyelesaikan UC-01 dan UC-02 dengan kondisi:

- Database, Prisma, dan seed script telah berfungsi.
- Table Profile telah tersedia.
- Shared library (prisma, errors, api-response) telah tersedia.
- Hero dan About telah tampil pada halaman Home.
- Reveal dan SectionHeading telah tersedia.
- Table SkillCategory dan Skill belum dibuat.

---

## Dependencies

UC-03 View Skills bergantung pada:

- PostgreSQL dan Prisma telah dikonfigurasi (UC-01).
- Seed script dan struktur seed-data telah tersedia (UC-01).
- lib/api-response.ts dan lib/errors.ts (UC-01).
- Reveal dan SectionHeading (UC-01, UC-02).
- SkillCategory, Skill, repository, service, dan Route Handler akan dibuat di UC-03.

---

## Implementation Steps

### Pembuatan Model SkillCategory dan Skill

- [ ] Tambahkan model SkillCategory pada prisma/schema.prisma dengan field: id (PK, auto increment), name (unique), displayOrder.
- [ ] Tambahkan model Skill dengan field: id (PK, auto increment), name, categoryId (FK ke SkillCategory), displayOrder.
- [ ] Tambahkan relasi One to Many: SkillCategory ke Skill.
- [ ] Tambahkan unique constraint pada kombinasi (categoryId, name).
- [ ] Jalankan Prisma migration.
- [ ] Verifikasi model sesuai dengan Database Design pada PRD_PORTFOLIO.md Bab 9.

### Pembuatan Seed Data Skills

- [ ] Buat prisma/seed-data/skills.ts berisi kategori (misal: Frontend, Backend, Database, Tools) beserta skill pada masing-masing kategori, lengkap dengan displayOrder.
- [ ] Update prisma/seed.ts untuk menjalankan seed skills.
- [ ] Gunakan upsert berdasarkan name untuk SkillCategory dan berdasarkan (categoryId, name) untuk Skill agar seed idempotent.
- [ ] Tambahkan validasi pada seed: nama skill tidak boleh kosong dan unik dalam satu kategori.
- [ ] Jalankan seed dan verifikasi data tersimpan tanpa duplikasi.

### Pembuatan DTO

- [ ] Buat SkillCategoryDto pada src/types.
- [ ] Tambahkan field: id, name, skills (array berisi id dan name).
- [ ] Jangan sertakan displayOrder dan foreign key pada DTO.

### Pembuatan Mapper

- [ ] Buat SkillMapper pada src/mappers.
- [ ] Buat method untuk convert SkillCategory beserta Skill ke SkillCategoryDto.

### Pembuatan Repository

- [ ] Buat SkillCategoryRepository pada src/repositories.
- [ ] Implementasi method untuk membaca seluruh kategori beserta skill-nya menggunakan Prisma.

### Pembuatan Service

- [ ] Buat SkillService pada src/services.
- [ ] Implementasi method getSkillsGroupedByCategory().
- [ ] Urutkan kategori berdasarkan displayOrder ascending.
- [ ] Urutkan skill di dalam kategori berdasarkan displayOrder ascending.
- [ ] Jangan sertakan kategori yang tidak memiliki skill.
- [ ] Convert hasil menggunakan SkillMapper dan return array SkillCategoryDto.

### Pembuatan Route Handler

- [ ] Buat src/app/api/skills/route.ts dengan handler GET saja.
- [ ] Panggil SkillService.getSkillsGroupedByCategory().
- [ ] Return HTTP 200 dengan format response sukses standar (data berupa array).
- [ ] Return array kosong dengan HTTP 200 jika tidak ada data.
- [ ] Tangani error melalui utilitas konversi error dari UC-01.
- [ ] Verifikasi method selain GET menghasilkan HTTP 405.

### Frontend EmptyState dan Tag Component

- [ ] Buat EmptyState.tsx pada src/components/ui untuk menampilkan pesan data kosong yang jelas.
- [ ] Buat Tag.tsx pada src/components/ui untuk menampilkan label (digunakan untuk skill dan tech stack).

### Frontend Skills Component

- [ ] Buat Skills.tsx pada src/components/sections sebagai Server Component yang memanggil SkillService.
- [ ] Beri id="skills" pada section agar anchor `/#skills` berfungsi.
- [ ] Gunakan SectionHeading untuk judul section.
- [ ] Tampilkan setiap kategori beserta skill-nya menggunakan Tag.
- [ ] Jangan tampilkan level atau persentase kemampuan.
- [ ] Tampilkan EmptyState jika tidak ada skill.
- [ ] Bungkus dengan Reveal untuk animasi scroll reveal.
- [ ] Pastikan layout responsive di mobile, tablet, dan desktop.

### Frontend Home Page Update

- [ ] Tambahkan Skills sebagai section ketiga setelah About pada page.tsx.
- [ ] Verifikasi link Skills pada Navbar menggulir ke section Skills.

### Testing Backend

- [ ] Test endpoint GET /api/skills: return HTTP 200 dengan array kategori beserta skill.
- [ ] Test urutan kategori dan skill sesuai displayOrder.
- [ ] Test kategori tanpa skill tidak muncul pada response.
- [ ] Test dengan table kosong: return HTTP 200 dengan array kosong.
- [ ] Test method selain GET: return HTTP 405.
- [ ] Test dengan database tidak tersedia: return HTTP 500 dengan pesan generik.
- [ ] Test seed berulang tidak menghasilkan duplikasi.

### Testing Frontend

- [ ] Test Skills section menampilkan kategori dan skill dengan benar.
- [ ] Test urutan tampilan sesuai displayOrder.
- [ ] Test EmptyState tampil jika tidak ada skill.
- [ ] Test tidak ada level atau persentase yang ditampilkan.
- [ ] Test link Skills pada Navbar menggulir ke section yang benar.
- [ ] Test UI responsive di berbagai ukuran layar.

---

## Database Tasks

- [ ] Buat model SkillCategory dan Skill dengan field sesuai Database Design.
- [ ] Verifikasi table SkillCategory dan Skill ter-create dengan benar.
- [ ] Verifikasi unique constraint name pada SkillCategory dan (categoryId, name) pada Skill berfungsi.
- [ ] Verifikasi relasi SkillCategory ke Skill berfungsi.
- [ ] Insert seed data skills dan verifikasi dapat di-query dengan benar.

---

## Backend Tasks

- [ ] Implementasi model SkillCategory dan Skill.
- [ ] Implementasi SkillCategoryDto.
- [ ] Implementasi SkillMapper.
- [ ] Implementasi SkillCategoryRepository.
- [ ] Implementasi SkillService dengan method getSkillsGroupedByCategory.
- [ ] Implementasi Route Handler GET /api/skills.
- [ ] Implementasi seed skills.

---

## API Tasks

- [ ] Implementasi endpoint GET /api/skills.
- [ ] Endpoint tidak memerlukan autentikasi.
- [ ] Endpoint return HTTP 200 dengan array SkillCategoryDto.
- [ ] Endpoint return array kosong jika tidak ada data.
- [ ] Endpoint return HTTP 405 untuk method selain GET.
- [ ] Endpoint return HTTP 500 jika system error.

---

## Frontend Tasks

- [ ] Implementasi EmptyState.tsx dan Tag.tsx.
- [ ] Implementasi Skills.tsx.
- [ ] Update halaman Home untuk menambahkan Skills.
- [ ] Implementasi scroll reveal animation pada Skills.
- [ ] Implementasi tampilan responsive.

---

## Business Rules

- [ ] Skill ditampilkan dikelompokkan berdasarkan kategori.
- [ ] Kategori dan skill diurutkan berdasarkan displayOrder ascending.
- [ ] Skill tidak memiliki level atau persentase.
- [ ] Kategori tanpa skill tidak ditampilkan.
- [ ] Nama kategori ditentukan melalui seed data.

---

## Validation Rules

- [ ] Nama skill tidak boleh kosong.
- [ ] Nama skill harus unik di dalam satu kategori.

---

## Use Case Boundary

Saat mengerjakan UC-03 View Skills, implementasi yang boleh dilakukan:

- [ ] Pembuatan model SkillCategory dan Skill beserta migration.
- [ ] Pembuatan seed data skills.
- [ ] Implementasi fitur View Skills (service dan frontend).
- [ ] Pembuatan Route Handler GET /api/skills.
- [ ] Pembuatan EmptyState dan Tag component.

Implementasi yang TIDAK BOLEH dilakukan pada UC-03:

- [ ] Implementasi Experience dan Education (UC-04 dan UC-05).
- [ ] Implementasi Project (UC-06 dan UC-07).
- [ ] Implementasi Theme toggle (UC-08).
- [ ] Implementasi proficiency level, penilaian skill, atau fitur edit skill.
- [ ] Implementasi fitur lain yang tidak berhubungan dengan View Skills.

---

## Acceptance Criteria

- [ ] Skills ditampilkan dikelompokkan per kategori.
- [ ] Urutan sesuai displayOrder.
- [ ] Empty state ditampilkan jika tidak ada skill.
- [ ] Endpoint GET /api/skills berfungsi sesuai API Specification.
- [ ] Section responsive dan memiliki animasi scroll reveal.

---

## Testing Checklist

### Positive Case

- [ ] Skills tampil dikelompokkan per kategori.
- [ ] Urutan kategori dan skill sesuai displayOrder.
- [ ] Response GET /api/skills return HTTP 200 dengan array.

### Negative Case

- [ ] Data kosong menampilkan EmptyState dan API return array kosong.
- [ ] Kategori tanpa skill tidak ditampilkan.
- [ ] Method selain GET return HTTP 405.

### Validation Case

- [ ] Seed dengan nama skill kosong ditolak.
- [ ] Seed dengan skill duplikat dalam satu kategori ditolak.

### Error Case

- [ ] Database connection error di-handle dengan baik.
- [ ] Unexpected error return HTTP 500 dengan pesan generik.

---

## Completion State

Setelah UC-03 View Skills selesai, kondisi project adalah:

- [ ] Table SkillCategory dan Skill telah dibuat dan berisi seed data.
- [ ] Endpoint GET /api/skills berfungsi dan teruji.
- [ ] Skills section berfungsi dan teruji pada halaman Home.
- [ ] EmptyState dan Tag siap digunakan ulang.
- [ ] Project siap untuk implementasi UC-04 View Experience.

---

# UC-04 View Experience

## Tujuan

Mengimplementasikan fitur View Experience yang menampilkan pengalaman owner (internship, work, organization, atau freelance) dalam urutan kronologis terbalik. Implementasi mencakup model Experience, seed data, utilitas format tanggal, service, endpoint GET /api/experiences, serta Experience section pada halaman Home.

---

## Initial State

Pada tahap ini, project diasumsikan telah menyelesaikan UC-01 sampai UC-03 dengan kondisi:

- Database, Prisma, seed script, dan shared library telah tersedia.
- Table Profile, SkillCategory, dan Skill telah tersedia.
- Hero, About, dan Skills telah tampil pada halaman Home.
- Reveal, SectionHeading, EmptyState, dan Tag telah tersedia.
- Table Experience belum dibuat.

---

## Dependencies

UC-04 View Experience bergantung pada:

- PostgreSQL dan Prisma telah dikonfigurasi (UC-01).
- Seed script dan struktur seed-data (UC-01).
- lib/api-response.ts dan lib/errors.ts (UC-01).
- Reveal, SectionHeading, dan EmptyState (UC-01 sampai UC-03).
- Experience model, repository, service, Route Handler, dan lib/format-date.ts akan dibuat di UC-04.

---

## Implementation Steps

### Pembuatan Model Experience

- [ ] Tambahkan model Experience pada prisma/schema.prisma.
- [ ] Tambahkan field: id (PK, auto increment), organization, role, type, location (nullable), startDate (Date), endDate (Date, nullable), highlights (String array).
- [ ] Jalankan Prisma migration.
- [ ] Verifikasi model sesuai dengan Database Design pada PRD_PORTFOLIO.md Bab 9.

### Pembuatan Seed Data Experience

- [ ] Buat prisma/seed-data/experiences.ts berisi data pengalaman owner (type misal: Internship, Work, Organization, Freelance).
- [ ] Update prisma/seed.ts untuk menjalankan seed experiences.
- [ ] Gunakan identifier stabil (misal: id eksplisit pada seed data) dengan upsert agar seed idempotent.
- [ ] Tambahkan validasi pada seed: organization dan role tidak boleh kosong.
- [ ] Tambahkan validasi pada seed: endDate, jika ada, tidak boleh lebih awal dari startDate.
- [ ] Jalankan seed dan verifikasi data tersimpan tanpa duplikasi.

### Pembuatan DTO

- [ ] Buat ExperienceDto pada src/types.
- [ ] Tambahkan field: id, organization, role, type, location, startDate, endDate, highlights.

### Pembuatan Mapper

- [ ] Buat ExperienceMapper pada src/mappers.
- [ ] Convert entity ke ExperienceDto dengan tanggal dalam format ISO 8601 (YYYY-MM-DD).

### Pembuatan Repository

- [ ] Buat ExperienceRepository pada src/repositories.
- [ ] Implementasi method untuk membaca seluruh Experience menggunakan Prisma.

### Pembuatan Service

- [ ] Buat ExperienceService pada src/services.
- [ ] Implementasi method getExperiences().
- [ ] Urutkan data berdasarkan startDate descending (terbaru lebih dulu).
- [ ] Convert hasil menggunakan ExperienceMapper dan return array ExperienceDto.

### Pembuatan Utilitas Format Tanggal

- [ ] Buat lib/format-date.ts.
- [ ] Implementasi fungsi format periode: bulan dan tahun (misal: "Jan 2025 – Present").
- [ ] Tampilkan "Present" jika endDate bernilai null.
- [ ] Utilitas ini dipakai bersama oleh Experience dan Education.

### Pembuatan Route Handler

- [ ] Buat src/app/api/experiences/route.ts dengan handler GET saja.
- [ ] Panggil ExperienceService.getExperiences().
- [ ] Return HTTP 200 dengan format response sukses standar (data berupa array).
- [ ] Return array kosong dengan HTTP 200 jika tidak ada data.
- [ ] Tangani error melalui utilitas konversi error.
- [ ] Verifikasi method selain GET menghasilkan HTTP 405.

### Frontend Experience Component

- [ ] Buat Experience.tsx pada src/components/sections sebagai Server Component yang memanggil ExperienceService.
- [ ] Beri id="experience" pada section agar anchor `/#experience` berfungsi.
- [ ] Gunakan SectionHeading untuk judul section.
- [ ] Tampilkan organization, role, type, period, location (jika ada), dan highlights sebagai list.
- [ ] Tampilkan period menggunakan lib/format-date.ts.
- [ ] Tampilkan EmptyState jika tidak ada data.
- [ ] Bungkus dengan Reveal untuk animasi scroll reveal.
- [ ] Pastikan layout responsive di mobile, tablet, dan desktop.

### Frontend Home Page Update

- [ ] Tambahkan Experience pada page.tsx setelah Skills sebagai section keempat sementara waktu.
- [ ] Sisakan posisi antara Skills dan Experience untuk Projects yang akan disisipkan pada UC-06 sesuai urutan akhir: Hero, About, Skills, Projects, Experience, Education.
- [ ] Verifikasi link Experience pada Navbar menggulir ke section Experience.

### Testing Backend

- [ ] Test endpoint GET /api/experiences: return HTTP 200 dengan array Experience.
- [ ] Test urutan startDate descending.
- [ ] Test tanggal pada response menggunakan format ISO 8601 dan endDate null untuk pengalaman berjalan.
- [ ] Test dengan table kosong: return HTTP 200 dengan array kosong.
- [ ] Test method selain GET: return HTTP 405.
- [ ] Test dengan database tidak tersedia: return HTTP 500 dengan pesan generik.
- [ ] Test seed berulang tidak menghasilkan duplikasi.

### Testing Frontend

- [ ] Test Experience section menampilkan data dengan benar dan urut dari terbaru.
- [ ] Test pengalaman berjalan menampilkan "Present".
- [ ] Test period tampil dalam format bulan dan tahun.
- [ ] Test highlights tampil sebagai list.
- [ ] Test EmptyState tampil jika tidak ada data.
- [ ] Test link Experience pada Navbar menggulir ke section yang benar.
- [ ] Test UI responsive di berbagai ukuran layar.

---

## Database Tasks

- [ ] Buat model Experience dengan field sesuai Database Design.
- [ ] Verifikasi table Experience ter-create dengan benar.
- [ ] Verifikasi field endDate dapat bernilai null.
- [ ] Verifikasi field highlights menyimpan array string.
- [ ] Insert seed data experiences dan verifikasi dapat di-query dengan benar.

---

## Backend Tasks

- [ ] Implementasi model Experience.
- [ ] Implementasi ExperienceDto.
- [ ] Implementasi ExperienceMapper.
- [ ] Implementasi ExperienceRepository.
- [ ] Implementasi ExperienceService dengan method getExperiences.
- [ ] Implementasi Route Handler GET /api/experiences.
- [ ] Implementasi lib/format-date.ts.
- [ ] Implementasi seed experiences.

---

## API Tasks

- [ ] Implementasi endpoint GET /api/experiences.
- [ ] Endpoint tidak memerlukan autentikasi.
- [ ] Endpoint return HTTP 200 dengan array ExperienceDto terurut startDate descending.
- [ ] Endpoint return array kosong jika tidak ada data.
- [ ] Endpoint return HTTP 405 untuk method selain GET.
- [ ] Endpoint return HTTP 500 jika system error.
- [ ] Tanggal pada response menggunakan ISO 8601 (YYYY-MM-DD).

---

## Frontend Tasks

- [ ] Implementasi Experience.tsx.
- [ ] Implementasi lib/format-date.ts.
- [ ] Update halaman Home untuk menambahkan Experience.
- [ ] Implementasi scroll reveal animation pada Experience.
- [ ] Implementasi tampilan responsive.

---

## Business Rules

- [ ] Experience diurutkan berdasarkan startDate descending.
- [ ] endDate bernilai null ditampilkan sebagai "Present".
- [ ] Period ditampilkan sebagai bulan dan tahun.
- [ ] Highlights ditampilkan sebagai list.
- [ ] Format tanggal dilakukan di frontend dari nilai ISO date.

---

## Validation Rules

- [ ] endDate, jika ada, tidak boleh lebih awal dari startDate.
- [ ] Organization tidak boleh kosong.
- [ ] Role tidak boleh kosong.

---

## Use Case Boundary

Saat mengerjakan UC-04 View Experience, implementasi yang boleh dilakukan:

- [ ] Pembuatan model Experience beserta migration.
- [ ] Pembuatan seed data experiences.
- [ ] Implementasi fitur View Experience (service dan frontend).
- [ ] Pembuatan Route Handler GET /api/experiences.
- [ ] Pembuatan lib/format-date.ts.

Implementasi yang TIDAK BOLEH dilakukan pada UC-04:

- [ ] Implementasi Education (akan dikerjakan di UC-05).
- [ ] Implementasi Project (UC-06 dan UC-07).
- [ ] Implementasi Theme toggle (UC-08).
- [ ] Implementasi fitur edit atau input pengalaman melalui UI.
- [ ] Implementasi fitur lain yang tidak berhubungan dengan View Experience.

---

## Acceptance Criteria

- [ ] Experience ditampilkan dari yang terbaru hingga terlama.
- [ ] Pengalaman berjalan menampilkan "Present".
- [ ] Highlights ditampilkan sebagai list.
- [ ] Empty state ditampilkan jika tidak ada data.
- [ ] Endpoint GET /api/experiences berfungsi sesuai API Specification.
- [ ] Section responsive dan memiliki animasi scroll reveal.

---

## Testing Checklist

### Positive Case

- [ ] Experience tampil dan terurut dengan benar.
- [ ] Period diformat dengan benar.
- [ ] Response GET /api/experiences return HTTP 200 dengan array.

### Negative Case

- [ ] Data kosong menampilkan EmptyState dan API return array kosong.
- [ ] Method selain GET return HTTP 405.

### Validation Case

- [ ] Seed dengan endDate lebih awal dari startDate ditolak.
- [ ] Seed dengan organization atau role kosong ditolak.

### Error Case

- [ ] Database connection error di-handle dengan baik.
- [ ] Unexpected error return HTTP 500 dengan pesan generik.

---

## Completion State

Setelah UC-04 View Experience selesai, kondisi project adalah:

- [ ] Table Experience telah dibuat dan berisi seed data.
- [ ] Endpoint GET /api/experiences berfungsi dan teruji.
- [ ] Experience section berfungsi dan teruji pada halaman Home.
- [ ] lib/format-date.ts siap digunakan ulang oleh Education.
- [ ] Project siap untuk implementasi UC-05 View Education.

---

# UC-05 View Education

## Tujuan

Mengimplementasikan fitur View Education yang menampilkan riwayat pendidikan owner dalam urutan kronologis terbalik. Implementasi mencakup model Education, seed data, service, endpoint GET /api/education, serta Education section pada halaman Home.

---

## Initial State

Pada tahap ini, project diasumsikan telah menyelesaikan UC-01 sampai UC-04 dengan kondisi:

- Database, Prisma, seed script, dan shared library telah tersedia.
- Table Profile, SkillCategory, Skill, dan Experience telah tersedia.
- Hero, About, Skills, dan Experience telah tampil pada halaman Home.
- Reveal, SectionHeading, EmptyState, Tag, dan lib/format-date.ts telah tersedia.
- Table Education belum dibuat.

---

## Dependencies

UC-05 View Education bergantung pada:

- PostgreSQL dan Prisma telah dikonfigurasi (UC-01).
- Seed script dan struktur seed-data (UC-01).
- lib/api-response.ts dan lib/errors.ts (UC-01).
- lib/format-date.ts (UC-04).
- Reveal, SectionHeading, dan EmptyState (UC-01 sampai UC-03).
- Education model, repository, service, dan Route Handler akan dibuat di UC-05.

---

## Implementation Steps

### Pembuatan Model Education

- [ ] Tambahkan model Education pada prisma/schema.prisma.
- [ ] Tambahkan field: id (PK, auto increment), institution, degree, fieldOfStudy, startDate (Date), endDate (Date, nullable), description (Text, nullable).
- [ ] Jalankan Prisma migration.
- [ ] Verifikasi model sesuai dengan Database Design pada PRD_PORTFOLIO.md Bab 9.

### Pembuatan Seed Data Education

- [ ] Buat prisma/seed-data/education.ts berisi riwayat pendidikan owner.
- [ ] Update prisma/seed.ts untuk menjalankan seed education.
- [ ] Gunakan identifier stabil (misal: id eksplisit pada seed data) dengan upsert agar seed idempotent.
- [ ] Tambahkan validasi pada seed: institution dan degree tidak boleh kosong.
- [ ] Tambahkan validasi pada seed: endDate, jika ada, tidak boleh lebih awal dari startDate.
- [ ] Jalankan seed dan verifikasi data tersimpan tanpa duplikasi.

### Pembuatan DTO

- [ ] Buat EducationDto pada src/types.
- [ ] Tambahkan field: id, institution, degree, fieldOfStudy, startDate, endDate, description.

### Pembuatan Mapper

- [ ] Buat EducationMapper pada src/mappers.
- [ ] Convert entity ke EducationDto dengan tanggal dalam format ISO 8601 (YYYY-MM-DD).

### Pembuatan Repository

- [ ] Buat EducationRepository pada src/repositories.
- [ ] Implementasi method untuk membaca seluruh Education menggunakan Prisma.

### Pembuatan Service

- [ ] Buat EducationService pada src/services.
- [ ] Implementasi method getEducation().
- [ ] Urutkan data berdasarkan startDate descending (terbaru lebih dulu).
- [ ] Convert hasil menggunakan EducationMapper dan return array EducationDto.

### Pembuatan Route Handler

- [ ] Buat src/app/api/education/route.ts dengan handler GET saja.
- [ ] Panggil EducationService.getEducation().
- [ ] Return HTTP 200 dengan format response sukses standar (data berupa array).
- [ ] Return array kosong dengan HTTP 200 jika tidak ada data.
- [ ] Tangani error melalui utilitas konversi error.
- [ ] Verifikasi method selain GET menghasilkan HTTP 405.

### Frontend Education Component

- [ ] Buat Education.tsx pada src/components/sections sebagai Server Component yang memanggil EducationService.
- [ ] Beri id="education" pada section agar anchor `/#education` berfungsi.
- [ ] Gunakan SectionHeading untuk judul section.
- [ ] Tampilkan institution, degree, fieldOfStudy, dan period menggunakan lib/format-date.ts.
- [ ] Tampilkan description hanya jika memiliki nilai.
- [ ] Tampilkan "Present" jika endDate bernilai null.
- [ ] Tampilkan EmptyState jika tidak ada data.
- [ ] Bungkus dengan Reveal untuk animasi scroll reveal.
- [ ] Pastikan layout responsive di mobile, tablet, dan desktop.

### Frontend Home Page Update

- [ ] Tambahkan Education sebagai section terakhir setelah Experience pada page.tsx.
- [ ] Verifikasi link Education pada Navbar menggulir ke section Education.

### Testing Backend

- [ ] Test endpoint GET /api/education: return HTTP 200 dengan array Education.
- [ ] Test urutan startDate descending.
- [ ] Test tanggal pada response menggunakan format ISO 8601 dan endDate null untuk pendidikan berjalan.
- [ ] Test dengan table kosong: return HTTP 200 dengan array kosong.
- [ ] Test method selain GET: return HTTP 405.
- [ ] Test dengan database tidak tersedia: return HTTP 500 dengan pesan generik.
- [ ] Test seed berulang tidak menghasilkan duplikasi.

### Testing Frontend

- [ ] Test Education section menampilkan data dengan benar dan urut dari terbaru.
- [ ] Test pendidikan berjalan menampilkan "Present".
- [ ] Test description hanya tampil jika tersedia.
- [ ] Test EmptyState tampil jika tidak ada data.
- [ ] Test link Education pada Navbar menggulir ke section yang benar.
- [ ] Test UI responsive di berbagai ukuran layar.

---

## Database Tasks

- [ ] Buat model Education dengan field sesuai Database Design.
- [ ] Verifikasi table Education ter-create dengan benar.
- [ ] Verifikasi field endDate dan description dapat bernilai null.
- [ ] Insert seed data education dan verifikasi dapat di-query dengan benar.

---

## Backend Tasks

- [ ] Implementasi model Education.
- [ ] Implementasi EducationDto.
- [ ] Implementasi EducationMapper.
- [ ] Implementasi EducationRepository.
- [ ] Implementasi EducationService dengan method getEducation.
- [ ] Implementasi Route Handler GET /api/education.
- [ ] Implementasi seed education.

---

## API Tasks

- [ ] Implementasi endpoint GET /api/education.
- [ ] Endpoint tidak memerlukan autentikasi.
- [ ] Endpoint return HTTP 200 dengan array EducationDto terurut startDate descending.
- [ ] Endpoint return array kosong jika tidak ada data.
- [ ] Endpoint return HTTP 405 untuk method selain GET.
- [ ] Endpoint return HTTP 500 jika system error.
- [ ] Tanggal pada response menggunakan ISO 8601 (YYYY-MM-DD).

---

## Frontend Tasks

- [ ] Implementasi Education.tsx.
- [ ] Update halaman Home untuk menambahkan Education.
- [ ] Implementasi scroll reveal animation pada Education.
- [ ] Implementasi tampilan responsive.

---

## Business Rules

- [ ] Education diurutkan berdasarkan startDate descending.
- [ ] endDate bernilai null ditampilkan sebagai "Present".
- [ ] Description hanya ditampilkan jika memiliki nilai.
- [ ] Aturan format tanggal sama dengan Experience.

---

## Validation Rules

- [ ] endDate, jika ada, tidak boleh lebih awal dari startDate.
- [ ] Institution tidak boleh kosong.
- [ ] Degree tidak boleh kosong.

---

## Use Case Boundary

Saat mengerjakan UC-05 View Education, implementasi yang boleh dilakukan:

- [ ] Pembuatan model Education beserta migration.
- [ ] Pembuatan seed data education.
- [ ] Implementasi fitur View Education (service dan frontend).
- [ ] Pembuatan Route Handler GET /api/education.

Implementasi yang TIDAK BOLEH dilakukan pada UC-05:

- [ ] Implementasi Project (UC-06 dan UC-07).
- [ ] Implementasi Theme toggle (UC-08).
- [ ] Implementasi Certificates atau Achievements section.
- [ ] Implementasi fitur edit atau input pendidikan melalui UI.
- [ ] Implementasi fitur lain yang tidak berhubungan dengan View Education.

---

## Acceptance Criteria

- [ ] Education ditampilkan dari yang terbaru hingga terlama.
- [ ] Pendidikan berjalan menampilkan "Present".
- [ ] Description opsional hanya tampil jika tersedia.
- [ ] Empty state ditampilkan jika tidak ada data.
- [ ] Endpoint GET /api/education berfungsi sesuai API Specification.
- [ ] Section responsive dan memiliki animasi scroll reveal.

---

## Testing Checklist

### Positive Case

- [ ] Education tampil dan terurut dengan benar.
- [ ] Period diformat dengan benar.
- [ ] Response GET /api/education return HTTP 200 dengan array.

### Negative Case

- [ ] Data kosong menampilkan EmptyState dan API return array kosong.
- [ ] Description kosong tidak ditampilkan dan layout tidak rusak.
- [ ] Method selain GET return HTTP 405.

### Validation Case

- [ ] Seed dengan endDate lebih awal dari startDate ditolak.
- [ ] Seed dengan institution atau degree kosong ditolak.

### Error Case

- [ ] Database connection error di-handle dengan baik.
- [ ] Unexpected error return HTTP 500 dengan pesan generik.

---

## Completion State

Setelah UC-05 View Education selesai, kondisi project adalah:

- [ ] Table Education telah dibuat dan berisi seed data.
- [ ] Endpoint GET /api/education berfungsi dan teruji.
- [ ] Education section berfungsi dan teruji pada halaman Home.
- [ ] Background module (Experience dan Education) selesai.
- [ ] Project siap untuk implementasi UC-06 View Project List.

---

# UC-06 View Project List

## Tujuan

Mengimplementasikan fitur View Project List yang menampilkan seluruh project sebagai kartu preview pada Projects section di halaman Home. Daftar berupa plain list tanpa search, filter, sorting control, maupun pagination. Implementasi mencakup model Project, seed data, service, endpoint GET /api/projects, serta ProjectCard dan Projects section.

---

## Initial State

Pada tahap ini, project diasumsikan telah menyelesaikan UC-01 sampai UC-05 dengan kondisi:

- Database, Prisma, seed script, dan shared library telah tersedia.
- Table Profile, SkillCategory, Skill, Experience, dan Education telah tersedia.
- Hero, About, Skills, Experience, dan Education telah tampil pada halaman Home.
- Reveal, SectionHeading, EmptyState, dan Tag telah tersedia.
- Table Project belum dibuat.
- Halaman detail project belum tersedia.

---

## Dependencies

UC-06 View Project List bergantung pada:

- PostgreSQL dan Prisma telah dikonfigurasi (UC-01).
- Seed script dan struktur seed-data (UC-01).
- lib/api-response.ts dan lib/errors.ts (UC-01).
- Reveal, SectionHeading, EmptyState, dan Tag (UC-01 sampai UC-03).
- File thumbnail pada public/images/projects/{slug}/.
- Project model, repository, service, Route Handler, ProjectCard, dan Projects section akan dibuat di UC-06.

---

## Implementation Steps

### Pembuatan Model Project

- [ ] Tambahkan model Project pada prisma/schema.prisma.
- [ ] Tambahkan field: id (PK, auto increment), slug (unique), title, shortDescription (maksimal 200 karakter), description (Text), role, year (Int), techStack (String array), thumbnailUrl, demoUrl (nullable), repoUrl (nullable), displayOrder, createdAt (default now), updatedAt (auto update).
- [ ] Tambahkan unique index pada slug.
- [ ] Jalankan Prisma migration.
- [ ] Verifikasi model sesuai dengan Database Design pada PRD_PORTFOLIO.md Bab 9.

### Persiapan Thumbnail Project

- [ ] Simpan file thumbnail setiap project pada public/images/projects/{slug}/.
- [ ] Pastikan thumbnailUrl pada seed menunjuk ke file yang benar-benar ada.

### Pembuatan Seed Data Projects

- [ ] Buat prisma/seed-data/projects.ts berisi project milik owner lengkap dengan slug, title, shortDescription, description, role, year, techStack, thumbnailUrl, demoUrl, repoUrl, dan displayOrder.
- [ ] Update prisma/seed.ts untuk menjalankan seed projects.
- [ ] Gunakan upsert berdasarkan slug agar seed idempotent.
- [ ] Tambahkan validasi pada seed: slug harus sesuai pola `^[a-z0-9]+(?:-[a-z0-9]+)*$` dan unik.
- [ ] Tambahkan validasi pada seed: shortDescription tidak lebih dari 200 karakter.
- [ ] Tambahkan validasi pada seed: demoUrl dan repoUrl, jika diisi, harus berupa absolute URL.
- [ ] Jalankan seed dan verifikasi data tersimpan tanpa duplikasi.

### Pembuatan DTO

- [ ] Buat ProjectListItemDto pada src/types.
- [ ] Tambahkan field: slug, title, shortDescription, thumbnailUrl, techStack.
- [ ] Jangan sertakan field internal (id, displayOrder, createdAt, updatedAt) pada DTO.

### Pembuatan Mapper

- [ ] Buat ProjectMapper pada src/mappers.
- [ ] Buat method untuk convert entity Project ke ProjectListItemDto.

### Pembuatan Repository

- [ ] Buat ProjectRepository pada src/repositories.
- [ ] Implementasi method untuk membaca seluruh Project menggunakan Prisma.

### Pembuatan Service

- [ ] Buat ProjectService pada src/services.
- [ ] Implementasi method getProjectList().
- [ ] Urutkan data berdasarkan displayOrder ascending.
- [ ] Convert hasil menggunakan ProjectMapper dan return array ProjectListItemDto.

### Pembuatan Route Handler

- [ ] Buat src/app/api/projects/route.ts dengan handler GET saja.
- [ ] Panggil ProjectService.getProjectList().
- [ ] Return HTTP 200 dengan format response sukses standar (data berupa array).
- [ ] Return array kosong dengan HTTP 200 jika tidak ada data.
- [ ] Tangani error melalui utilitas konversi error.
- [ ] Verifikasi method selain GET menghasilkan HTTP 405.

### Frontend ProjectCard Component

- [ ] Buat ProjectCard.tsx pada src/components/projects.
- [ ] Props: data project (slug, title, shortDescription, thumbnailUrl, techStack).
- [ ] Tampilkan thumbnail menggunakan komponen image Next.js, title, short description, dan tech stack menggunakan Tag.
- [ ] Jadikan seluruh kartu sebagai link ke `/projects/{slug}`.
- [ ] Tambahkan animasi hover yang hanya aktif pada perangkat yang mendukung hover.
- [ ] Pastikan thumbnail tidak menyebabkan layout shift.
- [ ] Pastikan layout responsive.

### Frontend Projects Component

- [ ] Buat Projects.tsx pada src/components/sections sebagai Server Component yang memanggil ProjectService.getProjectList().
- [ ] Beri id="projects" pada section agar anchor `/#projects` berfungsi.
- [ ] Gunakan SectionHeading untuk judul section.
- [ ] Tampilkan seluruh project sebagai ProjectCard dalam plain list (grid atau list).
- [ ] Jangan tambahkan search, filter, sorting control, maupun pagination.
- [ ] Tampilkan EmptyState jika tidak ada project.
- [ ] Bungkus dengan Reveal untuk animasi scroll reveal.
- [ ] Pastikan layout responsive di mobile, tablet, dan desktop.

### Frontend Home Page Update

- [ ] Tambahkan Projects pada page.tsx setelah Skills dan sebelum Experience sesuai urutan: Hero, About, Skills, Projects, Experience, Education.
- [ ] Verifikasi link Projects pada Navbar menggulir ke section Projects.
- [ ] Pastikan tidak ada route `/projects` terpisah untuk daftar project.

### Testing Backend

- [ ] Test endpoint GET /api/projects: return HTTP 200 dengan array ProjectListItemDto.
- [ ] Test urutan sesuai displayOrder ascending.
- [ ] Test response tidak memuat field internal.
- [ ] Test dengan table kosong: return HTTP 200 dengan array kosong.
- [ ] Test method selain GET: return HTTP 405.
- [ ] Test dengan database tidak tersedia: return HTTP 500 dengan pesan generik.
- [ ] Test seed berulang tidak menghasilkan duplikasi.

### Testing Frontend

- [ ] Test Projects section menampilkan seluruh project sebagai kartu.
- [ ] Test setiap kartu menampilkan thumbnail, title, short description, dan tech stack.
- [ ] Test urutan kartu sesuai displayOrder.
- [ ] Test seluruh kartu dapat diklik dan menuju `/projects/{slug}` (halaman detail diuji penuh di UC-07).
- [ ] Test animasi hover dan scroll reveal berjalan, serta tidak berjalan saat prefers-reduced-motion aktif.
- [ ] Test EmptyState tampil jika tidak ada project.
- [ ] Test tidak ada UI search, filter, atau pagination.
- [ ] Test UI responsive di berbagai ukuran layar.

---

## Database Tasks

- [ ] Buat model Project dengan field sesuai Database Design.
- [ ] Verifikasi table Project ter-create dengan benar.
- [ ] Verifikasi unique index pada slug berfungsi.
- [ ] Verifikasi field demoUrl dan repoUrl dapat bernilai null.
- [ ] Verifikasi field techStack menyimpan array string.
- [ ] Insert seed data projects dan verifikasi dapat di-query dengan benar.

---

## Backend Tasks

- [ ] Implementasi model Project.
- [ ] Implementasi ProjectListItemDto.
- [ ] Implementasi ProjectMapper.
- [ ] Implementasi ProjectRepository.
- [ ] Implementasi ProjectService dengan method getProjectList.
- [ ] Implementasi Route Handler GET /api/projects.
- [ ] Implementasi seed projects.

---

## API Tasks

- [ ] Implementasi endpoint GET /api/projects.
- [ ] Endpoint tidak memerlukan autentikasi.
- [ ] Endpoint return HTTP 200 dengan array ProjectListItemDto terurut displayOrder.
- [ ] Endpoint return array kosong jika tidak ada data.
- [ ] Endpoint return HTTP 405 untuk method selain GET.
- [ ] Endpoint return HTTP 500 jika system error.

---

## Frontend Tasks

- [ ] Implementasi ProjectCard.tsx.
- [ ] Implementasi Projects.tsx.
- [ ] Update halaman Home untuk menambahkan Projects pada urutan yang benar.
- [ ] Implementasi hover animation dan scroll reveal animation.
- [ ] Implementasi tampilan responsive.

---

## Business Rules

- [ ] Kartu hanya berfungsi sebagai preview; informasi lengkap berada di halaman detail.
- [ ] Project diurutkan berdasarkan displayOrder ascending.
- [ ] Seluruh kartu adalah link ke halaman detail project.
- [ ] Tidak ada search, filter, sorting control, atau pagination.
- [ ] Setiap project memiliki slug yang unik.

---

## Validation Rules

- [ ] Setiap project harus memiliki slug yang valid dan unik.
- [ ] Short description tidak lebih dari 200 karakter.
- [ ] Path thumbnail harus menunjuk ke file yang ada di public/.
- [ ] URL demo dan repository, jika diisi, harus berupa absolute URL.

---

## Use Case Boundary

Saat mengerjakan UC-06 View Project List, implementasi yang boleh dilakukan:

- [ ] Pembuatan model Project beserta migration.
- [ ] Pembuatan seed data projects.
- [ ] Implementasi fitur View Project List (service dan frontend).
- [ ] Pembuatan Route Handler GET /api/projects.
- [ ] Pembuatan ProjectCard dan Projects section.

Implementasi yang TIDAK BOLEH dilakukan pada UC-06:

- [ ] Implementasi halaman Project Detail, ProjectImage, atau endpoint GET /api/projects/{slug} (akan dikerjakan di UC-07).
- [ ] Implementasi Theme toggle (UC-08).
- [ ] Implementasi search, filter, sorting UI, atau pagination.
- [ ] Implementasi route `/projects` terpisah untuk daftar project.
- [ ] Implementasi fitur lain yang tidak berhubungan dengan View Project List.

---

## Acceptance Criteria

- [ ] Seluruh project ditampilkan sebagai kartu sesuai displayOrder.
- [ ] Setiap kartu menampilkan thumbnail, title, short description, dan tech stack.
- [ ] Klik kartu menuju URL detail project yang benar.
- [ ] Empty state ditampilkan jika tidak ada project.
- [ ] Tidak ada UI search, filter, atau pagination.
- [ ] Endpoint GET /api/projects berfungsi sesuai API Specification.
- [ ] Section responsive dan memiliki animasi.

---

## Testing Checklist

### Positive Case

- [ ] Seluruh project tampil sebagai kartu.
- [ ] Data kartu sesuai seed.
- [ ] Response GET /api/projects return HTTP 200 dengan array.

### Negative Case

- [ ] Data kosong menampilkan EmptyState dan API return array kosong.
- [ ] Method selain GET return HTTP 405.

### Validation Case

- [ ] Seed dengan slug tidak valid atau duplikat ditolak.
- [ ] Seed dengan shortDescription lebih dari 200 karakter ditolak.
- [ ] Seed dengan URL demo atau repository tidak valid ditolak.

### Error Case

- [ ] Database connection error di-handle dengan baik.
- [ ] Unexpected error return HTTP 500 dengan pesan generik.

---

## Completion State

Setelah UC-06 View Project List selesai, kondisi project adalah:

- [ ] Table Project telah dibuat dan berisi seed data.
- [ ] Endpoint GET /api/projects berfungsi dan teruji.
- [ ] Projects section dan ProjectCard berfungsi dan teruji pada halaman Home.
- [ ] Urutan section pada Home telah lengkap: Hero, About, Skills, Projects, Experience, Education.
- [ ] Project siap untuk implementasi UC-07 View Project Detail.

---

# UC-07 View Project Detail

## Tujuan

Mengimplementasikan fitur View Project Detail yang menampilkan informasi lengkap satu project pada halaman tersendiri (`/projects/{slug}`), termasuk galeri gambar dan link Demo/Repository. Implementasi mencakup model ProjectImage, validasi slug, endpoint GET /api/projects/{slug}, halaman detail, serta halaman Not Found.

---

## Initial State

Pada tahap ini, project diasumsikan telah menyelesaikan UC-01 sampai UC-06 dengan kondisi:

- Table Project telah tersedia dan berisi seed data.
- ProjectRepository, ProjectService (getProjectList), ProjectMapper, dan Route Handler GET /api/projects telah tersedia.
- ProjectCard telah menautkan setiap kartu ke `/projects/{slug}`.
- lib/errors.ts hanya memiliki AppError dan NotFoundError.
- Table ProjectImage belum dibuat.
- Halaman detail project dan not-found.tsx belum tersedia.

---

## Dependencies

UC-07 View Project Detail bergantung pada:

- Model Project, ProjectRepository, ProjectService, dan ProjectMapper (UC-06).
- lib/api-response.ts dan lib/errors.ts (UC-01).
- Reveal, Tag, dan ErrorState (UC-01 sampai UC-03).
- File gambar galeri pada public/images/projects/{slug}/.
- ProjectImage model, validators.ts, ProjectGallery, ProjectLinks, halaman detail, dan not-found.tsx akan dibuat di UC-07.

---

## Implementation Steps

### Pembuatan Model ProjectImage

- [ ] Tambahkan model ProjectImage pada prisma/schema.prisma.
- [ ] Tambahkan field: id (PK, auto increment), projectId (FK ke Project), imageUrl, altText, displayOrder.
- [ ] Tambahkan relasi One to Many: Project ke ProjectImage dengan cascade delete.
- [ ] Jalankan Prisma migration.
- [ ] Verifikasi model sesuai dengan Database Design pada PRD_PORTFOLIO.md Bab 9.

### Pembuatan Seed Data Project Images

- [ ] Simpan file gambar galeri pada public/images/projects/{slug}/.
- [ ] Update prisma/seed-data/projects.ts agar setiap project memiliki daftar gambar (imageUrl, altText, displayOrder).
- [ ] Update prisma/seed.ts untuk menyimpan ProjectImage menggunakan identifier stabil (misal: id eksplisit) dengan upsert agar seed idempotent.
- [ ] Tambahkan validasi pada seed: path gambar harus menunjuk ke file yang ada dan altText tidak boleh kosong.
- [ ] Jalankan seed dan verifikasi gambar tersimpan tanpa duplikasi.

### Pembuatan DTO

- [ ] Buat ProjectDetailDto pada src/types.
- [ ] Tambahkan field: slug, title, shortDescription, description, role, year, techStack, thumbnailUrl, demoUrl, repoUrl, images (array berisi imageUrl dan altText).
- [ ] Jangan sertakan field internal (id, displayOrder, createdAt, updatedAt).

### Pembuatan Mapper

- [ ] Update ProjectMapper dengan method untuk convert entity Project beserta ProjectImage ke ProjectDetailDto.

### Pembuatan Repository

- [ ] Update ProjectRepository dengan method membaca Project berdasarkan slug beserta ProjectImage menggunakan Prisma.
- [ ] Urutkan ProjectImage berdasarkan displayOrder ascending.

### Pembuatan Validator dan Custom Error

- [ ] Buat lib/validators.ts berisi validasi slug dengan pola `^[a-z0-9]+(?:-[a-z0-9]+)*$`.
- [ ] Update lib/errors.ts dengan BadRequestError.
- [ ] Update utilitas konversi error: BadRequestError menjadi HTTP 400 (BAD_REQUEST).

### Pembuatan Service

- [ ] Update ProjectService dengan method getProjectBySlug(slug).
- [ ] Lempar NotFoundError jika project tidak ditemukan.
- [ ] Convert hasil menggunakan ProjectMapper dan return ProjectDetailDto.

### Pembuatan Route Handler

- [ ] Buat src/app/api/projects/[slug]/route.ts dengan handler GET saja.
- [ ] Validasi slug menggunakan validators.ts; jika tidak valid, return HTTP 400.
- [ ] Panggil ProjectService.getProjectBySlug(slug).
- [ ] Return HTTP 200 dengan format response sukses standar.
- [ ] Return HTTP 404 dengan code NOT_FOUND jika project tidak ditemukan.
- [ ] Verifikasi method selain GET menghasilkan HTTP 405.

### Frontend ProjectGallery dan ProjectLinks Component

- [ ] Buat ProjectGallery.tsx pada src/components/projects untuk menampilkan seluruh gambar galeri sesuai urutan menggunakan komponen image Next.js dengan altText.
- [ ] Buat ProjectLinks.tsx pada src/components/projects untuk menampilkan tombol Demo dan Repository.
- [ ] Tampilkan tombol hanya jika URL-nya tersedia.
- [ ] Link dibuka pada tab baru dengan rel="noopener noreferrer".

### Frontend Project Detail Page

- [ ] Buat src/app/projects/[slug]/page.tsx sebagai Server Component.
- [ ] Validasi format slug; jika tidak valid, panggil notFound().
- [ ] Ambil data melalui ProjectService.getProjectBySlug(); jika tidak ditemukan, panggil notFound().
- [ ] Tambahkan generateStaticParams menggunakan daftar slug project.
- [ ] Tambahkan generateMetadata agar page title deskriptif berdasarkan title project.
- [ ] Tampilkan title, year, role, tech stack (menggunakan Tag), description, dan galeri.
- [ ] Tampilkan description sebagai plain text dengan paragraf yang dipisahkan baris kosong tetap terjaga.
- [ ] Tampilkan ProjectLinks jika tersedia.
- [ ] Tambahkan link "Back to Projects" menuju `/#projects`.
- [ ] Terapkan animasi menggunakan Reveal.
- [ ] Pastikan halaman responsive di mobile, tablet, dan desktop.

### Frontend Not Found Page

- [ ] Buat src/app/not-found.tsx berisi pesan Not Found dan link kembali ke Home.
- [ ] Pastikan halaman ini muncul untuk slug tidak valid, slug tidak ditemukan, dan route yang tidak dikenal.
- [ ] Pastikan halaman memiliki page title yang deskriptif.
- [ ] Pastikan slug tidak ditemukan menghasilkan HTTP 404.

### Testing Backend

- [ ] Test endpoint GET /api/projects/{slug} dengan slug valid: return HTTP 200 dengan ProjectDetailDto.
- [ ] Test images terurut displayOrder dan demoUrl atau repoUrl bernilai null jika tidak ada.
- [ ] Test slug tidak valid (misal huruf besar atau karakter khusus): return HTTP 400.
- [ ] Test slug valid tetapi tidak ada: return HTTP 404 dengan code NOT_FOUND.
- [ ] Test method selain GET: return HTTP 405.
- [ ] Test dengan database tidak tersedia: return HTTP 500 dengan pesan generik.
- [ ] Test hapus Project: ProjectImage terkait ikut terhapus (cascade).
- [ ] Test seed berulang tidak menghasilkan duplikasi.

### Testing Frontend

- [ ] Test klik kartu pada Home membuka halaman detail yang benar.
- [ ] Test halaman detail menampilkan title, year, role, tech stack, description, dan galeri.
- [ ] Test paragraf description tetap terpisah.
- [ ] Test tombol Demo dan Repository hanya tampil jika URL tersedia.
- [ ] Test link eksternal terbuka pada tab baru.
- [ ] Test "Back to Projects" kembali ke section Projects pada Home.
- [ ] Test slug tidak dikenal menampilkan halaman Not Found dengan HTTP 404.
- [ ] Test route tidak dikenal menampilkan halaman Not Found.
- [ ] Test error sistem menampilkan error page.
- [ ] Test UI responsive di berbagai ukuran layar.

---

## Database Tasks

- [ ] Buat model ProjectImage dengan field sesuai Database Design.
- [ ] Verifikasi table ProjectImage ter-create dengan benar.
- [ ] Verifikasi relasi Project ke ProjectImage dan cascade delete berfungsi.
- [ ] Insert seed data gambar dan verifikasi dapat di-query dengan benar.

---

## Backend Tasks

- [ ] Implementasi model ProjectImage.
- [ ] Implementasi ProjectDetailDto.
- [ ] Update ProjectMapper, ProjectRepository, dan ProjectService.
- [ ] Implementasi lib/validators.ts dan BadRequestError.
- [ ] Implementasi Route Handler GET /api/projects/{slug}.
- [ ] Update seed untuk ProjectImage.

---

## API Tasks

- [ ] Implementasi endpoint GET /api/projects/{slug}.
- [ ] Endpoint tidak memerlukan autentikasi dan tidak menerima request body maupun query parameter.
- [ ] Endpoint return HTTP 200 dengan ProjectDetailDto jika berhasil.
- [ ] Endpoint return HTTP 400 jika slug tidak valid.
- [ ] Endpoint return HTTP 404 jika project tidak ditemukan.
- [ ] Endpoint return HTTP 405 untuk method selain GET.
- [ ] Endpoint return HTTP 500 jika system error.

---

## Frontend Tasks

- [ ] Implementasi ProjectGallery.tsx dan ProjectLinks.tsx.
- [ ] Implementasi halaman src/app/projects/[slug]/page.tsx beserta generateStaticParams dan generateMetadata.
- [ ] Implementasi not-found.tsx.
- [ ] Implementasi link "Back to Projects".
- [ ] Implementasi animasi dan tampilan responsive.

---

## Business Rules

- [ ] Setiap project memiliki halaman detail sendiri yang diidentifikasi oleh slug.
- [ ] Tombol Demo dan Repository hanya ditampilkan jika URL tersedia.
- [ ] Link eksternal dibuka pada tab baru dengan rel="noopener noreferrer".
- [ ] Gambar galeri diurutkan berdasarkan displayOrder.
- [ ] Description adalah plain text; paragraf dipisahkan oleh baris kosong.

---

## Validation Rules

- [ ] Slug harus sesuai pola `^[a-z0-9]+(?:-[a-z0-9]+)*$`.
- [ ] URL demo dan repository, jika diisi, harus berupa absolute URL.
- [ ] altText gambar tidak boleh kosong pada seed data.

---

## Use Case Boundary

Saat mengerjakan UC-07 View Project Detail, implementasi yang boleh dilakukan:

- [ ] Pembuatan model ProjectImage beserta migration dan seed.
- [ ] Implementasi fitur View Project Detail (backend dan frontend).
- [ ] Pembuatan Route Handler GET /api/projects/{slug}.
- [ ] Pembuatan validators.ts, BadRequestError, ProjectGallery, ProjectLinks, halaman detail, dan not-found.tsx.

Implementasi yang TIDAK BOLEH dilakukan pada UC-07:

- [ ] Implementasi Theme toggle (UC-08).
- [ ] Implementasi navigasi project sebelumnya atau berikutnya.
- [ ] Implementasi komentar, testimonial, view counter, atau fitur interaksi lain.
- [ ] Implementasi search, filter, atau pagination.
- [ ] Implementasi fitur lain yang tidak berhubungan dengan View Project Detail.

---

## Acceptance Criteria

- [ ] Halaman detail menampilkan seluruh field yang diperlukan.
- [ ] Link opsional hanya tampil jika tersedia.
- [ ] Galeri menampilkan seluruh gambar sesuai urutan.
- [ ] Slug tidak dikenal atau tidak valid menampilkan Not Found (HTTP 404).
- [ ] "Back to Projects" kembali ke section Projects pada Home.
- [ ] Endpoint GET /api/projects/{slug} berfungsi sesuai API Specification.
- [ ] Halaman responsive di mobile, tablet, dan desktop.

---

## Testing Checklist

### Positive Case

- [ ] Halaman detail project valid tampil dengan data lengkap.
- [ ] Galeri dan link tampil dengan benar.
- [ ] Response GET /api/projects/{slug} return HTTP 200 dengan data lengkap.
- [ ] "Back to Projects" berfungsi.

### Negative Case

- [ ] Slug tidak ditemukan menampilkan Not Found dan API return HTTP 404.
- [ ] Project tanpa demoUrl atau repoUrl tidak menampilkan tombol terkait.
- [ ] Method selain GET return HTTP 405.

### Validation Case

- [ ] Slug dengan format tidak valid menghasilkan HTTP 400 pada API.
- [ ] Slug dengan format tidak valid menampilkan Not Found pada halaman.

### Error Case

- [ ] Database connection error di-handle dengan baik.
- [ ] Unexpected error return HTTP 500 dengan pesan generik.

---

## Completion State

Setelah UC-07 View Project Detail selesai, kondisi project adalah:

- [ ] Table ProjectImage telah dibuat dan berisi seed data.
- [ ] Endpoint GET /api/projects/{slug} berfungsi dan teruji.
- [ ] Halaman Project Detail berfungsi dan teruji.
- [ ] Halaman Not Found berfungsi dan teruji.
- [ ] Project module selesai.
- [ ] Project siap untuk implementasi UC-08 Toggle Theme.

---

# UC-08 Toggle Theme

## Tujuan

Mengimplementasikan fitur Toggle Theme yang memungkinkan Visitor beralih antara dark mode dan light mode melalui toggle pada Navbar di setiap halaman. Preferensi disimpan di browser (localStorage), default mengikuti preferensi sistem operasi, dan tidak disimpan di database.

---

## Initial State

Pada tahap ini, project diasumsikan telah menyelesaikan UC-01 sampai UC-07 dengan kondisi:

- Seluruh section Home (Hero, About, Skills, Projects, Experience, Education) telah berfungsi.
- Halaman Project Detail, Not Found, dan error page telah berfungsi.
- Navbar telah memiliki ruang untuk theme toggle.
- Seluruh endpoint API telah berfungsi.
- Dark mode belum tersedia.

---

## Dependencies

UC-08 Toggle Theme bergantung pada:

- Navbar dan root layout (UC-01).
- Seluruh komponen UI dan halaman dari UC-01 sampai UC-07.
- Tailwind CSS telah terpasang.
- Visitor memiliki JavaScript aktif pada browser.
- Dependency next-themes akan dipasang di UC-08.

---

## Implementation Steps

### Persiapan Dependency dan Konfigurasi Tailwind

- [ ] Pasang dependency next-themes.
- [ ] Konfigurasi Tailwind CSS agar dark variant berbasis class `dark` pada root element (sesuai versi Tailwind yang digunakan).

### Frontend ThemeProvider

- [ ] Buat ThemeProvider.tsx pada src/components/layout sebagai Client Component berbasis next-themes.
- [ ] Atur penerapan tema melalui class pada root element.
- [ ] Atur default theme mengikuti preferensi sistem operasi.
- [ ] Atur nilai tema yang diizinkan hanya `light` dan `dark`.
- [ ] Pastikan preferensi tersimpan pada localStorage browser.
- [ ] Bungkus konten pada root layout dengan ThemeProvider.
- [ ] Tambahkan penanganan agar tidak terjadi hydration warning pada root element.
- [ ] Pastikan tema diterapkan sebelum first paint sehingga tidak terjadi flash tema yang salah.

### Frontend ThemeToggle

- [ ] Buat ThemeToggle.tsx pada src/components/layout sebagai Client Component.
- [ ] Implementasi aksi untuk beralih antara `light` dan `dark`.
- [ ] Tambahkan label aksesibilitas pada toggle.
- [ ] Hindari hydration mismatch pada indikator ikon toggle.
- [ ] Tampilkan toggle pada Navbar desktop dan pada mobile menu.
- [ ] Pastikan touch target toggle cukup besar untuk penggunaan mobile.

### Penerapan Dark Mode pada Komponen Existing

- [ ] Tambahkan dark variant pada Navbar dan Footer.
- [ ] Tambahkan dark variant pada Hero, About, Skills, Experience, Education, dan Projects.
- [ ] Tambahkan dark variant pada ProjectCard, ProjectGallery, ProjectLinks, dan halaman Project Detail.
- [ ] Tambahkan dark variant pada SectionHeading, Tag, EmptyState, ErrorState, error.tsx, dan not-found.tsx.
- [ ] Pastikan warna latar dan teks pada kedua tema mengikuti visual design yang telah diputuskan dan tetap terbaca jelas.
- [ ] Pastikan transisi tema tidak mengganggu pembacaan konten.

### Testing Frontend

- [ ] Test toggle beralih ke dark mode dan light mode secara langsung.
- [ ] Test preferensi tetap tersimpan setelah halaman di-reload.
- [ ] Test kunjungan pertama mengikuti preferensi sistem operasi.
- [ ] Test tidak ada flash tema yang salah saat halaman dimuat.
- [ ] Test toggle tersedia dan berfungsi pada halaman Home, Project Detail, Not Found, dan error page.
- [ ] Test toggle berfungsi pada Navbar desktop dan mobile menu.
- [ ] Test seluruh section dan halaman terbaca jelas pada dark mode maupun light mode.
- [ ] Test preferensi tidak dikirim atau disimpan ke database.
- [ ] Test UI responsive di berbagai ukuran layar.

---

## Database Tasks

- [ ] Tidak ada perubahan database; preferensi tema tidak disimpan di database.

---

## Backend Tasks

- [ ] Tidak ada komponen backend untuk Theme.

---

## API Tasks

- [ ] Tidak ada endpoint API untuk Theme.

---

## Frontend Tasks

- [ ] Pasang next-themes dan konfigurasi dark variant Tailwind berbasis class.
- [ ] Implementasi ThemeProvider.tsx dan integrasi pada root layout.
- [ ] Implementasi ThemeToggle.tsx dan integrasi pada Navbar.
- [ ] Terapkan dark variant pada seluruh komponen dan halaman yang telah dibuat.
- [ ] Implementasi tampilan responsive untuk toggle.

---

## Business Rules

- [ ] Default theme mengikuti preferensi sistem operasi.
- [ ] Preferensi tema hanya disimpan di browser Visitor.
- [ ] Toggle tersedia pada Navbar di setiap halaman.
- [ ] Tema diterapkan sebelum first paint untuk menghindari flash tema yang salah.

---

## Validation Rules

- [ ] Nilai tema yang diizinkan hanya `light` dan `dark`.

---

## Use Case Boundary

Saat mengerjakan UC-08 Toggle Theme, implementasi yang boleh dilakukan:

- [ ] Pemasangan next-themes dan konfigurasi dark variant Tailwind.
- [ ] Pembuatan ThemeProvider dan ThemeToggle.
- [ ] Integrasi toggle pada Navbar.
- [ ] Penambahan dark variant pada komponen dan halaman yang sudah ada.

Implementasi yang TIDAK BOLEH dilakukan pada UC-08:

- [ ] Penyimpanan preferensi tema ke database.
- [ ] Pembuatan endpoint API untuk tema.
- [ ] Penambahan pilihan tema selain light dan dark.
- [ ] Perubahan struktur, konten, atau fungsi section yang sudah selesai.
- [ ] Implementasi fitur lain yang tidak berhubungan dengan Toggle Theme.

---

## Acceptance Criteria

- [ ] Toggle mengganti tema secara langsung.
- [ ] Preferensi tetap tersimpan setelah reload.
- [ ] Kunjungan pertama mengikuti preferensi sistem operasi.
- [ ] Tidak ada flash tema yang salah saat load.
- [ ] Toggle tersedia pada Navbar di setiap halaman.
- [ ] Seluruh halaman terbaca jelas pada kedua tema.

---

## Testing Checklist

### Positive Case

- [ ] Toggle beralih antara light dan dark dengan benar.
- [ ] Preferensi tersimpan dan dipulihkan setelah reload.
- [ ] Kunjungan pertama mengikuti preferensi sistem operasi.

### Negative Case

- [ ] Nilai tema selain light dan dark tidak diterapkan.
- [ ] Tidak ada flash tema yang salah saat halaman dimuat.

### Error Case

- [ ] Akses localStorage yang gagal tidak menyebabkan halaman rusak.
- [ ] Aplikasi tetap dapat digunakan dengan tema default jika preferensi tidak dapat dibaca.

---

## Completion State

Setelah UC-08 selesai:

- [ ] ThemeProvider dan ThemeToggle berfungsi dan teruji.
- [ ] Dark mode dan light mode berfungsi pada seluruh halaman.
- [ ] Preferensi tema tersimpan di browser dan tidak di database.
- [ ] Semua 8 Use Case telah memiliki panduan implementasi lengkap.
- [ ] Project siap untuk implementasi end-to-end berdasarkan PRD_PORTFOLIO.md dan IMPLEMENTATION_TASKLIST.md.

---

# Final Implementation Verification

- Pastikan semua endpoint sesuai API Specification (GET /api/profile, /api/skills, /api/experiences, /api/education, /api/projects, /api/projects/{slug}).
- Pastikan seluruh endpoint bersifat read-only: method selain GET return HTTP 405.
- Pastikan format response sukses dan error konsisten di seluruh endpoint.
- Pastikan semua business rules dipatuhi.
- Pastikan tidak ada fitur di luar PRD_PORTFOLIO.md (tanpa authentication, dashboard, contact form, download CV, blog, search, filter, dan pagination).
- Pastikan frontend, backend, database, dan API konsisten.
- Pastikan urutan section Home: Hero, About, Skills, Projects, Experience, Education.
- Pastikan seed dapat dijalankan berulang kali tanpa duplikasi data.
- Pastikan .env tidak ter-commit dan .env.example tersedia.
- Pastikan error response tidak membocorkan stack trace atau detail internal.
- Pastikan seluruh halaman responsive di mobile, tablet, dan desktop tanpa horizontal scroll.
- Pastikan seluruh animasi menghormati prefers-reduced-motion.
- Pastikan seluruh gambar menggunakan komponen image Next.js dan seluruh link eksternal menggunakan rel="noopener noreferrer".
- Pastikan setiap halaman memiliki page title yang deskriptif, serta Not Found dan error page berfungsi.
- Pastikan setiap Use Case diuji sebelum lanjut ke Use Case berikutnya.

