"use client";

import React, { useState, useEffect } from 'react';
import { X, User, Mail, Phone, Calendar, ShieldCheck, ChevronDown } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

export default function AppointmentModal() {
  const { isAppointmentModalOpen, closeAppointmentModal } = useModal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isAppointmentModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isAppointmentModalOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAppointmentModal();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [closeAppointmentModal]);

  if (!isAppointmentModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      closeAppointmentModal();
      setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' });
    }, 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto"
      onClick={(e) => { if (e.target === e.currentTarget) closeAppointmentModal(); }}
    >
      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 p-6 md:p-10 animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button 
          onClick={closeAppointmentModal}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900 transition flex items-center justify-center shadow-sm"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-red uppercase tracking-wide font-serif">
            MAKE APPOINTMENT
          </h2>
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 mt-3">
            <div className="w-20 h-[1px] bg-red-200"></div>
            <div className="text-brand-red flex items-center">
              <svg className="w-10 h-3 fill-current" viewBox="0 0 40 12">
                <path d="M20 0c2 0 3 2 4 4 1-2 2-4 4-4s3 2 3 4c0 3-4 6-7 8-3-2-7-5-7-8 0-2 1-4 3-4zm-8 4c0-2 1-4 3-4s3 2 4 4c1-2 2-4 4-4s3 2 3 4c0 3-4 6-7 8-3-2-7-5-7-8z" opacity="0.15" />
                <path d="M20 2c1.5 0 2 1.5 2.5 3 .5-1.5 1-3 2.5-3s2 1.5 2 3c0 2-3 4.5-5 6-2-1.5-5-4-5-6 0-1.5.5-3 2-3z" />
              </svg>
            </div>
            <div className="w-20 h-[1px] bg-red-200"></div>
          </div>
        </div>

        {submitted ? (
          <div className="text-center space-y-4 py-[30px]">
            <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 font-serif">Appointment Requested!</h3>
            <p className="text-gray-500 text-sm max-w-sm mx-auto">
              Thank you for choosing Jolly Smiles. Our coordinator will contact you shortly to confirm your scheduled slot.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-gray-800 mb-1.5 block">
                  Your Name <span className="text-brand-red">*</span>
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full text-sm px-4 py-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-red transition text-gray-800 placeholder-gray-400"
                  />
                  <User className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-800 mb-1.5 block">
                  Your Email <span className="text-brand-red">*</span>
                </label>
                <div className="relative">
                  <input 
                    type="email" 
                    required
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full text-sm px-4 py-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-red transition text-gray-800 placeholder-gray-400"
                  />
                  <Mail className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Row 2: Phone Number */}
            <div>
              <label className="text-xs font-bold text-gray-800 mb-1.5 block">
                Your Number
              </label>
              <div className="relative">
                <input 
                  type="tel" 
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full text-sm px-4 py-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-red transition text-gray-800 placeholder-gray-400"
                />
                <Phone className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>

            {/* Row 3: Choice Option and Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-gray-800 mb-1.5 block">
                  Choose an option <span className="text-brand-red">*</span>
                </label>
                <div className="relative">
                  <select 
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full text-sm px-4 py-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-red transition text-gray-800 placeholder-gray-400 appearance-none bg-white"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="general">General Dentistry</option>
                    <option value="implants">Dental Implants</option>
                    <option value="invisalign">Invisalign®</option>
                    <option value="lanap">LANAP Treatment</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="emergency">Emergency Care</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-800 mb-1.5 block">
                  Select appointment date
                </label>
                <div className="relative">
                  <input 
                    type="date" 
                    placeholder="Select date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full text-sm px-4 py-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-red transition text-gray-800 placeholder-gray-400 bg-white"
                  />
                  <Calendar className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Row 4: Message */}
            <div>
              <label className="text-xs font-bold text-gray-800 mb-1.5 block">
                Additional Message (Optional)
              </label>
              <textarea 
                rows={3}
                placeholder="Type your message here..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full text-sm px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-red transition text-gray-800 placeholder-gray-400 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-brand-red hover:bg-brand-dark text-white py-3.5 px-6 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>

            {/* Privacy Disclaimer */}
            <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500 pt-2 border-t border-gray-100">
              <ShieldCheck className="w-4 h-4 text-brand-red/75" />
              <span>We respect your privacy. Your information is safe with us.</span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
