export const COMPANY = {
  name: "SpringVox Solution Limited",
  shortName: "SpringVox",
  email: "contact@springvox.com",
  location: "Lagos, Nigeria",
  founded: 2020,
  tagline: "Building Intelligent Software Solutions for the Future",
  description:
    "A forward-thinking technology company specializing in software development, enterprise solutions, artificial intelligence, cybersecurity, communication systems, and digital transformation services.",
  mission:
    "To empower businesses with innovative, scalable, and secure technology solutions that drive digital transformation and sustainable growth.",
  vision:
    "To be a global leader in intelligent technology solutions, setting the standard for innovation, reliability, and enterprise excellence.",
};

export const company = COMPANY;

export const LINKS = {
  productSite: "https://springvox-knowledge-ai.vercel.app/",
  productRegister: "https://springvox-knowledge-ai.vercel.app/register",
  productGetStarted: "https://springvox-knowledge-ai.vercel.app/get-started",
  companySite: "https://springvoxsl.com",
};

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#cta" },
];

export const products = [
  {
    name: "ReKallIQ",
    tagline: "Enterprise Intelligence Platform",
    description:
      "AI-powered enterprise intelligence and automation platform that transforms raw data into actionable insights, streamlines workflows, and drives intelligent decision-making across your organization.",
    icon: "brain",
    gradient: "from-cyan-500 to-blue-600",
    features: [
      "AI-Powered Analytics",
      "Workflow Automation",
      "Predictive Intelligence",
      "Real-time Dashboards",
    ],
  },
  {
    name: "AegisIDS",
    tagline: "Cybersecurity Shield",
    description:
      "Advanced cybersecurity and intrusion detection system that provides real-time threat monitoring, vulnerability assessment, and automated incident response to protect your digital assets.",
    icon: "shield",
    gradient: "from-cyan-500 to-teal-600",
    features: [
      "Threat Detection",
      "Vulnerability Scanning",
      "Incident Response",
      "Compliance Management",
    ],
  },
  {
    name: "TrueKall",
    tagline: "Cloud Communication Hub",
    description:
      "Modern cloud-based call center and VoIP communication system designed for seamless customer engagement, intelligent call routing, and omnichannel support at scale.",
    icon: "phone",
    gradient: "from-cyan-400 to-emerald-500",
    features: [
      "Omnichannel Support",
      "Smart Routing",
      "Real-time Analytics",
      "CRM Integration",
    ],
  },
  {
    name: "Upcoming Solutions",
    tagline: "Innovation in Progress",
    description:
      "We are continuously developing groundbreaking products in edge computing, decentralized AI, and next-generation IoT platforms. Stay tuned for what is next.",
    icon: "sparkle",
    gradient: "from-cyan-400 to-purple-500",
    features: [
      "Edge Computing",
      "Decentralized AI",
      "IoT Platforms",
      "Quantum Ready",
    ],
  },
];

export const SERVICES = [
  {
    name: "Custom Software Development",
    slug: "custom-software-development",
    icon: "Code",
    description:
      "Bespoke enterprise applications built from the ground up to match your exact operational needs.",
  },
  {
    name: "AI & Machine Learning",
    slug: "ai-machine-learning",
    icon: "Brain",
    description:
      "Intelligent systems, predictive models, and AI-powered automation that learn and scale with your business.",
  },
  {
    name: "Cybersecurity",
    slug: "cybersecurity",
    icon: "Shield",
    description:
      "End-to-end security architecture, vulnerability assessments, and continuous threat monitoring.",
  },
  {
    name: "Cloud Infrastructure",
    slug: "cloud-infrastructure",
    icon: "Cloud",
    description:
      "Scalable, resilient cloud environments on AWS, GCP, or Azure - designed for performance and cost efficiency.",
  },
  {
    name: "Web Development",
    slug: "web-development",
    icon: "Globe",
    description:
      "Fast, accessible, and visually compelling web applications and marketing sites.",
  },
  {
    name: "Mobile App Development",
    slug: "mobile-app-development",
    icon: "Smartphone",
    description:
      "Native and cross-platform mobile apps for iOS and Android that delight users.",
  },
  {
    name: "Data Analytics & BI",
    slug: "data-analytics",
    icon: "BarChart2",
    description:
      "Turn raw data into actionable insights with dashboards, pipelines, and visualisation tools.",
  },
  {
    name: "DevOps & Automation",
    slug: "devops-automation",
    icon: "GitBranch",
    description:
      "CI/CD pipelines, infrastructure-as-code, and workflow automation that accelerates delivery.",
  },
  {
    name: "Enterprise Software Integration",
    slug: "enterprise-software",
    icon: "Layers",
    description:
      "Seamlessly connect your ERP, CRM, HR, and finance systems into a unified data ecosystem.",
  },
  {
    name: "IoT Solutions",
    slug: "iot-solutions",
    icon: "Cpu",
    description:
      "Connected device architectures, sensor networks, and real-time data streams for industrial and smart-building use cases.",
  },
  {
    name: "Blockchain & Web3",
    slug: "blockchain-web3",
    icon: "Link",
    description:
      "Smart contracts, tokenisation, and decentralised application development.",
  },
  {
    name: "UI/UX Design",
    slug: "ui-ux-design",
    icon: "Palette",
    description:
      "User research, wireframing, prototyping, and pixel-perfect design systems that convert.",
  },
];

export const services = SERVICES.map((s) => ({
  name: s.name,
  description: s.description,
  icon: s.icon.toLowerCase(),
}));

export const features = [
  {
    title: "Enterprise-Grade Security",
    description:
      "SOC 2 compliant infrastructure with end-to-end encryption, zero-trust architecture, and continuous monitoring.",
    icon: "shield",
  },
  {
    title: "Scalable Architecture",
    description:
      "Cloud-native solutions designed to scale from startups to enterprises with millions of users.",
    icon: "layers",
  },
  {
    title: "Innovative Technologies",
    description:
      "Leveraging the latest in AI, blockchain, edge computing, and quantum-ready architectures.",
    icon: "cpu",
  },
  {
    title: "Experienced Team",
    description:
      "100+ senior engineers, architects, and designers with decades of combined industry expertise.",
    icon: "users",
  },
  {
    title: "Reliable Support",
    description:
      "24/7 dedicated support with 99.9% uptime SLA and guaranteed response times.",
    icon: "headphones",
  },
  {
    title: "Modern UI/UX Standards",
    description:
      "Pixel-perfect interfaces designed for accessibility, performance, and exceptional user experiences.",
    icon: "palette",
  },
  {
    title: "Fast Deployment",
    description:
      "Agile methodology with continuous delivery, getting your products to market 40% faster.",
    icon: "zap",
  },
  {
    title: "Cost-Effective Solutions",
    description:
      "Optimized resource utilization and efficient processes delivering maximum ROI.",
    icon: "dollar",
  },
];

export const industries = [
  {
    name: "Finance & Banking",
    icon: "finance",
    description: "Secure, compliant solutions for financial institutions.",
  },
  {
    name: "Healthcare",
    icon: "health",
    description: "HIPAA-compliant platforms for healthcare providers.",
  },
  {
    name: "Telecommunications",
    icon: "telecom",
    description: "Infrastructure and tools for communication providers.",
  },
  {
    name: "Logistics & Supply Chain",
    icon: "logistics",
    description: "End-to-end visibility and optimization solutions.",
  },
  {
    name: "Government & Public Sector",
    icon: "government",
    description: "Secure, scalable systems for government agencies.",
  },
  {
    name: "Education & E-Learning",
    icon: "education",
    description: "Modern learning platforms and EdTech solutions.",
  },
  {
    name: "Startups & SMBs",
    icon: "startup",
    description: "Affordable, scalable technology for growing businesses.",
  },
  {
    name: "Large Enterprises",
    icon: "enterprise",
    description: "Enterprise-grade solutions for complex organizations.",
  },
];

export const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "100%", label: "Uptime Guarantee" },
  { value: "40%", label: "Faster Deployment" },
  { value: "24/7", label: "Support Available" },
  { value: "5/5", label: "Client Rating" },
];

export const testimonials = [
  {
    quote:
      "SpringVox transformed our digital infrastructure. Their AI solutions helped us reduce operational costs by 35% while improving service delivery times.",
    author: "Sarah Chen",
    role: "CTO, FinTech Global",
  },
  {
    quote:
      "Working with SpringVox feels like having an extension of our own team. Their dedication to quality and innovation sets them apart.",
    author: "James Rodriguez",
    role: "CEO, CloudScale Inc.",
  },
];

export const socialLinks = [
  { name: "LinkedIn", href: "#", icon: "linkedin" },
  { name: "Twitter", href: "#", icon: "twitter" },
  { name: "GitHub", href: "#", icon: "github" },
  { name: "YouTube", href: "#", icon: "youtube" },
];
