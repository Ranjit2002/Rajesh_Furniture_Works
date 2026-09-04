import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuickViewModal({ item, onClose }) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (item) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [item]);

  if (!item) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Rajesh Furniture Works, I am interested in customizing / ordering this piece: "${item.name}" (Materials: ${item.materials || 'Premium Hardwood'}). Could you please share more details and pricing?`
  );
  const whatsappUrl = `https://wa.me/919820879871?text=${whatsappMessage}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Dark Glass Overlay with Backdrop Blur */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-2xl cursor-pointer"
        />

        {/* Modal Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ type: "spring", damping: 26, stiffness: 320 }}
          className="relative w-full max-w-5xl bg-gray-950 border border-white/15 rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.8)] flex flex-col md:flex-row z-10 max-h-[90vh]"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            aria-label="Close View"
            className="absolute top-4 right-4 z-20 p-2.5 bg-black/60 hover:bg-black/90 text-white rounded-full backdrop-blur-md border border-white/10 hover:border-emerald-400 transition-all duration-300 hover:rotate-90 cursor-pointer shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left Column: Image Section with subtle zoom */}
          <div className="w-full md:w-3/5 bg-gray-900 flex items-center justify-center overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent z-10 pointer-events-none"></div>
            <img 
              src={`${import.meta.env.BASE_URL}${item.src.replace(/^\//, '')}`} 
              alt={item.name} 
              className="w-full h-full max-h-[45vh] md:max-h-[80vh] object-contain p-2 md:p-6 transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute bottom-4 left-4 z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-emerald-400 uppercase tracking-widest">
              High Resolution Specimen
            </span>
          </div>

          {/* Right Column: Details & WhatsApp Action */}
          <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between bg-gradient-to-b from-gray-900/90 to-gray-950 overflow-y-auto">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  Bespoke Architectural Work
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-black text-white keep-white tracking-tight mb-2">
                {item.name}
              </h2>
              
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 mb-6 rounded-full"></div>

              {/* Spec Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-gray-200 keep-white-sub text-xs font-medium">
                  🪵 100% Seasoned Timber
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-gray-200 keep-white-sub text-xs font-medium">
                  📐 Custom Sizing Available
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-gray-200 keep-white-sub text-xs font-medium">
                  🛡️ 10-Year Warranty
                </span>
              </div>

              {/* Details List */}
              <div className="space-y-4 text-sm mb-6">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-[11px] font-bold text-gray-400 keep-white-sub tracking-wider uppercase mb-1">
                    Primary Materials & Finish
                  </h4>
                  <p className="text-white keep-white font-medium">
                    {item.materials || 'Solid Teak Wood, BWP Marine Grade Ply, Natural Veneers & PU Finish'}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-[11px] font-bold text-gray-400 keep-white-sub tracking-wider uppercase mb-1">
                    Design & Customization
                  </h4>
                  <p className="text-gray-300 keep-white-sub leading-relaxed text-xs">
                    Meticulously engineered and hand-finished by master carpenters. Fully customizable dimensions, wood species, stains, fabric textures, and hardware fittings to match your floor plan.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl btn-gradient-shimmer text-gray-950 font-black text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(52,211,153,0.4)] cursor-pointer"
              >
                <span>💬 INQUIRE ON WHATSAPP</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <button 
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white text-xs font-bold tracking-widest transition-all cursor-pointer"
              >
                CLOSE SPECIFICATION
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}