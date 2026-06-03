import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Tag, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Technology insights, ICT best practices, cybersecurity tips, gadget reviews, and digital transformation articles from El-SEHO Frontier Solutions.',
};

const posts = [
  {
    title: 'Top 10 Laptops for Business Professionals in 2026',
    excerpt: 'We review the best business laptops combining performance, battery life, and portability for modern professionals working in Nigeria and across Africa.',
    category: 'Gadget Reviews',
    date: 'May 28, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80',
    color: '#0066FF',
  },
  {
    title: 'Cybersecurity Best Practices for Nigerian SMBs in 2026',
    excerpt: 'Practical and affordable cybersecurity strategies that every small and medium business in Nigeria should implement immediately to protect their data.',
    category: 'Cybersecurity',
    date: 'May 20, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
    color: '#00C853',
  },
  {
    title: 'Digital Transformation: A Roadmap for African Enterprises',
    excerpt: 'How organizations across Africa can strategically leverage technology to drive growth, improve efficiency, and gain competitive advantage.',
    category: 'Digital Transformation',
    date: 'May 12, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    color: '#0066FF',
  },
  {
    title: 'Building a Resilient IT Infrastructure for Your Organization',
    excerpt: 'A step-by-step guide to designing and deploying an IT infrastructure that scales with your business and withstands disruptions.',
    category: 'ICT Best Practices',
    date: 'May 5, 2026',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    color: '#00C853',
  },
  {
    title: 'The Rise of 5G in Nigeria: What It Means for Businesses',
    excerpt: 'How the rollout of 5G networks across Nigeria will transform business connectivity, IoT deployments, and mobile productivity.',
    category: 'Technology Trends',
    date: 'April 28, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80',
    color: '#0066FF',
  },
  {
    title: 'Smart Procurement: How to Maximize ICT Budget Value',
    excerpt: 'Expert strategies for technology procurement managers to get maximum value from ICT budgets without compromising quality or reliability.',
    category: 'Procurement',
    date: 'April 20, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
    color: '#00C853',
  },
];

const categories = ['All', 'Gadget Reviews', 'Cybersecurity', 'Digital Transformation', 'ICT Best Practices', 'Technology Trends', 'Procurement'];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-[#0A2540] relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[#00C853] text-sm font-semibold uppercase tracking-widest">Tech Insights</span>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mt-3 mb-5">
            Technology Knowledge{' '}
            <span className="gradient-text">Hub</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Stay ahead with expert insights on technology trends, ICT best practices, and digital transformation.
          </p>
        </div>
      </section>

      {/* Categories filter */}
      <section className="py-8 px-4 bg-white dark:bg-[#060f1e] border-b border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                cat === 'All'
                  ? 'bg-[#0066FF] text-white'
                  : 'bg-gray-100 dark:bg-[#0d1f35] text-gray-600 dark:text-white/50 hover:bg-[#0066FF]/10 hover:text-[#0066FF]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-pad bg-gray-50 dark:bg-[#07111e]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {posts.map(post => (
              <article key={post.title} className="group bg-white dark:bg-[#0d1f35] rounded-2xl overflow-hidden card-hover border border-gray-100 dark:border-white/5">
                <div className="relative overflow-hidden h-52">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span
                    className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full text-white"
                    style={{ background: post.color }}
                  >
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="font-bold text-[#0A2540] dark:text-white mb-3 leading-snug group-hover:text-[#0066FF] transition-colors font-heading text-lg">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 dark:text-white/50 text-sm mb-5 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-white/30">
                      <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                      <span>{post.date}</span>
                    </div>
                    <Link href="#" className="flex items-center gap-1 text-sm font-medium" style={{ color: post.color }}>
                      Read <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary">Load More Articles</button>
          </div>
        </div>
      </section>
    </>
  );
}
