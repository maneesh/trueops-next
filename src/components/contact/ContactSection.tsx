'use client';

import Image from 'next/image';
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[600px] relative">
        <Image
          src="/images/Untitled-1.jpg"
          alt="Contact Banner"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      <section className="flex flex-col md:flex-row items-center justify-center px-5 md:px-10 mt-[-5rem] z-10 relative">
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl flex flex-col md:flex-row items-center justify-center gap-10 p-6 md:p-10">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="font-bold text-[#60bb46] text-3xl mb-4">CONTACT US</h2>
            <div>
              <p className="ml-0 md:ml-1">Welcome to TrueOps where we</p>
              <p className="ml-0 md:ml-2">fuel the ambition of learning,</p>
              <p className="ml-0 md:ml-4">mentorship, and real-world</p>
              <p className="ml-0 md:ml-6">experience.</p>
            </div>
          </div>

          {/* Right Form */}
          <div className="flex-1 w-full space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-[#60bb46] border-2 rounded-lg p-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border-[#60bb46] border-2 rounded-lg p-2"
            />
            <textarea
              placeholder="Message"
              className="w-full border-[#60bb46] border-2 rounded-lg p-2"
              rows={4}
            />
            <button className="bg-[#60bb46] text-white font-bold rounded-lg py-2 px-4 hover:bg-[#4aa538]">
              Send
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
