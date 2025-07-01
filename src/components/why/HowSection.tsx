'use client';

import Image from 'next/image';
import React from 'react';

const HowSection: React.FC = () => {
  return (
    <>
      {/* Section 1: DevOps Learning Block */}
      <section className="relative flex flex-col md:flex-row py-20 text-center md:text-left gap-20">
        <div className="md:ml-60 flex flex-col items-center md:items-start px-4">
          <h1 className="md:text-5xl text-2xl font-bold py-2">ASSIGNMENT &</h1>
          <h2 className="md:text-5xl text-2xl font-bold">PROJECT BASED</h2>
          <h3 className="md:text-5xl text-2xl font-bold py-2">DEVOPS</h3>

          <div className="w-max border-[3px] border-[#5cc034] px-2 rounded">
            <h3 className="text-xl md:text-2xl">LEARNING</h3>
          </div>

          <p className="mt-4 text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur ad <br />
            do eiusmod tempor incididunt ut labore Lorem <br />
            sit amet, consectetur adipiscing elit, sed do <br />
            incididunt ut labore
          </p>

          <div className="flex md:flex-row flex-col items-center justify-center mt-10 gap-5">
            <div className="w-max border-[3px] border-[#5cc034] px-4 py-2 rounded">
              <h3 className="text-xl md:text-2xl">+5k Students</h3>
            </div>
            <div className="w-max border-[3px] border-[#5cc034] px-4 py-2 rounded">
              <h3 className="text-xl md:text-2xl">
                +3k Students <br /> Got Placed
              </h3>
            </div>
          </div>
        </div>

        <div className="lg:w-[750px] lg:h-[480px] bg-[url('/images/TrueOpsHIW.jpg')] bg-cover bg-center absolute right-0 rounded-l-3xl hidden md:block"></div>
      </section>

      {/* Section 2: Mentor Highlight */}
      <section className="flex justify-center text-center py-20 px-4">
        <div>
          <Image
            src="/images/TrueOpsHIW2.jpg"
            alt="Mentor"
            width={600}
            height={400}
            className="mx-auto"
          />
          <h1 className="mt-6">
            <span className="text-lime-500 text-3xl font-semibold">
              MENTOR FROM THE SOFTWARE INDUSTRY WITH MORE THAN
            </span>
          </h1>
          <h1 className="text-4xl font-semibold mt-2">+10 YEARS OF EXPERTISE</h1>
        </div>
      </section>

      {/* Section 3: Why Mentorship Matters */}
      <section className="pb-36 flex justify-center text-center md:text-left px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold py-3">WHY MENTORSHIP MATTERS</h1>
          <p className="text-sm sm:text-base leading-relaxed mb-6">
            Navigating the intricate landscape of coding is not a solitary
            endeavor. Our Mentorship Program <br />
            pairs you with experienced developers who have amassed more than 5 years
            of expertise in <br />
            the industry. These mentors aren't just instructors; they are your
            guides, providing insights, strategies.
          </p>
          <Image
            src="/images/TrueOpsHIW3.jpg"
            alt="Why Mentorship Matters"
            width={700}
            height={400}
            className="mx-auto lg:ml-56"
          />
        </div>
      </section>
    </>
  );
};

export default HowSection;
