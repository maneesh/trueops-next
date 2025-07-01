import React from 'react';

import ContactSection from '@/components/contact/ContactSection';
import MessageSection from '@/components/contact/MessageSection';
import Footer from '@/components/home/Footer';
import NavBar from '@/components/home/Navbar';



const Contact: React.FC = () => {
  

  return (
    <>
    <NavBar />
    <ContactSection />
    <MessageSection />
    <Footer />
    </>
  );
};

export default Contact;