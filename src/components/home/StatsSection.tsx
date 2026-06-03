'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { end: 500, suffix: '+', label: 'Products Delivered', desc: 'Technology products supplied nationwide' },
  { end: 100, suffix: '+', label: 'Business Clients', desc: 'Organizations we serve actively' },
  { end: 50, suffix: '+', label: 'Corporate Partnerships', desc: 'Vendor and brand partnerships' },
  { end: 98, suffix: '%', label: 'Customer Satisfaction', desc: 'Clients who recommend us' },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + increment, end);
            setCount(Math.floor(current));
            if (current >= end) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold font-heading gradient-text">
      {count}{suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#0A2540] to-[#0d2f4d] relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-3">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-white/50">Our track record of delivering technology excellence</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(s => (
            <div key={s.label} className="glass rounded-2xl p-8 text-center border border-white/10">
              <Counter end={s.end} suffix={s.suffix} />
              <div className="text-white font-semibold mt-2 mb-1">{s.label}</div>
              <div className="text-white/40 text-sm">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
