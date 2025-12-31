
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-black overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs mb-4">Social Proof</h2>
        <h3 className="text-5xl font-serif font-bold text-white mb-6">What Our Guests Say</h3>
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="flex text-amber-500">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
          <span className="text-white font-bold text-xl">4.6/5.0</span>
        </div>
        <p className="text-white/40">Aggregated from 1,361+ verified reviews</p>
      </div>

      {/* Marquee Effect */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-8 py-8 px-4">
          {[...REVIEWS, ...REVIEWS].map((review, i) => (
            <div 
              key={`${review.id}-${i}`}
              className="inline-block w-[400px] bg-white/[0.02] border border-white/5 p-10 rounded-3xl whitespace-normal hover:bg-white/[0.04] transition-all hover:border-amber-500/20 group-hover:pause"
            >
              <Quote className="text-amber-500/20 mb-6 w-10 h-10" />
              <p className="text-white/80 text-lg mb-8 italic font-light leading-relaxed">
                "{review.comment}"
              </p>
              <div className="flex items-center justify-between border-t border-white/5 pt-6">
                <div>
                  <h4 className="text-white font-bold">{review.author}</h4>
                  <p className="text-white/30 text-xs uppercase tracking-widest">{review.date}</p>
                </div>
                <div className="flex text-amber-500">
                  {[...Array(review.rating)].map((_, j) => <Star key={j} size={12} fill="currentColor" />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .group-hover\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Reviews;
