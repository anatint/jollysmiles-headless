import React from 'react';

interface ContactMapProps {
  address?: string;
  mapEmbedUrl?: string;
  mapImage?: string;
}

function cleanHtmlText(text?: string): string {
  if (!text) return '';
  return text
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

export default function ContactMap({ address, mapEmbedUrl }: ContactMapProps) {
  const cleanAddress = cleanHtmlText(address) || "102 Sleepy Hollow Dr #100, Middletown, DE 19709, USA";
  const query = encodeURIComponent(cleanAddress);

  const iframeSrc = (mapEmbedUrl && mapEmbedUrl.includes('output=embed'))
    ? mapEmbedUrl
    : `https://maps.google.com/maps?q=${query}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="bg-white py-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[5/2] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          <iframe 
            src={iframeSrc}
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
