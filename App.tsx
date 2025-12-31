
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-amber-500 selection:text-black">
      <Navbar scrolled={scrolled} />
      
      <main>
        <Hero />
        <InfoSection />
        <Menu />
        <Gallery />
        <Reviews />
        <MapSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
