import React from 'react';
import { stats } from '../../data/content';
import { Award, ShieldCheck, Clock, Building } from 'lucide-react';

export default function StatsCounter() {
  const getIcon = (idx) => {
    switch (idx) {
      case 0: return <Clock className="w-6 h-6 text-gold-400" />;
      case 1: return <Building className="w-6 h-6 text-gold-400" />;
      case 2: return <ShieldCheck className="w-6 h-6 text-gold-400" />;
      case 3: return <Award className="w-6 h-6 text-gold-400" />;
      default: return <Award className="w-6 h-6 text-gold-400" />;
    }
  };

  return (
    <section className="py-20 bg-onyx-950 text-white font-sans border-y border-gold-500/20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((st, idx) => (
            <div
              key={idx}
              className="bg-onyx-900/80 border border-slate-800 p-8 rounded-2xl hover:border-gold-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 bg-onyx-950 rounded-xl border border-slate-800 group-hover:scale-110 transition-transform">
                  {getIcon(idx)}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-gold-500 bg-gold-950/60 px-2.5 py-1 rounded border border-gold-600/30">
                  {st.suffix}
                </span>
              </div>

              <div className="mt-6">
                <div className="text-4xl lg:text-5xl font-extrabold font-display text-white group-hover:text-gold-400 transition-colors">
                  {st.value}
                </div>
                <div className="text-sm font-bold text-slate-200 mt-2">
                  {st.label}
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {st.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
