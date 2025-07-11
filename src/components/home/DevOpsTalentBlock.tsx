'use client';

import Image from 'next/image';
import React from 'react';

type ContentItem = {
  type: 'text' | 'image';
  data: string;
};

interface DevOpsTalentBlockProps {
  data: ContentItem[];
}

const DevOpsTalentBlock: React.FC<DevOpsTalentBlockProps> = ({ data }) => {
  const texts = data.filter((item) => item.type === 'text').map((item) => item.data.trim());
  const image = data.find((item) => item.type === 'image')?.data || '';

  const [title, descriptionTop, descriptionBottom, buttonText] = texts;

  return (
    <section className="px-6 md:px-20 py-20">
      <div className="flex flex-col lg:flex-row lg:gap-10 lg:pl-20">

        {/* Left: Image & Title Section */}
        <div className="w-full lg:w-1/2">
          <div className="border-b-4 border-[#5bc033] w-80 rounded-full mb-8 mx-auto lg:mx-0" />
          <h3 className="text-4xl font-bold mb-6">{title}</h3>
          <p className="text-lg text-black text-justify max-w-3xl mx-auto lg:mx-0">
            {descriptionTop}
          </p>

          <div className="mt-6">
            {image && (
              <Image
                src={image}
                alt="DevOps Projects"
                width={800}
                height={400}
                className="h-96 w-full object-cover rounded shadow-lg"
              />
            )}
          </div>
        </div>

        {/* Right: Content Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-12 lg:mt-0">
          <p className="text-xl text-black text-justify max-w-3xl mx-auto lg:mx-0">
            {descriptionBottom}
          </p>

          <div className="flex justify-center lg:justify-start">
            <button className="mt-6 w-full md:w-[300px] px-6 py-2 bg-[#5bc033] text-white hover:bg-lime-700 hover:text-black rounded font-semibold transition duration-300">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevOpsTalentBlock;
