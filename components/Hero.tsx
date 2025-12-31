
import React, { useEffect, useState } from 'react';
import { ChevronDown, MapPin, ExternalLink } from 'lucide-react';
import { CAFE_DETAILS } from '../constants';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with Parallax */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-100 scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&q=80&w=1600')`,
          transform: `translateY(${offset * 0.4}px)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl perspective-1000">
        <div 
          className="preserve-3d transition-transform duration-500 hover:rotate-x-2"
          style={{ transform: `translateY(${offset * -0.1}px)` }}
        >
          <h2 className="text-amber-500 font-medium tracking-[0.3em] uppercase mb-4 text-sm sm:text-base animate-fade-in">
            EST. 2018 • PUNE, MH
          </h2>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            CAFE <br />
            <span className="text-amber-500 italic">FLYING</span> GYPSY'S
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light tracking-wide">
            Experience Pune's finest 24×7 coffee culture in the heart of Shivajinagar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#menu"
              className="w-full sm:w-auto px-10 py-4 bg-amber-500 text-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 transform hover:scale-105 rounded-sm"
            >
              View Menu
            </a>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Cafe+Flying+Gypsy's+Shivajinagar+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold uppercase tracking-widest hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 rounded-sm"
            >
              Get Directions <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 animate-bounce cursor-pointer flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-[0.2em] font-medium">Discover</span>
        <ChevronDown size={24} />
      </div>

      {/* Stats Overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between gap-8 text-white/90">
          <div className="flex items-center gap-3">
            <div className="h-10 w-[1px] bg-amber-500/50 hidden md:block" />
            <div>
              <p className="text-xs text-amber-500 font-bold uppercase tracking-tighter">Rating</p>
              <p className="text-xl font-serif">⭐ 4.6 (1.3k+ reviews)</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-[1px] bg-amber-500/50 hidden md:block" />
            <div>
              <p className="text-xs text-amber-500 font-bold uppercase tracking-tighter">Hours</p>
              <p className="text-xl font-serif">24 Hours / 7 Days</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-[1px] bg-amber-500/50 hidden md:block" />
            <div>
              <p className="text-xs text-amber-500 font-bold uppercase tracking-tighter">Location</p>
              <p className="text-xl font-serif">Shivajinagar, Pune</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
