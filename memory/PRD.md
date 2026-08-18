# PRD — The Source : Find Yourself

## Original Problem Statement
Use the provided 4K video animation to create a website's landing page. Glass effect on a blackish tone, very professional, high-tech psychology feel. Minimal content (real copy to come later). Attractive fonts giving an impression of change / mystic.

## User Choices
- Video: fullscreen background in hero (+ subtle reuse later)
- Sections: Hero only — one striking screen
- Language: English placeholders
- Brand: "The Source : Find Yourself"

## Architecture
- React (CRA + craco), Tailwind, framer-motion. Backend untouched (template FastAPI + Mongo, no APIs needed yet).
- Video asset: user's 82MB 4K mp4 transcoded via ffmpeg to:
  - `/app/frontend/public/source-bg.mp4` (1080p H.264, 10.9MB, faststart) — primary
  - `/app/frontend/public/source-bg.webm` (720p VP9, 3.4MB) — fallback (also required for headless testing, which lacks H.264)
  - `/app/frontend/public/source-poster.jpg` — instant-paint poster
- Fonts: Cormorant Garamond (mystic headings) + Montserrat (wide-tracked UI labels)

## Implemented (Jun 2026)
- Single-screen (100vh, no scroll) landing: `src/pages/Landing.jsx`
- `Hero.jsx`: video bg + vignette overlay, black-screen fade-in, kinetic char-by-char blur-to-sharp reveal (`BlurTextReveal.jsx`), letter-spacing expanding eyebrow, glass CTA "Begin the Journey" with sheen sweep hover
- `Header.jsx`: floating glass pill nav (Method / Sessions / Contact placeholders, pulse "Now Open" dot)
- `FooterStrip.jsx`: slow editorial marquee (Perception · Stillness · Transformation…) in glass pill, "01 / Prologue" + "MMXXVI" flanks
- Film grain overlay, custom selection color, reduced-motion fallbacks, data-testids everywhere

## Backlog / Next
- P0: Real content from user (copy for sections) — user said "I will tell you the content later"
- P1: Additional sections (Method / Sessions / Contact) with scroll + lenis when content arrives; subtle video reuse in later sections
- P2: Mobile nav menu, sound toggle if user provides audio version, SEO meta/OG tags
