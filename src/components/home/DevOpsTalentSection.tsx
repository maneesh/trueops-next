'use client';

import Image from 'next/image';
import React from 'react';

type ContentItem = {
  type: 'text' | 'image';
  data: string;
};

interface DevOpsTalentSectionProps {
  data: ContentItem[];
}

const DevOpsTalentSection: React.FC<DevOpsTalentSectionProps> = ({ data }) => {
  const image = data.find(item => item.type === 'image')?.data || '';
  const texts = data.filter(item => item.type === 'text').map(item => item.data);

  return (
    <section className="flex flex-col lg:flex-row items-center gap-10 px-6 md:px-20 py-20 text-center lg:text-left">
      {/* Image */}
      <div className="mx-auto">
        {image && (
          <Image
            src={image}
            alt="DevOps Talent"
            width={400}
            height={300}
            priority
            className="h-72 w-auto object-cover mx-auto"
          />
        )}
      </div>

      {/* Text */}
      <div className="text-black max-w-lg mx-auto">
        <h3 className="text-4xl font-bold">{texts[0]}</h3>
        <h3 className="text-4xl font-bold mt-2">{texts[1]}</h3>
        <p className="text-lg mt-4 text-justify">{texts[2]}</p>

        {texts[3] && (
          <button className="mt-6 px-6 py-2 bg-[#5bc033] text-white hover:bg-lime-700 hover:text-black rounded font-semibold transition duration-300">
            {texts[3]}
          </button>
        )}
      </div>
    </section>
  );
};

export default DevOpsTalentSection;
