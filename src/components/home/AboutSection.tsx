'use client';
import Link from 'next/link';
import { CheckCircle2, Target, Eye } from 'lucide-react';

const offerings = [
  'Smartphones & Tablets', 'Laptops & Desktops', 'Smartwatches & Wearables',
  'Networking Equipment', 'ICT Infrastructure', 'Technical Support Services',
];

export default function AboutSection() {
  return (
    <section className="section-pad bg-white dark:bg-[#060f1e]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&q=80"
                alt="Technology Solutions"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 glass-dark rounded-2xl p-5 shadow-xl max-w-xs hidden md:block">
              <div className="text-[#00C853] font-bold text-3xl mb-1">15+</div>
              <div className="text-white text-sm">Years of Technology Excellence</div>
            </div>
            {/* Accent dot */}
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-[#0066FF]/10 blur-xl" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-[#0066FF] text-sm font-semibold uppercase tracking-widest mb-3">
              About El-SEHO
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#0A2540] dark:text-white mb-5 leading-tight">
              Driving Digital Transformation Across{' '}
              <span className="gradient-text">Nigeria & Africa</span>
            </h2>
            <p className="text-gray-600 dark:text-white/60 leading-relaxed mb-6">
              El-SEHO Frontier Solutions Ltd specializes in the supply and procurement of technology
              gadgets and ICT solutions for individuals, organizations, NGOs, government institutions,
              and private businesses. We are your one-stop partner for all technology needs.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {offerings.map(item => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-700 dark:text-white/70">
                  <CheckCircle2 size={16} className="text-[#00C853] shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#0066FF]/5 dark:bg-[#0066FF]/10 rounded-xl p-5 border border-[#0066FF]/20">
                <Target size={24} className="text-[#0066FF] mb-3" />
                <h3 className="font-bold text-[#0A2540] dark:text-white mb-2 font-heading">Our Mission</h3>
                <p className="text-sm text-gray-600 dark:text-white/60">
                  Deliver innovative, reliable, and cost-effective technology solutions that empower businesses.
                </p>
              </div>
              <div className="bg-[#00C853]/5 dark:bg-[#00C853]/10 rounded-xl p-5 border border-[#00C853]/20">
                <Eye size={24} className="text-[#00C853] mb-3" />
                <h3 className="font-bold text-[#0A2540] dark:text-white mb-2 font-heading">Our Vision</h3>
                <p className="text-sm text-gray-600 dark:text-white/60">
                  Become the leading technology procurement and ICT solutions provider in Africa.
                </p>
              </div>
            </div>

            <Link href="/about" className="btn-primary inline-flex">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
