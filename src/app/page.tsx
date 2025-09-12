export const metadata = {
  title: 'truops.com',
  description: 'This is the page description',
};
import Head from 'next/head';
import React from 'react';
import '@/lib/env';

import DevOpsSection from '@/components/home/DevOpsSection';
import DevOpsTalentBlock from '@/components/home/DevOpsTalentBlock';
import DevOpsTalentSection from '@/components/home/DevOpsTalentSection';
import Hero from '@/components/home/Hero';
import { ContentItem } from '@/components/home/Hero';


// interface SectionItemComponent {
//   name: string;
//   type: 'text' | 'media';
//   data: string;
//   media_ref?: string;

// }



interface SectionData {
  component: string;
  contents: ContentItem[]; // Better than `any` if you don't know yet
}



async function getData() {
  const domain = 'truops.in';
  const group = 'Home';

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/cms-static?domain=${domain}&group=${group}`;
 

  const res = await fetch(url, {
    next: { revalidate: 60 },
  });


  if (!res.ok) throw new Error('Failed to fetch group data');

  const data: SectionData[] = await res.json();

const hero = data.find((s) => s.component === 'Header');
  const DevOpsSection = data.find((s) => s.component === 'Header2');
  const DevOpsTalentSection = data.find((s) => s.component === 'Middle');
  const DevOpsTalentBlock = data.find((s)=>s.component === 'LowerMiddle')

  return {
    HeroSection: hero?.contents || [],
    DevOps: DevOpsSection?.contents || [],
    DevOpsTalent: DevOpsTalentSection?.contents || [],
   DevOpsTalentBlock:DevOpsTalentBlock?.contents || [],
  };
}



 
export default async function HomePage() {
  const sections = await getData();
  
  return (
    <main>
      <Head>
        <title>TrueOps - DevOps & Talent Solutions</title>
        <meta name="description" content="TrueOps - Delivering DevOps excellence and top-tier talent solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="bg-white">
        <Hero data1={sections. HeroSection} />
        <DevOpsSection data={sections. DevOps} />
        <DevOpsTalentSection data={sections. DevOpsTalent} />
        <DevOpsTalentBlock data={sections.DevOpsTalentBlock} />
      </section>
    </main>
  );
}



