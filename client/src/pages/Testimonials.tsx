import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { pageTransition, fadeIn } from '@/lib/animations';
import AnimatedSection from '@/components/ui/AnimatedSection';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { TESTIMONIALS } from '@/lib/constants';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrev = () => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.offsetWidth;
    sliderRef.current.scrollBy({ left: -width, behavior: 'smooth' });
    setActiveIndex(prev => Math.max(prev - 1, 0));
  };
  
  const handleNext = () => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.offsetWidth;
    sliderRef.current.scrollBy({ left: width, behavior: 'smooth' });
    setActiveIndex(prev => Math.min(prev + 1, TESTIMONIALS.length - 1));
  };
  
  const scrollToIndex = (index: number) => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.offsetWidth;
    sliderRef.current.scrollTo({ left: index * width, behavior: 'smooth' });
    setActiveIndex(index);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
      className="pt-24"
    >
      {/* Featured Testimonial */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[#16A34A] font-medium uppercase tracking-wider text-sm">Testimonials</span>
            <h1 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4">What Our Clients Say</h1>
            <p className="text-gray-400 text-lg">Discover how we've helped businesses like yours achieve exceptional results.</p>
          </AnimatedSection>
          
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="relative bg-[#1A1A1A] p-8 md:p-12 rounded-lg border border-white/10">
              <div className="absolute top-8 left-8 text-[#16A34A] opacity-20">
                <Quote size={60} className="fill-current" />
              </div>
              
              <div className="relative z-10">
                <div className="flex text-[#16A34A] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-300 italic text-lg md:text-xl mb-8">
                  "7xSolution transformed our digital strategy completely. Their SEO expertise helped us achieve top rankings for our most valuable keywords, resulting in a 215% increase in organic traffic and a significant boost in qualified leads. Their team's dedication, expertise, and transparent communication made them feel like a true extension of our marketing department."
                </p>
                
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80" 
                    alt="Jennifer Roberts" 
                    className="w-16 h-16 rounded-full object-cover mr-4" 
                    loading="lazy" 
                  />
                  <div>
                    <h4 className="font-bold text-lg">Jennifer Roberts</h4>
                    <p className="text-gray-400">Marketing Director, TechVision</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Testimonial Slider */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">More Success Stories</h2>
            <p className="text-gray-400">Hear from our satisfied clients across different industries.</p>
          </AnimatedSection>
          
          <div className="relative">
            <div 
              ref={sliderRef}
              className="flex overflow-x-auto snap-x gap-6 pb-8 -mx-4 px-4 hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <AnimatedSection key={testimonial.id} delay={index * 0.1} className="flex-shrink-0">
                  <TestimonialCard {...testimonial} />
                </AnimatedSection>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {TESTIMONIALS.map((_, index) => (
                <button 
                  key={index}
                  className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-[#16A34A]' : 'bg-gray-600'}`}
                  onClick={() => scrollToIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <motion.div 
              className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-4 w-12 h-12 bg-[#16A34A]/90 rounded-full items-center justify-center cursor-pointer"
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="text-white" />
            </motion.div>
            
            <motion.div 
              className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-4 w-12 h-12 bg-[#16A34A]/90 rounded-full items-center justify-center cursor-pointer"
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="text-white" />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Video Testimonials */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[#16A34A] font-medium uppercase tracking-wider text-sm">Video Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4">See Our Clients in Action</h2>
            <p className="text-gray-400 text-lg">Watch real clients share their experiences working with 7xSolution.</p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video thumbnail cards */}
            {[1, 2, 3].map((index) => (
              <AnimatedSection key={index} className="relative group cursor-pointer" delay={index * 0.1}>
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={`https://images.unsplash.com/photo-15424992${index * 10}-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`} 
                    alt={`Video Testimonial ${index}`} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-[#0D221E]/60 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#16A34A] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="font-bold mt-4">Client Success Story {index}</h3>
                <p className="text-gray-400 text-sm">See how we helped this client achieve their digital marketing goals.</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial Stats */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection className="text-center">
              <h3 className="text-4xl font-bold text-[#16A34A] mb-2">98%</h3>
              <p className="text-gray-300">Client Satisfaction Rate</p>
            </AnimatedSection>
            
            <AnimatedSection className="text-center" delay={0.1}>
              <h3 className="text-4xl font-bold text-[#16A34A] mb-2">250+</h3>
              <p className="text-gray-300">Projects Completed</p>
            </AnimatedSection>
            
            <AnimatedSection className="text-center" delay={0.2}>
              <h3 className="text-4xl font-bold text-[#16A34A] mb-2">15+</h3>
              <p className="text-gray-300">Years Experience</p>
            </AnimatedSection>
            
            <AnimatedSection className="text-center" delay={0.3}>
              <h3 className="text-4xl font-bold text-[#16A34A] mb-2">700%</h3>
              <p className="text-gray-300">Average ROI</p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-[#0D221E]/70 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#16A34A] opacity-10 z-0"></div>
        <div className="absolute -right-32 -top-32 w-64 h-64 bg-[#16A34A]/30 rounded-full blur-[100px] z-0"></div>
        <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-[#16A34A]/30 rounded-full blur-[100px] z-0"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to Be Our Next Success Story?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join our satisfied clients and experience the 7xSolution difference for yourself.</p>
            <motion.a 
              href="/contact"
              className="inline-block bg-[#16A34A] hover:bg-[#16A34A]/90 text-white font-medium py-3 px-8 rounded-md transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.a>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
}
