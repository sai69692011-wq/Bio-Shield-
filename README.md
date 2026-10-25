# BIO-SHIELD — Student Research Website

> **Research hypothesis — NOT VALIDATED.**
> No Bio-Shield formulation has been demonstrated to protect skin, reduce absorption, or be safe for topical use.
> This site presents a proposed experiment and a review of published literature — **not** a product.

A mobile-first, QR-code-ready website for the Class 10–12 science-fair project:

> **Can a removable barrier film reduce transfer of BPA/BPS from thermal-paper receipts?**

## Tech stack

- **Next.js 16 (App Router)** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (zero external UI libraries)
- Static pages generated at build time (no Node server required — works on Vercel free tier and any static host that supports Next)
- No database, no authentication, no analytics, no paid APIs, no API keys
- Content (references and claims) separated from layout in `src/data/` so students can update the science without editing components

## Project structure

```
bio-shield-research-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout: fonts, metadata, nav, footer
│   │   ├── page.tsx            # Home page (all 8 content sections)
│   │   ├── globals.css         # Design tokens, typography, utilities
│   │   ├── not-found.tsx       # 404 page
│   │   ├── robots.ts           # Robots.txt
│   │   ├── icon.svg            # Favicon (forest-green receipt mark)
│   │   └── sources/
│   │       └── page.tsx        # Research library (verified references)
│   ├── components/
│   │   ├── Nav.tsx             # Sticky nav + mobile hamburger
│   │   ├── Footer.tsx          # Footer + safety messaging
│   │   ├── Citation.tsx        # In-text [n] markers that link to sources
│   │   ├── HypothesisBanner.tsx# Persistent "HYPOTHESIS - NOT VALIDATED" bar
│   │   └── diagrams/
│   │       ├── ReceiptDiagram.tsx
│   │       ├── LayerDiagram.tsx
│   │       └── ExperimentDiagram.tsx
│   └── data/
│       └── references.ts       # Single source of truth for all citations
├── public/                     # Static assets (currently empty; add images/fonts here)
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
└── package.json
```

## Colour & typography system

| Token | Hex | Use |
|---|---|---|
| Forest green | `#244C3A` | Primary brand, headings, primary buttons |
| Sage | `#DCE8DD` | Soft highlights, "safe" badges, card tints |
| Muted lavender | `#EEE8F7` | Hypothesis banner, capture-material callouts |
| Warm off-white | `#F7F8F5` | Page background |
| Charcoal | `#202A25` | Body text |
| Restrained gold | `#C79A48` | Accent for warnings, secondary emphasis |

- **Display:** Fraunces (scientific-editorial serif) for headings
- **Body:** Inter (highly readable sans) for body text
- All colours meet WCAG AA contrast on their intended backgrounds.

## Local development

**Requirements:** Node.js 18+ (Node 20 recommended) and npm.

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server (hot reload)
npm run dev
# → open http://localhost:3000
```

## Production build & local testing

```bash
# Type-check + compile + build static pages
npm run build

# Serve the production build
npm run start
# → http://localhost:3000 (tests the exact same files that deploy)
```

Lint:

```bash
npm run lint
```

The production build was verified to complete with no TypeScript or lint errors:

```
✓ Compiled successfully
○ /                    (static)
○ /sources             (static)
○ /robots.txt          (static)
○ /icon.svg            (static)
```

## Editing content

**To update a reference**, edit `src/data/references.ts`. Add a new object to the array and use its `num` value in a `<Citation n={x} />` marker anywhere in the site — the marker will automatically link to the correct entry on the Sources page.

**To change section wording**, edit the relevant JSX in `src/app/page.tsx`. Sections are:

1. Hero (`#top`)
2. The everyday problem (`#problem`)
3. BPA/BPS/developers (`#chemicals`)
4. The testable question (`#science`)
5. Proposed concept (`#concept`)
6. Proposed experiment (`#experiment`)
7. Measurements (`#measurements`)
8. Limitations & risks (`#limitations`)
9. Status & next steps (`#status`)

**Do not** add a product bottle photo, fake success metrics, or fabricated data charts. The brief explicitly prohibits them.

## Deploying to GitHub + Vercel

Follow these steps exactly. I (the coding assistant) have **not** deployed the site to your account — these are the steps you run:

### Step 1 — Push the code to a new GitHub repository

```bash
# From inside the project folder:
cd bio-shield-research-site

# The directory is already a git repo created by create-next-app.
# Create a new EMPTY repository on GitHub first (https://github.com/new)
#   - Name: bio-shield-research-site
#   - Do NOT tick "Initialize with README" (we already have one)
# Then:

git add .
git commit -m "Initial release: BIO-SHIELD research hypothesis site"
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/bio-shield-research-site.git
git push -u origin main
```

### Step 2 — Import into Vercel

1. Go to https://vercel.com/new
2. Click **Import** next to the `bio-shield-research-site` repository (you may need to grant Vercel access to your GitHub account).
3. Leave all settings at their defaults:
   - **Framework Preset:** Next.js (auto-detected)
   - **Build Command:** `npm run build` (auto)
   - **Output Directory:** `.next` (auto)
   - **Environment Variables:** none needed
4. Click **Deploy**. Vercel will build the site and give you a public URL, typically:
   `https://bio-shield-research-site-<something>.vercel.app`

### Step 3 — (Optional) Add a custom domain

1. From your Vercel project → **Settings → Domains**, add a domain you own (e.g. `bio-shield.yourname.dev`).
2. Update the `metadataBase` in `src/app/layout.tsx` to match the final production URL.
3. Push that change to re-deploy.

**Only use the final public Vercel URL (or your custom domain) when generating the QR code.** Never point the QR at `localhost`, a Vercel preview branch, the Vercel dashboard, or an edit page.

### Step 4 — Re-deploying after edits

Every push to `main` automatically triggers a new production deploy on Vercel. Workflow:

```bash
# edit files, then
npm run build          # verify locally
git add .
git commit -m "Describe your change"
git push
```

## Mobile / QR-code testing checklist

Before printing the exhibition QR code, test on a real phone (not just a desktop browser):

- [ ] Open the production URL on a phone over both Wi-Fi and mobile data.
- [ ] All text is readable without pinch-zooming (minimum body size ~17 px).
- [ ] The hamburger menu opens and all section links scroll to the right place.
- [ ] No horizontal scroll on any page (check `/` and `/sources`).
- [ ] Tapping a citation number scrolls to that reference on `/sources`.
- [ ] Buttons are large enough to tap (≥ 44 px tall).
- [ ] The "HYPOTHESIS — NOT VALIDATED" banner is visible on first load.
- [ ] No broken images, no console errors (check via Chrome remote devtools).
- [ ] The site loads in under ~3 seconds on a mid-range phone.
- [ ] Generate the QR code from the final URL using a reliable generator (e.g. https://pypi.org/project/qrcode/ or https://qr.io), print it at ≥ 4–5 cm, and test scanning it from another phone on the exhibition wall.

## Scientific claim boundaries (read before editing)

Stated in the brief and enforced throughout the site:

- Use **“some thermal papers may use BPA, BPS, or other developers”** — never “every receipt contains BPA/BPS.”
- Call Bio-Shield an **untested hypothesis**; never claim it works, blocks toxins, detoxifies, or prevents absorption.
- Do not name any specific retailer (KFC, a supermarket, a pharmacy) as using BPA/BPS unless you have specific tested evidence for that retailer at that time. (The site uses generic icons only.)
- Clearly distinguish: **chemical on paper → transferred to surface → retained by film → absorbed through skin**. These are four different outcomes.
- A coloured-dye visual demo is labelled “VISUAL PROXY ONLY — NOT BPA/BPS TESTING.” Never call it proof.
- Do not publish a skin-use recipe, ratios, or a DIY formulation. Candidate materials are listed only as literature-screening items with explicit non-endorsement.
- Any skin-absorption claim requires OECD Test Guideline 428-style work under qualified lab supervision.

## References policy

Every reference is a real, verifiable scholarly or official source, stored in `src/data/references.ts` with: authors, year, title, venue, DOI, URL, date last checked, geography, sample, plain summary, what it supports, and what it does not prove. In-text `[n]` markers link to the matching entry.

The starter references from the brief were verified against their publisher pages before being written into the site: Miller et al. 2023 (PubMed / Environmental Pollution), Semerjian et al. 2023 (PMC / PLOS ONE), Bernier & Vandenberg 2017 (PubMed / PLOS ONE), OECD Test Guideline 428 (oecd.org), and Ozkaleli Akcetin et al. 2025 (RSC / Environmental Science: Advances).

If you add more sources, follow the same guardrails: do not use cyclodextrin-in-water-treatment papers, general cosmetic film-former patents, or drug-delivery papers as evidence that a topical film blocks BPA/BPS on skin — those are different contexts and mechanisms.

## Remaining limitations / tasks for the student

1. **The production URL is not yet live.** The coding assistant cannot deploy into your personal Vercel/GitHub account. Once you follow the deployment steps above, replace the placeholder `metadataBase` in `src/app/layout.tsx` with your final URL.
2. **No real experimental data is shown** (intentionally — none exists yet). Do not add fabricated charts.
3. **Contact email on the Status section:** a `mailto:` link was intentionally omitted because the brief did not supply a real contact address. Add one in `src/app/page.tsx` under section 08 when you have a project email you are comfortable publishing.
4. **Local (India) receipt chemistry** is flagged as future work. If you partner with a local lab that tests Indian receipts, add those findings with the same rigor — geography, sampling method, and limits — before generalising.
5. **Accessibility note:** the site uses semantic headings, keyboard-visible focus states, alt text on every SVG, skip-to-content link, and `prefers-reduced-motion` support. A manual screen-read and high-contrast-mode test on a phone is still a good pre-exhibition check.

## License

Content is the student project's own. Third-party cited works remain under their publishers' copyright; linked URLs direct readers to the original sources.

---

**Remember:** Protection begins with proof. The whole point of the site is to help visitors understand how much we do not yet know — and how a careful experiment could answer the question.
