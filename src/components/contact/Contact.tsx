// components/contact/Contact.tsx
import ContactSection from '@/components/contact/ContactSection';
import MessageSection from '@/components/contact/MessageSection';
import Footer from '@/components/home/Footer';
import NavBar from '@/components/home/Navbar';

interface Props {
  sections: {
    header: any[];
    Middle: any[];
    lowerMiddle: any[];
    footer: any[];
  };
}

export default function Contact({ sections }: Props) {
  return (
    <>
      <NavBar />
      <ContactSection
        data={{
          header: sections.header,
          Middle: sections.Middle,
        }}
      />
      <MessageSection data={sections.lowerMiddle} />
      <Footer />
    </>
  );
}
