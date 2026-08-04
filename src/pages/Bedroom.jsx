import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import QuickViewModal from '../components/QuickViewModal';

export const bedroomData = [
  { id: 101, src: 'img/bedroom_1.jpeg', name: 'Platform Bed', materials: 'Solid Teak' },
  { id: 102, src: 'img/bedroom_2.jpeg', name: 'Modern Nightstand', materials: 'Walnut Wood' },
  { id: 103, src: 'img/bedroom_3.jpeg', name: 'Dresser', materials: 'Oak & Brass' },
  { id: 104, src: 'img/bedroom_5.jpeg', name: 'Wardrobe', materials: 'Mahogany' },
  { id: 105, src: 'img/bedroom_7.jpeg', name: 'Vanity Desk', materials: 'Ash Wood' },
  { id: 106, src: 'img/bedroom_8.jpeg', name: 'Accent Chair', materials: 'Velvet, Steel' },
  { id: 107, src: 'img/bedroom_9.jpeg', name: 'Bed Frame', materials: 'Pine Wood' },
  { id: 108, src: 'img/bedroom_10.jpeg', name: 'Storage Bench', materials: 'Leather, Birch' },
];

export default function Bedroom() {
  const { isLightMode } = useTheme();
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <header className="pt-32 pb-16 relative overflow-hidden" data-aos="fade-down">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-end gap-8 relative z-10">
          <div>
            <span className="text-purple-400 text-sm font-bold tracking-widest uppercase mb-4 block">Exhibition View</span>
            <h1 className={`text-5xl md:text-7xl font-black tracking-tighter drop-shadow-2xl transition-colors duration-300 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
              Bedroom <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Sanctuary.</span>
            </h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link to="/collections" className={`px-5 py-2 inline-block rounded-lg text-xs font-bold tracking-wider transition-all duration-300 ${isLightMode ? 'bg-white border border-slate-200 text-slate-600' : 'bg-gray-900 border border-gray-800 text-gray-400'}`}>ALL PIECES</Link>
            <Link to="/living" className={`px-5 py-2 inline-block rounded-lg text-xs font-bold tracking-wider transition-all duration-300 ${isLightMode ? 'bg-white border border-slate-200 text-slate-600' : 'bg-gray-900 border border-gray-800 text-gray-400'}`}>LIVINGROOM</Link>
            <Link to="/bedroom" className={`px-5 py-2 inline-block rounded-lg text-xs font-bold tracking-wider transition-all duration-300 ${isLightMode ? 'bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300 text-purple-900' : 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 text-white'}`}>BEDROOM</Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-2 md:px-6 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-start mt-6 md:mt-8">
          
          {bedroomData.map((item, index) => (
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