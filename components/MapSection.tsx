
import React from 'react';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import { CAFE_DETAILS } from '../constants';

const MapSection: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="bg-white/[0.02] border border-white/5 p-12 rounded-3xl flex flex-col justify-center">
            <h2 className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs mb-4">Find Us</h2>
            <h3 className="text-5xl font-serif font-bold text-white mb-8">Visit the Gypsy's Den</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-xl text-amber-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Our Address</h4>
                  <p className="text-white/50 leading-relaxed">{CAFE_DETAILS.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-xl text-amber-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Call Us</h4>
                  <p className="text-white/50 leading-relaxed">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-xl text-amber-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <p className="text-white/50 leading-relaxed">hello@cafeflyinggypsy.in</p>
                </div>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Cafe+Flying+Gypsy's+Shivajinagar+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 text-black py-4 px-8 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white transition-all transform hover:scale-[1.02]"
            >
              <Navigation size={20} /> Start Navigation
            </a>
          </div>

          <div className="h-[600px] rounded-3xl overflow-hidden grayscale contrast-125 border border-white/5 relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.125!2d73.84!3d18.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06fa5b40d1d%3A0x19a0a811c03e8c95!2sCafe%20Flying%20Gypsy&#39;s!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Cafe Location"
              className="group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg text-white text-xs border border-white/10 uppercase tracking-widest">
              Live Location
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
