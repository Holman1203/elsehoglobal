import Link from 'next/link';
import { Facebook, Linkedin, Instagram, Twitter, Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'ICT Services', href: '/ict-services' },
  { label: 'Contact', href: '/contact' },
];

const services = [
  { label: 'ICT Infrastructure', href: '/ict-services#infrastructure' },
  { label: 'Corporate Procurement', href: '/procurement' },
  { label: 'Technical Support', href: '/ict-services#support' },
  { label: 'Network Solutions', href: '/ict-services#network' },
  { label: 'Information Security', href: '/ict-services#security' },
];

const socials = [
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Twitter, href: '#', label: 'X (Twitter)' },
];

export default function Footer() {
  return (
    <footer className="bg-[#060f1e] text-white">
      {/* CTA Band */}
      <div className="bg-gradient-to-r from-[#0066FF] to-[#00C853] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3">
            Ready to Transform Your Technology Infrastructure?
          </h2>
          <p className="text-white/90 mb-6">
            Get a customized quote for your business technology needs today.
          </p>
          <Link href="/contact" className="btn-outline inline-flex">
            Request a Corporate Quote
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#00C853] flex items-center justify-center font-bold text-white text-lg">
                ES
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">El-SEHO</div>
                <div className="text-[#00C853] text-xs">Frontier Solutions Ltd</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Your trusted partner for technology procurement, ICT solutions, and digital transformation in Nigeria and across Africa.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#0066FF] flex items-center justify-center transition-all hover:scale-105"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-5 font-heading">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/60 hover:text-[#00C853] text-sm transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-5 font-heading">Our Services</h3>
            <ul className="space-y-3">
              {services.map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/60 hover:text-[#00C853] text-sm transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00C853]" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="font-bold text-white mb-5 font-heading">Get In Touch</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={15} className="mt-0.5 text-[#0066FF] shrink-0" />
                <span>Abuja, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone size={15} className="text-[#0066FF] shrink-0" />
                <span>+234 000 000 0000</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail size={15} className="text-[#0066FF] shrink-0" />
                <span>info@elseho.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Clock size={15} className="text-[#0066FF] shrink-0" />
                <span>Mon–Fri: 8:00 AM – 6:00 PM</span>
              </li>
            </ul>
            {/* Newsletter */}
            <div>
              <p className="text-sm text-white/70 mb-2">Subscribe to our newsletter</p>
              <form className="flex gap-2" onSubmit={e => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#0066FF]"
                />
                <button type="submit" className="p-2 bg-[#0066FF] rounded-lg hover:bg-[#0052cc] transition-colors">
                  <Send size={15} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/40">
          <p>© 2026 El-SEHO Frontier Solutions Ltd. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white/70 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
