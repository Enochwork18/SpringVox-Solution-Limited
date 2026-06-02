import ServicePageLayout from '@/components/layout/ServicePageLayout'

const data = {
  name: 'IoT Solutions',
  tagline: 'Connected device architectures, sensor networks, and real-time data streams for industrial and smart-building use cases.',
  overview: [
    'We architect connected device solutions - from sensor networks and edge computing to real-time dashboards and automated triggers. Whether it is smart buildings, industrial monitoring, or logistics tracking, we handle the full IoT stack.',
    'Our solutions bridge the physical and digital worlds, giving you real-time visibility and control over your operations.',
  ],
  deliverables: [
    'IoT architecture & system design',
    'Device firmware & embedded software',
    'MQTT/CoAP protocol integration',
    'Cloud IoT platforms (AWS IoT, Azure IoT Hub)',
    'Real-time monitoring dashboards',
    'Predictive maintenance models',
  ],
  forWhom: [
    { icon: '\uD83C\uDFED', label: 'Manufacturing Plants', description: 'Monitoring equipment health and production lines.' },
    { icon: '\uD83C\uDFE2', label: 'Smart-Building Operators', description: 'Managing energy, security, and facility systems.' },
    { icon: '\uD83D\uDE9A', label: 'Logistics Companies', description: 'Tracking assets and fleet in the field.' },
  ],
  differentiators: [
    'Full-stack IoT: from sensor firmware to cloud dashboards - one team, no handoff gaps.',
    'Edge computing expertise: we process data at the device level, reducing cloud costs and latency.',
    'Built for African infrastructure: solutions work with variable power and intermittent connectivity.',
  ],
}

export default function Page() {
  return <ServicePageLayout data={data} />
}
