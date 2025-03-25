import { useState, FormEvent, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { CONTACT_FORM_INITIAL } from '@/lib/constants';
import { contactValidationSchema } from '@shared/schema';
import { z } from 'zod';
import emailjs from '@emailjs/browser';

// Form type based on the validation schema
type ContactFormData = z.infer<typeof contactValidationSchema> & {
  privacyPolicy: boolean;
};

export default function ContactForm() {
  const [formData, setFormData] = useState(CONTACT_FORM_INITIAL);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const { toast } = useToast();
  
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);
  
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
      
      // Send email using EmailJS
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: contactData.name,
          from_email: contactData.email,
          phone: contactData.phone,
          subject: contactData.subject,
          message: contactData.message,
        }
      );

      if (result.status === 200) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
          variant: "default",
        });
        
        // Reset form after successful submission
        reset(CONTACT_FORM_INITIAL);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="bg-[#1A1A1A] p-8 rounded-lg">
      <h3 className="text-xl font-bold font-heading mb-6">Send a Message</h3>
      
      {submitStatus.type && (
        <div
          className={`p-4 rounded-lg ${
            submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register('name')}
              className="mt-1 block w-full rounded-md bg-[#111111] border border-white/10 py-2 px-3 text-white shadow-sm focus:border-[var(--brand-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-primary)]"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className="mt-1 block w-full rounded-md bg-[#111111] border border-white/10 py-2 px-3 text-white shadow-sm focus:border-[var(--brand-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-primary)]"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
            Phone (optional)
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className="mt-1 block w-full rounded-md bg-[#111111] border border-white/10 py-2 px-3 text-white shadow-sm focus:border-[var(--brand-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-primary)]"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            {...register('subject')}
            className="mt-1 block w-full rounded-md bg-[#111111] border border-white/10 py-2 px-3 text-white shadow-sm focus:border-[var(--brand-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-primary)]"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            {...register('message')}
            rows={4}
            className="mt-1 block w-full rounded-md bg-[#111111] border border-white/10 py-2 px-3 text-white shadow-sm focus:border-[var(--brand-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-primary)]"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="privacyPolicy"
            {...register('privacyPolicy')}
            className="h-4 w-4 rounded border-gray-300 text-[var(--brand-primary)] focus:ring-[var(--brand-primary)]"
          />
          <label htmlFor="privacyPolicy" className="ml-2 block text-sm text-gray-300">
            I agree to the privacy policy
          </label>
          {errors.privacyPolicy && (
            <p className="ml-2 text-sm text-red-500">{errors.privacyPolicy.message}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--brand-primary)] ${
              isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
}
