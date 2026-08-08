import React, { useState } from 'react';
import { projects } from '../../data/content';
import { ArrowRight, MapPin, Calendar, DollarSign, Layers } from 'lucide-react';

export default function FeaturedProjects({ onSelectProject, setActivePage }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Interiors', 'Commercial', 'Renovation'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 bg-warm-50 text-onyx-950 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 border border-gold-200 px-3.5 py-1 rounded-full">
              Portfolio & Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-onyx-950 mt-3 tracking-tight">
              Featured Landmark Engineering Projects
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? 'bg-onyx-950 text-gold-400 shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((prj) => (
            <div
              key={prj.id}
              onClick={() => onSelectProject(prj)}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-premium hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-72 overflow-hidden bg-onyx-950">
                <img
                  src={prj.image}
                  alt={prj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4 bg-onyx-950/80 backdrop-blur-md px-3 py-1 rounded-lg border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider">
                  {prj.category}
                </div>
                <div className="absolute bottom-4 right-4 bg-onyx-950/80 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-700 text-white text-xs font-semibold">
                  {prj.area}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gold-500" />
                      <span>{prj.location}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gold-500" />
                      <span>Completed {prj.year}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-display text-onyx-950 group-hover:text-gold-600 transition-colors">
                    {prj.title}
                  </h3>

                  <p className="text-slate-600 text-sm mt-3 leading-relaxed line-clamp-2">
                    {prj.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Valuation</span>
                    <span className="text-sm font-bold text-onyx-950">{prj.budget}</span>
                  </div>

                  <button className="px-4 py-2 rounded-xl bg-onyx-950 text-gold-400 group-hover:bg-gold-500 group-hover:text-onyx-950 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1">
                    <span>Inspect Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => { setActivePage('projects'); window.scrollTo(0,0); }}
            className="px-8 py-4 rounded-xl bg-onyx-950 text-white hover:bg-gold-500 hover:text-onyx-950 text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl inline-flex items-center gap-2"
          >
            <span>View Full Portfolio & Technical Matrix</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
