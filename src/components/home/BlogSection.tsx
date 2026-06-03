import Link from 'next/link';
import { ArrowRight, Clock, Tag } from 'lucide-react';

const posts = [
  {
    title: 'Top 10 Laptops for Business Professionals in 2026',
    excerpt: 'We review the best business laptops combining performance, battery life, and portability for modern professionals.',
    category: 'Gadget Reviews',
    date: 'May 28, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80',
    href: '/blog',
  },
  {
    title: 'Cybersecurity Best Practices for Nigerian SMBs',
    excerpt: 'Practical cybersecurity strategies that every small and medium business in Nigeria should implement immediately.',
    category: 'Cybersecurity',
    date: 'May 20, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
    href: '/blog',
  },
  {
    title: 'Digital Transformation: A Roadmap for African Enterprises',
    excerpt: 'How organizations across Africa can leverage technology to drive growth, efficiency, and competitive advantage.',
    category: 'Digital Transformation',
    date: 'May 12, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    href: '/blog',
  },
];

const categoryColors: Record<string, string> = {
  'Gadget Reviews': '#0066FF',
  'Cybersecurity': '#00C853',
  'Digital Transformation': '#FF6B35',
};

export default function BlogSection() {
  return (
    <section className="section-pad bg-gray-50 dark:bg-[#07111e]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
          <div>
            <span className="text-[#0066FF] text-sm font-semibold uppercase tracking-widest">Tech Insights</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#0A2540] dark:text-white mt-2">
              Latest from Our Blog
            </h2>
          </div>
          <Link href="/blog" className="btn-primary flex items-center gap-2 group text-sm">
            All Articles
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map(post => (
            <Link key={post.title} href={post.href} className="group bg-white dark:bg-[#0d1f35] rounded-2xl overflow-hidden card-hover border border-gray-100 dark:border-white/5">
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span
                  className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full text-white"
                  style={{ background: categoryColors[post.category] || '#0066FF' }}
                >
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#0A2540] dark:text-white mb-3 leading-snug group-hover:text-[#0066FF] transition-colors font-heading">
                  {post.title}
                </h3>
                <p className="text-gray-500 dark:text-white/50 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-white/30">
                  <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
