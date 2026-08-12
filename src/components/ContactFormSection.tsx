import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
// Force rebuild comment

export interface ContactSettingsData {
  heading?: string;
  subheading?: string;
  description?: string;
  phone?: string;
  email?: string;
  address?: string;
  formFields?: {
    fields: Array<{
      name: string;
      label: string;
      type: string;
      required: boolean;
      options?: string[];
    }>;
  };
  officeHours?: {
    schedule: Array<{
      days: string;
      hours: string;
    }>;
  };
}

export default function ContactFormSection({ data }: { data?: ContactSettingsData }) {
  const formFields = data?.formFields?.fields || [];
  const officeHours = data?.officeHours?.schedule || [];

  // Fallbacks in case data isn't loaded yet
  const heading = data?.heading || "Ready to perfect your smile?";
  const subheading = data?.subheading || "GET IN TOUCH";
  const description = data?.description || "Fill out the form or use our contact details.<br/>Our team will get back to you as soon as possible.";
  const phone = data?.phone || "302 DR-TEETH (378-3384)";
  const email = data?.email || "drteeth@jollysmiles.com";
  const address = data?.address || "102 Sleepy Hollow Drive, Suite 100, Middletown, DE 19709";

  return (
    <div id="contact-form" className="bg-white py-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Column: Contact Info */}
          <div className="flex-1 lg:max-w-md mt-8">
            <h4 className="text-brand-red font-bold tracking-widest text-xs uppercase mb-4">
              {subheading}
            </h4>
            <h2 
              className="text-[35px] font-extrabold text-gray-900 mb-6 leading-tight"
              dangerouslySetInnerHTML={{ __html: heading.replace('your smile?', '<span class="text-brand-red">your smile?</span>') }}
            />
            <div 
              className="text-gray-600 text-base md:text-lg mb-12 max-w-md leading-relaxed prose prose-sm"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            <div className="space-y-8">
              {/* Call Us */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-brand-red/30">
                  <Phone className="w-5 h-5 text-brand-red" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Call Us</h4>
                  <p className="text-gray-600 text-sm mb-1">{phone}</p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-brand-red/30">
                  <Mail className="w-5 h-5 text-brand-red" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Email Us</h4>
                  <p className="text-gray-600 text-sm mb-1">{email}</p>
                  <p className="text-gray-500 text-xs font-medium">We reply within 24 hours</p>
                </div>
              </div>

              {/* Visit Us */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-brand-red/30">
                  <MapPin className="w-5 h-5 text-brand-red" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Visit Us</h4>
                  <div 
                    className="text-gray-600 text-sm prose prose-sm"
                    dangerouslySetInnerHTML={{ __html: address }}
                  />
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-brand-red/30">
                  <Clock className="w-5 h-5 text-brand-red" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Office Hours</h4>
                  {officeHours.length > 0 ? (
                    officeHours.map((oh, idx) => (
                      <p key={idx} className="text-gray-600 text-sm mb-1">
                        {oh.days}: {oh.hours}
                      </p>
                    ))
                  ) : (
                    <>
                      <p className="text-gray-600 text-sm mb-1">Mon - Fri: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600 text-sm">Sat - Sun: Closed</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="flex-1 lg:w-[60%]">
            <div className="bg-[#fafafa] p-6 sm:p-8 lg:p-12 rounded-[2rem]">
              <h3 className="text-2xl font-bold text-brand-red mb-8">
                Send Us a Message
              </h3>
              
              <form className="space-y-5">
                {formFields.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {formFields.map((field, idx) => {
                      if (field.type === 'textarea') {
                        return (
                          <div key={idx} className="col-span-1 md:col-span-2">
                            <textarea 
                              placeholder={`${field.label}${field.required ? '*' : ''}`} 
                              rows={6}
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
                              {field.options?.map((opt, oIdx) => (
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
                ) : (
                  <p className="text-gray-500">Form fields loading...</p>
                )}

                <button 
                  type="submit"
                  className="w-full bg-brand-red hover:bg-brand-dark text-white px-8 py-4 rounded-lg text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 mt-4 group"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2 mt-6 text-gray-600 text-xs font-medium">
                  <ShieldCheck className="w-4 h-4 text-brand-red" />
                  <p>We respect your privacy. Your information is safe with us.</p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
