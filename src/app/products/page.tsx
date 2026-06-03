import type { Metadata } from 'next';
import Link from 'next/link';
import { Smartphone, Laptop, Tablet, Watch, Headphones, Package, Server, Wifi, Printer, Camera, Monitor, Tv, Home, BookOpen, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse El-SEHO\'s comprehensive range of technology products — smartphones, laptops, servers, networking equipment, smart devices and more.',
};

const allProducts = [
  {
    id: 'gadgets',
    title: 'Technology Gadgets',
    desc: 'Latest consumer electronics and personal tech devices from globally trusted brands.',
    color: '#0066FF',
    bg: 'from-[#0066FF]/10 to-transparent',
    items: [
      { name: 'Smartphones', icon: Smartphone, desc: 'iOS and Android flagship & mid-range devices', brands: 'Apple, Samsung, Xiaomi, Infinix' },
      { name: 'Laptops', icon: Laptop, desc: 'Business, creative, and student laptops', brands: 'Dell, HP, Lenovo, Apple, Asus' },
      { name: 'Tablets', icon: Tablet, desc: 'iOS, Android, and Windows tablets', brands: 'Apple, Samsung, Microsoft' },
      { name: 'Smartwatches', icon: Watch, desc: 'Fitness trackers and smart wearables', brands: 'Apple, Samsung, Fitbit, Garmin' },
      { name: 'Wireless Earbuds', icon: Headphones, desc: 'ANC and premium audio solutions', brands: 'Apple, Sony, Bose, Samsung' },
      { name: 'Accessories', icon: Package, desc: 'Cases, cables, chargers, storage', brands: 'Belkin, Anker, Ugreen' },
    ],
  },
  {
    id: 'business',
    title: 'Business Technology',
    desc: 'Enterprise-grade technology solutions for business operations and infrastructure.',
    color: '#00C853',
    bg: 'from-[#00C853]/10 to-transparent',
    items: [
      { name: 'Servers', icon: Server, desc: 'Rack, tower, and blade servers', brands: 'Dell EMC, HP, IBM, Cisco' },
      { name: 'Networking Equipment', icon: Wifi, desc: 'Routers, switches, access points', brands: 'Cisco, Ubiquiti, Mikrotik, TP-Link' },
      { name: 'Printers', icon: Printer, desc: 'Laser, inkjet, and multifunction', brands: 'HP, Canon, Epson, Xerox' },
      { name: 'CCTV Systems', icon: Camera, desc: 'IP cameras, NVR/DVR, surveillance', brands: 'Hikvision, Dahua, Axis' },
      { name: 'Conference Equipment', icon: Monitor, desc: 'AV systems and video conferencing', brands: 'Logitech, Poly, Jabra' },
      { name: 'UPS Systems', icon: Package, desc: 'Uninterruptible power supply systems', brands: 'APC, Eaton, Vertiv' },
    ],
  },
  {
    id: 'smart',
    title: 'Smart Devices',
    desc: 'Next-generation smart and connected devices for home and business.',
    color: '#0066FF',
    bg: 'from-[#0066FF]/10 to-transparent',
    items: [
      { name: 'Smart TVs', icon: Tv, desc: '4K UHD, OLED, and QLED displays', brands: 'Samsung, LG, Sony, TCL' },
      { name: 'Smart Home Devices', icon: Home, desc: 'IoT automation and smart control', brands: 'Google, Amazon, Philips, Ring' },
      { name: 'VR/AR Devices', icon: Monitor, desc: 'Virtual and augmented reality headsets', brands: 'Meta, Sony, HTC' },
      { name: 'E-Readers', icon: BookOpen, desc: 'Digital reading devices', brands: 'Amazon Kindle, Kobo' },
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-[#0A2540] relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[#00C853] text-sm font-semibold uppercase tracking-widest">Our Products</span>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mt-3 mb-5">
            Premium Technology{' '}
            <span className="gradient-text">Products Catalogue</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Source the best technology products from globally trusted brands, delivered to your doorstep.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      {allProducts.map(cat => (
        <section key={cat.id} id={cat.id} className="section-pad bg-white dark:bg-[#060f1e] even:bg-gray-50 even:dark:bg-[#07111e]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: cat.color }}>{cat.title}</span>
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#0A2540] dark:text-white mt-1 mb-3">{cat.title}</h2>
              <p className="text-gray-500 dark:text-white/50 max-w-2xl">{cat.desc}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.items.map(item => (
                <div key={item.name} className="group bg-white dark:bg-[#0d1f35] rounded-2xl p-6 border border-gray-100 dark:border-white/5 card-hover">
                  <div
                    className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ background: `${cat.color}15` }}
                  >
                    <item.icon size={22} style={{ color: cat.color }} />
                  </div>
                  <h3 className="font-bold text-[#0A2540] dark:text-white mb-2 font-heading">{item.name}</h3>
                  <p className="text-gray-500 dark:text-white/50 text-sm mb-3">{item.desc}</p>
                  <p className="text-xs font-medium" style={{ color: cat.color }}>
                    Brands: <span className="text-gray-400 dark:text-white/30 font-normal">{item.brands}</span>
                  </p>
                  <Link href="/contact" className="mt-4 flex items-center gap-1 text-sm font-medium transition-colors" style={{ color: cat.color }}>
                    Request Quote <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 px-4 bg-[#0A2540] text-center relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold font-heading text-white mb-4">Need a Custom Technology Solution?</h2>
          <p className="text-white/60 mb-8">Our procurement team will source exactly what you need at the best possible price.</p>
          <Link href="/contact" className="btn-primary inline-flex">Request a Quote</Link>
        </div>
      </section>
    </>
  );
}
