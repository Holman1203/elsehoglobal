'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon, Search, ChevronDown } from 'lucide-react';
import { useDarkMode } from './DarkModeProvider';
import clsx from 'clsx';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Technology Gadgets', href: '/products#gadgets' },
      { label: 'Business Technology', href: '/products#business' },
      { label: 'Smart Devices', href: '/products#smart' },
    ],
  },
  {
    label: 'ICT Services',
    href: '/ict-services',
    children: [
      { label: 'ICT Infrastructure', href: '/ict-services#infrastructure' },
      { label: 'Network Administration', href: '/ict-services#network' },
      { label: 'Technical Support', href: '/ict-services#support' },
      { label: 'Information Security', href: '/ict-services#security' },
      { label: 'IT Consulting', href: '/ict-services#consulting' },
    ],
  },
  { label: 'Procurement', href: '/procurement' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { dark, toggle } = useDarkMode();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[#0A2540]/95 backdrop-blur-lg shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#00C853] flex items-center justify-center font-bold text-white text-lg shadow-lg group-hover:scale-105 transition-transform">
            ES
          </div>
          <div className="hidden sm:block">
            <div className="text-white font-bold text-lg leading-tight font-heading">El-SEHO</div>
            <div className="text-[#00C853] text-xs font-medium leading-tight">Frontier Solutions Ltd</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 text-white/90 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white/10"
              >
                {link.label}
                {link.children && <ChevronDown size={14} className="opacity-70" />}
              </Link>
              {link.children && openDropdown === link.label && (
                <div className="absolute top-full left-0 mt-1 w-52 glass-dark rounded-xl p-2 shadow-2xl">
                  {link.children.map(child => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-[#0066FF]/20 rounded-lg transition-all"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link
            href="/contact"
            className="hidden md:flex btn-primary text-sm"
          >
            Get a Quote
          </Link>
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0A2540]/98 backdrop-blur-lg border-t border-white/10 px-4 py-4">
          {navLinks.map(link => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="block py-3 text-white/90 hover:text-white font-medium border-b border-white/5"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="pl-4">
                  {link.children.map(child => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block py-2 text-sm text-white/60 hover:text-[#00C853]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="mt-4 block text-center btn-primary"
            onClick={() => setMobileOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
