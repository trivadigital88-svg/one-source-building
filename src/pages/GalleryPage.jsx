import React, { useState } from 'react';
import ElementorBadge from '../components/common/ElementorBadge';
import { Play, Eye, Film, Image as ImageIcon } from 'lucide-react';

export default function GalleryPage({ onOpenVideo }) {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'photos' | 'videos'

  const mediaItems = [
    { type: 'photo', title: 'Skyline High-Rise Frame', image: '/images/hero_construction.jpg', tag: 'Construction' },
    { type: 'photo', title: 'Luxury Marble Living Penthouse', image: '/images/luxury_interior.jpg', tag: 'Interiors' },
    { type: 'photo', title: 'Curtain Wall Facade Renovation', image: '/images/renovation_project.jpg', tag: 'Renovation' },
    { type: 'photo', title: 'BIM 3D Architectural Blueprint Studio', image: '/images/architectural_blueprint.jpg', tag: 'Design' },
    { type: 'video', title: 'Executive Client Walkthrough Tour', image: '/images/luxury_interior.jpg', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', tag: 'Video Tour' },
    { type: 'video', title: 'High-Rise Steel Crane Assembly', image: '/images/hero_construction.jpg', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', tag: 'Video Tour' },
  ];

  const filteredMedia = activeTab === 'all' 
    ? mediaItems 
    : mediaItems.filter(m => activeTab === 'photos' ? m.type === 'photo' : m.type === 'video');

  return (
    <div className="pt-28 pb-20 font-sans animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ElementorBadge widgetName="one_source_media_gallery" shortcode='[one_source_section id="gallery_lightbox"]' />

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 border border-gold-200 px-3.5 py-1 rounded-full">
            Visual Documentation
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-onyx-950 mt-4">
            Construction & Interior Media Gallery
          </h1>
          <p className="text-slate-600 text-base mt-3">
            High-resolution site footage, architectural photography, and client walk-through tours.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'all' ? 'bg-onyx-950 text-gold-400 shadow-md' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <span>All Media</span>
          </button>
          <button
            onClick={() => setActiveTab('photos')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'photos' ? 'bg-onyx-950 text-gold-400 shadow-md' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>Photography</span>
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'videos' ? 'bg-onyx-950 text-gold-400 shadow-md' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Film className="w-4 h-4" />
            <span>Video Tours</span>
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMedia.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-premium group relative"
            >
              <div className="h-64 overflow-hidden bg-onyx-950 relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                
                {item.type === 'video' && (
                  <button
                    onClick={() => onOpenVideo(item.videoUrl)}
                    className="absolute inset-0 m-auto w-14 h-14 bg-onyx-950/80 hover:bg-gold-500 hover:text-onyx-950 text-gold-400 rounded-full flex items-center justify-center transition-all border border-gold-500/40 shadow-2xl"
                  >
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </button>
                )}

                <span className="absolute top-4 left-4 bg-onyx-950/80 text-gold-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  {item.tag}
                </span>
              </div>
              <div className="p-4 bg-white border-t border-slate-100 flex justify-between items-center">
                <h3 className="text-sm font-bold text-onyx-950">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
