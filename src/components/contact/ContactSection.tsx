'use client';

import Image from 'next/image';
import React from 'react';

type ContactSectionProps = {
  data: {
    header: Array<{ type: string; data: string }>;
    Middle: Array<{ type: string; data: string; name?: string }>;
  };
};

const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
  const imageUrl = data.header.find(item => item.type === 'image')?.data;

  // Split Middle into useful sections
  const texts = data.Middle.filter(item => item.type === 'text').map(item => item.data);
  const heading = data.Middle.find(item => item.name === 'CONTACT US')?.name;
  const intro1 = texts[0];
  const intro2 = texts[1];
  const intro3 = texts[2];
  const intro4 = texts[3];
  const allowed =['name', 'email', 'message'];
  const placeholders = data.Middle.filter(item =>allowed.includes(item.data?.trim().toLowerCase()));
  const buttonLabel = data.Middle.find(item => item.data.toLowerCase() === 'send')?.data || 'Send';
  //console.log("info",texts);
  

  return (
    <div className="w-full">
      {imageUrl && (
        <div className="relative w-full h-[300px]">
          <Image
            src={imageUrl}
            alt="Contact Banner"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      )}

      <section className="flex flex-col md:flex-row items-center justify-center px-5 md:px-10 mt-[-5rem] z-10 relative">
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl flex flex-col md:flex-row items-center justify-center gap-10 p-6 md:p-10">
          {/* Left Content */}
         <div className="flex-1 text-center">
  <h2 className="font-extrabold text-[#60bb46] text-3xl md:text-4xl mb-4 ">{heading || 'CONTACT US'}</h2>
  <p>{intro1}</p>
  <p>{intro2}</p>
  <p>{intro3}</p>
  <p>{intro4}</p>
</div>


          {/* Right Form */}
          <div className="flex-1 w-full space-y-4">
            {placeholders.map((item, idx) => (
              <React.Fragment key={idx}>
                {item.data.toLowerCase() === 'message' ? (
                  <textarea
                    placeholder={item.data}
                    className="w-full border-[#60bb46] border-2 rounded-lg p-2"
                    rows={4}
                  />
                ) : (
                  <input
                    type={item.data.toLowerCase() === 'email' ? 'email' : 'text'}
                    placeholder={item.data}
                    className="w-full border-[#60bb46] border-2 rounded-lg p-2"
                  />
                )}
              </React.Fragment>
            ))}
            <button className="bg-[#60bb46] text-white font-bold rounded-lg py-2 px-4 hover:bg-[#4aa538]">
              {buttonLabel}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
