'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    headline: 'Empowering Businesses Through Technology',
    sub: 'Your trusted partner for technology procurement, ICT solutions, and digital transformation.',
    cta1: { label: 'Explore Products', href: '/products' },
    cta2: { label: 'Request a Quote', href: '/contact' },
    bg: 'from-[#0A2540] via-[#0d2f4d] to-[#071c30]',
    accent: '#0066FF',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400&q=80',
  },
  {
    headline: 'Technology Solutions for Modern Organizations',
    sub: 'Providing high-quality gadgets, IT infrastructure, networking, and technical support services.',
    cta1: { label: 'Our Services', href: '/ict-services' },
    cta2: { label: 'Learn More', href: '/about' },
    bg: 'from-[#071c30] via-[#0A2540] to-[#0d1f35]',
    accent: '#00C853',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80',
  },
  {
    headline: 'Innovative Procurement & ICT Services',
    sub: 'Helping businesses and individuals access reliable technology from trusted global brands.',
    cta1: { label: 'Corporate Procurement', href: '/procurement' },
    cta2: { label: 'Contact Us', href: '/contact' },
    bg: 'from-[#0d2f4d] via-[#071c30] to-[#0A2540]',
    accent: '#0066FF',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&q=80',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = (idx: number) => {
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 300);
  };

  const next = () => go((current + 1) % slides.length);
  const prev = () => go((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${slide.bg} transition-all duration-700`}
      />
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 transition-all duration-700"
        style={{ backgroundImage: `url(${slide.image})` }}
      />
      {/* Tech grid */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl transition-all duration-700"
        style={{ background: slide.accent }}
      />

      {/* Floating tech shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-[#0066FF]/20 animate-pulse-slow hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full border border-[#00C853]/20 animate-pulse-slow hidden lg:block" />
      <div className="absolute top-40 left-10 w-2 h-2 rounded-full bg-[#0066FF] animate-float" />
      <div className="absolute bottom-40 right-10 w-2 h-2 rounded-full bg-[#00C853] animate-float" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className={`transition-all duration-300 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00C853] animate-pulse" />
            <span className="text-white/80 text-sm font-medium">Nigeria's Premier ICT Solutions Company</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading text-white leading-tight mb-6 max-w-4xl">
            {slide.headline.split(' ').slice(0, 2).join(' ')}{' '}
            <span className="gradient-text">{slide.headline.split(' ').slice(2, 4).join(' ')}</span>{' '}
            {slide.headline.split(' ').slice(4).join(' ')}
          </h1>

          <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            {slide.sub}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={slide.cta1.href} className="btn-primary flex items-center gap-2 justify-center group">
              {slide.cta1.label}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href={slide.cta2.href} className="btn-outline flex items-center gap-2 justify-center">
              {slide.cta2.label}
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
          {[
            { val: '500+', label: 'Products Delivered' },
            { val: '100+', label: 'Business Clients' },
            { val: '50+', label: 'Partnerships' },
            { val: '98%', label: 'Satisfaction Rate' },
          ].map(s => (
            <div key={s.label} className="glass px-4 py-3 rounded-xl text-center">
              <div className="text-2xl font-bold gradient-text">{s.val}</div>
              <div className="text-white/60 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        <button onClick={prev} className="p-2 glass rounded-full text-white hover:bg-white/20 transition-all">
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'w-7 bg-[#00C853]' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
        <button onClick={next} className="p-2 glass rounded-full text-white hover:bg-white/20 transition-all">
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 text-white/40 text-xs">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/40" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
