import React from 'react';
import { ShieldCheck, Award, Compass } from 'lucide-react';
import ElementorBadge from '../components/common/ElementorBadge';

export default function AboutPage({ onOpenQuoteModal }) {
  const team = [
    {
      name: "Marcus Vance, PE",
      title: "Chief Executive Officer & Founder",
      bio: "25+ years leading high-rise commercial construction and heavy structural steel engineering across North America.",
      image: "/images/hero_construction.jpg"
    },
    {
      name: "Sophia Laurent, AIA",
      title: "Head of Interior Architecture",
      bio: "Former lead designer at Milan Architectural Studio, specializing in bespoke penthouse fitouts and rare stone procurement.",
      image: "/images/luxury_interior.jpg"
    },
    {
      name: "Eng. Richard Sterling",
      title: "Chief Technology & Safety Officer",
      bio: "Pioneer in low-carbon hydrogen steel retrofits and 3D BIM structural modeling with an unbroken zero-incident safety record.",
      image: "/images/renovation_project.jpg"
    }
  ];

  return (
    <div className="pt-4 pb-20 font-sans animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ElementorBadge widgetName="one_source_about" shortcode='[one_source_section id="about_us"]' />

        {/* Hero Header */}
        <div className="bg-onyx-950 text-white rounded-3xl p-8 lg:p-16 relative overflow-hidden border border-gold-500/30 shadow-2xl mb-16 mt-8 lg:mt-12">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-950/80 border border-gold-600/40 px-3.5 py-1 rounded-full">
              Corporate Heritage & Engineering Excellence
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white mt-4 tracking-tight">
              Building Legacy Structures with <span className="text-gold-gradient">Uncompromising Precision</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mt-6 leading-relaxed">
              Founded in 2008, One Source Building was established on a singular premise: to unify general contracting, structural engineering, and luxury interior design under one accountable leadership team.
            </p>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-premium">
            <ShieldCheck className="w-10 h-10 text-gold-500 mb-4" />
            <h3 className="text-xl font-bold font-display text-onyx-950">Safety First Culture</h3>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed">
              100% OSHA-compliant site safety protocols backed by daily drone inspections and third-party structural audits.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-premium">
            <Award className="w-10 h-10 text-gold-500 mb-4" />
            <h3 className="text-xl font-bold font-display text-onyx-950">LEED & Well Certified</h3>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed">
              Pioneering green concrete formulations, thermal envelope glass, and energy-neutral HVAC building systems.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-premium">
            <Compass className="w-10 h-10 text-gold-500 mb-4" />
            <h3 className="text-xl font-bold font-display text-onyx-950">BIM 3D Integration</h3>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed">
              Building Information Modeling (BIM) guarantees clash-free MEP layouts and exact quantity takeoffs before groundbreaking.
            </p>
          </div>
        </div>

        {/* Executive Team */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 border border-gold-200 px-3 py-1 rounded-full">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-onyx-950 mt-3">
              Executive Engineering Board
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((m, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-premium">
                <div className="h-64 overflow-hidden bg-onyx-950">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-display text-onyx-950">{m.name}</h3>
                  <span className="text-xs font-semibold text-gold-600 uppercase tracking-wider block mt-0.5">{m.title}</span>
                  <p className="text-slate-600 text-xs mt-3 leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-onyx-900 text-white rounded-2xl p-8 lg:p-12 text-center border border-gold-500/30">
          <h2 className="text-3xl font-bold font-display">Partner with One Source Building</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2">
            Discuss your upcoming commercial development or luxury residential estate with our executive team.
          </p>
          <button
            onClick={onOpenQuoteModal}
            className="mt-6 px-8 py-3.5 bg-gold-gradient hover:bg-gold-gradient-hover text-onyx-950 font-bold rounded-xl text-xs uppercase tracking-wider shadow-gold-glow"
          >
            Schedule Boardroom Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
