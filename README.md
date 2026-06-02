# SpringVox Solution Limited

Enterprise website and [ReKall-IQ](/rekall-iq) product landing page for SpringVox Solution Limited, a Nigerian technology company building AI platforms, enterprise software, cybersecurity, and digital transformation solutions for startups and enterprises across Africa.

**Production**: https://springvoxsl.com

## Quick Links

| Page | Description |
|------|-------------|
| [ReKall-IQ Product](/rekall-iq) | Full product page with features, pricing, comparison table, FAQ |
| [AI Readiness Checklist](/rekall-iq/readiness) | 28-question interactive assessment with auto-scoring |
| [Contact Us](/contact) | Contact form, consultation booking |
| [Pricing](/pricing) | Service pricing tiers |
| [Case Studies](/case-studies) | Client success stories |
| [Privacy Policy](/privacy) | NDPR / GDPR compliant |
| [Terms of Service](/terms) | Legal terms |

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
| Deployment | Vercel |

## Pages & Routes

| Route | Type | Description |
|-------|------|-------------|
| `/` | Static | Homepage with hero (3D globe), stats, products, services, testimonials, CTA |
| `/about` | Static | Redirects to homepage #about |
| `/products` | Static | Redirects to homepage #products |
| `/services` | Static | Service listing with all 12 service detail pages |
| `/services/[slug]` | Static (x12) | Individual service pages |
| `/pricing` | Static | Service pricing tiers with FAQ |
| `/case-studies` | Static | 4 success stories with metrics |
| `/contact` | Static | Contact form with validation, email notification |
| `/rekall-iq` | Static | Full ReKall-IQ product page |
| `/rekall-iq/readiness` | Static | AI Readiness interactive checklist |
| `/privacy` | Static | Privacy Policy (NDPR / GDPR compliant) |
| `/terms` | Static | Terms of Service |
| `/thank-you` | Static | Post-submission confirmation |

**Total**: 31 routes (27 static + 4 API), 0 build errors.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build & Deploy

```bash
npm run build       # Zero errors expected
npm run lint        # Zero warnings expected
```

## Environment Variables

Copy `.env.local.example` to `.env.local`:

```env
# Resend (email delivery)
RESEND_API_KEY=
RESEND_FROM_EMAIL=noreply@springvox.com

# Notifications
WAITLIST_NOTIFY_EMAIL=hello@springvox.ai

# Notion (optional - waitlist CRM tracking)
NOTION_TOKEN=
NOTION_WAITLIST_DB_ID=

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Project Structure

```
├── app/                    Next.js App Router
│   ├── layout.tsx          Root layout (GA, JSON-LD, SEO meta, fonts)
│   ├── page.tsx            Homepage
│   ├── api/                API route handlers
│   ├── [route]/page.tsx    Static pages
│   ├── rekall-iq/
│   │   ├── page.tsx        Product page
│   │   └── readiness/page.tsx
│   └── services/[slug]/   12 service pages
├── components/
│   ├── layout/             Navbar, Footer, AppShell, ServicePageLayout
│   ├── sections/           Hero, About, Products, Services, CTA, Stats
│   ├── ui/                 Button, Card, Modal, Popup
│   └── three/              GlobeSphere (3D)
├── lib/
│   ├── api/                API utilities (rateLimit, sanitize, cors)
│   ├── analytics.ts        GA4 event tracking
│   ├── api.ts              Form submission helpers
│   ├── constants.ts        All content data
│   ├── icons.tsx           Custom SVG icon components
│   └── types.ts            Shared TypeScript types
├── public/
│   ├── logo.jpeg           Site logo
│   ├── robots.txt
│   └── sitemap.xml
└── next.config.ts, tsconfig.json, eslint.config.mjs
```

## License

All rights reserved. SpringVox Solution Limited.
