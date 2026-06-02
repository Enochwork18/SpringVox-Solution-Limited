import ServicePageLayout from "@/components/layout/ServicePageLayout";

const data = {
  name: "Mobile App Development",
  tagline:
    "Native and cross-platform mobile apps for iOS and Android that delight users.",
  overview: [
    "Native-quality mobile apps for iOS and Android - built with React Native or Flutter for maximum reach, or fully native Swift/Kotlin when performance demands it. We handle design, development, and App Store submission.",
    "From customer-facing apps to internal field tools, we build mobile experiences that are fast, reliable, and beautiful.",
  ],
  deliverables: [
    "React Native / Flutter cross-platform apps",
    "Native iOS (Swift) and Android (Kotlin)",
    "App Store & Play Store submission",
    "Push notifications & offline support",
    "API integration & backend sync",
    "Ongoing maintenance & updates",
  ],
  forWhom: [
    {
      icon: "\uD83D\uDCF1",
      label: "Businesses",
      description: "Needing a customer-facing mobile app.",
    },
    {
      icon: "\uD83D\uDC77\u200D\u2642\uFE0F",
      label: "Field Teams",
      description: "Enterprise workers needing mobile tools on the go.",
    },
    {
      icon: "\uD83D\uDE80",
      label: "Startups",
      description: "Building mobile-first products and MVPs.",
    },
  ],
  differentiators: [
    "Cross-platform expertise means one codebase, two platforms - faster delivery, lower cost.",
    "Full lifecycle: from UX design through store submission and post-launch analytics.",
    "Offline-first architecture for users in areas with unreliable connectivity.",
  ],
};

export default function Page() {
  return <ServicePageLayout data={data} />;
}
