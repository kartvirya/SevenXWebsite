import { motion } from 'framer-motion';
import { pageTransition } from '@/lib/animations';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ContactForm from '@/components/ui/ContactForm';
import GoogleMap from '@/components/ui/GoogleMap';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_EMAIL_SUPPORT, COMPANY_PHONE, COMPANY_PHONE_ALT, COMPANY_HOURS } from '@/lib/constants';

export default function Contact() {
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
          <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[#16A34A] font-medium uppercase tracking-wider text-sm">Contact Us</span>
            <h1 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4">Get In Touch</h1>
            <p className="text-gray-400 text-lg">Ready to grow your business? Let's start a conversation about your goals.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <AnimatedSection className="bg-[#1A1A1A] p-8 rounded-lg mb-8">
                <h3 className="text-xl font-bold font-heading mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#16A34A]/20 rounded-lg flex items-center justify-center mr-4 shrink-0">
                      <MapPin className="text-[#16A34A]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Our Location</h4>
                      <p className="text-gray-400">{COMPANY_ADDRESS}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#16A34A]/20 rounded-lg flex items-center justify-center mr-4 shrink-0">
                      <Mail className="text-[#16A34A]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Email Us</h4>
                      <p className="text-gray-400">{COMPANY_EMAIL}</p>
                      <p className="text-gray-400">{COMPANY_EMAIL_SUPPORT}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#16A34A]/20 rounded-lg flex items-center justify-center mr-4 shrink-0">
                      <Phone className="text-[#16A34A]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Call Us</h4>
                      <p className="text-gray-400">{COMPANY_PHONE}</p>
                      <p className="text-gray-400">{COMPANY_PHONE_ALT}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#16A34A]/20 rounded-lg flex items-center justify-center mr-4 shrink-0">
                      <Clock className="text-[#16A34A]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Working Hours</h4>
                      <p className="text-gray-400">{COMPANY_HOURS}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection className="bg-[#1A1A1A] p-8 rounded-lg" delay={0.2}>
                <h3 className="text-xl font-bold font-heading mb-6">Find Us</h3>
                <GoogleMap height="h-64" />
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <AnimatedSection delay={0.1}>
                <ContactForm />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[#16A34A] font-medium uppercase tracking-wider text-sm">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-lg">Find answers to common questions about our services and process.</p>
          </AnimatedSection>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                { 
                  question: "What services does 7xSolution offer?", 
                  answer: "We offer a comprehensive suite of digital marketing services including SEO, PPC advertising, content marketing, social media marketing, email marketing, and analytics/reporting solutions. Our team tailors strategies to meet your specific business goals." 
                },
                { 
                  question: "How long does it take to see results from digital marketing?", 
                  answer: "Results timelines vary depending on the service and your starting point. SEO typically takes 3-6 months to show significant results, while PPC can generate traffic immediately. During our initial consultation, we'll provide realistic timelines based on your specific goals." 
                },
                { 
                  question: "How do you measure the success of marketing campaigns?", 
                  answer: "We establish clear KPIs aligned with your business objectives at the start of every campaign. These may include traffic growth, conversion rates, lead quality, or ROI. We provide regular reports with transparent metrics and insights on performance." 
                },
                { 
                  question: "What is your pricing structure?", 
                  answer: "Our pricing is customized based on your specific needs, goals, and the scope of work required. We offer both project-based and retainer options. During our initial consultation, we'll discuss your requirements and provide a detailed proposal with transparent pricing." 
                },
                { 
                  question: "Do you work with businesses in specific industries?", 
                  answer: "We have experience across multiple industries including SaaS, e-commerce, healthcare, financial services, real estate, and more. Our diverse experience allows us to apply best practices while understanding the unique challenges of your specific industry." 
                }
              ].map((faq, index) => (
                <AnimatedSection key={index} delay={index * 0.1} className="bg-[#111111] rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
