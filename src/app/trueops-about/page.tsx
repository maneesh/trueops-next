"use client";
import React from 'react';

import About from '@/components/about/About';
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
  header2: any[];
  Middle: any[];
  lowerMiddle: any[];
  footer: any[];
}


const AboutPage: React.FC = () => {
  const [sections, setSections] = React.useState<SectionsState>({
    header: [],
    header2: [],
    Middle: [],
    lowerMiddle: [],
    footer: []
  });

  const domain = 'Truops.in';
  const page = 'About';

  React.useEffect(() => {
    const fetchPageData = async () => {
      try {
        const res = await axiosInstance.get('/static', {
          params: { domain, page }
        });

        const all: Section[] = res.data.sections;
        // Set state by finding sections by name
        setSections({
          header: all.find(s => s.name === 'Header')?.contents || [],
          header2: all.find(s => s.name === 'Header2')?.contents || [],
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
  return <About sections={sections} />;
};

export default AboutPage;
