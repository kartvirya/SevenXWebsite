import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, CheckIcon } from 'lucide-react';
import { serviceCardHover } from '@/lib/animations';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export default function ServiceCard({ title, description, icon, features }: ServiceCardProps) {
  return (
    <motion.div 
      className="bg-[#1A1A1A] p-8 rounded-lg border border-white/10 transition-all duration-300"
      whileHover="hover"
      variants={serviceCardHover}
    >
      <div className="w-16 h-16 bg-[#16A34A]/20 rounded-lg flex items-center justify-center mb-6">
        <i className={`fas fa-${icon} text-2xl text-[#16A34A]`}></i>
      </div>
      
      <h3 className="text-xl font-bold font-heading mb-4">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon className="h-4 w-4 text-[#16A34A] mt-1 mr-2" />
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link href="/contact">
        <motion.div 
          className="inline-flex items-center text-[#16A34A] hover:text-white group cursor-pointer"
          whileHover={{ x: 3 }}
        >
          <span className="group-hover:underline">Learn More</span>
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.div>
      </Link>
    </motion.div>
  );
}
