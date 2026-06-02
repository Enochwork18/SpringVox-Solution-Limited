import ServicePageLayout from "@/components/layout/ServicePageLayout";

const data = {
  name: "Data Analytics & BI",
  tagline:
    "Turn raw data into actionable insights with dashboards, pipelines, and visualisation tools.",
  overview: [
    "We turn your raw operational data into structured intelligence. From ETL pipelines to interactive dashboards, we help you answer the questions that drive better decisions - faster.",
    "Our team builds end-to-end data platforms that ingest, clean, transform, and visualise data from multiple sources, giving you a single source of truth.",
  ],
  deliverables: [
    "Data pipeline design & ETL development",
    "Business intelligence dashboards (Power BI, Looker, custom)",
    "Data warehouse architecture",
    "KPI definition & reporting frameworks",
    "Predictive analytics models",
    "Data quality audits & governance",
  ],
  forWhom: [
    {
      icon: "\uD83D\uDCC8",
      label: "Finance Teams",
      description: "Needing real-time P&L and financial visibility.",
    },
    {
      icon: "\uD83D\uDEE0\uFE0F",
      label: "Operations Teams",
      description: "Tracking performance metrics across departments.",
    },
    {
      icon: "\uD83D\uDCBC",
      label: "Executives",
      description: "Needing board-ready dashboards and strategic insights.",
    },
  ],
  differentiators: [
    "We connect any data source - legacy databases, SaaS APIs, spreadsheets - into one unified view.",
    "Self-service analytics: we empower your team to explore data without engineering dependency.",
    "Africa-relevant: we handle mobile money data, USSD logs, and offline transaction data natively.",
  ],
};

export default function Page() {
  return <ServicePageLayout data={data} />;
}
