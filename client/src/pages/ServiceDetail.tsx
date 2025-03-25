
import { motion } from 'framer-motion';
import { pageTransition } from '@/lib/animations';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { useRoute } from 'wouter';
import { SERVICES } from '@/lib/constants';

export default function ServiceDetail() {
  const [, params] = useRoute('/services/:id');
  const service = SERVICES.find(s => s.id === Number(params?.id));

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
      className="pt-24"
    >
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="mb-16 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">{service.title}</h1>
            <p className="text-gray-400 text-xl mb-8">{service.description}</p>
            
            <div className="bg-[#1A1A1A] p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[var(--brand-primary)] mr-3">•</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
}
