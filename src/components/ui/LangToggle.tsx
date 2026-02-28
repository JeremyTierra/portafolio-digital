import { useLang } from '../../context/LangContext';

export function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label="Language selector"
      className="flex items-center gap-1 bg-[#1e293b] rounded-lg p-1 text-sm font-medium"
    >
      <button
        onClick={() => setLang('es')}
        aria-pressed={lang === 'es'}
        className={`px-2.5 py-1 rounded-md transition-all duration-200 cursor-pointer ${
          lang === 'es'
            ? 'bg-[#06b6d4] text-[#0f172a] font-semibold'
            : 'text-[#94a3b8] hover:text-[#f1f5f9]'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`px-2.5 py-1 rounded-md transition-all duration-200 cursor-pointer ${
          lang === 'en'
            ? 'bg-[#06b6d4] text-[#0f172a] font-semibold'
            : 'text-[#94a3b8] hover:text-[#f1f5f9]'
        }`}
      >
        EN
      </button>
    </div>
  );
}
