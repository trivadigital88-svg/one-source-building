import React from 'react';
import { X } from 'lucide-react';

export default function VideoModal({ videoUrl, onClose }) {
  if (!videoUrl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-onyx-950/90 backdrop-blur-md animate-fadeIn">
      <div className="bg-onyx-900 border border-gold-500/30 rounded-2xl max-w-3xl w-full p-4 relative shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-300 hover:text-white rounded-full bg-onyx-800 z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="aspect-video w-full rounded-xl overflow-hidden bg-black mt-6">
          <iframe
            src={videoUrl}
            title="Video Walkthrough"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
