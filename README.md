# Drona Valley Public School

A playful-yet-luxury marketing website for **Drona Valley Public School** — the
pre-primary now in **proud partnership with The Elden Heights School**, powered
by **Duniz Eduserv**.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**, designed for
**Vercel** and the domain **`vsp.eldenheights.org`**.

---

## What's inside

- **9 marketing pages** — Home, About, Our Classes (Play / Nursery / LKG / UKG),
  Gallery, Admissions, Contact, plus a Policies hub.
- **7 full policy pages** — Privacy, Terms, Admissions, Safeguarding & Child
  Protection, Anti-Bullying, Health & Safety, Fees & Refund.
- **Two independent contact forms**, each wired to its **own SMTP mailbox**:
  - **Registration** (`/admissions`) → admissions inbox (`REG_*` env vars)
  - **General contact** (`/contact`) → front-office inbox (`CONTACT_*` env vars)
- **Image slots everywhere** with graceful illustrated fallbacks — see
  [`IMAGES.md`](./IMAGES.md) for the exact filenames to add.
- **Superadmin Portal** (`/portal`) — a private, Firebase-authenticated area
  for a single superadmin. See [Superadmin Portal](#superadmin-portal) below.
- SEO essentials: sitemap, robots, Open Graph, canonical URLs, a custom 404.

---

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in SMTP details (optional for UI work)
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

Node 18.18+ (Node 20/22 recommended).

---

## The two forms & SMTP (important)

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

## Superadmin Portal

A private area at **`/portal`** for a single superadmin, gated by **Firebase
Authentication**. There is **no hard-coded password** anywhere in the code — the
allowed account is defined entirely by environment variables, and the actual
password lives only in Firebase.

**Who can log in:** exactly one email — `NEXT_PUBLIC_SUPERADMIN_EMAIL`
(default `contact.vsp@eldenheights.org`). Any other address is rejected.

### One-time setup

1. **Create a Firebase project** (or reuse one) at
   [console.firebase.google.com](https://console.firebase.google.com).
2. **Enable Email/Password sign-in:** Authentication → Sign-in method →
   Email/Password → Enable.
3. **Add the superadmin user:** Authentication → Users → **Add user**, using the
   email from `NEXT_PUBLIC_SUPERADMIN_EMAIL` and the password from
   `SUPERADMIN_PASSWORD` (default `Password123`). This account now "directly
   syncs" — the portal authenticates against exactly this Firebase user.
4. **Copy the web app config:** Project settings → *Your apps* → Web app, and
   fill in the `NEXT_PUBLIC_FIREBASE_*` values.
5. Add all of these to `.env.local` (local) and **Vercel → Environment
   Variables** (production). Full list with comments is in
   [`.env.example`](./.env.example).

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SUPERADMIN_EMAIL` | The one email allowed into `/portal`. |
| `SUPERADMIN_PASSWORD` | The password to set on that account in Firebase (server-only; never sent to the browser). |
| `NEXT_PUBLIC_FIREBASE_*` | Firebase web project config (6 values). |

Then visit **`/portal`** → you'll be sent to `/portal/login`, sign in, and land
on the superadmin dashboard. To change the password later, update it in the
Firebase console (and keep `SUPERADMIN_PASSWORD` in sync for reference).

> The portal is `noindex` and disallowed in `robots.txt`, so it stays out of
> search engines. If the Firebase env vars are absent, the login screen shows a
> clear "not connected to Firebase yet" notice instead of erroring.

---

## Adding images

Every photo area shows a designed placeholder until you drop in a real file.
**See [`IMAGES.md`](./IMAGES.md)** for the complete list of filenames, sizes
and art-direction/AI prompts. Just add the files to `public/images/` and push.

---

## Editing content (no deep coding needed)

| File | What it controls |
|---|---|
| `lib/site.ts` | School name, phone, email, address, hours, social links, founding year, partnership wording. |
| `lib/content.ts` | Classes, "why us" pillars, daily timeline, testimonials, stats, experiences. |
| `lib/policies.ts` | The full text of all policy pages. |

---

## Deploy to Vercel

1. Import the repo in Vercel (framework auto-detected as Next.js).
2. Add all environment variables from `.env.example`.
3. Deploy, then add the domain **`vsp.eldenheights.org`** under
   Settings → Domains and point its DNS (CNAME) to Vercel.

---

## Design notes

- **Type:** Fraunces (elegant serif headlines) + Fredoka (playful accents) +
  Nunito (body) — the high/low pairing that gives the "playful luxury" feel.
- **Palette:** deep Elden-Heights crimson & gold as the luxury base, with a
  bright rainbow of playful accents.
- The brand language (announcement marquee, the "what's next" section, the
  co-branded header/footer) is intentionally crafted to make families feel a
  warm new chapter is beginning with The Elden Heights School.

---

© Drona Valley Public School. Powered by Duniz Eduserv.
