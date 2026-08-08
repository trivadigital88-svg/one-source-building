import React, { useState } from 'react';
import { X, Send, CheckCircle2, Building2, Phone, Mail, User } from 'lucide-react';
import { companyInfo } from '../../data/content';

export default function QuoteModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'General Construction',
    budget: '$500K - $1M',
    details: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-onyx-950/85 backdrop-blur-md animate-fadeIn font-sans">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto border border-slate-200">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-onyx-950 rounded-full bg-slate-100"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-gold-500 mx-auto animate-bounce" />
            <h3 className="text-2xl font-bold font-display text-onyx-950">Quote Request Submitted</h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Our Senior Structural Estimator will review your specifications and contact you within 4 business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 border border-gold-200 px-3 py-1 rounded-full">
                Consultation Booking
              </span>
              <h3 className="text-2xl font-bold font-display text-onyx-950 mt-2">
                Request a Custom Build Estimate
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Direct consultation with One Source Senior Structural Engineering Team.
              </p>
            </div>

            <div>
              <label className="text-xs font-bold uppercase text-slate-700 block mb-1">Full Name *</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Jonathan Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-gold-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase text-slate-700 block mb-1">Corporate Email *</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="email"
                    required
                    placeholder="j.vance@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-slate-700 block mb-1">Phone Number *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase text-slate-700 block mb-1">Primary Discipline</label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-gold-500"
                >
                  <option value="General Construction">General Construction</option>
                  <option value="Architectural Interiors">Architectural Interiors</option>
                  <option value="Luxury Renovation">Luxury Renovation</option>
                  <option value="Master Planning">Master Planning</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-slate-700 block mb-1">Estimated Budget</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-gold-500"
                >
                  <option value="$100K - $500K">$100K - $500K</option>
                  <option value="$500K - $1M">$500K - $1M</option>
                  <option value="$1M - $5M">$1M - $5M</option>
                  <option value="$5M+">$5M+ (Commercial Scale)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase text-slate-700 block mb-1">Project Overview & Timeline</label>
              <textarea
                rows="3"
                placeholder="Briefly describe project scope, address/zoning details, desired completion window..."
                value={formData.details}
                onChange={(e) => setFormData({...formData, details: e.target.value})}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-gold-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gold-gradient hover:bg-gold-gradient-hover text-onyx-950 font-bold rounded-xl text-xs uppercase tracking-wider shadow-gold-glow transition-all flex items-center justify-center gap-2"
            >
              <span>Submit Consultation Request</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
