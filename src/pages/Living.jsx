import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Living() {
  const { isLightMode } = useTheme();

  return (
    <>
      {/* HEADER */}
      <header className="pt-24 md:pt-32 pb-12 md:pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-end gap-6 md:gap-8 relative z-10">
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

          {/* Category Links */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            <Link
              to="/collections"
              className={`px-4 md:px-5 py-2 inline-block rounded-lg text-xs font-bold tracking-wider transition-all duration-300 ${isLightMode ? 'bg-white border border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900 shadow-sm' : 'bg-gray-900 border border-gray-800 text-gray-400 hover:border-gray-600 hover:text-white'}`}
            >
              ALL PIECES
            </Link>
            
            {/* ACTIVE */}
            <Link
              to="/living"
              className={`px-4 md:px-5 py-2 inline-block rounded-lg text-xs font-bold tracking-wider transition-all duration-300 ${isLightMode ? 'bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-300 text-amber-700 shadow-sm' : 'bg-gradient-to-r from-amber-500/20 to-amber-500/20 border border-amber-500/50 text-white shadow-[0_0_15px_rgba(52,211,153,0.2)]'}`}
            >
              LIVINGROOM
            </Link>

            <Link
              to="/bedroom"
              className={`px-4 md:px-5 py-2 inline-block rounded-lg text-xs font-bold tracking-wider transition-all duration-300 ${isLightMode ? 'bg-white border border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900 shadow-sm' : 'bg-gray-900 border border-gray-800 text-gray-400 hover:border-gray-600 hover:text-white'}`}
            >
              BEDROOM
            </Link>
          </div>
        </div>
      </header>

      {/* IMAGE GRID GALLERY (LIVING ROOM) */}
      <main className="max-w-7xl mx-auto px-2 md:px-6 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-start mt-6 md:mt-8">

          <div className={`rounded-2xl overflow-hidden shadow-lg border transition-colors duration-300 ${isLightMode ? 'border-slate-200' : 'border-white/5'}`}>
            <img src={`${import.meta.env.BASE_URL}img/hall_1.jpg`} alt="Living Room" className="w-full h-auto block" />
          </div>

          <div className={`rounded-2xl overflow-hidden shadow-lg border transition-colors duration-300 ${isLightMode ? 'border-slate-200' : 'border-white/5'}`}>
            <img src={`${import.meta.env.BASE_URL}img/hall_2.avif`} alt="Living Room" className="w-full h-auto block" />
          </div>

          <div className={`rounded-2xl overflow-hidden shadow-lg border transition-colors duration-300 ${isLightMode ? 'border-slate-200' : 'border-white/5'}`}>
            <img src={`${import.meta.env.BASE_URL}img/hall_3.jpeg`} alt="Living Room" className="w-full h-auto block" />
          </div>

          <div className={`rounded-2xl overflow-hidden shadow-lg border transition-colors duration-300 ${isLightMode ? 'border-slate-200' : 'border-white/5'}`}>
            <img src={`${import.meta.env.BASE_URL}img/hall_4.jpeg`} alt="Living Room" className="w-full h-auto block" />
          </div>

          <div className={`rounded-2xl overflow-hidden shadow-lg border transition-colors duration-300 ${isLightMode ? 'border-slate-200' : 'border-white/5'}`}>
            <img src={`${import.meta.env.BASE_URL}img/hall_5.jpeg`} alt="Living Room" className="w-full h-auto block" />
          </div>

          <div className={`rounded-2xl overflow-hidden shadow-lg border transition-colors duration-300 ${isLightMode ? 'border-slate-200' : 'border-white/5'}`}>
            <img src={`${import.meta.env.BASE_URL}img/hall_6.jpeg`} alt="Living Room" className="w-full h-auto block" />
          </div>

          <div className={`rounded-2xl overflow-hidden shadow-lg border transition-colors duration-300 ${isLightMode ? 'border-slate-200' : 'border-white/5'}`}>
            <img src={`${import.meta.env.BASE_URL}img/hall_7.jpeg`} alt="Living Room" className="w-full h-auto block" />
          </div>

          <div className={`rounded-2xl overflow-hidden shadow-lg border transition-colors duration-300 ${isLightMode ? 'border-slate-200' : 'border-white/5'}`}>
            <img src={`${import.meta.env.BASE_URL}img/hall_8.jpeg`} alt="Living Room" className="w-full h-auto block" />
          </div>

          <div className={`rounded-2xl overflow-hidden shadow-lg border transition-colors duration-300 ${isLightMode ? 'border-slate-200' : 'border-white/5'}`}>
            <img src={`${import.meta.env.BASE_URL}img/hall_10.jpeg`} alt="Living Room" className="w-full h-auto block" />
          </div>

          <div className={`rounded-2xl overflow-hidden shadow-lg border transition-colors duration-300 ${isLightMode ? 'border-slate-200' : 'border-white/5'}`}>
            <img src={`${import.meta.env.BASE_URL}img/hall_11.jpeg`} alt="Living Room" className="w-full h-auto block" />
          </div>

          <div className={`rounded-2xl overflow-hidden shadow-lg border transition-colors duration-300 ${isLightMode ? 'border-slate-200' : 'border-white/5'}`}>
            <img src={`${import.meta.env.BASE_URL}img/hall_12.jpeg`} alt="Living Room" className="w-full h-auto block" />
          </div>

          <div className={`rounded-2xl overflow-hidden shadow-lg border transition-colors duration-300 ${isLightMode ? 'border-slate-200' : 'border-white/5'}`}>
            <img src={`${import.meta.env.BASE_URL}img/dining_1.jpeg`} alt="Dining Room" className="w-full h-auto block" />
          </div>

        </div>
      </main>
    </>
  );
}