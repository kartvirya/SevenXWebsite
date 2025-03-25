import { motion } from 'framer-motion';
import { Star, StarHalf } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
}

export default function TestimonialCard({ name, role, text, rating, image }: TestimonialCardProps) {
  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-[#16A34A] text-[#16A34A] w-4 h-4" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-[#16A34A] text-[#16A34A] w-4 h-4" />);
    }
    
    return stars;
  };

  return (
    <motion.div 
      className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-[#1A1A1A] p-8 rounded-lg border border-white/10 flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-6">
        <div className="flex text-[#16A34A]">
          {renderStars()}
        </div>
        <span className="ml-2 text-gray-400">{rating.toFixed(1)}</span>
      </div>
      
      <p className="text-gray-300 italic mb-6">{text}</p>
      
      <div className="mt-auto flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4" 
          loading="lazy" 
        />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
