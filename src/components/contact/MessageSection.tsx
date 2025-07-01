'use client';

import Image from 'next/image';
import React from 'react';

const MessageSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-24 px-5 py-10">
      {/* Left Text Section */}
      <div className="flex flex-col justify-center items-center md:items-start md:justify-start text-center md:text-left">
        <div>
          <h2 className="font-bold text-2xl">Send Us a Message</h2>
          <div className="h-[2px] bg-gray-300 w-20 mt-5 mb-3" />
        </div>

        <p>Lorem ipsum dolor sit amet, consectet</p>
        <p>ur adipiscing elit, sed do eiusmod tempor</p>
        <p>incididunt ut labore Lorem ipsum dolor sit</p>
        <p>amet, consectet ur adipiscing elit, sed do</p>
        <p>eiusmod tempor incididunt ut labore</p>

        <div className="mt-6">
          <h2 className="font-bold text-2xl">About</h2>
          <div className="h-[2px] bg-gray-300 w-20 mt-5 mb-5" />
          <p>Lorem ipsum dolor sit amet, consectet</p>
          <p>ur adipiscing elit, sed do eiusmod tempor</p>
          <p>incididunt ut labore Lorem ipsum dolor sit</p>
          <p>amet, consectet ur adipiscing elit, sed do</p>
          <p>eiusmod tempor incididunt ut labore</p>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex justify-center items-center">
        <Image
          src="/images/TrueOps ( contact us ).jpg"
          alt="TrueOps Contact"
          width={240}
          height={280}
          className="w-60 h-[280px] object-cover rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default MessageSection;
