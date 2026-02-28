import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-scroll';
import { LangToggle } from '../ui/LangToggle';
import { ScrollProgress } from '../ui/ScrollProgress';
import { useLang } from '../../context/LangContext';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const SECTION_IDS = ['about', 'experience', 'stack', 'education', 'certifications', 'contact'];

export function Navbar() {
  const { t } = useLang();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 20);
      setHidden(currentY > lastScrollY && currentY > 100);
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY]);

  const navLinks = useMemo(
    () => [
      { id: 'about', label: t.nav.about },
      { id: 'experience', label: t.nav.experience },
      { id: 'stack', label: t.nav.stack },
      { id: 'education', label: t.nav.education },
      { id: 'certifications', label: t.nav.certifications },
      { id: 'contact', label: t.nav.contact },
    ],
    [t]
  );

  return (
    <>
      <ScrollProgress />
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-[#0f172a]/90 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
        } ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-xl font-bold font-mono text-[#06b6d4] cursor-pointer select-none"
          >
            JT
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <Link
                  to={id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors duration-200 ${
                    activeId === id
                      ? 'text-[#06b6d4]'
                      : 'text-[#94a3b8] hover:text-[#f1f5f9]'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <LangToggle />
            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="md:hidden p-2 text-[#94a3b8] hover:text-[#f1f5f9] transition-colors cursor-pointer"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 bg-[#0f172a]/95 backdrop-blur-md ${
            menuOpen ? 'max-h-80 border-t border-[#1e293b]' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <Link
                  to={id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors duration-200 ${
                    activeId === id
                      ? 'text-[#06b6d4] bg-[#1e293b]'
                      : 'text-[#94a3b8] hover:text-[#f1f5f9]'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
