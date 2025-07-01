'use client';

import Image from 'next/image';

const DevOpsTalentSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-10 px-6 md:px-20 py-20 text-center lg:text-left">
      <div className="mx-auto">
        <Image
          src="/images/trueops12.jpg"
          alt="DevOps Talent"
          width={400}
          height={300}
          className="h-72 w-auto object-cover mx-auto"
        />
      </div>

      <div className="text-black max-w-lg mx-auto">
        <h3 className="text-4xl font-bold">Startan</h3>
        <h3 className="text-4xl font-bold mt-2">DevOPS Talents</h3>
        <p className="text-lg mt-4 text-justify">
          Create advanced projects under guidance by the top 1% of tech professionals.
        </p>
        <button className="mt-6 px-6 py-2 bg-[#5bc033] text-white hover:bg-lime-700 hover:text-black rounded font-semibold transition duration-300">
          Hire Now
        </button>
      </div>
    </section>
  );
};

export default DevOpsTalentSection;
