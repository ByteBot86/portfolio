# Portfolio Design — Java & Low-Code Developer
**Date:** 2026-06-02  
**Status:** Approved

---

## Goals

- Primary: attract corporate employers (telco, insurance, enterprise Java)
- Secondary: subtle signal for n8n freelance clients
- No personal identity on page (name/photo on LinkedIn, portfolio linked from there)

---

## Technical Constraints

- Pure HTML + CSS + minimal JS — zero build tooling
- Hosted on GitHub Pages (static files only)
- Single external dependency: Google Fonts via CDN
- Two files: `index.html`, `css/style.css`

---

## Visual Direction

- **Style:** Light & Clean — white background, generous whitespace, minimal
- **Typography:** Inter (Google Fonts), hierarchy via size and weight only
- **Accent color:** One color (indigo/slate blue — to be finalized at content stage)
- **No animations, no parallax, no creative layouts** — professionalism over show

---

## Page Structure

### Navigation
- Fixed top bar: logo/initials left | About · Work · Contact right
- Mobile: hamburger menu (JS toggle)

---

### 1. Hero
```
Java & Low-Code Developer
Building systems that simplify complex business processes.

[See my work ↓]   [Contact me →]
```
- No photo, no name
- Full viewport height or near-full
- Two CTAs: scroll anchor to Case Studies, anchor to Contact

---

### 2. What I Build
Three horizontal tiles:

| Enterprise Systems | Insurance Platforms | Automation & Integration |
|--------------------|--------------------|-----------------------------|
| Telco, SAP, APIs   | Unqork, EIS, portals | n8n, workflows, leads    |

Each tile: icon + title + 2-sentence description. Gives employer instant domain context.

---

### 3. Case Studies (2×2 grid)
Four corporate projects — descriptive only, no company names, no code:

1. **Telco: Resource Lifecycle Management** — MSISDN/SIM lifecycle system
2. **Telco: Shipment & SAP Integration** — SAP + courier APIs, delivery method calculation
3. **Insurance: Underwriter Portal** — low-code portal (Unqork)
4. **Insurance: EIS Customer Domain** — full insurance process, customer area

Each card: title + industry badge + 3 bullet points (what I did) + tech tags

---

### 4. Personal Projects (3 cards)
1. **Mooder** — team mood tracker for remote managers, AI analysis. Link: YouTube demo + live app
2. **AI Daily Journal** — goal-oriented journaling with weekly/monthly summaries and coaching questions
3. **n8n Automations** — collection of automation workflows (Allegro, lead gen, integrations). Link: GitHub

---

### 5. Tech Stack (3 columns)

| Java Ecosystem | Low-Code Platforms | Tools & Integrations |
|----------------|-------------------|----------------------|
| Java, Spring Boot | n8n, Unqork, EIS | SAP, REST APIs, Supabase, Vercel |

---

### 6. Services *(subtle — smaller font, light grey background)*
```
Available for n8n automation projects.
Workflow design · API integrations · Process automation

[Get in touch →]
```

---

### 7. Contact
- mailto link + LinkedIn button
- Single line: "Open to new opportunities and selected freelance projects."
- No contact form (no server-side handling on GitHub Pages)

---

## File Structure

```
index.html
css/
  style.css
docs/
  plans/
    2026-06-02-portfolio-design.md
```

---

## Out of Scope (for skeleton phase)

- Real content (texts, descriptions, links) — added in next phase
- Company logos or client names — not allowed
- Contact form with backend — not feasible on GitHub Pages
- Multiple language versions — English only
