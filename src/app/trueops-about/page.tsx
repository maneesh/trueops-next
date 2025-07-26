import React from 'react';

import About from '@/components/about/About';

interface ContentItem {
  type: 'text' | 'image';
  data: string;
  name?: string;
}

interface Section {
  name: string;
  contents: ContentItem[];
}

interface PageResponse {
  sections?: Section[];
}


async function getData() {
  const domain = 'Truops.in';
  const page = 'About';

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/static?domain=${domain}&page=${encodeURIComponent(page)}`,
    { cache: 'no-cache' }
  );
  
  

  if (!res.ok) {
    throw new Error('Failed to fetch page data');
  }


  const data: PageResponse = await res.json();
  const all = data?.sections ?? [];
  //console.log("this is about data",data);

  return {
    header: all.find((s) => s.name === 'Header')?.contents || [],
    header2: all.find((s) => s.name === 'Header2')?.contents || [],
    Middle: all.find((s) => s.name === 'Middle')?.contents || [],
    lowerMiddle: all.find((s) => s.name === 'LowerMiddle')?.contents || [],
  };
}

export default async function AboutPage() {
  const sections = await getData();

  return (
    <>
      <About sections={sections} />
    </>
  );
}
