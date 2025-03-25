import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { fadeIn, slideInLeft, slideInRight, textReveal } from '@/lib/animations';
import AnimatedSection from './AnimatedSection';
import { COMPANY_TAGLINE, COMPANY_DESCRIPTION, COMPANY_STATS } from '@/lib/constants';

export default function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 min-h-screen flex items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#0D221E]/20 z-0"></div>
      <div className="absolute inset-0 bg-[#111111] z-0 opacity-70"></div>
      <div className="absolute right-0 top-0 w-full h-full blur-[100px] bg-gradient-to-b from-[var(--brand-primary)]/30 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <AnimatedSection variants={slideInLeft}>
            <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight mb-6">
              Grow Your Business <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[#0D221E] bg-clip-text text-transparent">7x Faster</span> With Our Digital Solutions
            </h1>
            <motion.p 
              variants={textReveal}
              className="text-lg text-gray-300 mb-8 max-w-lg"
            >
              {COMPANY_DESCRIPTION}
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button className="bg-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/90 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 text-center">
                  Explore Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white/30 hover:border-[var(--brand-primary)]/80 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 hover:bg-white/5 text-center">
                  Contact Us
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 flex items-center space-x-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                <p className="font-bold text-3xl text-white">{COMPANY_STATS.clientSatisfaction}</p>
                <p className="text-gray-400 text-sm">Client Satisfaction</p>
              </motion.div>
              <div className="h-12 w-px bg-white/20"></div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                <p className="font-bold text-3xl text-white">{COMPANY_STATS.projectsCompleted}</p>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </motion.div>
              <div className="h-12 w-px bg-white/20"></div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                <p className="font-bold text-3xl text-white">{COMPANY_STATS.yearsExperience}</p>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </motion.div>
            </div>
          </AnimatedSection>
          
          {/* Image Content */}
          <AnimatedSection variants={slideInRight} delay={0.3}>
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Digital Marketing Team" 
                className="w-full h-auto rounded-lg"
                loading="lazy" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent opacity-70"></div>
            </div>
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-[#1A1A1A] p-6 rounded-lg shadow-xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[var(--brand-primary)]/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white">700% ROI</h3>
                  <p className="text-sm text-gray-400">Average Client Return</p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
