import { motion } from 'framer-motion';
import { pageTransition } from '@/lib/animations';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import HeroSection from '@/components/ui/HeroSection';
import ServiceCard from '@/components/ui/ServiceCard';
import PortfolioItem from '@/components/ui/PortfolioItem';
import TestimonialCard from '@/components/ui/TestimonialCard';
import BlogCard from '@/components/ui/BlogCard';

import { SERVICES, PORTFOLIO_ITEMS, TESTIMONIALS, BLOG_POSTS } from '@/lib/constants';

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
      className="pt-24 relative"
    >
      <div className="gradient-overlay" />
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[var(--brand-primary)] font-medium uppercase tracking-wider text-sm">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4">Digital Marketing Solutions</h2>
            <p className="text-gray-400 text-lg">We offer a comprehensive suite of services designed to maximize your online presence and drive measurable results.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" className="border-white/30 hover:border-[var(--brand-primary)]/80 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 hover:bg-white/5">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio-preview" className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[var(--brand-primary)] font-medium uppercase tracking-wider text-sm">Our Work</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4">Featured Projects</h2>
            <p className="text-gray-400 text-lg">Explore our portfolio of successful digital marketing campaigns and transformative solutions.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_ITEMS.slice(0, 3).map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.1}>
                <PortfolioItem {...item} />
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button className="bg-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/90 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section id="testimonials-preview" className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[var(--brand-primary)] font-medium uppercase tracking-wider text-sm">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4">What Our Clients Say</h2>
            <p className="text-gray-400 text-lg">Discover how we've helped businesses like yours achieve exceptional results.</p>
          </AnimatedSection>

          <div className="flex overflow-x-auto gap-6 pb-8 -mx-4 px-4">
            {TESTIMONIALS.slice(0, 2).map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} delay={index * 0.1} className="flex-shrink-0">
                <TestimonialCard {...testimonial} />
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/testimonials">
              <Button variant="outline" className="border-white/30 hover:border-[var(--brand-primary)]/80 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 hover:bg-white/5">
                Read More Testimonials
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section id="blog-preview" className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[var(--brand-primary)] font-medium uppercase tracking-wider text-sm">Our Blog</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4">Latest Articles & Insights</h2>
            <p className="text-gray-400 text-lg">Stay up to date with the latest trends and strategies in digital marketing.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 0.1}>
                <BlogCard {...post} />
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog">
              <Button variant="outline" className="border-white/30 hover:border-[var(--brand-primary)]/80 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 hover:bg-white/5">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0D221E]/70 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--brand-primary)] opacity-10 z-0"></div>
        <div className="absolute -right-32 -top-32 w-64 h-64 bg-[var(--brand-primary)]/30 rounded-full blur-[100px] z-0"></div>
        <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-[var(--brand-primary)]/30 rounded-full blur-[100px] z-0"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to Grow Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Partner with us to achieve sustainable growth through innovative digital marketing strategies tailored to your business goals.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/90 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105">
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="border-white/30 hover:border-white text-white font-medium py-3 px-8 rounded-md transition-all duration-300 hover:bg-white/10">
                  Explore Services
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
}