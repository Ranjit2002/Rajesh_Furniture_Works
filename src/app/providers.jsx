'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider } from '../context/ThemeContext';
import { scrollToTop } from '../utils/scrollUtils';

export default function Providers({ children }) {
  const pathname = usePathname();

  // Initialize AOS once
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 30,
    });
  }, []);

  // Refresh AOS & Scroll to top on route change
  useEffect(() => {
    scrollToTop({ smooth: false });
    AOS.refresh();
  }, [pathname]);

  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
