import DevOpsHero from '@/components/training-page/DevOpsHero';
import WhyChooseUsSection from '@/components/training-page/WhyChooseUsSection';

interface ContentItem {
  type: 'text' | 'image';
  data: string;
  name: string;
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
  const page = 'UpcomingEvent';
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/static?domain=${domain}&page=${encodeURIComponent(page)}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch page data');
  }

  const data: PageResponse = await res.json();
  const all = data?.sections ?? [];

  return {
    devOpsHero: all.find((s) => s.name === 'Header')?.contents || [],
    whyChooseUsSection: all.find((s) => s.name === 'Middle')?.contents || [],
  };
}



// Training.tsx
export default async function Training() {
  const sections = await getData();
  return (
    <>
      <DevOpsHero devopsSectionData={sections.devOpsHero} />
      <WhyChooseUsSection whyChooseUsSectionData={sections.whyChooseUsSection} />
    </>
  );
}

