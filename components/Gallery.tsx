
import React, { useState } from 'react';
import { GALLERY } from '../constants';
import { Maximize2, X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'food' | 'interior' | 'vibes'>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'food', label: 'Food & Drinks' },
    { id: 'interior', label: 'Café Interior' },
    { id: 'vibes', label: 'Night Vibes' }
  ];

  const filteredGallery = activeTab === 'all' 
    ? GALLERY 
    : GALLERY.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <h2 className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs mb-4">Visual Story</h2>
            <h3 className="text-5xl font-serif font-bold text-white">Cafe Moments</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeTab === cat.id 
                    ? 'bg-amber-500 text-black' 
                    : 'text-white/40 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div 
              key={item.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(item.url)}
            >
              <img 
                src={item.url} 
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-50"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="text-white w-8 h-8 mb-2" />
                <p className="text-white font-serif italic text-lg">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-10 right-10 text-white hover:text-amber-500">
            <X size={40} />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged view"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-scale-up"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
