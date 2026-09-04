import { useState } from 'react';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "919820879871";
  const defaultMessage = encodeURIComponent("Hello Rajesh Furniture Works, I would like to inquire about your custom furniture and interior woodwork services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on hover */}
      <div 
        className={`mr-3 px-4 py-2 rounded-xl bg-gray-900/90 text-white text-xs font-semibold tracking-wide backdrop-blur-md border border-emerald-500/30 shadow-xl transition-all duration-300 pointer-events-none hidden sm:block ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          Chat with our Master Craftsman
        </span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-500 text-white shadow-[0_8px_30px_rgba(16,185,129,0.5)] hover:shadow-[0_12px_40px_rgba(16,185,129,0.8)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        {/* Pulsing Ripple Effect */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping pointer-events-none"></span>
        <span className="absolute -inset-2 rounded-full bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 animate-pulse pointer-events-none"></span>

        {/* WhatsApp Icon */}
        <svg className="w-7 h-7 relative z-10 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.838.799 2.796.799 3.18 0 5.767-2.587 5.768-5.766.001-3.18-2.585-5.785-5.768-5.785zm3.376 8.21c-.14.394-.811.758-1.119.805-.308.048-.71.077-2.029-.444-1.681-.664-2.753-2.383-2.837-2.496-.084-.113-.679-.904-.679-1.724s.434-1.226.589-1.395c.154-.17.336-.212.449-.212.112 0 .224.001.322.006.103.006.242-.039.378.29.14.337.477 1.163.519 1.248.042.085.07.184.014.297-.056.113-.084.184-.168.283-.085.099-.178.222-.254.298-.085.084-.174.175-.075.344.099.169.439.724.941 1.171.646.576 1.19.754 1.36.839.169.085.267.071.366-.042.099-.113.422-.493.535-.662.112-.17.225-.141.379-.085.155.056.983.464 1.152.548.169.085.281.127.323.197.042.071.042.41-.098.804zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.174L2 22l4.962-1.399A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.182a8.136 8.136 0 01-4.32-1.233l-.31-.184-2.946.828.835-2.871-.202-.321A8.136 8.136 0 1112 20.182z"/>
        </svg>
      </a>
    </div>
  );
}
