import React, { useState } from 'react';
import { 
  Building2, Compass, Wrench, DraftingCompass, ArrowRight, CheckCircle2, X 
} from 'lucide-react';
import { services } from '../../data/content';

export default function ServicesGrid({ setActivePage }) {
  const [selectedService, setSelectedService] = useState(null);

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-8 h-8 text-gold-400" />;
      case 'Compass': return <Compass className="w-8 h-8 text-gold-400" />;
      case 'Wrench': return <Wrench className="w-8 h-8 text-gold-400" />;
      case 'DraftingCompass': return <DraftingCompass className="w-8 h-8 text-gold-400" />;
      default: return <Building2 className="w-8 h-8 text-gold-400" />;
    }
  };

  return (
    <section className="py-24 bg-warm-100 text-onyx-900 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 border border-gold-200 px-3.5 py-1 rounded-full">
            Turnkey Construction & Architectural Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-onyx-950 mt-4 tracking-tight">
            Specialized Engineering & Interior Disciplines
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            From groundbreaking structural steel foundations to hand-crafted Italian marble fitouts, our multi-disciplinary divisions deliver unparalleled craftsmanship.
          </p>
        </div>

        {/* 4 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((srv) => (
            <div
              key={srv.id}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-premium hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between group"
            >
              <div>
                <div className="p-4 bg-onyx-950 rounded-xl inline-block border border-gold-500/30 group-hover:scale-110 transition-transform duration-300">
                  {getServiceIcon(srv.iconName)}
                </div>

                <div className="mt-6">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gold-600">
                    {srv.category}
                  </span>
                  <h3 className="text-xl font-bold font-display text-onyx-950 mt-1 group-hover:text-gold-600 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                    {srv.shortDesc}
                  </p>
                </div>

                <ul className="mt-6 space-y-2 text-xs text-slate-700">
                  {srv.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(srv)}
                  className="text-xs font-bold uppercase tracking-wider text-onyx-950 hover:text-gold-600 transition-colors flex items-center gap-1.5"
                >
                  <span>Read Full Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-onyx-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 lg:p-8 relative shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-onyx-950 rounded-full bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="w-full h-56 object-cover rounded-xl mb-6 border border-slate-200"
            />

            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 border border-gold-200 px-3 py-1 rounded-full">
              {selectedService.category} Division
            </span>

            <h3 className="text-2xl font-bold font-display text-onyx-950 mt-2">
              {selectedService.title}
            </h3>

            <p className="text-slate-600 text-sm mt-4 leading-relaxed">
              {selectedService.fullDesc}
            </p>

            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-onyx-950 mb-3">Key Capabilities & Standards:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedService.features.map((feat, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-semibold text-onyx-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 rounded-xl border border-slate-300 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedService(null);
                  setActivePage('contact');
                  window.scrollTo(0,0);
                }}
                className="px-5 py-2.5 rounded-xl bg-gold-gradient hover:bg-gold-gradient-hover text-onyx-950 text-xs font-bold uppercase tracking-wider shadow-md"
              >
                Book Division Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
