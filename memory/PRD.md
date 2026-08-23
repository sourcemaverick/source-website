# PRD — The Source : Find Yourself

## Original Problem Statement
Awwwards-quality landing page for "The Source : Find Yourself" — a dark, minimalist psychology / spiritual brand using the user's provided kinetic video background, glassmorphism, warm-gold accent, and premium motion.

## User Choices
- Hero background: kept the provided 4K video (transcoded to 1080p mp4 + VP9 webm + poster jpg)
- Full 9-section content brief authored by user
- App Store live URL: `apps.apple.com/in/app/source-inner-transformation/id6761737790`
- Google Play live URL: `play.google.com/apps/testing/com.superreal.source.android`
- Partner logos supplied — Google (image asset) with "for Startups" text below; ElevenLabs Grants image from ElevenLabs CDN
- Language: English
- Brand: "The Source : Find Yourself"

## Architecture
- React (CRA + craco), Tailwind, framer-motion, lucide-react. Backend: FastAPI + MongoDB (Motor async).
- Fonts: Cormorant Garamond serif (display) + Montserrat sans (UI labels)
- Palette: near-black `#050505` + muted gold `#d4b26c` (`--gold`)
- Landing composes sections in `src/pages/Landing.jsx`

## Implemented

### Hero
- Eyebrow "The Source", headline "Know Your Truth", subheading, CTA "Tell me more" → smooth-scrolls to Problem
- On-load black fade, kinetic BlurTextReveal, video bg + vignette + film grain
- FooterStrip (glass marquee) contained inside Hero

### Sections (top → bottom)
1. **Hero** — Video + kinetic hero
2. **Problem** — `sticky top-0 h-screen` inside a 400vh container; 4 poetic lines cross-fade using `useScroll`/`useTransform`, reverses on scroll-up. Progress underline in muted gold.
3. **Product** — 3 beats:
   - Master figure = real Unsplash spiritual portrait (`photo-1768895124631-213163435e30`) heavily treated with brightness/contrast, warm rim halo, central darkening, bottom fade-into-ink, edge vignette, and two drifting light particles
   - Mind Layers = SVG concentric rings (Conscious/Subconscious/Superconscious) with glowing gold core and slow orbital shimmer
   - Connection Thread = two pulsing light points connected by a warm gradient thread
4. **Benefits** — 4 items (Eye/Flame/Circle/Compass thin gold lucide icons)
5. **Difference** — Manifesto intro + 4 contrast rows with thin gold vertical divider
6. **Testimonials** — Auto-rotating carousel (6.5s), abstract warm-glow avatar, underline dots
7. **Contact** — Glass form (name / email / intention), noValidate, live to `POST /api/contact`, EmailStr backend validation, success state with "Received." message + "Write again" reset
8. **Download** — Apple App Store + Google Play glass badges with the real store URLs; "Available now" label
9. **Partners** — Real Google logo image + "for Startups" text + ElevenLabs Grants image (70% opacity, brighten on hover)
10. **Footer** — Brand mark, Terms/Privacy, Instagram/TikTok/YouTube/X thin-line icons, © 2026 line

### Site-wide
- **Header**: fixed glass pill nav (desktop) + full-screen glass mobile overlay (`z-[35]`) with animated staggered links, numbered `01/02/…` gold eyebrows, `X` toggle, body scroll lock while open
- Native smooth scroll, `overflow-x: clip` on body (preserves sticky positioning)
- Film grain, MysticCursor, section jump navigation, data-testid on every interactive/critical element

### Share Card / SEO
- `/public/index.html`: title, description, `og:title/description/image/image:width/height/alt`, `twitter:card=summary_large_image`, apple-mobile-web-app tags, theme-color
- OG image at `/public/og-image.jpg` (1200×630, extracted from hero video via ffmpeg)

### Backend
- `POST /api/contact` → validates via Pydantic (EmailStr + length), persists to Mongo `contact_submissions`, returns `{id, name, email, intention, created_at}`
- Existing `/api/`, `/api/status` untouched

## Verified (Jul 2026)
- Backend: 7/7 pytest passing (via testing agent) — happy path, missing fields → 422, invalid email → 422, regression on / and /status
- Frontend: all 10 sections render, desktop smooth-scroll nav, hero CTA, Problem sticky cross-fade at 12.5%/37.5%/62.5%/87.5%, testimonial auto-rotate + manual dot switching, contact happy path + invalid-email UX (custom error), download badges have real hrefs, partner logo images load 200, OG meta tags + og-image.jpg resolve 200, mobile menu (390×844) opens/closes, links scroll & close overlay, body scroll locked while open

## Backlog / Next
- P2: Lenis / momentum smooth-scroll library for silkier feel across long page
- P2: Claude Sonnet AI guide integration (originally requested — still awaiting product definition from user)
- P2: Real portrait photograph swap when user provides their preferred image (current is a treated Unsplash statue)
- P2: Add `/admin` dashboard or CSV export for `contact_submissions`
- P2: Favicon + touch-icons and manifest updates
