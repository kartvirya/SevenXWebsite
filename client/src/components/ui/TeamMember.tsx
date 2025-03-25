import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin: string;
    twitter: string;
  };
}

export default function TeamMember({ name, role, bio, image, social }: TeamMemberProps) {
  return (
    <motion.div 
      className="bg-[#111111]/50 rounded-lg overflow-hidden transition-all duration-300 group"
      whileHover={{ y: -8 }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover"
          loading="lazy" 
        />
        <motion.div 
          className="absolute inset-0 bg-[var(--brand-primary)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></motion.div>
      </div>
      
      <div className="p-6">
        <h4 className="text-xl font-bold font-heading mb-1">{name}</h4>
        <p className="text-[var(--brand-primary)] mb-4">{role}</p>
        <p className="text-gray-400 text-sm mb-4">{bio}</p>
        
        <div className="flex space-x-3">
          <a 
            href={social.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-[var(--brand-primary)] transition-colors"
            aria-label="LinkedIn Profile"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a 
            href={social.twitter} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-[var(--brand-primary)] transition-colors"
            aria-label="Twitter Profile"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
