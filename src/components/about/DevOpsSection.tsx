'use client';

import Image from 'next/image';
import React from 'react';

interface ContentItem {
  type: string;
  data: string;
  name?: string;
}

interface DevOpsSectionProps {
  data: {
    header2: ContentItem[];
    Middle: ContentItem[];
    lowerMiddle: ContentItem[];
  };
}

const DevOpsSection: React.FC<DevOpsSectionProps> = ({ data }) => {

  // Extract from header2
  const trainingText = data.header2.find(item => item.data?.trim() === 'DEVOPS TRAINING')?.data.trim() || '';
  const applyNowText = data.header2.find(item => item.data?.trim() === 'Apply Now')?.data.trim();
  const trainingImage = data.header2.find(item => item.type === 'image')?.data.trim();
  const trainingDesc = data.header2.find(item => item.data?.includes('professionals.'))
  //console.log("this is training text :",trainingDesc);
  

  // Extract from Middle
  const whyDevOpsItem = data.Middle.find(item => item.name?.trim().toUpperCase().includes('WHY DEVOPS'));
  const whyDevOpsImage = data.Middle.find(item => item.type === 'image')?.data.trim();
  const upcomingBatches =
    data.Middle.find(item => item.name?.trim().toUpperCase() === 'UPCOMING BATCHES')?.name?.trim() ||
    data.Middle.find(item => item.data?.trim().toUpperCase() === 'UPCOMING BATCHES')?.data?.trim();
  const upcomingButton = data.Middle.find(item =>
    item.data?.toLowerCase().includes('new batch')
  )?.data?.trim();
   //console.log(whyDevOpsItem);
   
  // Extract from lowerMiddle
  const trainingFormatTitle = data.lowerMiddle.find(item => item.data?.trim().toUpperCase() === 'TRAINING FORMAT')?.data.trim();
  const trainingImages = data.lowerMiddle.filter(item => item.type === 'image');
  const formatTexts = data.lowerMiddle.filter(item =>
    item.type === 'text' && item.data?.trim().toUpperCase() !== 'TRAINING FORMAT'
  );

  // Split training heading into words for stylized heading
  const trainingHeadingWords = trainingText.split(' ');

  return (
    <>
      {/* DevOps Training Section */}
      <section className="flex flex-col md:flex-row items-center justify-center py-20 px-6 space-y-10 md:space-y-0 md:space-x-20">
        <div className="text-center md:text-left">
          {trainingHeadingWords.length >= 2 && (
            <h2 className="text-4xl font-bold ">
              <span className="text-lime-500">{trainingHeadingWords[0]}</span>
              <br />
              {trainingHeadingWords.slice(1).join(' ')}
            </h2>
          )}
          <p className="mt-4 text-sm md:text-base whitespace-pre-line">{trainingDesc?.data.slice(0,30)}</p>
          <p className="mt-4 text-sm md:text-base whitespace-pre-line">{trainingDesc?.data.slice(31,61)}</p>
          <p className="mt-4 text-sm md:text-base whitespace-pre-line">{trainingDesc?.data.slice(62,75)}</p>

          {applyNowText && (
            <button className="bg-lime-500 text-white px-6 py-2 rounded mt-6">
              {applyNowText}
            </button>
          )}
        </div>
        {trainingImage && (
          <div className="flex space-x-6">
            <Image
              className="w-40 md:w-60"
              src={trainingImage}
              alt="DevOps Training"
              width={240}
              height={240}
              style={{ height: 'auto' }}
            />
          </div>
        )}
      </section>

      {/* Why DevOps Section */}
      <section className="flex flex-col md:flex-row items-center justify-center py-20 px-6 space-y-10 md:space-y-0 md:space-x-12">
        {whyDevOpsImage && (
          <div>
            <Image
              className="w-40 md:w-60"
              src={whyDevOpsImage}
              alt="Why DevOps"
              width={240}
              height={240}
              style={{ height: 'auto' }}
            />
          </div>
        )}
        <div className="text-center md:text-left">
          {whyDevOpsItem?.name && (
            <h2 className="text-5xl font-bold">
              {(() => {
                const [first, ...rest] = whyDevOpsItem.name.trim().split(' ');
                return (
                  <>
                    <span className="text-lime-500">{first}</span>
                    <br />
                    {rest.join(' ')}
                  </>
                );
              })()}
            </h2>
          )}
          <p className="mt-4 whitespace-pre-line">{whyDevOpsItem?.data.slice(0,30)}</p>
          <p className="mt-4 whitespace-pre-line">{whyDevOpsItem?.data.slice(31,61)}</p>
          <p className="mt-4 whitespace-pre-line">{whyDevOpsItem?.data.slice(62,75)}</p>
        </div>
      </section>

      {/* Upcoming Batch Section */}
      {upcomingBatches && upcomingButton && (
        <section className="bg-[#cdecc1] py-10 text-center md:text-left px-4 md:px-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h3 className="text-xl font-bold mb-4 md:mb-0">{upcomingBatches}</h3>
            <button className="bg-lime-500 text-white px-6 py-3 rounded font-bold">
              {upcomingButton}
            </button>
          </div>
        </section>
      )}

      {/* Training Format Section */}
      {trainingImages.length >= 2 && formatTexts.length >= 2 && (
        <section className="text-center py-10">
          <h3 className="text-2xl font-bold">{trainingFormatTitle}</h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10 mt-10">
            {[0, 1].map((i) => (
              <div key={i}>
                <Image
                  className="w-64 md:w-80"
                  src={trainingImages[i]?.data.trim()}
                  alt={`Format ${i + 1}`}
                  width={320}
                  height={320}
                  style={{ height: 'auto' }}
                />
                <h3 className="text-xl font-bold mt-2">{trainingImages[i]?.name || 'Format'}</h3>
                <button className="bg-lime-500 text-white px-6 py-2 rounded mt-5">
                  {formatTexts[i]?.data.trim()}
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default DevOpsSection;
