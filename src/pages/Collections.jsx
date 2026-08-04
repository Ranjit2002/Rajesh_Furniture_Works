import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import QuickViewModal from '../components/QuickViewModal';

// Keep your existing images array exactly as you had it
const images = [
  "/img/hall_1.jpg",
  "/img/bedroom_1.jpeg",
  "/img/hall_2.avif",
  "/img/bedroom_2.jpeg",
  "/img/hall_3.jpeg",
  "/img/bedroom_3.jpeg",
  "/img/hall_4.jpeg",
  "/img/bedroom_5.jpeg",
  "/img/hall_5.jpeg",
  "/img/bedroom_7.jpeg",
  "/img/hall_6.jpeg",
  "/img/bedroom_8.jpeg",
  "/img/hall_7.jpeg",
  "/img/bedroom_9.jpeg",
  "/img/hall_8.jpeg",
  "/img/bedroom_10.jpeg",
  "/img/hall_10.jpeg",
  "/img/hall_11.jpeg",
  "/img/hall_12.jpeg",
  "/img/dining_1.jpeg"
];

export default function Collections() {
  const { isLightMode } = useTheme();
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      {/* HEADER WITH AOS ANIMATION */}
      <header className="pt-32 pb-16 relative overflow-hidden" data-aos="fade-down">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-end gap-8 relative z-10">
          <div>
            <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase mb-4 block">
              Exhibition View
            </span>
            <h1 className={`text-5xl md:text-7xl font-black tracking-tighter drop-shadow-2xl transition-colors duration-300 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
              Visual <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Gallery.</span>
            </h1>
          </div>

          {/* Sub-navigation Filters with dynamic Light/Dark Mode classes */}
          <div className="flex flex-wrap gap-3">
            <NavLink 
              to="/collections" 
              end 
              className={({ isActive }) => 
                `px-5 py-2 rounded-lg text-xs font-bold tracking-wider transition-all duration-300 ${
                  isActive 
                    ? isLightMode 
                      ? 'bg-gradient-to-r from-emerald-100 to-cyan-100 border border-emerald-300 text-emerald-900 shadow-sm'
                      : 'bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/50 text-white shadow-[0_0_15px_rgba(52,211,153,0.2)]'
                    : isLightMode
                      ? 'bg-white border border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900 shadow-sm'
                      : 'bg-gray-900 border border-gray-800 text-gray-400 hover:border-gray-600 hover:text-white'
                }`
              }
            >
              ALL PIECES
            </NavLink>

            <NavLink 
              to="/living" 
              className={({ isActive }) => 
                `px-5 py-2 rounded-lg text-xs font-bold tracking-wider transition-all duration-300 ${
                  isActive 
                    ? isLightMode 
                      ? 'bg-gradient-to-r from-emerald-100 to-cyan-100 border border-amber-300 text-amber-700 shadow-sm'
                      : 'bg-gradient-to-r from-amber-500/20 to-cyan-500/20 border border-amber-500/50 text-white shadow-[0_0_15px_rgba(52,211,153,0.2)]'
                    : isLightMode
                      ? 'bg-white border border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900 shadow-sm'
                      : 'bg-gray-900 border border-gray-800 text-gray-400 hover:border-gray-600 hover:text-white'
                }`
              }
            >
              LIVINGROOM
            </NavLink>

            <NavLink 
              to="/bedroom" 
              className={({ isActive }) => 
                `px-5 py-2 rounded-lg text-xs font-bold tracking-wider transition-all duration-300 ${
                  isActive 
                    ? isLightMode 
                      ? 'bg-gradient-to-r from-emerald-100 to-cyan-100 border border-emerald-300 text-emerald-900 shadow-sm'
                      : 'bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/50 text-white shadow-[0_0_15px_rgba(52,211,153,0.2)]'
                    : isLightMode
                      ? 'bg-white border border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900 shadow-sm'
                      : 'bg-gray-900 border border-gray-800 text-gray-400 hover:border-gray-600 hover:text-white'
                }`
              }
            >
              BEDROOM
            </NavLink>
          </div>
        </div>
      </header>

      {/* GALLERY GRID WITH AOS AND LAZY LOADING */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start mt-8">
          {images.map((imgSrc, index) => (
            <div 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={(index % 2) * 150} // Staggered animation
              onClick={() => setSelectedItem({ 
                src: imgSrc.slice(1), 
                name: `Curated Piece ${index + 1}`,
                materials: 'Premium Wood & Finishes'
              })}
              className={`group cursor-pointer rounded-2xl overflow-hidden shadow-lg border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${isLightMode ? 'border-slate-200' : 'border-white/5'}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}${imgSrc.slice(1)}`} 
                  alt={`Gallery piece ${index + 1}`} 
                  loading="lazy" 
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* QUICK VIEW MODAL */}
      <QuickViewModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  );
}