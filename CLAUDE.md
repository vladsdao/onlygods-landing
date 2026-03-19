# ONLYGODS SITE CONTEXT

## Architecture
Static HTML site — no framework, no build, no dependencies.

MAIN PAGES (8, visible in nav):
  manifest.html, technologies.html (Holy Tech), creators.html, mindset.html (Mindset 2.0),
  quantumlab.html (Quantum Lab), activities.html, playground.html, dao.html

SUPPORT PAGES (in nav implicitly or standalone):
  index.html (landing + #join), publications.html, metaphysics.html, events.html, shop.html, roadmap.html

PROFILE/SUBPAGES (linked from main pages, not in nav):
  vlad.html, liza.html, misha.html, mybogi.html, gameover.html, retreat.html,
  quantumkitchen.html, egregore.html, neuropractice.html, sexuality.html, business.html,
  confidence.html, equinox.html

LEGACY (kept for now, superseded):
  family.html (→ creators.html), alignment.html (→ mindset.html), community.html (→ creators.html)

UTILITY: 404.html, index-backup.html, app.html (PWA shell)
TOTAL: 34 HTML files

- Nav (8 visible): Manifest | Holy Tech | Creators | Mindset 2.0 | Quantum Lab | Activities | Playground | DAO
- Hidden pages (exist but NOT in nav): Events, Shop, Roadmap, Metaphysics, Publications
- Nav is duplicated in EVERY .html file — desktop (.nav-links) + mobile (.nav-mobile). Any nav change = update ALL 34 files.
- Nav includes Join button (links to index.html#join) with margin-right: auto (groups with wordmark on left).
- Favicon: icons/icon-192.png (linked in all pages).
- i18n: translations.js — `data-i18n` attributes → `innerHTML` injection. 3 langs: ru/en/ua.
- Key convention: `{page}.{section}.{element}` (e.g. `technologies.tools.title`)
- CSS: inline `<style>` per page. Fonts: Cormorant Garamond (headings) + DM Sans (body).
- Colors: #1d1d1f (text), #86868b (secondary), #fbfbfd (cards), #ffffff (bg).
- Exception: dao.html, equinox.html use DARK THEME — #0a0a0a bg, #f5f5f7 text, #6e6e73 secondary, rgba(245,245,247,0.08) dividers.
- Assets: images in onlygods/ root (architects.jpg, game-over.webp, vlad-photo.png, liza-photo.jpg, mybogi-*.jpg).
- PWA: app.html + app/ directory + sw.js + manifest.webmanifest (Playground auth gateway)

## Deploy Workflow
Source → GitHub → Netlify (auto-deploy on push to main).
1. Source files: /Users/apple/CLAUDE/Vlad/data/onlygods/
2. Git repo clone: /tmp/onlygods-landing/ (github.com/vladsdao/onlygods-landing)
3. Deploy: cp files to /tmp/onlygods-landing/ → git add → commit → push origin main
4. Auth: SSH key (~/.ssh/id_ed25519) — remote URL must be git@github.com:vladsdao/onlygods-landing.git
5. Netlify auto-deploys main → onlygods.xyz
6. Preview: python3 -m http.server 8099 (launch.json: "onlygods-dev")

## Current Site Status
Updated: 2026-03-17
- Live: 34 pages on onlygods.xyz (8 in nav + 26 support/profile/subpages)
- Holy Tech (technologies.html): 5 content sections rewritten + Upcoming Features (4 cards)
- Creators (creators.html): Vlad + Liza bios, Founder labels, no members section
- Mindset 2.0 (mindset.html): education hub — 3 course cards + publications carousel (Game Over, Confidence, Equinox + 1 placeholder) + videos
- Join section (index.html#join): two-column layout — project summary, conditions, form
- Subpages: egregore.html, neuropractice.html, sexuality.html (placeholders)
- Metaphysics: 9 pillars article
- DAO: full dark theme inversion (black bg, white text)
- Equinox: dark theme article by Liza + inline SVG visualizations
- Q&A (index): V3 rewrite — balanced voice + science
- Quantum Lab: ir4 featured + 4 research areas + publications list
- Playground: Supabase Auth gateway (email + Google OAuth), waitlist/invite flow
- Roadmap: placeholder timeline (needs real content/media from Vlad)
- Pending: Shop course card, i18n for new sections, orphan file cleanup
