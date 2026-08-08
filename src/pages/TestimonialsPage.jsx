import React from 'react';
import { testimonials } from '../data/content';
import ElementorBadge from '../components/common/ElementorBadge';
import { Star, Quote, Play, CheckCircle2 } from 'lucide-react';

export default function TestimonialsPage({ onOpenVideo, onOpenQuoteModal }) {
  return (
    <div className="pt-28 pb-20 font-sans animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ElementorBadge widgetName="one_source_testimonials" shortcode='[one_source_section id="testimonials_grid"]' />

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 border border-gold-200 px-3.5 py-1 rounded-full">
            Client Feedback & Audits
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-onyx-950 mt-4">
            Independent Client Reviews & Video Testimonials
          </h1>
          <p className="text-slate-600 text-base mt-3">
            Audited post-handover feedback from real estate developers, institutional investors, and estate owners.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-premium flex flex-col justify-between relative">
              <Quote className="w-10 h-10 text-gold-200 absolute top-6 right-6" />
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">"{t.quote}"</p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                <div>
                  <h4 className="text-base font-bold text-onyx-950">{t.name}</h4>
                  <span className="text-xs text-gold-600 font-semibold">{t.role}</span>
                </div>
                <button
                  onClick={() => onOpenVideo(t.videoUrl)}
                  className="p-3 bg-onyx-950 text-gold-400 hover:bg-gold-500 hover:text-onyx-950 rounded-xl transition-colors"
                >
                  <Play className="w-4 h-4 fill-current" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-onyx-950 text-white rounded-3xl p-8 lg:p-12 text-center border border-gold-500/30">
          <h2 className="text-3xl font-bold font-display">Experience the One Source Difference</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2">
            Schedule a private walkthrough of one of our active construction sites or completed penthouse fitouts.
          </p>
          <button
            onClick={onOpenQuoteModal}
            className="mt-6 px-8 py-3.5 bg-gold-gradient text-onyx-950 font-bold rounded-xl text-xs uppercase tracking-wider shadow-gold-glow"
          >
            Book Site Walkthrough
          </button>
        </div>

      </div>
    </div>
  );
}
