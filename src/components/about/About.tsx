
import AboutSection from '@/components/about/AboutSection';
import DevOpsSection from '@/components/about/DevOpsSection';

interface ContentItem {
  type: 'text' | 'media';
  data: string;
  name?: string;
  media_ref: string;
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
  // const image = sections.header.find((item) => item.type === 'media')?.media_ref || '';
  // const texts = sections.header.filter((item) => item.type === 'text').map((item) => item.data);
// console.log("this is sections",sections)
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
