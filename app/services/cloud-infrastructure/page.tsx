import ServicePageLayout from "@/components/layout/ServicePageLayout";

const data = {
  name: "Cloud Infrastructure",
  tagline:
    "Scalable, resilient cloud environments on AWS, GCP, or Azure - designed for performance and cost efficiency.",
  overview: [
    "We architect, migrate, and manage cloud environments that are secure, cost-optimised, and built for scale. Whether you are moving to the cloud for the first time or rearchitecting a legacy workload, we guide the full journey.",
    "Our engineers hold certifications across AWS, GCP, and Azure, and use Infrastructure-as-Code to ensure every environment is reproducible, auditable, and disaster-ready.",
  ],
  deliverables: [
    "Cloud architecture design (AWS/GCP/Azure)",
    "Migration planning & execution",
    "Infrastructure-as-code (Terraform/Pulumi)",
    "Cost optimisation & rightsizing",
    "Monitoring & observability setup",
    "Disaster recovery planning",
  ],
  forWhom: [
    {
      icon: "\uD83D\uDEE1\uFE0F",
      label: "Businesses Moving Off-Prem",
      description: "Transitioning from on-premise servers to cloud.",
    },
    {
      icon: "\uD83D\uDE80",
      label: "Scaling Startups",
      description: "Needing infrastructure that grows with them.",
    },
    {
      icon: "\uD83C\uDF0D",
      label: "Multi-Cloud Enterprises",
      description: "Requiring resilient, distributed architectures.",
    },
  ],
  differentiators: [
    "Cloud-agnostic advice - we recommend the right platform for your needs, not push one vendor.",
    "FinOps-first approach: we optimise costs before optimising performance.",
    "Fully automated, auditable infrastructure via IaC with security built into every layer.",
  ],
};

export default function Page() {
  return <ServicePageLayout data={data} />;
}
