import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { HiArrowDown } from 'react-icons/hi';
import { useLang } from '../../context/LangContext';
import { contact } from '../../data/cv';
import { fadeUp } from '../../lib/motion';

export function Hero() {
  const { t } = useLang();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial glow */}
      <div className="absolute inset-0 bg-radial-[at_50%_40%] from-[#06b6d4]/10 via-transparent to-transparent" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Greeting */}
        <motion.p
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate="visible"
          className="text-[#06b6d4] font-mono text-sm sm:text-base mb-4 tracking-widest uppercase"
        >
          {t.hero.greeting}
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-7xl font-extrabold mb-4 leading-tight"
        >
          <span className="text-[#f1f5f9]">Jeremy</span>{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #06b6d4 0%, #38bdf8 50%, #818cf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Tierra
          </span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="visible"
          className="text-xl sm:text-2xl font-semibold text-[#94a3b8] mb-6"
        >
          {t.hero.role}
        </motion.h2>

        {/* Summary */}
        <motion.p
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="visible"
          className="text-[#94a3b8] text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero.summary}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#06b6d4] text-[#0f172a] font-semibold rounded-lg hover:bg-[#0891b2] transition-colors duration-200 shadow-lg shadow-[#06b6d4]/20"
          >
            <SiGithub size={18} />
            {t.hero.cta_github}
          </a>
          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-70}
            className="flex items-center gap-2 px-6 py-3 border border-[#334155] text-[#f1f5f9] font-semibold rounded-lg hover:border-[#06b6d4] hover:text-[#06b6d4] transition-all duration-200 cursor-pointer"
          >
            {t.hero.cta_contact}
          </Link>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 border border-[#334155] text-[#94a3b8] rounded-lg hover:border-[#06b6d4] hover:text-[#06b6d4] transition-all duration-200"
          >
            <SiLinkedin size={18} />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeUp}
          custom={5}
          initial="hidden"
          animate="visible"
        >
          <Link
            to="about"
            smooth={true}
            duration={600}
            offset={-70}
            className="inline-flex flex-col items-center gap-2 text-[#94a3b8] hover:text-[#06b6d4] transition-colors cursor-pointer"
            aria-label="Scroll down"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              <HiArrowDown size={22} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
