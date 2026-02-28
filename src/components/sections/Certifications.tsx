import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { CertCard } from '../ui/CertCard';
import { useLang } from '../../context/LangContext';
import { fadeUp, staggerContainer } from '../../lib/motion';
import { certifications } from '../../data/cv';

export function Certifications() {
  const { t } = useLang();

  return (
    <SectionWrapper id="certifications">
      <motion.h2
        variants={fadeUp}
        className="text-3xl sm:text-4xl font-bold mb-12 text-center"
      >
        <span className="text-[#f1f5f9]">{t.certifications.title}</span>
        <span className="text-[#06b6d4]">.</span>
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-3"
      >
        {certifications.map((cert) => (
          <CertCard key={cert} title={cert} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
