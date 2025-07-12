'use client';

import Image from 'next/image';
import React from 'react';

type ContentItem = {
  type: 'text' | 'image';
  data: string;
};

interface HowSectionProps {
  MiddleSectionData: ContentItem[];
};
const HowSection: React.FC<HowSectionProps> = ({MiddleSectionData}) => {
  const Middleimage = MiddleSectionData?.[11]?.data
  const Mentor = MiddleSectionData?.[12]?.data 
  const Mountain = MiddleSectionData?.[19]?.data 
  // console.log(MiddleSectionData);
  return (
    <>
      {/* Section 1: DevOps Learning Block */}
      <section className="relative flex flex-col md:flex-row py-20 text-center md:text-left gap-20">
        <div className="md:ml-60 flex flex-col items-center md:items-start px-4">
          <h1 className="md:text-5xl text-2xl font-bold py-2">{MiddleSectionData?.[0]?.data}</h1>
          <h2 className="md:text-5xl text-2xl font-bold">{MiddleSectionData?.[1]?.data}</h2>
          <h3 className="md:text-5xl text-2xl font-bold py-2">{MiddleSectionData?.[2]?.data}</h3>

          <div className="w-max border-[3px] border-[#5cc034] px-2 rounded">
            <h3 className="text-xl md:text-2xl">{MiddleSectionData?.[3]?.data}</h3>
          </div>

          <p className="mt-4 text-sm sm:text-base leading-relaxed">
            {MiddleSectionData?.[4]?.data} <br />
            {MiddleSectionData?.[5]?.data} <br />
            {MiddleSectionData?.[6]?.data} <br />
            {MiddleSectionData?.[7]?.data}
          </p>

          <div className="flex md:flex-row flex-col items-center justify-center mt-10 gap-5">
            <div className="w-max border-[3px] border-[#5cc034] px-4 py-2 rounded">
              <h3 className="text-xl md:text-2xl">{MiddleSectionData?.[8]?.data}</h3>
            </div>
            <div className="w-max border-[3px] border-[#5cc034] px-4 py-2 rounded">
              <h3 className="text-xl md:text-2xl">
                {MiddleSectionData?.[9]?.data} <br /> {MiddleSectionData?.[10]?.data}
              </h3>
            </div>
          </div>
        </div>

        <div style ={{ backgroundImage: `url(${Middleimage})` }} className="lg:w-[750px] lg:h-[480px]  bg-center absolute right-0 rounded-l-3xl hidden md:block"></div>
      </section>

      {/* Section 2: Mentor Highlight */}
      <section className="flex justify-center text-center py-20 px-4">
        <div>
          {Mentor && (
            <Image
            src={Mentor}
            alt="Mentor"
            width={600}
            height={400}
            className="mx-auto"
          />
          )}
          
          <h1 className="mt-6">
            <span className="text-lime-500 text-3xl font-semibold">
              {MiddleSectionData?.[13]?.data}
            </span>
          </h1>
          <h1 className="text-4xl font-semibold mt-2">{MiddleSectionData?.[14]?.data}</h1>
        </div>
      </section>

      {/* Section 3: Why Mentorship Matters */}
      <section className="pb-36 flex justify-center text-center md:text-left px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold py-3">{MiddleSectionData?.[15]?.data}</h1>
          <p className="text-sm sm:text-base leading-relaxed mb-6">
            {MiddleSectionData?.[16]?.data}<br />
            {MiddleSectionData?.[17]?.data}<br />
            {MiddleSectionData?.[18]?.data}
          </p>
          {Mountain && (
            <Image
            src={Mountain}
            alt="Why Mentorship Matters"
            width={700}
            height={400}
            className="mx-auto lg:ml-56"
          />
          )}
          
        </div>
      </section>
    </>
  );
};

export default HowSection;
