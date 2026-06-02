import ServicePageLayout from '@/components/layout/ServicePageLayout'

const data = {
  name: 'DevOps & Automation',
  tagline: 'CI/CD pipelines, infrastructure-as-code, and workflow automation that accelerates delivery.',
  overview: [
    'We streamline your engineering operations with CI/CD pipelines, container orchestration, and infrastructure automation. Less manual work. Faster delivery. More reliable systems.',
    'Our DevOps practice transforms chaotic deployments into repeatable, auditable, and automated release processes - giving your team confidence to ship frequently.',
  ],
  deliverables: [
    'CI/CD pipeline setup (GitHub Actions, GitLab CI)',
    'Docker & Kubernetes deployment',
    'Infrastructure-as-code (Terraform)',
    'Automated testing integration',
    'Monitoring & alerting (Datadog, Grafana)',
    'Release management & rollback strategies',
  ],
  forWhom: [
    { icon: '\uD83D\uDC68\u200D\uD83D\uDCBB', label: 'Engineering Teams', description: 'With slow or manual deployment processes.' },
    { icon: '\uD83D\uDE80', label: 'Scaling Startups', description: 'Needing to automate their growing infrastructure.' },
    { icon: '\uD83C\uDFED', label: 'Enterprises', description: 'Modernising legacy deployment and operations.' },
  ],
  differentiators: [
    'We implement DevSecOps - security checks are built into every pipeline stage.',
    'Our playbooks mean any team member (not just the expert) can trigger a production release safely.',
    'We reduce mean-time-to-recovery (MTTR) with automated rollback and incident runbooks.',
  ],
}

export default function Page() {
  return <ServicePageLayout data={data} />
}
