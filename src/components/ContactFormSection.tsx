import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ContactFormSection() {
  return (
    <div className="bg-white py-[30px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Column: Contact Info */}
          <div className="flex-1 lg:max-w-md mt-8">
            <h4 className="text-brand-red font-bold tracking-widest text-xs uppercase mb-4">
              GET IN TOUCH
            </h4>
            <h2 className="text-[35px] font-extrabold text-gray-900 mb-6 leading-tight">
              Ready to perfect <br />
              <span className="text-brand-red">your smile?</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-12 max-w-md leading-relaxed">
              Fill out the form or use our contact details.<br/>Our team will get back to you as soon as possible.
            </p>

            <div className="space-y-8">
              {/* Call Us */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-brand-red/30">
                  <Phone className="w-5 h-5 text-brand-red" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Call Us</h4>
                  <p className="text-gray-600 text-sm mb-1">302 DR-TEETH (378-3384)</p>
                  <p className="text-gray-500 text-xs font-medium">Mon - Fri: 9:00 AM - 5:00 PM</p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-brand-red/30">
                  <Mail className="w-5 h-5 text-brand-red" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Email Us</h4>
                  <p className="text-gray-600 text-sm mb-1">drteeth@jollysmiles.com</p>
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
                  <p className="text-gray-600 text-sm mb-1">102 Sleepy Hollow Drive, Suite 100,</p>
                  <p className="text-gray-600 text-sm">Middletown, DE 19709</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-brand-red/30">
                  <Clock className="w-5 h-5 text-brand-red" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Office Hours</h4>
                  <p className="text-gray-600 text-sm mb-1">Mon - Fri: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600 text-sm">Sat - Sun: Closed</p>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Full Name*" 
                      className="w-full px-5 py-3.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red transition-all text-sm text-gray-700"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Phone Number*" 
                      className="w-full px-5 py-3.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red transition-all text-sm text-gray-700"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email Address*" 
                      className="w-full px-5 py-3.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red transition-all text-sm text-gray-700"
                      required
                    />
                  </div>
                  <div>
                    <select 
                      className="w-full px-5 py-3.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red transition-all text-sm text-gray-700 appearance-none"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>Subject*</option>
                      <option value="appointment">Book an Appointment</option>
                      <option value="inquiry">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <textarea 
                    placeholder="How can we help you?*" 
                    rows={6}
                    className="w-full px-5 py-4 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red transition-all text-sm text-gray-700 resize-none"
                    required
                  ></textarea>
                </div>

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
