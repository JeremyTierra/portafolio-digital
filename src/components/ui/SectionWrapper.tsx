import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { staggerContainer } from '../../lib/motion';

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export function SectionWrapper({ id, className = '', children }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={staggerContainer}
      className={`py-20 px-4 max-w-6xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
}
