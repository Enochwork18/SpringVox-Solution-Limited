import ServicePageLayout from '@/components/layout/ServicePageLayout'

const data = {
  name: 'Web Development',
  tagline: 'Fast, accessible, and visually compelling web applications and marketing sites.',
  overview: [
    'We build fast, accessible, and visually compelling web applications - from marketing sites and landing pages to complex web platforms. We use modern frameworks like Next.js and React to deliver experiences that are performant by default.',
    'Every site we ship meets Core Web Vitals targets, follows WCAG accessibility guidelines, and is built on a headless CMS architecture for easy content management.',
  ],
  deliverables: [
    'Next.js / React web applications',
    'Marketing & landing page design',
    'Progressive Web Apps (PWA)',
    'CMS integration (Sanity, Strapi, Contentful)',
    'Performance optimisation (Core Web Vitals)',
    'Accessibility compliance (WCAG)',
  ],
  forWhom: [
    { icon: '\uD83C\uDF10', label: 'Businesses', description: 'Needing a strong online presence and brand site.' },
    { icon: '\uD83D\uDEE0\uFE0F', label: 'Product Teams', description: 'Launching SaaS platforms and web apps.' },
    { icon: '\uD83C\uDFDB\uFE0F', label: 'Organisations', description: 'Modernising legacy web applications.' },
  ],
  differentiators: [
    'We ship performant-by-default: every site targets 90+ Lighthouse scores.',
    'Design + development in-house: no handoff gaps between designers and engineers.',
    'Built for the Nigerian and African market - optimised for variable network conditions.',
  ],
}

export default function Page() {
  return <ServicePageLayout data={data} />
}
