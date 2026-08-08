import React from 'react';
import { processSteps } from '../../data/content';
import { ShieldCheck } from 'lucide-react';

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-onyx-950 text-white font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-950/60 border border-gold-600/30 px-3.5 py-1 rounded-full">
            Standardized Construction Delivery
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white mt-4 tracking-tight">
            Our 4-Phase Engineering Framework
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            Eliminating budget overruns and schedule delays through rigorous BIM modeling, daily drone audits, and fixed-price contracts.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-onyx-900 border border-slate-800 rounded-2xl p-6 hover:border-gold-500/40 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-extrabold font-display text-gold-gradient">
                    {step.step}
                  </span>
                  <ShieldCheck className="w-5 h-5 text-gold-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-xl font-bold font-display text-white mt-6 group-hover:text-gold-400 transition-colors">
                  {step.title}
                </h3>

                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 text-[11px] font-semibold text-slate-500 flex items-center justify-between">
                <span>Phase 0{idx + 1} Milestone</span>
                <span className="text-gold-500">Verified & Audited</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
