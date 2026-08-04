import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuickViewModal({ item, onClose }) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (item) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [item]);

  return (
    <AnimatePresence>
      {item && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          {/* Dark Glass Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl cursor-pointer"
          ></motion.div>

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl bg-gray-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Image Section */}
            <div className="w-full md:w-2/3 h-[40vh] md:h-[70vh] bg-black">
              <img 
                src={`${import.meta.env.BASE_URL}${item.src}`} 
                alt={item.name} 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Details Section */}
            <div className="w-full md:w-1/3 p-8 flex flex-col justify-center bg-gradient-to-b from-gray-900 to-gray-950">
              <h2 className="text-3xl font-black text-white mb-2 tracking-tight">{item.name}</h2>
              <div className="w-12 h-1 bg-emerald-500 mb-8 rounded-full"></div>
              
              <div className="space-y-6">
                {/* Dimensions section removed as requested */}
                
                <div>
                  <h4 className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-1">Materials</h4>
                  <p className="text-gray-300">{item.materials || 'Premium Wood'}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-1">Description</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Crafted with precision, this piece embodies the perfect balance of form and function, designed to elevate your space.
                  </p>
                </div>
              </div>

              <button 
                onClick={onClose}
                className="mt-10 w-full py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold tracking-widest transition-all duration-300 cursor-pointer"
              >
                CLOSE VIEW
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}