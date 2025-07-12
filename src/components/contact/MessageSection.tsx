'use client';

import Image from 'next/image';
import React from 'react';

interface SectionData {
  type: 'text' | 'image';
  name?: string;
  data: string;
}

interface MessageSectionProps {
  data: SectionData[] | { data: SectionData[] };
}

const MessageSection: React.FC<MessageSectionProps> = ({ data }) => {
  // Type guard to safely extract the array
  const resolvedData: SectionData[] = Array.isArray(data)
    ? data
    : Array.isArray((data as any)?.data)
      ? (data as any).data
      : [];
  const textSections = resolvedData.filter((item: SectionData) => item.type === 'text');
  const imageSection = resolvedData.find((item: SectionData) => item.type === 'image');

  return (
    <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-md px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
      {/* Left Text Section */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        {textSections.map((section, index) => (
          <div key={index} className={index !== 0 ? 'mt-6' : ''}>
            <h2 className="font-bold text-2xl">{section.name}</h2>
            <div className="h-[2px] bg-gray-300 w-20 mt-5 mb-3" />
            <div className="space-y-1">
              {section.data.split(/[\r\n]+|(?<=[.])\s+/).map((line, i) => (
                <p key={i}>{line.trim()}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Right Image Section */}
      {imageSection && (
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={imageSection.data}
            alt="TrueOps Contact"
            width={300}
            height={300}
            className="w-full max-w-xs object-cover rounded-lg shadow-md"
          />
        </div>
      )}
    </section>

  );
};

export default MessageSection;
