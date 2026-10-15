# Mobile Layout Alignment Fixes & Projects Section Removal

Comprehensive plan to resolve mobile layout wrapping issues in the GitHub Recent Activity card, align the Contact Information Location row, and remove the Projects showcase section from the homepage as confirmed.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following decisions were clarified and confirmed in Phase 1:

- **Confirmed Decision 1 (Homepage Section Scope)**: The user confirmed removal of the entire **Works & Projects showcase section** from the homepage.
  - Navbar links and Hero CTA buttons (`Explore Projects`) will be smoothly redirected to `#skills` and `#contact` to keep all navigation functional.
- **Confirmed Decision 2 (Mobile Repository Text Wrapping)**: Long underscore-separated repository names (such as `music_player_management_system_backend`) in the GitHub Recent Activity card will wrap cleanly onto subsequent lines using `break-all` and `overflow-wrap: anywhere` to prevent card overflow.
- **Confirmed Decision 3 (Contact Info Alignment)**: In `Contact.tsx`, the Location entry will be aligned to match Email and Role using uniform icon container dimensions (`w-12 h-12 shrink-0 flex items-center justify-center`), consistent label/value vertical stack, and equal gaps across all viewport widths.

---

## 1. Overview & Core Concept

- **What It Does**: Polishes mobile responsiveness across the developer portfolio:
  1. Fixes the GitHub Recent Activity card so long repository titles wrap naturally on narrow screens without breaking layout borders.
  2. Aligns the Contact Information card rows (Email, Location, Role) with equal padding and icon placement.
  3. Streamlines the homepage flow by removing the Projects showcase section and updating navigation affordances.
- **Target Audience**: Mobile recruiters, engineering peers, and visitors reviewing Jay Dudhat's portfolio on handheld devices.
- **Key Value**: Flawless visual consistency, zero horizontal overflow, and clean visual rhythm on all smartphone screens.

---

## 2. User Experience & Visual Design

### Key User Flows & Visual Touchpoints
1. **Homepage Streamlined Flow**:
   - `Hero` (Photo top on mobile, headline, Sem 3 focus badges, CTAs)
   - `Technical Arsenal (Skills)` (Frontend, Core CS, DBMS, Dev Tools)
   - `Academic Journey & Developer Status` (Timeline + Telemetry + GitHub Recent Activity)
   - `Interactive Terminal Shell` (CLI emulator)
   - `Contact` (Direct contact info + interactive message form with confirmation state)
2. **GitHub Activity Card Mobile Polish**:
   - Repository titles use `break-all` and `leading-snug`, keeping language dots (`Java`, `TypeScript`) and star counters anchored below the title with consistent spacing.
3. **Contact Information Alignment**:
   - Uniform icon circles: `w-12 h-12 rounded-full bg-accent/10 text-accent shrink-0`.
   - Text stack: `text-xs text-secondary/70` for label, `text-sm font-semibold text-white` for values.
   - Perfectly balanced left margin across Email, Location, and Role.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Removal of WorksWheel Component from Home.tsx**:
  - *Chosen Approach*: Unmount `<WorksWheel />` from `Home.tsx`, and update top navigation in `Navbar.tsx` and Command Palette to remove the dead `#work` anchor link.
  - *Why*: Eliminates unneeded section while maintaining clean navigation without broken internal links.
- **Decision 2: Word Breaking Strategy for Code Repositories**:
  - *Chosen Approach*: Apply `break-all` and `hyphens-none` to repository names in `GitHubSection.tsx`.
  - *Why*: GitHub repository names typically use underscores or hyphens (`music_player_management_system_backend`); default browser word-break rules do not break on underscores, causing container overflow on 360px–390px screens.

---

## 4. Technical Architecture & Component Structure

```
┌─────────────────────────────────────────────────────────────┐
│                          App.tsx                            │
│  ┌───────────────────────┐       ┌───────────────────────┐  │
│  │      Navbar.tsx       │       │    CustomCursor.tsx   │  │
│  └───────────────────────┘       └───────────────────────┘  │
│                             │                               │
│                             ▼                               │
│                         Home.tsx                            │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ Hero.tsx (Full-width, Photo-first on Mobile)          │  │
│  ├───────────────────────────────────────────────────────┤  │
│  │ Skills.tsx (Technical Arsenal Grid)                   │  │
│  ├───────────────────────────────────────────────────────┤  │
│  │ Split Row (Journey.tsx & Status + GitHubSection.tsx)  │  │
│  │   └─ Fixed: break-all on repo titles                  │  │
│  ├───────────────────────────────────────────────────────┤  │
│  │ TerminalSection.tsx (Developer CLI)                   │  │
│  ├───────────────────────────────────────────────────────┤  │
│  │ Contact.tsx                                           │  │
│  │   └─ Fixed: Unified w-12 h-12 icon grid alignment     │  │
│  └───────────────────────────────────────────────────────┘  │
│                             │                               │
│                             ▼                               │
│                        Footer.tsx                           │
└─────────────────────────────────────────────────────────────┘
```

### Affected Files & Scope
- `src/pages/Home.tsx`: Remove `<WorksWheel />` and its container.
- `src/components/Navbar.tsx`: Remove "Work" from nav links so menu items link to valid sections (`About`, `Skills`, `Journey`, `Contact`).
- `src/components/Hero.tsx`: Update primary CTA button from `#work` to `#skills` ("Explore Skills").
- `src/components/GitHubSection.tsx`: Add `break-all` and text wrap utilities to repository titles.
- `src/components/Contact.tsx`: Align Location container with identical icon wrapper structure and margin as Email and Role.
- `src/components/CommandPalette.tsx`: Update command items to remove the Projects shortcut.
