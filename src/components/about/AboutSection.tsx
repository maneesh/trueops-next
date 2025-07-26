'use client';

import Image from 'next/image';
//import bannerImage from '../../../public/images/aboutBanner.png'

interface ContentItem {
  type: string;
  data: string;
  name?: string;
}

interface AboutSectionProps {
  data: ContentItem[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  // Extract contents by type
  const bgImage = data.find(item => item.type === 'image')?.data;
  const secondImage = data.filter(item => item.type === 'image')[1]?.data;
  const textBlock = data.find(item => item.type === 'text')?.data || '';

  const lines = textBlock.split(/(?<=\.)\s|(?<=%)(?=\s)|(?<=[a-z])(?=\s[A-Z])/g);
  //console.log("cloud",textBlock);
  


  return (
    <section
      className="w-full bg-cover bg-no-repeat py-10 px-4"
      style={{
        backgroundImage: `url(${bgImage})`
      }}
    >
      <div className="max-w-6xl mx-auto relative min-h-[60vh] flex flex-col lg:flex-row lg:items-center lg:justify-center">
      
        {/* Image */}
        {secondImage && (
          <div className="flex justify-center lg:justify-start lg:absolute lg:top-10 lg:left-10">
            <Image
              src={secondImage}
              alt="Hero Image"
              width={240}
              height={240}
              className="w-28 md:w-60 object-contain"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div className="flex-1 flex items-center justify-center mt-6 lg:mt-0">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-3xl md:text-5xl font-bold">
              {data.find(item => item.type === 'text')?.name?.split(' ')[0]}{" "}
              <span className="text-lime-500">
                {data.find(item => item.type === 'text')?.name?.split(' ').slice(1).join(' ')}
              </span>
            </h3>

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
