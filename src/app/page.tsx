'use client';

import Head from 'next/head';
import * as React from 'react';
import axiosInstance from '@/lib/axios';
import '@/lib/env';

import DevOpsSection from '@/components/home/DevOpsSection';
import DevOpsTalentBlock from '@/components/home/DevOpsTalentBlock';
import DevOpsTalentSection from '@/components/home/DevOpsTalentSection';
import Footer from '@/components/home/Footer';
import Hero from '@/components/home/Hero';
import NavBar from '@/components/home/Navbar';

// Section type
type Section = {
  name: string;
  contents?: any;
  [key: string]: any;
};

// State structure
interface SectionsState {
  navbar: any[];
  header: any[];
  header2: any[];
  Middle: any[];
  lowerMiddle: any[];
  footer: any[];
}

export default function HomePage() {
  const [sections, setSections] = React.useState<SectionsState>({
    navbar: [],
    header: [],
    header2: [],
    Middle: [],
    lowerMiddle: [],
    footer: []
  });

  const domain = 'Truops.in';
  const page = 'Home';

  React.useEffect(() => {
    const fetchPageData = async () => {
      try {
        const res = await axiosInstance.get('/static', {
          params: { domain, page }
        });

        const all: Section[] = res.data.sections;
        // Set state by finding sections by name
        setSections({
          navbar: all.find(s => s.name === 'Navbar')?.contents || [],
          header: all.find(s => s.name === 'Header')?.contents || [],
          header2: all.find(s => s.name === 'Header2')?.contents || [],
          Middle: all.find(s => s.name === 'Middle')?.contents || [],
          lowerMiddle: all.find(s => s.name === 'LowerMiddle')?.contents || [],
          footer: all.find(s => s.name === 'Footer')?.contents || []
        });
      } catch (error) {
        console.error('Error fetching TrueOps page data:', error);
      }
    };

    fetchPageData();
  }, []);

  return (
    <main>
      <Head>
        <title>TrueOps - DevOps & Talent Solutions</title>
        <meta name="description" content="TrueOps - Delivering DevOps excellence and top-tier talent solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="bg-white">
        <NavBar />
        <Hero data1={sections.header}  />
        <DevOpsSection data={sections.header2} />
        <DevOpsTalentSection data={sections.Middle} />
        <DevOpsTalentBlock data={sections.lowerMiddle} />
        <Footer data={sections.footer} />
      </section>
    </main>
  );
}
