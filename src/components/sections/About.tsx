import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { useLang } from '../../context/LangContext';
import { fadeUp, slideLeft, slideRight } from '../../lib/motion';

const stats = [
  { value: '2+', key: 'stat_exp' },
  { value: '17+', key: 'stat_tech' },
  { value: '3', key: 'stat_projects' },
] as const;

export function About() {
  const { t } = useLang();

  return (
    <SectionWrapper id="about">
      <motion.h2
        variants={fadeUp}
        className="text-3xl sm:text-4xl font-bold mb-12 text-center"
      >
        <span className="text-[#f1f5f9]">{t.about.title}</span>
        <span className="text-[#06b6d4]">.</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Bio */}
        <motion.div variants={slideLeft}>
          <p className="text-[#94a3b8] text-base sm:text-lg leading-relaxed">
            {t.about.bio}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div variants={slideRight} className="grid grid-cols-3 gap-4">
          {stats.map(({ value, key }) => (
            <div
              key={key}
              className="flex flex-col items-center justify-center p-6 bg-[#1e293b] rounded-xl border border-[#334155] hover:border-[#06b6d4] transition-colors duration-300"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-[#06b6d4] mb-2">
                {value}
              </span>
              <span className="text-[#94a3b8] text-xs text-center leading-tight whitespace-pre-line">
                {t.about[key]}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
