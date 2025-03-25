
import { motion } from 'framer-motion';
import { pageTransition } from '@/lib/animations';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { useRoute, Link } from 'wouter';
import { SERVICES } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { CheckIcon } from '@radix-ui/react-icons';

export default function ServiceDetail() {
  const [, params] = useRoute('/services/:id');
  const service = SERVICES.find(s => s.id === Number(params?.id));

  if (!service) {
    return (
      <div className="pt-24 min-h-screen bg-[#111111] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service not found</h2>
          <Link href="/services">
            <Button variant="outline">Back to Services</Button>
          </Link>
        </div>
      </div>
    );
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
            <div className="w-16 h-16 bg-[var(--brand-primary)]/20 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <i className={`fas fa-${service.icon} text-2xl text-[var(--brand-primary)]`}></i>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-center">{service.title}</h1>
            <p className="text-gray-400 text-xl mb-12 text-center">{service.description}</p>
            
            <div className="bg-[#1A1A1A] p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-[var(--brand-primary)] mt-1 mr-3" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
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
    </motion.div>
  );
}
