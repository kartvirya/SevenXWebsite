import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { mobileMenu } from '@/lib/animations';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  
  // Track scroll position to change header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 bg-[#111111]/95 backdrop-blur-md border-b border-white/10 transition-all duration-300 ${
        isScrolled ? 'py-2 shadow-lg' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold font-heading text-white">7x<span className="text-[#16A34A]">Solution</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`relative text-white font-medium hover:text-[#16A34A] transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#16A34A] after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 ${
                  location === link.href ? 'after:w-full' : 'hover:after:w-full'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* CTA Button */}
          <Link href="/contact" className="hidden md:block">
            <Button className="bg-[#16A34A] hover:bg-[#16A34A]/90 text-white font-medium transition-all duration-300 transform hover:scale-105">
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden overflow-hidden bg-[#111111]/95 backdrop-blur-md"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenu}
          >
            <nav className="flex flex-col space-y-4 py-4 px-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`text-white font-medium hover:text-[#16A34A] transition-colors duration-300 ${
                    location === link.href ? 'text-[#16A34A]' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact">
                <Button className="w-full bg-[#16A34A] text-white font-medium">
                  Get Started
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
