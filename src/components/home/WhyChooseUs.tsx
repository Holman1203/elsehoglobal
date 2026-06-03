'use client';
import { CheckCircle2, Star, DollarSign, Zap, Leaf, Truck, Headset, Award, TrendingUp } from 'lucide-react';

const features = [
  { icon: Star, title: 'Quality Products', desc: 'Only premium, certified technology products from trusted global brands.' },
  { icon: Award, title: 'Trusted Global Brands', desc: 'Official partnerships with leading technology manufacturers.' },
  { icon: DollarSign, title: 'Competitive Pricing', desc: 'Best market prices with transparent cost structures.' },
  { icon: Zap, title: 'Customized Solutions', desc: 'Tailored technology solutions for every business size and need.' },
  { icon: Leaf, title: 'Sustainable Practices', desc: 'Eco-friendly and responsible technology sourcing and disposal.' },
  { icon: Truck, title: 'Fast Delivery', desc: 'Reliable and timely delivery across Nigeria and West Africa.' },
  { icon: Headset, title: 'Reliable Support', desc: '24/7 technical support and after-sales service commitment.' },
  { icon: TrendingUp, title: 'Procurement Expertise', desc: 'Deep experience in corporate and institutional ICT procurement.' },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-white dark:bg-[#060f1e]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-[#0066FF] text-sm font-semibold uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#0A2540] dark:text-white mt-2 mb-5 leading-tight">
              The El-SEHO Advantage —{' '}
              <span className="gradient-text">Excellence in Every Delivery</span>
            </h2>
            <p className="text-gray-500 dark:text-white/50 mb-8 leading-relaxed">
              We go beyond product supply to deliver end-to-end technology solutions that transform your business operations and outcomes.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map(f => (
                <div key={f.title} className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 dark:bg-[#0066FF]/15 flex items-center justify-center shrink-0 group-hover:bg-[#0066FF] transition-colors">
                    <f.icon size={18} className="text-[#0066FF] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-[#0A2540] dark:text-white mb-1">{f.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-white/40 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80"
                alt="Team at work"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/70 via-transparent to-transparent" />
              {/* Overlay stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { val: '500+', label: 'Products' },
                    { val: '100+', label: 'Clients' },
                    { val: '98%', label: 'Satisfaction' },
                  ].map(s => (
                    <div key={s.label} className="glass text-center rounded-xl p-3">
                      <div className="text-xl font-bold text-white">{s.val}</div>
                      <div className="text-white/60 text-xs">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Check list */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 glass-dark rounded-2xl p-4 shadow-xl hidden lg:block">
              {['ISO Certified', 'OEM Partner', 'Secure Payment'].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm text-white py-1.5">
                  <CheckCircle2 size={15} className="text-[#00C853]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
