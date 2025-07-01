import React from 'react';

import AboutSection from '@/components/about/AboutSection';
import DevOpsSection from '@/components/about/DevOpsSection';
import Footer from '@/components/home/Footer';
import NavBar from '@/components/home/Navbar';

const About: React.FC = () => {
  return (
    <>
      <NavBar />
      <AboutSection />
      <DevOpsSection />
      <Footer />
     </>
  );
};

export default About;
