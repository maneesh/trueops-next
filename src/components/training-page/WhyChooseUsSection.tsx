'use client';

import Image from 'next/image';

const WhyChooseUsSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center my-20 md:space-x-24 gap-10 px-4">
        <div className="max-w-xl text-center items-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Lorem Ipsum</h1>
          <p className="leading-relaxed text-sm sm:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          <button className="bg-lime-500 text-white px-6 py-2 rounded mt-6 hover:bg-lime-600 transition duration-200">
            More
          </button>
        </div>

        <div className="w-96 h-[26rem] border-2 border-black rounded-lg rotate-[-3deg] p-1">
          <Image
            src="/images/TrueOpsTrainingR.jpg"
            alt="Training"
            width={384}
            height={416}
            className="w-full h-full rounded-lg rotate-[3deg]"
          />
        </div>


      </section>

      {/* Why Choose Us Title */}
      <section className="flex items-center justify-center py-10">
        <h1 className="text-3xl sm:text-5xl font-bold text-center">Why Choose Us?</h1>
      </section>

      {/* Features Section */}
      <div className="flex flex-col md:flex-row md:space-x-16 justify-center items-center mb-20 px-4 gap-10">
        <div className="text-center">
          <Image src="/images/TrueOpsTraining5.jpg" alt="Live Projects" width={150} height={150} />
          <p className="mt-2 text-lg font-medium">Live Projects</p>
        </div>
        <div className="text-center">
          <Image src="/images/TrueOpsTraining4.jpg" alt="Cloud Lab" width={150} height={150} />
          <p className="mt-2 text-lg font-medium">24x7 Cloud Lab</p>
        </div>
        <div className="text-center">
          <Image src="/images/TrueOpsTraining3.jpg" alt="Industry Mentors" width={150} height={150} />
          <p className="mt-2 text-lg font-medium">
            Industry <br /> Mentors
          </p>
        </div>
        <div className="text-center">
          <Image src="/images/TrueOpsTraining2.jpg" alt="Placement Guarantee" width={150} height={150} />
          <p className="mt-2 text-lg font-medium">
            Placement <br /> Guarantee
          </p>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsSection;
