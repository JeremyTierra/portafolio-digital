import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { EducationCard } from '../ui/EducationCard';
import { useLang } from '../../context/LangContext';
import { fadeUp } from '../../lib/motion';

export function Education() {
  const { t } = useLang();

  return (
    <SectionWrapper id="education">
      <motion.h2
        variants={fadeUp}
        className="text-3xl sm:text-4xl font-bold mb-12 text-center"
      >
        <span className="text-[#f1f5f9]">{t.education.title}</span>
        <span className="text-[#06b6d4]">.</span>
      </motion.h2>

      <div className="max-w-2xl mx-auto flex flex-col gap-4">
        {t.education.entries.map((entry, i) => (
          <EducationCard
            key={i}
            degree={entry.degree}
            institution={entry.institution}
            type={entry.type}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
