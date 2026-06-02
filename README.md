# SpringVox Solution Limited

Enterprise website and [ReKall-IQ](/rekall-iq) product landing page for **SpringVox Solution Limited** — a Nigerian technology company building AI platforms, enterprise software, cybersecurity, and digital transformation solutions for startups and enterprises across Africa.

**Production**: https://springvoxsl.com  
**Repository**: https://github.com/Enochwork18/SpringVox-Solution-Limited

---

## Table of Contents

- [Quick Links](#quick-links)
- [Pages & Routes](#pages--routes)
- [Homepage Sections](#homepage-sections)
- [ReKall-IQ Product Page](#rekall-iq-product-page)
- [ReKall-IQ Readiness Checklist](#rekall-iq-readiness-checklist)
- [Services](#services)
- [Contact & Forms](#contact--forms)
- [API Endpoints](#api-endpoints)
- [Analytics](#analytics)
- [SEO](#seo)
- [Security](#security)
- [Footer Navigation](#footer-navigation)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Build & Deploy](#build--deploy)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [License](#license)

---

## Quick Links

| Page | Description |
|------|-------------|
| [Home](/), [/about](/about), [/products](/products) | Homepage with all sections; /about and /products redirect to anchors |
| [ReKall-IQ Product](/rekall-iq) | Full AI knowledge product page with features, pricing, comparison, FAQ |
| [AI Readiness Checklist](/rekall-iq/readiness) | 28-question interactive self-assessment with auto-scoring |
| [Services](/services) | All 12 service detail pages |
| [Pricing](/pricing) | Service pricing tiers with FAQ |
| [Case Studies](/case-studies) | Client success stories with measurable results |
| [Contact Us](/contact) | Contact form with validation, real-time status |
| [Privacy Policy](/privacy) | NDPR / GDPR compliant |
| [Terms of Service](/terms) | Legal terms and conditions |
| [Thank You](/thank-you) | Post-submission confirmation page |

---

## Pages & Routes

**Total**: 31 routes (27 static + 4 dynamic API), 0 build errors.

### Main Pages

| Route | Type | Description |
|-------|------|-------------|
| `/` | Static | Homepage — hero with 3D globe, stats, products, services, why-us, industries, testimonials, CTA |
| `/about` | Static | Redirects to homepage `#about` section |
| `/products` | Static | Redirects to homepage `#products` section |
| `/services` | Static | Full service listing grid with links to 12 individual service pages |
| `/contact` | Static | Contact form page with name, email, phone, subject, message fields |
| `/pricing` | Static | Three service tiers (Consultation, Starter, Enterprise) with FAQ |
| `/case-studies` | Static | Four detailed success stories with challenge, solution, results, metrics |
| `/privacy` | Static | Full privacy policy compliant with NDPR (Nigeria) and GDPR |
| `/terms` | Static | Terms of Service with 11 sections |
| `/thank-you` | Static | Post-submission confirmation with links back to home and ReKall-IQ |
| `/rekall-iq` | Static | Complete ReKall-IQ product landing page (see details below) |
| `/rekall-iq/readiness` | Static | AI Readiness interactive checklist (see details below) |

### Service Pages (12)

| Route | Service |
|-------|---------|
| `/services/custom-software-development` | Custom Software Development |
| `/services/ai-machine-learning` | AI & Machine Learning |
| `/services/cybersecurity` | Cybersecurity |
| `/services/cloud-infrastructure` | Cloud Infrastructure |
| `/services/web-development` | Web Development |
| `/services/mobile-app-development` | Mobile App Development |
| `/services/data-analytics` | Data Analytics & BI |
| `/services/devops-automation` | DevOps & Automation |
| `/services/enterprise-software` | Enterprise Software Integration |
| `/services/iot-solutions` | IoT Solutions |
| `/services/blockchain-web3` | Blockchain & Web3 |
| `/services/ui-ux-design` | UI/UX Design |

### API Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/api/contact` | POST | Contact form handler — rate-limited, sanitized, optional Resend email |
| `/api/consultation` | POST | Consultation booking handler |
| `/api/waitlist` | POST | ReKall-IQ pilot waitlist with Notion CRM integration |
| `/api/health` | GET | Health check returning status, configured services |

---

## Homepage Sections

The homepage (`/`) is a single-page layout with these sections:

### Hero Section
- 3D interactive globe (Three.js / React Three Fiber) as visual centerpiece
- Animated floating cards: "Enterprise Security", "AI Powered", "99.9% Uptime"
- Main headline with gradient text, subtitle, and two CTAs ("Get Started", "Explore Services")
- Animated background with floating particles
- Scroll indicator arrow

### Stats Section
- 6 animated counter stats: 100+ Projects, 50+ Clients, 100% Uptime, 40% Faster, 24/7 Support, 5/5 Rating
- Smooth count-up animation on scroll with staggered delays
- Client testimonials below with horizontal scroll

### Products Section
- Three product cards: ReKallIQ (Enterprise AI), AegisIDS (Cybersecurity), TrueKall (Cloud Communication)
- Each card has icon, gradient, feature list, and CTA
- ReKallIQ card leads to full product page at `/rekall-iq`

### Services Section
- 12 service cards in a responsive grid (3 columns desktop, 2 tablet, 1 mobile)
- Each card: icon, title, description, "Learn More" link to service detail page

### Why Us Section
- 8 feature cards: Enterprise-Grade Security, Scalable Architecture, Innovative Technologies, Experienced Team, Reliable Support, Modern UI/UX, Fast Deployment, Cost-Effective Solutions

### Industries Section
- 8 industry cards: Finance & Banking, Healthcare, Telecommunications, Logistics, Government, Education, Startups, Enterprises

### Testimonials
- Client quotes with author name and role, horizontal scrollable

### CTA Section
- Final call-to-action with contact button and service links

---

## ReKall-IQ Product Page

**Route**: `/rekall-iq`

A complete product landing page for the ReKall-IQ enterprise knowledge AI platform.

### Sections

1. **Hero** — "The Enterprise Knowledge AI Built for Africa" with subtitle and two CTAs ("Start Pilot Program", "See How It Works")
2. **Problem / Solution** — Two-column layout showing the knowledge management problem and how ReKall-IQ solves it
3. **8 Differentiators** — Grid with numbered cards:
   - The Only Africa-First Enterprise AI
   - Strictest Compliance — No Hallucinations
   - Price-Accessible
   - NDPR Alignment
   - Voice Queries
   - Knowledge Gap Analytics
   - No Duplicate Data Storage
   - Days to Value, Not Months
4. **7 Industry Use Cases** — Banking, Healthcare, Legal, Government, Manufacturing, Telecom, Education (each with pain point and fix)
5. **10 Features** — Private RAG, vector search, speech-to-text, RBAC, multi-tenant, admin console, NDPR, multi-language
6. **3 Pricing Tiers** — Pilot (free, 500 docs, 25 users), Starter (custom, 5000 docs, 100 users), Enterprise (custom, unlimited)
7. **Competitive Comparison Table** — vs Glean, Guru, Notion AI, MS Copilot, ChatGPT across 8 feature rows
8. **Security & Compliance** — 8 badges: NDPR Compliant, Document-Only RAG, No Hallucination, Data Isolation, Full Audit Trails, RBAC, Encrypted at Rest/Transit
9. **AI Readiness CTA** — Link to `/rekall-iq/readiness`
10. **FAQ** — 8 accordion questions
11. **Final CTA** — "Ready to Launch?" with Pilot Program, Ask Question, Readiness Assessment options

---

## ReKall-IQ Readiness Checklist

**Route**: `/rekall-iq/readiness`

An interactive 28-question self-assessment to evaluate an organisation's AI readiness.

### Features
- 28 questions across 7 pillars: Infrastructure, Data Readiness, Compliance, Use Case, Scale, Budget, Timeline
- Toggle cards with Yes/No buttons per question
- Real-time progress bar
- Pillar filter buttons showing completion status per pillar
- Auto-scoring with 4-tier interpretation: Highly Ready (80%+), Moderately Ready (60-79%), Developing (40-59%), Early Stage (<40%)
- Email capture form to receive personalized recommendations
- Results submission to `/api/contact`
- "Schedule Free Consultation" CTA
- "Email Me the PDF" button

---

## Services

All 12 services are accessible from:
1. The **homepage services section** (grid of cards)
2. The **/services** page (full listing)
3. Individual **service detail pages** at `/services/[slug]`
4. The **footer** (all 12 listed in a two-column layout)
5. The **navigation menu** (desktop and mobile link to services)

---

## Contact & Forms

### Contact Form (`/contact`)
- Fields: Full Name, Email, Phone, Subject, Message
- Client-side validation (required fields, email format)
- Loading state with disabled button during submission
- Success/error banners with clear messaging
- Submits to `POST /api/contact`
- Sends email notification via Resend (when configured)

### Waitlist Modal (ReKall-IQ Pilot)
- Multi-step signup form (organisation name, contact name, email, industry, team size, use case)
- Hidden honeypot field for bot detection
- Client-side validation with field-level error messages
- Character counter on use case textarea (300 max)
- Submits to `POST /api/waitlist`
- Saves to Notion database (when configured)
- Success state with "Explore ReKallIQ" link

### ReKall-IQ Popup
- Timed popup notification (appears after 5 seconds, auto-dismisses after 60 seconds)
- "Explore ReKallIQ" and "Join Waitlist" CTAs
- Session-based (shows once per visit)

---

## API Endpoints

All API routes include consistent security features:

| Feature | Implementation |
|---------|---------------|
| Rate limiting | 5 requests per 15 minutes per IP |
| Input sanitization | HTML tag stripping on all string inputs |
| Email validation | Regex + disposable domain blocklist (12 domains) |
| Honeypot | Hidden `website` field silently accepts bots |
| CORS | Whitelist origins only (production + localhost) |
| Payload limit | 10 KB max per request |
| Error handling | Structured JSON responses with status codes |

### API Responses

**Success**:
```json
{ "success": true, "message": "Message received..." }
```

**Rate limited** (429):
```json
{ "success": false, "error": "Too many requests..." }
```

**Validation error** (400):
```json
{ "success": false, "error": "Name, email, and message are required" }
```

**Server error** (500):
```json
{ "success": false, "error": "Internal server error" }
```

---

## Analytics

Google Analytics 4 is integrated site-wide via `NEXT_PUBLIC_GA_ID` environment variable (falls back to `G-XXXXXXXXXX`).

### Custom Events Tracked

| Event | Trigger | Data |
|-------|---------|------|
| `cta_clicked` | All buttons and links | `button_name`, `section` |
| `form_submitted` | Form completion | `form_name` |
| `page_view` | Custom path tracking | `page_path` |
| `product_expanded` | Product section interaction | `product_name` |
| `beta_waitlist_joined` | Waitlist signup | `source` |

### GA4 Setup
- Script loaded via `next/script` with `afterInteractive` strategy
- Page path tracking on each navigation
- Content Security Policy allows `*.google-analytics.com` and `*.googletagmanager.com`

---

## SEO

| Feature | Implementation |
|---------|---------------|
| Meta tags | Title template, description, keywords on all static pages |
| Open Graph | Title, description, image (1200x630), URL, locale `en_NG` |
| Twitter Cards | Summary large image card |
| JSON-LD | Organization schema with name, URL, address, contact, social links |
| Sitemap | `public/sitemap.xml` — all 24 static URLs with priority |
| Robots.txt | `public/robots.txt` — allow all, sitemap reference |
| Canonical | `metadataBase` uses `NEXT_PUBLIC_SITE_URL` |
| Structured data | Injected via `<script type="application/ld+json">` in root layout |

---

## Security

| Header / Feature | Value |
|------------------|-------|
| Content-Security-Policy | Restrictive: self, GA domains, inline scripts allowed |
| X-Frame-Options | `DENY` |
| X-Content-Type-Options | `nosniff` |
| Referrer-Policy | `strict-origin-when-cross-origin` |
| Permissions-Policy | Camera, microphone, geolocation disabled |
| HSTS | `max-age=31536000; includeSubDomains` |
| CORS | Origin whitelist on all API endpoints |
| Rate limiting | Per-IP, 5 requests per 15 minutes |
| Input sanitization | HTML tags stripped from all inputs |
| Honeypot | Hidden form fields for bot detection |

---

## Footer Navigation

The footer (`components/layout/Footer.tsx`) includes links to every part of the site:

| Column | Links |
|--------|-------|
| **Brand** | Company description, email, location |
| **Navigation** | Home, About, Products, Services, Why Us, Contact, Case Studies, Pricing |
| **Products** | ReKallIQ, AI Readiness Checklist, AegisIDS, TrueKall, Coming Soon |
| **Services** | All 12 services in a two-column layout |
| **Contact** | Email, location, "Send a Message" button |
| **Legal** | Privacy Policy, Terms of Service, Contact |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| 3D Graphics | Three.js (React Three Fiber) |
| Fonts | Inter, Geist Mono (variable) |
| Email | Resend API |
| Database / CRM | Notion API (waitlist tracking) |
| Deployment | Vercel (auto-deploy from GitHub) |

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:3000.

---

## Build & Deploy

```bash
# Production build (zero errors expected)
npm run build

# Lint check (zero warnings expected)
npm run lint

# Deploy to Vercel (auto-deploys from GitHub master branch)
# git push origin master triggers automatic Vercel deployment
```

---

## Environment Variables

Copy `.env.local.example` to `.env.local`:

```env
# Resend (email delivery)
# Get your API key from https://resend.com
RESEND_API_KEY=
RESEND_FROM_EMAIL=noreply@springvox.com

# Notifications - email to receive form submissions
WAITLIST_NOTIFY_EMAIL=hello@springvox.ai

# Notion (optional - waitlist CRM tracking)
# Get token from https://www.notion.so/profile/integrations
NOTION_TOKEN=
NOTION_WAITLIST_DB_ID=

# SMTP (alternative to Resend)
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Site URL (used in metadata, canonical URLs, sitemap)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## Project Structure

```
├── app/                          Next.js App Router
│   ├── layout.tsx                Root layout (GA, JSON-LD, SEO meta, fonts)
│   ├── page.tsx                  Homepage
│   ├── globals.css               Global styles, Tailwind imports
│   ├── about/page.tsx            Redirect to #about
│   ├── products/page.tsx         Redirect to #products
│   ├── contact/page.tsx          Contact form page
│   ├── pricing/page.tsx          Pricing tiers
│   ├── case-studies/page.tsx     Success stories
│   ├── privacy/page.tsx          Privacy policy
│   ├── terms/page.tsx            Terms of service
│   ├── thank-you/page.tsx        Post-submission confirmation
│   ├── rekall-iq/
│   │   ├── page.tsx              ReKall-IQ product page
│   │   └── readiness/page.tsx    AI Readiness checklist
│   ├── services/
│   │   ├── page.tsx              Service listing
│   │   └── [slug]/page.tsx       12 individual service pages
│   └── api/
│       ├── contact/route.ts      Contact form handler
│       ├── consultation/route.ts Consultation booking
│       ├── waitlist/route.ts     Waitlist with Notion
│       └── health/route.ts       Health check
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            Fixed header with logo, nav links, mobile menu
│   │   ├── Footer.tsx            Full footer with all page links
│   │   ├── AppShell.tsx          Layout wrapper
│   │   └── ServicePageLayout.tsx Service detail page template
│   ├── sections/
│   │   ├── Hero.tsx              3D globe hero with floating cards
│   │   ├── Stats.tsx             Animated counters + testimonials
│   │   ├── Products.tsx          Product cards grid
│   │   ├── Services.tsx          Service cards grid
│   │   ├── About.tsx             About section
│   │   ├── WhyUs.tsx             Features section
│   │   ├── Industries.tsx        Industry cards
│   │   ├── InnovationCore.tsx    Innovation section
│   │   └── CTA.tsx               Final call-to-action
│   ├── ui/
│   │   ├── Button.tsx            Reusable button (primary, outline, ghost)
│   │   ├── WaitlistModal.tsx     ReKall-IQ pilot signup modal
│   │   ├── ReKallIQPopup.tsx     Timed popup notification
│   │   ├── GlassCard.tsx         Glassmorphism card
│   │   ├── FeatureCard.tsx       Feature display card
│   │   ├── IndustryCard.tsx      Industry sector card
│   │   ├── ProductCard.tsx       Product showcase card
│   │   ├── ServiceCard.tsx       Service listing card
│   │   ├── TestimonialCard.tsx   Client testimonial card
│   │   ├── SectionWrapper.tsx    Section layout wrapper
│   │   └── AnimatedBackground.tsx Particle animation background
│   └── three/
│       └── GlobeSphere.tsx       3D interactive globe (Three.js)
│
├── lib/
│   ├── api/
│   │   ├── rateLimit.ts          In-memory rate limiter
│   │   ├── sanitize.ts           HTML tag sanitizer
│   │   ├── emailValidator.ts     Email format + disposable domain check
│   │   └── cors.ts               CORS origin whitelist
│   ├── analytics.ts              GA4 event tracking helpers
│   ├── api.ts                    Form submission wrapper functions
│   ├── constants.ts              All content data (services, products, industries, etc.)
│   ├── icons.tsx                 40+ custom SVG icon components
│   ├── types.ts                  Shared TypeScript type definitions
│   └── utils.ts                  General utility functions
│
├── public/
│   ├── logo.jpeg                 Site logo
│   ├── robots.txt                Search engine crawler rules
│   ├── sitemap.xml               Complete URL listing for SEO
│   └── *.svg                     Default Next.js SVG assets
│
├── .env.local.example            Environment variable template
├── next.config.ts                Next.js config with security headers, transpile
├── tsconfig.json                 TypeScript configuration
├── eslint.config.mjs             ESLint flat config
├── postcss.config.mjs            PostCSS / Tailwind config
├── package.json                  Dependencies and scripts
└── vercel.json                   Vercel deployment config
```

---

## License

All rights reserved. SpringVox Solution Limited.
