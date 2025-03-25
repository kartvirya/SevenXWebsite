import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { CONTACT_FORM_INITIAL } from '@/lib/constants';
import { contactValidationSchema } from '@shared/schema';
import { motion } from 'framer-motion';
import { z } from 'zod';

// Form type based on the validation schema
type ContactFormData = z.infer<typeof contactValidationSchema> & {
  privacyPolicy: boolean;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<ContactFormData>({
    resolver: zodResolver(
      contactValidationSchema.extend({
        privacyPolicy: z.boolean().refine(val => val === true, {
          message: "You must agree to the privacy policy"
        })
      })
    ),
    defaultValues: {
      ...CONTACT_FORM_INITIAL
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);
      
      // Remove privacyPolicy as it's only for client-side validation
      const { privacyPolicy, ...contactData } = data;
      
      await apiRequest({
        url: '/api/contact',
        method: 'POST',
        body: contactData
      });
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      
      // Reset form after successful submission
      reset(CONTACT_FORM_INITIAL);
    } catch (error) {
      toast({
        title: "Error sending message",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#1A1A1A] p-8 rounded-lg">
      <h3 className="text-xl font-bold font-heading mb-6">Send a Message</h3>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Full Name *
            </label>
            <input 
              type="text" 
              id="name"
              className={`w-full bg-[#111111] border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--brand-primary)]`}
              placeholder="Your name"
              {...register('name')}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address *
            </label>
            <input 
              type="email" 
              id="email"
              className={`w-full bg-[#111111] border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--brand-primary)]`}
              placeholder="Your email"
              {...register('email')}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number
          </label>
          <input 
            type="tel" 
            id="phone"
            className="w-full bg-[#111111] border border-white/10 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--brand-primary)]"
            placeholder="Your phone (optional)"
            {...register('phone')}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
            Subject *
          </label>
          <input 
            type="text" 
            id="subject"
            className={`w-full bg-[#111111] border ${errors.subject ? 'border-red-500' : 'border-white/10'} rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--brand-primary)]`}
            placeholder="How can we help you?"
            {...register('subject')}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message *
          </label>
          <textarea 
            id="message" 
            rows={5}
            className={`w-full bg-[#111111] border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--brand-primary)]`}
            placeholder="Tell us about your project..."
            {...register('message')}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="flex items-center">
            <input 
              type="checkbox" 
              className="w-5 h-5 rounded accent-[var(--brand-primary)]"
              {...register('privacyPolicy')}
            />
            <span className="ml-2 text-sm text-gray-300">
              I agree to the privacy policy and terms
            </span>
          </label>
          {errors.privacyPolicy && (
            <p className="mt-1 text-sm text-red-500">{errors.privacyPolicy.message}</p>
          )}
        </div>

        <motion.button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/90 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </motion.button>
      </form>
    </div>
  );
}
