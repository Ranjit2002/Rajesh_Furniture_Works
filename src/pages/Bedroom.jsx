import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import QuickViewModal from '../components/QuickViewModal';

export const bedroomData = [
  { id: 101, src: 'img/bedroom_1.jpeg', name: 'Royal Teak Master Platform Bed', materials: 'Solid Burma Teak, Hydraulic Storage Lift, PU Polish' },
  { id: 102, src: 'img/bedroom_2.jpeg', name: 'Modern Floating Bed with Nightstand Panels', materials: 'American Walnut Wood, Integrated Warm LEDs' },
  { id: 103, src: 'img/bedroom_3.jpeg', name: 'Fluted Dresser & Acoustic Wall Unit', materials: 'Natural Oak Veneer, Brushed Brass Knobs' },
  { id: 104, src: 'img/bedroom_5.jpeg', name: 'Executive Master Wardrobe Suite', materials: 'BWP 710 Marine Ply, Soft-Close Hafele Runners' },
  { id: 105, src: 'img/bedroom_7.jpeg', name: 'Curved Arch Vanity Desk & Mirror Accent', materials: 'Ash Wood, Velvet Stool, Concealed Drawer' },
  { id: 106, src: 'img/bedroom_8.jpeg', name: 'Scandinavian Minimalist Bedroom Suite', materials: 'Acoustic Pine Slats, Matte Linen Finish' },
  { id: 107, src: 'img/bedroom_9.jpeg', name: 'Integrated Workstation & Murphy Bed Unit', materials: 'High-Density Engineered Hardwood, Satin Grey' },
  { id: 108, src: 'img/bedroom_10.jpeg', name: 'Grand Master Suite with Walk-In Dressing', materials: 'Natural Teak Veneer, Sensor Wardrobe Lights' },
];

export default function Bedroom() {
  const { isLightMode } = useTheme();
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <header className={`pt-32 pb-16 relative overflow-hidden transition-colors duration-500 ${
        isLightMode ? 'bg-slate-50 border-b border-slate-200' : 'bg-gray-950'
      }`}>
        {/* Ambient Purple/Violet Glow */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 relative z-10">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-500 text-xs font-black tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
              Exhibition View
            </span>
            <h1 className={`text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight ${
              isLightMode ? 'text-slate-900' : 'text-white'
            }`}>
              Bedroom <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500">Sanctuary.</span>
            </h1>
            <p className={`text-sm sm:text-base max-w-xl mt-3 ${
              isLightMode ? 'text-slate-600' : 'text-gray-400'
            }`}>
              Ergonomic hydraulic beds, walk-in closets, fluted vanity dressers, and acoustic headboard wall paneling designed for restful restoration.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link 
              to="/collections" 
              className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all duration-300 border ${
                isLightMode ? 'bg-white border-slate-200 text-slate-700 hover:text-purple-700 shadow-sm' : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              ALL PIECES (30)
            </Link>
            <Link 
              to="/living" 
              className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all duration-300 border ${
                isLightMode ? 'bg-white border-slate-200 text-slate-700 hover:text-purple-700 shadow-sm' : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              LIVING ROOM (12)
            </Link>
            <Link 
              to="/bedroom" 
              className="px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black shadow-[0_4px_20px_rgba(168,85,247,0.4)]"
            >
              BEDROOM (8)
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-28 pt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {bedroomData.map((item, index) => (
            <div 
              key={item.id}
              data-aos="fade-up" 
              data-aos-delay={(index % 2) * 150}
              onClick={() => setSelectedItem(item)}
              className={`group cursor-pointer rounded-3xl overflow-hidden border shadow-lg transition-all duration-500 hover:-translate-y-2 flex flex-col ${
                isLightMode 
                  ? 'bg-white border-slate-200 hover:border-purple-400 hover:shadow-xl' 
                  : 'glass-panel border-white/10 hover:border-purple-400/50 hover:shadow-[0_20px_40px_rgba(168,85,247,0.2)]'
              }`}
            >
              <div className="relative h-80 w-full overflow-hidden bg-gray-900">
                <img 
                  src={`${import.meta.env.BASE_URL}${item.src}`} 
                  alt={item.name} 
                  loading="lazy" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-bold text-purple-400 keep-white tracking-wider uppercase">
                    Bedroom Suite
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <span className="px-5 py-2.5 rounded-full bg-black/80 backdrop-blur-md border border-purple-400 text-purple-300 keep-white font-bold text-xs tracking-wider shadow-2xl flex items-center gap-2 transform group-hover:scale-105 transition-transform">
                    <span>👁️ VIEW SPEC SHEET</span>
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className={`text-xl font-black mb-2 transition-colors ${
                    isLightMode ? 'text-slate-900 group-hover:text-purple-700' : 'text-white group-hover:text-purple-300'
                  }`}>
                    {item.name}
                  </h3>
                  <p className={`text-xs leading-relaxed ${
                    isLightMode ? 'text-slate-600' : 'text-gray-400'
                  }`}>
                    {item.materials}
                  </p>
                </div>

                <div className={`pt-4 mt-4 border-t flex items-center justify-between text-xs ${
                  isLightMode ? 'border-slate-100' : 'border-white/10'
                }`}>
                  <span className={`font-bold ${isLightMode ? 'text-purple-700' : 'text-purple-400'}`}>
                    Hydraulic Storage / Custom Finish
                  </span>
                  <span className={`flex items-center gap-1 transition-colors ${
                    isLightMode ? 'text-slate-500 group-hover:text-slate-900' : 'text-gray-400 group-hover:text-white'
                  }`}>
                    <span>Click for Inquiries</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <QuickViewModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  );
}