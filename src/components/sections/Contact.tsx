import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { SiLinkedin } from 'react-icons/si';
import { SectionWrapper } from '../ui/SectionWrapper';
import { useLang } from '../../context/LangContext';
import { contact } from '../../data/cv';
import { fadeUp, scaleIn } from '../../lib/motion';

export function Contact() {
  const { t } = useLang();

  const contactCards = [
    {
      icon: HiOutlineMail,
      label: t.contact.email_label,
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: HiOutlinePhone,
      label: t.contact.phone_label,
      value: contact.phone,
      href: `tel:${contact.phone}`,
    },
    {
      icon: SiLinkedin,
      label: t.contact.linkedin_label,
      value: 'jeremy-tierra',
      href: contact.linkedin,
    },
    {
      icon: HiOutlineLocationMarker,
      label: t.contact.location_label,
      value: t.contact.location_value,
      href: null,
    },
  ];

  return (
    <SectionWrapper id="contact">
      <motion.h2
        variants={fadeUp}
        className="text-3xl sm:text-4xl font-bold mb-4 text-center"
      >
        <span className="text-[#f1f5f9]">{t.contact.title}</span>
        <span className="text-[#06b6d4]">.</span>
      </motion.h2>
      <motion.p
        variants={fadeUp}
        className="text-[#94a3b8] text-center mb-3"
      >
        {t.contact.subtitle}
      </motion.p>
      <motion.p
        variants={fadeUp}
        className="text-[#06b6d4] text-center text-sm font-medium mb-12"
      >
        ✓ {t.contact.open_to}
      </motion.p>

      <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-4">
        {contactCards.map(({ icon: Icon, label, value, href }) =>
          href ? (
            <motion.a
              key={label}
              variants={scaleIn}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-start gap-4 p-5 bg-[#1e293b] rounded-xl border border-[#334155] hover:border-[#06b6d4] transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#06b6d4]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#06b6d4]/20 transition-colors">
                <Icon size={20} className="text-[#06b6d4]" />
              </div>
              <div>
                <p className="text-[#94a3b8] text-xs mb-1">{label}</p>
                <p className="text-[#f1f5f9] text-sm font-medium group-hover:text-[#06b6d4] transition-colors break-all">
                  {value}
                </p>
              </div>
            </motion.a>
          ) : (
            <motion.div
              key={label}
              variants={scaleIn}
              className="flex items-start gap-4 p-5 bg-[#1e293b] rounded-xl border border-[#334155]"
            >
              <div className="w-10 h-10 rounded-lg bg-[#06b6d4]/10 flex items-center justify-center flex-shrink-0">
                <Icon size={20} className="text-[#06b6d4]" />
              </div>
              <div>
                <p className="text-[#94a3b8] text-xs mb-1">{label}</p>
                <p className="text-[#f1f5f9] text-sm font-medium">{value}</p>
              </div>
            </motion.div>
          )
        )}
      </div>
    </SectionWrapper>
  );
}
