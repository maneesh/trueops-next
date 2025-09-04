







'use client';

import Image from 'next/image';
import React from 'react';

interface ContentItem {
  type: 'text' | 'media';
  data: string;
  name?: string;
  media_ref?: string;
}

interface DevOpsSectionProps {
  data: {
    header2: ContentItem[];
    Middle: ContentItem[];
    lowerMiddle: ContentItem[];
  };
}

const DevOpsSection: React.FC<DevOpsSectionProps> = ({ data }) => {
  // ========== HEADER2 ==========
  const headerTexts = data.header2.filter(item => item.type === 'text').map(item => item.data);
  const trainingText = data.header2.find(item => item.data?.trim() === 'DEVOPS TRAINING')?.data.trim() || '';
  const applyNowText = data.header2.find(item => item.data?.trim() === 'Apply Now')?.data.trim();
  const trainingImage = data.header2.find(item => item.type === 'media')?.media_ref || data.header2.find(item => item.type === 'media')?.data;
  const trainingDesc1 = headerTexts[1] || '';
  const trainingDesc2 = headerTexts[2] || '';
  const trainingDesc3 = headerTexts[3] || '';

  const trainingHeadingWords = trainingText.split(' ');

  // ========== MIDDLE ==========
  const whyDevOpsItem = data.Middle.find(item =>
    item.name?.trim().toUpperCase().includes('WHY DEVOPS')
  );
  const whyDevOpsImage = data.Middle.find(item => item.type === 'media')?.media_ref || '';
  const upcomingBatches =
    data.Middle.find(item => item.data?.trim().toUpperCase() === 'UPCOMING BATCHES')?.data?.trim() || '';
  const upcomingButton =
    data.Middle.find(item => item.data?.toLowerCase().includes('new batch'))?.data.trim() || '';

  // ========== LOWER MIDDLE ==========
  const trainingFormatTitle =
    data.lowerMiddle.find(item => item.data?.trim().toUpperCase() === 'TRAINING FORMAT')?.data.trim() || '';
  const formatImages = data.lowerMiddle.filter(item => item.type === 'media');
  const formatTexts = data.lowerMiddle.filter(
    item => item.type === 'text' && item.data?.trim().toUpperCase() !== 'TRAINING FORMAT'
  );

  return (
    <>
      {/* ==== DevOps Training Section ==== */}
      <section className="flex flex-col md:flex-row items-center justify-center py-20 px-6 space-y-10 md:space-y-0 md:space-x-20">
        <div className="text-center md:text-left">
          {trainingHeadingWords.length >= 2 && (
            <h2 className="text-4xl font-bold">
              <span className="text-lime-500">{trainingHeadingWords[0]}</span>
              <br />
              {trainingHeadingWords.slice(1).join(' ')}
            </h2>
          )}
          <p className="mt-4 text-sm md:text-base">{trainingDesc1}</p>
          <p className="mt-4 text-sm md:text-base">{trainingDesc2}</p>
          <p className="mt-4 text-sm md:text-base">{trainingDesc3}</p>

          {applyNowText && (
            <button className="bg-lime-500 text-white px-6 py-2 rounded mt-6">
              {applyNowText}
            </button>
          )}
        </div>

        {trainingImage && (
          <Image
            className="w-40 md:w-60"
            src={trainingImage}
            alt="DevOps Training"
            width={240}
            height={240}
            style={{ height: 'auto' }}
          />
        )}
      </section>

      {/* ==== Why DevOps Section ==== */}
      {whyDevOpsItem && (
        <section className="flex flex-col md:flex-row items-center justify-center py-20 px-6 space-y-10 md:space-y-0 md:space-x-12">
          {whyDevOpsImage && (
            <Image
              className="w-40 md:w-60"
              src={whyDevOpsImage}
              alt="Why DevOps"
              width={240}
              height={240}
              style={{ height: 'auto' }}
            />
          )}
          <div className="text-center md:text-left">
            {whyDevOpsItem.name && (
              <h2 className="text-5xl font-bold">
                <span className="text-lime-500">
                  {whyDevOpsItem.name.split(' ')[0]}
                </span>
                <br />
                {whyDevOpsItem.name.split(' ').slice(1).join(' ')}
              </h2>
            )}
            {whyDevOpsItem.data && (
              <div className="mt-4 text-base space-y-2">
                {whyDevOpsItem.data.split('. ').map((line, idx) => (
                  <p key={idx}>{line.trim()}</p>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ==== Upcoming Batch Section ==== */}
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

      {/* ==== Training Format Section (lowerMiddle) ==== */}
      {trainingFormatTitle && formatImages.length >= 2 && formatTexts.length >= 2 && (
        <section className="text-center py-10">
          <h3 className="text-2xl font-bold">{trainingFormatTitle}</h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10 mt-10">
            {[0, 1].map(i => (
              <div key={i}>
                <Image
                  className="w-64 md:w-80"
                  src={formatImages[i]?.media_ref || formatImages[i]?.data}
                  alt={`Format ${i + 1}`}
                  width={320}
                  height={320}
                  style={{ height: 'auto' }}
                />
                <h4 className="text-xl font-bold mt-2">{formatImages[i]?.name || 'Format'}</h4>
                {formatTexts[i]?.data && (
                  <button className="bg-lime-500 text-white px-6 py-2 rounded mt-5">
                    {formatTexts[i].data}
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default DevOpsSection;
