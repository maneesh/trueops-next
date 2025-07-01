'use client';

import Image from 'next/image';

const DevOpsHero = () => {
  return (
    <section
      className="bg-cover bg-no-repeat py-10 px-4"
      style={{ backgroundImage: "url('/images/trueOpsTrainingbg.jpg')" }}
    >
      <div className="flex flex-col items-center justify-center md:flex-row lg:space-x-20 xl:space-x-40">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-2">Launch your</h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Career in</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-lime-500 py-2">DevOPS</h3>
        </div>

        {/* Image Section */}
        <div className="mt-6 md:mt-0">
          <Image
            src="/images/truOpsTraining1.png"
            alt="DevOps Training"
            width={240}
            height={240}
            className="w-48 sm:w-60 md:w-72 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default DevOpsHero;
