import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Target, Eye, Users, Award, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about El-SEHO Frontier Solutions Ltd — our mission, vision, values, and the team behind Nigeria\'s leading technology procurement company.',
};

const values = [
  { icon: Award, title: 'Excellence', desc: 'We deliver nothing short of the best in every product and service we provide.' },
  { icon: Users, title: 'Client-Centricity', desc: 'Our clients\' success is our north star — every decision is made with their outcomes in mind.' },
  { icon: Globe, title: 'Innovation', desc: 'We continuously seek smarter, better ways to deliver technology solutions.' },
  { icon: CheckCircle2, title: 'Integrity', desc: 'Transparency and honesty in all our business relationships and dealings.' },
];

const team = [
  { name: 'El-Hassan Seho', role: 'Chief Executive Officer', initials: 'EH', color: '#0066FF' },
  { name: 'Amina Yusuf', role: 'Chief Technology Officer', initials: 'AY', color: '#00C853' },
  { name: 'Babatunde Okafor', role: 'Head of Procurement', initials: 'BO', color: '#0066FF' },
  { name: 'Ngozi Eze', role: 'ICT Solutions Director', initials: 'NE', color: '#00C853' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-[#0A2540] relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[#00C853] text-sm font-semibold uppercase tracking-widest">About El-SEHO</span>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mt-3 mb-5">
            Nigeria's Premier Technology{' '}
            <span className="gradient-text">Procurement Partner</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Empowering businesses, institutions, and individuals with world-class technology solutions since our founding.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad bg-white dark:bg-[#060f1e]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#0066FF] text-sm font-semibold uppercase tracking-widest">Our Story</span>
              <h2 className="text-3xl font-bold font-heading text-[#0A2540] dark:text-white mt-2 mb-5">
                Building Africa's Technology Future
              </h2>
              <p className="text-gray-600 dark:text-white/60 mb-4 leading-relaxed">
                El-SEHO Frontier Solutions Ltd was established with a clear vision: to bridge the technology gap
                in Nigeria and across Africa by making premium ICT products and services accessible to every
                organization, regardless of size.
              </p>
              <p className="text-gray-600 dark:text-white/60 mb-4 leading-relaxed">
                From startups to multinational corporations, government agencies to NGOs, we have consistently
                delivered technology solutions that drive real business outcomes. Our deep expertise in procurement,
                coupled with strong relationships with global technology brands, gives our clients a distinct
                competitive advantage.
              </p>
              <p className="text-gray-600 dark:text-white/60 leading-relaxed">
                Today, El-SEHO stands as a trusted partner for over 100 organizations, having delivered 500+
                technology products and supported 50+ corporate partnerships across Nigeria.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
                alt="Our Team"
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad bg-gray-50 dark:bg-[#07111e]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-[#0066FF] to-[#0052cc] rounded-2xl p-10 text-white">
              <Target size={36} className="mb-5 opacity-80" />
              <h3 className="text-2xl font-bold font-heading mb-4">Our Mission</h3>
              <p className="leading-relaxed opacity-90">
                To deliver innovative, reliable, and cost-effective technology solutions that empower businesses
                and individuals to achieve their goals and accelerate growth in the digital economy.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#00C853] to-[#00a043] rounded-2xl p-10 text-white">
              <Eye size={36} className="mb-5 opacity-80" />
              <h3 className="text-2xl font-bold font-heading mb-4">Our Vision</h3>
              <p className="leading-relaxed opacity-90">
                To become the most trusted and leading technology procurement and ICT solutions provider in
                Africa, known for quality, reliability, and transformative impact.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-heading text-[#0A2540] dark:text-white">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map(v => (
              <div key={v.title} className="bg-white dark:bg-[#0d1f35] rounded-2xl p-6 text-center border border-gray-100 dark:border-white/5 card-hover">
                <div className="w-12 h-12 bg-[#0066FF]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <v.icon size={22} className="text-[#0066FF]" />
                </div>
                <h3 className="font-bold text-[#0A2540] dark:text-white mb-2 font-heading">{v.title}</h3>
                <p className="text-sm text-gray-500 dark:text-white/50">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad bg-white dark:bg-[#060f1e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#0066FF] text-sm font-semibold uppercase tracking-widest">Leadership</span>
            <h2 className="text-3xl font-bold font-heading text-[#0A2540] dark:text-white mt-2">Meet Our Team</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {team.map(member => (
              <div key={member.name} className="bg-gray-50 dark:bg-[#0d1f35] rounded-2xl p-8 text-center border border-gray-100 dark:border-white/5 card-hover">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                  style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}99)` }}
                >
                  {member.initials}
                </div>
                <h3 className="font-bold text-[#0A2540] dark:text-white font-heading">{member.name}</h3>
                <p className="text-sm text-gray-500 dark:text-white/50 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#0A2540] text-center relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold font-heading text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-white/60 mb-8">Let's discuss how El-SEHO can power your technology needs.</p>
          <Link href="/contact" className="btn-primary inline-flex">Get Started Today</Link>
        </div>
      </section>
    </>
  );
}
