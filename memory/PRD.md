# PRD — The Source : Find Yourself

## Original Problem Statement
Use the provided 4K video animation to create a website's landing page. Glass effect on a blackish tone, very professional, high-tech psychology feel. Awwwards Site-of-the-Day quality — large kinetic hero, on-load moment, smooth scrolling, premium motion. Brand: "The Source : Find Yourself".

## User Choices
- Video: fullscreen background in hero (kept even alongside later sections — user reaffirmed on Jul 2026)
- Full 9-section content brief provided (see below)
- App store links: placeholder `#` — user will paste real URLs later
- Partner logo assets: text wordmarks styled minimally — user will upload official logos later
- Language: English
- Brand: "The Source : Find Yourself"

## Architecture
- React (CRA + craco), Tailwind, framer-motion. Backend untouched (template FastAPI + Mongo).
- Video asset: 1080p H.264 mp4 + VP9 webm fallback + poster jpg in `/app/frontend/public/`
- Fonts: Cormorant Garamond (serif display), Montserrat (UI labels)
- Palette: near-black (#050505) + muted gold accent (#d4b26c via `--gold` CSS var)
- Landing composes sections in `src/pages/Landing.jsx`

## Implemented (Jul 2026)

### Hero (updated per new brief)
- Eyebrow "The Source" (gold), headline "Know Your Truth", subheading (roles/noise copy), CTA "Tell me more" → scroll to Problem
- Kept video bg + on-load black fade + kinetic BlurTextReveal + FooterStrip inside hero

### Section 2 — Problem
- `ProblemSection.jsx`: 4-block scroll-driven vertical cross-fade using `useScroll`/`useTransform` inside a `sticky top-0 h-screen` viewport within a 400vh container. Progress underline advances as user scrolls; scroll-reverse works.

### Section 3 — Product (3 beats)
- Beat 1 — Master: `MasterFigure.jsx` SVG silhouette with warm halo/rim-light (dark presence, not photograph)
- Beat 2 — Three layers of mind: `MindLayers.jsx` animated concentric rings (Conscious/Subconscious/Superconscious) with glowing core and orbital shimmer
- Beat 3 — The product: `ConnectionThread.jsx` two soft light points with pulsing warm thread

### Section 4 — Benefits
- `BenefitsSection.jsx`: 4 benefits (Know Who You Are, Live From Authenticity, Live in Harmony, Clarity and Commitment) with thin gold lucide-react line icons (Eye, Flame, Circle, Compass)

### Section 5 — Why Source Is Different
- `DifferenceSection.jsx`: manifesto intro + 4 contrast rows with thin vertical gold divider (Symptom vs Source, Session vs Relationship, Trained vs Realized, Managing vs Becoming)

### Section 6 — Testimonials
- `TestimonialsSection.jsx`: auto-rotating (6.5s) quote carousel, 4 quotes, abstract warm-glow avatar, tap-to-select underline dots

### Section 7 — App Download
- `AppDownloadSection.jsx`: Apple App Store + Google Play glass badges (hrefs = "#", "Coming Soon" label)

### Section 8 — Cloud Partners
- `PartnersSection.jsx`: "Backed by" label + Google for Startups & ElevenLabs Grants text wordmarks (muted gold hover)

### Section 9 — Footer
- `SiteFooter.jsx`: brand mark, Terms/Privacy links, Instagram/TikTok/YouTube/X icons (thin-line, gold hover), © 2026 line

### Site-wide
- `Header.jsx`: fixed glass nav, section-scroll buttons (Problem, The Product, Different, Download), pulse "Now Open" dot
- Film grain, MysticCursor, native smooth-scroll, `overflow-x: clip` (preserves sticky positioning)
- data-testid on every interactive/critical element

## Backlog / Next
- P0: User to provide real App Store + Google Play URLs, and official Google for Startups + ElevenLabs Grants logo assets
- P1: Mobile hamburger menu (full-screen glass overlay) for header nav
- P1: Contact section with minimal glass form (name/email/intention)
- P2: Lenis / momentum smooth-scroll library for even silkier scroll
- P2: Claude Sonnet AI guide integration (originally requested Message 51 — still on ice pending user product definition)
- P2: SEO meta/OG tags, favicons
