import { useState } from 'react';
import { motion } from 'framer-motion';
import { pageTransition, staggerContainer } from '@/lib/animations';
import AnimatedSection from '@/components/ui/AnimatedSection';
import PortfolioItem from '@/components/ui/PortfolioItem';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from '@/lib/constants';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  
  // Filter portfolio items based on active category
  const filteredItems = activeCategory === 'All Projects'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

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
            <span className="text-[var(--brand-primary)] font-medium uppercase tracking-wider text-sm">Our Work</span>
            <h1 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4">Featured Projects</h1>
            <p className="text-gray-400 text-lg">Explore our portfolio of successful digital marketing campaigns and transformative solutions.</p>
          </AnimatedSection>

          {/* Category Filter */}
          <div className="flex mb-8 space-x-4 overflow-x-auto pb-4 hide-scrollbar">
            {PORTFOLIO_CATEGORIES.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`${
                  activeCategory === category 
                    ? 'bg-[var(--brand-primary)] text-white' 
                    : 'bg-[#111111]/50 border border-white/10 text-white hover:bg-[var(--brand-primary)]/10'
                } px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
          >
            {filteredItems.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.1}>
                <PortfolioItem {...item} />
              </AnimatedSection>
            ))}
          </motion.div>
          
          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-bold mb-2">No projects found</h3>
              <p className="text-gray-400">No projects found in this category. Please try another filter.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-[#111111]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection className="bg-[#1A1A1A] p-8 rounded-lg border border-white/10 text-center">
              <div className="w-16 h-16 bg-[var(--brand-primary)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold mb-2">320%</h3>
              <p className="text-gray-400">Average Increase in Organic Traffic</p>
            </AnimatedSection>
            
            <AnimatedSection className="bg-[#1A1A1A] p-8 rounded-lg border border-white/10 text-center" delay={0.1}>
              <div className="w-16 h-16 bg-[var(--brand-primary)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold mb-2">2.5M+</h3>
              <p className="text-gray-400">Social Media Impressions Generated</p>
            </AnimatedSection>
            
            <AnimatedSection className="bg-[#1A1A1A] p-8 rounded-lg border border-white/10 text-center" delay={0.2}>
              <div className="w-16 h-16 bg-[var(--brand-primary)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold mb-2">42%</h3>
              <p className="text-gray-400">Average Reduction in Cost Per Acquisition</p>
            </AnimatedSection>
            
            <AnimatedSection className="bg-[#1A1A1A] p-8 rounded-lg border border-white/10 text-center" delay={0.3}>
              <div className="w-16 h-16 bg-[var(--brand-primary)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold mb-2">215%</h3>
              <p className="text-gray-400">Average Increase in Lead Generation</p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Client Logos */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="text-2xl font-bold font-heading mb-2">Trusted by Leading Brands</h2>
            <p className="text-gray-400">We've partnered with companies of all sizes across various industries.</p>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {/* Placeholder logos - would use real client logos in production */}
            {[...Array(6)].map((_, index) => (
              <AnimatedSection key={index} delay={index * 0.1} className="opacity-60 hover:opacity-100 transition-opacity">
                <div className="h-16 w-32 bg-white/10 rounded-md flex items-center justify-center">
                  <span className="text-white/40 font-bold">CLIENT {index + 1}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Study Preview */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[var(--brand-primary)] font-medium uppercase tracking-wider text-sm">Case Study</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4">Featured Success Story</h2>
            <p className="text-gray-400 text-lg">Learn how we helped TechVision SaaS achieve remarkable growth.</p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="TechVision SaaS Case Study" 
                className="rounded-lg w-full"
                loading="lazy"
              />
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h3 className="text-2xl font-bold mb-4">How We Helped TechVision SaaS Reduce CPA by 42%</h3>
              <p className="text-gray-400 mb-6">
                TechVision, a B2B SaaS company, was struggling with high acquisition costs and low conversion rates on their PPC campaigns. Their cost per acquisition was significantly above industry benchmarks, making it challenging to scale profitably.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[var(--brand-primary)]/20 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <span className="text-[var(--brand-primary)] font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Challenge</h4>
                    <p className="text-sm text-gray-400">High CPA, low conversion rates, and inefficient ad spend distribution.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[var(--brand-primary)]/20 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <span className="text-[var(--brand-primary)] font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Solution</h4>
                    <p className="text-sm text-gray-400">Comprehensive audience research, landing page optimization, and data-driven ad targeting.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[var(--brand-primary)]/20 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <span className="text-[var(--brand-primary)] font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Results</h4>
                    <p className="text-sm text-gray-400">42% reduction in CPA, 78% increase in conversion rate, and 215% growth in qualified leads.</p>
                  </div>
                </div>
              </div>
              
              <motion.a 
                href="#"
                className="inline-flex items-center text-white bg-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/90 py-2 px-4 rounded-md transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Read Full Case Study</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
