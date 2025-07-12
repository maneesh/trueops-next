import React from 'react';
import AboutSection from '@/components/about/AboutSection';
import DevOpsSection from '@/components/about/DevOpsSection';
import Footer from '@/components/home/Footer';
import NavBar from '@/components/home/Navbar';

interface AboutProps {
  sections: {
    header: any[];
    header2: any[];
    Middle: any[];
    lowerMiddle: any[];
  };
}

const About: React.FC<AboutProps> = ({ sections }) => {
  return (
    <>
      <NavBar />

      <AboutSection data={sections.header} />
      <DevOpsSection
        data={{
          header2: sections.header2,
          Middle: sections.Middle,
          lowerMiddle: sections.lowerMiddle,
        }} />

      <Footer />

    </>
  );
};

export default About;
