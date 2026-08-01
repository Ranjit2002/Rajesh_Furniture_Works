import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Collections from './pages/Collections';
import Living from './pages/Living';
import Bedroom from './pages/Bedroom';

export default function App() {
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