import React, { useState } from 'react';
import { X, MapPin, Calendar, DollarSign, Layers, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenQuote }) {
  if (!project) return null;
  const [activeImage, setActiveImage] = useState(project.image);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-onyx-950/80 backdrop-blur-md animate-fadeIn font-sans">
      <div className="bg-white rounded-2xl max-w-4xl w-full p-6 lg:p-8 relative shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-onyx-950 rounded-full bg-slate-100 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Gallery View */}
          <div className="lg:col-span-7 space-y-4">
            <div className="h-72 lg:h-96 rounded-xl overflow-hidden bg-onyx-950 border border-slate-200 relative">
              <img src={activeImage} alt={project.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-onyx-950/80 backdrop-blur-md px-3 py-1 rounded-md text-gold-400 text-xs font-bold uppercase tracking-wider">
                {project.category}
              </div>
            </div>

            {/* Thumbnail selector */}
            <div className="flex gap-3">
              {project.gallery?.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === img ? 'border-gold-500 scale-95' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-gold-600 font-bold uppercase tracking-wider mb-1">
                <span>{project.location}</span>
                <span>•</span>
                <span>Completed {project.year}</span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold font-display text-onyx-950">
                {project.title}
              </h2>

              <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                {project.summary}
              </p>

              {/* Quick Specs Table */}
              <div className="mt-6 space-y-2 border-t border-b border-slate-100 py-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-onyx-950 mb-2">Technical Specifications</h4>
                
                <div className="flex justify-between text-xs py-1">
                  <span className="text-slate-500">Client Entity:</span>
                  <span className="font-semibold text-onyx-950">{project.client}</span>
                </div>
                <div className="flex justify-between text-xs py-1">
                  <span className="text-slate-500">Constructed Footprint:</span>
                  <span className="font-semibold text-onyx-950">{project.area}</span>
                </div>
                <div className="flex justify-between text-xs py-1">
                  <span className="text-slate-500">Total Contract Value:</span>
                  <span className="font-semibold text-gold-600">{project.budget}</span>
                </div>
                <div className="flex justify-between text-xs py-1">
                  <span className="text-slate-500">Execution Duration:</span>
                  <span className="font-semibold text-onyx-950">{project.duration}</span>
                </div>

                {project.specs && Object.entries(project.specs).map(([key, val]) => (
                  <div key={key} className="flex justify-between text-xs py-1 border-t border-slate-50">
                    <span className="text-slate-500">{key}:</span>
                    <span className="font-semibold text-onyx-950">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 flex gap-3">
              <button
                onClick={onClose}
                className="w-1/2 py-3 rounded-xl border border-slate-300 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50"
              >
                Close Window
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenQuote();
                }}
                className="w-1/2 py-3 rounded-xl bg-gold-gradient text-onyx-950 font-bold text-xs uppercase tracking-wider shadow-md hover:bg-gold-gradient-hover"
              >
                Request Similar Build
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
