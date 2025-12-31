
import React from 'react';
import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Coffee className="text-amber-500 w-8 h-8" />
              <span className="text-2xl font-serif font-bold tracking-tighter text-white">
                FLYING GYPSY'S
              </span>
            </div>
            <p className="text-white/40 max-w-sm font-light">
              Elevating Pune's coffee culture since 2018. Your sanctuary for night shifts, early starts, and everything in between.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Follow the Journey</h4>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-full hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-xs uppercase tracking-widest font-medium">
          <p>© 2024 CAFE FLYING GYPSY'S. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
          </div>
          <p>BUILT FOR COFFEE LOVERS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
