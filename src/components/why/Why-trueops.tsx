import React from 'react';

import Footer from '@/components/home/Footer';
import NavBar from '@/components/home/Navbar';
import HowSection from '@/components/why/HowSection';
import TrainingSection from '@/components/why/TrainingSection';



const WhyTrueOps: React.FC = () => {
  return (
    <>
      <NavBar />
      <TrainingSection />
      <HowSection />
      <Footer />
    </>
  );
};

export default WhyTrueOps;