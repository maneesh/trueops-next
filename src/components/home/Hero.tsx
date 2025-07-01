'use client';

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Layer (white) */}
      <div className="absolute inset-0 bg-white" />

      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/trueops_6.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-24 py-16 flex flex-col lg:flex-row items-center justify-between gap-10 min-h-screen">
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white">We Are</h1>
          <h1 className="text-4xl md:text-6xl font-bold text-[#5bc033] mt-2">
            TRUE DevOPS
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold mt-2 text-white">
            Professionals
          </h1>

          <div className="mt-4 space-y-2 text-lg text-white">
            <p>Create advanced projects under guidance by the top 1%</p>
            <p>Gain expertise in the latest technologies through hands</p>
            <p>Secure your desired position at premier tech companies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
