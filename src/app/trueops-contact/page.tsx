
import React from 'react';
import Contact from '@/components/contact/Contact';

async function getData() {
  const domain = 'Truops.in';
  const page = 'Contact Us';

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/static?domain=${domain}&page=${encodeURIComponent(page)}`,
    {
      cache: 'no-store',
    },
  );
  console.log("Contact page response ::::>", res);
  if (!res.ok) {
    const errorText = await res.text();
    console.error('API error response:', errorText);
    throw new Error('Failed to fetch page data');
  }

  const data = await res.json();
  const all = data?.sections ?? [];
  console.log("All Response ::::>", all);
  return {
    header: all.find((s: any) => s.name === 'Header')?.contents || [],
    Middle: all.find((s: any) => s.name === 'Middle')?.contents || [],
    lowerMiddle: all.find((s: any) => s.name === 'LowerMiddle')?.contents || [],
    footer: all.find((s: any) => s.name === 'Footer')?.contents || [],
  };
}

export default async function TrueOpsContactPage() {
  const sections = await getData();
  console.log("All Section ::::>", sections);
  return <Contact sections={sections} />;
}
