import React from 'react'

const partnerLogos = [
  { name: 'Morgan Stanley', src: '/partners/morgan-stanley.svg' },
  { name: 'National Bank', src: '/partners/national-bank.svg' },
  { name: 'Expedia Group', src: '/partners/expedia-group.svg' },
  { name: 'MongoDB', src: '/partners/mongodb.svg' },
  { name: 'Desjardins Bank', src: '/partners/desjardins.svg' },
  { name: 'RBC', src: '/partners/rbc.svg' },
  { name: 'CIBC', src: '/partners/cibc.svg' },
  { name: 'TD', src: '/partners/td.svg' },
  { name: 'Ericsson', src: '/partners/ericsson.svg' },
  { name: 'IQware', src: '/partners/iqware.png' },
]

export default function PartnerLogoCarousel() {
  // Double the logos for continuous scroll effect
  const duplicatedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-scroll gap-12 items-center">
        {duplicatedLogos.map(({ name, src }, index) => (
          <div 
            key={`${name}-${index}`} 
            className="flex-shrink-0 flex items-center justify-center h-16"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={name}
              className="h-16 w-auto max-w-[120px] object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
} 