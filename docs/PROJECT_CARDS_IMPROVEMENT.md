# Project Cards - Improvement Documentation

## 📋 Overview

Improvement pada swipeable project cards untuk memastikan semua cards memiliki ukuran yang sama dan konsisten, dengan fitur expandable tech stack tags.

---

## ✅ Changes Implemented

### 1. **Fixed Card Height (Equal Size)**
- **Before:** Cards memiliki height yang bervariasi karena content (title, description, tech stack wrapping)
- **After:** Semua cards memiliki fixed height `h-[440px]` dengan flexbox layout
- **Benefit:** Smooth swipe experience, visual consistency

```tsx
// Fixed container height with flex column layout
className="group h-[440px] ... flex flex-col"
```

### 2. **Improved Content Structure**

#### Image Section (Fixed)
```tsx
h-48 flex-shrink-0
```
- Height tetap 192px (12rem)
- Gradient overlay untuk depth: `bg-gradient-to-t from-slate-900/60`

#### Title Section (Fixed)
```tsx
line-clamp-2 flex-shrink-0 leading-tight
```
- Maximum 2 lines dengan ellipsis
- Tidak bisa grow/shrink

#### Description Section (Fixed)
```tsx
line-clamp-2 flex-shrink-0 leading-relaxed
```
- Maximum 2 lines dengan ellipsis
- Line height 1.625 untuk readability

#### Tech Stack Section (Auto-positioned)
```tsx
mt-auto pt-4 flex-shrink-0
```
- Selalu di bottom card menggunakan `mt-auto`
- Consistent top padding

---

### 3. **Smart Tech Stack Display**

#### Default State (Collapsed)
- Menampilkan **maximum 3 tags**
- Jika lebih dari 3, tampilkan button "+N more"

#### Expanded State
- Menampilkan **semua tech stack tags**
- Card height bisa bertambah (expected behavior)
- Auto-collapse saat click di luar card

#### Implementation
```tsx
const maxVisibleTags = 3;
const hasMoreTags = project.techStack.length > maxVisibleTags;
const visibleTags = isExpanded 
  ? project.techStack 
  : project.techStack.slice(0, maxVisibleTags);
```

---

### 4. **Click-Outside Handler**

Menggunakan `useEffect` dengan event listener untuk auto-collapse:

```tsx
useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
      setIsExpanded(false);
    }
  }

  if (isExpanded) {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }
}, [isExpanded]);
```

**Benefits:**
- Clean UX: auto-collapse saat user click diluar
- Memory efficient: event listener hanya aktif saat expanded
- Proper cleanup pada unmount

---

### 5. **Responsive Width Strategy**

```tsx
w-full sm:w-80 md:w-96
```

| Breakpoint | Width | Card Size | Reasoning |
|-----------|-------|-----------|-----------|
| Mobile (<640px) | `w-full` | ~100% viewport | Full swipe experience |
| Tablet (640-768px) | `w-80` | 320px | More cards visible, better scroll feel |
| Desktop (>768px) | `w-96` | 384px | Optimal reading size |

---

### 6. **Accessibility Improvements**

#### Scroll Buttons
```tsx
aria-label="Scroll projects left"
aria-label="Scroll projects right"
```

#### More Button
```tsx
aria-label={`Show ${remainingCount} more technologies`}
```

#### SVG Icons
```tsx
aria-hidden="true"
```

**Respects `prefers-reduced-motion`:**
```tsx
whileHover={!prefersReducedMotion ? { scale: 1.1 } : {}}
whileTap={!prefersReducedMotion ? { scale: 0.95 } : {}}
```

---

## 📐 Card Layout Breakdown

```
┌─────────────────────────────────────┐
│  Card Container (h-[440px])         │ ← Fixed height
│  ┌───────────────────────────────┐  │
│  │  Image (h-48)                 │  │ ← flex-shrink-0
│  │  + Gradient Overlay           │  │
│  └───────────────────────────────┘  │
│                                      │
│  Title (line-clamp-2)               │ ← flex-shrink-0
│                                      │
│  Description (line-clamp-2)         │ ← flex-shrink-0
│                                      │
│  [Flexible Space - mt-auto]         │ ← Grows to fill
│                                      │
│  ┌───────────────────────────────┐  │
│  │ Tech Stack Tags (pt-4)        │  │ ← flex-shrink-0
│  │ [Tag] [Tag] [Tag] [+2 more]  │  │ ← Always at bottom
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

---

## 🎨 Visual Enhancements

### 1. Image Gradient Overlay
```tsx
bg-gradient-to-t from-slate-900/60 via-transparent to-transparent
```
- Adds depth perception
- Better text legibility if overlay text added
- Professional polish

### 2. Enhanced Hover State
```tsx
hover:shadow-xl hover:shadow-purple-500/20 
hover:-translate-y-2 
hover:border-purple-500/50
```
- Glow effect dengan purple tint
- Lift animation (-8px translate)
- Border color transition

### 3. More Button Design
- Consistent dengan Tag component style
- Blue theme matching project palette
- Smooth hover transitions
- Glowing shadow effect

---

## 🔧 Technical Details

### Component Type
Changed from Server Component to **Client Component** (`'use client'`)

**Reason:** 
- State management (`useState`)
- Browser events (`useEffect`, `addEventListener`)
- Interactive behavior

### Dependencies Added
```tsx
import { useState, useRef, useEffect } from 'react';
```

### Performance Considerations

✅ **Optimized:**
- Event listener only attached when expanded
- Proper cleanup on unmount
- RAF throttling sudah ada di parent (ProjectsContent)

✅ **Memory Safe:**
- Click-outside listener di-cleanup
- Ref properly managed

---

## 📊 Before vs After Comparison

### Before
- ❌ Cards with varying heights (jumpy scroll)
- ❌ Title bisa 1-3+ lines
- ❌ Tech stack unlimited wrapping
- ❌ Inconsistent spacing
- ❌ No image gradient

### After
- ✅ All cards exactly `440px` height
- ✅ Title maximum 2 lines
- ✅ Tech stack smart display (3 visible + expandable)
- ✅ Consistent spacing with flexbox
- ✅ Image gradient overlay
- ✅ Click-outside auto-collapse
- ✅ Accessibility labels
- ✅ Respects reduced motion

---

## 🎯 UX Guidelines Applied

Based on UI/UX Pro Max skill analysis:

### 1. Line Height for Readability
```tsx
leading-tight    // Title (1.25)
leading-relaxed  // Description (1.625)
```
✅ Implements: "Use 1.5-1.75 for body text" guideline

### 2. Consistent Typography
- Modular scale maintained
- Consistent truncation behavior
- Proper semantic hierarchy

### 3. Motion Sensitivity
```tsx
{!prefersReducedMotion ? { scale: 1.1 } : {}}
```
✅ Respects `prefers-reduced-motion` for accessibility

### 4. Touch Targets
- Scroll buttons: `h-12 w-12` (48px - meets minimum)
- More button: proper padding untuk touch
✅ Meets iOS (44pt) and Android (48dp) requirements

---

## 🚀 Usage Example

```tsx
<ProjectCard project={{
  slug: "example-project",
  title: "Example Project Title That Might Be Long",
  shortDescription: "A detailed description that explains what this project does...",
  thumbnailUrl: "/images/projects/example/thumb.jpg",
  techStack: ["React", "Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"]
}} />
```

**Result:**
- Shows: React, Next.js, TypeScript, **+3 more**
- Click "+3 more" → expands to show all 6 tags
- Click outside → collapses back to 3 tags

---

## 🧪 Testing Checklist

- [x] All cards same height in default state
- [x] Title truncates properly at 2 lines
- [x] Description truncates properly at 2 lines
- [x] Tech stack shows max 3 tags by default
- [x] "+N more" button appears when >3 tags
- [x] Click "+N more" expands all tags
- [x] Click outside card collapses tags
- [x] Hover effects work smoothly
- [x] Responsive widths at all breakpoints
- [x] Scroll buttons have aria-labels
- [x] Respects prefers-reduced-motion
- [x] Image gradient overlay renders
- [x] Link navigation still works when expanded

---

## 📝 Future Enhancements (Optional)

### Potential Additions:
1. **Animation for expand/collapse**
   ```tsx
   <motion.div animate={{ height: "auto" }}>
   ```

2. **Keyboard navigation**
   ```tsx
   onKeyDown={(e) => e.key === 'Escape' && setIsExpanded(false)}
   ```

3. **Visual indicator on expanded card**
   ```tsx
   border-color changes when expanded
   ```

4. **Smooth scroll to expanded card**
   ```tsx
   cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
   ```

---

## 🎉 Summary

**Achieved Goals:**
✅ Equal card height untuk smooth swipe experience  
✅ Consistent visual hierarchy  
✅ Smart tech stack display with expand/collapse  
✅ Improved accessibility  
✅ Better responsive behavior  
✅ Enhanced visual polish  

**Files Modified:**
- `src/components/projects/ProjectCard.tsx` (Complete rewrite)
- `src/components/sections/ProjectsContent.tsx` (Accessibility improvements)

**Zero Breaking Changes:**
- Component API tetap sama
- Props interface unchanged
- Compatible dengan existing data structure

---

**Last Updated:** 2026-10-29  
**Version:** 2.0  
**Status:** ✅ Production Ready
