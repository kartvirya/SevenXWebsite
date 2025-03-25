import { motion } from 'framer-motion';
import { Link, useRoute } from 'wouter';
import { ArrowLeft, CheckIcon, ArrowRight } from 'lucide-react';
import { fadeIn, slideInLeft, slideInRight, textReveal } from '@/lib/animations';
import AnimatedSection from './AnimatedSection';
import { SERVICES } from '@/lib/constants';

export default function ServiceDetail() {
  const [, params] = useRoute('/services/:id');
  const serviceId = params?.id;
  
  // Find the service by ID
  const service = SERVICES.find(s => s.id.toString() === serviceId);
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Service Not Found</h1>
          <Link href="/services">
            <button className="text-[var(--brand-primary)] hover:text-white transition-colors">
              Return to Services
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // Find the next and previous services
  const currentIndex = SERVICES.findIndex(s => s.id.toString() === serviceId);
  const nextService = SERVICES[(currentIndex + 1) % SERVICES.length];
  const prevService = SERVICES[(currentIndex - 1 + SERVICES.length) % SERVICES.length];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Back button */}
        <Link href="/services">
          <motion.button 
            className="flex items-center text-gray-400 hover:text-white mb-8"
            whileHover={{ x: -5 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </motion.button>
        </Link>

        {/* Service Header */}
        <AnimatedSection variants={slideInLeft}>
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-[var(--brand-primary)]/20 rounded-lg flex items-center justify-center mr-6">
              <i className={`fas fa-${service.icon} text-2xl text-[var(--brand-primary)]`}></i>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading">{service.title}</h1>
          </div>
          <motion.p 
            variants={textReveal}
            className="text-xl text-gray-300 max-w-3xl mb-12"
          >
            {service.description}
          </motion.p>
        </AnimatedSection>

        {/* Features Grid */}
        <AnimatedSection variants={fadeIn} delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-[var(--brand-primary)] mt-1 mr-3" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Navigation to next/previous service */}
        <AnimatedSection variants={fadeIn} delay={0.4}>
          <div className="flex justify-between items-center pt-8 border-t border-white/10">
            <Link href={`/services/${prevService.id}`}>
              <motion.button 
                className="flex items-center text-gray-400 hover:text-white"
                whileHover={{ x: -5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {prevService.title}
              </motion.button>
            </Link>
            <Link href={`/services/${nextService.id}`}>
              <motion.button 
                className="flex items-center text-gray-400 hover:text-white"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {nextService.title}
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
} 