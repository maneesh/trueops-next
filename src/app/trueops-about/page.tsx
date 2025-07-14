import About from '@/components/about/About'; 
import React from 'react';

async function getData() {
  const domain = 'Truops.in';
  const page = 'About';

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/static?domain=${domain}&page=${encodeURIComponent(page)}`,
    { cache: 'force-cache' }
  );

  if (!res.ok) {
    const errorText = await res.text();
    console.error('API error response:', errorText);
    throw new Error('Failed to fetch page data');
  }

  const data = await res.json();
  const all = data?.sections ?? [];

  return {
    header: all.find((s: any) => s.name === 'Header')?.contents || [],
    header2: all.find((s: any) => s.name === 'Header2')?.contents || [],
    Middle: all.find((s: any) => s.name === 'Middle')?.contents || [],
    lowerMiddle: all.find((s: any) => s.name === 'LowerMiddle')?.contents || [],
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
