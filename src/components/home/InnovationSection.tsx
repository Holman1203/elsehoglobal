import { Search, Settings, Leaf, Globe, Headset } from 'lucide-react';

const items = [
  {
    icon: Search,
    title: 'Curated Product Selection',
    desc: 'We expertly select only the best technology products that meet quality benchmarks and client requirements.',
    color: '#0066FF',
  },
  {
    icon: Settings,
    title: 'Customized Business Solutions',
    desc: 'Every procurement solution is tailored to fit the specific needs, scale, and budget of your organization.',
    color: '#00C853',
  },
  {
    icon: Leaf,
    title: 'Sustainable Practices',
    desc: 'We prioritize eco-friendly technology sourcing, responsible disposal, and carbon-conscious supply chains.',
    color: '#0066FF',
  },
  {
    icon: Globe,
    title: 'Seamless Digital Experience',
    desc: 'Online product browsing, quote request, and order tracking for a frictionless client experience.',
    color: '#00C853',
  },
  {
    icon: Headset,
    title: 'Exceptional Customer Support',
    desc: 'Multi-channel support via phone, email, WhatsApp, and onsite visits — always available when you need us.',
    color: '#0066FF',
  },
];

export default function InnovationSection() {
  return (
    <section className="section-pad bg-[#0A2540] relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-10" />
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-[#0066FF]/10 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <span className="text-[#00C853] text-sm font-semibold uppercase tracking-widest">Our Innovation</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mt-2 mb-4">
            How We Deliver Exceptional Value
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Five pillars that set El-SEHO Frontier Solutions apart in technology procurement and delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`glass rounded-2xl p-7 border border-white/10 hover:border-[#0066FF]/30 transition-all card-hover ${
                i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: `${item.color}20` }}
              >
                <item.icon size={26} style={{ color: item.color }} />
              </div>
              <h3 className="font-bold text-white text-lg font-heading mb-3">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
