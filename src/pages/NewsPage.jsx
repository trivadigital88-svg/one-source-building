import React, { useState } from 'react';
import { newsArticles } from '../data/content';
import ElementorBadge from '../components/common/ElementorBadge';
import { Calendar, User, Clock, ArrowRight, X } from 'lucide-react';

export default function NewsPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="pt-28 pb-20 font-sans animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ElementorBadge widgetName="one_source_news_feed" shortcode='[one_source_section id="news_journal"]' />

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 border border-gold-200 px-3.5 py-1 rounded-full">
            Engineering & Design Journal
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-onyx-950 mt-4">
            Construction News & Architectural Insights
          </h1>
          <p className="text-slate-600 text-base mt-3">
            In-depth analysis of low-carbon building materials, zoning codes, and luxury interior design trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-premium hover:shadow-2xl transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="h-52 overflow-hidden bg-onyx-950">
                  <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-600">{art.category}</span>
                  <h3 className="text-xl font-bold font-display text-onyx-950 mt-1 group-hover:text-gold-600 transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-slate-600 text-xs mt-3 leading-relaxed">
                    {art.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-gold-500" />
                  <span>{art.author}</span>
                </span>
                <span className="text-gold-600 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Article &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-onyx-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 lg:p-8 relative shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-onyx-950 rounded-full bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <img src={selectedArticle.image} alt="header" className="w-full h-64 object-cover rounded-xl mb-6" />

            <span className="text-xs font-bold uppercase tracking-wider text-gold-600 bg-gold-50 border border-gold-200 px-3 py-1 rounded-full">
              {selectedArticle.category}
            </span>

            <h2 className="text-2xl lg:text-3xl font-bold font-display text-onyx-950 mt-3">
              {selectedArticle.title}
            </h2>

            <div className="flex items-center gap-4 text-xs text-slate-500 mt-2 pb-4 border-b border-slate-200">
              <span>{selectedArticle.author}</span>
              <span>•</span>
              <span>{selectedArticle.date}</span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <div className="prose prose-slate mt-6 text-sm text-slate-700 leading-relaxed space-y-4">
              <p className="font-semibold text-onyx-950 text-base">{selectedArticle.summary}</p>
              <p>{selectedArticle.content}</p>
              <p>
                At One Source Building, our research engineering team tests low-carbon structural components in simulated load environments to ensure strict compliance with international building standards.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 bg-onyx-950 text-gold-400 font-bold rounded-xl text-xs uppercase"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
