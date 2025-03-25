import { motion } from 'framer-motion';
import { portfolioItemHover, portfolioOverlay } from '@/lib/animations';
import { ArrowRight } from 'lucide-react';

interface PortfolioItemProps {
  title: string;
  category: string;
  description: string;
  image: string;
}

export default function PortfolioItem({ title, category, description, image }: PortfolioItemProps) {
  return (
    <motion.div 
      className="relative group overflow-hidden rounded-lg cursor-pointer"
      whileHover="hover"
    >
      <motion.img 
        src={image} 
        alt={title} 
        className="w-full h-80 object-cover"
        loading="lazy"
        variants={portfolioItemHover}
        transition={{ duration: 0.5 }}
      />
      
      <motion.div 
        className="absolute inset-0 bg-[#0D221E]/80 flex flex-col justify-end p-6"
        variants={portfolioOverlay}
        initial="hidden"
      >
        <span className="text-[#16A34A] text-sm font-medium">{category}</span>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <motion.a 
          href="#" 
          className="inline-flex items-center text-white"
          whileHover={{ x: 3 }}
        >
          <span>View Case Study</span>
          <ArrowRight className="ml-2 w-4 h-4" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
