import { useEffect, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { fadeIn } from '@/lib/animations';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  threshold?: number;
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  variants = fadeIn, 
  delay = 0,
  threshold = 0.1
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
