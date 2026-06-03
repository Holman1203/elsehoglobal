import type { Metadata } from 'next';
import Link from 'next/link';
import { Network, Settings, HardDrive, Shield, ShoppingCart, Lightbulb, Headset, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ICT Services',
  description: 'Comprehensive ICT services including infrastructure management, network administration, technical support, and cybersecurity from El-SEHO Frontier Solutions.',
};

const services = [
  {
    id: 'infrastructure',
    icon: HardDrive,
    title: 'ICT Infrastructure Management',
    color: '#0066FF',
    desc: 'We design, deploy, and maintain complete IT infrastructure systems that form the backbone of your business operations.',
    features: [
      'Data center design and deployment',
      'Server room setup and management',
      'Storage solutions and backup systems',
      'Virtual infrastructure (VMware, Hyper-V)',
      'Cloud infrastructure integration',
      'Infrastructure health monitoring',
    ],
  },
  {
    id: 'network',
    icon: Network,
    title: 'Network Administration',
    color: '#00C853',
    desc: 'Comprehensive LAN/WAN network design, deployment, monitoring, troubleshooting, and performance optimization services.',
    features: [
      'LAN/WAN design and deployment',
      'Network monitoring and management',
      'Firewall and access control',
      'VPN setup and management',
      'Wireless network solutions',
      'Network performance optimization',
    ],
  },
  {
    id: 'systems',
    icon: Settings,
    title: 'Systems Administration',
    color: '#0066FF',
    desc: 'Professional server management, software deployment, user administration, and system performance tuning.',
    features: [
      'Windows and Linux server management',
      'Active Directory and user management',
      'Software deployment and patching',
      'Performance monitoring and tuning',
      'Disaster recovery planning',
      'System documentation',
    ],
  },
  {
    id: 'support',
    icon: Headset,
    title: 'Technical Support',
    color: '#00C853',
    desc: 'Responsive onsite and remote IT support that keeps your business operations running at peak performance.',
    features: [
      '24/7 remote support availability',
      'Onsite technical assistance',
      'Hardware repair and replacement',
      'Software troubleshooting',
      'User training and documentation',
      'SLA-guaranteed response times',
    ],
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Information Security',
    color: '#0066FF',
    desc: 'Comprehensive cybersecurity solutions including risk assessment, policy development, and security implementation.',
    features: [
      'Cybersecurity risk assessment',
      'Security policy development',
      'Endpoint protection solutions',
      'Security awareness training',
      'Vulnerability management',
      'Compliance (ISO 27001, NDPR)',
    ],
  },
  {
    id: 'procurement',
    icon: ShoppingCart,
    title: 'IT Procurement',
    color: '#00C853',
    desc: 'Strategic technology sourcing, vendor evaluation, and procurement lifecycle management for optimal ROI.',
    features: [
      'Technology needs assessment',
      'Vendor evaluation and selection',
      'Contract negotiation support',
      'Asset management solutions',
      'Warranty and maintenance tracking',
      'Disposal and refresh planning',
    ],
  },
  {
    id: 'consulting',
    icon: Lightbulb,
    title: 'IT Strategy & Consulting',
    color: '#0066FF',
    desc: 'Strategic technology planning, digital transformation roadmaps, and expert guidance for technology decision-making.',
    features: [
      'Digital transformation strategy',
      'IT roadmap development',
      'Technology audit and review',
      'Cloud migration planning',
      'Business continuity planning',
      'Executive IT advisory',
    ],
  },
];

export default function ICTServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-[#0A2540] relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[#00C853] text-sm font-semibold uppercase tracking-widest">ICT Services</span>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mt-3 mb-5">
            End-to-End{' '}
            <span className="gradient-text">Technology Services</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            From infrastructure to security, we provide comprehensive ICT services that keep your business running and growing.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-white dark:bg-[#060f1e]">
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((svc, i) => (
            <div
              key={svc.id}
              id={svc.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              <div className={i % 2 !== 0 ? 'lg:col-start-2' : ''}>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${svc.color}15` }}
                >
                  <svc.icon size={28} style={{ color: svc.color }} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#0A2540] dark:text-white mb-4">{svc.title}</h2>
                <p className="text-gray-500 dark:text-white/50 mb-6 leading-relaxed">{svc.desc}</p>
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2 group text-sm">
                  Get This Service
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className={`bg-gray-50 dark:bg-[#0d1f35] rounded-2xl p-7 border border-gray-100 dark:border-white/5 ${i % 2 !== 0 ? 'lg:col-start-1' : ''}`}>
                <h3 className="font-bold text-[#0A2540] dark:text-white mb-5 font-heading">What's Included</h3>
                <div className="space-y-3">
                  {svc.features.map(f => (
                    <div key={f} className="flex items-center gap-3">
                      <CheckCircle2 size={16} style={{ color: svc.color }} className="shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-white/60">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#0A2540] text-center relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold font-heading text-white mb-4">Need a Managed ICT Solution?</h2>
          <p className="text-white/60 mb-8">Talk to our experts about a tailored ICT service package for your organization.</p>
          <Link href="/contact" className="btn-primary inline-flex">Schedule a Consultation</Link>
        </div>
      </section>
    </>
  );
}
