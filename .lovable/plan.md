## Plan — V_KINETIC video editor portfolio (Colorist's Suite direction)

Build a single-page premium portfolio matching the chosen prototype: deep black canvas (#09090b), orange accent (#f97316), Inter + JetBrains Mono, timecode/scrub-bar UI chrome.

### Tech & setup
- Add deps: `framer-motion`, `@fontsource/inter`, `@fontsource/jetbrains-mono`.
- Define design tokens in `src/styles.css` verbatim from the prototype (`--canvas`, `--surface`, `--accent`, `--accent-dim`) mapped via `@theme inline`.
- Load fonts via `<link>` tag in `__root.tsx` head (or fontsource imports in entry).
- Update root meta: title "V_KINETIC — Video Editor & Motion Designer", description, og tags, canonical.

### Routing
Single long-scroll page at `/` (`src/routes/index.tsx`) with anchored sections; smooth scroll + scroll-reveal via Framer Motion `whileInView`.

### Components (in `src/components/site/`)
1. **PageLoader** — full-bleed black overlay with animated REC indicator + scrub bar fill; exits after mount.
2. **Nav** — fixed top scrub-bar nav with REC [•], V_KINETIC wordmark, Work/Showreel/Skills/About/Contact links, Contact CTA, animated scrub progress bar tied to scroll.
3. **Hero** — full-screen autoplay muted looped showreel `<video>` background (lazy `preload="metadata"`, poster image), gradient overlay, timecode chip, H1 "Crafting Engaging Visual Stories Through Video Editing", subtitle, View Portfolio + Contact Me CTAs. Subtle parallax on scroll.
4. **FeaturedShowreel** — glassmorphism `bg-surface` card with metadata header (Project ID, Status), 16:9 embedded video player with custom orange play button overlay.
5. **PortfolioGallery** — section header + filter pills (All / Commercial Ads / YouTube / Reels & Shorts / Motion Graphics / Color Grading). Grid of project cards (6–9 mock projects) using `gap-px` hairline grid from prototype. Cards: aspect-4/3 thumbnail, category tag in orange mono, title, year. Filter via local state with `AnimatePresence` + `layout` animations. Click → opens **ProjectModal**.
6. **ProjectModal** — Dialog with large embedded video, description, client, tools used, before/after slider (draggable divider), stats grid (views, duration, year).
7. **Skills** — two-column layout: heading + copy on left, animated progress bars on right for Premiere Pro, After Effects, DaVinci Resolve, Photoshop, Illustrator. Bars animate width on `whileInView`.
8. **Testimonials** — 3-column grid of glass cards with star ratings, quote, client name + role.
9. **About** — split layout: professional photo (generated) + bio, plus stat counters (years experience, projects completed, clients, awards) that count up on view.
10. **Contact** — left: large mailto link, social row (Instagram, LinkedIn, WhatsApp), location. Right: contact form (name, email, message) with bottom-border inputs, orange submit button. WhatsApp floating action button bottom-right.
11. **Footer** — copyright, tech metadata strip (4.2K_RES_EXPORT, FRAME_RATE: 23.976), quick links.

### Animations (Framer Motion)
- Section reveals: `initial={{opacity:0, y:24}}`, `whileInView={{opacity:1, y:0}}`, `viewport={{once:true, margin:"-100px"}}`.
- Progress bars animate width from 0 to target on view.
- Stat counters use motion values.
- Page loader exits with `AnimatePresence`.
- Nav scrub bar driven by `useScroll`.
- Smooth scroll via `scroll-behavior: smooth` in CSS.

### Assets
- Generate ~9 portfolio thumbnails (cinematic frames matching prompts in prototype).
- Generate 1 hero showreel poster image; use a sample loop video URL (or generated short clip placeholder).
- Generate 1 about photo (professional editor at color grading suite).
- All via `imagegen` saved to `src/assets/`.

### SEO
- Per-route head() with title, description, og:title/description/url, twitter:card, canonical (relative).
- JSON-LD `Person` schema (name, jobTitle, sameAs socials).
- Semantic HTML (single H1, section landmarks, img alts).
- Lazy load videos (`preload="metadata"`, `loading="lazy"` on images).

### Out of scope
- No backend / contact form submission (form is client-only, shows toast on submit). Can wire to Lovable Cloud later if requested.
- No real video files hosted — use a public CDN sample (e.g. Coverr / Pexels mp4) for hero/showreel.
