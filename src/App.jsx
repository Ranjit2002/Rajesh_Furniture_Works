import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Collections from './pages/Collections';
import Living from './pages/Living';
import Bedroom from './pages/Bedroom';

export default function App() {
  const location = useLocation();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true, 
      offset: 50,
    });
  }, []);

  // ONLY refresh on page change, NOT on theme change (stops the bouncing!)
  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);
  
  return (
    <div className="overflow-x-hidden antialiased font-sans min-h-screen selection:bg-emerald-500/30">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/living" element={<Living />} />
        <Route path="/bedroom" element={<Bedroom />} />
      </Routes>
      <Footer />
    </div>
  );
}