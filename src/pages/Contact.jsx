import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTheme } from "../context/ThemeContext";

const faqs = [
  {
    q: "Do you provide in-person site visits and measurements in Mumbai & Thane?",
    a: "Yes! Our master carpenters visit sites across Mumbai, Thane, Navi Mumbai, Bhiwandi, and Kalyan for laser-accurate measurements, material samples, and design discussions.",
  },
  {
    q: "What wood varieties and board grades do you use?",
    a: "We work primarily with Seasoned Burma Teak, American Walnut, White Oak, and ISO-certified Boiling Water Proof (BWP 710) Marine Plywood. We reject inferior particle boards.",
  },
  {
    q: "What is the typical manufacturing and installation timeline?",
    a: "Stand-alone custom pieces (beds, TV units, dining tables) take 10–14 days. Complete residential fit-outs and modular kitchens typically require 3–5 weeks including factory finishing and white-glove site installation.",
  },
  {
    q: "Do you offer warranty on hinges, fittings, and joinery?",
    a: "Yes. All our bespoke furniture carries a 10 to 15-year structural craftsmanship warranty, and German hardware fittings (Hettich, Hafele, Blum) include their official manufacturer warranties.",
  },
];

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle");
  const { isLightMode } = useTheme();
  const [selectedProjectType, setSelectedProjectType] =
    useState("Full Home Interior");
  const [openFaq, setOpenFaq] = useState(null);

  const projectTypes = [
    "Full Home Interior",
    "Modular Kitchen",
    "Wardrobe & Dressing",
    "Living Room Joinery",
    "Custom Mandir",
    "Bespoke Single Piece",
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm(
        "service_172d0i5",
        "template_3y1zzwl",
        form.current,
        "S2p2mt3IfnLxunPQH",
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
  };

  return (
    <>
      {/* HEADER WITH ADAPTIVE THEME */}
      <header
        className={`pt-32 pb-12 relative z-10 text-center px-6 overflow-hidden transition-colors duration-500 ${
          isLightMode ? "bg-slate-50 border-b border-slate-200" : "bg-gray-950"
        }`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/15 to-cyan-500/15 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto" data-aos="fade-down">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-black tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Direct Artisan Inquiries
          </span>

          <h1
            className={`text-4xl sm:text-6xl md:text-7xl font-black mb-4 tracking-tight ${
              isLightMode ? "text-slate-900" : "text-white"
            }`}
          >
            Let's <span className="animated-gradient-text">Connect.</span>
          </h1>

          <p
            className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${
              isLightMode ? "text-slate-600" : "text-gray-300"
            }`}
          >
            Have a blueprint, need custom sizing, or want to discuss a turnkey
            apartment interior? Connect directly with our workshop team.
          </p>
        </div>
      </header>

      {/* MAIN CONTACT CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-12 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 mb-20">
          {/* LEFT: INTERACTIVE CONTACT ACTION CARDS */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* CARD 1: WORKSHOP & SHOWROOM */}
            <div
              data-aos="fade-up"
              className={`p-6 rounded-3xl border transition-all group ${
                isLightMode
                  ? "bg-white border-slate-200 shadow-md"
                  : "gradient-border-luxury"
              }`}
            >
              <div className="flex items-start gap-5">
                <div className="p-3.5 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 shrink-0 text-xl group-hover:scale-110 transition-transform">
                  📍
                </div>
                <div className="flex-1">
                  <h4
                    className={`text-lg font-bold mb-1 ${isLightMode ? "text-slate-900" : "text-white"}`}
                  >
                    Visit Our Workshop
                  </h4>
                  <p
                    className={`text-xs leading-relaxed mb-3 ${isLightMode ? "text-slate-600" : "text-gray-400"}`}
                  >
                    204, 2nd floor, blodge:D-2
                    <br />
                    Shree Ganesh Residency, Maitri Park, Kasheli, Bhiwandi,
                    Maharashtra 421302
                  </p>
                  <a
                    href="https://maps.google.com/?q=Shree+Ganesh+Residency+Kasheli+Bhiwandi"
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors ${
                      isLightMode
                        ? "text-emerald-700 hover:text-emerald-800"
                        : "text-emerald-400 hover:text-emerald-300"
                    }`}
                  >
                    <span>Get Directions on Google Maps</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 2: WHATSAPP HOTLINE */}
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className={`p-6 rounded-3xl border transition-all group ${
                isLightMode
                  ? "bg-white border-slate-200 shadow-md"
                  : "gradient-border-luxury"
              }`}
            >
              <div className="flex items-start gap-5">
                <div className="p-3.5 rounded-2xl bg-teal-500/15 border border-teal-500/30 text-teal-500 shrink-0 text-xl group-hover:scale-110 transition-transform">
                  💬
                </div>
                <div className="flex-1">
                  <h4
                    className={`text-lg font-bold mb-1 ${isLightMode ? "text-slate-900" : "text-white"}`}
                  >
                    Instant WhatsApp Consultation
                  </h4>
                  <p
                    className={`text-xs mb-3 ${isLightMode ? "text-slate-600" : "text-gray-400"}`}
                  >
                    Chat directly with our master carpenter. Send photos or
                    floor plans for instantaneous estimates.
                  </p>
                  <a
                    href="https://wa.me/919820879871?text=Hello%20Rajesh%20Furniture%20Works,%20I%20would%20like%20to%20get%20a%20quote%20for%20custom%20furniture."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl btn-gradient-shimmer text-gray-950 shadow-md w-full sm:w-auto"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1 text-left">
                      <span className="text-xs font-black">
                        Chat on WhatsApp
                      </span>
                      <span className="text-[11px] font-bold opacity-90 sm:opacity-100">
                        (+91 9820879871)
                      </span>
                    </div>
                    <span className="text-sm font-bold">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 3: PHONE NUMBERS */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className={`p-6 rounded-3xl border transition-all group ${
                isLightMode
                  ? "bg-white border-slate-200 shadow-md"
                  : "gradient-border-luxury"
              }`}
            >
              <div className="flex items-start gap-5">
                <div className="p-3.5 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-500 shrink-0 text-xl group-hover:scale-110 transition-transform">
                  📞
                </div>
                <div className="flex-1">
                  <h4
                    className={`text-lg font-bold mb-1 ${isLightMode ? "text-slate-900" : "text-white"}`}
                  >
                    Phone Inquiries
                  </h4>
                  <div className="space-y-1 text-sm mb-3">
                    <a
                      href="tel:+919820879871"
                      className={`block font-bold transition-colors ${
                        isLightMode
                          ? "text-slate-900 hover:text-cyan-600"
                          : "text-white hover:text-cyan-400"
                      }`}
                    >
                      +91 98208 79871
                    </a>
                    <a
                      href="tel:+919920706036"
                      className={`block font-bold transition-colors ${
                        isLightMode
                          ? "text-slate-900 hover:text-cyan-600"
                          : "text-white hover:text-cyan-400"
                      }`}
                    >
                      +91 99207 06036
                    </a>
                  </div>
                  <p
                    className={`text-[11px] ${isLightMode ? "text-slate-500" : "text-gray-400"}`}
                  >
                    Mon - Sat: 9:00 AM - 11:00 PM | Sun: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 4: EMAIL ADDRESSES */}
            <div
              data-aos="fade-up"
              data-aos-delay="450"
              className={`p-6 rounded-3xl border transition-all group ${
                isLightMode
                  ? "bg-white border-slate-200 shadow-md"
                  : "gradient-border-luxury"
              }`}
            >
              <div className="flex items-start gap-5">
                <div className="p-3.5 rounded-2xl bg-purple-500/15 border border-purple-500/30 text-purple-500 shrink-0 text-xl group-hover:scale-110 transition-transform">
                  ✉️
                </div>
                <div className="flex-1 min-w-0">
                  <h4
                    className={`text-lg font-bold mb-1 ${isLightMode ? "text-slate-900" : "text-white"}`}
                  >
                    Email Inquiries
                  </h4>
                  <div className="space-y-1 text-xs">
                    <a
                      href="mailto:rv9766444@gmail.com"
                      className={`block truncate transition-colors ${
                        isLightMode
                          ? "text-slate-700 hover:text-purple-700 font-medium"
                          : "text-gray-300 hover:text-purple-400"
                      }`}
                    >
                      rv9766444@gmail.com
                    </a>
                    <a
                      href="mailto:vishwakarmaranjit8109@gmail.com"
                      className={`block truncate transition-colors ${
                        isLightMode
                          ? "text-slate-700 hover:text-purple-700 font-medium"
                          : "text-gray-300 hover:text-purple-400"
                      }`}
                    >
                      vishwakarmaranjit8109@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: COMPREHENSIVE INQUIRY FORM */}
          <div
            className="lg:col-span-7"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              className={`p-8 sm:p-10 rounded-[2.5rem] border shadow-xl relative ${
                isLightMode
                  ? "bg-white border-slate-200 shadow-xl"
                  : "glass-panel border-white/10 shadow-2xl"
              }`}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

              <div className="relative z-10">
                <h3
                  className={`text-2xl sm:text-3xl font-black mb-2 ${isLightMode ? "text-slate-900" : "text-white"}`}
                >
                  Send A Project Blueprint
                </h3>
                <p
                  className={`text-xs sm:text-sm mb-6 ${isLightMode ? "text-slate-600" : "text-gray-400"}`}
                >
                  Fill out the form below. We will analyze your requirements and
                  get back to you within 24 hours.
                </p>

                {/* Project Type Chips */}
                <div className="mb-6">
                  <label
                    className={`block text-xs font-bold tracking-wider uppercase mb-2 ${
                      isLightMode ? "text-slate-700" : "text-gray-300"
                    }`}
                  >
                    Select Woodwork Category
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setSelectedProjectType(type)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          selectedProjectType === type
                            ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-gray-950 shadow-md font-black"
                            : isLightMode
                              ? "bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200"
                              : "bg-white/5 border border-white/10 text-gray-400 hover:text-white"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <form ref={form} onSubmit={sendEmail} className="space-y-5">
                  <input
                    type="hidden"
                    name="project_type"
                    value={selectedProjectType}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className={`block text-xs font-bold tracking-wider uppercase mb-1.5 ${
                          isLightMode ? "text-slate-700" : "text-gray-300"
                        }`}
                      >
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all ${
                          isLightMode
                            ? "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-emerald-500"
                            : "bg-black/40 border-white/10 text-white placeholder-gray-500 focus:border-emerald-400"
                        }`}
                        placeholder="Vikram Sharma"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className={`block text-xs font-bold tracking-wider uppercase mb-1.5 ${
                          isLightMode ? "text-slate-700" : "text-gray-300"
                        }`}
                      >
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all ${
                          isLightMode
                            ? "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-emerald-500"
                            : "bg-black/40 border-white/10 text-white placeholder-gray-500 focus:border-emerald-400"
                        }`}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-xs font-bold tracking-wider uppercase mb-1.5 ${
                        isLightMode ? "text-slate-700" : "text-gray-300"
                      }`}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all ${
                        isLightMode
                          ? "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-emerald-500"
                          : "bg-black/40 border-white/10 text-white placeholder-gray-500 focus:border-emerald-400"
                      }`}
                      placeholder="vikram@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className={`block text-xs font-bold tracking-wider uppercase mb-1.5 ${
                        isLightMode ? "text-slate-700" : "text-gray-300"
                      }`}
                    >
                      City / Area (e.g. Thane, Powai, Andheri)
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all ${
                        isLightMode
                          ? "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-emerald-500"
                          : "bg-black/40 border-white/10 text-white placeholder-gray-500 focus:border-emerald-400"
                      }`}
                      placeholder="Hiranandani Estate, Thane West"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-xs font-bold tracking-wider uppercase mb-1.5 ${
                        isLightMode ? "text-slate-700" : "text-gray-300"
                      }`}
                    >
                      Describe Your Requirements *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all resize-none ${
                        isLightMode
                          ? "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-emerald-500"
                          : "bg-black/40 border-white/10 text-white placeholder-gray-500 focus:border-emerald-400"
                      }`}
                      placeholder="Tell us about dimensions, timber preferences (Teak, Marine Ply), or target completion date..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={`w-full py-4 rounded-xl btn-gradient-shimmer text-gray-950 font-black text-sm tracking-wider flex justify-center items-center gap-2 shadow-lg cursor-pointer ${
                      status === "loading"
                        ? "opacity-75 cursor-not-allowed pointer-events-none"
                        : ""
                    }`}
                  >
                    <span>
                      {status === "idle" && "SUBMIT CONSULTATION REQUEST →"}
                      {status === "loading" && "TRANSMITTING MESSAGE..."}
                      {status === "success" && "✓ MESSAGE SENT SUCCESSFULLY!"}
                      {status === "error" && "✕ FAILED! PLEASE CALL DIRECTLY"}
                    </span>

                    {status === "loading" && (
                      <svg
                        className="w-4 h-4 animate-spin"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        ></path>
                      </svg>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ ACCORDION SECTION */}
        <section
          className={`pt-12 border-t ${isLightMode ? "border-slate-200" : "border-white/10"}`}
        >
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-xs font-black tracking-widest text-cyan-500 uppercase block mb-2">
              Common Questions
            </span>
            <h2
              className={`text-2xl sm:text-4xl font-black tracking-tight ${isLightMode ? "text-slate-900" : "text-white"}`}
            >
              Frequently Asked{" "}
              <span className="animated-gradient-text">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border overflow-hidden transition-all ${
                  isLightMode
                    ? "bg-white border-slate-200 shadow-sm"
                    : "glass-panel border-white/10"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 cursor-pointer"
                >
                  <span
                    className={`text-sm sm:text-base font-bold ${isLightMode ? "text-slate-900" : "text-white"}`}
                  >
                    {faq.q}
                  </span>
                  <span className="text-emerald-500 text-lg font-black transition-transform duration-300">
                    {openFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {openFaq === idx && (
                  <div
                    className={`px-6 pb-6 text-xs sm:text-sm leading-relaxed border-t pt-4 ${
                      isLightMode
                        ? "border-slate-100 text-slate-600"
                        : "border-white/5 text-gray-300"
                    }`}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
