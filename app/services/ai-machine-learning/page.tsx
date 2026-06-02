import ServicePageLayout from "@/components/layout/ServicePageLayout";

const data = {
  name: "AI & Machine Learning",
  tagline:
    "Intelligent systems, predictive models, and AI-powered automation that learn and scale with your business.",
  overview: [
    "We design and deploy AI systems that solve real operational problems - not demos. From predictive analytics to NLP pipelines to our own RAG-based knowledge AI (ReKallIQ), we bring AI from prototype to production.",
    "Our approach is pragmatic: we start with your data, identify high-impact use cases, and build models that deliver measurable ROI. No black boxes, no vendor lock-in.",
  ],
  deliverables: [
    "Data preprocessing & feature engineering",
    "Model training, evaluation & tuning",
    "NLP & document intelligence systems",
    "RAG & vector search systems",
    "ML inference APIs & deployment",
    "Model monitoring & drift detection",
  ],
  forWhom: [
    {
      icon: "\uD83D\uDCCA",
      label: "Data-Rich Organisations",
      description: "Wanting predictive insight from their operational data.",
    },
    {
      icon: "\uD83E\uDD16",
      label: "HR & Ops Teams",
      description: "Wanting AI assistants for employee self-service.",
    },
    {
      icon: "\uD83C\uDF31",
      label: "Growing Enterprises",
      description: "Wanting to automate decision workflows at scale.",
    },
  ],
  differentiators: [
    "We have a shipped AI product - ReKallIQ - giving us production RAG expertise most consultancies lack.",
    "We focus on private, secure AI: your data never trains public models.",
    "End-to-end capability from data engineering to MLOps - not just model training.",
  ],
};

export default function Page() {
  return <ServicePageLayout data={data} />;
}
