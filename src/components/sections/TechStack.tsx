import { motion } from 'framer-motion';
import {
  SiSpring, SiNodedotjs, SiExpress, SiGraphql,
  SiReact, SiNextdotjs, SiAngular, SiFlutter,
  SiPostgresql, SiMongodb, SiOracle,
  SiDocker, SiGitlab, SiGit, SiGithub,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { SectionWrapper } from '../ui/SectionWrapper';
import { TechBadge } from '../ui/TechBadge';
import { useLang } from '../../context/LangContext';
import { fadeUp, staggerContainer } from '../../lib/motion';

const techGroups = [
  {
    key: 'backend' as const,
    items: [
      { label: 'Java', icon: FaJava, color: '#f89820' },
      { label: 'Spring Boot', icon: SiSpring, color: '#6db33f' },
      { label: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { label: 'Express', icon: SiExpress, color: '#94a3b8' },
      { label: 'GraphQL', icon: SiGraphql, color: '#e10098' },
    ],
  },
  {
    key: 'frontend' as const,
    items: [
      { label: 'React', icon: SiReact, color: '#61dafb' },
      { label: 'Next.js', icon: SiNextdotjs, color: '#f1f5f9' },
      { label: 'AngularJS', icon: SiAngular, color: '#dd0031' },
      { label: 'Flutter', icon: SiFlutter, color: '#54c5f8' },
      { label: 'React Native', icon: SiReact, color: '#61dafb' },
    ],
  },
  {
    key: 'databases' as const,
    items: [
      { label: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { label: 'MongoDB', icon: SiMongodb, color: '#47a248' },
      { label: 'Oracle', icon: SiOracle, color: '#f80000' },
    ],
  },
  {
    key: 'devops' as const,
    items: [
      { label: 'Docker', icon: SiDocker, color: '#2496ed' },
      { label: 'GitLab CI/CD', icon: SiGitlab, color: '#fc6d26' },
      { label: 'Git', icon: SiGit, color: '#f05032' },
      { label: 'GitHub', icon: SiGithub, color: '#f1f5f9' },
    ],
  },
];

export function TechStack() {
  const { t } = useLang();

  return (
    <SectionWrapper id="stack">
      <motion.h2
        variants={fadeUp}
        className="text-3xl sm:text-4xl font-bold mb-12 text-center"
      >
        <span className="text-[#f1f5f9]">{t.stack.title}</span>
        <span className="text-[#06b6d4]">.</span>
      </motion.h2>

      <div className="space-y-10">
        {techGroups.map(({ key, items }) => (
          <div key={key}>
            <motion.h3
              variants={fadeUp}
              className="text-[#06b6d4] font-mono text-sm font-semibold uppercase tracking-widest mb-4"
            >
              {t.stack[key]}
            </motion.h3>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3"
            >
              {items.map(({ label, icon, color }) => (
                <TechBadge key={label} icon={icon} label={label} color={color} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
