# Drona Valley Public School

A playful-yet-luxury marketing website for **Drona Valley Public School** — the
pre-primary now in **proud partnership with The Elden Heights School**, powered
by **Duniz Eduserv**.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**, designed for
**Vercel** and the domain **`vsp.eldenheights.org`**.

---

## ✨ What's inside

- **9 marketing pages** — Home, About, Our Classes (Play / Nursery / LKG / UKG),
  Gallery, Admissions, Contact, plus a Policies hub.
- **7 full policy pages** — Privacy, Terms, Admissions, Safeguarding & Child
  Protection, Anti-Bullying, Health & Safety, Fees & Refund.
- **Two independent contact forms**, each wired to its **own SMTP mailbox**:
  - **Registration** (`/admissions`) → admissions inbox (`REG_*` env vars)
  - **General contact** (`/contact`) → front-office inbox (`CONTACT_*` env vars)
- **Image slots everywhere** with graceful illustrated fallbacks — see
  [`IMAGES.md`](./IMAGES.md) for the exact filenames to add.
- SEO essentials: sitemap, robots, Open Graph, canonical URLs, a custom 404.

---

## 🚀 Local development

```bash
npm install
cp .env.example .env.local   # then fill in SMTP details (optional for UI work)
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

Node 18.18+ (Node 20/22 recommended).

---

## 📧 The two forms & SMTP (important)

The site deliberately uses **two separate SMTP configurations** so registration
enquiries and general messages can go to different inboxes / providers. Set
these in **Vercel → Project → Settings → Environment Variables** (and in
`.env.local` for local testing). Full list with comments is in
[`.env.example`](./.env.example).

| Form | Route | Env prefix | Goes to |
|---|---|---|---|
| Registration / Admissions | `POST /api/register` | `REG_*` | `REG_TO_EMAIL` |
| General Contact | `POST /api/contact` | `CONTACT_*` | `CONTACT_TO_EMAIL` |

Each prefix needs: `…_SMTP_HOST`, `…_SMTP_PORT`, `…_SMTP_SECURE`,
`…_SMTP_USER`, `…_SMTP_PASS`, `…_FROM_EMAIL`, `…_TO_EMAIL`.

Both routes include server-side validation, a hidden honeypot field, and
light per-IP rate limiting. If SMTP isn't configured yet, the forms fail
gracefully with a friendly message (and log the reason server-side).

---

## 🖼️ Adding images

Every photo area shows a designed placeholder until you drop in a real file.
**See [`IMAGES.md`](./IMAGES.md)** for the complete list of filenames, sizes
and art-direction/AI prompts. Just add the files to `public/images/` and push.

---

## ✏️ Editing content (no deep coding needed)

| File | What it controls |
|---|---|
| `lib/site.ts` | School name, phone, email, address, hours, social links, founding year, partnership wording. |
| `lib/content.ts` | Classes, "why us" pillars, daily timeline, testimonials, stats, experiences. |
| `lib/policies.ts` | The full text of all policy pages. |

---

## ☁️ Deploy to Vercel

1. Import the repo in Vercel (framework auto-detected as Next.js).
2. Add all environment variables from `.env.example`.
3. Deploy, then add the domain **`vsp.eldenheights.org`** under
   Settings → Domains and point its DNS (CNAME) to Vercel.

---

## 🎨 Design notes

- **Type:** Fraunces (elegant serif headlines) + Fredoka (playful accents) +
  Nunito (body) — the high/low pairing that gives the "playful luxury" feel.
- **Palette:** deep Elden-Heights crimson & gold as the luxury base, with a
  bright rainbow of playful accents.
- The brand language (announcement marquee, the "what's next" section, the
  co-branded header/footer) is intentionally crafted to make families feel a
  warm new chapter is beginning with The Elden Heights School.

---

© Drona Valley Public School. Powered by Duniz Eduserv.
