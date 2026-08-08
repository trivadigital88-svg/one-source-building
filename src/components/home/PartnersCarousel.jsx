import React from 'react';
import { partners } from '../../data/content';
import { Shield } from 'lucide-react';

export default function PartnersCarousel() {
  return (
    <section className="py-12 bg-onyx-950 border-y border-slate-800 text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 flex-shrink-0">
            <Shield className="w-5 h-5 text-gold-400" />
            <span className="text-xs uppercase tracking-widest font-bold text-slate-400">
              Trusted Materials & Equipment Partners
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 w-full items-center justify-items-center">
            {partners.map((p, idx) => (
              <div
                key={idx}
                className="px-4 py-2 bg-onyx-900 border border-slate-800/80 rounded-xl text-slate-300 font-display font-extrabold text-xs tracking-wider uppercase hover:border-gold-500/40 hover:text-gold-400 transition-colors w-full text-center"
              >
                {p.logo}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
