"use client";
import React from 'react';

import Contact from '@/components/contact/Contact';
import axiosInstance from '@/lib/axios';


// Section type
type Section = {
  name: string;
  contents?: any;
  [key: string]: any;
};

// State structure
interface SectionsState {
  header: any[];
  Middle: any[];
  lowerMiddle: any[];
  footer: any[];
}


export default function TrueOpsContactPage() {
  const [sections, setSections] = React.useState<SectionsState>({
    header: [],
    Middle: [],
    lowerMiddle: [],
    footer: []
  });

  const domain = 'Truops.in';
  const page = 'Contact Us';

  React.useEffect(() => {
    const fetchPageData = async () => {
      try {
        const res = await axiosInstance.get('/static', {
          params: { domain, page }
        });

        const all: Section[] = res.data.sections;
        console.log("All data response in contact us ::::>", all);
        // Set state by finding sections by name
        setSections({
          header: all.find(s => s.name === 'Header')?.contents || [],
          Middle: all.find(s => s.name === 'Middle')?.contents || [],
          lowerMiddle: all.find(s => s.name === 'LowerMiddle')?.contents || [],
          footer: all.find(s => s.name === 'Footer')?.contents || [],
        });
      } catch (error) {
        console.error('Error fetching TrueOps page data:', error);
      }
    };

    fetchPageData();
  }, []);

  return (
    <Contact sections={sections} />
  );
}