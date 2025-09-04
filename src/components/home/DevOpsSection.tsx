'use client';

import Image from 'next/image';
import React from 'react';

type ContentItem = {
  type: 'text' | 'media';
  data: string;
   media_ref:string
};

interface DevOpsSectionProps {
  data: ContentItem[];
}

const DevOpsSection: React.FC<DevOpsSectionProps> = ({ data }) => {
  //  const bgImage = data?.[0].media_ref
  // console.log("This is bgimg 2 " ,bgImage)
  const texts = data.filter(item => item.type === 'text').map(item => item.data);
  const image = data.find(item => item.type === 'media')?.media_ref || '';
  // console.log(data)
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-10 px-6 md:px-20 py-20 bg-[url('/images/trueops9.jpg')] bg-cover text-center lg:text-left">
      {/* Text Content */}
      <div className="max-w-lg text-black mx-auto">
        <h3 className="text-4xl font-bold">
          <span className="text-lime-500">{texts[0]}</span> {texts[1]}
        </h3>
        <h3 className="text-4xl font-bold mt-4">{texts[2]}</h3>

        {/* Paragraphs */}
        {texts.slice(3).map((text, index) => (
          <p key={index} className="mt-4 text-lg text-justify">
            {text}
          </p>
        ))}
      </div>

      {/* Image */}
      {image && (
        <div className="w-full max-w-md mx-auto">
          <Image
            src={image}
            alt="DevOps"
            width={500}
            height={500}
            className="rounded shadow-lg w-full h-auto"
          />
        </div>
      )}
    </section>
  );
};

export default DevOpsSection;
