import React from 'react';

import Footer from '@/components/home/Footer';
import NavBar from '@/components/home/Navbar';
import DevOpsHero from '@/components/training-page/DevOpsHero';
import WhyChooseUsSection from '@/components/training-page/WhyChooseUsSection';



const Training: React.FC = () => {
  return (
    <>
      <NavBar />
      <DevOpsHero />
      <WhyChooseUsSection />
      <Footer />
    </>
  );
};

export default Training;