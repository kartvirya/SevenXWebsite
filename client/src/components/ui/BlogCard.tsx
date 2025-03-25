import { motion } from 'framer-motion';
import { Link } from 'wouter';

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    image: string;
  };
  image: string;
}

export default function BlogCard({ 
  id, 
  title, 
  excerpt, 
  slug, 
  category, 
  date, 
  readTime, 
  author, 
  image 
}: BlogCardProps) {
  return (
    <motion.div 
      className="bg-[#111111] rounded-lg overflow-hidden transition-all duration-300"
      whileHover={{ y: -8 }}
    >
      <Link href={`/blog/${slug}`}>
        <div className="relative overflow-hidden h-60 cursor-pointer">
          <motion.img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
            loading="lazy"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute top-4 left-4 bg-[var(--brand-primary)] text-white text-xs font-medium px-2 py-1 rounded-md">
            {category}
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{readTime}</span>
        </div>
        
        <Link href={`/blog/${slug}`}>
          <h3 className="text-xl font-bold font-heading mb-3 hover:text-[var(--brand-primary)] transition-colors duration-300 cursor-pointer">
            {title}
          </h3>
        </Link>
        
        <p className="text-gray-400 mb-4">{excerpt}</p>
        
        <div className="flex items-center">
          <img 
            src={author.image} 
            alt={author.name} 
            className="w-10 h-10 rounded-full object-cover mr-3" 
            loading="lazy" 
          />
          <span className="text-sm text-gray-300">{author.name}</span>
        </div>
      </div>
    </motion.div>
  );
}
