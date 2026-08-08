import React, { useState } from 'react';
import { companyInfo } from '../data/content';
import ElementorBadge from '../components/common/ElementorBadge';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck, Navigation } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [activeOffice, setActiveOffice] = useState('New York HQ');

  const offices = [
    { city: 'New York HQ', address: '750 Grand Avenue, Suite 1200, Design District, NY 10019', phone: '+1 (800) 555-BUILD' },
    { city: 'Greenwich Studio', address: '120 Mason Street, Greenwich, CT 06830', phone: '+1 (800) 555-9922' },
    { city: 'Miami Branch', address: '400 Biscayne Blvd, Suite 800, Miami, FL 33132', phone: '+1 (800) 555-9933' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-28 pb-20 font-sans animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ElementorBadge widgetName="one_source_contact_map" shortcode='[one_source_section id="contact_form"]' />

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 border border-gold-200 px-3.5 py-1 rounded-full">
            Direct Communications
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-onyx-950 mt-4">
            Connect with Executive Leadership
          </h1>
          <p className="text-slate-600 text-base mt-3">
            Schedule a boardroom meeting, site consultation, or tender submission inquiry.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-premium">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-gold-500 mx-auto" />
                <h3 className="text-2xl font-bold font-display text-onyx-950">Inquiry Transmitted</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Your message has been assigned to our Senior Estimating Officer. We will respond within 4 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold font-display text-onyx-950">
                  Send Direct Inquiry
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase text-slate-700 block mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jonathan Vance"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-gold-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-slate-700 block mb-1">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="j.vance@company.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase text-slate-700 block mb-1">Direct Telephone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-gold-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-slate-700 block mb-1">Inquiry Sector</label>
                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-gold-500">
                      <option>General Contracting</option>
                      <option>Interior Fitout</option>
                      <option>Structural Renovation</option>
                      <option>Career & Subcontractor Tender</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-slate-700 block mb-1">Message & Specifications</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Provide details regarding project location, scope, timelines..."
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-gold-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gold-gradient hover:bg-gold-gradient-hover text-onyx-950 font-bold rounded-xl text-xs uppercase tracking-wider shadow-gold-glow transition-all flex items-center justify-center gap-2"
                >
                  <span>Transmit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office Info & Map View Mockup */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Offices Selector */}
            <div className="bg-onyx-950 text-white rounded-3xl p-8 border border-gold-500/30 shadow-2xl space-y-6">
              <h3 className="text-xl font-bold font-display text-white">Our Regional Offices</h3>
              
              <div className="space-y-3">
                {offices.map((off, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveOffice(off.city)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      activeOffice === off.city
                        ? 'bg-gold-950/60 border-gold-500 text-white'
                        : 'bg-onyx-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-sm font-bold text-white flex items-center justify-between">
                      <span>{off.city}</span>
                      {activeOffice === off.city && <Navigation className="w-4 h-4 text-gold-400" />}
                    </div>
                    <p className="text-xs text-slate-300 mt-1">{off.address}</p>
                    <span className="text-[11px] text-gold-400 font-semibold block mt-1">{off.phone}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-gold-500" />
                  <span>{companyInfo.hours}</span>
                </span>
              </div>
            </div>

            {/* Interactive Map Integration Mockup */}
            <div className="bg-onyx-900 border border-slate-800 rounded-3xl p-6 h-64 flex flex-col items-center justify-center text-center relative overflow-hidden group">
              <img
                src="/images/hero_construction.jpg"
                alt="Map Background"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="relative z-10 space-y-3">
                <div className="p-3 bg-gold-500 text-onyx-950 rounded-full inline-block shadow-gold-glow animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold font-display text-white">{activeOffice} Interactive Map</h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Click to open GPS directions in Google Maps or Apple Maps.
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-onyx-950 border border-slate-700 text-gold-400 rounded-xl text-xs font-bold uppercase inline-block hover:border-gold-500"
                >
                  Open Directions
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
