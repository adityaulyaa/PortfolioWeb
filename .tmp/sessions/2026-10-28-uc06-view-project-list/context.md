# Task Context: UC-06 View Project List

**Session ID**: 2026-10-28-uc06-view-project-list  
**Created**: 2026-10-28T08:11:14.253Z  
**Status**: in_progress

---

## Current Request

Implementasi UC-06 View Project List dari awal sampai selesai:
- Horizontal scrollable carousel menampilkan Featured Projects
- 4 cards visible di desktop, responsive ke tablet/mobile
- Tidak ada "View All Projects" button
- Round ornament di sebelah KANAN dengan glow effect (mirrored dari About)
- Mengikuti UI Reference dari docs/Design3.png
- Mengikuti Perumusan_UI_UC-06.md

---

## Context Files (Standards to Follow)

- `C:\Users\Faizin\.opencode\context\core\standards\code-quality.md` (Modular, functional, maintainable)
- `C:\Users\Faizin\.opencode\context\ui\web\react-patterns.md` (React patterns, hooks, components)
- `C:\Users\Faizin\.opencode\context\development\principles\api-design.md` (REST API patterns)

---

## Reference Files (Source Material)

- `docs/PRD_PORTFOLIO.md` (Main specification)
- `docs/IMPLEMENTATION_TASKLIST.md` (UC-06 task list)
- `docs/Perumusan_UI_UC-06.md` (UI specifications)
- `docs/Design3.png` (UI reference)

---

## External Docs Fetched

None needed - all documentation available locally

---

## Components to Build

**Backend**:
1. Prisma Model: Project (sudah ada di schema, verify)
2. Seed Data: projects.ts
3. Repository: ProjectRepository.findAll()
4. Service: ProjectService.getProjectList()
5. Mapper: ProjectMapper.toProjectListItemDto()
6. Route Handler: GET /api/projects/route.ts

**Frontend**:
1. ProjectCard.tsx - Card component dengan thumbnail, title, description, tech stack tags
2. Projects.tsx - Section component dengan scroll container
3. ScrollableContainer behavior - Horizontal scroll, 4 cards desktop

**Styling**:
1. Gradient glow borders pada cards
2. Hover animations (translate-y + glow intensified)
3. Round ornament di sebelah KANAN dengan glow
4. Responsive breakpoints

---

## Constraints

- Mengikuti code pattern yang sudah ada (static methods, class-based services/repositories)
- Server Component untuk Projects.tsx (fetch data di server)
- Client Component untuk scroll container (interactivity)
- Tailwind CSS untuk styling
- Sesuai dengan UI reference Design3.png
- Tidak ada pagination, semua projects di-load sekaligus
- Responsive: Desktop (4), Tablet (2-3), Mobile (1 + peek)

---

## Exit Criteria

- [x] Model Project verified (sudah ada)
- [ ] Seed data projects dibuat (4-6 projects minimal)
- [ ] ProjectRepository.findAll() implemented
- [ ] ProjectService.getProjectList() implemented
- [ ] ProjectMapper.toProjectListItemDto() implemented
- [ ] Route Handler GET /api/projects berfungsi
- [ ] ProjectCard.tsx component dibuat sesuai design
- [ ] Projects.tsx section component dibuat
- [ ] Scroll container behavior berfungsi (horizontal scroll)
- [ ] Styling sesuai UI reference (glow, hover, responsive)
- [ ] Round ornament di KANAN dengan glow
- [ ] Testing: Backend (API), Frontend (UI, scroll, responsive)
- [ ] Semua checklist di IMPLEMENTATION_TASKLIST.md UC-06 ditandai

---

## Implementation Order

1. ✅ Persiapan (ini)
2. Pembuatan Model Project (verify)
3. Persiapan Thumbnail Project (tentukan lokasi, gather data)
4. Pembuatan Seed Data Projects
5. Pembuatan DTO (ProjectListItemDto)
6. Pembuatan Mapper (ProjectMapper)
7. Pembuatan Repository (ProjectRepository)
8. Pembuatan Service (ProjectService)
9. Pembuatan Route Handler (GET /api/projects)
10. Frontend: ProjectCard component
11. Frontend: Projects section component
12. Frontend: Scroll container behavior + styling
13. Testing & Validation
14. Final checklist marking

---

## Notes

- Model Project sudah ada di schema.prisma (dari UC-06 planning)
- Seed data projects perlu dikumpulkan (minimal 4-6 projects)
- Styling akan menggunakan pattern yang sama dengan About section (glow effect, card styling)
- Round ornament positioning: KANAN (berbeda dari About yang di KIRI)
- Tidak ada "View All Projects" link di UI
