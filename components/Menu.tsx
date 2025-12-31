
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Quick Bites', 'Mains', 'Beverages', 'Desserts'];

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs mb-4">The Selection</h2>
          <h3 className="text-5xl font-serif font-bold text-white">Our Popular Items</h3>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' 
                  : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group relative bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all duration-500 perspective-1000"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-amber-500 font-bold px-4 py-2 rounded-full text-sm">
                  {item.price}
                </div>
              </div>
              
              <div className="p-8 group-hover:translate-y-[-5px] transition-transform duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-2xl font-serif font-bold text-white group-hover:text-amber-500 transition-colors">
                    {item.name}
                  </h4>
                  <span className="text-[10px] text-amber-500 font-black uppercase tracking-widest border border-amber-500/30 px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
                <p className="text-white/40 text-sm font-light leading-relaxed">
                  {item.description}
                </p>
                <button className="mt-6 w-full py-3 bg-white/5 border border-white/10 rounded-xl text-white font-medium hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300 text-sm uppercase tracking-widest">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
