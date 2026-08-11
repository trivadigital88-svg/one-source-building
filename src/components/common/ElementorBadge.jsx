import React, { useState } from 'react';
import { Code, Check, Copy, Layers } from 'lucide-react';

export default function ElementorBadge({ widgetName = 'one_source_hero', shortcode = '[one_source_widget type="hero"]' }) {
  // Set to true if you ever want to display the developer shortcode band again
  const SHOW_BADGE = true;
  if (!SHOW_BADGE) return null;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shortcode);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="bg-onyx-950/90 border border-gold-500/30 rounded-xl p-3.5 flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-slate-300 shadow-xl my-4">
      <div className="flex items-center gap-2.5">
        <div className="p-1.5 bg-gold-950 rounded border border-gold-600/40 text-gold-400">
          <Layers className="w-4 h-4" />
        </div>
        <div>
          <span className="font-bold text-white block">Elementor Widget Ready</span>
          <span className="text-[11px] text-slate-400">WordPress Shortcode: <code className="text-gold-400 font-mono">{shortcode}</code></span>
        </div>
      </div>

      <button
        onClick={handleCopy}
        className="px-3 py-1.5 bg-onyx-900 hover:bg-gold-500 hover:text-onyx-950 border border-slate-700 rounded-lg text-gold-400 transition-colors flex items-center gap-1.5 font-semibold text-[11px]"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-green-400" />
            <span>Shortcode Copied</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5" />
            <span>Copy Elementor Embed</span>
          </>
        )}
      </button>
    </div>
  );
}
