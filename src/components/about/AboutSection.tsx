


'use client';

import Image from 'next/image';

interface ContentItem {
  type: 'text' | 'media';
  data: string;
  name?: string;
  title?: string;
  media_ref?: string;
}

interface AboutSectionProps {
  data: ContentItem[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  // Extract media and text items
  const mediaItems = data.filter(item => item.type === 'media');
  const textItem = data.find(item => item.type === 'text');

  const bgImage = mediaItems[0]?.media_ref || mediaItems[0]?.data || '';
  const secondImage = mediaItems[1]?.media_ref || mediaItems[1]?.data || '';

  const heading = textItem?.name || textItem?.title || '';
  const textBlock = textItem?.data || '';

  // Split text into sentences or logical lines
  const lines = textBlock.split(/(?<=\.)\s|(?<=%)(?=\s)|(?<=[a-z])(?=\s[A-Z])/g);

  return (
    <section
      className="w-full bg-cover bg-no-repeat py-10 px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-6xl mx-auto relative min-h-[60vh] flex flex-col lg:flex-row lg:items-center lg:justify-center">
        
        {/* Floating Image (Cloud-style) */}
        {secondImage && (
          <div className="flex justify-center lg:justify-start lg:absolute lg:top-10 lg:left-10">
            <Image
              src={secondImage}
              alt="Decorative"
              width={240}
              height={240}
              className="w-28 md:w-60 object-contain"
              priority
            />
          </div>
        )}

        {/* Text Block */}
        <div className="flex-1 flex items-center justify-center mt-6 lg:mt-0">
          <div className="max-w-xl text-center lg:text-left">
            {heading && (
              <h3 className="text-3xl md:text-5xl font-bold">
                {heading.split(' ')[0]}{' '}
                <span className="text-lime-500">
                  {heading.split(' ').slice(1).join(' ')}
                </span>
              </h3>
            )}

            <div className="mt-6 space-y-2 text-base md:text-lg">
              {lines.map((line, idx) => (
                <p key={idx}>{line.trim()}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
