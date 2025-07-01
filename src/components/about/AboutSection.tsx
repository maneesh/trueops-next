'use client';

import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="w-full bg-[url('/images/trueops_8.jpg')] bg-cover bg-no-repeat py-10 px-4">
      <div className="max-w-6xl mx-auto relative min-h-[60vh] flex flex-col lg:flex-row lg:items-center lg:justify-center">
        {/* Image */}
        <div className="flex justify-center lg:justify-start lg:absolute lg:top-10 lg:left-10">
          <Image
            src="/images/TrueOpsaboutus.jpg"
            alt="Hero Image"
            width={240}
            height={240}
            className="w-28 md:w-60 object-contain"
            priority
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex items-center justify-center mt-6 lg:mt-0">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-3xl md:text-5xl font-bold">
              About <span className="text-lime-500">TrueOps</span>
            </h3>
            <div className="mt-6 space-y-2 text-base md:text-lg">
              <p>Create advanced projects under guidance by the top 1%</p>
              <p>Gain expertise in the latest technologies</p>
              <p>Secure your desired position at premier tech companies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
