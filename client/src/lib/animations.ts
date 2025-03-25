import { Variants } from "framer-motion";

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.3, ease: "easeIn" }
  }
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Scale up animation
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Service card hover animation
export const serviceCardHover: Variants = {
  hover: { y: -10, transition: { duration: 0.3 } }
};

// Portfolio item hover animation
export const portfolioItemHover: Variants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } }
};

// Portfolio overlay animation
export const portfolioOverlay: Variants = {
  hidden: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.3 } }
};

// Staggered children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Text reveal animation for hero section
export const textReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Button hover animation
export const buttonHover: Variants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } }
};

// Page transition variants
export const pageTransition: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.4, ease: "easeInOut", when: "beforeChildren" }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

// Accordion animation
export const accordionItem: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: { 
    height: "auto", 
    opacity: 1, 
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// Mobile menu animation
export const mobileMenu: Variants = {
  hidden: { 
    y: -20, 
    opacity: 0,
    transition: {
      duration: 0.2,
    }
  },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.3, 
      ease: [0.25, 0.1, 0.25, 1.0],
      staggerChildren: 0.05,
      delayChildren: 0.05
    }
  },
  exit: { 
    y: -10, 
    opacity: 0,
    transition: { 
      duration: 0.2, 
      ease: [0.25, 0.1, 0.25, 1.0] 
    }
  }
};
