import { useState } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '@/lib/animations';
import AnimatedSection from '@/components/ui/AnimatedSection';
import BlogCard from '@/components/ui/BlogCard';
import { BLOG_POSTS } from '@/lib/constants';
import { Search } from 'lucide-react';

// Extract unique categories
const categories = ['All', ...Array.from(new Set(BLOG_POSTS.map(post => post.category)))];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Filter posts based on search term and active category
  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
      className="pt-24"
    >
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[#16A34A] font-medium uppercase tracking-wider text-sm">Our Blog</span>
            <h1 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4">Latest Articles & Insights</h1>
            <p className="text-gray-400 text-lg">Stay up to date with the latest trends and strategies in digital marketing.</p>
          </AnimatedSection>
          
          {/* Search & Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
              <div className="relative flex-1 max-w-lg">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full bg-[#111111] border border-white/10 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#16A34A] pl-12"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              
              <div className="flex overflow-x-auto pb-2 space-x-2">
                {categories.map((category, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveCategory(category)}
                    className={`${
                      activeCategory === category 
                        ? 'bg-[#16A34A] text-white' 
                        : 'bg-[#111111] border border-white/10 text-white hover:bg-[#16A34A]/10'
                    } px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 0.1}>
                <BlogCard {...post} />
              </AnimatedSection>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-bold mb-2">No articles found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </div>
          )}
          
          {/* Pagination - Would be dynamic in a real implementation */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <motion.button
                className="w-10 h-10 rounded-md bg-[#16A34A] text-white flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                1
              </motion.button>
              <motion.button
                className="w-10 h-10 rounded-md bg-[#111111] border border-white/10 text-white flex items-center justify-center hover:bg-[#16A34A]/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                2
              </motion.button>
              <motion.button
                className="w-10 h-10 rounded-md bg-[#111111] border border-white/10 text-white flex items-center justify-center hover:bg-[#16A34A]/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                3
              </motion.button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-[#111111]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto bg-[#1A1A1A] p-8 md:p-12 rounded-lg border border-white/10">
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-center">Subscribe to Our Newsletter</h2>
              <p className="text-gray-400 text-center mb-8">Get the latest digital marketing insights and trends delivered straight to your inbox.</p>
              
              <form className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-[#111111] border border-white/10 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#16A34A]"
                  required
                />
                <motion.button 
                  type="submit"
                  className="bg-[#16A34A] hover:bg-[#16A34A]/90 text-white font-medium py-3 px-6 rounded-md transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </form>
              
              <p className="text-gray-500 text-sm mt-4 text-center">We respect your privacy. Unsubscribe at any time.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Featured Categories */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">Explore Topics</h2>
            <p className="text-gray-400">Dive deeper into our content categories</p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.filter(cat => cat !== 'All').map((category, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div 
                  className="bg-[#111111] p-8 rounded-lg border border-white/10 text-center cursor-pointer hover:border-[#16A34A]/50 transition-colors"
                  onClick={() => setActiveCategory(category)}
                >
                  <div className="w-16 h-16 bg-[#16A34A]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {category === 'SEO' && (
                      <svg className="w-8 h-8 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    )}
                    {category === 'Social Media' && (
                      <svg className="w-8 h-8 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )}
                    {category === 'Email Marketing' && (
                      <svg className="w-8 h-8 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="font-bold text-xl mb-2">{category}</h3>
                  <p className="text-gray-400 text-sm">
                    Explore our latest articles about {category.toLowerCase()}.
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
