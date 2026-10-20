# 1. Project Overview

## Application Description

This project is a single-page-style personal portfolio web application that presents the owner's personal information and completed projects to public visitors.

The application is developed as a full-stack Next.js application. There is no separate backend service. Data is stored in a PostgreSQL database and populated through a database seed process.

The application has only one primary actor: Visitor.

The application is publicly accessible without login, and can be accessed through desktop and mobile browsers with a responsive interface.

---

## Project Objective

The main objective of this project is to provide a personal branding platform that the owner can use when applying for jobs.

The application is designed to allow visitors to:

- View the owner's introduction (Hero)
- Read about the owner (About)
- View the owner's skills
- View the owner's work experience
- View the owner's education
- Browse completed projects as preview cards
- View a dedicated detail page for each project
- Switch between dark mode and light mode

The interface language is English.

---

## Project Scope Summary

The project covers the following features:

- Profile Information (Hero and About)
- Skills
- Experience and Education
- Project List (preview cards)
- Project Detail Page
- Dark / Light Mode
- UI Animations
- Read-only REST API

The project **does not include**:

- Authentication (Login, Register, Logout)
- Owner / Admin Dashboard
- Content Management System
- Contact Form
- CV / Resume Download
- Blog / Articles
- Search and Filter
- Multi-language Support
- SEO Extras (sitemap, Open Graph, structured data)
- Analytics
- Mobile Application (Android/iOS)

---

## Target User

This project has only one type of user: Visitor.

Visitor is any person who opens the portfolio website, mainly recruiters and people who are curious about the owner's portfolio. Visitor does not need an account.

---

## Technology Overview

| Layer | Technology |
|-------|------------|
| Framework | Next.js (App Router, full-stack) |
| Language | TypeScript |
| Frontend Styling | Tailwind CSS |
| Database | PostgreSQL |
| ORM | Prisma |
| Theme | next-themes |
| Animation | Motion (formerly Framer Motion) |
| Communication | RESTful API (Next.js Route Handlers) |

---

## Design Decisions and Assumptions

The following decisions were made during requirement gathering. Items marked "Delegated" were delegated to the document author and must be reviewed by the project owner.

| No | Decision | Source |
|----|----------|--------|
| 1 | Owner is the only content source. Content is seeded into the database. | Stated by owner |
| 2 | No authentication and no dashboard. | Stated by owner |
| 3 | Full-stack Next.js without separate backend. | Stated by owner |
| 4 | Projects shown as cards only as a preview on Home; each project has its own detail page. | Stated by owner |
| 5 | Project list is a plain list (no search, filter, sorting UI, or pagination). | Stated by owner |
| 6 | Dark/light mode and animations are included. | Stated by owner |
| 7 | REST API is required and documented. | Stated by owner |
| 8 | Visual design (colors, typography, layout style) is not defined in this version. | Stated by owner |
| 9 | Page sections: Hero, About, Skills, Projects, Experience, Education. | Delegated |
| 10 | Profile, Skill, Experience, Education, and Project data fields (see Chapter 9). | Delegated |
| 11 | ORM is Prisma with TypeScript. | Delegated |
| 12 | Images are stored as static files in `public/`; the database stores image paths. | Delegated |
| 13 | Theme library is next-themes; animation library is Motion. | Delegated |
| 14 | Hosting and deployment target are not defined in this version. | Skipped by owner |
| 15 | Specific performance targets (e.g. Lighthouse scores) are not defined in this version. | Skipped by owner |

---

## Development Notes

### Development Rules

- This document is the single source of truth for the project.
- Never implement features outside the project scope.
- Never assume requirements that are not explicitly documented.
- All future development must follow this specification.
- The project is visitor-oriented, read-only, and does not include authentication or administrative features.
- Maintain consistency with the defined architecture and technology stack.

---

# 2. Project Scope

## 2.1 In Scope

The project scope encompasses all functional requirements defined in this document.

| Module | Use Cases | Included Features |
|--------|----------:|-------------------|
| Profile | 2 | View Hero Section, View About Section |
| Skills | 1 | View Skills |
| Background | 2 | View Experience, View Education |
| Project | 2 | View Project List, View Project Detail |
| Theme | 1 | Toggle Theme |

The project consists of **5 main modules**. There are a total of **8 use cases** that form the basis of implementation scope.

All use cases serve as the foundation for frontend implementation, database design, REST API development, and testing.

All features listed in the table above must be implemented. No new features may be added unless they are explicitly included in this list.

---

## 2.2 Out of Scope

This project explicitly **does not include**:

- Login, Register, Logout
- Owner / Admin User
- Owner Dashboard or Content Management System
- Multi Role User
- Contact Form and message storage
- CV / Resume download
- Blog / Articles
- Search, Filter, Sorting UI, Pagination
- Certificates / Achievements section
- Multi-language (i18n)
- SEO extras (sitemap, Open Graph images, structured data)
- Visitor analytics or view counters
- Comments, testimonials, or any visitor-generated content
- File upload
- Write API endpoints (POST, PUT, PATCH, DELETE)
- Separate backend service
- Android Application
- iOS Application
- Desktop Application
- Any features outside the defined scope

These features must not be implemented unless there is an explicit change request to the project requirements.

---

## 2.3 Primary Actor

The application has only **one primary actor**: Visitor.

Visitor is an end user who consumes portfolio content without logging in.

Visitor has the following access rights:

- View Hero Section
- View About Section
- View Skills
- View Experience
- View Education
- View Project List
- View Project Detail
- Toggle Theme

The project has no Owner/Admin actor or any other user roles. Content is managed only by the developer through the seed process.

---

## 2.4 Core Business Flow

```
Open Application (Home)
       ↓
  View Hero Section
       ↓
Scroll / Use Navigation
       ↓
View About → View Skills → View Project List (cards)
       ↓
Select a Project Card
       ↓
  View Project Detail
       ├── Open Demo / Repository link (external, if available)
       └── Back to Home
       ↓
View Experience → View Education
       ↓
      End

Toggle Theme (Dark / Light) is available at any point in the flow.
```

All module implementations must follow this business flow sequence to ensure a consistent user experience.

---

## 2.5 Business Objectives

The main business objectives of this project are:

- Provide a personal branding platform for job hunting.
- Let recruiters understand the owner's profile, skills, and projects quickly.
- Present completed projects with enough detail to show the owner's capability.
- Provide a clean, responsive, and modern browsing experience.

---

## 2.6 Development Constraints

Implementation constraints for this project:

- Web application only.
- Responsive Web Design.
- Single actor (Visitor).
- Full-stack Next.js; no separate backend.
- Database uses PostgreSQL.
- Styling uses Tailwind CSS.
- Content is seeded into the database; no content management UI.
- English interface only.
- No authentication.
- No write operations from the application.

---

## 2.7 Development Rules

### Development Rules

- This document is the single source of truth for all project implementation.
- Never implement features outside the defined project scope.
- Never create authentication, dashboard, or admin modules unless explicitly requested.
- Never introduce additional user roles.
- Never add contact form, CV download, blog, or search/filter features.
- Never create a separate backend service.
- Every implementation must follow the defined business flow.
- Every feature must belong to one of the five defined modules.
- Every implementation must be traceable to one or more of the eight defined use cases.
- If a requested feature is not included in the project scope, it must be treated as a change request instead of part of the current implementation.
- Maintain consistency with the defined architecture, business flow, and project boundaries.

---

# 3. Business Requirements

## 3.1 Business Goals

The application development aims to support the owner's personal branding and job search.

The business goals are:

- BG-01: Present the owner's professional identity clearly.
- BG-02: Showcase completed projects with detailed information.
- BG-03: Present skills, experience, and education in an organized way.
- BG-04: Provide a polished, responsive experience that reflects the owner's frontend capability.

---

## 3.2 Business Problems

The problems addressed by this project:

- Project and background information is scattered across multiple platforms (GitHub, LinkedIn, documents).
- Recruiters need a single place to evaluate the owner quickly.
- Project repositories alone do not explain the context, role, and technologies of each project.

---

## 3.3 Target User

### Visitor

Visitor is a recruiter or any person interested in the owner's portfolio.

Visitor characteristics:

- Has limited time to review a candidate.
- Wants to find skills, projects, and experience quickly.
- Accesses the site from desktop or mobile browsers.
- Does not log in.

---

## 3.4 Visitor Journey

```
Open portfolio link
       ↓
Read Hero (name, headline, short intro)
       ↓
Read About
       ↓
Scan Skills
       ↓
Browse Project cards
       ↓
Open a Project Detail page
       ↓
Open Demo or Repository (optional)
       ↓
Return to Home
       ↓
Review Experience and Education
       ↓
Leave the site (or contact owner via displayed social links)
```

---

## 3.5 Functional Requirement Summary

| ID | Use Case | Module |
|----|----------|--------|
| UC-01 | View Hero Section | Profile |
| UC-02 | View About Section | Profile |
| UC-03 | View Skills | Skills |
| UC-04 | View Experience | Background |
| UC-05 | View Education | Background |
| UC-06 | View Project List | Project |
| UC-07 | View Project Detail | Project |
| UC-08 | Toggle Theme | Theme |

---

## 3.6 Business Requirement Traceability

| Business Goal | Related Use Cases |
|---------------|-------------------|
| BG-01 | UC-01, UC-02 |
| BG-02 | UC-06, UC-07 |
| BG-03 | UC-03, UC-04, UC-05 |
| BG-04 | UC-08 and all UI/UX non-functional requirements |

---

## 3.7 Development Rules

### Development Rules

- Every implemented feature must map to at least one business goal.
- Do not implement features that cannot be traced to a business goal.
- Business goals may not be changed without explicit approval.

---

# 4. Functional Requirements

## 4.1 Profile Module

### Purpose

Profile Module presents the owner's identity: introduction, biography, and public contact links.

### Features

- View Hero Section
- View About Section

---

## 4.1.1 View Hero Section

### Description

Visitor sees the first section of the Home page containing the owner's name, headline, short introduction, and social links.

### Preconditions

- Profile data exists in the database.

### Workflow

1. Visitor opens the Home page (`/`).
2. System retrieves Profile data.
3. System displays full name, headline, and short introduction.
4. System displays social links (GitHub, LinkedIn, Email) that have a value.
5. System displays navigation to other sections.
6. System plays the hero entrance animation.

### Business Rules

- Hero is always the first section on Home.
- Only social links that have a value are displayed.
- Email link uses the `mailto:` scheme.
- GitHub and LinkedIn links open in a new tab with `rel="noopener noreferrer"`.

### Validation Rules

- Full name, headline, and short introduction must not be empty in seed data.
- Social URLs must be valid absolute URLs (https) when provided.

### System Behavior

- Profile data is retrieved on the server.
- If Profile data is missing, the system displays an error state instead of an empty Hero.

### Acceptance Criteria

- Hero displays name, headline, and short introduction.
- Social links are displayed only when available.
- External links open in a new tab.
- Hero is readable on mobile, tablet, and desktop.
- Missing Profile data results in an error message, not a broken page.

---

## 4.1.2 View About Section

### Description

Visitor reads a longer biography, sees the owner's photo, and location.

### Preconditions

- Profile data exists in the database.

### Workflow

1. Visitor scrolls to or navigates to the About section (`/#about`).
2. System displays the profile photo, About text, and location.

### Business Rules

- About text is plain text; paragraphs are separated by a blank line.
- Location is displayed only when it has a value.
- Photo displays alt text based on the owner's name.

### Validation Rules

- About text must not be empty in seed data.
- Photo path must point to an existing file in `public/`.

### System Behavior

- Images are rendered through the Next.js image component.

### Acceptance Criteria

- About section displays photo, text, and location (when available).
- Paragraph breaks are preserved.
- Section reveals with a scroll animation.

---

## 4.2 Skills Module

### Purpose

Skills Module presents the owner's skills grouped by category.

### Features

- View Skills

---

## 4.2.1 View Skills

### Description

Visitor views skills grouped by category (for example Frontend, Backend, Database, Tools). Category names are defined in seed data.

### Preconditions

- At least one skill category with skills exists.

### Workflow

1. Visitor navigates to the Skills section (`/#skills`).
2. System retrieves skill categories with their skills.
3. System sorts categories and skills by display order.
4. System displays each category with its skills.
5. If no skills exist, system hides the section content and shows an empty state.

### Business Rules

- Skills are grouped by category.
- Categories and skills are sorted by `displayOrder` ascending.
- Skills have no proficiency level or percentage.

### Validation Rules

- Skill name must not be empty and must be unique within a category.

### System Behavior

- Categories without skills are not displayed.

### Acceptance Criteria

- Skills are displayed grouped by category.
- Order matches `displayOrder`.
- Empty state is displayed when no skills exist.

---

## 4.3 Background Module

### Purpose

Background Module presents the owner's work experience and education history.

### Features

- View Experience
- View Education

---

## 4.3.1 View Experience

### Description

Visitor views the owner's experience (internship, work, organization, or freelance) in reverse chronological order.

### Preconditions

- Experience records exist in the database.

### Workflow

1. Visitor navigates to the Experience section (`/#experience`).
2. System retrieves Experience records.
3. System sorts records by start date, latest first.
4. System displays organization, role, type, period, and highlights for each record.
5. If no records exist, system displays an empty state.

### Business Rules

- Sorted by `startDate` descending.
- A record with no `endDate` displays "Present".
- Period is displayed as month and year (for example "Jan 2025 – Present").
- Highlights are displayed as a list.

### Validation Rules

- `endDate`, when present, must not be earlier than `startDate`.
- Organization and role must not be empty.

### System Behavior

- Dates are formatted on the frontend from ISO date values.

### Acceptance Criteria

- Records are displayed from latest to oldest.
- Ongoing records show "Present".
- Highlights are displayed as a list.
- Empty state is displayed when no records exist.

---

## 4.3.2 View Education

### Description

Visitor views the owner's education history in reverse chronological order.

### Preconditions

- Education records exist in the database.

### Workflow

1. Visitor navigates to the Education section (`/#education`).
2. System retrieves Education records.
3. System sorts records by start date, latest first.
4. System displays institution, degree, field of study, and period.
5. If no records exist, system displays an empty state.

### Business Rules

- Sorted by `startDate` descending.
- A record with no `endDate` displays "Present".
- Description is displayed only when it has a value.

### Validation Rules

- `endDate`, when present, must not be earlier than `startDate`.
- Institution and degree must not be empty.

### System Behavior

- Same date formatting rules as Experience.

### Acceptance Criteria

- Records are displayed from latest to oldest.
- Ongoing records show "Present".
- Optional description is shown only when available.
- Empty state is displayed when no records exist.

---

## 4.4 Project Module

### Purpose

Project Module presents completed projects as preview cards and provides a dedicated detail page for each project.

### Features

- View Project List
- View Project Detail

---

## 4.4.1 View Project List

### Description

Visitor views all projects as preview cards in the Projects section of the Home page. The list is a plain list without search, filter, sorting controls, or pagination.

### Preconditions

- Project records exist in the database.

### Workflow

1. Visitor navigates to the Projects section (`/#projects`).
2. System retrieves all Projects.
3. System sorts Projects by display order.
4. System displays each Project as a card with thumbnail, title, short description, and tech stack tags.
5. Visitor selects a card.
6. System navigates to the Project Detail page (`/projects/{slug}`).
7. If no projects exist, system displays an empty state.

### Business Rules

- Cards are previews only; the full information is on the detail page.
- Projects are sorted by `displayOrder` ascending.
- The entire card is a link to the detail page.
- No search, filter, sort, or pagination controls are provided.

### Validation Rules

- Each Project must have a unique, valid slug.
- Thumbnail path must point to an existing file in `public/`.

### System Behavior

- Cards show a hover animation on devices that support hover.

### Acceptance Criteria

- All Projects are displayed as cards in `displayOrder`.
- Each card shows thumbnail, title, short description, and tech stack.
- Selecting a card opens the correct detail page.
- Empty state is displayed when no projects exist.
- No search, filter, or pagination UI exists.

---

## 4.4.2 View Project Detail

### Description

Visitor views complete information about one project on its own page.

### Preconditions

- Project with the requested slug exists.

### Workflow

1. Visitor opens `/projects/{slug}` (from a card or direct link).
2. System validates the slug format.
3. System retrieves the Project with its images.
4. System displays title, year, role, tech stack, long description, and image gallery.
5. System displays Demo and Repository links when available.
6. Visitor selects "Back to Projects" to return to Home (`/#projects`).
7. If the Project is not found or the slug is invalid, system displays the Not Found page.

### Business Rules

- Each Project has its own detail page identified by slug.
- Demo and Repository buttons are displayed only when the URL exists.
- External links open in a new tab with `rel="noopener noreferrer"`.
- Gallery images are sorted by `displayOrder`.
- Long description is plain text; paragraphs are separated by a blank line.

### Validation Rules

- Slug must match `^[a-z0-9]+(?:-[a-z0-9]+)*$`.
- Demo and Repository URLs must be valid absolute URLs when provided.

### System Behavior

- Unknown or invalid slug returns the Not Found page with HTTP 404.
- System errors display the error page.

### Acceptance Criteria

- Project Detail displays all required fields.
- Optional links are shown only when available.
- Gallery displays all images in order.
- Unknown slug displays Not Found (404).
- "Back to Projects" returns to the Projects section of Home.
- Page is responsive on mobile, tablet, and desktop.

---

## 4.5 Theme Module

### Purpose

Theme Module lets Visitor switch the interface between dark mode and light mode.

### Features

- Toggle Theme

---

## 4.5.1 Toggle Theme

### Description

Visitor switches between light and dark mode using a toggle available on every page.

### Preconditions

- Visitor has JavaScript enabled in the browser.

### Workflow

1. Visitor opens any page.
2. System applies the saved theme preference; if none exists, system applies the operating system preference.
3. Visitor selects the theme toggle.
4. System switches the theme immediately.
5. System saves the preference in the browser (localStorage).

### Business Rules

- Default theme follows the operating system preference.
- Theme preference is stored only in the visitor's browser.
- The toggle is available in the navigation bar on every page.
- Theme is applied before first paint to avoid a flash of the wrong theme.

### Validation Rules

- Allowed theme values: `light`, `dark`.

### System Behavior

- Theme is applied through the `dark` class on the root element (Tailwind class strategy).
- Preference is not stored in the database.

### Acceptance Criteria

- Toggle switches theme immediately.
- Preference persists after page reload.
- First visit follows the operating system preference.
- No visible flash of incorrect theme on load.

---

### Development Rules

- Follow the Functional Requirements exactly as documented.
- Do not add use cases outside the eight defined.
- Do not add form inputs or any visitor-generated data.

---

# 5. Non Functional Requirements

## 5.1 Usability

### Purpose

Make the portfolio easy to scan for recruiters.

### Requirements

- Clear navigation to Hero, About, Skills, Projects, Experience, and Education.
- Navigation bar remains accessible while scrolling.
- Consistent visual hierarchy across sections.
- Every page has a meaningful page title.
- Empty and error states have clear messages.
- Animations are subtle and must not block reading or interaction.

### Acceptance Criteria

- Visitor can reach any section in at most one navigation action.
- Every page has a descriptive title.
- Animations never delay access to content.

### Development Rules

- Keep the interface in English.
- Do not use animations that hide content until they finish.

---

## 5.2 Responsiveness

### Purpose

Ensure the application works well on all common screen sizes.

### Requirements

- Mobile-first layout using Tailwind CSS breakpoints.
- Navigation collapses into a mobile menu on small screens.
- Images scale without overflow.
- No horizontal scrolling on any page.
- Touch targets are large enough for mobile use.

### Acceptance Criteria

- All pages are usable on mobile, tablet, and desktop.
- No horizontal scroll at any width.
- Mobile menu works on small screens.

### Development Rules

- Build mobile layout first, then enhance for larger screens.

---

## 5.3 Security

### Purpose

Protect the application and its data despite being public and read-only.

### Requirements

- The application exposes read-only endpoints only (GET).
- Non-GET requests to API endpoints return HTTP 405.
- Database access uses Prisma (parameterized queries); no raw SQL with user input.
- Database credentials are stored in environment variables and never committed.
- Error responses do not expose stack traces or internal details.
- External links use `rel="noopener noreferrer"`.
- API responses contain only fields needed by the frontend.

### Acceptance Criteria

- No endpoint allows data modification.
- `.env` is excluded from version control; `.env.example` is provided.
- Error responses contain no internal details.

### Development Rules

- Never add write endpoints.
- Never commit secrets.

---

## 5.4 Availability

### Purpose

Define graceful behavior when parts of the system fail.

### Requirements

- Custom Not Found page for unknown routes and projects.
- Custom error page for unexpected errors.
- Database failures result in a friendly error message, not a crash.

### Acceptance Criteria

- Unknown URL shows the Not Found page.
- Database failure shows the error page.

### Development Rules

- Hosting and uptime targets are not defined in this version.

---

## 5.5 Performance

### Purpose

Keep pages loading smoothly.

### Requirements

- Images use the Next.js image component with appropriate sizes.
- Pages are rendered on the server and may be statically generated, since content changes only through re-seeding.
- Animations use transform and opacity only.
- Animations respect `prefers-reduced-motion`.
- Specific numeric targets are not defined in this version.

### Acceptance Criteria

- Images are optimized and do not cause layout shift.
- Users with reduced-motion preference see no animations.

### Development Rules

- Avoid unnecessary client-side JavaScript; prefer Server Components.

---

# 6. Technology Stack

## 6.1 Frontend Stack

### Purpose

Render the user interface.

### Technologies

| Technology | Usage |
|------------|-------|
| Next.js (App Router) | Framework, routing, rendering |
| React | UI library |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| next-themes | Dark / light mode |
| Motion | UI animations |

---

## 6.2 Backend Stack

### Purpose

Provide server-side data access and REST API inside the Next.js application.

### Technologies

| Technology | Usage |
|------------|-------|
| Next.js Route Handlers | REST API endpoints |
| Next.js Server Components | Server-side data fetching for pages |
| TypeScript | Type safety |
| Node.js | Runtime |

---

## 6.3 Database Stack

### Purpose

Store portfolio content.

### Technologies

| Technology | Usage |
|------------|-------|
| PostgreSQL | Relational database |
| Prisma | ORM, schema, migrations, seeding |

---

## 6.4 Communication Stack

### Purpose

Define how data moves between layers.

### Technologies

| Technology | Usage |
|------------|-------|
| RESTful API (JSON) | External data access under `/api` |
| Direct service calls | Server Components call services directly |

---

## 6.5 Architecture Stack

### Purpose

Define the architectural style.

### Technologies

| Style | Description |
|-------|-------------|
| Full-stack monolith | Single Next.js application |
| Layered backend | Route Handler → Service → Repository → Database |

---

## 6.6 Project Structure Technologies

### Purpose

Define how code is organized.

### Frontend Structure

- `src/app` for routes and pages
- `src/components` for UI components
- `src/lib` for utilities

### Backend Structure

- `src/app/api` for Route Handlers
- `src/services` for business logic
- `src/repositories` for database access
- `src/mappers` for DTO mapping
- `prisma` for schema, migrations, and seed

---

## 6.7 Development Rules

- Use only the technologies listed in this chapter.
- Use the latest stable versions at project start and record them in `package.json`.
- Do not add other databases, ORMs, or UI frameworks without approval.
- Use TypeScript for all source code.

---

# 7. Project Structure

## 7.1 Purpose

Define the directory structure so all code is placed consistently.

---

## 7.2 Frontend Project Structure

### Purpose

Organize pages, components, and assets.

### Directory Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── not-found.tsx
│   ├── error.tsx
│   └── projects/
│       └── [slug]/
│           └── page.tsx
├── components/
│   ├── layout/        (Navbar, Footer, ThemeToggle, ThemeProvider)
│   ├── sections/      (Hero, About, Skills, Projects, Experience, Education)
│   ├── projects/      (ProjectCard, ProjectGallery, ProjectLinks)
│   └── ui/            (SectionHeading, Reveal, EmptyState, ErrorState, Tag)
public/
└── images/
    ├── profile/
    └── projects/
        └── {slug}/
```

---

## 7.3 Backend Project Structure

### Purpose

Organize API, business logic, and data access.

### Directory Structure

```
src/
├── app/
│   └── api/
│       ├── profile/route.ts
│       ├── skills/route.ts
│       ├── experiences/route.ts
│       ├── education/route.ts
│       └── projects/
│           ├── route.ts
│           └── [slug]/route.ts
├── services/
├── repositories/
├── mappers/
├── lib/
│   ├── prisma.ts
│   ├── api-response.ts
│   ├── errors.ts
│   ├── validators.ts
│   └── format-date.ts
└── types/
prisma/
├── schema.prisma
├── migrations/
├── seed.ts
└── seed-data/
    ├── profile.ts
    ├── skills.ts
    ├── experiences.ts
    ├── education.ts
    └── projects.ts
.env.example
```

---

## 7.4 Directory Responsibilities

### Frontend

| Directory | Responsibility |
|-----------|----------------|
| `src/app` | Routes, layouts, pages, error and not-found pages |
| `src/components/layout` | Navigation, footer, theme controls |
| `src/components/sections` | Home page sections |
| `src/components/projects` | Project-specific components |
| `src/components/ui` | Reusable UI primitives |
| `public/images` | Static images referenced by database paths |

### Backend

| Directory | Responsibility |
|-----------|----------------|
| `src/app/api` | REST API Route Handlers |
| `src/services` | Business logic and data preparation |
| `src/repositories` | Prisma queries |
| `src/mappers` | Entity to DTO conversion |
| `src/lib` | Shared utilities (Prisma client, responses, errors, validators) |
| `src/types` | Shared TypeScript types and DTOs |
| `prisma` | Schema, migrations, seed script, seed data |

---

## 7.5 Development Rules

- Follow the documented structure.
- Do not create new top-level directories without approval.
- Seed content lives only in `prisma/seed-data`.
- Do not place database access code in components.

---

# 8. System Architecture

## 8.1 Purpose

Describe how the application is organized and how data flows.

---

## 8.2 Architecture Overview

The system is a single Next.js application. Pages are rendered on the server and read data through the service layer. The same service layer powers a read-only REST API. PostgreSQL stores all content.

```
Visitor Browser
      ↓
Next.js Application
 ├── Pages (Server Components) ──┐
 └── API Route Handlers ─────────┤
                                 ↓
                          Service Layer
                                 ↓
                         Repository Layer
                                 ↓
                         Prisma → PostgreSQL
```

---

## 8.3 Three-Tier Architecture

| Tier | Implementation |
|------|----------------|
| Presentation | React components, Tailwind CSS, Motion |
| Application | Server Components, Route Handlers, Services |
| Data | Repositories, Prisma, PostgreSQL |

---

## 8.4 System Communication Flow

Page request:

```
Browser → GET /projects/{slug}
        → Server Component
        → ProjectService
        → ProjectRepository
        → PostgreSQL
        → HTML response
```

API request:

```
Client → GET /api/projects/{slug}
       → Route Handler
       → ProjectService
       → ProjectRepository
       → PostgreSQL
       → JSON response
```

---

## 8.5 Backend Layer Flow

### Controller (Route Handler)

Receives the request, validates parameters, calls a service, and returns a standardized JSON response.

### Service

Contains data preparation logic such as sorting and grouping, and throws domain errors (for example not found).

### Repository

Executes Prisma queries. Contains no business logic.

### Database

PostgreSQL tables defined in Chapter 9.

---

## 8.6 Development Rules

- Layers must only call the layer directly beneath them.
- Pages and Route Handlers must not call Prisma directly.
- Server Components call services directly and must not fetch their own API.

---

# 9. Database Design

## 9.1 Purpose

Define the database structure used to store portfolio content.

---

## 9.2 Database Overview

| Item | Value |
|------|-------|
| DBMS | PostgreSQL |
| ORM | Prisma |
| Tables | 7 |
| Population | Seed script (`prisma/seed.ts`) |

---

## 9.3 Entity Relationship Overview

```
SkillCategory 1 ───── N Skill

Project 1 ───── N ProjectImage

Profile, Experience, Education  (standalone)
```

---

## 9.4 Entity Specifications

### Profile

| Column | Type | Constraints |
|--------|------|-------------|
| id | Int | PK (single row) |
| fullName | String | Required |
| headline | String | Required |
| shortIntro | String | Required |
| aboutText | Text | Required |
| location | String | Nullable |
| photoUrl | String | Required |
| email | String | Nullable |
| githubUrl | String | Nullable |
| linkedinUrl | String | Nullable |

### SkillCategory

| Column | Type | Constraints |
|--------|------|-------------|
| id | Int | PK, auto increment |
| name | String | Required, unique |
| displayOrder | Int | Required |

### Skill

| Column | Type | Constraints |
|--------|------|-------------|
| id | Int | PK, auto increment |
| name | String | Required |
| categoryId | Int | FK → SkillCategory.id, required |
| displayOrder | Int | Required |

Unique constraint: (`categoryId`, `name`).

### Experience

| Column | Type | Constraints |
|--------|------|-------------|
| id | Int | PK, auto increment |
| organization | String | Required |
| role | String | Required |
| type | String | Required (e.g. Internship, Work, Organization, Freelance) |
| location | String | Nullable |
| startDate | Date | Required |
| endDate | Date | Nullable (null = Present) |
| highlights | String[] | Required (may be empty) |

### Education

| Column | Type | Constraints |
|--------|------|-------------|
| id | Int | PK, auto increment |
| institution | String | Required |
| degree | String | Required |
| fieldOfStudy | String | Required |
| startDate | Date | Required |
| endDate | Date | Nullable (null = Present) |
| description | Text | Nullable |

### Project

| Column | Type | Constraints |
|--------|------|-------------|
| id | Int | PK, auto increment |
| slug | String | Required, unique |
| title | String | Required |
| shortDescription | String | Required (max 200 characters) |
| description | Text | Required |
| role | String | Required |
| year | Int | Required |
| techStack | String[] | Required |
| thumbnailUrl | String | Required |
| demoUrl | String | Nullable |
| repoUrl | String | Nullable |
| displayOrder | Int | Required |
| createdAt | DateTime | Default now |
| updatedAt | DateTime | Auto update |

### ProjectImage

| Column | Type | Constraints |
|--------|------|-------------|
| id | Int | PK, auto increment |
| projectId | Int | FK → Project.id, required, cascade delete |
| imageUrl | String | Required |
| altText | String | Required |
| displayOrder | Int | Required |

---

## 9.5 Relationship Specifications

| Relationship | Type | Rule |
|--------------|------|------|
| SkillCategory → Skill | One to Many | A skill belongs to exactly one category |
| Project → ProjectImage | One to Many | Deleting a project deletes its images |

---

## 9.6 Business Rules

### Profile

- Table holds exactly one row.

### SkillCategory / Skill

- Skills are always displayed within their category.
- Order is determined by `displayOrder`.

### Experience / Education

- Displayed by `startDate` descending.
- `endDate` null means ongoing.

### Project

- `slug` is the public identifier and must be unique and URL-safe.
- `techStack` is displayed in stored order.

### ProjectImage

- Images belong to exactly one project and are sorted by `displayOrder`.

---

## 9.7 Data Integrity Rules

- Primary keys and foreign keys are enforced by the database.
- `slug` has a unique index.
- Seed script must be idempotent: running it multiple times must not create duplicates (use upsert on stable identifiers such as `slug`, category `name`, and Profile `id`).
- `endDate` must not be earlier than `startDate` (validated in seed script).
- The application never writes to the database at runtime.

---

## 9.8 Development Rules

- Schema changes must go through Prisma migrations.
- Do not add tables or columns outside this chapter without approval.
- Seed data is the only source of content.

---

# 10. Backend Design

## 10.1 Purpose

Define the server-side design inside the Next.js application.

---

## 10.2 Backend Architecture Overview

Backend consists of Route Handlers, Services, Repositories, Mappers, and shared utilities, all inside the Next.js project.

---

## 10.3 Backend Layer Responsibilities

| Layer | Responsibility |
|-------|----------------|
| Route Handler | HTTP handling, parameter validation, response formatting |
| Service | Sorting, grouping, not-found handling |
| Repository | Prisma queries |
| Mapper | Convert entities into DTOs |

---

## 10.4 Module Responsibilities

| Module | Responsibility |
|--------|----------------|
| Profile | Provide profile data |
| Skills | Provide categories with skills |
| Background | Provide experience and education |
| Project | Provide project list and detail |
| Theme | No backend responsibility |

---

## 10.5 Controller Design

| Route Handler | Endpoint |
|---------------|----------|
| `api/profile/route.ts` | GET /api/profile |
| `api/skills/route.ts` | GET /api/skills |
| `api/experiences/route.ts` | GET /api/experiences |
| `api/education/route.ts` | GET /api/education |
| `api/projects/route.ts` | GET /api/projects |
| `api/projects/[slug]/route.ts` | GET /api/projects/{slug} |

---

## 10.6 Service Design

| Service | Methods |
|---------|---------|
| ProfileService | getProfile |
| SkillService | getSkillsGroupedByCategory |
| ExperienceService | getExperiences |
| EducationService | getEducation |
| ProjectService | getProjectList, getProjectBySlug |

---

## 10.7 Repository Design

| Repository | Responsibility |
|------------|----------------|
| ProfileRepository | Read Profile |
| SkillCategoryRepository | Read categories with skills |
| ExperienceRepository | Read Experience |
| EducationRepository | Read Education |
| ProjectRepository | Read Projects and ProjectImages |

---

## 10.8 Entity Design

Entities are defined in `prisma/schema.prisma` following Chapter 9: Profile, SkillCategory, Skill, Experience, Education, Project, ProjectImage.

---

## 10.9 DTO Design

| DTO | Fields |
|-----|--------|
| ProfileDto | fullName, headline, shortIntro, aboutText, location, photoUrl, email, githubUrl, linkedinUrl |
| SkillCategoryDto | id, name, skills[ { id, name } ] |
| ExperienceDto | id, organization, role, type, location, startDate, endDate, highlights |
| EducationDto | id, institution, degree, fieldOfStudy, startDate, endDate, description |
| ProjectListItemDto | slug, title, shortDescription, thumbnailUrl, techStack |
| ProjectDetailDto | slug, title, shortDescription, description, role, year, techStack, thumbnailUrl, demoUrl, repoUrl, images[ { imageUrl, altText } ] |

---

## 10.10 Mapper Design

Each mapper converts a Prisma entity to its DTO, converts dates to ISO 8601 strings, and omits internal fields (`createdAt`, `updatedAt`, `displayOrder`, foreign keys).

---

## 10.11 Security Design

- Only GET is exported from Route Handlers; other methods return 405.
- No authentication is required.
- No user input is persisted.
- Slug is validated before querying.
- Internal errors are logged on the server and returned as a generic message.

---

## 10.12 Exception Handling Design

| Error | HTTP | Code |
|-------|------|------|
| Resource not found | 404 | NOT_FOUND |
| Invalid parameter | 400 | BAD_REQUEST |
| Method not allowed | 405 | METHOD_NOT_ALLOWED |
| Unexpected error | 500 | INTERNAL_ERROR |

A shared error utility converts thrown domain errors into the standard error response.

---

## 10.13 Development Rules

- Do not call Prisma outside repositories.
- Do not return entities directly; always map to DTOs.
- Do not add write operations.
- Keep API response shape consistent.

---

# 11. Frontend Design

## 11.1 Purpose

Define the structure and behavior of the user interface.

---

## 11.2 Frontend Overview

The frontend uses Next.js App Router with Server Components by default. Client Components are used only where interactivity is required (theme toggle, mobile menu, animations).

---

## 11.3 Frontend Structure

See Section 7.2.

---

## 11.4 Page Design

| Page | Route | Content |
|------|-------|---------|
| Home | `/` | Hero, About, Skills, Projects, Experience, Education |
| Project Detail | `/projects/[slug]` | Full project information |
| Not Found | any unknown route | Not Found message with link to Home |
| Error | on failure | Error message with retry/home option |

Home section order: Hero → About → Skills → Projects → Experience → Education.

---

## 11.5 Layout Design

- Root layout contains ThemeProvider, Navbar, page content, and Footer.
- Navbar: owner name/logo, section links (About, Skills, Projects, Experience, Education), theme toggle, mobile menu.
- Navbar links go to home anchors (`/#about`, etc.) from any page.
- Footer: social links (those available) and copyright text.

---

## 11.6 Component Design

| Component | Responsibility |
|-----------|----------------|
| Navbar | Navigation and theme toggle |
| ThemeToggle | Switch theme (Client Component) |
| Hero | UC-01 |
| About | UC-02 |
| Skills | UC-03 |
| Experience | UC-04 |
| Education | UC-05 |
| Projects | UC-06 (section wrapper) |
| ProjectCard | Preview card |
| ProjectGallery | Image gallery in detail page |
| ProjectLinks | Demo and Repository buttons |
| Reveal | Scroll-reveal animation wrapper |
| EmptyState / ErrorState | Empty and error messages |

---

## 11.7 Routing Design

| Route | Type |
|-------|------|
| `/` | Static/server-rendered |
| `/projects/[slug]` | Server-rendered; slugs pre-generated with `generateStaticParams` |
| `/api/*` | Route Handlers |

Unknown slugs call `notFound()`.

---

## 11.8 State Management Design

- No global state library.
- Theme state is managed by next-themes and persisted in localStorage.
- Mobile menu open/closed state is local component state.
- All content data comes from the server.

---

## 11.9 API Integration Design

- Pages and sections get data by calling services directly on the server.
- The REST API is available for external consumers and uses the same services.
- Client Components do not fetch content data.

---

## 11.10 Development Rules

- Prefer Server Components; add `"use client"` only when required.
- Use Tailwind CSS only for styling.
- Respect `prefers-reduced-motion` in all animations.
- Use the Next.js image component for all images.
- Visual design (colors, typography) is outside this version of the document and must be decided separately before UI implementation.

---

# 12. API Specification

## 12.1 Purpose

Document the read-only REST API provided by the application.

---

## 12.2 API Overview

| Item | Value |
|------|-------|
| Base path | `/api` |
| Format | JSON |
| Methods | GET only |
| Authentication | None |

---

## 12.3 Authentication

No authentication is required. All endpoints are public and read-only.

---

## 12.4 Common Headers

| Header | Value |
|--------|-------|
| Content-Type (response) | `application/json` |
| Accept (request) | `application/json` |

---

## 12.5 API Endpoints

| Feature | Method | Endpoint |
|---------|--------|----------|
| View Hero / About | GET | /api/profile |
| View Skills | GET | /api/skills |
| View Experience | GET | /api/experiences |
| View Education | GET | /api/education |
| View Project List | GET | /api/projects |
| View Project Detail | GET | /api/projects/{slug} |

---

## 12.6 Request Validation

- `slug` path parameter must match `^[a-z0-9]+(?:-[a-z0-9]+)*$`; otherwise HTTP 400.
- No request body or query parameters are accepted by any endpoint.

---

## 12.7 Response Specification

Success:

```json
{
  "success": true,
  "data": {}
}
```

Error:

```json
{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "Project not found"
  }
}
```

Example: `GET /api/projects/{slug}`

```json
{
  "success": true,
  "data": {
    "slug": "example-project",
    "title": "Example Project",
    "shortDescription": "Short summary.",
    "description": "Paragraph one.\n\nParagraph two.",
    "role": "Frontend Developer",
    "year": 2026,
    "techStack": ["Next.js", "Tailwind CSS"],
    "thumbnailUrl": "/images/projects/example-project/thumbnail.png",
    "demoUrl": "https://example.com",
    "repoUrl": null,
    "images": [
      { "imageUrl": "/images/projects/example-project/1.png", "altText": "Dashboard page" }
    ]
  }
}
```

Collection endpoints return `data` as an array (`/api/projects`, `/api/experiences`, `/api/education`, `/api/skills`). `/api/profile` returns a single object. Dates use ISO 8601 (`YYYY-MM-DD`).

---

## 12.8 HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 400 | Invalid parameter |
| 404 | Resource not found |
| 405 | Method not allowed |
| 500 | Internal server error |

---

## 12.9 Error Handling

- All errors use the standard error response format.
- Error messages are generic and do not expose internal details.
- Unexpected errors are logged on the server.

---

## 12.10 Development Rules

- Do not add endpoints beyond those listed.
- Do not add write methods.
- Do not change response format without approval.

---

# 13. Module Specification

## 13.1 Profile Module

### 13.1.1 Purpose

Present the owner's identity and public links.

### 13.1.2 Responsibilities

- Provide profile data to Hero and About.
- Display social links that exist.

### 13.1.3 Workflow

1. Visitor opens Home.
2. System loads Profile through ProfileService.
3. Hero and About render with profile data.

### 13.1.4 Module Interaction

```
Hero / About (Server Components)
   ↓
ProfileService
   ↓
ProfileRepository
   ↓
Profile table
```

### 13.1.5 Database

| Table | Responsibility |
|-------|----------------|
| Profile | Owner identity and links |

### 13.1.6 API

| Feature | Method | Endpoint |
|---------|--------|----------|
| View Profile | GET | /api/profile |

### 13.1.7 Backend Classes

| Layer | Class |
|-------|-------|
| Route Handler | `api/profile/route.ts` |
| Service | ProfileService |
| Repository | ProfileRepository |
| Mapper | ProfileMapper |

### 13.1.8 Frontend Components

Hero, About, Navbar, Footer.

### 13.1.9 Business Rules

- Social links displayed only when present.
- External links open in a new tab safely.

### 13.1.10 Development Rules

- Follow Chapters 4, 9, 10, 11, and 12.
- Do not add editing capability.

### 13.1.11 Acceptance Criteria

- Hero and About display correct data.
- Missing optional fields do not break layout.
- Missing Profile row shows an error state.

---

## 13.2 Skills Module

### 13.2.1 Purpose

Present skills grouped by category.

### 13.2.2 Responsibilities

- Retrieve categories with skills.
- Sort by display order.

### 13.2.3 Workflow

1. Visitor opens Skills section.
2. System loads categories with skills.
3. System renders each category and its skills.

### 13.2.4 Module Interaction

```
Skills (Server Component)
   ↓
SkillService
   ↓
SkillCategoryRepository
   ↓
SkillCategory, Skill tables
```

### 13.2.5 Database

| Table | Responsibility |
|-------|----------------|
| SkillCategory | Category name and order |
| Skill | Skill name and order |

### 13.2.6 API

| Feature | Method | Endpoint |
|---------|--------|----------|
| View Skills | GET | /api/skills |

### 13.2.7 Backend Classes

| Layer | Class |
|-------|-------|
| Route Handler | `api/skills/route.ts` |
| Service | SkillService |
| Repository | SkillCategoryRepository |
| Mapper | SkillMapper |

### 13.2.8 Frontend Components

Skills section, Tag.

### 13.2.9 Business Rules

- Grouped by category; sorted by `displayOrder`.
- No proficiency level shown.

### 13.2.10 Development Rules

- Do not add skill levels or percentages.

### 13.2.11 Acceptance Criteria

- Skills grouped and ordered correctly.
- Empty state when no data.

---

## 13.3 Background Module

### 13.3.1 Purpose

Present experience and education history.

### 13.3.2 Responsibilities

- Retrieve experience and education.
- Sort by start date descending.
- Format periods, showing "Present" for ongoing records.

### 13.3.3 Workflow

1. Visitor opens Experience or Education section.
2. System loads the records through the matching service.
3. System renders records in reverse chronological order.

### 13.3.4 Module Interaction

```
Experience / Education (Server Components)
   ↓
ExperienceService / EducationService
   ↓
ExperienceRepository / EducationRepository
   ↓
Experience, Education tables
```

### 13.3.5 Database

| Table | Responsibility |
|-------|----------------|
| Experience | Work, internship, organization, freelance records |
| Education | Education records |

### 13.3.6 API

| Feature | Method | Endpoint |
|---------|--------|----------|
| View Experience | GET | /api/experiences |
| View Education | GET | /api/education |

### 13.3.7 Backend Classes

| Layer | Class |
|-------|-------|
| Route Handler | `api/experiences/route.ts`, `api/education/route.ts` |
| Service | ExperienceService, EducationService |
| Repository | ExperienceRepository, EducationRepository |
| Mapper | ExperienceMapper, EducationMapper |

### 13.3.8 Frontend Components

Experience section, Education section, `format-date` utility.

### 13.3.9 Business Rules

- Latest start date first.
- Null `endDate` displays "Present".

### 13.3.10 Development Rules

- Keep date formatting in one shared utility.

### 13.3.11 Acceptance Criteria

- Records sorted correctly.
- Period formatted correctly.
- Empty state when no data.

---

## 13.4 Project Module

### 13.4.1 Purpose

Present projects as preview cards and provide a detail page per project.

### 13.4.2 Responsibilities

- Retrieve project list and project detail by slug.
- Validate slug.
- Handle not-found cases.
- Display gallery and optional links.

### 13.4.3 Workflow

1. Visitor views project cards on Home.
2. Visitor selects a card.
3. System validates slug and loads the project with images.
4. System renders the detail page, or Not Found if absent.

### 13.4.4 Module Interaction

```
Projects section / Project Detail page (Server Components)
   ↓
ProjectService
   ↓
ProjectRepository
   ↓
Project, ProjectImage tables
```

### 13.4.5 Database

| Table | Responsibility |
|-------|----------------|
| Project | Project information |
| ProjectImage | Gallery images |

### 13.4.6 API

| Feature | Method | Endpoint |
|---------|--------|----------|
| View Project List | GET | /api/projects |
| View Project Detail | GET | /api/projects/{slug} |

### 13.4.7 Backend Classes

| Layer | Class |
|-------|-------|
| Route Handler | `api/projects/route.ts`, `api/projects/[slug]/route.ts` |
| Service | ProjectService |
| Repository | ProjectRepository |
| Mapper | ProjectMapper |

### 13.4.8 Frontend Components

Projects section, ProjectCard, ProjectGallery, ProjectLinks, Tag.

### 13.4.9 Business Rules

- Cards are previews; detail page holds full content.
- Demo and Repository links shown only when present.
- Slug is the public identifier.

### 13.4.10 Development Rules

- Do not add search, filter, sorting UI, or pagination.
- Do not change slug format.

### 13.4.11 Acceptance Criteria

- Cards link to the correct detail page.
- Detail page shows all required information.
- Unknown or invalid slug shows Not Found (404).
- Optional links appear only when available.

---

## 13.5 Theme Module

### 13.5.1 Purpose

Allow visitors to switch between dark and light mode.

### 13.5.2 Responsibilities

- Apply saved or system theme on load.
- Toggle theme and persist the choice in the browser.

### 13.5.3 Workflow

1. Page loads; theme is applied before first paint.
2. Visitor selects the toggle.
3. Theme changes and preference is saved in localStorage.

### 13.5.4 Module Interaction

```
ThemeToggle (Client Component)
   ↓
next-themes ThemeProvider
   ↓
`dark` class on root element + localStorage
```

### 13.5.5 Database

Not applicable. Theme preference is not stored in the database.

### 13.5.6 API

Not applicable.

### 13.5.7 Backend Classes

Not applicable.

### 13.5.8 Frontend Components

ThemeProvider, ThemeToggle.

### 13.5.9 Business Rules

- Default follows system preference.
- Allowed values: `light`, `dark`.

### 13.5.10 Development Rules

- Use Tailwind class-based dark mode.
- Do not store theme in the database.

### 13.5.11 Acceptance Criteria

- Toggle switches theme immediately.
- Preference persists across reloads.
- No flash of incorrect theme on load.
