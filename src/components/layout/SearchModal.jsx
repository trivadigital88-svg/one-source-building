import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, Building2, FileText, HelpCircle, Briefcase } from 'lucide-react';
import { projects, services, newsArticles, faqs } from '../../data/content';

export default function SearchModal({ isOpen, onClose, setActivePage, onSelectProject }) {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const matchedProjects = projects.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.category.toLowerCase().includes(q) ||
      p.location.toLowerCase().includes(q)
    ).map(p => ({ ...p, type: 'Project', page: 'projects' }));

    const matchedServices = services.filter(s =>
      s.title.toLowerCase().includes(q) ||
      s.shortDesc.toLowerCase().includes(q)
    ).map(s => ({ ...s, type: 'Service', page: 'services' }));

    const matchedArticles = newsArticles.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q)
    ).map(a => ({ ...a, type: 'News Article', page: 'news' }));

    const matchedFaqs = faqs.filter(f =>
      f.question.toLowerCase().includes(q) ||
      f.answer.toLowerCase().includes(q)
    ).map(f => ({ ...f, type: 'FAQ', page: 'faqs' }));

    return [...matchedProjects, ...matchedServices, ...matchedArticles, ...matchedFaqs];
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-onyx-950/80 backdrop-blur-md animate-fadeIn font-sans">
      <div className="bg-onyx-900 border border-gold-500/30 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-gold-400 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search projects, architectural services, construction insights..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white placeholder-slate-500 text-base focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-slate-400 hover:text-white text-xs">
              Clear
            </button>
          )}
          <button 
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg bg-onyx-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto space-y-3 flex-1">
          {!query.trim() ? (
            <div className="text-center py-8 text-slate-500 text-sm">
              <Search className="w-8 h-8 text-slate-700 mx-auto mb-2" />
              <span>Type keywords like <strong className="text-gold-400 font-normal">"Penthouse"</strong>, <strong className="text-gold-400 font-normal">"Commercial"</strong>, or <strong className="text-gold-400 font-normal">"Renovation"</strong></span>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="text-center py-8 text-slate-400 text-sm">
              No matching records found for "{query}".
            </div>
          ) : (
            searchResults.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setActivePage(item.page);
                  if (item.type === 'Project' && onSelectProject) {
                    onSelectProject(item);
                  }
                  onClose();
                }}
                className="p-3 bg-onyx-950/60 hover:bg-onyx-800 rounded-xl border border-slate-800/80 hover:border-gold-500/40 transition-all cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-onyx-900 rounded-lg text-gold-400 border border-slate-800">
                    {item.type === 'Project' && <Briefcase className="w-4 h-4" />}
                    {item.type === 'Service' && <Building2 className="w-4 h-4" />}
                    {item.type === 'News Article' && <FileText className="w-4 h-4" />}
                    {item.type === 'FAQ' && <HelpCircle className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gold-400 font-semibold">{item.type}</div>
                    <div className="text-sm font-semibold text-white group-hover:text-gold-400 transition-colors">
                      {item.title || item.question}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-gold-400 transition-colors group-hover:translate-x-1 duration-200" />
              </div>
            ))
          )}
        </div>

        {/* Footer Hint */}
        <div className="p-3 bg-onyx-950 border-t border-slate-800 text-right text-[11px] text-slate-500">
          Press <kbd className="bg-onyx-900 border border-slate-700 text-slate-300 px-1.5 py-0.5 rounded text-[10px]">ESC</kbd> to exit
        </div>

      </div>
    </div>
  );
}
