'use client';

import Image from 'next/image';

const DevOpsSection = () => {
  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-between gap-10 px-6 md:px-20 py-20 bg-[url('/image/trueops9.jpg')] bg-cover text-center lg:text-left"
    >
      <div className="max-w-lg text-black mx-auto">
        <h3 className="text-4xl font-bold">
          <span className="text-lime-500">Become</span> a
        </h3>
        <h3 className="text-4xl font-bold mt-4">DevOPS Champion</h3>
        <p className="mt-4 text-lg text-justify">
          Create advanced projects under guidance by the top 1% of tech professionals.
        </p>
        <p className="text-lg mt-2 text-justify">
          Gain expertise in the latest technologies through hands-on experience.
        </p>
        <p className="text-lg mt-2 text-justify">
          Secure your desired position at premier tech companies.
        </p>
      </div>

      <div className="w-full max-w-md mx-auto">
        <Image
          src="/images/trueops11.jpg"
          alt="DevOps"
          width={500}
          height={500}
          className="rounded shadow-lg w-full h-auto"
        />
      </div>
    </section>
  );
};

export default DevOpsSection;
