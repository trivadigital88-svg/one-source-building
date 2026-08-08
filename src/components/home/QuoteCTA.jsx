import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function QuoteCTA({ onOpenQuoteModal }) {
  const [projectType, setProjectType] = useState('Commercial');
  const [sqft, setSqft] = useState(5000);

  // Estimator logic
  const costPerSqft = projectType === 'Commercial' ? 280 : projectType === 'Interiors' ? 220 : 310;
  const estimatedMin = Math.round((sqft * costPerSqft * 0.9) / 1000);
  const estimatedMax = Math.round((sqft * costPerSqft * 1.15) / 1000);

  return (
    <section className="py-24 bg-onyx-900 text-white font-sans relative overflow-hidden">
      {/* Background Gold Accent Mesh */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-onyx-950 border border-gold-500/40 rounded-3xl p-8 lg:p-14 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-950 border border-gold-600/40 text-gold-400 text-xs font-bold uppercase tracking-widest">
              <Calculator className="w-3.5 h-3.5" />
              <span>Instant Cost & Feasibility Calculator</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
              Ready to Realize Your <span className="text-gold-gradient">Architectural Vision?</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Use our interactive estimator to model budgetary ranges for your commercial high-rise, penthouse interior fitout, or historic renovation project.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Guaranteed Maximum Price (GMP) Contracts</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>10-Year Structural Structural Guarantee</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Full BIM 3D Structural Modeling Included</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Zoning & Municipal Permitting Assistance</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Estimator Card */}
          <div className="lg:col-span-5 bg-onyx-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold font-display text-white flex items-center justify-between border-b border-slate-800 pb-3">
              <span>Interactive Estimator</span>
              <span className="text-xs text-gold-400 font-medium">Step 1 of 2</span>
            </h3>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Project Sector</label>
              <div className="grid grid-cols-3 gap-2">
                {['Commercial', 'Interiors', 'Renovation'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setProjectType(type)}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                      projectType === type
                        ? 'bg-gold-500 text-onyx-950 shadow-md'
                        : 'bg-onyx-950 text-slate-300 border border-slate-700 hover:bg-onyx-800'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                <span>Estimated Area</span>
                <span className="text-gold-400 font-display text-sm">{sqft.toLocaleString()} sq. ft.</span>
              </div>
              <input
                type="range"
                min="1000"
                max="50000"
                step="500"
                value={sqft}
                onChange={(e) => setSqft(Number(e.target.value))}
                className="w-full accent-gold-500 bg-onyx-950 rounded-lg cursor-pointer"
              />
            </div>

            {/* Price Output */}
            <div className="bg-onyx-950 border border-gold-500/30 rounded-xl p-4 text-center">
              <span className="text-[11px] uppercase tracking-widest font-bold text-slate-400 block">Estimated Budget Range</span>
              <div className="text-2xl sm:text-3xl font-extrabold font-display text-gold-gradient mt-1">
                ${estimatedMin}K - ${estimatedMax}K
              </div>
              <span className="text-[10px] text-slate-500 block mt-1">Includes engineering schematics, structural labor, and materials</span>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="w-full py-3.5 rounded-xl bg-gold-gradient hover:bg-gold-gradient-hover text-onyx-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow transition-all flex items-center justify-center gap-2"
            >
              <span>Lock In Estimate & Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
