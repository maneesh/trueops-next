

'use client';

import Image from 'next/image';
import React from 'react';

interface ContentItem {
  type: 'text' | 'media';
  data: string;
  name: string;
  media_ref?: string;
}

interface Props {
  whyChooseUsSectionData: ContentItem[];
}

const WhyChooseUsSection: React.FC<Props> = ({ whyChooseUsSectionData }) => {
  const BannerImg = whyChooseUsSectionData?.[7]?.media_ref;
  const whyChooseUsTiles = whyChooseUsSectionData?.slice(9, 13);

  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center my-20 md:space-x-24 gap-10 px-4">
        <div className="max-w-md text-center items-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            {whyChooseUsSectionData?.[0]?.data}
          </h1>
          <p className="leading-relaxed text-sm sm:text-base">
            {whyChooseUsSectionData?.[1]?.data}
            <br />
            {whyChooseUsSectionData?.[2]?.data}
            <br />
            {whyChooseUsSectionData?.[3]?.data}
            <br />
            {whyChooseUsSectionData?.[4]?.data}
            <br />
            {whyChooseUsSectionData?.[5]?.data}
          </p>
          <button className="bg-lime-500 text-white px-6 py-2 rounded mt-6 hover:bg-lime-600 transition duration-200">
            {whyChooseUsSectionData?.[6]?.data}
          </button>
        </div>

        <div className="w-96 h-[26rem] border-2 border-black rounded-lg rotate-[-3deg] p-1 relative">
          {BannerImg && (
            <Image
              src={BannerImg}
              alt="Training Banner"
              fill
              className="rounded-lg object-cover rotate-[3deg]"
              sizes="(max-width: 768px) 100vw, 384px"
            />
          )}
        </div>
      </section>

      {/* Why Choose Us Title */}
      <section className="flex items-center justify-center py-10">
        <h1 className="text-3xl sm:text-5xl font-bold text-center">
          {whyChooseUsSectionData?.[8]?.data}
        </h1>
      </section>

      {/* Features Section */}
      <div className="flex flex-col md:flex-row md:space-x-16 justify-center items-center mb-20 px-4 gap-10 flex-wrap">
        {whyChooseUsTiles &&
          whyChooseUsTiles.map((value, index) => {
            const imageSrc = value.media_ref || value.data;

            return (
              <div className="text-center" key={index}>
                <div className="relative w-[150px] h-[150px]">
                  {imageSrc && (
                    <Image
                      src={imageSrc}
                      alt={value.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 150px"
                      className="object-contain"
                    />
                  )}
                </div>
                <p className="mt-2 text-lg font-medium">{value.name}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default WhyChooseUsSection;
