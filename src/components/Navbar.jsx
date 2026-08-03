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
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Base Desktop Link styling
  const navLinkStyle = ({ isActive }) => 
    `relative group text-sm font-semibold tracking-widest transition-colors duration-300 inline-block ${
      isActive ? 'font-bold text-white' : 'text-gray-400 hover:text-white'
    }`;

  // Mobile Menu Links - Now always styled for a dark background for consistency
  const MobileNavLink = ({ to, children }) => (
    <NavLink 
      to={to} 
      onClick={() => setIsMobileMenuOpen(false)}
      className={({ isActive }) => `font-semibold tracking-widest text-lg w-full text-center transition-colors duration-300 ${
        isActive 
          ? 'text-emerald-400 font-black drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]' 
          : 'text-gray-300 hover:text-white'
      }`}
    >
      {children}
    </NavLink>
  );

  return (
    <nav 
      id="navbar"
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-500 py-2 backdrop-blur-xl border-b border-white/10 ${
        isScrolled 
          ? (isLightMode ? 'bg-white/95 border-emerald-400/50 shadow-md navbar-scrolled' : 'bg-gray-950/90 shadow-[0_4px_30px_rgba(0,0,0,0.1)] navbar-scrolled')
          : 'bg-gray-950/70'
      }`}
    >
      <div className="mx-auto px-6 py-2 flex justify-between items-center transition-all duration-300">
        
        {/* LOGO */}
        <Link to="/" className="group relative z-20 flex items-center gap-2 text-2xl md:text-3xl font-black tracking-tight transition-all duration-300">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 group-hover:drop-shadow-[0_0_15px_rgba(52,211,153,0.8)] transition-all duration-500">
            RAJESH FURNITURE WORKS
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-8 lg:space-x-10 items-center">
          {['/', '/about', '/collections', '/contact'].map((path, idx) => {
            const labels = ['HOME', 'ABOUT', 'COLLECTIONS', 'CONTACT'];
            return (
              <NavLink key={path} to={path} className={navLinkStyle}>
                {({ isActive }) => (
                  <>
                    {labels[idx]}
                    {/* Hover line expands from center */}
                    <span className={`absolute -bottom-2 left-0 right-0 mx-auto h-[2px] bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full transition-all duration-300 ease-out ${
                      isActive 
                        ? 'w-full shadow-[0_0_12px_rgba(52,211,153,0.8)]' 
                        : 'w-0 group-hover:w-full group-hover:shadow-[0_0_12px_rgba(52,211,153,0.6)]'
                    }`}></span>
                  </>
                )}
              </NavLink>
            );
          })}

          {/* DESKTOP THEME TOGGLE */}
          <button 
            onClick={toggleTheme} 
            className="theme-toggle ml-4 p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-emerald-400/50 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            {isLightMode ? (
              <svg className="theme-toggle-light-icon w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            ) : (
              <svg className="theme-toggle-dark-icon w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            )}
          </button>
        </div>

        {/* MOBILE MENU TOGGLE BUTTON (Hamburger) - Adapts to main navbar background */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className={`md:hidden relative z-20 focus:outline-none p-2 transition-transform duration-300 hover:scale-110 cursor-pointer ${
            isLightMode && isScrolled ? 'text-slate-800 hover:text-emerald-600' : 'text-white hover:text-emerald-400'
          }`}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN - Now a fixed sleek dark background in ALL modes */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-950/98 backdrop-blur-3xl border-b border-emerald-500/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col items-center py-8 space-y-6">
          <MobileNavLink to="/">HOME</MobileNavLink>
          <MobileNavLink to="/about">ABOUT</MobileNavLink>
          <MobileNavLink to="/collections">COLLECTIONS</MobileNavLink>
          <MobileNavLink to="/contact">CONTACT</MobileNavLink>
          
          {/* MOBILE THEME TOGGLE - Highly visible gradient button for the dark background */}
          <button 
            onClick={() => { toggleTheme(); setIsMobileMenuOpen(false); }} 
            className="theme-toggle mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-gray-950 text-sm font-black tracking-wider shadow-[0_0_15px_rgba(52,211,153,0.4)] hover:shadow-[0_0_25px_rgba(52,211,153,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer w-[60%]"
          >
            {isLightMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            )}
            <span>{isLightMode ? 'DARK MODE' : 'LIGHT MODE'}</span>
          </button>
        </div>
      )}
    </nav>
  );
}