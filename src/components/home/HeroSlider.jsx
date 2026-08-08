import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: "/images/hero_construction.jpg",
    tagline: "RARE ITALIAN MARBLE & EXOTIC STONE",
    heading: "Bespoke Natural Stone. Engineered for Legacy.",
    subheading: "Direct quarry importers of rare book-matched Calacatta Gold marble, exotic quartzite, and translucent honey onyx slabs.",
    ctaPrimary: "Explore Stone Slabs",
    ctaSecondary: "Book-Matching Process"
  },
  {
    id: 2,
    image: "/images/luxury_interior.jpg",
    tagline: "BOOK-MATCHED WALL CLADDING",
    heading: "Where Geological Masterpieces Meet Interior Architecture.",
    subheading: "Symmetrical mirror-image marble slab installation for feature walls, fireplaces, and luxury penthouse suites.",
    ctaPrimary: "View Stone Portfolio",
    ctaSecondary: "Request Slab Inspection"
  },
  {
    id: 3,
    image: "/images/renovation_project.jpg",
    tagline: "EXOTIC QUARTZITE WATERFALL ISLANDS",
    heading: "Precision 5-Axis CNC Waterjet Stone Fabrication.",
    subheading: "Seamless 45° mitered waterfall kitchen islands, custom carved stone sinks, and 25-year stain-proof sealed surfaces.",
    ctaPrimary: "Custom Fabrication",
    ctaSecondary: "Instant Cost Calculator"
  }
];

export default function HeroSlider({ setActivePage, onOpenQuoteModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-onyx-950 text-white pt-24 pb-16 font-sans select-none">
      
      {/* Background Image Rotator with Fade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].heading}
            className="w-full h-full object-cover object-center brightness-70"
          />
          {/* Overlay Dark Metallic Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-onyx-950/95 via-onyx-950/75 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-transparent to-onyx-950/40"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          
          {/* Tagline Badge */}
          <motion.div
            key={`tag-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-950/80 border border-gold-500/40 text-gold-400 text-xs uppercase tracking-widest font-bold mb-6 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
            <span>{slides[currentSlide].tagline}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            key={`head-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] tracking-tight text-white mb-6"
          >
            {slides[currentSlide].heading.split("Natural Stone").map((part, i) => (
              <React.Fragment key={i}>
                {part}
                {i === 0 && slides[currentSlide].heading.includes("Natural Stone") && (
                  <span className="text-gold-gradient"> Italian Marble </span>
                )}
              </React.Fragment>
            ))}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            key={`sub-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-8 max-w-2xl"
          >
            {slides[currentSlide].subheading}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            key={`cta-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => { setActivePage('projects'); window.scrollTo(0,0); }}
              className="px-6 py-3.5 rounded-xl bg-gold-gradient hover:bg-gold-gradient-hover text-onyx-950 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-gold-glow transition-all flex items-center gap-2 group"
            >
              <span>{slides[currentSlide].ctaPrimary}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3.5 rounded-xl bg-onyx-900/80 hover:bg-onyx-800 border border-slate-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all backdrop-blur-sm"
            >
              {slides[currentSlide].ctaSecondary}
            </button>
          </motion.div>

        </div>

        {/* Floating Bottom Quick Metrics Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-300">
          <div className="border-l-2 border-gold-500 pl-4">
            <div className="text-2xl lg:text-3xl font-bold font-display text-white">18+ Years</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Quarry Direct Access</div>
          </div>
          <div className="border-l-2 border-gold-500 pl-4">
            <div className="text-2xl lg:text-3xl font-bold font-display text-white">2,500+</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Rare Slabs in Stock</div>
          </div>
          <div className="border-l-2 border-gold-500 pl-4">
            <div className="text-2xl lg:text-3xl font-bold font-display text-white">1.8M sq.ft.</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Stone Installed</div>
          </div>
          <div className="border-l-2 border-gold-500 pl-4">
            <div className="text-2xl lg:text-3xl font-bold font-display text-gold-400">99.8%</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Vein Match Accuracy</div>
          </div>
        </div>

      </div>

      {/* Slider Controls */}
      <div className="absolute right-6 bottom-10 z-20 flex items-center gap-3">
        <button
          onClick={prevSlide}
          className="p-3 bg-onyx-900/80 hover:bg-gold-500 hover:text-onyx-950 border border-slate-700 rounded-xl transition-all text-white"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="text-xs font-bold text-slate-400 tracking-wider">
          <span className="text-gold-400">0{currentSlide + 1}</span> / 0{slides.length}
        </div>
        <button
          onClick={nextSlide}
          className="p-3 bg-onyx-900/80 hover:bg-gold-500 hover:text-onyx-950 border border-slate-700 rounded-xl transition-all text-white"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </section>
  );
}
