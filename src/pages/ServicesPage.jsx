import React from 'react';
import { services, processSteps } from '../data/content';
import ElementorBadge from '../components/common/ElementorBadge';
import { Building2, Compass, Wrench, DraftingCompass, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServicesPage({ onOpenQuoteModal }) {
  const getIcon = (name) => {
    switch (name) {
      case 'Building2': return <Building2 className="w-8 h-8 text-gold-400" />;
      case 'Compass': return <Compass className="w-8 h-8 text-gold-400" />;
      case 'Wrench': return <Wrench className="w-8 h-8 text-gold-400" />;
      case 'DraftingCompass': return <DraftingCompass className="w-8 h-8 text-gold-400" />;
      default: return <Building2 className="w-8 h-8 text-gold-400" />;
    }
  };

  return (
    <div className="pt-28 pb-20 font-sans animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ElementorBadge widgetName="one_source_services_master" shortcode='[one_source_section id="services_grid"]' />

        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 border border-gold-200 px-3.5 py-1 rounded-full">
            Contracting & Design Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-onyx-950 mt-4 tracking-tight">
            Our Architectural & Engineering Divisions
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Delivering structural excellence across commercial towers, luxury residential estates, and historic adaptive reuse projects.
          </p>
        </div>

        {/* Extended Service Breakdown */}
        <div className="space-y-16 mb-24">
          {services.map((srv, index) => (
            <div
              key={srv.id}
              className={`bg-white border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-premium grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:col-span-6 space-y-4">
                <div className="p-3 bg-onyx-950 rounded-xl inline-block border border-gold-500/30">
                  {getIcon(srv.iconName)}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-gold-600 block">
                  Division 0{index + 1}
                </span>
                <h2 className="text-3xl font-bold font-display text-onyx-950">
                  {srv.title}
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  {srv.fullDesc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {srv.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button
                    onClick={onOpenQuoteModal}
                    className="px-6 py-3 bg-onyx-950 hover:bg-gold-500 hover:text-onyx-950 text-gold-400 font-bold rounded-xl text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                  >
                    <span>Request Division Specs</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="h-80 lg:h-96 rounded-2xl overflow-hidden bg-onyx-950 border border-slate-200">
                  <img src={srv.image} alt={srv.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Lifecycle */}
        <div className="bg-onyx-950 text-white rounded-3xl p-8 lg:p-12 border border-gold-500/30">
          <h2 className="text-3xl font-bold font-display text-center mb-12">The One Source Construction Protocol</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((st, i) => (
              <div key={i} className="p-6 bg-onyx-900 border border-slate-800 rounded-2xl">
                <span className="text-3xl font-extrabold text-gold-gradient font-display">{st.step}</span>
                <h3 className="text-lg font-bold font-display text-white mt-2">{st.title}</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
