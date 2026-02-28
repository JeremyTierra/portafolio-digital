import { motion } from 'framer-motion';
import { HiBadgeCheck } from 'react-icons/hi';
import { scaleIn } from '../../lib/motion';

interface CertCardProps {
  title: string;
}

export function CertCard({ title }: CertCardProps) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -3, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="flex items-center gap-3 p-4 bg-[#1e293b] rounded-xl border border-[#334155] hover:border-[#06b6d4]/60 transition-colors duration-200"
    >
      <HiBadgeCheck size={20} className="text-[#06b6d4] flex-shrink-0" />
      <span className="text-[#f1f5f9] text-sm font-medium">{title}</span>
    </motion.div>
  );
}
