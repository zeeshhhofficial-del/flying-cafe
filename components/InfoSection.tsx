
import React from 'react';
import { Clock, Car, Coffee, MapPin, Wallet, Star } from 'lucide-react';
import { CAFE_DETAILS } from '../constants';

const InfoSection: React.FC = () => {
  const features = [
    { icon: <Clock className="w-8 h-8" />, title: "Open 24/7", desc: "Craving at 3 AM? We're open and ready to serve." },
    { icon: <Car className="w-8 h-8" />, title: "Drive-through", desc: "Quick pick-ups for your commute through Pune." },
    { icon: <Wallet className="w-8 h-8" />, title: "Best Value", desc: "Premium experience within ₹200–400 range." },
    { icon: <Coffee className="w-8 h-8" />, title: "Fresh Brews", desc: "Artisan coffee beans roasted to perfection." },
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
      {/* Decorative Text */}
      <div className="absolute top-1/2 -left-10 -translate-y-1/2 text-[15rem] font-serif font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap">
        EXPERIENCE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">About the Cafe</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
              A Pune Landmark <br />for Coffee Connoisseurs.
            </h3>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              {CAFE_DETAILS.description} Located in the historic district of Shivajinagar, we've become the de-facto meeting point for midnight conversations and early morning brainstorming sessions.
            </p>
            
            <div className="space-y-4 mb-8">
               <div className="flex items-center gap-3 text-white/90">
                 <div className="p-2 bg-amber-500/10 rounded-full text-amber-500">
                    <Star size={20} fill="currentColor" />
                 </div>
                 <span className="font-medium">4.6 Rated based on 1,361+ Genuine Google Reviews</span>
               </div>
               <div className="flex items-center gap-3 text-white/90">
                 <div className="p-2 bg-amber-500/10 rounded-full text-amber-500">
                    <MapPin size={20} />
                 </div>
                 <span className="font-medium">Shivajinagar, Pune - Heart of the City</span>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div 
                key={i} 
                className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-all duration-300 group perspective-1000"
              >
                <div className="text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300 transform preserve-3d">
                  {f.icon}
                </div>
                <h4 className="text-white font-bold text-xl mb-2">{f.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
