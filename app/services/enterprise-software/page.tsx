import ServicePageLayout from "@/components/layout/ServicePageLayout";

const data = {
  name: "Enterprise Software Integration",
  tagline:
    "Seamlessly connect your ERP, CRM, HR, and finance systems into a unified data ecosystem.",
  overview: [
    "Your ERP, CRM, HR platform, and financial systems should work as one. We design and build integration layers that connect your existing software stack, eliminating data silos and manual handoffs.",
    "Our middleware approach ensures data flows in real-time between systems, with conflict resolution, error handling, and audit logging built in.",
  ],
  deliverables: [
    "API design & middleware development",
    "ERP integrations (SAP, Odoo, Oracle)",
    "CRM integrations (Salesforce, HubSpot)",
    "HR system integrations (BambooHR, Workday)",
    "Webhooks & event-driven architectures",
    "Data sync, migration & reconciliation",
  ],
  forWhom: [
    {
      icon: "\uD83C\uDFED",
      label: "Enterprises",
      description: "With fragmented software stacks across departments.",
    },
    {
      icon: "\uD83D\uDCCB",
      label: "Finance Teams",
      description: "Tired of manual data transfers between systems.",
    },
    {
      icon: "\uD83D\uDEE0\uFE0F",
      label: "Operations Teams",
      description: "Needing a unified view of business data.",
    },
  ],
  differentiators: [
    "We have real-world experience integrating SAP, Salesforce, Odoo, and legacy Nigerian banking systems.",
    "Event-driven architecture ensures near-real-time sync - not batch imports from last night.",
    "We build with failure in mind: retry logic, dead-letter queues, and alerting for every integration.",
  ],
};

export default function Page() {
  return <ServicePageLayout data={data} />;
}
