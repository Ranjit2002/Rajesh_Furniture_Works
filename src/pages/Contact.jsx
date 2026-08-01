import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTheme } from '../context/ThemeContext'; // <-- 1. Import the theme hook

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const { isLightMode } = useTheme(); // <-- 2. Extract isLightMode

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('loading');

    emailjs.sendForm('service_172d0i5', 'template_3y1zzwl', form.current, 'S2p2mt3IfnLxunPQH')
      .then(() => {
        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus('idle'), 4000);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      });
  };

  return (
    <>
      {/* PAGE HEADER */}
      <header className="contact-header pt-32 pb-12 relative z-10 text-center px-6">
        {/* 3. Apply dynamic text colors here! */}
        <h1 className={`text-5xl md:text-7xl font-black mb-4 tracking-tighter drop-shadow-2xl transition-colors duration-300 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Connect.</span>
        </h1>
        <p className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${isLightMode ? 'text-slate-600' : 'text-gray-400'}`}>
          Have a question about a piece, need custom sizing, or want to discuss a large project? Our team is here to help.
        </p>
      </header>

      {/* MAIN CONTACT SECTION */}
      <main className="max-w-7xl mx-auto px-6 py-12 relative">
        {/* Decorative Ambient Background Glows */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-600/20 rounded-full blur-[100px] pointer-events-none animate-bg-glow"></div>
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none animate-bg-glow" 
          style={{ animationDelay: '-5s' }}
        ></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">

          {/* LEFT: CONTACT INFO */}
          <div className="flex flex-col justify-center space-y-12">
            
            {/* Visit Our Shop */}
            <div className={`group flex items-start space-x-6 p-6 rounded-2xl border transition-colors duration-300 ${isLightMode ? 'bg-white border-slate-200 shadow-md' : 'bg-gray-900/40 border-gray-800/50 hover:bg-gray-800/50'}`}>
              <div className={`p-4 rounded-xl transition-all ${isLightMode ? 'bg-emerald-50 border border-emerald-200 text-emerald-600 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.2)]' : 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.1)] group-hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]'}`}>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h4 className={`text-xl font-bold mb-2 tracking-wide ${isLightMode ? 'text-slate-900' : 'text-white'}`}>Visit Our Shop</h4>
                <p className={`leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-gray-400'}`}>
                  204, 2nd floor, blodge:D-2<br />
                  Shree Ganesh Residency, Maitri Park, Kasheli, Bhiwandi.<br />
                  Maharashtra 421302 India
                </p>
              </div>
            </div>

            {/* Email Us */}
            <div className={`group flex items-start space-x-4 sm:space-x-6 p-5 sm:p-6 rounded-2xl border transition-colors duration-300 ${isLightMode ? 'bg-white border-slate-200 shadow-md' : 'bg-gray-900/40 border-gray-800/50 hover:bg-gray-800/50'}`}>
              <div className={`p-3 sm:p-4 rounded-xl transition-all shrink-0 ${isLightMode ? 'bg-cyan-50 border border-cyan-200 text-cyan-600 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]' : 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]'}`}>
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className={`text-lg sm:text-xl font-bold mb-2 tracking-wide ${isLightMode ? 'text-slate-900' : 'text-white'}`}>Email Us</h4>
                <a href="mailto:rv9766444@gmail.com" className={`block leading-relaxed break-all transition-colors mb-1 ${isLightMode ? 'text-slate-600 hover:text-cyan-600' : 'text-gray-400 hover:text-cyan-400'}`}>
                  rv9766444@gmail.com
                </a>
                <a href="mailto:vishwakarmaranjit8109@gmail.com" className={`block leading-relaxed break-all transition-colors ${isLightMode ? 'text-slate-600 hover:text-cyan-600' : 'text-gray-400 hover:text-cyan-400'}`}>
                  vishwakarmaranjit8109@gmail.com
                </a>
              </div>
            </div>

            {/* Call or WhatsApp */}
            <div className={`group flex items-start space-x-6 p-6 rounded-2xl border transition-colors duration-300 ${isLightMode ? 'bg-white border-slate-200 shadow-md' : 'bg-gray-900/40 border-gray-800/50 hover:bg-gray-800/50'}`}>
              <div className={`p-4 rounded-xl transition-all ${isLightMode ? 'bg-purple-50 border border-purple-200 text-purple-600 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]' : 'bg-purple-500/10 border border-purple-500/20 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.1)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]'}`}>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <h4 className={`text-xl font-bold mb-2 tracking-wide ${isLightMode ? 'text-slate-900' : 'text-white'}`}>Call or WhatsApp</h4>
                <span className={`block leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-gray-400'}`}>+91 98208 79871</span>
                <span className={`block leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-gray-400'}`}>+91 99207 06036</span>
                <span className={`block leading-relaxed mt-2 text-sm ${isLightMode ? 'text-slate-500' : 'text-gray-400'}`}>Mon - Sat, 09:00 AM - 11:00 PM</span>
                <span className={`block leading-relaxed text-sm ${isLightMode ? 'text-slate-500' : 'text-gray-400'}`}>Sun, 09:00 AM - 06:00 PM</span>
              </div>
            </div>

          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className={`backdrop-blur-xl border p-8 md:p-10 rounded-[2rem] shadow-2xl relative transition-colors duration-300 ${isLightMode ? 'bg-white border-slate-200' : 'bg-gray-950 border-gray-700/50'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-[2rem] pointer-events-none"></div>
            <h3 className={`text-3xl font-bold mb-8 transition-colors ${isLightMode ? 'text-slate-900' : 'text-white'}`}>Send a Message</h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className={`block text-sm font-semibold tracking-wide mb-2 ${isLightMode ? 'text-slate-700' : 'text-gray-400'}`}>Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all shadow-inner ${isLightMode ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400' : 'bg-gray-950/50 border-gray-700 text-white placeholder-gray-600'}`}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm font-semibold tracking-wide mb-2 ${isLightMode ? 'text-slate-700' : 'text-gray-400'}`}>Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all shadow-inner ${isLightMode ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400' : 'bg-gray-950/50 border-gray-700 text-white placeholder-gray-600'}`}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-semibold tracking-wide mb-2 ${isLightMode ? 'text-slate-700' : 'text-gray-400'}`}>Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  required
                  className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all shadow-inner resize-none ${isLightMode ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400' : 'bg-gray-950/50 border-gray-700 text-white placeholder-gray-600'}`}
                  placeholder="How can we help you today?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className={`w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-gray-950 font-black text-lg tracking-wider py-4 rounded-xl transition-all duration-300 flex justify-center items-center ${status === 'loading' ? 'opacity-75 cursor-not-allowed pointer-events-none' : 'shadow-[0_0_15px_rgba(52,211,153,0.4)] hover:shadow-[0_0_25px_rgba(52,211,153,0.7)] hover:-translate-y-1 cursor-pointer'}`}
              >
                <span>
                  {status === 'idle' && 'SEND MESSAGE'}
                  {status === 'loading' && 'SENDING...'}
                  {status === 'success' && 'MESSAGE SENT!'}
                  {status === 'error' && 'ERROR! TRY AGAIN'}
                </span>
                
                {/* Dynamic Button Icon based on State */}
                {status === 'loading' ? (
                  <svg className="w-5 h-5 ml-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                ) : status === 'success' ? (
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                ) : status === 'error' ? (
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                ) : (
                  <svg className="w-5 h-5 ml-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                )}
              </button>
            </form>
          </div>

        </div>
      </main>
    </>
  );
}