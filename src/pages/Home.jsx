import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const slidesData = [
  {
    img: "img/hall_1.jpg",
    badge: "Artisanal Joinery Since 2004",
    title: "Architectural Woodcraft For Refined Spaces",
    desc: "Bespoke living room lounges, fluted TV consoles, and handcrafted timber furniture tailored to your floor plan.",
  },
  {
    img: "img/bedroom_10.jpeg",
    badge: "Luxury Master Suites",
    title: "Minimalist Comfort & Bespoke Bedrooms",
    desc: "Custom upholstered platform beds, hydraulic storage, and walk-in wardrobe joinery crafted for timeless tranquility.",
  },
  {
    img: "img/hall_7.jpeg",
    badge: "Sustainable Craftsmanship",
    title: "Solid Teak & Precision Engineered Veneers",
    desc: "Meticulously shaped using 100% seasoned hardwoods and German soft-close hardware that endure for generations.",
  },
  {
    img: "img/hall_11.jpeg",
    badge: "Complete Interior Solutions",
    title: "Transforming Living Spaces Into Sanctuaries",
    desc: "From custom modular kitchens and serene pooja mandirs to full home interior turnkey woodworking.",
  },
];

const categoryData = [
  {
    title: "Living Room",
    count: "12 Pieces",
    img: "img/hall_3.jpeg",
    link: "/living",
  },
  {
    title: "Bedroom Suites",
    count: "8 Pieces",
    img: "img/bedroom_2.jpeg",
    link: "/bedroom",
  },
  {
    title: "Modular Kitchens",
    count: "Custom Fit",
    img: "img/kichen_1.jpeg",
    link: "/collections",
  },
  {
    title: "Custom Wardrobes",
    count: "Floor-to-Ceiling",
    img: "img/cupboard_1.jpeg",
    link: "/collections",
  },
  {
    title: "Sacred Mandirs",
    count: "Hand Carved",
    img: "img/mandir_1.jpeg",
    link: "/collections",
  },
  {
    title: "Balcony & Lounges",
    count: "Weatherproof",
    img: "img/balcony_9.jpeg",
    link: "/collections",
  },
];

const stepsData = [
  {
    step: "01",
    title: "Design & Space Planning",
    desc: "We visit your home to take laser-accurate measurements, understand your lifestyle, and curate 3D layout blueprints.",
    icon: "📐",
  },
  {
    step: "02",
    title: "Timber & Hardware Selection",
    desc: "Handpick seasoned Burma Teak, natural veneers, and certified BWP 710 marine plywood paired with Hafele/Hettich fittings.",
    icon: "🪵",
  },
  {
    step: "03",
    title: "Master Carpentry & Polishing",
    desc: "Constructed by generational woodworkers with traditional mortise-and-tenon joints, topped with Italian PU polish.",
    icon: "🪚",
  },
  {
    step: "04",
    title: "White-Glove Installation",
    desc: "Precise on-site assembly, thorough cleanup, and a 15-year structural warranty certificate presented upon completion.",
    icon: "✨",
  },
];

const testimonials = [
  {
    name: "Vikram & Radhika S.",
    location: "Hiranandani Estate, Thane",
    text: "Rajesh Furniture Works completely revamped our 3BHK flat. The TV console with acoustic fluting and hydraulic master bed have factory-grade precision. Outstanding finish!",
    rating: 5,
    tag: "Full Home Woodwork",
  },
  {
    name: "Dr. Anand Deshmukh",
    location: "Lodha Palava, Dombivli",
    text: "Their knowledge of marine ply, teak grains, and soft-close hinges is exceptional. The modular kitchen is both scratch-proof and breathtaking. Highly recommended!",
    rating: 5,
    tag: "Modular Kitchen & Wardrobes",
  },
  {
    name: "Sunita Mehra",
    location: "Oberoi Woods, Goregaon",
    text: "The pooja mandir and living room partition they built for us are true masterpieces. Every guest asks who did our carpentry. Courteous team and delivered right on time.",
    rating: 5,
    tag: "Custom Mandir & Living Room",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isLightMode } = useTheme();

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slidesData.length) % slidesData.length,
    );
  };

  return (
    <>
      {/* LUXURY HERO CAROUSEL */}
      <header className="relative w-full overflow-hidden bg-gray-950 h-[92vh] min-h-[640px] flex items-center justify-center">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`slide relative flex items-center justify-center text-center px-4 ${index === currentSlide ? "active" : ""}`}
          >
            {/* Image with slow pan */}
            <img
              src={`${import.meta.env.BASE_URL}${slide.img}`}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover z-0 animate-pan"
            />

            {/* Multi-layered cinematic gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-black/40 to-black/40 z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/25 via-transparent to-cyan-950/25 z-0"></div>

            {/* Slide Text Content */}
            <div className="max-w-4xl relative z-10 px-4 mt-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-emerald-400/40 text-emerald-400 keep-emerald text-xs font-black tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                {slide.badge}
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tight text-white keep-white drop-shadow-2xl leading-[1.1]">
                {slide.title}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-200 keep-white-sub mb-8 max-w-2xl mx-auto drop-shadow-lg leading-relaxed">
                {slide.desc}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/collections"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl btn-gradient-shimmer text-gray-950 font-black text-sm tracking-wider shadow-[0_10px_30px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>EXPLORE GALLERY</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white keep-white font-bold text-sm tracking-wider backdrop-blur-md hover:border-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>REQUEST CONSULTATION</span>
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Indicators */}
        <div className="absolute bottom-16 left-0 right-0 flex justify-center items-center space-x-3 z-20">
          {slidesData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                idx === currentSlide
                  ? "w-10 bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-[0_0_15px_rgba(52,211,153,0.8)]"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3.5 rounded-full bg-black/40 hover:bg-black/70 border border-white/15 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-emerald-400 cursor-pointer shadow-xl"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3.5 rounded-full bg-black/40 hover:bg-black/70 border border-white/15 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-emerald-400 cursor-pointer shadow-xl"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </header>

      {/* METRICS & CREDENTIALS STRIP */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 -mt-8">
        <div
          className={`rounded-2xl p-6 shadow-xl border grid grid-cols-2 md:grid-cols-4 gap-6 text-center ${
            isLightMode
              ? "bg-white border-slate-200 shadow-md"
              : "glass-panel border-white/10"
          }`}
        >
          <div className="p-3">
            <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
              20+
            </span>
            <p
              className={`text-xs uppercase font-bold tracking-widest mt-1 ${isLightMode ? "text-slate-500" : "text-gray-400"}`}
            >
              Years Mastery
            </p>
          </div>
          <div
            className={`p-3 border-l ${isLightMode ? "border-slate-200" : "border-white/10"}`}
          >
            <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              10k+
            </span>
            <p
              className={`text-xs uppercase font-bold tracking-widest mt-1 ${isLightMode ? "text-slate-500" : "text-gray-400"}`}
            >
              Custom Pieces
            </p>
          </div>
          <div
            className={`p-3 border-l ${isLightMode ? "border-slate-200" : "border-white/10"}`}
          >
            <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              100%
            </span>
            <p
              className={`text-xs uppercase font-bold tracking-widest mt-1 ${isLightMode ? "text-slate-500" : "text-gray-400"}`}
            >
              Solid Wood & Ply
            </p>
          </div>
          <div
            className={`p-3 border-l ${isLightMode ? "border-slate-200" : "border-white/10"}`}
          >
            <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500">
              15-Yr
            </span>
            <p
              className={`text-xs uppercase font-bold tracking-widest mt-1 ${isLightMode ? "text-slate-500" : "text-gray-400"}`}
            >
              Warranty Assurance
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <main className="relative overflow-hidden">
        {/* Ambient Lights */}
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute top-2/3 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>

        {/* 1. CURATED CATEGORIES SHOWCASE */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-emerald-500 font-black text-xs tracking-widest uppercase block mb-3">
              Explore By Living Space
            </span>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 ${
                isLightMode ? "text-slate-900" : "text-white"
              }`}
            >
              Bespoke Spaces &{" "}
              <span className="animated-gradient-text">
                Architectural Joinery
              </span>
            </h2>
            <p
              className={`max-w-2xl mx-auto text-base ${isLightMode ? "text-slate-600" : "text-gray-400"}`}
            >
              Every home requires a custom touch. Browse our specialized
              woodworking solutions engineered to fit your distinct aesthetic.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryData.map((cat, idx) => (
              <Link
                key={idx}
                to={cat.link}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="group relative h-80 rounded-3xl overflow-hidden border border-white/10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] cursor-pointer"
              >
                {/* Background Image */}
                <img
                  src={`${import.meta.env.BASE_URL}${cat.img}`}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Gradient Overlay for perfect text contrast in both modes */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-bold text-emerald-400 keep-emerald">
                      {cat.count}
                    </span>
                    <span className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white keep-white text-sm transform group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-gray-950 transition-all duration-300">
                      →
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white keep-white mb-1 group-hover:text-emerald-300 transition-colors drop-shadow-md">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-gray-200 keep-white-sub flex items-center gap-1 group-hover:text-white transition-colors">
                      <span>View Curated Designs</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 2. THE THREE PILLARS OF RAJESH FURNITURE WORKS */}
        <section
          className={`py-20 border-y transition-colors duration-500 relative ${
            isLightMode
              ? "bg-slate-50 border-slate-200"
              : "bg-gray-900/40 border-white/10 backdrop-blur-xl"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div
                data-aos="fade-up"
                className={`p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 group ${
                  isLightMode
                    ? "bg-white border border-slate-200 shadow-md"
                    : "gradient-border-luxury"
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
                  🪵
                </div>
                <h3
                  className={`text-xl font-black mb-3 group-hover:text-emerald-500 transition-colors ${
                    isLightMode ? "text-slate-900" : "text-white"
                  }`}
                >
                  100% Certified Hardwoods
                </h3>
                <p
                  className={`text-sm leading-relaxed ${isLightMode ? "text-slate-600" : "text-gray-400"}`}
                >
                  We refuse cheap particle boards. Every build uses seasoned
                  Burma Teak, natural wood veneers, and ISO BWP 710 marine grade
                  plywood designed to resist moisture and termites for decades.
                </p>
              </div>

              {/* Feature 2 */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className={`p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 group ${
                  isLightMode
                    ? "bg-white border border-slate-200 shadow-md"
                    : "gradient-border-luxury"
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-500 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
                  ⚙️
                </div>
                <h3
                  className={`text-xl font-black mb-3 group-hover:text-cyan-500 transition-colors ${
                    isLightMode ? "text-slate-900" : "text-white"
                  }`}
                >
                  German Soft-Close Hardware
                </h3>
                <p
                  className={`text-sm leading-relaxed ${isLightMode ? "text-slate-600" : "text-gray-400"}`}
                >
                  Engineered with premium Hettich, Hafele, and Blum concealed
                  hinges, tandem boxes, and hydraulic stays ensuring
                  whisper-silent glides on all drawers and wardrobe doors.
                </p>
              </div>

              {/* Feature 3 */}
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className={`p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 group ${
                  isLightMode
                    ? "bg-white border border-slate-200 shadow-md"
                    : "gradient-border-luxury"
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-500 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
                  🎨
                </div>
                <h3
                  className={`text-xl font-black mb-3 group-hover:text-amber-500 transition-colors ${
                    isLightMode ? "text-slate-900" : "text-white"
                  }`}
                >
                  Artisanal Hand Polish & PU
                </h3>
                <p
                  className={`text-sm leading-relaxed ${isLightMode ? "text-slate-600" : "text-gray-400"}`}
                >
                  Finished with multi-coat Italian Polyurethane (PU), Melamine,
                  or deep hand-rubbed Danish oils for a rich, scratch-resistant
                  lustre that highlights the natural beauty of real wood grains.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. EDITORIAL CRAFTSMANSHIP SPOTLIGHTS */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          {/* Spotlight 1: Living Room */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            <div data-aos="fade-right" className="w-full lg:w-1/2">
              <span className="text-emerald-500 font-black text-xs tracking-widest uppercase block mb-3">
                Architectural Living Rooms
              </span>
              <h3
                className={`text-3xl sm:text-4xl font-black tracking-tight mb-6 leading-tight ${
                  isLightMode ? "text-slate-900" : "text-white"
                }`}
              >
                Crafting Spaces That Inspire{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
                  Everyday Living.
                </span>
              </h3>
              <p
                className={`leading-relaxed mb-6 ${isLightMode ? "text-slate-600" : "text-gray-300"}`}
              >
                At Rajesh Furniture Works, we believe custom furniture should be
                the soul of your home. We balance functional ergonomics with
                clean architectural profiles—seamlessly hiding entertainment
                wiring, incorporating acoustic fluted paneling, and ensuring
                effortless room flow.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div
                  className={`p-4 rounded-xl border ${isLightMode ? "bg-white border-slate-200 shadow-sm" : "bg-white/5 border-white/5"}`}
                >
                  <span className="block text-emerald-500 font-black text-xl">
                    Custom Fit
                  </span>
                  <span
                    className={`text-xs ${isLightMode ? "text-slate-500" : "text-gray-400"}`}
                  >
                    Tailored to exact millimetres
                  </span>
                </div>
                <div
                  className={`p-4 rounded-xl border ${isLightMode ? "bg-white border-slate-200 shadow-sm" : "bg-white/5 border-white/5"}`}
                >
                  <span className="block text-cyan-500 font-black text-xl">
                    Fluted Accents
                  </span>
                  <span
                    className={`text-xs ${isLightMode ? "text-slate-500" : "text-gray-400"}`}
                  >
                    Hand-carved wood louvers
                  </span>
                </div>
              </div>

              <Link
                to="/living"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl btn-gradient-shimmer text-gray-950 font-bold text-xs tracking-wider shadow-md"
              >
                <span>EXPLORE LIVING ROOM DESIGNS</span>
                <span>→</span>
              </Link>
            </div>

            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="w-full lg:w-1/2 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-2xl transition-all duration-500 group-hover:blur-3xl"></div>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={`${import.meta.env.BASE_URL}img/hall_11.jpeg`}
                  alt="Living room interior woodwork"
                  className="w-full h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/20 text-white keep-white flex justify-between items-center shadow-lg">
                  <div>
                    <h4 className="text-sm font-bold text-white keep-white">
                      Modern Villa Hallway & TV Console
                    </h4>
                    <p className="text-xs text-gray-200 keep-white-sub">
                      Teak finish with concealed warm ambient LEDs
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/30 border border-emerald-400 text-emerald-300 keep-emerald text-xs font-bold">
                    Featured
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Spotlight 2: Modular Kitchens */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="w-full lg:w-1/2 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl transition-all duration-500 group-hover:blur-3xl"></div>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={`${import.meta.env.BASE_URL}img/kichen_1.jpeg`}
                  alt="Modular kitchen design"
                  className="w-full h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/20 text-white keep-white flex justify-between items-center shadow-lg">
                  <div>
                    <h4 className="text-sm font-bold text-white keep-white">
                      High-Gloss Acrylic Kitchen Suite
                    </h4>
                    <p className="text-xs text-gray-200 keep-white-sub">
                      Boiling waterproof 710 ply with tandem pull-outs
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/30 border border-cyan-400 text-cyan-300 keep-cyan text-xs font-bold">
                    Waterproof
                  </span>
                </div>
              </div>
            </div>

            <div data-aos="fade-left" className="w-full lg:w-1/2">
              <span className="text-cyan-500 font-black text-xs tracking-widest uppercase block mb-3">
                Culinary Workstations
              </span>
              <h3
                className={`text-3xl sm:text-4xl font-black tracking-tight mb-6 leading-tight ${
                  isLightMode ? "text-slate-900" : "text-white"
                }`}
              >
                Modular Kitchens Built For{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                  Indian Cooking.
                </span>
              </h3>
              <p
                className={`leading-relaxed mb-6 ${isLightMode ? "text-slate-600" : "text-gray-300"}`}
              >
                Indian kitchens demand superior resistance to steam, spices,
                heavy cookware, and daily scrubbing. We engineer every cabinet
                with genuine BWP 710 marine grade plywood, anti-rust stainless
                steel baskets, and scratch-proof acrylic shutters built to stay
                immaculate for decades.
              </p>

              <ul className="space-y-3 mb-8 text-sm">
                <li
                  className={`flex items-center gap-3 ${isLightMode ? "text-slate-700" : "text-gray-300"}`}
                >
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>
                    100% Termite, borer, and boiling water resistant inner
                    carcases
                  </span>
                </li>
                <li
                  className={`flex items-center gap-3 ${isLightMode ? "text-slate-700" : "text-gray-300"}`}
                >
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>
                    Corner carousel units and pantry pull-outs for maximum
                    storage
                  </span>
                </li>
                <li
                  className={`flex items-center gap-3 ${isLightMode ? "text-slate-700" : "text-gray-300"}`}
                >
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>
                    Integrated space for chimney, built-in oven, and quartz
                    countertops
                  </span>
                </li>
              </ul>

              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border text-xs font-bold tracking-wider transition-all ${
                  isLightMode
                    ? "bg-white border-slate-300 text-slate-800 hover:border-emerald-500 hover:text-emerald-700 shadow-sm"
                    : "bg-white/10 hover:bg-white/20 border-white/20 text-white"
                }`}
              >
                <span>BOOK KITCHEN CONSULTATION</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 4. 4-STEP CRAFTSMANSHIP JOURNEY */}
        <section
          className={`py-24 border-t transition-colors duration-500 ${
            isLightMode
              ? "bg-slate-50 border-slate-200"
              : "bg-gray-900/30 border-white/10"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16" data-aos="fade-up">
              <span className="text-emerald-500 font-black text-xs tracking-widest uppercase block mb-3">
                How We Bring Your Vision To Life
              </span>
              <h2
                className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 ${
                  isLightMode ? "text-slate-900" : "text-white"
                }`}
              >
                Our 4-Step{" "}
                <span className="animated-gradient-text">
                  Master Joinery Process
                </span>
              </h2>
              <p
                className={`max-w-xl mx-auto text-sm ${isLightMode ? "text-slate-600" : "text-gray-400"}`}
              >
                From initial chalk sketches to polished white-glove handover,
                experience hassle-free craftsmanship.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stepsData.map((item, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}
                  className={`p-6 rounded-3xl border transition-all duration-300 group hover:-translate-y-2 relative ${
                    isLightMode
                      ? "bg-white border-slate-200 hover:border-emerald-500/50 shadow-sm"
                      : "glass-panel border-white/10 hover:border-emerald-500/40"
                  }`}
                >
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-3xl">{item.icon}</span>
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
                      {item.step}
                    </span>
                  </div>

                  <h3
                    className={`text-lg font-black mb-2 group-hover:text-emerald-500 transition-colors ${
                      isLightMode ? "text-slate-900" : "text-white"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed ${isLightMode ? "text-slate-600" : "text-gray-400"}`}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CLIENT PRAISE & TESTIMONIALS */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-amber-500 font-black text-xs tracking-widest uppercase block mb-3">
              Homeowner Experiences
            </span>
            <h2
              className={`text-3xl sm:text-4xl font-black tracking-tight mb-4 ${
                isLightMode ? "text-slate-900" : "text-white"
              }`}
            >
              Trusted By Mumbai & Thane's{" "}
              <span className="amber-gradient-text">Finest Residences</span>
            </h2>
            <p
              className={`max-w-xl mx-auto text-sm ${isLightMode ? "text-slate-600" : "text-gray-400"}`}
            >
              Read how our bespoke woodwork elevated living spaces across
              leading residential towers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((review, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                className={`p-8 rounded-3xl flex flex-col justify-between ${
                  isLightMode
                    ? "bg-white border border-slate-200 shadow-md"
                    : "gradient-border-luxury"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-400 text-sm">
                      {"★".repeat(review.rating)}
                    </div>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${
                        isLightMode
                          ? "bg-slate-100 border-slate-200 text-slate-600"
                          : "bg-white/5 border-white/10 text-gray-400"
                      }`}
                    >
                      {review.tag}
                    </span>
                  </div>

                  <p
                    className={`text-sm leading-relaxed mb-6 italic ${
                      isLightMode ? "text-slate-700" : "text-gray-300"
                    }`}
                  >
                    "{review.text}"
                  </p>
                </div>

                <div
                  className={`pt-4 border-t flex items-center gap-3 ${
                    isLightMode ? "border-slate-100" : "border-white/5"
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-gray-950 font-black text-sm">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4
                      className={`text-sm font-bold ${isLightMode ? "text-slate-900" : "text-white"}`}
                    >
                      {review.name}
                    </h4>
                    <p
                      className={`text-[11px] ${isLightMode ? "text-slate-500" : "text-gray-400"}`}
                    >
                      {review.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. CALL TO ACTION INTERACTIVE BANNER */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div
            data-aos="fade-up"
            className="relative rounded-3xl overflow-hidden p-8 sm:p-12 md:p-16 text-center border border-emerald-500/40 shadow-[0_20px_60px_rgba(16,185,129,0.3)] bg-gradient-to-r from-emerald-950 via-gray-950 to-cyan-950"
          >
            {/* Background mesh */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[140px] pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1 rounded-full bg-emerald-500/25 border border-emerald-400/50 text-emerald-300 keep-emerald text-xs font-black tracking-widest uppercase mb-6">
                Consultation & Site Visit
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white keep-white tracking-tight mb-6 leading-tight drop-shadow-lg">
                Ready To Transform Your Living Space Into A Sanctuary?
              </h2>
              <p className="text-gray-200 keep-white-sub text-base sm:text-lg mb-8 leading-relaxed">
                Connect directly with our master craftsmen. Bring your floor
                plans, sketches, or ideas for a free estimation and material
                consultation.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/919820879871?text=Hello%20Rajesh%20Furniture%20Works,%20I%20would%20like%20to%20discuss%20custom%20woodwork%20for%20my%20home."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-4 sm:px-8 py-4 rounded-xl btn-gradient-shimmer text-gray-950 font-black text-sm tracking-wider flex items-center justify-center gap-2 shadow-xl cursor-pointer whitespace-nowrap"
                >
                  <span>💬 CHAT ON WHATSAPP</span>
                </a>

                <a
                  href="tel:+919820879871"
                  className="w-full sm:w-auto px-4 sm:px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white keep-white font-bold text-sm tracking-wider backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <span>📞 CALL: +91 9820879871</span>
                </a>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-4 sm:px-8 py-4 rounded-xl bg-transparent hover:bg-white/10 border border-white/25 text-white keep-white font-bold text-sm tracking-wider transition-all whitespace-nowrap"
                >
                  VISIT WORKSHOP
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
