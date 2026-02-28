import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/motion';

interface TimelineItemProps {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  isLast?: boolean;
}

export function TimelineItem({ role, company, period, location, description, isLast }: TimelineItemProps) {
  return (
    <motion.div variants={fadeUp} className="relative pl-8">
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-[7px] top-6 bottom-0 w-px bg-[#334155]" />
      )}
      {/* Dot */}
      <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#06b6d4] bg-[#0f172a]" />

      <div className="bg-[#1e293b] rounded-xl p-6 border border-[#334155] hover:border-[#06b6d4]/50 transition-colors duration-300 mb-8">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="text-[#f1f5f9] font-semibold text-lg">{role}</h3>
            <p className="text-[#06b6d4] font-medium text-sm">{company}</p>
          </div>
          <div className="text-right">
            <p className="text-[#94a3b8] text-sm font-mono">{period}</p>
            <p className="text-[#94a3b8] text-xs">{location}</p>
          </div>
        </div>
        <p className="text-[#94a3b8] text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
