import { CalendarDays, Phone } from 'lucide-react';

export default function TechnologiesCTA() {
  return (
    <section className="py-6 bg-white py-[30px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-50 rounded-2xl p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 border border-red-100">
          
          <div className="flex items-start md:items-center gap-6 lg:w-3/5">
            <div className="flex-shrink-0 text-brand-red bg-white p-4 rounded-xl shadow-sm hidden md:block">
              <CalendarDays className="w-10 h-10" strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-[35px] leading-tight font-bold text-brand-red mb-2">
                Experience the Difference
              </h2>
              <p className="text-gray-700 text-lg">
                Our advanced technology and caring team work together to give you the best possible dental care.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <button className="bg-brand-red text-white hover:bg-brand-dark px-6 py-2.5 rounded font-bold uppercase tracking-wider transition-all duration-300 shadow-md text-sm whitespace-nowrap">
              Book Appointment
            </button>
            <button className="bg-white border-2 border-brand-red text-brand-red hover:bg-red-50 px-6 py-2.5 rounded font-bold uppercase tracking-wider transition-all duration-300 shadow-sm flex items-center justify-center gap-2 text-sm whitespace-nowrap">
              <Phone className="w-4 h-4" />
              302 DR-TEETH (378-3384)
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
