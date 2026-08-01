import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Bedroom() {
  const { isLightMode } = useTheme();

  return (
    <>
      {/* HEADER */}
      <header className="pt-32 pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-end gap-8 relative z-10">
          <div>
            <span className="text-purple-400 text-sm font-bold tracking-widest uppercase mb-4 block">
              Exhibition View
            </span>
            <h1 className={`text-5xl md:text-7xl font-black tracking-tighter drop-shadow-2xl transition-colors duration-300 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
              Bedroom <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Sanctuary.
              </span>
            </h1>
          </div>

          {/* Category Links */}
          <div className="flex flex-wrap gap-3">
            <Link
              to="/collections"
              className={`px-5 py-2 inline-block rounded-lg text-xs font-bold tracking-wider transition-all duration-300 ${isLightMode ? 'bg-white border border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900 shadow-sm' : 'bg-gray-900 border border-gray-800 text-gray-400 hover:border-gray-600 hover:text-white'}`}
            >
              ALL PIECES
            </Link>

            <Link
              to="/living"
              className={`px-5 py-2 inline-block rounded-lg text-xs font-bold tracking-wider transition-all duration-300 ${isLightMode ? 'bg-white border border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900 shadow-sm' : 'bg-gray-900 border border-gray-800 text-gray-400 hover:border-gray-600 hover:text-white'}`}
            >
              LIVINGROOM
            </Link>

            {/* ACTIVE */}
            <Link
              to="/bedroom"
              className={`px-5 py-2 inline-block rounded-lg text-xs font-bold tracking-wider transition-all duration-300 ${isLightMode ? 'bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300 text-purple-900 shadow-sm' : 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 text-white shadow-[0_0_15px_rgba(168,85,247,0.2)]'}`}
            >
              BEDROOM
            </Link>
          </div>
        </div>
      </header>

      {/* IMAGE GRID GALLERY (BEDROOM) */}
      <main className="max-w-7xl mx-auto px-2 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start mt-8">
          
          <div className={`rounded-2xl overflow-hidden shadow-lg border transition-colors duration-300 ${isLightMode ? 'border-slate-200' : 'border-white/5'}`}>
            <img src={`${import.meta.env.BASE_URL}img/bedroom_1.jpeg`} alt="Bedroom" className="w-full h-auto block" />
          </div>

          <div className={`rounded-2xl overflow-hidden shadow-lg border transition-colors duration-300 ${isLightMode ? 'border-slate-200' : 'border-white/5'}`}>
            <img src={`${import.meta.env.BASE_URL}img/bedroom_2.jpeg`} alt="Bedroom" className="w-full h-auto block" />
          </div>

          <div className={`rounded-2xl overflow-hidden shadow-lg border transition-colors duration-300 ${isLightMode ? 'border-slate-200' : 'border-white/5'}`}>
            <img src={`${import.meta.env.BASE_URL}img/bedroom_3.jpeg`} alt="Bedroom" className="w-full h-auto block" />
          </div>

          <div className={`rounded-2xl overflow-hidden shadow-lg border transition-colors duration-300 ${isLightMode ? 'border-slate-200' : 'border-white/5'}`}>
            <img src={`${import.meta.env.BASE_URL}img/bedroom_5.jpeg`} alt="Bedroom" className="w-full h-auto block" />
          </div>

          <div className={`rounded-2xl overflow-hidden shadow-lg border transition-colors duration-300 ${isLightMode ? 'border-slate-200' : 'border-white/5'}`}>
            <img src={`${import.meta.env.BASE_URL}img/bedroom_7.jpeg`} alt="Bedroom" className="w-full h-auto block" />
          </div>

          <div className={`rounded-2xl overflow-hidden shadow-lg border transition-colors duration-300 ${isLightMode ? 'border-slate-200' : 'border-white/5'}`}>
            <img src={`${import.meta.env.BASE_URL}img/bedroom_8.jpeg`} alt="Bedroom" className="w-full h-auto block" />
          </div>

          <div className={`rounded-2xl overflow-hidden shadow-lg border transition-colors duration-300 ${isLightMode ? 'border-slate-200' : 'border-white/5'}`}>
            <img src={`${import.meta.env.BASE_URL}img/bedroom_9.jpeg`} alt="Bedroom" className="w-full h-auto block" />
          </div>

          <div className={`rounded-2xl overflow-hidden shadow-lg border transition-colors duration-300 ${isLightMode ? 'border-slate-200' : 'border-white/5'}`}>
            <img src={`${import.meta.env.BASE_URL}img/bedroom_10.jpeg`} alt="Bedroom" className="w-full h-auto block" />
          </div>

        </div>
      </main>
    </>
  );
}