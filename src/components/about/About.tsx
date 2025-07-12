// components/about/About.tsx
import AboutSection from '@/components/about/AboutSection';
import DevOpsSection from '@/components/about/DevOpsSection';
import Footer from '@/components/home/Footer';
import NavBar from '@/components/home/Navbar';

interface Props {
  sections: {
    header: any[];
    header2: any[];
    Middle: any[];
    lowerMiddle: any[];
  };
}

export default function About({ sections }: Props) {
  return (
    <>
      <NavBar />
      <AboutSection data={sections.header} />
      <DevOpsSection
        data={{
          header2: sections.header2,
          Middle: sections.Middle,
          lowerMiddle: sections.lowerMiddle,
        }}
      />
      <Footer />
    </>
  );
}
