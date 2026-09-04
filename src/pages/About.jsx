import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const milestones = [
  {
    year: '2004',
    title: 'The Humble Inception',
    desc: 'Founded by master carpenter Rajesh Vishwakarma with two workbenches, hand-planes, and an unyielding commitment to mortise-and-tenon joints.'
  },
  {
    year: '2011',
    title: 'Thane Workshop Expansion',
    desc: 'Moved to our dedicated manufacturing and seasoning facility in Thane, Maharashtra integrating modern precision panel saws and edge-banding machinery.'
  },
  {
    year: '2018',
    title: 'Architectural Joinery & Modular Revolution',
    desc: 'Pioneered turnkey residential woodwork, partnering with leading interior designers in Mumbai and Thane for luxury apartment fitouts.'
  },
  {
    year: '2024+',
    title: '10,000+ Heirlooms Delivered',
    desc: 'Celebrated two decades of excellence. Trusted by thousands of discerning families with a 98% direct referral and repeat client rate.'
  }
];

export default function About() {
  const { isLightMode } = useTheme();

  return (
    <main className={`overflow-hidden transition-colors duration-500 ${isLightMode ? 'bg-white text-slate-900' : 'bg-gray-950 text-white'}`}>
      {/* 1. HERO SECTION WITH GRADIENT OVERLAY */}
      <header className="relative h-[72vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center text-center">
        {/* Background Image with Pan Animation */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1618220179428-22790b46a0eb?auto=format&fit=crop&q=80&w=2000"
            alt="Artisanal Woodworking Workshop"
            className="w-full h-full object-cover animate-pan origin-center"
          />
        </div>

        {/* Multi-layered Linear Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-950/70 to-gray-950 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/40 via-transparent to-cyan-950/40 z-0"></div>

        {/* Hero Text */}
        <div className="relative z-10 px-6 max-w-4xl mx-auto mt-16" data-aos="fade-down" data-aos-duration="1000">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-black/60 backdrop-blur-md border border-emerald-400/40 text-emerald-400 keep-emerald text-xs font-black tracking-widest uppercase mb-6 shadow-[0_0_25px_rgba(52,211,153,0.3)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Heritage & Craftsmanship Since 2004
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-6 tracking-tight text-white keep-white drop-shadow-2xl leading-tight">
            Crafting Legacies In <br />
            <span className="animated-gradient-text">
              Natural Wood.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 keep-white-sub max-w-2xl mx-auto drop-shadow-md leading-relaxed">
            For over two decades, Rajesh Furniture Works has united the soul of traditional Indian woodcraft with the precision of contemporary European architectural engineering.
          </p>
        </div>
      </header>

      {/* 2. OUR STORY SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6 relative transition-colors duration-500">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2"></div>

        <div className="flex flex-col lg:flex-row items-center gap-16">

          <div className="w-full lg:w-1/2 relative z-10" data-aos="fade-right">
            <span className="text-xs font-black tracking-widest text-emerald-500 uppercase block mb-3">
              The Journey
            </span>
            <h2 className={`text-3xl sm:text-5xl font-black tracking-tight mb-8 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
              From a local workshop to a <span className="animated-gradient-text">bespoke design powerhouse.</span>
            </h2>

            <div className={`space-y-6 text-base sm:text-lg leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-gray-300'}`}>
              <p>
                What started in 2004 as a single workbench dedicated to bespoke timber cabinetry has grown into one of Mumbai & Thane’s most trusted custom interior carpentry establishments. We recognized early on that furniture isn't just functional storage; it is the silent witness to your life's most cherished memories.
              </p>
              <p>
                Our philosophy is simple: we reject disposable flat-pack furniture. By sourcing certified sustainable Burma Teak, natural veneers, and moisture-proof BWP 710 marine plywood, our master craftsmen ensure that every cut, joinery groove, and hand polish withstands the test of time.
              </p>
            </div>

            {/* Metrics Counters */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className={`p-6 rounded-2xl border ${isLightMode ? 'bg-slate-50 border-slate-200 shadow-sm' : 'gradient-border-luxury'}`}>
                <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
                  20+
                </span>
                <p className={`text-xs tracking-wider font-bold uppercase mt-1 ${isLightMode ? 'text-slate-500' : 'text-gray-400'}`}>Years of Mastery</p>
              </div>
              <div className={`p-6 rounded-2xl border ${isLightMode ? 'bg-slate-50 border-slate-200 shadow-sm' : 'gradient-border-luxury'}`}>
                <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                  10,000+
                </span>
                <p className={`text-xs tracking-wider font-bold uppercase mt-1 ${isLightMode ? 'text-slate-500' : 'text-gray-400'}`}>Heirloom Pieces</p>
              </div>
            </div>
          </div>

          {/* Double Image Frame */}
          <div className="w-full lg:w-1/2 relative h-[520px]" data-aos="fade-left" data-aos-delay="200">
            <div className="absolute top-0 right-0 w-4/5 h-[380px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 transition-transform duration-700 hover:scale-[1.02] z-10">
              <img
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1000"
                alt="Woodworking design sketching"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-3/5 h-[320px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-emerald-500/30 animate-float-delay z-20 transition-transform duration-700 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800"
                alt="Hand planes and chisel wood carving"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. 20-YEAR MILESTONES TIMELINE */}
      <section className={`py-24 border-y transition-colors duration-500 ${isLightMode ? 'bg-slate-50 border-slate-200' : 'bg-gray-900/40 border-white/10'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-xs font-black tracking-widest text-emerald-500 uppercase block mb-3">
              Evolution of Excellence
            </span>
            <h2 className={`text-3xl sm:text-5xl font-black tracking-tight mb-4 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
              Two Decades of <span className="animated-gradient-text">Milestones</span>
            </h2>
            <p className={`max-w-xl mx-auto text-sm ${isLightMode ? 'text-slate-600' : 'text-gray-400'}`}>
              Tracing our growth from artisanal hand carpentry to turnkey architectural joinery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                className={`p-8 rounded-3xl border transition-all duration-300 relative group ${isLightMode ? 'bg-white border-slate-200 hover:border-emerald-500 shadow-sm' : 'glass-panel border-white/10 hover:border-emerald-400/50'
                  }`}
              >
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500 mb-4 group-hover:scale-105 transition-transform inline-block">
                  {m.year}
                </div>
                <h3 className={`text-lg font-black mb-3 group-hover:text-emerald-500 transition-colors ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
                  {m.title}
                </h3>
                <p className={`text-xs leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-gray-400'}`}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-xs font-black tracking-widest text-cyan-500 uppercase block mb-3">
            What Drives Us
          </span>
          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight mb-4 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
            Our Guiding <span className="animated-gradient-text">Core Values</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div data-aos="fade-up" className={`p-8 rounded-3xl group border transition-all ${isLightMode ? 'bg-white border-slate-200 shadow-md' : 'gradient-border-luxury'}`}>
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all">
              🌱
            </div>
            <h3 className={`text-xl font-black mb-3 group-hover:text-emerald-500 transition-colors ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
              Sustainability & Certified Timber
            </h3>
            <p className={`text-sm leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-gray-400'}`}>
              We exclusively use seasoned hardwoods, plantation timber, and eco-friendly polyurethane finishes that safeguard indoor air quality and protect forests.
            </p>
          </div>

          {/* Card 2 */}
          <div data-aos="fade-up" data-aos-delay="200" className={`p-8 rounded-3xl group border transition-all ${isLightMode ? 'bg-white border-slate-200 shadow-md' : 'gradient-border-luxury'}`}>
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-500 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 group-hover:-rotate-6 transition-all">
              📐
            </div>
            <h3 className={`text-xl font-black mb-3 group-hover:text-cyan-500 transition-colors ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
              Millimetric Precision
            </h3>
            <p className={`text-sm leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-gray-400'}`}>
              We do not believe in mass factory compromises. Every joint is hand-planed, every slide is laser aligned, ensuring tight tolerances and squeak-free operation.
            </p>
          </div>

          {/* Card 3 */}
          <div data-aos="fade-up" data-aos-delay="400" className={`p-8 rounded-3xl group border transition-all ${isLightMode ? 'bg-white border-slate-200 shadow-md' : 'gradient-border-luxury'}`}>
            <div className="w-14 h-14 rounded-2xl bg-purple-500/15 border border-purple-500/30 text-purple-500 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all">
              🤝
            </div>
            <h3 className={`text-xl font-black mb-3 group-hover:text-purple-500 transition-colors ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
              Honest Client Transparency
            </h3>
            <p className={`text-sm leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-gray-400'}`}>
              Transparent itemized pricing with zero hidden costs. Clients are invited to our Kasheli workshop anytime to inspect raw timber before polishing begins.
            </p>
          </div>

        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-24 relative overflow-hidden flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gray-950 z-10 opacity-90"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-emerald-500/20 via-cyan-500/20 to-transparent rounded-full blur-[120px] z-0 pointer-events-none"></div>
        </div>

        <div className="relative z-20 max-w-3xl mx-auto flex flex-col items-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 keep-emerald text-xs font-black tracking-widest uppercase mb-6">
            Meet The Master Craftsmen
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white keep-white tracking-tight mb-6 leading-tight">
            Ready To Experience True <br />
            <span className="animated-gradient-text">Artisanal Mastery?</span>
          </h2>

          <p className="text-gray-200 keep-white-sub text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Schedule a visit to our Kasheli workshop or invite us over to inspect your space and discuss custom woodworking blueprints.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              to="/collections"
              className="w-full sm:w-auto px-8 py-4 rounded-xl btn-gradient-shimmer text-gray-950 font-black text-sm tracking-wide shadow-xl text-center"
            >
              EXPLORE COLLECTIONS
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white keep-white font-bold text-sm tracking-wide transition-all text-center"
            >
              BOOK WORKSHOP VISIT
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}