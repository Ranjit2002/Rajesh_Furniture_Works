import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import QuickViewModal from '../components/QuickViewModal';

export const livingRoomData = [
  { id: 1, src: 'img/hall_1.jpg', name: 'Minimalist Modular Sofa & Louver Panel', materials: 'Solid Teak, Premium Bouclé Fabric, Warm LED' },
  { id: 2, src: 'img/hall_2.avif', name: 'Architectural Foyer Partition & Credenza', materials: 'Burma Teak, Rose Gold Trims, Natural Veneer' },
  { id: 3, src: 'img/hall_3.jpeg', name: 'Curved Lounge & Nesting Coffee Ensemble', materials: 'Oak Wood, Smoked Glass, Brass Inlays' },
  { id: 4, src: 'img/hall_4.jpeg', name: 'Suspended Media Console & Fluted Wall', materials: 'Reclaimed Teak Wood, Matt Charcoal PU' },
  { id: 5, src: 'img/hall_5.jpeg', name: 'Bespoke Home Study & Open Bookshelf', materials: 'Solid Ash Wood, Concealed Wiring Channels' },
  { id: 6, src: 'img/hall_6.jpeg', name: 'Contemporary Accent Lounge Seating', materials: 'Mahogany, Top-Grain Textured Fabric' },
  { id: 7, src: 'img/hall_7.jpeg', name: 'Grand Great Room Entertainment Suite', materials: 'Burma Teak, Fluted Louvers, Acoustic Padding' },
  { id: 8, src: 'img/hall_8.jpeg', name: 'Custom Bar Credenza & Glass Showcase', materials: 'Smoked Oak, Mirror Backing, Warm Strip LEDs' },
  { id: 10, src: 'img/hall_10.jpeg', name: 'Sculptural Ceiling & Media Paneling', materials: 'Birch Plywood, Polyurethane Satin Polish' },
  { id: 11, src: 'img/hall_11.jpeg', name: 'Open-Concept Living & Dining Flow', materials: 'Mixed Premium Hardwoods, Hafele Fittings' },
  { id: 12, src: 'img/hall_12.jpeg', name: 'Penthouse Living Room Turnkey Joinery', materials: 'Teak Veneer, Italian PU Lacquer' },
  { id: 13, src: 'img/dining_1.jpeg', name: '6-Seater Solid Timber Dining Table', materials: 'Solid Walnut Wood, Hand-Beveled Edge' },
];

export default function Living() {
  const { isLightMode } = useTheme();
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <header className={`pt-32 pb-16 relative overflow-hidden transition-colors duration-500 ${
        isLightMode ? 'bg-slate-50 border-b border-slate-200' : 'bg-gray-950'
      }`}>
        {/* Ambient Amber Glow */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 relative z-10">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-black tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
              Exhibition View
            </span>
            <h1 className={`text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight ${
              isLightMode ? 'text-slate-900' : 'text-white'
            }`}>
              Living Room <br />
              <span className="amber-gradient-text">Sanctuary.</span>
            </h1>
            <p className={`text-sm sm:text-base max-w-xl mt-3 ${
              isLightMode ? 'text-slate-600' : 'text-gray-400'
            }`}>
              Fluted wall paneling, floating entertainment units, handcrafted sofas, and bespoke partitions custom crafted for contemporary apartments and luxury villas.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link 
              to="/collections" 
              className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all duration-300 border ${
                isLightMode ? 'bg-white border-slate-200 text-slate-700 hover:text-amber-700 shadow-sm' : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              ALL PIECES (30)
            </Link>
            <Link 
              to="/living" 
              className="px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider btn-amber-shimmer text-gray-950 shadow-[0_4px_20px_rgba(245,158,11,0.4)]"
            >
              LIVING ROOM (12)
            </Link>
            <Link 
              to="/bedroom" 
              className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all duration-300 border ${
                isLightMode ? 'bg-white border-slate-200 text-slate-700 hover:text-amber-700 shadow-sm' : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              BEDROOM (8)
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-28 pt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {livingRoomData.map((item, index) => (
            <div 
              key={item.id}
              data-aos="fade-up" 
              data-aos-delay={(index % 2) * 150}
              onClick={() => setSelectedItem(item)}
              className={`group cursor-pointer rounded-3xl overflow-hidden border shadow-lg transition-all duration-500 hover:-translate-y-2 flex flex-col ${
                isLightMode 
                  ? 'bg-white border-slate-200 hover:border-amber-400 hover:shadow-xl' 
                  : 'glass-panel border-white/10 hover:border-amber-400/50 hover:shadow-[0_20px_40px_rgba(245,158,11,0.2)]'
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
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-bold text-amber-400 keep-white tracking-wider uppercase">
                    Living Collection
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <span className="px-5 py-2.5 rounded-full bg-black/80 backdrop-blur-md border border-amber-400 text-amber-300 keep-white font-bold text-xs tracking-wider shadow-2xl flex items-center gap-2 transform group-hover:scale-105 transition-transform">
                    <span>👁️ VIEW SPEC SHEET</span>
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className={`text-xl font-black mb-2 transition-colors ${
                    isLightMode ? 'text-slate-900 group-hover:text-amber-700' : 'text-white group-hover:text-amber-300'
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
                  <span className={`font-bold ${isLightMode ? 'text-amber-700' : 'text-amber-400'}`}>
                    100% Solid Teak & Veneer
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