import Image from "next/image";

const TrainingSection = () => {
  return (
    <>
    <section className="w-full bg-[url('/images/banner.jpg')] bg-cover bg-no-repeat bg-center  pt-10 pb-32">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center  gap-10 lg:gap-80">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold py-2">From</h1>
          <h2 className="text-4xl sm:text-5xl font-bold">Novice to</h2>
          <h3 className="text-4xl sm:text-5xl font-bold py-2">Cloud Champion</h3>
          <p className="text-sm sm:text-base mt-2">
            Create advanced projects under guidance <br />
            by the top 1%. Gain expertise in the latest technologies <br />
            through hands-on experience.
          </p>
        </div>
        {/* <div className="flex justify-center">
          <Image
            src="/images/TrueOpsHIW4."
            alt="Training"
            width={240}
            height={240}
            className="w-60 object-contain"
          />
        </div> */}
      </div>
    </section>
      <section className="flex items-center justify-center py-10 px-4">
      <button className="mt-6 px-6 py-4 bg-[#5bc033] text-white hover:bg-lime-700 hover:text-black rounded font-bold text-xl sm:text-2xl transition-all duration-300">
        How It Works
      </button>
    </section>
    </>
  );
};

export default TrainingSection;
