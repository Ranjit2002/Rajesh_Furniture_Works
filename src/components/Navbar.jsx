import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Extract theme context safely
  const themeContext = useTheme();
  const isLightMode = themeContext?.isLightMode || false;
  const toggleTheme = themeContext?.toggleTheme || (() => {});

  // Detect Scroll for Navbar blur effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Desktop NavLink styling
  const navLinkStyle = ({ isActive }) => 
    `relative px-3 py-1.5 text-xs font-bold tracking-widest transition-all duration-300 rounded-lg group ${
      isActive 
        ? isLightMode 
          ? 'text-emerald-700 bg-emerald-500/10 shadow-sm'
          : 'text-emerald-400 bg-emerald-500/10 shadow-[0_0_15px_rgba(52,211,153,0.15)]'
        : isLightMode
          ? 'text-slate-600 hover:text-emerald-600 hover:bg-slate-100'
          : 'text-gray-300 hover:text-white hover:bg-white/5'
    }`;

  // Mobile Menu Links
  const MobileNavLink = ({ to, children }) => (
    <NavLink 
      to={to} 
      onClick={() => setIsMobileMenuOpen(false)}
      className={({ isActive }) => `font-bold tracking-widest text-base w-full py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-between ${
        isActive 
          ? 'text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 shadow-[0_0_20px_rgba(52,211,153,0.3)]' 
          : 'text-gray-300 hover:text-white hover:bg-white/5'
      }`}
    >
      <span>{children}</span>
      <span className="text-xs text-emerald-400 opacity-60">→</span>
    </NavLink>
  );

  return (
    <nav 
      id="navbar"
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-500 py-3 backdrop-blur-xl border-b ${
        isScrolled 
          ? (isLightMode 
              ? 'bg-white/95 border-emerald-500/30 shadow-md navbar-scrolled py-2' 
              : 'bg-gray-950/92 border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] navbar-scrolled py-2')
          : (isLightMode
              ? 'bg-white/80 border-slate-200/80'
              : 'bg-gray-950/75 border-white/5')
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center transition-all duration-300">
        
        {/* LOGO WITH EMBLEM */}
        <Link 
          to="/" 
          className="group relative z-20 flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
        >
          {/* Custom Geometric Furniture Emblem Icon */}
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 via-cyan-500 to-blue-600 p-[1px] shadow-[0_0_20px_rgba(52,211,153,0.4)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all duration-500">
            <div className="w-full h-full bg-gray-950 rounded-[11px] flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-400 group-hover:rotate-12 transition-transform duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {/* Modern Chair/Craft Icon */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 18h16M7 18v3M17 18v3M6 14h12l-1-7H7l-1 7zM9 7V4h6v3" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-lg sm:text-xl md:text-2xl font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 group-hover:drop-shadow-[0_0_15px_rgba(52,211,153,0.7)] transition-all duration-500">
              RAJESH FURNITURE WORKS
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-gray-400 font-semibold mt-0.5">
              Architectural Joinery & Interiors
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION MENU */}
        <div className="hidden md:flex space-x-1 lg:space-x-2 items-center">
          {[
            { path: '/', label: 'HOME' },
            { path: '/about', label: 'ABOUT' },
            { path: '/collections', label: 'COLLECTIONS' },
            { path: '/contact', label: 'CONTACT' }
          ].map(({ path, label }) => (
            <NavLink key={path} to={path} className={navLinkStyle}>
              {label}
            </NavLink>
          ))}

          {/* QUICK CONSULTATION CTA BUTTON */}
          <Link
            to="/contact"
            className="ml-3 px-4 py-2 rounded-xl text-xs font-bold tracking-wider btn-gradient-shimmer text-gray-950 shadow-md flex items-center gap-1.5 cursor-pointer"
          >
            <span>GET QUOTE</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

          {/* DESKTOP THEME TOGGLE */}
          <button 
            onClick={toggleTheme} 
            aria-label="Toggle Theme"
            className="theme-toggle ml-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-emerald-400/50 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            {isLightMode ? (
              <svg className="w-4 h-4 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            ) : (
              <svg className="w-4 h-4 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            )}
          </button>
        </div>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          aria-label="Toggle Navigation Menu"
          className={`md:hidden relative z-20 p-2 rounded-xl border transition-all duration-300 cursor-pointer ${
            isLightMode && isScrolled 
              ? 'border-slate-300 text-slate-900 hover:bg-slate-100' 
              : 'border-white/10 text-white hover:bg-white/10'
          }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-950/98 backdrop-blur-2xl border-b border-emerald-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] px-6 py-6 flex flex-col space-y-3">
          <MobileNavLink to="/">HOME</MobileNavLink>
          <MobileNavLink to="/about">ABOUT</MobileNavLink>
          <MobileNavLink to="/collections">COLLECTIONS</MobileNavLink>
          <MobileNavLink to="/contact">CONTACT</MobileNavLink>
          
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl btn-gradient-shimmer text-gray-950 font-bold text-center tracking-wider text-sm shadow-lg"
            >
              BOOK CONSULTATION
            </Link>

            <div className="flex items-center justify-between pt-2">
              <a 
                href="https://wa.me/919820879871" 
                target="_blank" 
                rel="noreferrer" 
                className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5"
              >
                <span>💬 Quick WhatsApp Chat</span>
              </a>
              <button 
                onClick={() => { toggleTheme(); setIsMobileMenuOpen(false); }} 
                className="px-4 py-2 rounded-lg bg-white/10 text-white text-xs font-semibold flex items-center gap-1.5"
              >
                {isLightMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}