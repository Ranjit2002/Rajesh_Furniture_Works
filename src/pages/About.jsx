import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { isLightMode } = useTheme();

  return (
    <main>
      {/* HERO SECTION WITH PARALLAX & GRADIENT OVERLAY */}
      <header className="relative h-[70vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1618220179428-22790b46a0eb?auto=format&fit=crop&q=80&w=2000"
            alt="Workshop"
            className="w-full h-full object-cover animate-pan origin-center"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-900/60 to-gray-950 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 z-0 mix-blend-overlay"></div>

        {/* AOS Animation added to Hero Text */}
        <div className="relative z-10 px-6 max-w-4xl mx-auto mt-20" data-aos="fade-down" data-aos-duration="1000">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-400 text-sm font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(52,211,153,0.2)]">
            Our Heritage
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white drop-shadow-2xl leading-tight">
            Crafting Legacies in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
              Wood.
            </span>
          </h1>
          <p className="text-lg md:text-xl !text-gray-300 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
            For over two decades, we have blended traditional artisanship with modern precision to redefine the spaces where life happens.
          </p>
        </div>
      </header>

      {/* OUR STORY SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6 relative transition-colors duration-500 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text slides in from the right */}
          <div className="w-full lg:w-1/2 relative z-10" data-aos="fade-right">
            <h2 className="text-sm font-bold tracking-widest text-cyan-400 mb-2 uppercase">The Journey</h2>
            <h3 className={`text-4xl md:text-5xl font-black tracking-tight mb-8 transition-colors ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
              From a small workshop to a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">design powerhouse.</span>
            </h3>

            <div className={`space-y-6 text-lg leading-relaxed transition-colors ${isLightMode ? 'text-slate-600' : 'text-gray-400'}`}>
              <p className={`transition-colors duration-300 ${isLightMode ? 'hover:text-slate-900' : 'hover:text-gray-200'}`}>
                What started in a small, dusty garage as a passion for restoring vintage chairs has evolved into RAJESH FURNITURE WORKS. We recognized early on that furniture isn't just functional; it is the silent witness to your life's best moments.
              </p>
              <p className={`transition-colors duration-300 ${isLightMode ? 'hover:text-slate-900' : 'hover:text-gray-200'}`}>
                Our philosophy is rooted in the belief that true luxury lies in the details. By sourcing sustainable materials and employing master craftsmen, we ensure that every cut, every joint, and every polish is executed with uncompromising perfection.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className={`group p-6 rounded-2xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(52,211,153,0.3)] ${isLightMode ? 'bg-white border-slate-200 shadow-sm hover:border-emerald-300' : 'bg-gray-900/50 border-gray-800 hover:border-emerald-500/50'}`}>
                <h4 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-cyan-400 mb-2 transition-all">
                  20+
                </h4>
                <p className="text-sm text-gray-500 tracking-wider font-semibold uppercase">Years of Mastery</p>
              </div>
              <div className={`group p-6 rounded-2xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.3)] ${isLightMode ? 'bg-white border-slate-200 shadow-sm hover:border-cyan-300' : 'bg-gray-900/50 border-gray-800 hover:border-cyan-500/50'}`}>
                <h4 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-500 mb-2 transition-all">
                  10k
                </h4>
                <p className="text-sm text-gray-500 tracking-wider font-semibold uppercase">Pieces Delivered</p>
              </div>
            </div>
          </div>

          {/* Images slide in from the left after a delay */}
          <div className="w-full lg:w-1/2 relative h-[600px]" data-aos="fade-left" data-aos-delay="300">
            <div className="absolute top-0 right-0 w-4/5 h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 transition-transform duration-700 hover:scale-[1.03] hover:-rotate-1 z-10 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent mix-blend-overlay z-10"></div>
              <img loading="lazy" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1000" alt="Design Sketching" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 w-3/5 h-[350px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-gray-950 animate-float-delay z-20 transition-transform duration-700 hover:scale-105 hover:rotate-2 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/20 to-transparent mix-blend-overlay z-10"></div>
              <img loading="lazy" src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800" alt="Woodworking" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES SECTION WITH STAGGERED REVEALS */}
   {/* CORE VALUES SECTION WITH STAGGERED REVEALS & PERFECT HOVERS */}
      <section className={`py-24 border-t border-b relative transition-colors duration-500 ${isLightMode ? 'bg-[#f8fafc] border-slate-200' : 'bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 border-white/5'}`}>
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16 relative z-10" data-aos="fade-up">
            <h2 className={`text-4xl font-black tracking-wider mb-4 transition-colors ${isLightMode ? 'text-slate-900' : 'text-white'}`}>OUR CORE VALUES</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 mx-auto rounded-full shadow-[0_0_20px_rgba(6,182,212,0.6)]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            
            {/* CARD 1 WRAPPER - Handles AOS Animation */}
            <div data-aos="fade-up">
              {/* CARD 1 CONTENT - Handles Your Exact Hover Effects */}
              <div className={`relative group h-full rounded-3xl transition-all duration-500 hover:-translate-y-4 border ${isLightMode ? 'border-slate-200 shadow-md hover:shadow-2xl hover:border-transparent' : 'border-gray-800 hover:border-transparent hover:shadow-[0_10px_30px_-10px_rgba(52,211,153,0.4)]'}`}>
                <div className={`absolute inset-0 rounded-3xl transition-opacity duration-500 group-hover:opacity-0 ${isLightMode ? 'bg-white' : 'bg-gray-900/80'}`}></div>
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to bottom right, rgba(52, 211, 153, 0.8), rgba(6, 182, 212, 0.5), rgba(168, 85, 247, 0.3))' }}></div>
                <div className="absolute inset-0 z-[-2] -m-[1px] rounded-[inherit] opacity-30 group-hover:opacity-0 transition-opacity duration-500" style={{ background: 'linear-gradient(to bottom right, rgba(52, 211, 153, 0.5), rgba(6, 182, 212, 0.1), rgba(17, 24, 39, 1))' }}></div>
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${isLightMode ? 'bg-slate-50 border-slate-200 text-emerald-500 group-hover:bg-white/70 group-hover:border-white group-hover:text-emerald-700' : 'bg-gray-800/50 border-gray-700 text-emerald-400 group-hover:bg-gray-900/50 group-hover:border-emerald-500/30 group-hover:text-emerald-300'}`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isLightMode ? 'text-slate-900 group-hover:text-slate-900' : 'text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400'}`}>Sustainability First</h3>
                  <p className={`leading-relaxed transition-colors duration-300 ${isLightMode ? 'text-slate-600 group-hover:text-slate-900' : 'text-gray-400 group-hover:text-gray-200'}`}>
                    We source our timber exclusively from certified sustainable forests and utilize non-toxic, eco-friendly finishes to protect both your home and our planet.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2 WRAPPER - Handles AOS Animation with delay */}
            <div data-aos="fade-up" data-aos-delay="300">
              {/* CARD 2 CONTENT - Handles Your Exact Hover Effects */}
              <div className={`relative group h-full rounded-3xl transition-all duration-500 hover:-translate-y-4 border ${isLightMode ? 'border-slate-200 shadow-md hover:shadow-2xl hover:border-transparent' : 'border-gray-800 hover:border-transparent hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.4)]'}`}>
                <div className={`absolute inset-0 rounded-3xl transition-opacity duration-500 group-hover:opacity-0 ${isLightMode ? 'bg-white' : 'bg-gray-900/80'}`}></div>
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to bottom right, rgba(52, 211, 153, 0.8), rgba(6, 182, 212, 0.5), rgba(168, 85, 247, 0.3))' }}></div>
                <div className="absolute inset-0 z-[-2] -m-[1px] rounded-[inherit] opacity-30 group-hover:opacity-0 transition-opacity duration-500" style={{ background: 'linear-gradient(to bottom right, rgba(52, 211, 153, 0.5), rgba(6, 182, 212, 0.1), rgba(17, 24, 39, 1))' }}></div>
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 ${isLightMode ? 'bg-cyan-50 border-cyan-200 text-cyan-500 group-hover:bg-white/70 group-hover:border-white group-hover:text-cyan-700' : 'bg-gray-800/50 border-gray-700 text-cyan-400 group-hover:bg-gray-900/50 group-hover:border-cyan-500/30 group-hover:text-cyan-300'}`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isLightMode ? 'text-slate-900 group-hover:text-slate-900' : 'text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400'}`}>Uncompromised Quality</h3>
                  <p className={`leading-relaxed transition-colors duration-300 ${isLightMode ? 'text-slate-600 group-hover:text-slate-900' : 'text-gray-400 group-hover:text-gray-200'}`}>
                    We do not believe in mass production. Every joint is inspected, every fabric is tested, ensuring that the furniture you buy today becomes a family heirloom tomorrow.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 3 WRAPPER - Handles AOS Animation with delay */}
            <div data-aos="fade-up" data-aos-delay="600">
              {/* CARD 3 CONTENT - Handles Your Exact Hover Effects */}
              <div className={`relative group h-full rounded-3xl transition-all duration-500 hover:-translate-y-4 border ${isLightMode ? 'border-slate-200 shadow-md hover:shadow-2xl hover:border-transparent' : 'border-gray-800 hover:border-transparent hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.4)]'}`}>
                <div className={`absolute inset-0 rounded-3xl transition-opacity duration-500 group-hover:opacity-0 ${isLightMode ? 'bg-white' : 'bg-gray-900/80'}`}></div>
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to bottom right, rgba(52, 211, 153, 0.8), rgba(6, 182, 212, 0.5), rgba(168, 85, 247, 0.3))' }}></div>
                <div className="absolute inset-0 z-[-2] -m-[1px] rounded-[inherit] opacity-30 group-hover:opacity-0 transition-opacity duration-500" style={{ background: 'linear-gradient(to bottom right, rgba(52, 211, 153, 0.5), rgba(6, 182, 212, 0.1), rgba(17, 24, 39, 1))' }}></div>
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${isLightMode ? 'bg-purple-50 border-purple-200 text-purple-500 group-hover:bg-white/70 group-hover:border-white group-hover:text-purple-700' : 'bg-gray-800/50 border-gray-700 text-purple-400 group-hover:bg-gray-900/50 group-hover:border-purple-500/30 group-hover:text-purple-300'}`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isLightMode ? 'text-slate-900 group-hover:text-slate-900' : 'text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400'}`}>Form Meets Function</h3>
                  <p className={`leading-relaxed transition-colors duration-300 ${isLightMode ? 'text-slate-600 group-hover:text-slate-900' : 'text-gray-400 group-hover:text-gray-200'}`}>
                    Design shouldn't just look stunning; it should solve problems. We meticulously engineer every piece to support the natural flow of your lifestyle and body.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* CALL TO ACTION */}
      <section className="py-24 relative overflow-hidden flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gray-950 z-10 opacity-90"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-emerald-500/20 via-cyan-500/20 to-transparent rounded-full blur-[100px] z-0 pointer-events-none"></div>
        </div>

        <div className="relative z-20 max-w-3xl mx-auto group">
          <h2 data-aos="fade-up" className="text-4xl md:text-6xl font-black mb-8 text-white transition-transform duration-500 group-hover:scale-105">
            Ready to transform your space?
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-xl text-gray-400 mb-10">
            Explore our latest collections or reach out for custom projects.
          </p>

          <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/collections"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-gray-950 font-bold text-lg tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(52,211,153,0.6)] hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              View Collection
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-transparent border-2 border-gray-700 text-white font-bold text-lg tracking-wide transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}