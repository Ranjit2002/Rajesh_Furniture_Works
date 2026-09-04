import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { scrollToTop } from '../utils/scrollUtils';

export default function FloatingBackToTop() {
  const { isLightMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset =
        window.scrollY ||
        (document.documentElement && document.documentElement.scrollTop) ||
        0;

      setIsVisible(scrollOffset > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-24 right-7 z-40 flex items-center transition-all duration-500 ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {/* Tooltip on hover */}
      <div
        className={`mr-3 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide backdrop-blur-md shadow-lg transition-all duration-300 pointer-events-none hidden sm:block ${
          isLightMode
            ? 'bg-slate-900/90 text-white border border-slate-700'
            : 'bg-gray-950/90 text-emerald-300 border border-emerald-500/30'
        } ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}
      >
        Back to top
      </div>

      {/* Floating Action Button */}
      <button
        type="button"
        id="floating-back-to-top"
        onClick={() => scrollToTop()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Back to top"
        className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg group hover:scale-110 active:scale-95 ${
          isLightMode
            ? 'bg-white/95 text-slate-800 hover:text-emerald-600 border border-slate-200 hover:border-emerald-400 shadow-slate-300/50'
            : 'bg-gray-900/90 text-gray-200 hover:text-emerald-300 border border-white/15 hover:border-emerald-400/60 shadow-black/60'
        }`}
      >
        <svg
          className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  );
}
