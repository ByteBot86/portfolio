# Portfolio Skeleton Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a complete HTML/CSS skeleton for a GitHub Pages portfolio with placeholder content, 7 sections, light & clean style, and mobile responsiveness.

**Architecture:** Single `index.html` + `css/style.css`. No build tools, no frameworks, no JS libraries. Inter font via Google Fonts CDN. JS only for mobile hamburger menu toggle.

**Tech Stack:** HTML5, CSS3 (custom properties, flexbox, grid), vanilla JS (~20 lines)

---

### Task 1: CSS foundation — reset, variables, base typography

**Files:**
- Create: `css/style.css`

**Step 1: Create css/style.css with reset and CSS variables**

```css
/* css/style.css */

/* ── Reset ── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ── Variables ── */
:root {
  --color-bg: #ffffff;
  --color-text: #1a1a2e;
  --color-muted: #6b7280;
  --color-accent: #4f46e5;        /* indigo */
  --color-accent-light: #eef2ff;
  --color-border: #e5e7eb;
  --color-surface: #f9fafb;

  --font-family: 'Inter', sans-serif;
  --font-size-base: 1rem;
  --line-height: 1.6;

  --max-width: 1100px;
  --section-padding: 5rem 1.5rem;
  --nav-height: 64px;
}

/* ── Base ── */
html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-family);
  font-size: var(--font-size-base);
  color: var(--color-text);
  background: var(--color-bg);
  line-height: var(--line-height);
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: var(--color-accent);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* ── Layout helper ── */
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ── Section base ── */
section {
  padding: var(--section-padding);
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.section-subtitle {
  font-size: 1rem;
  color: var(--color-muted);
  margin-bottom: 3rem;
}

/* ── Buttons ── */
.btn {
  display: inline-block;
  padding: 0.75rem 1.75rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: opacity 0.15s;
}

.btn:hover {
  opacity: 0.85;
  text-decoration: none;
}

.btn-primary {
  background: var(--color-accent);
  color: #fff;
}

.btn-outline {
  border: 2px solid var(--color-accent);
  color: var(--color-accent);
  background: transparent;
}

/* ── Tags / badges ── */
.tag {
  display: inline-block;
  background: var(--color-accent-light);
  color: var(--color-accent);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  margin: 0.2rem 0.2rem 0.2rem 0;
}

.tag-industry {
  background: #f0fdf4;
  color: #16a34a;
}
```

**Step 2: Verify file exists and open in browser**

No automated test — open `index.html` in browser after Task 2. CSS will be verified visually.

**Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: add CSS foundation — reset, variables, base styles"
```

---

### Task 2: HTML shell + Google Fonts + nav structure

**Files:**
- Create: `index.html`

**Step 1: Create index.html with doctype, head, fonts, empty sections**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Java & Low-Code Developer — Building systems that simplify complex business processes." />
  <title>Java & Low-Code Developer</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/style.css" />
</head>
<body>

  <!-- NAV -->
  <header class="nav" id="nav">
    <div class="container nav__inner">
      <a href="#" class="nav__logo">JLC<span class="nav__logo-dot">.</span></a>
      <nav class="nav__links" id="navLinks">
        <a href="#what-i-build">About</a>
        <a href="#case-studies">Work</a>
        <a href="#contact">Contact</a>
      </nav>
      <button class="nav__hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <!-- HERO -->
  <section class="hero" id="hero">
  </section>

  <!-- WHAT I BUILD -->
  <section class="what-i-build" id="what-i-build">
  </section>

  <!-- CASE STUDIES -->
  <section class="case-studies" id="case-studies">
  </section>

  <!-- PERSONAL PROJECTS -->
  <section class="projects" id="projects">
  </section>

  <!-- TECH STACK -->
  <section class="tech-stack" id="tech-stack">
  </section>

  <!-- SERVICES -->
  <section class="services" id="services">
  </section>

  <!-- CONTACT -->
  <section class="contact" id="contact">
  </section>

  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 Java &amp; Low-Code Developer</p>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

**Step 2: Add nav CSS to style.css**

Append to `css/style.css`:

```css
/* ── Nav ── */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-height);
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
  z-index: 100;
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.nav__logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
  text-decoration: none;
}

.nav__logo-dot {
  color: var(--color-accent);
}

.nav__links {
  display: flex;
  gap: 2rem;
}

.nav__links a {
  color: var(--color-muted);
  font-weight: 500;
  font-size: 0.95rem;
  text-decoration: none;
  transition: color 0.15s;
}

.nav__links a:hover {
  color: var(--color-accent);
  text-decoration: none;
}

.nav__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.nav__hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
  transition: transform 0.2s, opacity 0.2s;
}

/* ── Footer ── */
.footer {
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  padding: 2rem 1.5rem;
  text-align: center;
  color: var(--color-muted);
  font-size: 0.875rem;
}
```

**Step 3: Open index.html in browser — verify nav renders with logo and links**

**Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: add HTML shell, nav structure and footer"
```

---

### Task 3: Hamburger menu JS

**Files:**
- Create: `js/main.js`

**Step 1: Create js/main.js**

```js
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('nav__links--open');
  hamburger.classList.toggle('nav__hamburger--open');
});

document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('nav__links--open');
    hamburger.classList.remove('nav__hamburger--open');
  });
});
```

**Step 2: Add mobile CSS for hamburger to style.css**

Append to `css/style.css`:

```css
/* ── Mobile nav ── */
@media (max-width: 640px) {
  .nav__hamburger {
    display: flex;
  }

  .nav__links {
    display: none;
    position: absolute;
    top: var(--nav-height);
    left: 0;
    right: 0;
    background: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
    flex-direction: column;
    padding: 1rem 1.5rem 1.5rem;
    gap: 1rem;
  }

  .nav__links--open {
    display: flex;
  }

  .nav__hamburger--open span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }

  .nav__hamburger--open span:nth-child(2) {
    opacity: 0;
  }

  .nav__hamburger--open span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }
}
```

**Step 3: Test — resize browser to mobile width, click hamburger, verify menu opens/closes**

**Step 4: Commit**

```bash
git add js/main.js css/style.css
git commit -m "feat: add hamburger menu for mobile nav"
```

---

### Task 4: Hero section

**Files:**
- Modify: `index.html` — fill `<section class="hero">`
- Modify: `css/style.css` — add hero styles

**Step 1: Fill hero section in index.html**

Replace the empty `<section class="hero" id="hero">` with:

```html
  <section class="hero" id="hero">
    <div class="container hero__inner">
      <p class="hero__eyebrow">Java &amp; Low-Code Developer</p>
      <h1 class="hero__title">Building systems that simplify<br>complex business processes.</h1>
      <p class="hero__subtitle">Enterprise integration · Insurance platforms · Workflow automation</p>
      <div class="hero__cta">
        <a href="#case-studies" class="btn btn-primary">See my work</a>
        <a href="#contact" class="btn btn-outline">Contact me</a>
      </div>
    </div>
  </section>
```

**Step 2: Add hero CSS to style.css**

Append to `css/style.css`:

```css
/* ── Hero ── */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: var(--nav-height);
  background: var(--color-bg);
}

.hero__inner {
  max-width: 720px;
}

.hero__eyebrow {
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-accent);
  margin-bottom: 1rem;
}

.hero__title {
  font-size: clamp(2rem, 5vw, 3.25rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--color-text);
  margin-bottom: 1.25rem;
}

.hero__subtitle {
  font-size: 1.125rem;
  color: var(--color-muted);
  margin-bottom: 2.5rem;
}

.hero__cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
```

**Step 3: Open in browser — verify hero fills viewport, two buttons visible, text hierarchy correct**

**Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: add hero section"
```

---

### Task 5: What I Build section (3 tiles)

**Files:**
- Modify: `index.html` — fill `<section class="what-i-build">`
- Modify: `css/style.css` — add tile styles

**Step 1: Fill what-i-build section in index.html**

Replace the empty `<section class="what-i-build" id="what-i-build">` with:

```html
  <section class="what-i-build" id="what-i-build">
    <div class="container">
      <h2 class="section-title">What I Build</h2>
      <p class="section-subtitle">Three domains, one common thread — complex systems made workable.</p>
      <div class="tiles">

        <div class="tile">
          <div class="tile__icon">⚙️</div>
          <h3 class="tile__title">Enterprise Systems</h3>
          <p class="tile__body">Large-scale backend systems for telecommunications and logistics. Resource lifecycle management, SAP integrations, multi-carrier APIs.</p>
          <div class="tile__tags">
            <span class="tag">Java</span>
            <span class="tag">SAP</span>
            <span class="tag">Telco</span>
          </div>
        </div>

        <div class="tile">
          <div class="tile__icon">🛡️</div>
          <h3 class="tile__title">Insurance Platforms</h3>
          <p class="tile__body">End-to-end insurance system development — underwriter portals, policy management, customer domain configuration using low-code and EIS.</p>
          <div class="tile__tags">
            <span class="tag">Unqork</span>
            <span class="tag">EIS</span>
            <span class="tag">Insurance</span>
          </div>
        </div>

        <div class="tile">
          <div class="tile__icon">🔗</div>
          <h3 class="tile__title">Automation &amp; Integration</h3>
          <p class="tile__body">Workflow automation connecting business tools and APIs. Lead generation pipelines, marketplace integrations, process orchestration with n8n.</p>
          <div class="tile__tags">
            <span class="tag">n8n</span>
            <span class="tag">REST APIs</span>
            <span class="tag">Automation</span>
          </div>
        </div>

      </div>
    </div>
  </section>
```

**Step 2: Add tile CSS to style.css**

Append to `css/style.css`:

```css
/* ── What I Build ── */
.what-i-build {
  background: var(--color-surface);
}

.tiles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.tile {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 2rem;
}

.tile__icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.tile__title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.tile__body {
  font-size: 0.95rem;
  color: var(--color-muted);
  margin-bottom: 1.25rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .tiles {
    grid-template-columns: 1fr;
  }
}
```

**Step 3: Verify — 3 tiles in a row on desktop, stacked on mobile**

**Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: add What I Build section with 3 domain tiles"
```

---

### Task 6: Case Studies section (2×2 grid)

**Files:**
- Modify: `index.html` — fill `<section class="case-studies">`
- Modify: `css/style.css` — add card styles

**Step 1: Fill case-studies section in index.html**

Replace the empty `<section class="case-studies" id="case-studies">` with:

```html
  <section class="case-studies" id="case-studies">
    <div class="container">
      <h2 class="section-title">Case Studies</h2>
      <p class="section-subtitle">Corporate projects — real systems, real scale. No company names disclosed.</p>
      <div class="cards-grid">

        <div class="card">
          <span class="tag tag-industry">Telecommunications</span>
          <h3 class="card__title">Resource Lifecycle Management</h3>
          <ul class="card__bullets">
            <li>Designed and implemented lifecycle management for telecom resources (MSISDN, SIM cards)</li>
            <li>Built state machine logic for resource allocation, suspension, and decommissioning</li>
            <li>Integrated with billing and provisioning systems via REST APIs</li>
          </ul>
          <div class="card__tags">
            <span class="tag">Java</span>
            <span class="tag">REST API</span>
            <span class="tag">Enterprise</span>
          </div>
        </div>

        <div class="card">
          <span class="tag tag-industry">Telecommunications</span>
          <h3 class="card__title">Shipment & SAP Integration</h3>
          <ul class="card__bullets">
            <li>Integrated SAP with multiple courier APIs for automated shipment processing</li>
            <li>Implemented dynamic delivery method calculation based on weight, destination, and SLA</li>
            <li>Reduced manual processing time through end-to-end order-to-dispatch automation</li>
          </ul>
          <div class="card__tags">
            <span class="tag">SAP</span>
            <span class="tag">Java</span>
            <span class="tag">API Integration</span>
          </div>
        </div>

        <div class="card">
          <span class="tag tag-industry">Insurance</span>
          <h3 class="card__title">Underwriter Portal</h3>
          <ul class="card__bullets">
            <li>Built low-code portal for underwriters managing policy risk assessment</li>
            <li>Configured complex form workflows and business rules in Unqork</li>
            <li>Delivered features across full SDLC in an Agile enterprise environment</li>
          </ul>
          <div class="card__tags">
            <span class="tag">Unqork</span>
            <span class="tag">Low-Code</span>
            <span class="tag">Insurance</span>
          </div>
        </div>

        <div class="card">
          <span class="tag tag-industry">Insurance</span>
          <h3 class="card__title">EIS Customer Domain</h3>
          <ul class="card__bullets">
            <li>Configured and extended customer management within the EIS insurance platform</li>
            <li>Implemented customer lifecycle flows: onboarding, updates, policy linking</li>
            <li>Worked across multiple product lines in a full end-to-end insurance system</li>
          </ul>
          <div class="card__tags">
            <span class="tag">EIS</span>
            <span class="tag">Low-Code</span>
            <span class="tag">Insurance</span>
          </div>
        </div>

      </div>
    </div>
  </section>
```

**Step 2: Add card CSS to style.css**

Append to `css/style.css`:

```css
/* ── Case Studies ── */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.card {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card__title {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-text);
}

.card__bullets {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}

.card__bullets li {
  font-size: 0.9rem;
  color: var(--color-muted);
  padding-left: 1.1rem;
  position: relative;
  line-height: 1.5;
}

.card__bullets li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-size: 0.8rem;
  top: 1px;
}

.card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: auto;
}

@media (max-width: 768px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
}
```

**Step 3: Verify — 2×2 grid on desktop, single column on mobile, industry tags in green**

**Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: add Case Studies section with 4 corporate project cards"
```

---

### Task 7: Personal Projects section (3 cards)

**Files:**
- Modify: `index.html` — fill `<section class="projects">`
- Modify: `css/style.css` — add project card styles

**Step 1: Fill projects section in index.html**

Replace the empty `<section class="projects" id="projects">` with:

```html
  <section class="projects" id="projects">
    <div class="container">
      <h2 class="section-title">Personal Projects</h2>
      <p class="section-subtitle">Built outside of work — products and automations I own end-to-end.</p>
      <div class="projects-grid">

        <div class="project-card">
          <h3 class="project-card__title">Mooder</h3>
          <p class="project-card__desc">Team mood tracker for remote managers. Collects anonymous sentiment data from team members and surfaces trends with AI-assisted analysis. Built to solve the invisible problem of remote team wellbeing.</p>
          <div class="project-card__tags">
            <span class="tag">Vercel</span>
            <span class="tag">Supabase</span>
            <span class="tag">AI</span>
          </div>
          <div class="project-card__links">
            <a href="#" class="btn btn-outline btn--sm">▶ YouTube Demo</a>
            <a href="#" class="btn btn-primary btn--sm">Live App</a>
          </div>
        </div>

        <div class="project-card">
          <h3 class="project-card__title">AI Daily Journal</h3>
          <p class="project-card__desc">Goal-oriented daily journaling tool for tech professionals. Generates weekly and monthly summaries, tracks progress toward a defined goal, and asks coaching questions to maintain focus and reflection.</p>
          <div class="project-card__tags">
            <span class="tag">n8n</span>
            <span class="tag">AI</span>
            <span class="tag">Automation</span>
          </div>
          <div class="project-card__links">
            <a href="#" class="btn btn-outline btn--sm">Details</a>
          </div>
        </div>

        <div class="project-card">
          <h3 class="project-card__title">n8n Automation Library</h3>
          <p class="project-card__desc">Collection of production-ready n8n workflows: lead generation, Allegro marketplace integration, API connectors, and process automations. All running on a self-hosted n8n instance.</p>
          <div class="project-card__tags">
            <span class="tag">n8n</span>
            <span class="tag">Allegro</span>
            <span class="tag">Lead Gen</span>
          </div>
          <div class="project-card__links">
            <a href="#" class="btn btn-outline btn--sm">GitHub</a>
          </div>
        </div>

      </div>
    </div>
  </section>
```

**Step 2: Add project card CSS to style.css**

Append to `css/style.css`:

```css
/* ── Personal Projects ── */
.projects {
  background: var(--color-surface);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.project-card {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-card__title {
  font-size: 1.125rem;
  font-weight: 700;
}

.project-card__desc {
  font-size: 0.9rem;
  color: var(--color-muted);
  line-height: 1.6;
  flex: 1;
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.project-card__links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: auto;
}

.btn--sm {
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
}

@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
```

**Step 3: Verify — 3 cards in a row, links visible as placeholder buttons**

**Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: add Personal Projects section with 3 project cards"
```

---

### Task 8: Tech Stack section (3 columns)

**Files:**
- Modify: `index.html` — fill `<section class="tech-stack">`
- Modify: `css/style.css` — add tech stack styles

**Step 1: Fill tech-stack section in index.html**

Replace the empty `<section class="tech-stack" id="tech-stack">` with:

```html
  <section class="tech-stack" id="tech-stack">
    <div class="container">
      <h2 class="section-title">Tech Stack</h2>
      <p class="section-subtitle">Tools I use in production environments.</p>
      <div class="stack-grid">

        <div class="stack-col">
          <h3 class="stack-col__title">Java Ecosystem</h3>
          <ul class="stack-list">
            <li>Java (8 / 11 / 17)</li>
            <li>Spring Boot</li>
            <li>REST APIs / OpenAPI</li>
            <li>Maven / Gradle</li>
            <li>SQL / JPA</li>
          </ul>
        </div>

        <div class="stack-col">
          <h3 class="stack-col__title">Low-Code Platforms</h3>
          <ul class="stack-list">
            <li>n8n (self-hosted)</li>
            <li>Unqork</li>
            <li>EIS Platform</li>
          </ul>
        </div>

        <div class="stack-col">
          <h3 class="stack-col__title">Tools &amp; Integrations</h3>
          <ul class="stack-list">
            <li>SAP</li>
            <li>Supabase</li>
            <li>Vercel</li>
            <li>Git / GitHub</li>
            <li>Jira / Confluence</li>
          </ul>
        </div>

      </div>
    </div>
  </section>
```

**Step 2: Add tech stack CSS to style.css**

Append to `css/style.css`:

```css
/* ── Tech Stack ── */
.stack-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.stack-col {
  border-left: 3px solid var(--color-accent);
  padding-left: 1.5rem;
}

.stack-col__title {
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-accent);
  margin-bottom: 1rem;
}

.stack-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stack-list li {
  font-size: 0.95rem;
  color: var(--color-muted);
}

@media (max-width: 640px) {
  .stack-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
```

**Step 3: Verify — 3 columns with left accent border, readable list items**

**Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: add Tech Stack section"
```

---

### Task 9: Services section (subtle freelance signal)

**Files:**
- Modify: `index.html` — fill `<section class="services">`
- Modify: `css/style.css` — add services styles

**Step 1: Fill services section in index.html**

Replace the empty `<section class="services" id="services">` with:

```html
  <section class="services" id="services">
    <div class="container services__inner">
      <div>
        <h2 class="section-title">Available for Projects</h2>
        <p class="services__desc">I take on selected freelance automation projects — primarily n8n workflow design and API integrations for small to mid-size businesses.</p>
        <div class="services__items">
          <span class="tag">Workflow design</span>
          <span class="tag">API integrations</span>
          <span class="tag">Process automation</span>
          <span class="tag">n8n setup &amp; support</span>
        </div>
      </div>
      <a href="#contact" class="btn btn-outline">Get in touch →</a>
    </div>
  </section>
```

**Step 2: Add services CSS to style.css**

Append to `css/style.css`:

```css
/* ── Services ── */
.services {
  background: var(--color-surface);
  padding: 3rem 1.5rem;
}

.services__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.services__desc {
  font-size: 0.95rem;
  color: var(--color-muted);
  margin-bottom: 1rem;
  max-width: 560px;
}

.services__items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
```

**Step 3: Verify — section is visually lighter/smaller than main sections, CTA button visible**

**Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: add Services section (subtle freelance signal)"
```

---

### Task 10: Contact section

**Files:**
- Modify: `index.html` — fill `<section class="contact">`
- Modify: `css/style.css` — add contact styles

**Step 1: Fill contact section in index.html**

Replace the empty `<section class="contact" id="contact">` with:

```html
  <section class="contact" id="contact">
    <div class="container contact__inner">
      <h2 class="section-title">Get In Touch</h2>
      <p class="contact__desc">Open to new opportunities and selected freelance projects.</p>
      <div class="contact__links">
        <a href="mailto:placeholder@email.com" class="btn btn-primary">Send an email</a>
        <a href="https://linkedin.com/in/placeholder" target="_blank" rel="noopener" class="btn btn-outline">LinkedIn</a>
      </div>
    </div>
  </section>
```

**Step 2: Add contact CSS to style.css**

Append to `css/style.css`:

```css
/* ── Contact ── */
.contact__inner {
  text-align: center;
  max-width: 560px;
  margin: 0 auto;
}

.contact__desc {
  font-size: 1.1rem;
  color: var(--color-muted);
  margin-bottom: 2.5rem;
}

.contact__links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
```

**Step 3: Verify — two buttons centered, email link and LinkedIn link (placeholders)**

**Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: add Contact section"
```

---

### Task 11: Final pass — offset for fixed nav + full-page scroll check

**Files:**
- Modify: `css/style.css` — add scroll offset

**Step 1: Add scroll offset so fixed nav doesn't cover section headings**

Append to `css/style.css`:

```css
/* ── Scroll offset for fixed nav ── */
section[id] {
  scroll-margin-top: var(--nav-height);
}
```

**Step 2: Full manual verification checklist**

Open `index.html` in browser and check:

- [ ] Nav is fixed, doesn't jump on scroll
- [ ] All 7 sections visible when scrolling
- [ ] "See my work" scrolls to Case Studies
- [ ] "Contact me" scrolls to Contact
- [ ] Nav links scroll to correct sections
- [ ] Resize to 375px — hamburger appears, menu opens/closes
- [ ] No horizontal scroll on mobile
- [ ] Footer visible at bottom

**Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: add scroll-margin-top offset for fixed nav"
```

---

### Task 12: Deploy to GitHub Pages

**Step 1: Verify repository has correct structure**

```
index.html          ← must be at root
css/style.css
js/main.js
docs/
```

**Step 2: Push to GitHub**

```bash
git push origin main
```

**Step 3: Enable GitHub Pages in repository settings**

- Go to repository Settings → Pages
- Source: Deploy from a branch
- Branch: `main`, folder: `/ (root)`
- Save

**Step 4: Visit the live URL**

Format: `https://<username>.github.io/<repo-name>/`

Wait ~60 seconds after first push for pages to build.

**Step 5: Verify live site matches local**

Check all sections, mobile hamburger menu, and both CTA buttons on the live URL.

**Step 6: Commit (no changes needed — just verification)**

---

## Summary

| Task | What gets built |
|------|----------------|
| 1 | CSS foundation (reset, variables, base) |
| 2 | HTML shell + nav structure |
| 3 | Hamburger menu JS |
| 4 | Hero section |
| 5 | What I Build (3 tiles) |
| 6 | Case Studies (2×2 grid) |
| 7 | Personal Projects (3 cards) |
| 8 | Tech Stack (3 columns) |
| 9 | Services (subtle) |
| 10 | Contact |
| 11 | Scroll offset + final check |
| 12 | Deploy to GitHub Pages |

**After skeleton is complete:** replace placeholder links and `mailto:placeholder@email.com` with real values in the content phase.
