import ServicePageLayout from '@/components/layout/ServicePageLayout'

const data = {
  name: 'Custom Software Development',
  tagline: 'Bespoke enterprise applications built from the ground up to match your exact operational needs.',
  overview: [
    'End-to-end bespoke software engineering - from requirements analysis through deployment and maintenance. We build web apps, internal tools, portals, and enterprise platforms tailored precisely to your workflows.',
    'Our team uses modern architectures, clean code practices, and rigorous quality assurance to deliver software that is maintainable, scalable, and secure from day one.',
  ],
  deliverables: [
    'Requirements workshops & discovery',
    'Architecture design & technology selection',
    'Full-stack development (frontend + backend)',
    'Quality assurance & automated testing',
    'CI/CD deployment pipelines',
    'Ongoing maintenance & support',
  ],
  forWhom: [
    { icon: '\uD83D\uDCBC', label: 'Growing Businesses', description: 'Outgrowing off-the-shelf software and need custom workflows.' },
    { icon: '\uD83C\uDFED', label: 'Enterprises', description: 'Need bespoke internal tools and mission-critical platforms.' },
    { icon: '\uD83D\uDE80', label: 'Startups', description: 'Building their core product from scratch with expert engineering.' },
  ],
  differentiators: [
    'We pair deep technical expertise with business context - we do not just write code, we understand your domain.',
    'Our agile delivery model means you see working software every two weeks, not months later.',
    'We own the outcome: post-launch support, performance monitoring, and continuous improvement are built into every engagement.',
  ],
}

export default function Page() {
  return <ServicePageLayout data={data} />
}
