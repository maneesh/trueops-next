
import HowSection from '@/components/why/HowSection';
import TrainingSection from '@/components/why/TrainingSection';


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
  const page = 'WhyTruops';

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/static?domain=${domain}&page=${encodeURIComponent(page)}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch page data');
  }

  const data: PageResponse = await res.json();
  const all = data?.sections ?? [];

  return {
    header: all.find((s) => s.name === 'Header')?.contents || [],
    Middle: all.find((s) => s.name === 'Middle')?.contents || [],
  };
}

export default async function WhyTrueOps() {
  const sections = await getData();

  return (
    <>
      <TrainingSection trainingSectionData={sections.header} />
      <HowSection MiddleSectionData={sections.Middle} />
    </>
  );
};
