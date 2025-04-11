import { motion } from 'framer-motion';
import { pageTransition, fadeIn } from '@/lib/animations';
import AnimatedSection from '@/components/ui/AnimatedSection';
import TeamMember from '@/components/ui/TeamMember';
import { CheckIcon } from 'lucide-react';
import { TEAM_MEMBERS, COMPANY_FOUNDING_YEAR } from '@/lib/constants';

export default function About() {
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
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
            <div className="inline-block px-3 py-1 rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] text-sm font-medium mb-4">About Us</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">We're <span className="text-[var(--brand-primary)]">7xCore</span></h1>
            <p className="text-xl text-gray-300">
              At 7xCore, we combine technical expertise with creative innovation to deliver exceptional digital solutions. Our young and dynamic team brings fresh perspectives and cutting-edge skills to every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection className="order-2 lg:order-1" variants={fadeIn}>
              <h2 className="text-2xl font-bold font-heading mb-6">Our Mission & Vision</h2>
              <p className="text-gray-300 mb-6">
                At 7xCore, we combine technical expertise with creative innovation to deliver exceptional digital solutions. Our young and dynamic team brings fresh perspectives and cutting-edge skills to every project we undertake.
              </p>
              <p className="text-gray-300 mb-8">
                Our vision is to empower businesses with modern digital solutions that drive growth and success in today's competitive landscape. We believe in the power of technology, creativity, and strategic thinking to achieve remarkable results.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center mb-2">
                    <CheckIcon className="text-[var(--brand-primary)] mr-2 h-5 w-5" />
                    <span className="font-medium">Technical Excellence</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <CheckIcon className="text-[var(--brand-primary)] mr-2 h-5 w-5" />
                    <span className="font-medium">Creative Innovation</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <CheckIcon className="text-[var(--brand-primary)] mr-2 h-5 w-5" />
                    <span className="font-medium">Quality Delivery</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <CheckIcon className="text-[var(--brand-primary)] mr-2 h-5 w-5" />
                    <span className="font-medium">Client Success</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="order-1 lg:order-2 relative">
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Our Mission" 
                  className="w-full h-auto rounded-lg"
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D221E]/60 to-transparent opacity-60"></div>
              </div>
              <div className="absolute top-0 left-0 w-24 h-24 bg-[var(--brand-primary)] rounded-br-lg flex items-center justify-center">
                <span className="text-white font-bold">Since {COMPANY_FOUNDING_YEAR}</span>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mb-12 mt-20">
            <h2 className="text-2xl font-bold font-heading">Our Leadership Team</h2>
            <p className="text-gray-400 mt-4">Meet the talented individuals driving innovation and excellence at 7xCore</p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <AnimatedSection key={member.id} delay={index * 0.1}>
                <TeamMember {...member} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Company Timeline */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[var(--brand-primary)] font-medium uppercase tracking-wider text-sm">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4">The 7xCore Story</h2>
            <p className="text-gray-400 text-lg">Our path to becoming a dynamic digital solutions provider.</p>
          </AnimatedSection>
          
          <div className="relative border-l-2 border-[var(--brand-primary)]/30 ml-4 md:ml-8 space-y-16 py-8">
            <AnimatedSection className="relative" delay={0.1}>
              <div className="absolute -left-[21px] w-10 h-10 rounded-full bg-[var(--brand-primary)]/20 border-2 border-[var(--brand-primary)] flex items-center justify-center">
                <span className="text-[var(--brand-primary)] font-bold">2023</span>
              </div>
              <div className="ml-8 md:ml-16">
                <h3 className="text-xl font-bold text-white mb-2">Company Founded</h3>
                <p className="text-gray-400">7xCore was established with a vision to provide innovative digital solutions combining technical expertise with creative excellence.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="relative" delay={0.2}>
              <div className="absolute -left-[21px] w-10 h-10 rounded-full bg-[var(--brand-primary)]/20 border-2 border-[var(--brand-primary)] flex items-center justify-center">
                <span className="text-[var(--brand-primary)] font-bold">2024</span>
              </div>
              <div className="ml-8 md:ml-16">
                <h3 className="text-xl font-bold text-white mb-2">Service Expansion</h3>
                <p className="text-gray-400">Expanded our services to include comprehensive digital solutions, from web development to multimedia production.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Company Values */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[var(--brand-primary)] font-medium uppercase tracking-wider text-sm">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4">What We Stand For</h2>
            <p className="text-gray-400 text-lg">The principles that guide our work and relationships.</p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1} className="bg-[#111111] p-8 rounded-lg border border-white/10">
              <div className="w-16 h-16 bg-[var(--brand-primary)]/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading mb-4">Innovation</h3>
              <p className="text-gray-400">We embrace new technologies and creative approaches to deliver cutting-edge solutions for our clients.</p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="bg-[#111111] p-8 rounded-lg border border-white/10">
              <div className="w-16 h-16 bg-[var(--brand-primary)]/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading mb-4">Quality</h3>
              <p className="text-gray-400">We maintain the highest standards in every aspect of our work, from code to design to client service.</p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} className="bg-[#111111] p-8 rounded-lg border border-white/10">
              <div className="w-16 h-16 bg-[var(--brand-primary)]/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading mb-4">Collaboration</h3>
              <p className="text-gray-400">We believe in the power of teamwork and open communication to achieve exceptional results.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
