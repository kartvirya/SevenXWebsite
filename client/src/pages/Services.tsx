import { motion } from 'framer-motion';
import { pageTransition, staggerContainer } from '@/lib/animations';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ServiceCard from '@/components/ui/ServiceCard';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { SERVICES, BRAND_PRIMARY, BRAND_DARK } from '@/lib/constants';

export default function Services() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
      className="pt-24"
    >
      {/* Services Header */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
            <span className={`text-[${BRAND_PRIMARY}] font-medium uppercase tracking-wider text-sm`}>Our Services</span>
            <h1 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4">Digital Marketing Solutions</h1>
            <p className="text-gray-400 text-lg">We offer a comprehensive suite of services designed to maximize your online presence and drive measurable results.</p>
          </AnimatedSection>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[var(--brand-primary)] font-medium uppercase tracking-wider text-sm">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4">How We Work</h2>
            <p className="text-gray-400 text-lg">Our proven methodology ensures consistent results for all our clients.</p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatedSection delay={0.1} className="text-center">
              <div className="relative">
                <div className="w-20 h-20 bg-[var(--brand-primary)]/20 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-2xl font-bold text-[var(--brand-primary)]">01</span>
                </div>
                <div className="hidden md:block absolute top-10 left-[calc(50%+2rem)] w-full h-[2px] bg-[var(--brand-primary)]/30"></div>
              </div>
              <h3 className="text-xl font-bold mb-4">Discovery</h3>
              <p className="text-gray-400">We analyze your business, industry, competitors, and target audience to understand your unique challenges.</p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="text-center">
              <div className="relative">
                <div className="w-20 h-20 bg-[var(--brand-primary)]/20 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-2xl font-bold text-[var(--brand-primary)]">02</span>
                </div>
                <div className="hidden md:block absolute top-10 left-[calc(50%+2rem)] w-full h-[2px] bg-[var(--brand-primary)]/30"></div>
              </div>
              <h3 className="text-xl font-bold mb-4">Strategy</h3>
              <p className="text-gray-400">We develop a customized digital marketing plan aligned with your business goals and target audience.</p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} className="text-center">
              <div className="relative">
                <div className="w-20 h-20 bg-[var(--brand-primary)]/20 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-2xl font-bold text-[var(--brand-primary)]">03</span>
                </div>
                <div className="hidden md:block absolute top-10 left-[calc(50%+2rem)] w-full h-[2px] bg-[var(--brand-primary)]/30"></div>
              </div>
              <h3 className="text-xl font-bold mb-4">Implementation</h3>
              <p className="text-gray-400">Our specialists execute the strategy with precision, leveraging cutting-edge tools and technologies.</p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4} className="text-center">
              <div className="w-20 h-20 bg-[var(--brand-primary)]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[var(--brand-primary)]">04</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Optimization</h3>
              <p className="text-gray-400">We continuously monitor, analyze, and refine our approach to maximize your ROI and exceed expectations.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Digital Marketing Team" 
                className="rounded-lg w-full"
                loading="lazy"
              />
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <span className="text-[var(--brand-primary)] font-medium uppercase tracking-wider text-sm">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-6">What Sets Us Apart</h2>
              <p className="text-gray-400 mb-8">
                At 7xSolution, we combine strategic thinking with technical expertise and creative innovation to deliver exceptional results. Here's why clients choose us:
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="w-12 h-12 shrink-0 bg-[var(--brand-primary)]/20 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[var(--brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Proven Results</h3>
                    <p className="text-gray-400">We've generated measurable growth for 250+ businesses across industries, with an average ROI of 700%.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 shrink-0 bg-[var(--brand-primary)]/20 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[var(--brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Customized Strategies</h3>
                    <p className="text-gray-400">We don't believe in one-size-fits-all. Every strategy is tailored to your specific business goals and target audience.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 shrink-0 bg-[var(--brand-primary)]/20 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[var(--brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Data-Driven Approach</h3>
                    <p className="text-gray-400">We make decisions based on real-time data and analytics, ensuring your marketing budget delivers maximum impact.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 shrink-0 bg-[var(--brand-primary)]/20 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[var(--brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                    <p className="text-gray-400">Our specialists are industry veterans with deep expertise in their respective fields and a passion for driving results.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Let's discuss how our services can help you achieve your business goals and drive measurable results.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/90 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105">
                  Get a Free Consultation
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="border-white/30 hover:border-white text-white font-medium py-3 px-8 rounded-md transition-all duration-300 hover:bg-white/10">
                  View Our Portfolio
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
}
