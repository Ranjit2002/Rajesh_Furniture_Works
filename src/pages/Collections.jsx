import { useState, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import QuickViewModal from '../components/QuickViewModal';

export const allCollectionsData = [
  { id: 1, src: 'img/hall_1.jpg', name: 'Minimalist Lounge & Fluted TV Unit', category: 'living', room: 'Living Room', materials: 'Solid Teak, Fluted Louvers, Warm LED' },
  { id: 2, src: 'img/bedroom_1.jpeg', name: 'Royal Teak Master Platform Bed', category: 'bedroom', room: 'Bedroom', materials: 'Burma Teak, Hydraulic Storage' },
  { id: 3, src: 'img/hall_2.avif', name: 'Architectural Partition & Display Credenza', category: 'living', room: 'Living Room', materials: 'Walnut Finish, Rose Gold Trims' },
  { id: 4, src: 'img/bedroom_2.jpeg', name: 'Modern Floating Bed & Nightstands', category: 'bedroom', room: 'Bedroom', materials: 'Oak Wood, Concealed Lighting' },
  { id: 5, src: 'img/kichen_1.jpeg', name: 'High-Gloss Modular Kitchen Suite', category: 'kitchen', room: 'Kitchen', materials: 'BWP 710 Marine Ply, Hafele Tandem' },
  { id: 6, src: 'img/hall_3.jpeg', name: 'Curved Sofa & Center Coffee Ensemble', category: 'living', room: 'Living Room', materials: 'Solid Ash Wood, Premium Bouclé' },
  { id: 7, src: 'img/bedroom_3.jpeg', name: 'Contemporary Wardrobe & Vanity Nook', category: 'bedroom', room: 'Bedroom', materials: 'Frosted Glass, Warm Beech Veneer' },
  { id: 8, src: 'img/cupboard_1.jpeg', name: 'Floor-to-Ceiling Luxury Wardrobe', category: 'wardrobe', room: 'Wardrobe', materials: 'Acrylic Finish, Sensor LED Lights' },
  { id: 9, src: 'img/hall_4.jpeg', name: 'Geometric Wall Paneling & Media Unit', category: 'living', room: 'Living Room', materials: 'Teak Veneer, Matt Charcoal PU' },
  { id: 10, src: 'img/mandir_1.jpeg', name: 'Sacred Teak Wood Pooja Mandir', category: 'mandir', room: 'Mandir', materials: 'Hand Carved Teak, Brass Bells' },
  { id: 11, src: 'img/bedroom_5.jpeg', name: 'Upholstered Headboard Suite & Dresser', category: 'bedroom', room: 'Bedroom', materials: 'Mahogany, Velvet Fabric' },
  { id: 12, src: 'img/dining_1.jpeg', name: '6-Seater Solid Timber Dining Table', category: 'kitchen', room: 'Dining', materials: 'Solid Walnut Wood, Brass Inlays' },
  { id: 13, src: 'img/hall_5.jpeg', name: 'Executive Home Study & Bookshelf', category: 'living', room: 'Living Room', materials: 'Solid Teak, Toughened Glass' },
  { id: 14, src: 'img/kitchen_2.jpeg', name: 'Ergonomic Parallel Modular Kitchen', category: 'kitchen', room: 'Kitchen', materials: 'Anti-Scratch Laminate, Stainless Steel' },
  { id: 15, src: 'img/bedroom_7.jpeg', name: 'Minimalist Bedroom with Curved Arch Accent', category: 'bedroom', room: 'Bedroom', materials: 'Birch Plywood, PU Satin Finish' },
  { id: 16, src: 'img/cupboard_2.jpeg', name: 'Sliding Glass & Profile Wardrobe', category: 'wardrobe', room: 'Wardrobe', materials: 'Smoked Glass, Aluminium Profile' },
  { id: 17, src: 'img/hall_6.jpeg', name: 'Contemporary Foyer & Console Set', category: 'living', room: 'Living Room', materials: 'Natural Oak, Marble Top' },
  { id: 18, src: 'img/bedroom_8.jpeg', name: 'Warm Scandinavian Bedroom Joinery', category: 'bedroom', room: 'Bedroom', materials: 'Pine Wood, Acoustic Slats' },
  { id: 19, src: 'img/mandir_2.jpeg', name: 'Backlit Onyx & Teak Sacred Mandir', category: 'mandir', room: 'Mandir', materials: 'Burma Teak, Translucent Stone' },
  { id: 20, src: 'img/hall_7.jpeg', name: 'Luxury Villa Great Room Entertainment Unit', category: 'living', room: 'Living Room', materials: 'Teak Veneer, Italian PU Coat' },
  { id: 21, src: 'img/bedroom_9.jpeg', name: 'Integrated Study & Bed Alcove', category: 'bedroom', room: 'Bedroom', materials: 'Engineered Hardwood, Satin Grey' },
  { id: 22, src: 'img/hall_8.jpeg', name: 'Custom Bar Unit & Display Showcase', category: 'living', room: 'Living Room', materials: 'Smoked Oak, Mirror Backing' },
  { id: 23, src: 'img/bedroom_10.jpeg', name: 'Master Suite with Walk-In Closet Joinery', category: 'bedroom', room: 'Bedroom', materials: 'Natural Veneer, Soft-Close Drawers' },
  { id: 24, src: 'img/balcony_9.jpeg', name: 'Weather-Resistant Balcony Deck & Lounge', category: 'living', room: 'Balcony', materials: 'Treated Teak, Water-Shield Coat' },
  { id: 25, src: 'img/hall_10.jpeg', name: 'Sculptural Ceiling & Media Wall Paneling', category: 'living', room: 'Living Room', materials: 'Acoustic Wood Louvers, PU Finish' },
  { id: 26, src: 'img/hall_11.jpeg', name: 'Curated Open-Concept Hallway & Dining', category: 'living', room: 'Living Room', materials: 'Solid Teak, BWP 710 Marine Ply' },
  { id: 27, src: 'img/hall_12.jpeg', name: 'Luxury Penthouse Living Room Setting', category: 'living', room: 'Living Room', materials: 'Custom Joinery, Brass Highlights' },
  { id: 28, src: 'img/cupboard_3.jpeg', name: 'Walk-In Wardrobe with Island Drawer Unit', category: 'wardrobe', room: 'Wardrobe', materials: 'Fluted Glass, Velvet Lined Trays' },
  { id: 29, src: 'img/kitchen_3.jpeg', name: 'L-Shaped Acrylic Modular Kitchen', category: 'kitchen', room: 'Kitchen', materials: 'Marine Ply, Hettich Tandem Box' },
  { id: 30, src: 'img/mandir_3.jpeg', name: 'Compact Wall-Mounted Designer Mandir', category: 'mandir', room: 'Mandir', materials: 'CNC Jali Work, Solid Teak' }
];

export default function Collections() {
  const { isLightMode } = useTheme();
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Categories list
  const categories = [
    { key: 'all', label: 'ALL PIECES', count: allCollectionsData.length },
    { key: 'living', label: 'LIVING ROOM', count: allCollectionsData.filter(i => i.category === 'living').length },
    { key: 'bedroom', label: 'BEDROOM', count: allCollectionsData.filter(i => i.category === 'bedroom').length },
    { key: 'kitchen', label: 'KITCHEN & DINING', count: allCollectionsData.filter(i => i.category === 'kitchen').length },
    { key: 'wardrobe', label: 'WARDROBES', count: allCollectionsData.filter(i => i.category === 'wardrobe').length },
    { key: 'mandir', label: 'MANDIRS', count: allCollectionsData.filter(i => i.category === 'mandir').length },
  ];

  // Filtered pieces
  const filteredPieces = useMemo(() => {
    return allCollectionsData.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.materials.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.room.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      {/* HEADER WITH ADAPTIVE LIGHT/DARK STYLING */}
      <header className={`pt-32 pb-14 relative overflow-hidden transition-colors duration-500 ${
        isLightMode ? 'bg-slate-50 border-b border-slate-200' : 'bg-gray-950'
      }`}>
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-black tracking-widest uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Exhibition Gallery
              </span>
              <h1 className={`text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight ${
                isLightMode ? 'text-slate-900' : 'text-white'
              }`}>
                Visual <span className="animated-gradient-text">Portfolio.</span>
              </h1>
              <p className={`text-sm sm:text-base max-w-xl mt-2 ${
                isLightMode ? 'text-slate-600' : 'text-gray-400'
              }`}>
                Explore our portfolio of completed residential woodworking, modular kitchens, custom wardrobes, and hand-finished furniture across Maharashtra.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-2">
              <NavLink 
                to="/living"
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider border transition-all ${
                  isLightMode 
                    ? 'bg-white border-slate-200 text-slate-700 hover:text-emerald-700 shadow-sm' 
                    : 'bg-white/5 hover:bg-white/10 border-white/10 text-gray-300 hover:text-emerald-400'
                }`}
              >
                LIVING ROOM SPECIFICS →
              </NavLink>
              <NavLink 
                to="/bedroom"
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider border transition-all ${
                  isLightMode 
                    ? 'bg-white border-slate-200 text-slate-700 hover:text-purple-700 shadow-sm' 
                    : 'bg-white/5 hover:bg-white/10 border-white/10 text-gray-300 hover:text-purple-400'
                }`}
              >
                BEDROOM SPECIFICS →
              </NavLink>
            </div>
          </div>

          {/* CATEGORY FILTER PILLS & SEARCH BAR */}
          <div className={`flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pt-4 border-t ${
            isLightMode ? 'border-slate-200' : 'border-white/10'
          }`}>
            
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    activeCategory === cat.key
                      ? 'btn-gradient-shimmer text-gray-950 shadow-[0_4px_20px_rgba(16,185,129,0.4)]'
                      : isLightMode
                        ? 'bg-white border border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-700 shadow-sm'
                        : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                    activeCategory === cat.key ? 'bg-black/20 text-gray-950 font-black' : isLightMode ? 'bg-slate-100 text-slate-600' : 'bg-white/10 text-gray-400'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Live Search Input */}
            <div className="relative min-w-[260px]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pieces, wood, or space..."
                className={`w-full px-4 py-2.5 pl-10 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all ${
                  isLightMode 
                    ? 'bg-white border border-slate-300 text-slate-900 placeholder-slate-400 shadow-sm' 
                    : 'bg-white/5 border border-white/10 text-white placeholder-gray-500'
                }`}
              />
              <svg className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none ${isLightMode ? 'text-slate-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 text-xs ${isLightMode ? 'text-slate-400 hover:text-slate-700' : 'text-gray-400 hover:text-white'}`}
                >
                  ✕
                </button>
              )}
            </div>

          </div>
        </div>
      </header>

      {/* GALLERY GRID */}
      <main className="max-w-7xl mx-auto px-6 pb-28 pt-8 relative z-10">
        
        {/* Results count */}
        <div className={`flex justify-between items-center mb-8 text-xs ${isLightMode ? 'text-slate-500' : 'text-gray-400'}`}>
          <span>Showing <strong className={isLightMode ? 'text-slate-900' : 'text-white'}>{filteredPieces.length}</strong> craftsmanship works</span>
          <span>Click any piece for high-res spec sheet & WhatsApp inquiry</span>
        </div>

        {filteredPieces.length === 0 ? (
          <div className={`text-center py-24 rounded-3xl border ${isLightMode ? 'bg-white border-slate-200 shadow-md' : 'glass-panel border-white/10'}`}>
            <span className="text-4xl mb-4 block">🔍</span>
            <h3 className={`text-xl font-bold mb-2 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>No matching pieces found</h3>
            <p className={`text-sm mb-6 ${isLightMode ? 'text-slate-600' : 'text-gray-400'}`}>Try searching for teak, wardrobe, bed, kitchen, or living room.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="px-6 py-2.5 rounded-xl btn-gradient-shimmer text-gray-950 text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPieces.map((item, index) => (
              <div 
                key={item.id} 
                data-aos="fade-up" 
                data-aos-delay={(index % 3) * 100}
                onClick={() => setSelectedItem(item)}
                className={`group cursor-pointer rounded-3xl overflow-hidden border shadow-lg transition-all duration-500 hover:-translate-y-2 flex flex-col ${
                  isLightMode 
                    ? 'bg-white border-slate-200 hover:border-emerald-500 hover:shadow-xl' 
                    : 'glass-panel border-white/10 hover:border-emerald-500/50 hover:shadow-[0_20px_40px_rgba(16,185,129,0.2)]'
                }`}
              >
                {/* Image Container */}
                <div className="relative h-72 w-full overflow-hidden bg-gray-900">
                  <img 
                    src={`${import.meta.env.BASE_URL}${item.src}`} 
                    alt={item.name} 
                    loading="lazy" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />

                  {/* Gradient shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent"></div>

                  {/* Room Category Pill */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-bold text-emerald-400 keep-emerald tracking-wider uppercase">
                      {item.room}
                    </span>
                  </div>

                  {/* Quick View Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <span className="px-5 py-2.5 rounded-full bg-black/80 backdrop-blur-md border border-emerald-400 text-emerald-300 keep-emerald font-bold text-xs tracking-wider shadow-2xl flex items-center gap-2 transform group-hover:scale-105 transition-transform">
                      <span>👁️ QUICK VIEW SPEC</span>
                    </span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className={`text-lg font-black mb-2 transition-colors line-clamp-1 ${
                      isLightMode ? 'text-slate-900 group-hover:text-emerald-700' : 'text-white group-hover:text-emerald-300'
                    }`}>
                      {item.name}
                    </h3>
                    <p className={`text-xs leading-relaxed line-clamp-2 ${
                      isLightMode ? 'text-slate-600' : 'text-gray-400'
                    }`}>
                      {item.materials}
                    </p>
                  </div>

                  <div className={`pt-4 mt-4 border-t flex items-center justify-between text-xs ${
                    isLightMode ? 'border-slate-100' : 'border-white/10'
                  }`}>
                    <span className={`font-bold flex items-center gap-1 ${
                      isLightMode ? 'text-emerald-700' : 'text-emerald-400'
                    }`}>
                      <span>Custom Sizing</span>
                    </span>
                    <span className={`flex items-center gap-1 transition-colors ${
                      isLightMode ? 'text-slate-500 group-hover:text-slate-900' : 'text-gray-400 group-hover:text-white'
                    }`}>
                      <span>View Details</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </main>

      {/* QUICK VIEW MODAL */}
      <QuickViewModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  );
}