import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Instagram, Linkedin, Youtube, Facebook, 
  Send, ShieldCheck, Award, ArrowUp, CheckCircle2 
} from 'lucide-react';
import { companyInfo, services } from '../../data/content';

export default function Footer({ setActivePage, onOpenQuoteModal }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-onyx-950 text-slate-300 font-sans border-t border-gold-500/20 relative pt-16 pb-8 overflow-hidden">
      {/* Background Decorative Metallic Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter CTA Section */}
        <div className="bg-onyx-900 border border-gold-500/30 rounded-2xl p-8 lg:p-12 mb-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-widest font-bold text-gold-400">Stay Ahead in Architecture & Engineering</span>
            <h3 className="text-2xl lg:text-3xl font-bold font-display text-white mt-1">
              Subscribe to <span className="text-gold-gradient">Architectural Insights</span>
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Receive quarterly whitepapers on structural innovations, luxury interior design trends, and LEED sustainability standards.
            </p>
          </div>

          <div className="w-full lg:w-auto min-w-[340px]">
            {subscribed ? (
              <div className="bg-gold-950/60 border border-gold-500/50 text-gold-300 p-4 rounded-xl flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-gold-400 flex-shrink-0" />
                <span className="text-sm font-medium">Thank you for subscribing! You will receive our next quarterly edition.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your corporate email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-onyx-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 text-sm"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gold-gradient hover:bg-gold-gradient-hover text-onyx-950 font-bold rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-2 flex-shrink-0"
                >
                  <span>Subscribe</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => { setActivePage('home'); scrollToTop(); }}
              className="cursor-pointer inline-block"
            >
              <div className="flex items-baseline space-x-1.5">
                <span className="font-extrabold text-2xl tracking-tight text-white font-display">
                  ONE
                </span>
                <span className="w-6 h-[3px] bg-gold-500 relative top-[-4px] rounded-full"></span>
              </div>
              <div className="flex items-center space-x-2 text-[10px] tracking-[0.25em] uppercase font-bold text-slate-300">
                <span className="text-white">SOURCE</span>
                <span className="text-gold-500">BUILDING</span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {companyInfo.description}
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a href={companyInfo.social.instagram} target="_blank" rel="noreferrer" className="p-2.5 bg-onyx-900 hover:bg-gold-500 hover:text-onyx-950 rounded-lg text-slate-400 transition-colors border border-slate-800">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={companyInfo.social.linkedin} target="_blank" rel="noreferrer" className="p-2.5 bg-onyx-900 hover:bg-gold-500 hover:text-onyx-950 rounded-lg text-slate-400 transition-colors border border-slate-800">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={companyInfo.social.youtube} target="_blank" rel="noreferrer" className="p-2.5 bg-onyx-900 hover:bg-gold-500 hover:text-onyx-950 rounded-lg text-slate-400 transition-colors border border-slate-800">
                <Youtube className="w-4 h-4" />
              </a>
              <a href={companyInfo.social.facebook} target="_blank" rel="noreferrer" className="p-2.5 bg-onyx-900 hover:bg-gold-500 hover:text-onyx-950 rounded-lg text-slate-400 transition-colors border border-slate-800">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-gold-400 mb-4">Core Services</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {services.map((s) => (
                <li key={s.id}>
                  <button 
                    onClick={() => { setActivePage('services'); scrollToTop(); }}
                    className="hover:text-gold-400 transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Page Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-gold-400 mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><button onClick={() => { setActivePage('about'); scrollToTop(); }} className="hover:text-gold-400 transition-colors">About Company</button></li>
              <li><button onClick={() => { setActivePage('projects'); scrollToTop(); }} className="hover:text-gold-400 transition-colors">Portfolio & Specs</button></li>
              <li><button onClick={() => { setActivePage('gallery'); scrollToTop(); }} className="hover:text-gold-400 transition-colors">Photo & Video Gallery</button></li>
              <li><button onClick={() => { setActivePage('news'); scrollToTop(); }} className="hover:text-gold-400 transition-colors">Latest Construction News</button></li>
              <li><button onClick={() => { setActivePage('testimonials'); scrollToTop(); }} className="hover:text-gold-400 transition-colors">Client Testimonials</button></li>
              <li><button onClick={() => { setActivePage('faqs'); scrollToTop(); }} className="hover:text-gold-400 transition-colors">FAQs & Licensing</button></li>
              <li><button onClick={() => { setActivePage('contact'); scrollToTop(); }} className="hover:text-gold-400 transition-colors">Contact HQ</button></li>
            </ul>
          </div>

          {/* Contact Details & Credentials */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-gold-400 mb-4">Headquarters</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                <span>{companyInfo.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span>{companyInfo.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span>{companyInfo.email}</span>
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-onyx-900 border border-slate-800 px-3 py-1.5 rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-gold-400" />
                  <span>Licensed NYC GC #4920194</span>
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & scroll-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ONE SOURCE BUILDING LLC. All Rights Reserved. Designed for Elementor & React integration.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => { setActivePage('faqs'); scrollToTop(); }} className="hover:text-slate-300 transition-colors">Privacy Policy</button>
            <button onClick={() => { setActivePage('faqs'); scrollToTop(); }} className="hover:text-slate-300 transition-colors">Terms of Service</button>
            <button
              onClick={scrollToTop}
              className="p-2 bg-onyx-900 hover:bg-gold-500 hover:text-onyx-950 text-gold-400 rounded-lg transition-colors border border-slate-800"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
