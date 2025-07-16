
import ContactSection from '@/components/contact/ContactSection';
import MessageSection from '@/components/contact/MessageSection';

interface ContentItem {
  type: 'text' | 'image';
  data: string;
  name?: string;
}

interface Props {
  sections: {
    header: ContentItem[];
    Middle: ContentItem[];
    lowerMiddle: ContentItem[];
    footer: ContentItem[];
  };
}

export default function Contact({ sections }: Props) {
  return (
    <>
      <ContactSection
        data={{
          header: sections.header,
          Middle: sections.Middle,
        }}
      />
      <MessageSection data={sections.lowerMiddle} />
    </>
  );
}
