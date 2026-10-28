# Perumusan UI UC-06: View Project List

**Tanggal**: 28 Oktober 2026  
**Use Case**: UC-06 View Project List  
**UI Reference**: `docs/Design3.png`

---

## 1. Deskripsi Perubahan dari PRD Original

### Perbedaan dengan PRD:
- **PRD Original**: Menampilkan semua project sebagai plain list/grid tanpa pagination
- **Implementasi Baru**: Horizontal scrollable carousel yang menampilkan **4 project cards** dengan kemampuan scroll/swipe ke kanan untuk melihat project lainnya
- **Tidak ada "View All Projects"**: Semua project dapat diakses langsung melalui horizontal scroll

---

## 2. Analisis UI Reference (Design3.png)

### 2.1 Section Header
- **Icon**: 📦 Icon "PROJECTS" di kiri atas dengan warna purple/violet
- **Heading**: "Featured **Projects**" 
  - "Featured" warna normal (putih/slate)
  - "**Projects**" bold dengan gradient purple-blue
- **Action Link**: "View All Projects →" di kanan atas
  - **CATATAN**: Kita **TIDAK** implementasi link ini, karena semua project sudah bisa diakses via horizontal scroll

### 2.2 Project Card Design
Setiap card memiliki struktur:

#### Layout & Container:
- **Border**: Rounded border dengan gradient glow effect (blue-purple)
- **Background**: Dark navy/slate dengan slight transparency
- **Padding**: Medium padding di semua sisi
- **Shadow**: Subtle shadow dengan glow effect di border
- **Hover Effect**: Card sedikit terangkat (translate-y) dengan glow yang lebih intens

#### Content Structure (Top to Bottom):
1. **Thumbnail/Screenshot**:
   - Aspect ratio landscape (~16:10 atau 16:9)
   - Rounded corners
   - Menampilkan preview dari project (dashboard/UI screenshot)
   - Border tipis dengan gradient

2. **Title** (di bawah thumbnail):
   - Font bold, size ~18px
   - Warna putih/slate-50
   - Contoh: "Investment Optimizer", "KAFEin AI"

3. **Description**:
   - Font regular, size ~14px
   - Warna muted (slate-400)
   - 2-3 baris max (clamp/ellipsis)
   - Contoh: "A desktop app to optimize investment using various algorithms..."

4. **Tech Stack Tags** (di bagian bawah):
   - Horizontal row of pills/badges
   - Background: Dark blue/purple dengan opacity
   - Border: Subtle border dengan warna accent
   - Text: Small size (~12px), uppercase atau capitalized
   - Spacing: Gap antara tags
   - Contoh tags: "Python", "Tkinter", "OOP"

### 2.3 Carousel/Scroll Behavior
- **Visible Cards**: 4 cards sekaligus pada desktop (viewport besar)
- **Responsive**:
  - Desktop (>1200px): 4 cards
  - Tablet (768-1199px): 2-3 cards
  - Mobile (<768px): 1 card dengan peek (sedikit terlihat card berikutnya)
- **Scroll Type**: Horizontal scroll (smooth)
  - Mouse wheel horizontal scroll
  - Touch/swipe di mobile
  - Optional: Arrow buttons kiri-kanan untuk navigasi
- **No pagination dots**: Karena ini bukan slideshow, tapi scrollable container

---

## 3. Spesifikasi Teknis Implementasi

### 3.1 Component Structure
```
<Projects> (Server Component)
  └── <ProjectsSection> (Client Component untuk scroll behavior)
        ├── Section Header
        │     ├── Icon + "Featured Projects" heading
        │     └── [NO VIEW ALL LINK]
        └── <ScrollableContainer>
              ├── <ProjectCard slug="project-1" />
              ├── <ProjectCard slug="project-2" />
              ├── <ProjectCard slug="project-3" />
              └── ... (semua projects dari DB)
```

### 3.2 Styling Pattern (Tailwind CSS)

#### Section Container:
```css
- Background: transparent atau slight gradient overlay
- Max-width: Container max (1200px atau sesuai design system)
- Padding: px-4 sm:px-6 lg:px-8
- Margin bottom: mb-16 atau mb-20
```

#### Section Header:
```css
- Flex container: justify-between items-center
- Icon: w-5 h-5 text-purple-500
- Heading: text-3xl sm:text-4xl font-bold
  - "Featured": text-slate-50
  - "Projects": gradient-text (gradient-purple-blue)
```

#### Scrollable Container:
```css
- Display: flex gap-6
- Overflow-x: auto
- Scroll behavior: smooth
- Scrollbar: hidden (webkit-scrollbar-none)
- Snap type: x mandatory (optional untuk smooth snap)
- Padding: py-8
```

#### Project Card:
```css
- Width: Fixed (misal 320px) atau flex-shrink-0
- Background: bg-slate-900/80 backdrop-blur
- Border: border border-slate-700/50
- Border radius: rounded-2xl
- Padding: p-6
- Shadow: shadow-lg
- Glow effect: 
  - Box-shadow dengan rgba(purple/blue, 0.3)
  - Atau ring dengan ring-purple-500/30
- Hover:
  - transform: -translate-y-2
  - Glow intensified: ring-purple-500/60
  - Transition: all duration-300
```

#### Thumbnail:
```css
- Aspect ratio: aspect-video atau aspect-[16/10]
- Border radius: rounded-xl
- Border: border border-slate-700
- Object fit: cover
- Background: bg-slate-800 (loading state)
```

#### Title:
```css
- Font: text-lg sm:text-xl font-bold
- Color: text-slate-50
- Margin top: mt-4
- Truncate: line-clamp-1 (single line with ellipsis)
```

#### Description:
```css
- Font: text-sm text-slate-400
- Margin top: mt-2
- Line clamp: line-clamp-2 (max 2 lines)
```

#### Tech Stack Tags:
```css
- Container: flex flex-wrap gap-2 mt-4
- Tag:
  - px-3 py-1
  - text-xs font-medium
  - bg-slate-800/50 border border-slate-700/50
  - text-purple-400 atau text-blue-400
  - rounded-full atau rounded-lg
  - Hover: bg-slate-700/50
```

### 3.3 Interaction & Animation

#### Scroll Behavior:
- Smooth horizontal scroll menggunakan CSS `scroll-behavior: smooth`
- Optional: Custom scroll buttons (prev/next) dengan smooth scrollBy()
- Mobile: Native touch/swipe scroll

#### Card Hover Animation:
```javascript
// Framer Motion variant (jika menggunakan motion)
const cardVariants = {
  initial: { y: 0, boxShadow: '0 0 0 rgba(139, 77, 255, 0.3)' },
  hover: { 
    y: -8, 
    boxShadow: '0 0 30px rgba(139, 77, 255, 0.6)',
    transition: { duration: 0.3 }
  }
}
```

#### Reduced Motion:
- Jika `prefers-reduced-motion: reduce`, disable semua animasi
- Hanya gunakan instant state changes

---

## 4. Data Flow & Backend

### 4.1 Database (No Changes dari PRD)
- Table `Project` dengan fields sesuai PRD Bab 9
- Seed data `projects.ts` dengan minimal 4-6 projects untuk showcase

### 4.2 API (Sesuai PRD)
- Endpoint: `GET /api/projects`
- Return: Array of `ProjectListItemDto`
  ```typescript
  {
    slug: string;
    title: string;
    shortDescription: string;
    thumbnailUrl: string;
    techStack: string[];
  }
  ```
- Sorted by: `displayOrder` ascending

### 4.3 Service Layer (Sesuai PRD)
- `ProjectService.getProjectList()`
- Return semua projects (tidak ada limit, karena akan di-scroll horizontal)

---

## 5. Responsive Behavior

### Desktop (>1200px):
- Container: max-w-7xl
- Visible cards: 4 full cards
- Gap: gap-6
- Scroll: Smooth dengan mouse wheel

### Tablet (768px - 1199px):
- Container: max-w-5xl
- Visible cards: 2-3 cards
- Gap: gap-4
- Card width: Adjust untuk fit 2-3 cards

### Mobile (<768px):
- Container: full width dengan px-4
- Visible cards: 1 card + peek (20-30% next card terlihat)
- Gap: gap-3
- Card width: 85-90% viewport width
- Scroll: Native swipe/touch

---

## 6. Accessibility

- **Keyboard Navigation**: 
  - Cards dapat di-tab (focusable)
  - Enter/Space untuk membuka detail
  - Arrow keys untuk scroll horizontal (optional)
  
- **Screen Readers**:
  - Section: `<section aria-label="Featured Projects">`
  - Card: Semantic link dengan descriptive text
  - Tech tags: `<ul role="list">`

- **Focus States**:
  - Visible focus ring pada cards
  - Focus ring dengan warna accent (purple/blue)

---

## 7. Perbedaan dengan About Section Card

### About Section (Reference untuk Card Style):
- **Card position**: Kiri (content di kiri, ornament di kiri)
- **Round ornament**: Di sebelah **kiri** dengan glow effect
- **Layout**: Single card, centered

### Projects Section (New Implementation):
- **Card container**: Horizontal scrollable
- **Multiple cards**: 4+ cards dalam carousel
- **Round ornament**: DI SEBELAH **KANAN** dengan glow effect (mirrored dari About)
  - Posisi: Top-right atau bottom-right dari section
  - Glow: Sama seperti About tapi mirrored
  - Warna: Gradient purple-blue

---

## 8. Implementation Checklist

### Backend (Sesuai PRD UC-06):
- [ ] Model Project di Prisma schema (sudah ada)
- [ ] Seed data projects dengan minimal 4-6 projects
- [ ] Thumbnails disimpan di `public/images/projects/{slug}/thumbnail.png`
- [ ] ProjectRepository.findAll()
- [ ] ProjectService.getProjectList()
- [ ] ProjectMapper.toProjectListItemDto()
- [ ] Route Handler GET /api/projects

### Frontend Components:
- [ ] `ProjectCard.tsx` component dengan design sesuai reference
  - Thumbnail, title, description, tech stack tags
  - Hover effect dengan glow
  - Link ke `/projects/{slug}`
  
- [ ] `Projects.tsx` section component
  - Server Component untuk fetch data
  - Section header dengan icon + gradient heading
  - **NO** "View All Projects" link
  - Round ornament di **sebelah KANAN** dengan glow
  
- [ ] `ScrollableContainer.tsx` atau inline implementation
  - Horizontal scroll container
  - 4 cards visible di desktop
  - Responsive breakpoints
  - Smooth scroll behavior

### Styling:
- [ ] Gradient glow effect untuk card borders
- [ ] Hover animations (translate-y + glow intensified)
- [ ] Horizontal scrollbar hidden
- [ ] Smooth scroll behavior
- [ ] Round ornament dengan glow di sebelah kanan section

### Testing:
- [ ] Scroll horizontal berfungsi (mouse, touch, keyboard)
- [ ] Responsive di berbagai ukuran layar
- [ ] Hover effects berfungsi
- [ ] Cards dapat diklik dan menuju detail page
- [ ] Prefers-reduced-motion respected

---

## 9. Visual Mockup Structure

```
┌────────────────────────────────────────────────────────────────────────┐
│  📦 PROJECTS                                    [Round Ornament Glow] ◯│
│  Featured Projects                                                      │
│  ────────────────────────────────────────────────────────────────────  │
│                                                                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐                 │
│  │ [Image]  │ │ [Image]  │ │ [Image]  │ │ [Image]  │  ←scroll→       │
│  │          │ │          │ │          │ │          │                  │
│  │ Title 1  │ │ Title 2  │ │ Title 3  │ │ Title 4  │                  │
│  │ Desc...  │ │ Desc...  │ │ Desc...  │ │ Desc...  │                  │
│  │ [Tags]   │ │ [Tags]   │ │ [Tags]   │ │ [Tags]   │                  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘                  │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 10. Notes & Constraints

1. **No View All Projects Button**: Semua projects accessible via horizontal scroll
2. **Round Ornament Position**: KANAN (mirrored dari About section yang di kiri)
3. **Card Count**: Tampilkan 4 cards pada desktop, responsive untuk tablet/mobile
4. **No Pagination**: Pure horizontal scroll, semua projects dimuat sekaligus
5. **Maintain PRD Compliance**: 
   - Tetap ikuti structure backend dari PRD
   - Hanya UI presentation yang berubah (dari grid/list ke horizontal carousel)
   - Business rules tetap sama (sorted by displayOrder, dll)

---

## 11. Color Palette (Sesuai Design System yang Ada)

```css
--card-background: rgba(15, 23, 42, 0.8); /* slate-900/80 */
--card-border: rgba(71, 85, 105, 0.5); /* slate-700/50 */
--card-glow: rgba(139, 77, 255, 0.3); /* purple-500/30 */
--card-glow-hover: rgba(139, 77, 255, 0.6); /* purple-500/60 */
--title-color: #f8fafc; /* slate-50 */
--description-color: #94a3b8; /* slate-400 */
--tag-bg: rgba(30, 41, 59, 0.5); /* slate-800/50 */
--tag-border: rgba(71, 85, 105, 0.5); /* slate-700/50 */
--tag-text: #a78bfa; /* purple-400 */
```

---

## 12. Success Criteria

✅ **Visual**:
- Projects section terlihat seperti reference design
- 4 cards visible di desktop
- Smooth horizontal scroll
- Card hover dengan glow effect
- Round ornament dengan glow di sebelah KANAN

✅ **Functional**:
- Semua projects dapat di-scroll
- Cards clickable ke detail page
- Responsive di semua ukuran layar
- Touch/swipe di mobile

✅ **Performance**:
- Smooth 60fps scroll
- No layout shift saat load
- Images optimized (Next.js Image)

✅ **Accessibility**:
- Keyboard navigable
- Screen reader friendly
- Focus states visible
- Reduced motion respected

---

**End of Document**
