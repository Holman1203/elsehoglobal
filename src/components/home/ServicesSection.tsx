'use client';
import Link from 'next/link';
import { Network, Settings, HardDrive, Shield, ShoppingCart, Lightbulb, Headset, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: HardDrive,
    title: 'ICT Infrastructure Management',
    desc: 'Design, deployment, and maintenance of complete IT systems and infrastructure for organizations.',
    href: '/ict-services#infrastructure',
    color: '#0066FF',
  },
  {
    icon: Network,
    title: 'Network Administration',
    desc: 'LAN/WAN setup, monitoring, troubleshooting, and optimization for seamless connectivity.',
    href: '/ict-services#network',
    color: '#00C853',
  },
  {
    icon: Settings,
    title: 'Systems Administration',
    desc: 'Server management, software deployment, user management, and system performance tuning.',
    href: '/ict-services#systems',
    color: '#0066FF',
  },
  {
    icon: Headset,
    title: 'Technical Support',
    desc: 'Responsive onsite and remote IT support to keep your business operations running smoothly.',
    href: '/ict-services#support',
    color: '#00C853',
  },
  {
    icon: Shield,
    title: 'Information Security',
    desc: 'Comprehensive cybersecurity implementation, risk management, and compliance solutions.',
    href: '/ict-services#security',
    color: '#0066FF',
  },
  {
    icon: ShoppingCart,
    title: 'IT Procurement',
    desc: 'Strategic technology sourcing, vendor management, and procurement optimization.',
    href: '/ict-services#procurement',
    color: '#00C853',
  },
  {
    icon: Lightbulb,
    title: 'IT Strategy & Consulting',
    desc: 'Digital transformation planning, technology roadmaps, and strategic IT guidance.',
    href: '/ict-services#consulting',
    color: '#0066FF',
  },
];

export default function ServicesSection() {
  return (
    <section className="section-pad bg-[#0A2540] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#0066FF]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#00C853]/10 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00C853] text-sm font-semibold uppercase tracking-widest">ICT Services</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mt-2 mb-4">
            Comprehensive Technology Services
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            End-to-end ICT solutions tailored to accelerate your business growth and operational efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map(svc => (
            <Link
              key={svc.title}
              href={svc.href}
              className="group glass rounded-2xl p-6 card-hover border border-white/10 hover:border-[#0066FF]/40"
            >
              <div
                className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ background: `${svc.color}20` }}
              >
                <svc.icon size={22} style={{ color: svc.color }} />
              </div>
              <h3 className="font-bold text-white mb-2 font-heading text-sm">{svc.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{svc.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-[#0066FF] text-xs font-medium">
                Learn more <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/ict-services" className="btn-outline inline-flex items-center gap-2">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
