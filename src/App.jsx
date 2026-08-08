import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SearchModal from './components/layout/SearchModal';
import ProjectModal from './components/common/ProjectModal';
import VideoModal from './components/common/VideoModal';
import QuoteModal from './components/common/QuoteModal';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import GalleryPage from './pages/GalleryPage';
import NewsPage from './pages/NewsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  // Keyboard escape listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setVideoUrl(null);
        setSearchOpen(false);
        setQuoteModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return (
          <HomePage
            setActivePage={setActivePage}
            onSelectProject={(p) => setSelectedProject(p)}
            onOpenQuoteModal={() => setQuoteModalOpen(true)}
            onOpenVideo={(url) => setVideoUrl(url)}
          />
        );
      case 'about':
        return <AboutPage onOpenQuoteModal={() => setQuoteModalOpen(true)} />;
      case 'services':
        return <ServicesPage onOpenQuoteModal={() => setQuoteModalOpen(true)} />;
      case 'projects':
        return (
          <ProjectsPage
            onSelectProject={(p) => setSelectedProject(p)}
            onOpenQuoteModal={() => setQuoteModalOpen(true)}
          />
        );
      case 'gallery':
        return <GalleryPage onOpenVideo={(url) => setVideoUrl(url)} />;
      case 'news':
        return <NewsPage />;
      case 'testimonials':
        return (
          <TestimonialsPage
            onOpenVideo={(url) => setVideoUrl(url)}
            onOpenQuoteModal={() => setQuoteModalOpen(true)}
          />
        );
      case 'faqs':
        return <FaqPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <HomePage
            setActivePage={setActivePage}
            onSelectProject={(p) => setSelectedProject(p)}
            onOpenQuoteModal={() => setQuoteModalOpen(true)}
            onOpenVideo={(url) => setVideoUrl(url)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-warm-50 text-onyx-900 font-sans flex flex-col justify-between selection:bg-gold-500 selection:text-white">
      {/* Sticky Global Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenQuoteModal={() => setQuoteModalOpen(true)}
      />

      {/* Main Page View Container */}
      <main className="flex-grow">
        {renderActivePage()}
      </main>

      {/* Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenQuoteModal={() => setQuoteModalOpen(true)}
      />

      {/* Interactive Global Modals */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        setActivePage={setActivePage}
        onSelectProject={(p) => setSelectedProject(p)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuote={() => setQuoteModalOpen(true)}
      />

      <VideoModal
        videoUrl={videoUrl}
        onClose={() => setVideoUrl(null)}
      />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
}
