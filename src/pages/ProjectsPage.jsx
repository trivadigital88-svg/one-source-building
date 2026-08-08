import React, { useState } from 'react';
import { projects } from '../data/content';
import ElementorBadge from '../components/common/ElementorBadge';
import { LayoutGrid, Table, Search, MapPin, Calendar, ArrowRight, Eye } from 'lucide-react';

export default function ProjectsPage({ onSelectProject, onOpenQuoteModal }) {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table'
  const [category, setCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Interiors', 'Commercial', 'Renovation'];

  const filteredProjects = projects.filter((p) => {
    const matchesCat = category === 'All' || p.category === category;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 font-sans animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ElementorBadge widgetName="one_source_projects_grid" shortcode='[one_source_section id="projects_table"]' />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 border border-gold-200 px-3.5 py-1 rounded-full">
            Engineering Archive
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-onyx-950 mt-4 tracking-tight">
            Landmark Projects & Architectural Specs
          </h1>
          <p className="text-slate-600 text-base mt-3">
            Inspect our completed commercial developments, luxury residential penthouses, and structural retrofits.
          </p>
        </div>

        {/* Toolbar: Category Filters, Search, View Mode Toggle */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-premium mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  category === cat
                    ? 'bg-onyx-950 text-gold-400 shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar & View Mode Toggle */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search specs, locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-gold-500"
              />
            </div>

            <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'grid' ? 'bg-white text-onyx-950 shadow-sm' : 'text-slate-500 hover:text-onyx-950'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-2 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'table' ? 'bg-white text-onyx-950 shadow-sm' : 'text-slate-500 hover:text-onyx-950'
                }`}
                title="Dynamic Table View"
              >
                <Table className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* View Mode 1: Grid */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((prj) => (
              <div
                key={prj.id}
                onClick={() => onSelectProject(prj)}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-premium hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <div className="h-64 overflow-hidden bg-onyx-950 relative">
                  <img src={prj.image} alt={prj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-onyx-950/80 backdrop-blur-md text-gold-400 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
                    {prj.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="text-xs text-slate-500 flex items-center gap-2 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-gold-500" />
                    <span>{prj.location}</span>
                    <span>•</span>
                    <span>{prj.area}</span>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-onyx-950 group-hover:text-gold-600 transition-colors">
                    {prj.title}
                  </h3>
                  <p className="text-slate-600 text-xs mt-2 line-clamp-2 leading-relaxed">
                    {prj.summary}
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-gold-600">{prj.budget}</span>
                    <span className="text-xs font-bold text-onyx-950 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View Specs &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View Mode 2: Dynamic Data Table */}
        {viewMode === 'table' && (
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-premium overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-onyx-950 text-white text-xs font-bold uppercase tracking-wider border-b border-gold-500/30">
                  <th className="py-4 px-6">Project Name</th>
                  <th className="py-4 px-6">Discipline</th>
                  <th className="py-4 px-6">Location</th>
                  <th className="py-4 px-6">Footprint</th>
                  <th className="py-4 px-6">Valuation</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
                {filteredProjects.map((prj) => (
                  <tr key={prj.id} className="hover:bg-gold-50/50 transition-colors group">
                    <td className="py-4 px-6 font-bold text-onyx-950 flex items-center gap-3">
                      <img src={prj.image} alt="thumb" className="w-10 h-10 rounded object-cover border" />
                      <div>
                        <div className="group-hover:text-gold-600 transition-colors">{prj.title}</div>
                        <span className="text-[10px] text-slate-400 font-normal">{prj.client}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="bg-slate-100 text-slate-800 px-2.5 py-1 rounded font-bold uppercase text-[10px]">
                        {prj.category}
                      </span>
                    </td>
                    <td className="py-4 px-6">{prj.location}</td>
                    <td className="py-4 px-6">{prj.area}</td>
                    <td className="py-4 px-6 font-bold text-gold-600">{prj.budget}</td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => onSelectProject(prj)}
                        className="px-3 py-1.5 bg-onyx-950 text-gold-400 hover:bg-gold-500 hover:text-onyx-950 rounded-lg text-xs font-bold uppercase transition-colors inline-flex items-center gap-1"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Specs</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
}
