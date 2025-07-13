// components/about/About.tsx
import AboutSection from '@/components/about/AboutSection';
import DevOpsSection from '@/components/about/DevOpsSection';


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
      <AboutSection data={sections.header} />
      <DevOpsSection
        data={{
          header2: sections.header2,
          Middle: sections.Middle,
          lowerMiddle: sections.lowerMiddle,
        }} />
    </>
  );
}
