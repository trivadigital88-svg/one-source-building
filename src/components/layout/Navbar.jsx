import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, Search, Menu, X, ChevronDown, 
  Building2, Compass, Wrench, DraftingCompass, Shield, Award
} from 'lucide-react';
import { companyInfo, services, projects } from '../../data/content';

export default function Navbar({ activePage, setActivePage, onOpenSearch, onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null); // 'services' | 'projects' | null

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services', hasMegaMenu: true, megaType: 'services' },
    { name: 'Projects', id: 'projects', hasMegaMenu: true, megaType: 'projects' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'News', id: 'news' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'FAQs', id: 'faqs' },
    { name: 'Contact', id: 'contact' },
  ];

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-5 h-5 text-gold-500" />;
      case 'Compass': return <Compass className="w-5 h-5 text-gold-500" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-gold-500" />;
      case 'DraftingCompass': return <DraftingCompass className="w-5 h-5 text-gold-500" />;
      default: return <Building2 className="w-5 h-5 text-gold-500" />;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans">
      {/* Top Utility Bar */}
      <div className={`bg-onyx-950 text-slate-300 border-b border-slate-800 text-xs py-2 px-4 transition-all duration-300 ${isScrolled ? 'hidden' : 'block'}`}>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-gold-500" />
              <span>{companyInfo.phone}</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 hover:text-gold-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-gold-500" />
              <span>{companyInfo.email}</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-gold-500" />
              <span>{companyInfo.address}</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden lg:inline bg-gold-900/40 text-gold-400 px-2.5 py-0.5 rounded border border-gold-600/30 text-[11px] font-medium">
              {companyInfo.licenseNumber}
            </span>
            <button 
              onClick={onOpenQuoteModal}
              className="text-gold-400 hover:text-gold-300 font-semibold transition-colors flex items-center gap-1"
            >
              <span>Emergency Hotline: {companyInfo.emergencyPhone}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-onyx-950/95 backdrop-blur-md shadow-2xl py-3 border-b border-gold-500/20' 
          : 'bg-onyx-900/90 backdrop-blur-sm py-4 border-b border-slate-800/80'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Component (Matching attached logo) */}
          <div 
            onClick={() => { setActivePage('home'); window.scrollTo(0,0); }}
            className="cursor-pointer group flex items-center space-x-3 select-none"
          >
            <div className="flex flex-col">
              <div className="flex items-baseline space-x-1.5">
                <span className="font-extrabold text-2xl lg:text-3xl tracking-tight text-white font-display group-hover:text-gold-400 transition-colors">
                  ONE
                </span>
                <span className="w-8 h-[3px] bg-gold-500 relative top-[-4px] rounded-full group-hover:w-12 transition-all"></span>
              </div>
              <div className="flex items-center space-x-2 text-[10px] tracking-[0.25em] uppercase font-bold text-slate-300">
                <span className="text-white">SOURCE</span>
                <span className="text-gold-500">BUILDING</span>
              </div>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div 
                key={link.id} 
                className="relative group py-2"
                onMouseEnter={() => link.hasMegaMenu && setActiveMegaMenu(link.megaType)}
                onMouseLeave={() => link.hasMegaMenu && setActiveMegaMenu(null)}
              >
                <button
                  onClick={() => {
                    setActivePage(link.id);
                    window.scrollTo(0, 0);
                  }}
                  className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 rounded-md ${
                    activePage === link.id
                      ? 'text-gold-400 font-semibold bg-gold-950/40'
                      : 'text-slate-200 hover:text-gold-400 hover:bg-onyx-800/50'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasMegaMenu && (
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
                  )}
                </button>

                {/* Mega Menu Dropdowns */}
                {link.hasMegaMenu && activeMegaMenu === link.megaType && (
                  <div className="absolute top-full left-0 w-[580px] -ml-20 bg-onyx-950/95 backdrop-blur-xl border border-gold-500/30 rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-4 animate-fadeIn z-50">
                    {link.megaType === 'services' && (
                      <>
                        <div className="col-span-2 border-b border-slate-800 pb-2 mb-2 flex justify-between items-center">
                          <span className="text-xs uppercase tracking-wider font-bold text-gold-400">Our Architectural & Contracting Services</span>
                          <span className="text-[11px] text-slate-400">Turnkey Solutions</span>
                        </div>
                        {services.map((srv) => (
                          <div
                            key={srv.id}
                            onClick={() => {
                              setActivePage('services');
                              setActiveMegaMenu(null);
                              window.scrollTo(0,0);
                            }}
                            className="p-3 rounded-lg hover:bg-gold-950/40 border border-transparent hover:border-gold-500/20 transition-all cursor-pointer group/item flex items-start gap-3"
                          >
                            <div className="p-2 bg-onyx-900 rounded-md border border-slate-800 group-hover/item:border-gold-500/40">
                              {getServiceIcon(srv.iconName)}
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-white group-hover/item:text-gold-400 transition-colors">
                                {srv.title}
                              </div>
                              <div className="text-xs text-slate-400 line-clamp-2 mt-0.5">
                                {srv.shortDesc}
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    )}

                    {link.megaType === 'projects' && (
                      <>
                        <div className="col-span-2 border-b border-slate-800 pb-2 mb-2 flex justify-between items-center">
                          <span className="text-xs uppercase tracking-wider font-bold text-gold-400">Featured Portfolio Showcase</span>
                          <button 
                            onClick={() => { setActivePage('projects'); setActiveMegaMenu(null); }}
                            className="text-xs text-gold-400 hover:underline"
                          >
                            View All Projects &rarr;
                          </button>
                        </div>
                        {projects.slice(0, 4).map((prj) => (
                          <div
                            key={prj.id}
                            onClick={() => {
                              setActivePage('projects');
                              setActiveMegaMenu(null);
                              window.scrollTo(0,0);
                            }}
                            className="p-2.5 rounded-lg hover:bg-onyx-800/80 border border-slate-800/60 transition-all cursor-pointer group/pitem flex items-center gap-3"
                          >
                            <img src={prj.image} alt={prj.title} className="w-12 h-12 rounded object-cover border border-slate-700" />
                            <div>
                              <div className="text-xs font-semibold text-white group-hover/pitem:text-gold-400 transition-colors line-clamp-1">
                                {prj.title}
                              </div>
                              <div className="text-[11px] text-slate-400 flex items-center gap-2">
                                <span>{prj.category}</span>
                                <span>•</span>
                                <span className="text-gold-400 font-medium">{prj.budget}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons & Search */}
          <div className="flex items-center space-x-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 text-slate-300 hover:text-gold-400 bg-onyx-800/60 hover:bg-onyx-800 rounded-lg border border-slate-700/60 transition-all"
              title="Search Projects & Services"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Consultation CTA */}
            <button
              onClick={onOpenQuoteModal}
              className="hidden sm:inline-flex items-center px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-onyx-950 bg-gold-gradient hover:bg-gold-gradient-hover shadow-gold-glow transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Request Quote
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-200 hover:text-gold-400 rounded-lg bg-onyx-800 border border-slate-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-onyx-950 border-b border-gold-500/30 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActivePage(link.id);
                  setMobileMenuOpen(false);
                  window.scrollTo(0,0);
                }}
                className={`w-full text-left px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  activePage === link.id
                    ? 'bg-gold-500/20 text-gold-400 font-bold border-l-2 border-gold-400'
                    : 'text-slate-200 hover:bg-onyx-800'
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  onOpenQuoteModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-onyx-950 bg-gold-gradient text-center shadow-md"
              >
                Request Quote Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
