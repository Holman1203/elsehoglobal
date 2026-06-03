import Link from 'next/link';
import { Building2, Globe, ScrollText, HandHelping, University, ArrowRight } from 'lucide-react';

const items = [
  { icon: Building2, title: 'Bulk Procurement', desc: 'Large-scale technology purchasing at competitive rates for enterprises and institutions.' },
  { icon: Globe, title: 'Vendor Sourcing', desc: 'Strategic identification and management of global technology vendors and OEM suppliers.' },
  { icon: ScrollText, title: 'Government Contracts', desc: 'Specialized procurement support for government ministries, departments, and agencies.' },
  { icon: HandHelping, title: 'NGO Procurement Support', desc: 'Donor-compliant technology procurement for humanitarian and development organizations.' },
  { icon: University, title: 'Institutional Supply', desc: 'Comprehensive technology supply for educational institutions and research organizations.' },
];

export default function ProcurementSection() {
  return (
    <section className="section-pad bg-gray-50 dark:bg-[#07111e]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="text-[#0066FF] text-sm font-semibold uppercase tracking-widest">Corporate Procurement</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#0A2540] dark:text-white mt-2 mb-5 leading-tight">
              B2B Technology Procurement{' '}
              <span className="gradient-text">at Scale</span>
            </h2>
            <p className="text-gray-500 dark:text-white/50 mb-8 leading-relaxed">
              We provide end-to-end corporate procurement solutions, handling everything from vendor selection to delivery, ensuring you receive the best technology at the best value.
            </p>
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.title} className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 dark:bg-[#0066FF]/15 flex items-center justify-center shrink-0 group-hover:bg-[#0066FF] transition-colors">
                    <item.icon size={18} className="text-[#0066FF] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-[#0A2540] dark:text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-white/40">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="mt-8 btn-green inline-flex items-center gap-2 group">
              Request Corporate Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=700&q=80"
                alt="Corporate Procurement"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/50 to-transparent rounded-2xl" />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-dark rounded-2xl p-5 shadow-xl hidden md:block">
              <div className="text-[#00C853] font-bold text-2xl">50+</div>
              <div className="text-white text-sm">Active Corporate Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
