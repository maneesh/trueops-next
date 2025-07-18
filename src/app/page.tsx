import Head from 'next/head';
import '@/lib/env';

import DevOpsSection from '@/components/home/DevOpsSection';
import DevOpsTalentBlock from '@/components/home/DevOpsTalentBlock';
import DevOpsTalentSection from '@/components/home/DevOpsTalentSection';
import Hero from '@/components/home/Hero';

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
  const page = 'Home';

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/static?domain=${domain}&page=${encodeURIComponent(page)}`, {
    cache: 'no-store'
  });
  if (!res.ok) {
    throw new Error('Failed to fetch page data');
  }

 const data: PageResponse = await res.json();
  const all = data?.sections ?? [];

  return {
    navbar: all.find((s) => s.name === 'Navbar')?.contents || [],
    header: all.find((s) => s.name === 'Header')?.contents || [],
    header2: all.find((s) => s.name === 'Header2')?.contents || [],
    Middle: all.find((s) => s.name === 'Middle')?.contents || [],
    lowerMiddle: all.find((s) => s.name === 'LowerMiddle')?.contents || [],
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
        <Hero data1={sections.header} />
        <DevOpsSection data={sections.header2} />
        <DevOpsTalentSection data={sections.Middle} />
        <DevOpsTalentBlock data={sections.lowerMiddle} />
      </section>
    </main>
  );
}
