import { useState, useEffect } from 'react';

const slidesData = [
  { img: '/img/bedroom_10.jpeg', title: 'Minimalist Comfort', desc: 'Discover pieces designed for living well. Clean lines and modern aesthetics tailored for your space.' },
  { img: '/img/hall_1.jpg', title: 'Sustainable Materials', desc: 'Crafted with precision using eco-friendly resources that don\'t compromise on durability or style.' },
  { img: '/img/hall_7.jpeg', title: 'The Workspace Redefined', desc: 'Elevate your productivity with ergonomic designs built for the modern professional.' },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Manual navigation handlers
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  return (
    // Add this empty fragment wrapper
    <> 
      <header className="relative w-full overflow-hidden bg-gray-950 h-[95vh]">
        {slidesData.map((slide, index) => (
          <div key={index} className={`slide relative flex items-center justify-center text-center px-4 ${index === currentSlide ? 'active' : ''}`}>
            
            {/* Updated Slide Images */}
            <img src={`${import.meta.env.BASE_URL}${slide.img.slice(1)}`} alt={slide.title} className="absolute inset-0 w-full h-full object-cover z-0" />
            
            <div className="absolute inset-0 bg-gray-900/60 z-0"></div>
            <div className="max-w-3xl relative z-10">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white drop-shadow-lg">{slide.title}</h1>
              <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-md">{slide.desc}</p>
            </div>
          </div>
        ))}

        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4 z-20">
          {slidesData.map((_, idx) => (
            <button key={idx} onClick={() => setCurrentSlide(idx)}
              className={`nav-dot w-3 h-3 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]' : 'bg-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]'}`}
            ></button>
          ))}
        </div>

        <button onClick={prevSlide} id="prevBtn" className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 backdrop-blur-sm text-white transition-all duration-300 hover:bg-black/60 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] cursor-pointer">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <button onClick={nextSlide} id="nextBtn" className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 backdrop-blur-sm text-white transition-all duration-300 hover:bg-black/60 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] cursor-pointer">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </header>

      {/* Main Content */}
      <main>
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16 lg:my-20">
            <h2 className="text-3xl font-bold tracking-wider mb-4">CURATED COLLECTIONS</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:my-15">
          <div className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300">
            <div className="h-56 w-full rounded-xl overflow-hidden mb-6 relative">
              
              {/* Updated Kitchen Image */}
              <img src={`${import.meta.env.BASE_URL}img/kichen_1.jpeg`} alt="Kitchen Fittings" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Kitchen Fittings</h3>
            <p className="text-gray-400 text-sm mb-4">Sleek, durable hardware designed to elevate your daily cooking and storage experience.</p>
          </div>

          <div className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300">
            <div className="h-56 w-full rounded-xl overflow-hidden mb-6 relative">
              
              {/* External Unsplash link: Does not need Vite formatting */}
              <img src="https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&q=80&w=800" alt="Minimalist Wooden Dining Table" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Dining Essentials</h3>
            <p className="text-gray-400 text-sm mb-4">Built to last generations. Crafted from responsibly sourced timber.</p>
          </div>

          <div className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300">
            <div className="h-56 w-full rounded-xl overflow-hidden mb-6 relative">
              
              {/* External Unsplash link: Does not need Vite formatting */}
              <img src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800" alt="Modern Walnut Shelving Unit" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Modular Shelving</h3>
            <p className="text-gray-400 text-sm mb-4">Adaptable storage solutions that grow and change with your space.</p>
          </div>
        </div>
        <div className="border-b border-white/5 bg-gray-900/50"></div>
        </section>
        
        <section className="border-b border-white/5 bg-gray-900/50 mb-20">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Premium Materials</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Responsibly sourced timber and best quality wood that guarantee longevity.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Timeless Design</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Crafted to blend seamlessly with both contemporary and traditional spaces.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Artisanal Craftsmanship</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Every joint and curve is meticulously shaped by master woodworkers to create functional art for your home.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-2 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl md:text-4xl font-bold tracking-wide mb-6 leading-tight">Crafting spaces that inspire modern living.</h3>
            <p className="text-gray-300 leading-relaxed mb-8">At RAJESH FURNITURE WORKS, we believe that furniture should do more than just fill a room. It should enhance your daily rituals. We combine traditional woodworking techniques with modern engineering to create pieces that are visually striking, endlessly comfortable, and built to withstand the test of time.</p>
          </div>
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl"></div>
            
            {/* Updated Hall 11 Image */}
            <img src={`${import.meta.env.BASE_URL}img/hall_11.jpeg`} alt="Craftsmanship" className="relative rounded-2xl w-full h-[400px] object-cover border border-gray-700/50 shadow-2xl" />
            
          </div>
        </div>
      </section>

      <section className="py-2 max-w-7xl mx-auto px-6 py-15">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl"></div>
            
            {/* Updated Hall 6 Image */}
            <img src={`${import.meta.env.BASE_URL}img/hall_6.jpeg`} alt="Craftsmanship" className="relative rounded-2xl w-full h-[400px] object-cover border border-gray-700/50 shadow-2xl" />
            
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl md:text-4xl font-bold tracking-wide mb-6 leading-tight">Transforming houses into curated sanctuaries.</h3>
            <p className="text-gray-300 leading-relaxed mb-8">At RAJESH FURNITURE WORKS, we understand that every space tells a unique story, and your furniture should be the perfect reflection of yours. We approach every design with a commitment to authenticity and precision, crafting versatile pieces that adapt to your lifestyle. The result is a collection of furnishings that feel both effortlessly sophisticated and intimately yours.</p>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}