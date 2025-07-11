'use client';

import React from 'react';

type ContentItem = {
  type: 'image' | 'text';
  data: string;
};

interface HeroProps {
  data1: ContentItem[]; 
  data2?: ContentItem[]; 
}

const Hero: React.FC<HeroProps> = ({ data1 }) => {
  // Get background image
  const bgImage = data1.find(item => item.type === 'image')?.data || '';

  // Get texts
  const textItems = data1.filter(item => item.type === 'text');
  const titleLine1 = textItems[0]?.data || '';
  const titleLine2 = textItems[1]?.data || '';
  const titleLine3 = textItems[2]?.data || '';
  const paragraphText = textItems[3]?.data || '';

  // Split long paragraph into sentences
const paragraphs = paragraphText
  .split(/(?<=\.)\s+|(?<=%|\.)\s+|(?<=\D)\s+(?=[A-Z])/g)
  .filter(Boolean);


  return (
    <div className="relative w-full min-h-screen">
      {/* White Background Layer */}
      <div className="absolute inset-0 bg-white" />

      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-24 py-16 flex flex-col lg:flex-row items-center justify-between gap-10 min-h-screen">
        {/* Text Block */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white">{titleLine1}</h1>
          <h1 className="text-4xl md:text-6xl font-bold text-[#5bc033] mt-2">{titleLine2}</h1>
          <h1 className="text-4xl md:text-6xl font-bold mt-2 text-white">{titleLine3}</h1>

          <div className="mt-4 space-y-2 text-lg text-white">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p.trim()}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
