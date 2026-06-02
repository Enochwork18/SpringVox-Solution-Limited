import ServicePageLayout from "@/components/layout/ServicePageLayout";

const data = {
  name: "UI/UX Design",
  tagline:
    "User research, wireframing, prototyping, and pixel-perfect design systems that convert.",
  overview: [
    "Great software only delivers value when people can actually use it. We provide end-to-end design - from user research and wireframes to high-fidelity prototypes and design systems that your engineers can build with confidence.",
    "Our design process is research-driven: we interview users, map journeys, test prototypes, and iterate until the experience is intuitive, accessible, and delightful.",
  ],
  deliverables: [
    "User research & journey mapping",
    "Wireframing & interactive prototyping (Figma)",
    "High-fidelity UI design",
    "Design system & component library",
    "Usability testing & iteration",
    "Dev-ready handoff with specs and assets",
  ],
  forWhom: [
    {
      icon: "\uD83D\uDEE0\uFE0F",
      label: "Product Teams",
      description: "Building customer-facing applications.",
    },
    {
      icon: "\uD83C\uDFED",
      label: "Enterprises",
      description: "Modernising internal tooling and legacy interfaces.",
    },
    {
      icon: "\uD83D\uDE80",
      label: "Startups",
      description: "Needing a polished MVP design before development.",
    },
  ],
  differentiators: [
    "We design for African users - considering local languages, literacy levels, and device diversity.",
    "Research-backed: every design decision is validated with real users, not assumptions.",
    "Developer-ready handoff: we provide specs, assets, and component code to eliminate design-to-dev friction.",
  ],
};

export default function Page() {
  return <ServicePageLayout data={data} />;
}
