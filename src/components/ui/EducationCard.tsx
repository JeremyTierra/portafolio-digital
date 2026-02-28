import { motion } from 'framer-motion';
import { HiAcademicCap, HiCode, HiLightBulb } from 'react-icons/hi';
import { scaleIn } from '../../lib/motion';

interface EducationCardProps {
  degree: string;
  institution: string;
  period?: string;
  type: 'university' | 'course' | 'highschool';
}

const icons = {
  university: HiAcademicCap,
  course: HiCode,
  highschool: HiLightBulb,
};

const colors = {
  university: '#06b6d4',
  course: '#818cf8',
  highschool: '#34d399',
};

export function EducationCard({ degree, institution, period, type }: EducationCardProps) {
  const Icon = icons[type];
  const color = colors[type];

  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="flex gap-4 p-6 bg-[#1e293b] rounded-xl border border-[#334155] hover:border-[#06b6d4]/50 transition-colors duration-300"
    >
      <div
        className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
        style={{ background: `${color}18` }}
      >
        <Icon size={24} style={{ color }} />
      </div>
      <div>
        <h3 className="text-[#f1f5f9] font-semibold text-base mb-1">{degree}</h3>
        <p className="text-[#94a3b8] text-sm">{institution}</p>
        {period && <p className="text-[#94a3b8] text-xs font-mono mt-1">{period}</p>}
      </div>
    </motion.div>
  );
}
