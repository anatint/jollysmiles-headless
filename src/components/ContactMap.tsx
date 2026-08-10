import Image from 'next/image';

export default function ContactMap() {
  return (
    <div className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[5/2] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          <iframe 
            src="https://maps.google.com/maps?q=102%20Sleepy%20Hollow%20Dr%20%23100,%20Middletown,%20DE%2019709,%20USA&t=&z=14&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Jolly Smiles Location Map"
          ></iframe>
        </div>

      </div>
    </div>
  );
}
