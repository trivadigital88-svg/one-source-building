import React from 'react';
import { testimonials } from '../../data/content';
import { Star, Play, Quote } from 'lucide-react';

export default function TestimonialsCarousel({ onOpenVideo }) {
  return (
    <section className="py-24 bg-warm-100 text-onyx-950 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 border border-gold-200 px-3.5 py-1 rounded-full">
            Client Endorsements & Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-onyx-950 mt-4 tracking-tight">
            Trusted by Commercial Developers & Homeowners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-slate-200 rounded-2xl p-8 shadow-premium hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative"
            >
              <Quote className="w-10 h-10 text-gold-200 absolute top-6 right-6 pointer-events-none" />

              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold font-display text-onyx-950">{t.name}</h4>
                    <span className="text-xs text-gold-600 font-semibold block">{t.role}</span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">{t.company}</span>
                  </div>

                  <button
                    onClick={() => onOpenVideo(t.videoUrl)}
                    className="p-3 bg-onyx-950 text-gold-400 hover:bg-gold-500 hover:text-onyx-950 rounded-xl transition-colors shadow-md"
                    title="Watch Video Testimonial"
                  >
                    <Play className="w-4 h-4 fill-current" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
