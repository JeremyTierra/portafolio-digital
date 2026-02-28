import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import { scaleIn } from '../../lib/motion';

interface TechBadgeProps {
  icon: IconType;
  label: string;
  color?: string;
}

export function TechBadge({ icon: Icon, label, color = '#06b6d4' }: TechBadgeProps) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -4, scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="flex flex-col items-center gap-2 p-4 bg-[#1e293b] rounded-xl border border-[#334155] hover:border-[#06b6d4]/60 transition-colors duration-200 cursor-default group"
    >
      <Icon size={28} style={{ color }} className="transition-transform duration-200 group-hover:scale-110" />
      <span className="text-[#94a3b8] text-xs font-medium text-center leading-tight group-hover:text-[#f1f5f9] transition-colors">
        {label}
      </span>
    </motion.div>
  );
}
