import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { TimelineItem } from '../ui/TimelineItem';
import { useLang } from '../../context/LangContext';
import { fadeUp } from '../../lib/motion';

export function Experience() {
  const { t } = useLang();

  return (
    <SectionWrapper id="experience" className="bg-transparent">
      <motion.h2
        variants={fadeUp}
        className="text-3xl sm:text-4xl font-bold mb-12 text-center"
      >
        <span className="text-[#f1f5f9]">{t.experience.title}</span>
        <span className="text-[#06b6d4]">.</span>
      </motion.h2>

      <div className="max-w-3xl mx-auto">
        {t.experience.jobs.map((job, i) => (
          <TimelineItem
            key={i}
            role={job.role}
            company={job.company}
            period={job.period}
            location={job.location}
            description={job.description}
            isLast={i === t.experience.jobs.length - 1}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
