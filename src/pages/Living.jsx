import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import QuickViewModal from '../components/QuickViewModal';

export const livingRoomData = [
  { id: 1, src: 'img/hall_1.jpg', name: 'Minimalist Sofa', materials: 'Solid Teak, Premium Linen' },
  { id: 2, src: 'img/hall_2.avif', name: 'Accent Chair', materials: 'Walnut, Top-Grain Leather' },
  { id: 3, src: 'img/hall_3.jpeg', name: 'Coffee Table', materials: 'Oak Wood, Tempered Glass' },
  { id: 4, src: 'img/hall_4.jpeg', name: 'Media Console', materials: 'Reclaimed Wood, Matte Steel' },
  { id: 5, src: 'img/hall_5.jpeg', name: 'Side Table', materials: 'Solid Ash Wood' },
  { id: 6, src: 'img/hall_6.jpeg', name: 'Lounge Seating', materials: 'Mahogany, Bouclé Fabric' },
  { id: 7, src: 'img/hall_7.jpeg', name: 'Bookshelf Unit', materials: 'Powder-coated Iron, Teak' },
  { id: 8, src: 'img/hall_8.jpeg', name: 'Console Table', materials: 'Marble Top, Brass Base' },
  { id: 10, src: 'img/hall_10.jpeg', name: 'Ottoman', materials: 'Velvet, Birch Wood' },
  { id: 11, src: 'img/hall_11.jpeg', name: 'Nesting Tables', materials: 'Smoked Glass, Steel' },
  { id: 12, src: 'img/hall_12.jpeg', name: 'Living Room Set', materials: 'Mixed Premium Woods' },
  { id: 13, src: 'img/dining_1.jpeg', name: 'Dining Setup', materials: 'Solid Walnut' },
];

export default function Living() {
  const { isLightMode } = useTheme();
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <header className="pt-32 pb-16 relative overflow-hidden" data-aos="fade-down">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-end gap-8 relative z-10">
          <div>
            <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase mb-4 block">
              Exhibition View
            </span>
            <h1 className={`text-5xl md:text-7xl font-black tracking-tighter drop-shadow-2xl transition-colors duration-300 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
              Living <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">
                Collection.
              </span>
            </h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link to="/collections" className={`px-5 py-2 inline-block rounded-lg text-xs font-bold tracking-wider transition-all duration-300 ${isLightMode ? 'bg-white border border-slate-200 text-slate-600' : 'bg-gray-900 border border-gray-800 text-gray-400'}`}>ALL PIECES</Link>
            <Link to="/living" className={`px-5 py-2 inline-block rounded-lg text-xs font-bold tracking-wider transition-all duration-300 ${isLightMode ? 'bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-300 text-amber-700' : 'bg-gradient-to-r from-amber-500/20 to-amber-500/20 border border-amber-500/50 text-white'}`}>LIVINGROOM</Link>
            <Link to="/bedroom" className={`px-5 py-2 inline-block rounded-lg text-xs font-bold tracking-wider transition-all duration-300 ${isLightMode ? 'bg-white border border-slate-200 text-slate-600' : 'bg-gray-900 border border-gray-800 text-gray-400'}`}>BEDROOM</Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-2 md:px-6 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-start mt-6 md:mt-8">
          
          {livingRoomData.map((item, index) => (
            <div 
              key={item.id}
              data-aos="fade-up" 
              data-aos-delay={(index % 2) * 150}
              onClick={() => setSelectedItem(item)}
              className={`group cursor-pointer rounded-2xl overflow-hidden shadow-lg border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${isLightMode ? 'border-slate-200' : 'border-white/5'}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}${item.src}`} 
                  alt={item.name} 
                  loading="lazy" 
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
            </div>
          ))}

        </div>
      </main>

      <QuickViewModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  );
}