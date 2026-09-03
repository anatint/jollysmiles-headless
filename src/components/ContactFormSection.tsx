"use client";

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export interface ContactSettingsData {
  heading?: string;
  subheading?: string;
  description?: string;
  callTitle?: string;
  callPhone?: string;
  callHours?: string;
  phone?: string;
  emailTitle?: string;
  emailAddress?: string;
  email?: string;
  emailNote?: string;
  visitTitle?: string;
  visitAddress?: string;
  address?: string;
  officeHoursTitle?: string;
  officeHours?: any;
  formHeading?: string;
  privacyNote?: string;
  formSubjectOptions?: string[];
  formFields?: {
    fields: Array<{
      name: string;
      label: string;
      type: string;
      required: boolean;
      options?: string[];
    }>;
  };
}

function cleanHtmlText(text?: string): string {
  if (!text) return '';
  return text
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

export default function ContactFormSection({ data }: { data?: ContactSettingsData }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Parse Form Fields if passed as string or object
  let formFields: any[] = [];
  if (data?.formFields) {
    const raw = typeof data.formFields === 'string' ? JSON.parse(data.formFields) : data.formFields;
    formFields = raw?.fields || (Array.isArray(raw) ? raw : []);
  }

  // Fallback fields if CMS doesn't specify
  if (formFields.length === 0) {
    formFields = [
      { name: 'fullName', label: 'Full Name', type: 'text', required: true },
      { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
      { name: 'email', label: 'Email Address', type: 'email', required: true },
      { 
        name: 'service', 
        label: 'Select Service', 
        type: 'select', 
        required: true, 
        options: data?.formSubjectOptions || [
          'General Dentistry',
          'Cosmetic Dentistry',
          'Dental Implants',
          'Invisalign',
          'Emergency Care',
          'LANAP Treatment'
        ] 
      },
      { name: 'message', label: 'Message', type: 'textarea', required: true }
    ];
  }

  // Parse Office Hours
  let officeHoursLines: string[] = [];
  if (data?.officeHours) {
    if (typeof data.officeHours === 'string') {
      const cleaned = cleanHtmlText(data.officeHours);
      officeHoursLines = cleaned.split('\n').filter(Boolean);
    } else if (Array.isArray(data.officeHours)) {
      officeHoursLines = data.officeHours.map((oh: any) => `${oh.days || ''}: ${oh.hours || ''}`);
    } else if (data.officeHours?.schedule) {
      officeHoursLines = data.officeHours.schedule.map((oh: any) => `${oh.days || ''}: ${oh.hours || ''}`);
    }
  }

  if (officeHoursLines.length === 0) {
    officeHoursLines = ['Mon - Fri: 9:00 AM - 5:00 PM', 'Sat - Sun: Closed'];
  }

  // Headings & Labels
  const rawHeading = data?.heading || "Ready to perfect your smile?";
  const heading = rawHeading.includes('<')
    ? rawHeading
    : rawHeading.replace(/your smile/i, '<span class="text-brand-red">your smile</span>');

  const subheading = cleanHtmlText(data?.subheading) || "GET IN TOUCH";
  const description = cleanHtmlText(data?.description) || "Fill out the form or use our contact details. Our team will get back to you as soon as possible.";

  const callTitle = cleanHtmlText(data?.callTitle) || "Call Us";
  const phone = cleanHtmlText(data?.callPhone || data?.phone) || "302 DR-TEETH (378-3384)";
  const callHours = cleanHtmlText(data?.callHours) || "";

  const emailTitle = cleanHtmlText(data?.emailTitle) || "Email Us";
  const email = cleanHtmlText(data?.emailAddress || data?.email) || "drteeth@jollysmiles.com";
  const emailNote = cleanHtmlText(data?.emailNote) || "We reply within 24 hours";

  const visitTitle = cleanHtmlText(data?.visitTitle) || "Visit Us";
  const address = cleanHtmlText(data?.visitAddress || data?.address) || "102 Sleepy Hollow Drive, Suite 100, Middletown, DE 19709";

  const officeHoursTitle = cleanHtmlText(data?.officeHoursTitle) || "Office Hours";
  const formHeading = cleanHtmlText(data?.formHeading) || "Send Us a Message";
  const privacyNote = cleanHtmlText(data?.privacyNote) || "We respect your privacy. Your information is safe with us.";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div id="contact-form" className="bg-white py-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Column: Contact Info */}
          <div className="flex-1 lg:max-w-md mt-4">
            <h4 className="text-brand-red font-bold tracking-widest text-xs uppercase mb-3">
              {subheading}
            </h4>
            <h2 
              className="text-[32px] sm:text-[36px] font-extrabold text-gray-900 mb-4 leading-tight font-serif"
              dangerouslySetInnerHTML={{ __html: heading }}
            />
            <p className="text-gray-600 text-base mb-10 leading-relaxed">
              {description}
            </p>

            <div className="space-y-6">
              {/* Call Us */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-brand-red/30 bg-red-50/50">
                  <Phone className="w-5 h-5 text-brand-red" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{callTitle}</h4>
                  <a href={`tel:${phone.replace(/[^0-9]/g, '')}`} className="text-gray-700 text-sm font-medium hover:text-brand-red transition">
                    {phone}
                  </a>
                  {callHours && <p className="text-gray-500 text-xs mt-0.5">{callHours}</p>}
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-brand-red/30 bg-red-50/50">
                  <Mail className="w-5 h-5 text-brand-red" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{emailTitle}</h4>
                  <a href={`mailto:${email}`} className="text-gray-700 text-sm font-medium hover:text-brand-red transition">
                    {email}
                  </a>
                  <p className="text-gray-500 text-xs mt-0.5">{emailNote}</p>
                </div>
              </div>

              {/* Visit Us */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-brand-red/30 bg-red-50/50">
                  <MapPin className="w-5 h-5 text-brand-red" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{visitTitle}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{address}</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-brand-red/30 bg-red-50/50">
                  <Clock className="w-5 h-5 text-brand-red" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{officeHoursTitle}</h4>
                  {officeHoursLines.map((line, idx) => (
                    <p key={idx} className="text-gray-700 text-sm leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="flex-1 lg:w-[60%]">
            <div className="bg-[#fafafa] p-6 sm:p-8 lg:p-12 rounded-[2rem] border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-brand-red mb-6 font-serif">
                {formHeading}
              </h3>
              
              {submitted ? (
                <div className="bg-white p-8 rounded-xl border border-green-200 text-center space-y-4 shadow-sm my-8">
                  <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
                  <h4 className="text-xl font-bold text-gray-900 font-serif">Thank you!</h4>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
                    Your message has been successfully received. Our team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-brand-red text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-brand-dark transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {formFields.map((field, idx) => {
                      if (field.type === 'textarea') {
                        return (
                          <div key={idx} className="col-span-1 md:col-span-2">
                            <textarea 
                              placeholder={`${field.label}${field.required ? '*' : ''}`} 
                              rows={5}
                              className="w-full px-5 py-4 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red transition-all text-sm text-gray-700 resize-none"
                              required={field.required}
                            ></textarea>
                          </div>
                        );
                      }
                      
                      if (field.type === 'select') {
                        return (
                          <div key={idx} className="col-span-1 md:col-span-2">
                            <select 
                              className="w-full px-5 py-3.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red transition-all text-sm text-gray-700 appearance-none"
                              required={field.required}
                              defaultValue=""
                            >
                              <option value="" disabled>{field.label}{field.required ? '*' : ''}</option>
                              {field.options?.map((opt: string, oIdx: number) => (
                                <option key={oIdx} value={opt}>{opt}</option>
                              ))}
                            </select>
                          </div>
                        );
                      }

                      return (
                        <div key={idx} className="col-span-1">
                          <input 
                            type={field.type} 
                            placeholder={`${field.label}${field.required ? '*' : ''}`} 
                            className="w-full px-5 py-3.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red transition-all text-sm text-gray-700"
                            required={field.required}
                          />
                        </div>
                      );
                    })}
                  </div>

                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-brand-red hover:bg-brand-dark text-white px-8 py-4 rounded-lg text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 mt-4 group cursor-pointer disabled:opacity-75"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  </button>

                  <div className="flex items-center gap-2 mt-6 text-gray-600 text-xs font-medium">
                    <ShieldCheck className="w-4 h-4 text-brand-red" />
                    <p>{privacyNote}</p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

