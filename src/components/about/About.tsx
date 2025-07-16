// components/about/About.tsx
import AboutSection from '@/components/about/AboutSection';
import DevOpsSection from '@/components/about/DevOpsSection';

interface ContentItem {
  type: 'text' | 'image';
  data: string;
  name?: string;
}

interface Props {
  sections: {
    header: ContentItem[];
    header2: ContentItem[];
    Middle: ContentItem[];
    lowerMiddle: ContentItem[];
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
        }}
      />
    </>
  );
}
