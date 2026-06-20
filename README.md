# Vivek — Portfolio

A premium graphic design / video editing portfolio (with a quiet developer section), built with Next.js 15 App Router, TypeScript, Tailwind CSS, Framer Motion, and GSAP.

## Design system

- **Background** `#F6F0E7` (paper) · **Primary** `#355B3E` (forest) · **Accent** `#F5B82E` (mustard) · **Text** `#111111` (ink)
- **Display type:** Anton (massive poster headlines)
- **Accent type:** Fraunces italic (editorial voice — pull quotes, subheads)
- **Body / UI:** Inter
- **Captions / labels:** Space Mono, uppercase, wide tracking

Signature elements: a faint 12-column Swiss grid fixed behind the whole page, an SVG-noise grain overlay, crop-mark (registration mark) accents on eyebrows, and a scrolling mustard marquee ribbon between the hero and the work grid — together they make the page read like a designer's layout board rather than a flat template.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
src/
  app/
    layout.tsx        Fonts, grain + grid overlays
    page.tsx           Section order
    globals.css
  components/
    Nav.tsx
    GsapScrollProvider.tsx   Registers GSAP ScrollTrigger, drives data-parallax elements
    sections/           Hero, FeaturedWork, GraphicDesign, VideoEditing, Development, About, Contact
    ui/                  RevealText, MagneticButton, ProjectCard, Marquee, GrainOverlay, GridGuides
  data/
    projects.ts         All project content — edit this to swap in real work
```

## Swapping in real content

1. Open `src/data/projects.ts` and replace the placeholder Unsplash URLs with real project images (drop files into `public/images/` and reference them as `/images/your-file.jpg`).
2. Update copy in `src/components/sections/About.tsx` and `Contact.tsx`.
3. Update social links in `Contact.tsx`.

## Notes

- Images currently point to Unsplash placeholders — swap for real work before launch.
- Respect-for-motion: all animation backs off automatically under `prefers-reduced-motion`.
- The Development section is intentionally lower-contrast and lower on the page, per the brief — it should read as a bonus discovery, not a primary section.
