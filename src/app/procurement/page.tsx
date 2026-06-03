import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Globe, ScrollText, HandHelping, University, CheckCircle2, ArrowRight, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Corporate Procurement',
  description: 'B2B technology procurement services from El-SEHO Frontier Solutions — bulk procurement, vendor sourcing, government and NGO contracts.',
};

const segments = [
  {
    icon: Building2,
    title: 'Corporate & Enterprise',
    desc: 'Large-scale technology procurement for private sector businesses, with volume pricing and dedicated account management.',
    color: '#0066FF',
    points: ['Volume discounts available', 'Dedicated account manager', 'Customized delivery scheduling', 'Extended warranty options'],
  },
  {
    icon: ScrollText,
    title: 'Government Agencies',
    desc: 'Specialized procurement support for MDAs, compliant with government procurement regulations and documentation requirements.',
    color: '#00C853',
    points: ['Government procurement compliance', 'Full documentation support', 'Competitive tendering response', 'Performance bond availability'],
  },
  {
    icon: HandHelping,
    title: 'NGOs & Donor Agencies',
    desc: 'Donor-compliant technology procurement for NGOs, ensuring transparency, accountability, and audit-ready documentation.',
    color: '#0066FF',
    points: ['Donor-compliant procurement', 'Audit-ready documentation', 'USAID/EU/UN guidelines compliance', 'Cost-effective sourcing'],
  },
  {
    icon: University,
    title: 'Educational Institutions',
    desc: 'Technology supply for schools, polytechnics, and universities — from computer labs to administrative systems.',
    color: '#00C853',
    points: ['Education pricing available', 'Lab setup and configuration', 'Staff training included', 'Maintenance packages'],
  },
  {
    icon: Globe,
    title: 'International Organizations',
    desc: 'Technology procurement and logistics support for international organizations operating in Nigeria and West Africa.',
    color: '#0066FF',
    points: ['International import expertise', 'Customs clearance support', 'Regional delivery network', 'Multi-currency invoicing'],
  },
];

const process = [
  { step: '01', title: 'Needs Assessment', desc: 'We analyze your technology requirements and organizational goals.' },
  { step: '02', title: 'Proposal & Quotation', desc: 'We prepare a detailed, transparent proposal with competitive pricing.' },
  { step: '03', title: 'Approval & Order', desc: 'Upon agreement, we place orders with our verified vendor network.' },
  { step: '04', title: 'Quality Verification', desc: 'All products are inspected and verified before delivery.' },
  { step: '05', title: 'Delivery & Installation', desc: 'Safe delivery and optional on-site setup and configuration.' },
  { step: '06', title: 'Support & Follow-up', desc: 'Ongoing technical support and warranty management.' },
];

export default function ProcurementPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-[#0A2540] relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[#00C853] text-sm font-semibold uppercase tracking-widest">Corporate Procurement</span>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mt-3 mb-5">
            Technology Procurement{' '}
            <span className="gradient-text">at Scale</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We handle everything from vendor sourcing to doorstep delivery — letting you focus on your core business.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-green inline-flex items-center gap-2 group">
              Request Corporate Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Segments */}
      <section className="section-pad bg-white dark:bg-[#060f1e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-[#0A2540] dark:text-white">Who We Serve</h2>
            <p className="text-gray-500 dark:text-white/50 mt-3 max-w-xl mx-auto">
              Specialized procurement solutions for every type of organization.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {segments.map(seg => (
              <div key={seg.title} className="bg-gray-50 dark:bg-[#0d1f35] rounded-2xl p-7 border border-gray-100 dark:border-white/5 card-hover">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${seg.color}15` }}>
                  <seg.icon size={22} style={{ color: seg.color }} />
                </div>
                <h3 className="font-bold text-[#0A2540] dark:text-white mb-3 font-heading">{seg.title}</h3>
                <p className="text-sm text-gray-500 dark:text-white/50 mb-4">{seg.desc}</p>
                <ul className="space-y-2">
                  {seg.points.map(p => (
                    <li key={p} className="flex items-center gap-2 text-xs text-gray-500 dark:text-white/40">
                      <CheckCircle2 size={12} style={{ color: seg.color }} className="shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-[#0A2540] relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="text-[#00C853] text-sm font-semibold uppercase tracking-widest">Our Process</span>
            <h2 className="text-3xl font-bold font-heading text-white mt-2">How Procurement Works</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map(p => (
              <div key={p.step} className="glass rounded-2xl p-7 border border-white/10">
                <div className="text-4xl font-bold font-heading gradient-text mb-4">{p.step}</div>
                <h3 className="font-bold text-white mb-2 font-heading">{p.title}</h3>
                <p className="text-white/50 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-[#07111e] text-center">
        <div className="max-w-2xl mx-auto">
          <FileText size={48} className="text-[#0066FF] mx-auto mb-5" />
          <h2 className="text-3xl font-bold font-heading text-[#0A2540] dark:text-white mb-4">
            Ready to Start Your Procurement?
          </h2>
          <p className="text-gray-500 dark:text-white/50 mb-8">
            Fill out our quote request form and a procurement specialist will contact you within 24 hours.
          </p>
          <Link href="/contact" className="btn-primary inline-flex">Request Corporate Quote</Link>
        </div>
      </section>
    </>
  );
}
