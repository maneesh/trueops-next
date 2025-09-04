



'use client';

import React from 'react';

export type ContentItem = {
  type: 'media' | 'text';
  data: string;
  media_ref: string;
};

interface HeroProps {
  data1: ContentItem[];
  data2?: ContentItem[];
}

const Hero: React.FC<HeroProps> = ({ data1 }) => {
  // Extract image and text
  const bgImage = data1?.find((item) => item.type === 'media')?.media_ref || '';
  const textItems = data1.filter((item) => item.type === 'text');

  const titleLine1 = textItems[0]?.data || '';
  const titleLine2 = textItems[1]?.data || '';
  const titleLine3 = textItems[2]?.data || '';
  const paragraphText = textItems[3]?.data || '';

  const paragraphs = paragraphText
    .split(/(?<=\.)\s+|(?<=%|\.)\s+|(?<=\D)\s+(?=[A-Z])/g)
    .filter(Boolean);

  return (
    <div className="relative w-full min-h-screen">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full min-h-[100vh] z-0"
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : 'none',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content block */}
      <div className="relative z-10 px-6 md:px-24 py-16 flex flex-col lg:flex-row items-center justify-between gap-10 min-h-screen">
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
