# 📸 Image Guide — Drona Valley Public School website

The site is designed around real photography, but **every image slot has a
polished illustrated fallback** (a soft gradient + emoji panel) so the live
site never looks broken. The moment you commit a file at the exact path below,
the photo automatically appears in its place — no code changes needed.

## How to add images

1. Put your files in **`public/images/`** using the **exact filenames** listed
   below (case-sensitive).
2. Recommended format: **`.jpg`** (or `.webp`). Optimise to keep each file
   under ~300 KB where possible.
3. Commit & push — Vercel redeploys and the images go live.

> Tip: keep the suggested **aspect ratio** so nothing gets awkwardly cropped.
> All photos are shown with `object-fit: cover`, centred.

## Art direction (for consistency / AI generation)

Aim for one cohesive look across every image:

> **Style:** warm, bright, natural daylight; candid and joyful (not stiff or
> posed); soft premium color grade with gentle golden warmth; shallow depth of
> field. **Subjects:** happy, diverse 2–6 year olds genuinely playing and
> learning; kind teachers in the background. **Setting:** a beautiful, tidy,
> upmarket pre-school — wooden toys, plants, soft rugs, lots of light.
> **Avoid:** stocky/corporate vibes, watermarks, text, distorted hands/faces.

---

## The image list

### Home page
| Filename (`public/images/…`) | Where it appears | Aspect / size | What to show |
|---|---|---|---|
| `hero-main.jpg` | Hero — main organic portrait | **4:5 portrait**, ~1000×1250 | A single delighted child mid-play (painting, blocks, giggling). The hero shot — make it your best. |
| `hero-secondary.jpg` | Hero — small peeking tile | **1:1 square**, ~600×600 | Outdoor garden play / nature moment. |
| `experience-art.jpg` | "Life at Drona Valley" tile (large) | 4:3 landscape, ~1200×900 | Messy, colourful art in action — painty hands. |
| `experience-garden.jpg` | "Life at Drona Valley" tile | 1:1, ~800×800 | Child planting / watering in the garden. |
| `experience-reading.jpg` | "Life at Drona Valley" tile | 1:1, ~800×800 | Cosy story-time / reading corner. |
| `experience-music.jpg` | "Life at Drona Valley" tile | 4:3, ~1200×900 | Music & movement — instruments, dancing. |
| `principal.jpg` | Head of School message | **4:5 portrait**, ~900×1125 | Warm portrait of the Head/Principal (smiling, approachable). |
| `cta-visit.jpg` | "Book a visit" call-to-action | **4:5 portrait**, ~900×1125 | Parent + child on a happy campus tour. |

### Our Classes page (`/programs`)
| Filename | Where | Aspect / size | What to show |
|---|---|---|---|
| `class-play.jpg` | Play class card (2–3 yrs) | **16:10**, ~1000×625 | Toddlers (2–3) in sensory / cuddle play. |
| `class-nursery.jpg` | Nursery card (3–4 yrs) | 16:10, ~1000×625 | 3–4 year olds exploring / circle time. |
| `class-lkg.jpg` | Lower Kindergarten card (4–5 yrs) | 16:10, ~1000×625 | 4–5 year olds doing hands-on activities. |
| `class-ukg.jpg` | Upper Kindergarten card (5–6 yrs) | 16:10, ~1000×625 | 5–6 year olds reading / presenting. |
| `programs-banner.jpg` | Wide philosophy banner | **wide 21:9**, ~1600×700 | Group of children deep in joyful learning. |

### Life @ Drona Valley — Gallery (`/gallery`)
Mosaic wall. `gallery-art` and `gallery-music` are the **tall** tiles;
`gallery-festivals` is the **wide** tile — pick your most dynamic shots for those.

| Filename | Tile | Aspect / size | What to show |
|---|---|---|---|
| `gallery-art.jpg` | tall | 3:4, ~900×1200 | Art Mondays — painting / crafts. |
| `gallery-garden.jpg` | square | 1:1, ~800×800 | The little garden. |
| `gallery-story.jpg` | square | 1:1, ~800×800 | Story circle. |
| `gallery-music.jpg` | tall | 3:4, ~900×1200 | Music & movement. |
| `gallery-discovery.jpg` | square | 1:1, ~800×800 | Puzzles / building blocks. |
| `gallery-outdoor.jpg` | square | 1:1, ~800×800 | Outdoor / sports play. |
| `gallery-drama.jpg` | square | 1:1, ~800×800 | Dress-up & drama. |
| `gallery-festivals.jpg` | **wide** | 16:9, ~1600×900 | Festival / celebration with friends. |
| `gallery-snack.jpg` | square | 1:1, ~800×800 | Healthy snack time. |
| `gallery-science.jpg` | square | 1:1, ~800×800 | Bubble science / experiments. |
| `gallery-cuddle.jpg` | square | 1:1, ~800×800 | Quiet cuddle / calm corner. |

### About page (`/about`)
| Filename | Where | Aspect / size | What to show |
|---|---|---|---|
| `about-story.jpg` | "Our story" portrait | **4:5 portrait**, ~1000×1250 | Teachers + children sharing a warm, candid moment. |

### Admissions page (`/admissions`)
| Filename | Where | Aspect / size | What to show |
|---|---|---|---|
| `admissions-welcome.jpg` | Sidebar welcome card | **16:10**, ~1000×625 | A child arriving with a backpack — a happy "first day" feel. |

### Contact page (`/contact`)
| Filename | Where | Aspect / size | What to show |
|---|---|---|---|
| `contact-campus.jpg` | Campus banner above map | **wide 16:9**, ~1600×900 | Exterior / entrance of the campus, inviting and bright. |

---

## Optional brand replacements

| Filename | Where | Notes |
|---|---|---|
| `public/og.svg` | Social share preview (Open Graph) | Already provided as SVG. Replace with `og.jpg` (1200×630) if you prefer a photo card — then update `app/layout.tsx` `openGraph.images`. |
| Elden Heights logo | Header / footer crest | The crest is currently a faithful **inline SVG** (`components/brand/EldenHeightsLogo.tsx`) so it's always crisp. To use the official artwork instead, add `public/images/elden-heights-logo.png` and swap the `<EldenHeightsCrest/>` for a `next/image`. |

---

### Quick checklist
- [ ] All files in `public/images/`
- [ ] Exact filenames (lowercase, hyphens, `.jpg`)
- [ ] Compressed (< ~300 KB each)
- [ ] Faces sharp & centred (cover-cropped)
- [ ] Commit → push → live ✨
