import { Link } from 'wouter';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Mail, Phone, Clock } from 'lucide-react';
import { COMPANY_NAME, COMPANY_COPYRIGHT_YEAR, COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE, COMPANY_HOURS } from '@/lib/constants';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' }
];

const serviceLinks = [
  { label: 'Search Engine Optimization', href: '/services' },
  { label: 'Pay-Per-Click Advertising', href: '/services' },
  { label: 'Content Marketing', href: '/services' },
  { label: 'Social Media Marketing', href: '/services' },
  { label: 'Email Marketing', href: '/services' },
  { label: 'Analytics & Reporting', href: '/services' }
];

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' }
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D221E]/20 to-transparent z-0"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold font-heading text-white">
                7x<span className="text-[var(--brand-primary)]">Core</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Innovative digital marketing solutions that drive measurable results and help businesses achieve exponential growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="w-10 h-10 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center text-white hover:bg-[var(--brand-primary)] hover:border-[var(--brand-primary)] hover:text-black transition-colors duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6">Our Services</h4>
            <ul className="space-y-4">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-[var(--brand-primary)] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-[var(--brand-primary)] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[var(--brand-primary)] mt-1 mr-3" />
                <span className="text-gray-400">{COMPANY_ADDRESS}</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-[var(--brand-primary)] mt-1 mr-3" />
                <span className="text-gray-400">{COMPANY_EMAIL}</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-[var(--brand-primary)] mt-1 mr-3" />
                <span className="text-gray-400">{COMPANY_PHONE}</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-[var(--brand-primary)] mt-1 mr-3" />
                <span className="text-gray-400">{COMPANY_HOURS}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Policy Links */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {COMPANY_COPYRIGHT_YEAR} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-[var(--brand-primary)] transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-[var(--brand-primary)] transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-[var(--brand-primary)] transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
