import { SiGithub, SiLinkedin } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import { useLang } from '../../context/LangContext';
import { contact } from '../../data/cv';

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1e293b] py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#94a3b8] text-sm">
          © {year} Jeremy Tierra · {t.footer.rights}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#94a3b8] hover:text-[#06b6d4] transition-colors duration-200"
          >
            <SiGithub size={18} />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#94a3b8] hover:text-[#06b6d4] transition-colors duration-200"
          >
            <SiLinkedin size={18} />
          </a>
          <a
            href={`mailto:${contact.email}`}
            aria-label="Email"
            className="text-[#94a3b8] hover:text-[#06b6d4] transition-colors duration-200"
          >
            <HiOutlineMail size={20} />
          </a>
        </div>
        <p className="text-[#94a3b8] text-xs">{t.footer.built}</p>
      </div>
    </footer>
  );
}
