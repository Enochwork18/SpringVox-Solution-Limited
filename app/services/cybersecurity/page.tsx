import ServicePageLayout from "@/components/layout/ServicePageLayout";

const data = {
  name: "Cybersecurity",
  tagline:
    "End-to-end security architecture, vulnerability assessments, and continuous threat monitoring.",
  overview: [
    "We protect your digital assets with a layered security approach - from network hardening and penetration testing to incident response planning and Zero Trust architecture. Security is not a product; it is an ongoing discipline.",
    "Our team brings experience across finance, healthcare, and government sectors, ensuring compliance with CBN, PCI-DSS, HIPAA, and NDPR requirements.",
  ],
  deliverables: [
    "Vulnerability assessments & pen testing",
    "Network security hardening",
    "Zero Trust architecture design",
    "Security policy & compliance frameworks",
    "Incident response planning",
    "Staff security awareness training",
  ],
  forWhom: [
    {
      icon: "\uD83C\uDFE6",
      label: "Fintechs & Banks",
      description: "Subject to CBN/PCI-DSS regulatory requirements.",
    },
    {
      icon: "\uD83C\uDFE5",
      label: "Healthcare Providers",
      description: "Managing sensitive patient data.",
    },
    {
      icon: "\uD83C\uDF10",
      label: "Remote Enterprises",
      description: "With distributed workforces needing secure access.",
    },
  ],
  differentiators: [
    "We combine offensive (pen testing) and defensive (architecture) security under one roof.",
    "Deep regulatory compliance expertise across Nigerian and international frameworks.",
    "Proactive threat intelligence - we do not wait for breaches to act.",
  ],
};

export default function Page() {
  return <ServicePageLayout data={data} />;
}
