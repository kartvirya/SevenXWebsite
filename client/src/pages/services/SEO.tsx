import { motion } from 'framer-motion';
import { pageTransition } from '@/lib/animations';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { CheckIcon } from '@radix-ui/react-icons';

export default function SEOService() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
      className="pt-24"
    >
      {/* Hero Section */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="mb-16 max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-[var(--brand-primary)]/20 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <i className="fas fa-search text-2xl text-[var(--brand-primary)]"></i>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-center">Search Engine Optimization</h1>
            <p className="text-gray-400 text-xl mb-12 text-center">Improve your visibility in search results and drive organic traffic with our data-driven SEO strategies.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-[#1A1A1A] p-6 rounded-lg text-center">
                <i className="fas fa-clock w-8 h-8 text-[var(--brand-primary)] mx-auto mb-4"></i>
                <h3 className="text-lg font-bold mb-2">Time to Results</h3>
                <p className="text-gray-400">3-6 months</p>
              </div>
              <div className="bg-[#1A1A1A] p-6 rounded-lg text-center">
                <i className="fas fa-users w-8 h-8 text-[var(--brand-primary)] mx-auto mb-4"></i>
                <h3 className="text-lg font-bold mb-2">Team Size</h3>
                <p className="text-gray-400">2-4 experts</p>
              </div>
              <div className="bg-[#1A1A1A] p-6 rounded-lg text-center">
                <i className="fas fa-bullseye w-8 h-8 text-[var(--brand-primary)] mx-auto mb-4"></i>
                <h3 className="text-lg font-bold mb-2">Success Rate</h3>
                <p className="text-gray-400">95%+</p>
              </div>
            </div>

            <div className="bg-[#1A1A1A] p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-[var(--brand-primary)] mt-1 mr-3" />
                  <span className="text-gray-300">Keyword Research & Strategy</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-[var(--brand-primary)] mt-1 mr-3" />
                  <span className="text-gray-300">On-Page & Off-Page SEO</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-[var(--brand-primary)] mt-1 mr-3" />
                  <span className="text-gray-300">Technical SEO Optimization</span>
                </li>
              </ul>
            </div>

            <div className="mt-12 text-center">
              <Link href="/contact">
                <Button className="bg-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/90">
                  Get Started
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our SEO Process</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[var(--brand-primary)]/20 rounded-lg flex items-center justify-center shrink-0 mr-6">
                  <span className="text-xl font-bold text-[var(--brand-primary)]">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Technical Audit</h3>
                  <p className="text-gray-400">We perform a comprehensive technical SEO audit to identify and fix any issues affecting your site's performance.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[var(--brand-primary)]/20 rounded-lg flex items-center justify-center shrink-0 mr-6">
                  <span className="text-xl font-bold text-[var(--brand-primary)]">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Keyword Research</h3>
                  <p className="text-gray-400">Our team conducts in-depth keyword research to identify high-value opportunities in your market.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[var(--brand-primary)]/20 rounded-lg flex items-center justify-center shrink-0 mr-6">
                  <span className="text-xl font-bold text-[var(--brand-primary)]">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Content Optimization</h3>
                  <p className="text-gray-400">We optimize your content for search engines while maintaining readability and user engagement.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[var(--brand-primary)]/20 rounded-lg flex items-center justify-center shrink-0 mr-6">
                  <span className="text-xl font-bold text-[var(--brand-primary)]">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Link Building</h3>
                  <p className="text-gray-400">We develop a strategic link building plan to improve your site's authority and rankings.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our SEO Service?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1A1A1A] p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <i className="fas fa-chart-line w-6 h-6 text-[var(--brand-primary)] mt-1 mr-3"></i>
                  <h3 className="text-xl font-bold">Data-Driven Approach</h3>
                </div>
                <p className="text-gray-400">We make decisions based on real-time data and analytics, ensuring your investment delivers measurable results.</p>
              </div>
              <div className="bg-[#1A1A1A] p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <i className="fas fa-users w-6 h-6 text-[var(--brand-primary)] mt-1 mr-3"></i>
                  <h3 className="text-xl font-bold">Expert Team</h3>
                </div>
                <p className="text-gray-400">Our SEO specialists are industry veterans with proven track records in delivering exceptional results.</p>
              </div>
              <div className="bg-[#1A1A1A] p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <i className="fas fa-bullseye w-6 h-6 text-[var(--brand-primary)] mt-1 mr-3"></i>
                  <h3 className="text-xl font-bold">Customized Solutions</h3>
                </div>
                <p className="text-gray-400">Every SEO strategy is tailored to your specific business goals, industry, and target audience.</p>
              </div>
              <div className="bg-[#1A1A1A] p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <i className="fas fa-clock w-6 h-6 text-[var(--brand-primary)] mt-1 mr-3"></i>
                  <h3 className="text-xl font-bold">Proven Results</h3>
                </div>
                <p className="text-gray-400">We've helped hundreds of businesses achieve their goals with our proven SEO methodologies.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0D221E]/70 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--brand-primary)] opacity-10 z-0"></div>
        <div className="absolute -right-32 -top-32 w-64 h-64 bg-[var(--brand-primary)]/30 rounded-full blur-[100px] z-0"></div>
        <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-[var(--brand-primary)]/30 rounded-full blur-[100px] z-0"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to Improve Your Search Rankings?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Let's discuss how our SEO service can help you achieve better visibility and drive more organic traffic to your website.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/90 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105">
                  Get a Free SEO Audit
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="border-white/30 hover:border-white text-white font-medium py-3 px-8 rounded-md transition-all duration-300 hover:bg-white/10">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
} 