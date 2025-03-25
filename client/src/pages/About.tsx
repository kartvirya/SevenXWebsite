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
          <AnimatedSection className="mb-12 text-center max-w-3xl mx-auto">
            <span className="text-[#16A34A] font-medium uppercase tracking-wider text-sm">About Us</span>
            <h1 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4">We're More Than Just A Digital Agency</h1>
            <p className="text-gray-400 text-lg">Meet the team that's transforming how businesses approach digital marketing.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection className="order-2 lg:order-1" variants={fadeIn}>
              <h2 className="text-2xl font-bold font-heading mb-6">Our Mission & Vision</h2>
              <p className="text-gray-300 mb-6">
                At 7xSolution, we're driven by the mission to help businesses achieve exponential growth through innovative digital marketing strategies. We believe in transparent communication, data-driven decisions, and consistently delivering measurable results.
              </p>
              <p className="text-gray-300 mb-8">
                Our vision is to become the most trusted digital partner for businesses worldwide, known for our expertise, integrity, and the transformative impact we create for our clients.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center mb-2">
                    <CheckIcon className="text-[#16A34A] mr-2 h-5 w-5" />
                    <span className="font-medium">Data-Driven Approach</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <CheckIcon className="text-[#16A34A] mr-2 h-5 w-5" />
                    <span className="font-medium">Transparent Communication</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <CheckIcon className="text-[#16A34A] mr-2 h-5 w-5" />
                    <span className="font-medium">Innovative Strategies</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <CheckIcon className="text-[#16A34A] mr-2 h-5 w-5" />
                    <span className="font-medium">Measurable Results</span>
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
              <div className="absolute top-0 left-0 w-24 h-24 bg-[#16A34A] rounded-br-lg flex items-center justify-center">
                <span className="text-white font-bold">Since {COMPANY_FOUNDING_YEAR}</span>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mb-12 mt-20">
            <h2 className="text-2xl font-bold font-heading">Meet Our Leadership Team</h2>
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
            <span className="text-[#16A34A] font-medium uppercase tracking-wider text-sm">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4">The 7xSolution Story</h2>
            <p className="text-gray-400 text-lg">From our humble beginnings to becoming a leading digital marketing agency.</p>
          </AnimatedSection>
          
          <div className="relative border-l-2 border-[#16A34A]/30 ml-4 md:ml-8 space-y-16 py-8">
            <AnimatedSection className="relative" delay={0.1}>
              <div className="absolute -left-[21px] w-10 h-10 rounded-full bg-[#16A34A]/20 border-2 border-[#16A34A] flex items-center justify-center">
                <span className="text-[#16A34A] font-bold">{COMPANY_FOUNDING_YEAR}</span>
              </div>
              <div className="ml-8 md:ml-16">
                <h3 className="text-xl font-bold text-white mb-2">Company Founded</h3>
                <p className="text-gray-400">7xSolution was founded with a mission to help businesses achieve exponential growth through innovative digital marketing solutions.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="relative" delay={0.2}>
              <div className="absolute -left-[21px] w-10 h-10 rounded-full bg-[#16A34A]/20 border-2 border-[#16A34A] flex items-center justify-center">
                <span className="text-[#16A34A] font-bold">2012</span>
              </div>
              <div className="ml-8 md:ml-16">
                <h3 className="text-xl font-bold text-white mb-2">Expanded Service Offerings</h3>
                <p className="text-gray-400">We expanded our services to include social media marketing, PPC advertising, and advanced analytics capabilities.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="relative" delay={0.3}>
              <div className="absolute -left-[21px] w-10 h-10 rounded-full bg-[#16A34A]/20 border-2 border-[#16A34A] flex items-center justify-center">
                <span className="text-[#16A34A] font-bold">2016</span>
              </div>
              <div className="ml-8 md:ml-16">
                <h3 className="text-xl font-bold text-white mb-2">100th Client Milestone</h3>
                <p className="text-gray-400">We celebrated our 100th client success story, with an average client ROI increase of 300% across our portfolio.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="relative" delay={0.4}>
              <div className="absolute -left-[21px] w-10 h-10 rounded-full bg-[#16A34A]/20 border-2 border-[#16A34A] flex items-center justify-center">
                <span className="text-[#16A34A] font-bold">2020</span>
              </div>
              <div className="ml-8 md:ml-16">
                <h3 className="text-xl font-bold text-white mb-2">Global Expansion</h3>
                <p className="text-gray-400">We expanded our operations internationally, opening offices in Europe and Asia to better serve our global client base.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="relative" delay={0.5}>
              <div className="absolute -left-[21px] w-10 h-10 rounded-full bg-[#16A34A]/20 border-2 border-[#16A34A] flex items-center justify-center">
                <span className="text-[#16A34A] font-bold">2023</span>
              </div>
              <div className="ml-8 md:ml-16">
                <h3 className="text-xl font-bold text-white mb-2">Industry Innovation Award</h3>
                <p className="text-gray-400">7xSolution received recognition for our innovative AI-driven marketing solutions and exceptional client results.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Company Values */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[#16A34A] font-medium uppercase tracking-wider text-sm">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4">What We Stand For</h2>
            <p className="text-gray-400 text-lg">The core values that drive everything we do at 7xSolution.</p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1} className="bg-[#111111] p-8 rounded-lg border border-white/10">
              <div className="w-16 h-16 bg-[#16A34A]/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading mb-4">Integrity</h3>
              <p className="text-gray-400">We believe in complete transparency with our clients and always doing what's right, even when it's challenging.</p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="bg-[#111111] p-8 rounded-lg border border-white/10">
              <div className="w-16 h-16 bg-[#16A34A]/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading mb-4">Innovation</h3>
              <p className="text-gray-400">We constantly push boundaries to develop cutting-edge strategies that keep our clients ahead of the competition.</p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} className="bg-[#111111] p-8 rounded-lg border border-white/10">
              <div className="w-16 h-16 bg-[#16A34A]/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading mb-4">Collaboration</h3>
              <p className="text-gray-400">We work closely with our clients, forming partnerships rather than vendor relationships to achieve shared success.</p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4} className="bg-[#111111] p-8 rounded-lg border border-white/10">
              <div className="w-16 h-16 bg-[#16A34A]/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading mb-4">Results-Driven</h3>
              <p className="text-gray-400">We measure our success by the tangible results we deliver for our clients, focusing on metrics that impact their bottom line.</p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.5} className="bg-[#111111] p-8 rounded-lg border border-white/10">
              <div className="w-16 h-16 bg-[#16A34A]/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading mb-4">Adaptability</h3>
              <p className="text-gray-400">We embrace change and continuously evolve our strategies to stay ahead in the rapidly changing digital landscape.</p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.6} className="bg-[#111111] p-8 rounded-lg border border-white/10">
              <div className="w-16 h-16 bg-[#16A34A]/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading mb-4">Continuous Learning</h3>
              <p className="text-gray-400">We invest in ongoing education and skill development to ensure we're always offering the most current and effective solutions.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
