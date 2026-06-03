'use client';
import Link from 'next/link';
import { Smartphone, Laptop, Tablet, Watch, Headphones, Package, Server, Wifi, Printer, Camera, Fingerprint, Monitor, Tv, Home, BookOpen, ArrowRight } from 'lucide-react';

const categories = [
  {
    title: 'Technology Gadgets',
    id: 'gadgets',
    color: '#0066FF',
    items: [
      { name: 'Smartphones', icon: Smartphone, desc: 'Latest flagship and mid-range devices' },
      { name: 'Laptops', icon: Laptop, desc: 'Business and consumer laptops' },
      { name: 'Tablets', icon: Tablet, desc: 'iOS, Android & Windows tablets' },
      { name: 'Smartwatches', icon: Watch, desc: 'Fitness and smart wearables' },
      { name: 'Wireless Earbuds', icon: Headphones, desc: 'ANC & premium audio' },
      { name: 'Accessories', icon: Package, desc: 'Cases, cables, chargers & more' },
    ],
  },
  {
    title: 'Business Technology',
    id: 'business',
    color: '#00C853',
    items: [
      { name: 'Servers', icon: Server, desc: 'Enterprise & SMB servers' },
      { name: 'Networking Equipment', icon: Wifi, desc: 'Routers, switches, access points' },
      { name: 'Printers', icon: Printer, desc: 'Laser and inkjet printers' },
      { name: 'CCTV Systems', icon: Camera, desc: 'IP cameras & surveillance' },
      { name: 'Biometric Devices', icon: Fingerprint, desc: 'Fingerprint & access control' },
      { name: 'Conference Equipment', icon: Monitor, desc: 'AV and conferencing gear' },
    ],
  },
  {
    title: 'Smart Devices',
    id: 'smart',
    color: '#0066FF',
    items: [
      { name: 'Smart TVs', icon: Tv, desc: '4K UHD & OLED displays' },
      { name: 'Smart Home Devices', icon: Home, desc: 'Automation & IoT devices' },
      { name: 'VR / AR Devices', icon: Monitor, desc: 'Virtual & augmented reality' },
      { name: 'E-Readers', icon: BookOpen, desc: 'Kindle & digital readers' },
    ],
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="section-pad bg-gray-50 dark:bg-[#07111e]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#0066FF] text-sm font-semibold uppercase tracking-widest">Our Products</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#0A2540] dark:text-white mt-2 mb-4">
            Premium Technology Products
          </h2>
          <p className="text-gray-500 dark:text-white/50 max-w-2xl mx-auto">
            Explore our comprehensive range of technology products from globally trusted brands, curated for every business need.
          </p>
        </div>

        {categories.map(cat => (
          <div key={cat.id} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 rounded-full" style={{ background: cat.color }} />
              <h3 className="text-xl font-bold font-heading text-[#0A2540] dark:text-white">{cat.title}</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {cat.items.map(item => (
                <Link
                  key={item.name}
                  href={`/products#${cat.id}`}
                  className="group bg-white dark:bg-[#0d1f35] rounded-2xl p-5 text-center card-hover border border-gray-100 dark:border-white/5 hover:border-[#0066FF]/30"
                >
                  <div
                    className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center transition-all group-hover:scale-110"
                    style={{ background: `${cat.color}15` }}
                  >
                    <item.icon size={22} style={{ color: cat.color }} />
                  </div>
                  <p className="font-semibold text-sm text-[#0A2540] dark:text-white mb-1">{item.name}</p>
                  <p className="text-xs text-gray-400 dark:text-white/40">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center">
          <Link href="/products" className="btn-primary inline-flex items-center gap-2 group">
            View All Products
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
