import './globals.css';
import Providers from './providers';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import FloatingBackToTop from '../components/FloatingBackToTop';

import { basePath } from '../utils/paths';

export const metadata = {
  title: 'RAJESH FURNITURE WORKS | Bespoke Woodcraft & Interiors',
  description: 'Rajesh Furniture Works - Bespoke architectural furniture, custom woodcraft, modular kitchens, and luxury home interiors since 2004.',
  icons: {
    icon: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{ backgroundColor: '#090d16', color: '#f1f5f9' }}
        className="overflow-x-hidden antialiased font-sans min-h-screen selection:bg-emerald-500/30 selection:text-emerald-200 bg-gray-950 text-gray-100"
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <FloatingWhatsApp />
          <FloatingBackToTop />
        </Providers>
      </body>
    </html>
  );
}
