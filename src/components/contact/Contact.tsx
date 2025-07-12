import React from 'react';
import ContactSection from '@/components/contact/ContactSection';
import MessageSection from '@/components/contact/MessageSection';
import Footer from '@/components/home/Footer';
import NavBar from '@/components/home/Navbar';

// Define prop types
interface SectionsState {
  header: any[];
  Middle: any[];
  lowerMiddle: any[];
  footer: any[];
}

interface ContactProps {
  sections: SectionsState;
}

const Contact: React.FC<ContactProps> = ({ sections }) => {
  return (
    <>
      <NavBar />
      <ContactSection data={{
        header: sections.header,
        Middle: sections.Middle,
      }} />
      <MessageSection data={sections.lowerMiddle} />
      <Footer />
    </>
  );
};

export default Contact;
