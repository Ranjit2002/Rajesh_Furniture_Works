import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { scrollToTop } from '../utils/scrollUtils';

export default function Footer() {
  const { isLightMode } = useTheme();

  return (
    <footer className={`relative overflow-hidden pt-16 pb-12 transition-colors duration-500 border-t ${
      isLightMode 
        ? 'bg-slate-100 border-slate-200 text-slate-800' 
        : 'bg-gray-950 border-white/10 text-white'
    }`}>
      {/* Ambient Gradient Glows in Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMN 1: BRAND IDENTITY */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center p-[1px] shadow-[0_0_15px_rgba(52,211,153,0.4)]">
                <div className={`w-full h-full rounded-[11px] flex items-center justify-center ${isLightMode ? 'bg-white' : 'bg-gray-950'}`}>
                  <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 18h16M7 18v3M17 18v3M6 14h12l-1-7H7l-1 7zM9 7V4h6v3" />
                  </svg>
                </div>
              </div>
              <span className="text-lg font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600">
                RAJESH FURNITURE WORKS
              </span>
            </Link>

            <p className={`text-sm leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-gray-400'}`}>
              Crafting bespoke architectural joinery, modular kitchens, custom wardrobes, and heirloom wood furnishings since 2004. Where traditional artisanship meets modern precision.
            </p>

            <div className={`pt-2 flex items-center gap-2 text-xs font-semibold ${isLightMode ? 'text-emerald-700' : 'text-emerald-400'}`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>ISO Grade Timber & BWP Marine Ply Standards</span>
            </div>
          </div>

          {/* COLUMN 2: COLLECTIONS DIRECTORY */}
          <div>
            <h4 className={`text-xs font-bold tracking-widest uppercase mb-4 ${
              isLightMode ? 'text-slate-900 font-black' : 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400'
            }`}>
              Curated Collections
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/living" className={`transition-colors flex items-center gap-1.5 group ${
                  isLightMode ? 'text-slate-600 hover:text-emerald-600 font-medium' : 'text-gray-400 hover:text-emerald-400'
                }`}>
                  <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  Living Room Lounges & TV Units
                </Link>
              </li>
              <li>
                <Link to="/bedroom" className={`transition-colors flex items-center gap-1.5 group ${
                  isLightMode ? 'text-slate-600 hover:text-emerald-600 font-medium' : 'text-gray-400 hover:text-emerald-400'
                }`}>
                  <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  Bedroom Sanctuaries & Beds
                </Link>
              </li>
              <li>
                <Link to="/collections" className={`transition-colors flex items-center gap-1.5 group ${
                  isLightMode ? 'text-slate-600 hover:text-emerald-600 font-medium' : 'text-gray-400 hover:text-emerald-400'
                }`}>
                  <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  Modern Modular Kitchens
                </Link>
              </li>
              <li>
                <Link to="/collections" className={`transition-colors flex items-center gap-1.5 group ${
                  isLightMode ? 'text-slate-600 hover:text-emerald-600 font-medium' : 'text-gray-400 hover:text-emerald-400'
                }`}>
                  <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  Custom Mandirs & Balcony Setups
                </Link>
              </li>
              <li>
                <Link to="/collections" className={`transition-colors flex items-center gap-1.5 group ${
                  isLightMode ? 'text-slate-600 hover:text-emerald-600 font-medium' : 'text-gray-400 hover:text-emerald-400'
                }`}>
                  <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  Luxury Wardrobes & Cupboards
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: WORKSHOP LOCATION & HOURS */}
          <div>
            <h4 className={`text-xs font-bold tracking-widest uppercase mb-4 ${
              isLightMode ? 'text-slate-900 font-black' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400'
            }`}>
              Workshop & Showroom
            </h4>
            <address className={`not-italic text-sm space-y-2 leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-gray-400'}`}>
              <p>204, 2nd Floor, D-2</p>
              <p>Shree Ganesh Residency, Maitri Park</p>
              <p>Kasheli, Bhiwandi, Maharashtra 421302</p>
            </address>

            <div className={`mt-4 p-3.5 rounded-xl border ${
              isLightMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-white/5 border-white/5'
            }`}>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span className={`text-xs font-bold tracking-wider ${isLightMode ? 'text-slate-800' : 'text-white'}`}>
                  OPEN FOR INQUIRIES
                </span>
              </div>
              <p className={`text-xs ${isLightMode ? 'text-slate-500' : 'text-gray-400'}`}>
                Mon - Sat: 9:00 AM - 11:00 PM
              </p>
              <p className={`text-xs ${isLightMode ? 'text-slate-500' : 'text-gray-400'}`}>
                Sunday: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>

          {/* COLUMN 4: DIRECT INQUIRY & CONTACT */}
          <div>
            <h4 className={`text-xs font-bold tracking-widest uppercase mb-4 ${
              isLightMode ? 'text-slate-900 font-black' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'
            }`}>
              Direct Contact
            </h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/919820879871"
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-3 p-3 rounded-xl border transition-all group ${
                  isLightMode 
                    ? 'bg-white border-slate-200 hover:border-emerald-500 hover:shadow-md text-slate-800' 
                    : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.1)]'
                }`}
              >
                <span className="text-xl">💬</span>
                <div>
                  <span className={`block text-[11px] font-semibold ${isLightMode ? 'text-slate-500' : 'text-gray-400'}`}>WhatsApp Hotline</span>
                  <span className={`text-sm font-bold ${isLightMode ? 'text-slate-900 group-hover:text-emerald-700' : 'text-white group-hover:text-emerald-300'}`}>
                    +91 98208 79871
                  </span>
                </div>
              </a>

              <a
                href="tel:+919920706036"
                className={`flex items-center gap-3 p-3 rounded-xl border transition-all group ${
                  isLightMode 
                    ? 'bg-white border-slate-200 hover:border-cyan-500 hover:shadow-md text-slate-800' 
                    : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                }`}
              >
                <span className="text-xl">📞</span>
                <div>
                  <span className={`block text-[11px] font-semibold ${isLightMode ? 'text-slate-500' : 'text-gray-400'}`}>Phone Consultation</span>
                  <span className={`text-sm font-bold ${isLightMode ? 'text-slate-900 group-hover:text-cyan-700' : 'text-white group-hover:text-cyan-300'}`}>
                    +91 99207 06036
                  </span>
                </div>
              </a>

              <a
                href="mailto:rv9766444@gmail.com"
                className={`block text-xs truncate pt-1 transition-colors ${
                  isLightMode ? 'text-slate-500 hover:text-emerald-600' : 'text-gray-400 hover:text-white'
                }`}
              >
                ✉️ rv9766444@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR WITH BACK TO TOP */}
        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
          isLightMode ? 'border-slate-200 text-slate-500' : 'border-white/10 text-gray-500'
        }`}>
          <p>&copy; 2026 RAJESH FURNITURE WORKS. All rights reserved. Crafted with passion in Maharashtra, India.</p>

          <button
            type="button"
            id="footer-back-to-top"
            onClick={() => scrollToTop()}
            aria-label="Back to top"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all cursor-pointer ${
              isLightMode 
                ? 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700 hover:text-emerald-600 hover:border-emerald-300 shadow-sm' 
                : 'bg-white/5 hover:bg-emerald-500/20 border-white/10 hover:border-emerald-400/40 text-gray-300 hover:text-emerald-400'
            }`}
          >
            <span>Back to top</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}