import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import ServicesGrid from '../components/home/ServicesGrid';
import StatsCounter from '../components/home/StatsCounter';
import FeaturedProjects from '../components/home/FeaturedProjects';
import ProcessTimeline from '../components/home/ProcessTimeline';
import TestimonialsCarousel from '../components/home/TestimonialsCarousel';
import PartnersCarousel from '../components/home/PartnersCarousel';
import QuoteCTA from '../components/home/QuoteCTA';
import ElementorBadge from '../components/common/ElementorBadge';
import { newsArticles } from '../data/content';
import { ArrowRight, Calendar, User, BookOpen } from 'lucide-react';

export default function HomePage({ setActivePage, onSelectProject, onOpenQuoteModal, onOpenVideo }) {
  return (
    <div className="animate-fadeIn">
      {/* Elementor Embed Notification Bar for WordPress Developers */}
      <ElementorBadge 
        widgetName="one_source_home_hero"
        shortcode='[one_source_section id="home_master"]' 
      />

      {/* Hero Banner Slider */}
      <HeroSlider setActivePage={setActivePage} onOpenQuoteModal={onOpenQuoteModal} />

      {/* Services Grid */}
      <ServicesGrid setActivePage={setActivePage} />

      {/* Achievement Counter */}
      <StatsCounter />

      {/* Featured Projects Portfolio */}
      <FeaturedProjects onSelectProject={onSelectProject} setActivePage={setActivePage} />

      {/* 4-Step Construction Framework */}
      <ProcessTimeline />

      {/* Client Reviews */}
      <TestimonialsCarousel onOpenVideo={onOpenVideo} />

      {/* Brand Partners */}
      <PartnersCarousel />

      {/* Latest Construction & Architectural News Highlights */}
      <section className="py-20 bg-warm-50 text-onyx-950 font-sans border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 border border-gold-200 px-3.5 py-1 rounded-full">
                Engineering & Design Journal
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-onyx-950 mt-3">
                Latest Insights & Industry Updates
              </h2>
            </div>
            <button
              onClick={() => { setActivePage('news'); window.scrollTo(0,0); }}
              className="text-xs font-bold uppercase tracking-wider text-onyx-950 hover:text-gold-600 flex items-center gap-1"
            >
              <span>Explore Journal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => { setActivePage('news'); window.scrollTo(0,0); }}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-premium hover:shadow-xl transition-all group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden bg-onyx-950">
                    <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold-600">{art.category}</span>
                    <h3 className="text-lg font-bold font-display text-onyx-950 mt-1 group-hover:text-gold-600 transition-colors line-clamp-2">
                      {art.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                      {art.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex justify-between items-center text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-gold-500" />
                    <span>{art.date}</span>
                  </span>
                  <span>{art.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote & Estimator Calculator CTA */}
      <QuoteCTA onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
}
