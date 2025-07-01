'use client';

import Image from 'next/image';

const DevOpsSection = () => {
  return (
    <>
      {/* DevOps Training Section */}
      <section className="flex flex-col md:flex-row items-center justify-center py-20 px-6 space-y-10 md:space-y-0 md:space-x-20">
        <div className="text-center md:text-left">
          <h2 className="text-5xl font-bold">
            <span className="text-lime-500">DEVOPS</span>
            <br /> TRAINING
          </h2>
          <p className="mt-4">
            Create advanced projects under <br />
            guidance by the top 1% of tech <br />
            professionals.
          </p>
          <button className="bg-lime-500 text-white px-6 py-2 rounded mt-6">Apply Now</button>
        </div>
        <div className="flex space-x-6">
          <Image
            className="w-40 md:w-60"
            src="/images/TrueOps aboutus 1.jpg"
            alt="DevOps Training"
            width={240}
            height={240}
          />
        </div>
      </section>

      {/* Why DevOps Section */}
      <section className="flex flex-col md:flex-row items-center justify-center py-20 px-6 space-y-10 md:space-y-0 md:space-x-12">
        <div>
          <Image
            className="w-40 md:w-60"
            src="/images/Trueops ( about us )2.jpg"
            alt="Why DevOps"
            width={240}
            height={240}
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-5xl font-bold">
            <span className="text-lime-500">WHY</span>
            <br /> DEVOPS?
          </h2>
          <p className="mt-4">
            Create advanced projects <br />
            under guidance by the top 1% of tech <br />
            professionals.
          </p>
        </div>
      </section>

      {/* Upcoming Batch Section */}
      <section className="bg-[#cdecc1] py-10 text-center md:text-left px-4 md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h3 className="text-xl font-bold mb-4 md:mb-0">UPCOMING BATCHES</h3>
          <button className="bg-lime-500 text-white px-6 py-3 rounded font-bold">New Batch Starting Soon</button>
        </div>
      </section>

      {/* Training Format Section */}
      <section className="text-center py-10">
        <h3 className="text-2xl font-bold">TRAINING FORMAT</h3>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10 mt-10">
          <div>
            <Image
              className="w-64 md:w-80"
              src="/images/TrueOps ( about us )3.jpg"
              alt="Online Format"
              width={320}
              height={320}
            />
            <h3 className="text-xl font-bold mt-2">LOREM IPSUM</h3>
            <button className="bg-lime-500 text-white px-6 py-2 rounded mt-5">ONLINE</button>
          </div>
          <div>
            <Image
              className="w-64 md:w-80"
              src="/images/TrueOps ( about us )4.jpg"
              alt="Offline Format"
              width={320}
              height={320}
            />
            <h3 className="text-xl font-bold mt-2">LOREM IPSUM</h3>
            <button className="bg-lime-500 text-white px-6 py-2 rounded mt-5">OFFLINE</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DevOpsSection;
