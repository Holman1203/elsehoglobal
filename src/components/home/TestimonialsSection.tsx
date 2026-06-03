'use client';
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Aisha Bello',
    role: 'IT Director, Zenith Capital Group',
    type: 'Business',
    rating: 5,
    text: 'El-SEHO Frontier Solutions transformed our entire IT infrastructure. Their procurement process was seamless, pricing was unbeatable, and the post-installation support has been exceptional.',
    avatar: 'AB',
  },
  {
    name: 'Engr. Chukwuemeka Obi',
    role: 'Head of Technology, UNICEF Nigeria (Vendor)',
    type: 'NGO',
    rating: 5,
    text: 'Their understanding of donor-compliant procurement requirements made them the perfect partner for our ICT needs. Delivered over 200 laptops on schedule and within budget.',
    avatar: 'CO',
  },
  {
    name: 'Dr. Fatima Usman',
    role: 'Provost, Federal Polytechnic Bida',
    type: 'Education',
    rating: 5,
    text: 'We outfitted three computer labs and our admin offices through El-SEHO. The quality of products and the speed of delivery exceeded our expectations considerably.',
    avatar: 'FU',
  },
  {
    name: 'Alhaji Musa Garba',
    role: 'Director of Finance, Kano State Ministry of Education',
    type: 'Government',
    rating: 5,
    text: 'El-SEHO handled our government procurement contract professionally. Their documentation, delivery timelines, and warranty support have been exemplary throughout.',
    avatar: 'MG',
  },
  {
    name: 'Oluwaseun Adeyemi',
    role: 'CEO, SwiftLogistics Nigeria',
    type: 'Business',
    rating: 5,
    text: 'From servers to networking equipment, El-SEHO provided everything we needed to build a robust tech stack for our operations. Highly recommend their ICT consulting service.',
    avatar: 'OA',
  },
];

const typeColors: Record<string, string> = {
  Business: '#0066FF',
  NGO: '#00C853',
  Education: '#FF6B35',
  Government: '#9B59B6',
};

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section className="section-pad bg-white dark:bg-[#060f1e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#0066FF] text-sm font-semibold uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#0A2540] dark:text-white mt-2 mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-gray-500 dark:text-white/50 max-w-xl mx-auto">
            Don't just take our word for it — hear from the businesses and institutions we've empowered.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {visible.map((t, i) => (
            <div
              key={i}
              className={`bg-gray-50 dark:bg-[#0d1f35] rounded-2xl p-7 border transition-all duration-300 ${
                i === 0
                  ? 'border-[#0066FF]/30 shadow-lg shadow-[#0066FF]/10 scale-100'
                  : 'border-gray-100 dark:border-white/5 opacity-80'
              }`}
            >
              <Quote size={28} className="text-[#0066FF]/30 mb-4" />
              <p className="text-gray-600 dark:text-white/60 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm shrink-0"
                  style={{ background: typeColors[t.type] || '#0066FF' }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm text-[#0A2540] dark:text-white">{t.name}</p>
                  <p className="text-xs text-gray-400 dark:text-white/40">{t.role}</p>
                </div>
                <span
                  className="ml-auto text-xs px-2 py-1 rounded-full font-medium"
                  style={{ background: `${typeColors[t.type]}20`, color: typeColors[t.type] }}
                >
                  {t.type}
                </span>
              </div>
              <div className="flex gap-0.5 mt-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={13} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <button onClick={prev} className="p-2 rounded-lg border border-gray-200 dark:border-white/10 hover:bg-[#0066FF] hover:border-[#0066FF] hover:text-white text-gray-400 transition-all">
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${i === current ? 'w-6 bg-[#0066FF]' : 'w-2 bg-gray-300 dark:bg-white/20'}`}
              />
            ))}
          </div>
          <button onClick={next} className="p-2 rounded-lg border border-gray-200 dark:border-white/10 hover:bg-[#0066FF] hover:border-[#0066FF] hover:text-white text-gray-400 transition-all">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
