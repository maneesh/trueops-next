'use client';

import React, { useEffect, useState } from 'react';
import ContactSection from '@/components/contact/ContactSection';
import MessageSection from '@/components/contact/MessageSection';


interface SectionsState {
  header: any[];
  Middle: any[];
  lowerMiddle: any[];
  footer: any[];
}

const Contact: React.FC = () => {
  const [sections, setSections] = useState<SectionsState>({
    header: [],
    Middle: [],
    lowerMiddle: [],
    footer: [],
  });

  useEffect(() => {
    async function getData() {
      try {
        const domain = 'Truops.in';
        const page = 'Contact Us';

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/static?domain=${domain}&page=${encodeURIComponent(page)}`,
          {
            cache: 'no-store',
          },
        );

        if (!res.ok) {
          const errorText = await res.text();
          console.error('API error response:', errorText);
          throw new Error('Failed to fetch page data');
        }

        const data = await res.json();
        const all = data?.sections ?? [];

        setSections({
          header: all.find((s: any) => s.name === 'Header')?.contents || [],
          Middle: all.find((s: any) => s.name === 'Middle')?.contents || [],
          lowerMiddle: all.find((s: any) => s.name === 'LowerMiddle')?.contents || [],
          footer: all.find((s: any) => s.name === 'Footer')?.contents || [],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getData();
  }, []);

  return (
    <>
      <ContactSection data={{
        header: sections.header,
        Middle: sections.Middle,
      }} />
      <MessageSection data={sections.lowerMiddle} />
    </>
  );
};

export default Contact;
