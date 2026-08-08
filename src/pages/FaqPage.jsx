import React, { useState } from 'react';
import { faqs } from '../data/content';
import ElementorBadge from '../components/common/ElementorBadge';
import { ChevronDown, Search, HelpCircle, ShieldCheck } from 'lucide-react';

export default function FaqPage() {
  const [openIdx, setOpenIdx] = useState(0);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Planning & Pricing', 'Construction & Execution', 'Warranty & Handover'];

  const filteredFaqs = faqs.filter((f) => {
    const matchesCat = activeCategory === 'All' || f.category === activeCategory;
    const matchesSearch = f.question.toLowerCase().includes(search.toLowerCase()) ||
                          f.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 font-sans animate-fadeIn">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ElementorBadge widgetName="one_source_faqs" shortcode='[one_source_section id="faq_accordion"]' />

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 border border-gold-200 px-3.5 py-1 rounded-full">
            Knowledge Base
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-onyx-950 mt-4">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-600 text-base mt-3">
            Clear answers on contracting contracts, BIM 3D schematics, safety licensing, and warranty terms.
          </p>
        </div>

        {/* Search & Categories */}
        <div className="space-y-4 mb-10">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Search questions (e.g. 'warranty', 'BIM', 'pricing')..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-gold-500 shadow-sm"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
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

        {/* Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full p-6 text-left font-bold font-display text-onyx-950 flex items-center justify-between gap-4 hover:text-gold-600 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <span className="text-base sm:text-lg">{faq.question}</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openIdx === idx ? 'rotate-180 text-gold-600' : ''}`} />
              </button>

              {openIdx === idx && (
                <div className="px-6 pb-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 animate-fadeIn">
                  <p className="mt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
