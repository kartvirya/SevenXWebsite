import { motion } from 'framer-motion';
import { pageTransition } from '@/lib/animations';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { CheckIcon } from '@radix-ui/react-icons';

export default function PPCService() {
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
              <i className="fas fa-ad text-2xl text-[var(--brand-primary)]"></i>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-center">Pay-Per-Click Advertising</h1>
            <p className="text-gray-400 text-xl mb-12 text-center">Drive qualified traffic and generate immediate leads with our targeted PPC campaigns.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-[#1A1A1A] p-6 rounded-lg text-center">
                <i className="fas fa-clock w-8 h-8 text-[var(--brand-primary)] mx-auto mb-4"></i>
                <h3 className="text-lg font-bold mb-2">Time to Results</h3>
                <p className="text-gray-400">Immediate</p>
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
                  <span className="text-gray-300">Google & Bing Ads Management</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-[var(--brand-primary)] mt-1 mr-3" />
                  <span className="text-gray-300">Display & Remarketing Campaigns</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-[var(--brand-primary)] mt-1 mr-3" />
                  <span className="text-gray-300">Conversion Rate Optimization</span>
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
            <h2 className="text-3xl font-bold text-center mb-12">Our PPC Process</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[var(--brand-primary)]/20 rounded-lg flex items-center justify-center shrink-0 mr-6">
                  <span className="text-xl font-bold text-[var(--brand-primary)]">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Account Audit</h3>
                  <p className="text-gray-400">We analyze your current PPC accounts to identify opportunities and areas for improvement.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[var(--brand-primary)]/20 rounded-lg flex items-center justify-center shrink-0 mr-6">
                  <span className="text-xl font-bold text-[var(--brand-primary)]">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Strategy Development</h3>
                  <p className="text-gray-400">Our team creates a comprehensive PPC strategy aligned with your business goals and budget.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[var(--brand-primary)]/20 rounded-lg flex items-center justify-center shrink-0 mr-6">
                  <span className="text-xl font-bold text-[var(--brand-primary)]">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Campaign Setup</h3>
                  <p className="text-gray-400">We set up and optimize your campaigns with best practices and advanced targeting options.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[var(--brand-primary)]/20 rounded-lg flex items-center justify-center shrink-0 mr-6">
                  <span className="text-xl font-bold text-[var(--brand-primary)]">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Performance Optimization</h3>
                  <p className="text-gray-400">Continuous monitoring and optimization ensure maximum ROI and campaign efficiency.</p>
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
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our PPC Service?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1A1A1A] p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <i className="fas fa-chart-line w-6 h-6 text-[var(--brand-primary)] mt-1 mr-3"></i>
                  <h3 className="text-xl font-bold">Immediate Results</h3>
                </div>
                <p className="text-gray-400">PPC campaigns can start driving qualified traffic to your website immediately.</p>
              </div>
              <div className="bg-[#1A1A1A] p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <i className="fas fa-users w-6 h-6 text-[var(--brand-primary)] mt-1 mr-3"></i>
                  <h3 className="text-xl font-bold">Expert Team</h3>
                </div>
                <p className="text-gray-400">Our PPC specialists are certified experts with years of experience managing successful campaigns.</p>
              </div>
              <div className="bg-[#1A1A1A] p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <i className="fas fa-bullseye w-6 h-6 text-[var(--brand-primary)] mt-1 mr-3"></i>
                  <h3 className="text-xl font-bold">Precise Targeting</h3>
                </div>
                <p className="text-gray-400">We use advanced targeting options to reach your ideal customers at the right time.</p>
              </div>
              <div className="bg-[#1A1A1A] p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <i className="fas fa-clock w-6 h-6 text-[var(--brand-primary)] mt-1 mr-3"></i>
                  <h3 className="text-xl font-bold">Proven Results</h3>
                </div>
                <p className="text-gray-400">We've helped hundreds of businesses achieve their goals with our proven PPC strategies.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to Drive Immediate Results?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Let's discuss how our PPC service can help you generate qualified leads and increase conversions.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/90 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105">
                  Get a Free PPC Audit
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